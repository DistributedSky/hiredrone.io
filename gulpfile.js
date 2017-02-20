//load plugins
var gulp             = require('gulp'),
  merge            = require('merge-stream'),
	compass          = require('gulp-compass'),
	autoprefixer     = require('gulp-autoprefixer'),
	minifycss        = require('gulp-minify-css'),
	uglify           = require('gulp-uglify'),
	rename           = require('gulp-rename'),
	concat           = require('gulp-concat'),
	jade             = require('gulp-jade'),
	iconfont         = require('gulp-iconfont'),
	iconfontCss      = require('gulp-iconfont-css'),
	livereload       = require('livereload'),
	svgSprite        = require("gulp-svg-sprite"),
	svg2png          = require('gulp-svg2png'),
	svgo             = require('imagemin-svgo'),
	ttf2eot          = require('gulp-ttf2eot'),
	ttf2woff         = require('gulp-ttf2woff');
	// ttf2woff2        = require('gulp-ttf2woff2'),
  // rgbapng          = require('gulp-rgbapng');

var runTimestamp = Math.round(Date.now()/1000);
var fontName = 'CustomIcons';

server = livereload.createServer();

//styles
gulp.task('styles', function() {
	return gulp.src(['app/styles/*.scss'])
		.pipe(compass({
			// project: 'dist/assets',
			css: 'dist/assets/css',
			sass: 'app/styles/',
			image: 'dist/assets/i',
			font: 'dist/assets/fonts'
		}))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('dist/assets/css'))
	    // .pipe(rgbapng())
	    .pipe(gulp.dest('dist/assets/css'))
			.pipe(rename({ suffix: '.min' }))
			.pipe(minifycss({
	      compatibility: 'ie8',
	      aggressiveMerging: false
	    }))
		.pipe(gulp.dest('dist/assets/css'));
		// .pipe(livereload({ start: true }));
});

//scripts
gulp.task('scripts', function() {
	return gulp.src(['app/scripts/plugins/*.js', 'app/scripts/app.js'])
		.pipe(concat('de.js'))
		.pipe(gulp.dest('dist/assets/js'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('dist/assets/js'));
		// .pipe(livereload({ start: true }));
});

//templates
gulp.task('templates', function() {
  return gulp.src('app/pages/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('dist/'));
    // .pipe(livereload({ start: true }));
});

//iconfonts
gulp.task('iconfont', function(){
  gulp.src(['app/fonticons/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      fontPath: '../fonts/',
      path: 'app/styles/templates/_iconsTemplate.scss',
      targetPath: '../../../app/styles/utilities/_icons.scss'
    }))
    .pipe(iconfont({
      fontName: fontName,
      normalize: true,
      appendUnicode: true,
      fontHeight: 1001,
      // timestamp: runTimestamp,
      // appendCodepoints: true,
      formats: ['svg', 'ttf', 'eot', 'woff', 'woff2']
     }))
    .pipe(gulp.dest('dist/assets/fonts'));
    // .pipe(livereload());
});

//svg and png sprites
gulp.task('svgSprite', function () {

  gulp.src('app/spritesrc/*.svg')
	.pipe(svgo()())
	.pipe(svgSprite({
	    "mode": {
	        "css": {
	            "spacing": {
	                "padding": 0
	            },
	            "dest": "./",
	            "layout": "vertical",
	            "sprite": "sprite.svg",
	            "bust": false,
	            "render": {
	                "scss": {
	                    "dest": "../../../app/styles/utilities/_sprite.scss",
	                    "template": "app/styles/templates/sprite-template.scss"
	                }
	            }
	        }
	    }
	}))
	.pipe(gulp.dest('dist/assets/i'));


});


gulp.task('pngSprite', ['svgSprite'], function() {
  gulp.src('dist/assets/i/sprite.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('dist/assets/i'));

});

gulp.task('sprite', ['pngSprite']);



//fonts generate
gulp.task('fonts', function(){
  gulp.src(['dist/assets/fonts/*.ttf'])
    .pipe(ttf2eot())
    .pipe(gulp.dest('dist/assets/fonts/'));

  gulp.src(['dist/assets/fonts/*.ttf'])
    .pipe(ttf2woff())
    .pipe(gulp.dest('dist/assets/fonts/'));

   // gulp.src(['dist/assets/fonts/*.ttf'])
   //  .pipe(ttf2woff2())
   //  .pipe(gulp.dest('dist/assets/fonts/'));
});


//watch
gulp.task('live', function() {
	// livereload.listen();
	// livereload.listen({ basePath: 'dist' });
	server.watch("dist");

	//watch .scss files
	gulp.watch('app/styles/**/*.scss', ['styles']);

	//watch .js files
	gulp.watch('app/scripts/**/*.js', ['scripts']);

	//watch .jade files
	gulp.watch('app/pages/**/*.jade', ['templates']);

	//svg and png sprites
  gulp.watch(['app/spritesrc/*.svg'], ['sprite']);

	//font generate if ttf changes
	gulp.watch('dist/assets/fonts/*.ttf', ['fonts']);

	//watch font icon files
  	gulp.watch('app/fonticons/*.svg', ['iconfont']);

  // gulp.watch('app/styles/utilities/_icons.scss', ['iconfont']);
	// gulp.watch('app/styles/templates/_iconsTemplate.scss', ['iconfont']);
});


//default
gulp.task('default', ['scripts', 'styles', 'templates', 'fonts', 'sprite', 'iconfont', 'live']);
