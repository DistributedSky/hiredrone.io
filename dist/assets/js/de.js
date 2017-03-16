document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {

    	var 
    		canvas = document.querySelector("#header-dronesback"),
			canvasWidth = canvas.width = window.innerWidth,
			canvasHeight= canvas.height = window.innerHeight;

		var ctx = canvas.getContext("2d");

		// var patternImage = new Image();

		// function onPatternImageLoaded() {
		// 	console.log("loaded");
		// 	var pattern = ctx.createPattern(patternImage, "repeat");
		// 	ctx.fillStyle = pattern;
		// 	ctx.fillRect(0,0,canvasWidth,canvasHeight);
		// }

		// patternImage.onload = onPatternImageLoaded;
		// // patternImage.src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRFZdayt84qGb-tKXAwcjDF1oF2NwZJZoQqRLKrnvWSDDr1CKfgtA";
		// patternImage.src = "assets/i/pattern_drone.svg";



		  
		// Load up our image.
		var source = new Image();
		source.src = 'assets/i/pattern_drone.svg';
		source.width = '50';
		source.height = '50';
		// Render our SVG image to the canvas once it loads.
		source.onload = function(){
		    ctx.drawImage(source,0,0);
		}


	}
});



if(typeof Object.create!=="function"){
Object.create=function(o){
function F(){
};
F.prototype=o;
return new F();
};
}
var ua={toString:function(){
return navigator.userAgent;
},test:function(s){
return this.toString().toLowerCase().indexOf(s.toLowerCase())>-1;
}};
ua.version=(ua.toString().toLowerCase().match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1];
ua.webkit=ua.test("webkit");
ua.gecko=ua.test("gecko")&&!ua.webkit;
ua.opera=ua.test("opera");
ua.ie=ua.test("msie")&&!ua.opera;
ua.ie6=ua.ie&&document.compatMode&&typeof document.documentElement.style.maxHeight==="undefined";
ua.ie7=ua.ie&&document.documentElement&&typeof document.documentElement.style.maxHeight!=="undefined"&&typeof XDomainRequest==="undefined";
ua.ie8=ua.ie&&typeof XDomainRequest!=="undefined";
var domReady=function(){
var _1=[];
var _2=function(){
if(!arguments.callee.done){
arguments.callee.done=true;
for(var i=0;i<_1.length;i++){
_1[i]();
}
}
};
if(document.addEventListener){
document.addEventListener("DOMContentLoaded",_2,false);
}
if(ua.ie){
(function(){
try{
document.documentElement.doScroll("left");
}
catch(e){
setTimeout(arguments.callee,50);
return;
}
_2();
})();
document.onreadystatechange=function(){
if(document.readyState==="complete"){
document.onreadystatechange=null;
_2();
}
};
}
if(ua.webkit&&document.readyState){
(function(){
if(document.readyState!=="loading"){
_2();
}else{
setTimeout(arguments.callee,10);
}
})();
}
window.onload=_2;
return function(fn){
if(typeof fn==="function"){
_1[_1.length]=fn;
}
return fn;
};
}();
var cssHelper=function(){
var _3={BLOCKS:/[^\s{][^{]*\{(?:[^{}]*\{[^{}]*\}[^{}]*|[^{}]*)*\}/g,BLOCKS_INSIDE:/[^\s{][^{]*\{[^{}]*\}/g,DECLARATIONS:/[a-zA-Z\-]+[^;]*:[^;]+;/g,RELATIVE_URLS:/url\(['"]?([^\/\)'"][^:\)'"]+)['"]?\)/g,REDUNDANT_COMPONENTS:/(?:\/\*([^*\\\\]|\*(?!\/))+\*\/|@import[^;]+;)/g,REDUNDANT_WHITESPACE:/\s*(,|:|;|\{|\})\s*/g,MORE_WHITESPACE:/\s{2,}/g,FINAL_SEMICOLONS:/;\}/g,NOT_WHITESPACE:/\S+/g};
var _4,_5=false;
var _6=[];
var _7=function(fn){
if(typeof fn==="function"){
_6[_6.length]=fn;
}
};
var _8=function(){
for(var i=0;i<_6.length;i++){
_6[i](_4);
}
};
var _9={};
var _a=function(n,v){
if(_9[n]){
var _b=_9[n].listeners;
if(_b){
for(var i=0;i<_b.length;i++){
_b[i](v);
}
}
}
};
var _c=function(_d,_e,_f){
if(ua.ie&&!window.XMLHttpRequest){
window.XMLHttpRequest=function(){
return new ActiveXObject("Microsoft.XMLHTTP");
};
}
if(!XMLHttpRequest){
return "";
}
var r=new XMLHttpRequest();
try{
r.open("get",_d,true);
r.setRequestHeader("X_REQUESTED_WITH","XMLHttpRequest");
}
catch(e){
_f();
return;
}
var _10=false;
setTimeout(function(){
_10=true;
},5000);
document.documentElement.style.cursor="progress";
r.onreadystatechange=function(){
if(r.readyState===4&&!_10){
if(!r.status&&location.protocol==="file:"||(r.status>=200&&r.status<300)||r.status===304||navigator.userAgent.indexOf("Safari")>-1&&typeof r.status==="undefined"){
_e(r.responseText);
}else{
_f();
}
document.documentElement.style.cursor="";
r=null;
}
};
r.send("");
};
var _11=function(_12){
_12=_12.replace(_3.REDUNDANT_COMPONENTS,"");
_12=_12.replace(_3.REDUNDANT_WHITESPACE,"$1");
_12=_12.replace(_3.MORE_WHITESPACE," ");
_12=_12.replace(_3.FINAL_SEMICOLONS,"}");
return _12;
};
var _13={mediaQueryList:function(s){
var o={};
var idx=s.indexOf("{");
var lt=s.substring(0,idx);
s=s.substring(idx+1,s.length-1);
var mqs=[],rs=[];
var qts=lt.toLowerCase().substring(7).split(",");
for(var i=0;i<qts.length;i++){
mqs[mqs.length]=_13.mediaQuery(qts[i],o);
}
var rts=s.match(_3.BLOCKS_INSIDE);
if(rts!==null){
for(i=0;i<rts.length;i++){
rs[rs.length]=_13.rule(rts[i],o);
}
}
o.getMediaQueries=function(){
return mqs;
};
o.getRules=function(){
return rs;
};
o.getListText=function(){
return lt;
};
o.getCssText=function(){
return s;
};
return o;
},mediaQuery:function(s,mql){
s=s||"";
var not=false,_14;
var exp=[];
var _15=true;
var _16=s.match(_3.NOT_WHITESPACE);
for(var i=0;i<_16.length;i++){
var _17=_16[i];
if(!_14&&(_17==="not"||_17==="only")){
if(_17==="not"){
not=true;
}
}else{
if(!_14){
_14=_17;
}else{
if(_17.charAt(0)==="("){
var _18=_17.substring(1,_17.length-1).split(":");
exp[exp.length]={mediaFeature:_18[0],value:_18[1]||null};
}
}
}
}
return {getList:function(){
return mql||null;
},getValid:function(){
return _15;
},getNot:function(){
return not;
},getMediaType:function(){
return _14;
},getExpressions:function(){
return exp;
}};
},rule:function(s,mql){
var o={};
var idx=s.indexOf("{");
var st=s.substring(0,idx);
var ss=st.split(",");
var ds=[];
var dts=s.substring(idx+1,s.length-1).split(";");
for(var i=0;i<dts.length;i++){
ds[ds.length]=_13.declaration(dts[i],o);
}
o.getMediaQueryList=function(){
return mql||null;
};
o.getSelectors=function(){
return ss;
};
o.getSelectorText=function(){
return st;
};
o.getDeclarations=function(){
return ds;
};
o.getPropertyValue=function(n){
for(var i=0;i<ds.length;i++){
if(ds[i].getProperty()===n){
return ds[i].getValue();
}
}
return null;
};
return o;
},declaration:function(s,r){
var idx=s.indexOf(":");
var p=s.substring(0,idx);
var v=s.substring(idx+1);
return {getRule:function(){
return r||null;
},getProperty:function(){
return p;
},getValue:function(){
return v;
}};
}};
var _19=function(el){
if(typeof el.cssHelperText!=="string"){
return;
}
var o={mediaQueryLists:[],rules:[],selectors:{},declarations:[],properties:{}};
var _1a=o.mediaQueryLists;
var ors=o.rules;
var _1b=el.cssHelperText.match(_3.BLOCKS);
if(_1b!==null){
for(var i=0;i<_1b.length;i++){
if(_1b[i].substring(0,7)==="@media "){
_1a[_1a.length]=_13.mediaQueryList(_1b[i]);
ors=o.rules=ors.concat(_1a[_1a.length-1].getRules());
}else{
ors[ors.length]=_13.rule(_1b[i]);
}
}
}
var oss=o.selectors;
var _1c=function(r){
var ss=r.getSelectors();
for(var i=0;i<ss.length;i++){
var n=ss[i];
if(!oss[n]){
oss[n]=[];
}
oss[n][oss[n].length]=r;
}
};
for(i=0;i<ors.length;i++){
_1c(ors[i]);
}
var ods=o.declarations;
for(i=0;i<ors.length;i++){
ods=o.declarations=ods.concat(ors[i].getDeclarations());
}
var ops=o.properties;
for(i=0;i<ods.length;i++){
var n=ods[i].getProperty();
if(!ops[n]){
ops[n]=[];
}
ops[n][ops[n].length]=ods[i];
}
el.cssHelperParsed=o;
_4[_4.length]=el;
return o;
};
var _1d=function(el,s){
el.cssHelperText=_11(s||el.innerHTML);
return _19(el);
};
var _1e=function(){
_5=true;
_4=[];
var _1f=[];
var _20=function(){
for(var i=0;i<_1f.length;i++){
_19(_1f[i]);
}
var _21=document.getElementsByTagName("style");
for(i=0;i<_21.length;i++){
_1d(_21[i]);
}
_5=false;
_8();
};
var _22=document.getElementsByTagName("link");
for(var i=0;i<_22.length;i++){
var _23=_22[i];
if(_23.getAttribute("rel").indexOf("style")>-1&&_23.href&&_23.href.length!==0&&!_23.disabled){
_1f[_1f.length]=_23;
}
}
if(_1f.length>0){
var c=0;
var _24=function(){
c++;
if(c===_1f.length){
_20();
}
};
var _25=function(_26){
var _27=_26.href;
_c(_27,function(_28){
_28=_11(_28).replace(_3.RELATIVE_URLS,"url("+_27.substring(0,_27.lastIndexOf("/"))+"/$1)");
_26.cssHelperText=_28;
_24();
},_24);
};
for(i=0;i<_1f.length;i++){
_25(_1f[i]);
}
}else{
_20();
}
};
var _29={mediaQueryLists:"array",rules:"array",selectors:"object",declarations:"array",properties:"object"};
var _2a={mediaQueryLists:null,rules:null,selectors:null,declarations:null,properties:null};
var _2b=function(_2c,v){
if(_2a[_2c]!==null){
if(_29[_2c]==="array"){
return (_2a[_2c]=_2a[_2c].concat(v));
}else{
var c=_2a[_2c];
for(var n in v){
if(v.hasOwnProperty(n)){
if(!c[n]){
c[n]=v[n];
}else{
c[n]=c[n].concat(v[n]);
}
}
}
return c;
}
}
};
var _2d=function(_2e){
_2a[_2e]=(_29[_2e]==="array")?[]:{};
for(var i=0;i<_4.length;i++){
_2b(_2e,_4[i].cssHelperParsed[_2e]);
}
return _2a[_2e];
};
domReady(function(){
var els=document.body.getElementsByTagName("*");
for(var i=0;i<els.length;i++){
els[i].checkedByCssHelper=true;
}
if(document.implementation.hasFeature("MutationEvents","2.0")||window.MutationEvent){
document.body.addEventListener("DOMNodeInserted",function(e){
var el=e.target;
if(el.nodeType===1){
_a("DOMElementInserted",el);
el.checkedByCssHelper=true;
}
},false);
}else{
setInterval(function(){
var els=document.body.getElementsByTagName("*");
for(var i=0;i<els.length;i++){
if(!els[i].checkedByCssHelper){
_a("DOMElementInserted",els[i]);
els[i].checkedByCssHelper=true;
}
}
},1000);
}
});
var _2f=function(d){
if(typeof window.innerWidth!="undefined"){
return window["inner"+d];
}else{
if(typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0){
return document.documentElement["client"+d];
}
}
};
return {addStyle:function(s,_30){
var el=document.createElement("style");
el.setAttribute("type","text/css");
document.getElementsByTagName("head")[0].appendChild(el);
if(el.styleSheet){
el.styleSheet.cssText=s;
}else{
el.appendChild(document.createTextNode(s));
}
el.addedWithCssHelper=true;
if(typeof _30==="undefined"||_30===true){
cssHelper.parsed(function(_31){
var o=_1d(el,s);
for(var n in o){
if(o.hasOwnProperty(n)){
_2b(n,o[n]);
}
}
_a("newStyleParsed",el);
});
}else{
el.parsingDisallowed=true;
}
return el;
},removeStyle:function(el){
return el.parentNode.removeChild(el);
},parsed:function(fn){
if(_5){
_7(fn);
}else{
if(typeof _4!=="undefined"){
if(typeof fn==="function"){
fn(_4);
}
}else{
_7(fn);
_1e();
}
}
},mediaQueryLists:function(fn){
cssHelper.parsed(function(_32){
fn(_2a.mediaQueryLists||_2d("mediaQueryLists"));
});
},rules:function(fn){
cssHelper.parsed(function(_33){
fn(_2a.rules||_2d("rules"));
});
},selectors:function(fn){
cssHelper.parsed(function(_34){
fn(_2a.selectors||_2d("selectors"));
});
},declarations:function(fn){
cssHelper.parsed(function(_35){
fn(_2a.declarations||_2d("declarations"));
});
},properties:function(fn){
cssHelper.parsed(function(_36){
fn(_2a.properties||_2d("properties"));
});
},broadcast:_a,addListener:function(n,fn){
if(typeof fn==="function"){
if(!_9[n]){
_9[n]={listeners:[]};
}
_9[n].listeners[_9[n].listeners.length]=fn;
}
},removeListener:function(n,fn){
if(typeof fn==="function"&&_9[n]){
var ls=_9[n].listeners;
for(var i=0;i<ls.length;i++){
if(ls[i]===fn){
ls.splice(i,1);
i-=1;
}
}
}
},getViewportWidth:function(){
return _2f("Width");
},getViewportHeight:function(){
return _2f("Height");
}};
}();
domReady(function enableCssMediaQueries(){
var _37;
var _38={LENGTH_UNIT:/[0-9]+(em|ex|px|in|cm|mm|pt|pc)$/,RESOLUTION_UNIT:/[0-9]+(dpi|dpcm)$/,ASPECT_RATIO:/^[0-9]+\/[0-9]+$/,ABSOLUTE_VALUE:/^[0-9]*(\.[0-9]+)*$/};
var _39=[];
var _3a=function(){
var id="css3-mediaqueries-test";
var el=document.createElement("div");
el.id=id;
var _3b=cssHelper.addStyle("@media all and (width) { #"+id+" { width: 1px !important; } }",false);
document.body.appendChild(el);
var ret=el.offsetWidth===1;
_3b.parentNode.removeChild(_3b);
el.parentNode.removeChild(el);
_3a=function(){
return ret;
};
return ret;
};
var _3c=function(){
_37=document.createElement("div");
_37.style.cssText="position:absolute;top:-9999em;left:-9999em;"+"margin:0;border:none;padding:0;width:1em;font-size:1em;";
document.body.appendChild(_37);
if(_37.offsetWidth!==16){
_37.style.fontSize=16/_37.offsetWidth+"em";
}
_37.style.width="";
};
var _3d=function(_3e){
_37.style.width=_3e;
var _3f=_37.offsetWidth;
_37.style.width="";
return _3f;
};
var _40=function(_41,_42){
var l=_41.length;
var min=(_41.substring(0,4)==="min-");
var max=(!min&&_41.substring(0,4)==="max-");
if(_42!==null){
var _43;
var _44;
if(_38.LENGTH_UNIT.exec(_42)){
_43="length";
_44=_3d(_42);
}else{
if(_38.RESOLUTION_UNIT.exec(_42)){
_43="resolution";
_44=parseInt(_42,10);
var _45=_42.substring((_44+"").length);
}else{
if(_38.ASPECT_RATIO.exec(_42)){
_43="aspect-ratio";
_44=_42.split("/");
}else{
if(_38.ABSOLUTE_VALUE){
_43="absolute";
_44=_42;
}else{
_43="unknown";
}
}
}
}
}
var _46,_47;
if("device-width"===_41.substring(l-12,l)){
_46=screen.width;
if(_42!==null){
if(_43==="length"){
return ((min&&_46>=_44)||(max&&_46<_44)||(!min&&!max&&_46===_44));
}else{
return false;
}
}else{
return _46>0;
}
}else{
if("device-height"===_41.substring(l-13,l)){
_47=screen.height;
if(_42!==null){
if(_43==="length"){
return ((min&&_47>=_44)||(max&&_47<_44)||(!min&&!max&&_47===_44));
}else{
return false;
}
}else{
return _47>0;
}
}else{
if("width"===_41.substring(l-5,l)){
_46=document.documentElement.clientWidth||document.body.clientWidth;
if(_42!==null){
if(_43==="length"){
return ((min&&_46>=_44)||(max&&_46<_44)||(!min&&!max&&_46===_44));
}else{
return false;
}
}else{
return _46>0;
}
}else{
if("height"===_41.substring(l-6,l)){
_47=document.documentElement.clientHeight||document.body.clientHeight;
if(_42!==null){
if(_43==="length"){
return ((min&&_47>=_44)||(max&&_47<_44)||(!min&&!max&&_47===_44));
}else{
return false;
}
}else{
return _47>0;
}
}else{
if("device-aspect-ratio"===_41.substring(l-19,l)){
return _43==="aspect-ratio"&&screen.width*_44[1]===screen.height*_44[0];
}else{
if("color-index"===_41.substring(l-11,l)){
var _48=Math.pow(2,screen.colorDepth);
if(_42!==null){
if(_43==="absolute"){
return ((min&&_48>=_44)||(max&&_48<_44)||(!min&&!max&&_48===_44));
}else{
return false;
}
}else{
return _48>0;
}
}else{
if("color"===_41.substring(l-5,l)){
var _49=screen.colorDepth;
if(_42!==null){
if(_43==="absolute"){
return ((min&&_49>=_44)||(max&&_49<_44)||(!min&&!max&&_49===_44));
}else{
return false;
}
}else{
return _49>0;
}
}else{
if("resolution"===_41.substring(l-10,l)){
var res;
if(_45==="dpcm"){
res=_3d("1cm");
}else{
res=_3d("1in");
}
if(_42!==null){
if(_43==="resolution"){
return ((min&&res>=_44)||(max&&res<_44)||(!min&&!max&&res===_44));
}else{
return false;
}
}else{
return res>0;
}
}else{
return false;
}
}
}
}
}
}
}
}
};
var _4a=function(mq){
var _4b=mq.getValid();
var _4c=mq.getExpressions();
var l=_4c.length;
if(l>0){
for(var i=0;i<l&&_4b;i++){
_4b=_40(_4c[i].mediaFeature,_4c[i].value);
}
var not=mq.getNot();
return (_4b&&!not||not&&!_4b);
}
};
var _4d=function(mql){
var mqs=mql.getMediaQueries();
var t={};
for(var i=0;i<mqs.length;i++){
if(_4a(mqs[i])){
t[mqs[i].getMediaType()]=true;
}
}
var s=[],c=0;
for(var n in t){
if(t.hasOwnProperty(n)){
if(c>0){
s[c++]=",";
}
s[c++]=n;
}
}
if(s.length>0){
_39[_39.length]=cssHelper.addStyle("@media "+s.join("")+"{"+mql.getCssText()+"}",false);
}
};
var _4e=function(_4f){
for(var i=0;i<_4f.length;i++){
_4d(_4f[i]);
}
if(ua.ie){
document.documentElement.style.display="block";
setTimeout(function(){
document.documentElement.style.display="";
},0);
setTimeout(function(){
cssHelper.broadcast("cssMediaQueriesTested");
},100);
}else{
cssHelper.broadcast("cssMediaQueriesTested");
}
};
var _50=function(){
for(var i=0;i<_39.length;i++){
cssHelper.removeStyle(_39[i]);
}
_39=[];
cssHelper.mediaQueryLists(_4e);
};
var _51=0;
var _52=function(){
var _53=cssHelper.getViewportWidth();
var _54=cssHelper.getViewportHeight();
if(ua.ie){
var el=document.createElement("div");
el.style.position="absolute";
el.style.top="-9999em";
el.style.overflow="scroll";
document.body.appendChild(el);
_51=el.offsetWidth-el.clientWidth;
document.body.removeChild(el);
}
var _55;
var _56=function(){
var vpw=cssHelper.getViewportWidth();
var vph=cssHelper.getViewportHeight();
if(Math.abs(vpw-_53)>_51||Math.abs(vph-_54)>_51){
_53=vpw;
_54=vph;
clearTimeout(_55);
_55=setTimeout(function(){
if(!_3a()){
_50();
}else{
cssHelper.broadcast("cssMediaQueriesTested");
}
},500);
}
};
window.onresize=function(){
var x=window.onresize||function(){
};
return function(){
x();
_56();
};
}();
};
var _57=document.documentElement;
_57.style.marginLeft="-32767px";
setTimeout(function(){
_57.style.marginTop="";
},20000);
return function(){
if(!_3a()){
cssHelper.addListener("newStyleParsed",function(el){
_4e(el.cssHelperParsed.mediaQueryLists);
});
cssHelper.addListener("cssMediaQueriesTested",function(){
if(ua.ie){
_57.style.width="1px";
}
setTimeout(function(){
_57.style.width="";
_57.style.marginLeft="";
},0);
cssHelper.removeListener("cssMediaQueriesTested",arguments.callee);
});
_3c();
_50();
}else{
_57.style.marginLeft="";
}
_52();
};
}());
try{
document.execCommand("BackgroundImageCache",false,true);
}
catch(e){
}


(function ($) {

  var pluginName = 'placeholderEnhanced',
    // if browser supports placeholder attribute, use native events to show/hide placeholder
    hasNativeSupport = 'placeholder' in document.createElement('input') && 'placeholder' in document.createElement('textarea'),
    // events namespaces
    event = {
      focus: 'focus.placeholder',
      blur: 'blur.placeholder',
      submit: 'submit.placeholder'
    },
    // placeholder css class
    placeholderCssClass = 'placeholder',
    $val;

  // if placeholder is not supported, the jQuery val function returns the placeholder
  // wrap the val function to fix this
  if (!hasNativeSupport) {
    $val = $.fn.val;
    $.fn.val = function () {
      var el = this[0];
      if (!this.length) {
        return;
      }
      if (!arguments.length && (el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA')) {
        return el.value === this.attr('placeholder') ? '' : el.value;

      } else {
        if (this.hasClass(placeholderCssClass)) {
          this.removeClass(placeholderCssClass);
        }
        return $val.apply(this, arguments);
      }
    };
  }

  $.fn[pluginName] = function () {

    // don't do anything with an empty collection
    if (!this.length) {
      return;
    }

    // ensure not sending placeholder value when placeholder is not supported
    if (!hasNativeSupport) {
      // filter forms to leave only the ones that submit event was not added yet
      $('form')
        // only grab forms that are not prepared
        .filter(function () {
          return !$.data(this, pluginName);
        })
        .each(function () {
          // bind submit event
          $(this).bind(event.submit, function () {
            // empty input value if it's the same as the placeholder attribute
            $(this).find('input[placeholder], textarea[placeholder]').each(function () {
              if (!$(this).val() && !this.disabled) {
                this.value = '';
              }
            });
          });
          // mark as prepared
          $.data(this, pluginName, true);
        });
    }

    // copy attributes from a DOM node to a plain object to use later
    function copyAttrs(element) {
      var attrs = {}, exclude = ['placeholder', 'name', 'id'];
      $.each(element.attributes, function (i, attr) {
        if (attr.specified && $.inArray(attr.name, exclude) < 0) {
          attrs[attr.name] = attr.value;
        }
      });
      return attrs;
    }

    // hides specified input
    function hideInput($input) {
      $input.css({position: 'absolute', left: '-9999em'});
    }

    // shows specified input
    function showInput($input) {
      $input.css({position: '', left: ''});
    }


    return this.each(function () {

      // check if plugin already initialized
      if ($.data(this, pluginName)) {
        return;
      }

      var el = this,
        $el = $(el),
        placeholderTxt = $el.attr('placeholder'),
        isPassword = (el.type === 'password'),
        fakePassw,
        setPlaceholder,
        removePlaceholder;

      // on blur set placeholder
      setPlaceholder = function () {
        // if there is no initial value
        // or initial value is equal to placeholder (done in the fn.val wrapper)
        // init the placeholder
        if (!$el.val()) {
          if (!hasNativeSupport) {
            if (!isPassword) {
              $el.val(placeholderTxt).addClass(placeholderCssClass);
            } else {
              showInput(fakePassw);
              hideInput($el);
            }
          } else {
            $el.addClass(placeholderCssClass);
          }
        }
      };

      // on focus remove placeholder
      if (!isPassword || hasNativeSupport) {
        // for non-password inputs and textareas
        removePlaceholder = function () {
          if ($el.hasClass(placeholderCssClass)) {
            if (!hasNativeSupport) {
              el.value = '';
            }
            $el.removeClass(placeholderCssClass);
          }
        };

      // for password inputs
      } else if (!hasNativeSupport) {
        removePlaceholder = function () {
          showInput($el);
          hideInput(fakePassw);
        };

        // create a fake password input
        fakePassw = $('<input>', $.extend(copyAttrs(el), {
          'type': 'text',
          value: placeholderTxt,
          tabindex: -1 // skip tabbing
        }))
          // add placeholder class
          .addClass(placeholderCssClass)
          // when fake input has focus, trigger real input focus
          .bind(event.focus, function () {
            $el.trigger(event.focus);
          })
          // insert fake input
          .insertBefore($el);
      }

      // bind events and trigger blur the first time
      $el
        .bind(event.blur, setPlaceholder)
        .bind(event.focus, removePlaceholder)
        .trigger(event.blur);

      // mark plugin as initialized for current element
      $.data(el, pluginName, true);
    });
  };

  // auto-initialize the plugin
  $(function () {
    $('input[placeholder], textarea[placeholder]')[pluginName]();
  });
}(jQuery));
/*!
 * modernizr v3.3.1
 * Build https://modernizr.com/download?-cssanimations-flexbox-flexboxtweener-svg-touchevents-setclasses-shiv-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
*/

;(function(window, document, undefined){
  var classes = [];
  

  var tests = [];
  

  /**
   *
   * ModernizrProto is the constructor for Modernizr
   *
   * @class
   * @access public
   */

  var ModernizrProto = {
    // The current version, dummy
    _version: '3.3.1',

    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      'classPrefix': '',
      'enableClasses': true,
      'enableJSClass': true,
      'usePrefixes': true
    },

    // Queue of tests
    _q: [],

    // Stub these for people who are listening
    on: function(test, cb) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
      // This is in case people listen to synchronous tests. I would leave it out,
      // but the code to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      var self = this;
      setTimeout(function() {
        cb(self[test]);
      }, 0);
    },

    addTest: function(name, fn, options) {
      tests.push({name: name, fn: fn, options: options});
    },

    addAsyncTest: function(fn) {
      tests.push({name: null, fn: fn});
    }
  };

  

  // Fake some of Object.create so we can force non test results to be non "own" properties.
  var Modernizr = function() {};
  Modernizr.prototype = ModernizrProto;

  // Leak modernizr globally when you `require` it rather than force it here.
  // Overwrite name so constructor name is nicer :D
  Modernizr = new Modernizr();

  
/*!
{
  "name": "SVG",
  "property": "svg",
  "caniuse": "svg",
  "tags": ["svg"],
  "authors": ["Erik Dahlstrom"],
  "polyfills": [
    "svgweb",
    "raphael",
    "amplesdk",
    "canvg",
    "svg-boilerplate",
    "sie",
    "dojogfx",
    "fabricjs"
  ]
}
!*/
/* DOC
Detects support for SVG in `<embed>` or `<object>` elements.
*/

  Modernizr.addTest('svg', !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);


  /**
   * is returns a boolean if the typeof an obj is exactly type.
   *
   * @access private
   * @function is
   * @param {*} obj - A thing we want to check the type of
   * @param {string} type - A string to compare the typeof against
   * @returns {boolean}
   */

  function is(obj, type) {
    return typeof obj === type;
  }
  ;

  /**
   * Run through all tests and detect their support in the current UA.
   *
   * @access private
   */

  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;

    for (var featureIdx in tests) {
      if (tests.hasOwnProperty(featureIdx)) {
        featureNames = [];
        feature = tests[featureIdx];
        // run the test, throw the return value into the Modernizr,
        // then based on that boolean, define an appropriate className
        // and push it into an array of classes we'll join later.
        //
        // If there is no name, it's an 'async' test that is run,
        // but not directly added to the object. That should
        // be done with a post-run addTest call.
        if (feature.name) {
          featureNames.push(feature.name.toLowerCase());

          if (feature.options && feature.options.aliases && feature.options.aliases.length) {
            // Add all the aliases into the names list
            for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
              featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
            }
          }
        }

        // Run the test, or use the raw value if it's not a function
        result = is(feature.fn, 'function') ? feature.fn() : feature.fn;


        // Set each of the names on the Modernizr object
        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
          featureName = featureNames[nameIdx];
          // Support dot properties as sub tests. We don't do checking to make sure
          // that the implied parent tests have been added. You must call them in
          // order (either in the test, or make the parent test a dependency).
          //
          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
          // hashtag famous last words
          featureNameSplit = featureName.split('.');

          if (featureNameSplit.length === 1) {
            Modernizr[featureNameSplit[0]] = result;
          } else {
            // cast to a Boolean, if not one already
            /* jshint -W053 */
            if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
              Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
            }

            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
          }

          classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
        }
      }
    }
  }
  ;

  /**
   * docElement is a convenience wrapper to grab the root element of the document
   *
   * @access private
   * @returns {HTMLElement|SVGElement} The root element of the document
   */

  var docElement = document.documentElement;
  

  /**
   * A convenience helper to check if the document we are running in is an SVG document
   *
   * @access private
   * @returns {boolean}
   */

  var isSVG = docElement.nodeName.toLowerCase() === 'svg';
  

  /**
   * setClasses takes an array of class names and adds them to the root element
   *
   * @access private
   * @function setClasses
   * @param {string[]} classes - Array of class names
   */

  // Pass in an and array of class names, e.g.:
  //  ['no-webp', 'borderradius', ...]
  function setClasses(classes) {
    var className = docElement.className;
    var classPrefix = Modernizr._config.classPrefix || '';

    if (isSVG) {
      className = className.baseVal;
    }

    // Change `no-js` to `js` (independently of the `enableClasses` option)
    // Handle classPrefix on this too
    if (Modernizr._config.enableJSClass) {
      var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
      className = className.replace(reJS, '$1' + classPrefix + 'js$2');
    }

    if (Modernizr._config.enableClasses) {
      // Add the new classes
      className += ' ' + classPrefix + classes.join(' ' + classPrefix);
      isSVG ? docElement.className.baseVal = className : docElement.className = className;
    }

  }

  ;

/**
  * @optionName html5shiv
  * @optionProp html5shiv
  */

  // Take the html5 variable out of the html5shiv scope so we can return it.
  var html5;
  if (!isSVG) {
    /**
     * @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
     */
    ;(function(window, document) {
      /*jshint evil:true */
      /** version */
      var version = '3.7.3';

      /** Preset options */
      var options = window.html5 || {};

      /** Used to skip problem elements */
      var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

      /** Not all elements can be cloned in IE **/
      var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

      /** Detect whether the browser supports default html5 styles */
      var supportsHtml5Styles;

      /** Name of the expando, to work with multiple documents or to re-shiv one document */
      var expando = '_html5shiv';

      /** The id for the the documents expando */
      var expanID = 0;

      /** Cached data for each document */
      var expandoData = {};

      /** Detect whether the browser supports unknown elements */
      var supportsUnknownElements;

      (function() {
        try {
          var a = document.createElement('a');
          a.innerHTML = '<xyz></xyz>';
          //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
          supportsHtml5Styles = ('hidden' in a);

          supportsUnknownElements = a.childNodes.length == 1 || (function() {
            // assign a false positive if unable to shiv
            (document.createElement)('a');
            var frag = document.createDocumentFragment();
            return (
              typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
            );
          }());
        } catch(e) {
          // assign a false positive if detection fails => unable to shiv
          supportsHtml5Styles = true;
          supportsUnknownElements = true;
        }

      }());

      /*--------------------------------------------------------------------------*/

      /**
       * Creates a style sheet with the given CSS text and adds it to the document.
       * @private
       * @param {Document} ownerDocument The document.
       * @param {String} cssText The CSS text.
       * @returns {StyleSheet} The style element.
       */
      function addStyleSheet(ownerDocument, cssText) {
        var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

        p.innerHTML = 'x<style>' + cssText + '</style>';
        return parent.insertBefore(p.lastChild, parent.firstChild);
      }

      /**
       * Returns the value of `html5.elements` as an array.
       * @private
       * @returns {Array} An array of shived element node names.
       */
      function getElements() {
        var elements = html5.elements;
        return typeof elements == 'string' ? elements.split(' ') : elements;
      }

      /**
       * Extends the built-in list of html5 elements
       * @memberOf html5
       * @param {String|Array} newElements whitespace separated list or array of new element names to shiv
       * @param {Document} ownerDocument The context document.
       */
      function addElements(newElements, ownerDocument) {
        var elements = html5.elements;
        if(typeof elements != 'string'){
          elements = elements.join(' ');
        }
        if(typeof newElements != 'string'){
          newElements = newElements.join(' ');
        }
        html5.elements = elements +' '+ newElements;
        shivDocument(ownerDocument);
      }

      /**
       * Returns the data associated to the given document
       * @private
       * @param {Document} ownerDocument The document.
       * @returns {Object} An object of data.
       */
      function getExpandoData(ownerDocument) {
        var data = expandoData[ownerDocument[expando]];
        if (!data) {
          data = {};
          expanID++;
          ownerDocument[expando] = expanID;
          expandoData[expanID] = data;
        }
        return data;
      }

      /**
       * returns a shived element for the given nodeName and document
       * @memberOf html5
       * @param {String} nodeName name of the element
       * @param {Document|DocumentFragment} ownerDocument The context document.
       * @returns {Object} The shived element.
       */
      function createElement(nodeName, ownerDocument, data){
        if (!ownerDocument) {
          ownerDocument = document;
        }
        if(supportsUnknownElements){
          return ownerDocument.createElement(nodeName);
        }
        if (!data) {
          data = getExpandoData(ownerDocument);
        }
        var node;

        if (data.cache[nodeName]) {
          node = data.cache[nodeName].cloneNode();
        } else if (saveClones.test(nodeName)) {
          node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
        } else {
          node = data.createElem(nodeName);
        }

        // Avoid adding some elements to fragments in IE < 9 because
        // * Attributes like `name` or `type` cannot be set/changed once an element
        //   is inserted into a document/fragment
        // * Link elements with `src` attributes that are inaccessible, as with
        //   a 403 response, will cause the tab/window to crash
        // * Script elements appended to fragments will execute when their `src`
        //   or `text` property is set
        return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
      }

      /**
       * returns a shived DocumentFragment for the given document
       * @memberOf html5
       * @param {Document} ownerDocument The context document.
       * @returns {Object} The shived DocumentFragment.
       */
      function createDocumentFragment(ownerDocument, data){
        if (!ownerDocument) {
          ownerDocument = document;
        }
        if(supportsUnknownElements){
          return ownerDocument.createDocumentFragment();
        }
        data = data || getExpandoData(ownerDocument);
        var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
        for(;i<l;i++){
          clone.createElement(elems[i]);
        }
        return clone;
      }

      /**
       * Shivs the `createElement` and `createDocumentFragment` methods of the document.
       * @private
       * @param {Document|DocumentFragment} ownerDocument The document.
       * @param {Object} data of the document.
       */
      function shivMethods(ownerDocument, data) {
        if (!data.cache) {
          data.cache = {};
          data.createElem = ownerDocument.createElement;
          data.createFrag = ownerDocument.createDocumentFragment;
          data.frag = data.createFrag();
        }


        ownerDocument.createElement = function(nodeName) {
          //abort shiv
          if (!html5.shivMethods) {
            return data.createElem(nodeName);
          }
          return createElement(nodeName, ownerDocument, data);
        };

        ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                                                        'var n=f.cloneNode(),c=n.createElement;' +
                                                        'h.shivMethods&&(' +
                                                        // unroll the `createElement` calls
                                                        getElements().join().replace(/[\w\-:]+/g, function(nodeName) {
          data.createElem(nodeName);
          data.frag.createElement(nodeName);
          return 'c("' + nodeName + '")';
        }) +
          ');return n}'
                                                       )(html5, data.frag);
      }

      /*--------------------------------------------------------------------------*/

      /**
       * Shivs the given document.
       * @memberOf html5
       * @param {Document} ownerDocument The document to shiv.
       * @returns {Document} The shived document.
       */
      function shivDocument(ownerDocument) {
        if (!ownerDocument) {
          ownerDocument = document;
        }
        var data = getExpandoData(ownerDocument);

        if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
          data.hasCSS = !!addStyleSheet(ownerDocument,
                                        // corrects block display not defined in IE6/7/8/9
                                        'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                                        // adds styling not present in IE6/7/8/9
                                        'mark{background:#FF0;color:#000}' +
                                        // hides non-rendered elements
                                        'template{display:none}'
                                       );
        }
        if (!supportsUnknownElements) {
          shivMethods(ownerDocument, data);
        }
        return ownerDocument;
      }

      /*--------------------------------------------------------------------------*/

      /**
       * The `html5` object is exposed so that more elements can be shived and
       * existing shiving can be detected on iframes.
       * @type Object
       * @example
       *
       * // options can be changed before the script is included
       * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
       */
      var html5 = {

        /**
         * An array or space separated string of node names of the elements to shiv.
         * @memberOf html5
         * @type Array|String
         */
        'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',

        /**
         * current version of html5shiv
         */
        'version': version,

        /**
         * A flag to indicate that the HTML5 style sheet should be inserted.
         * @memberOf html5
         * @type Boolean
         */
        'shivCSS': (options.shivCSS !== false),

        /**
         * Is equal to true if a browser supports creating unknown/HTML5 elements
         * @memberOf html5
         * @type boolean
         */
        'supportsUnknownElements': supportsUnknownElements,

        /**
         * A flag to indicate that the document's `createElement` and `createDocumentFragment`
         * methods should be overwritten.
         * @memberOf html5
         * @type Boolean
         */
        'shivMethods': (options.shivMethods !== false),

        /**
         * A string to describe the type of `html5` object ("default" or "default print").
         * @memberOf html5
         * @type String
         */
        'type': 'default',

        // shivs the document according to the specified `html5` object options
        'shivDocument': shivDocument,

        //creates a shived element
        createElement: createElement,

        //creates a shived documentFragment
        createDocumentFragment: createDocumentFragment,

        //extends list of elements
        addElements: addElements
      };

      /*--------------------------------------------------------------------------*/

      // expose html5
      window.html5 = html5;

      // shiv the document
      shivDocument(document);

      if(typeof module == 'object' && module.exports){
        module.exports = html5;
      }

    }(typeof window !== "undefined" ? window : this, document));
  }
;

  /**
   * List of property values to set for css tests. See ticket #21
   * http://git.io/vUGl4
   *
   * @memberof Modernizr
   * @name Modernizr._prefixes
   * @optionName Modernizr._prefixes
   * @optionProp prefixes
   * @access public
   * @example
   *
   * Modernizr._prefixes is the internal list of prefixes that we test against
   * inside of things like [prefixed](#modernizr-prefixed) and [prefixedCSS](#-code-modernizr-prefixedcss). It is simply
   * an array of kebab-case vendor prefixes you can use within your code.
   *
   * Some common use cases include
   *
   * Generating all possible prefixed version of a CSS property
   * ```js
   * var rule = Modernizr._prefixes.join('transform: rotate(20deg); ');
   *
   * rule === 'transform: rotate(20deg); webkit-transform: rotate(20deg); moz-transform: rotate(20deg); o-transform: rotate(20deg); ms-transform: rotate(20deg);'
   * ```
   *
   * Generating all possible prefixed version of a CSS value
   * ```js
   * rule = 'display:' +  Modernizr._prefixes.join('flex; display:') + 'flex';
   *
   * rule === 'display:flex; display:-webkit-flex; display:-moz-flex; display:-o-flex; display:-ms-flex; display:flex'
   * ```
   */

  // we use ['',''] rather than an empty array in order to allow a pattern of .`join()`ing prefixes to test
  // values in feature detects to continue to work
  var prefixes = (ModernizrProto._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : ['','']);

  // expose these for the plugin API. Look in the source for how to join() them against your input
  ModernizrProto._prefixes = prefixes;

  

  /**
   * createElement is a convenience wrapper around document.createElement. Since we
   * use createElement all over the place, this allows for (slightly) smaller code
   * as well as abstracting away issues with creating elements in contexts other than
   * HTML documents (e.g. SVG documents).
   *
   * @access private
   * @function createElement
   * @returns {HTMLElement|SVGElement} An HTML or SVG element
   */

  function createElement() {
    if (typeof document.createElement !== 'function') {
      // This is the case in IE7, where the type of createElement is "object".
      // For this reason, we cannot call apply() as Object is not a Function.
      return document.createElement(arguments[0]);
    } else if (isSVG) {
      return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
    } else {
      return document.createElement.apply(document, arguments);
    }
  }

  ;

  /**
   * getBody returns the body of a document, or an element that can stand in for
   * the body if a real body does not exist
   *
   * @access private
   * @function getBody
   * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an
   * artificially created element that stands in for the body
   */

  function getBody() {
    // After page load injecting a fake body doesn't work so check if body exists
    var body = document.body;

    if (!body) {
      // Can't use the real body create a fake one.
      body = createElement(isSVG ? 'svg' : 'body');
      body.fake = true;
    }

    return body;
  }

  ;

  /**
   * injectElementWithStyles injects an element with style element and some CSS rules
   *
   * @access private
   * @function injectElementWithStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   */

  function injectElementWithStyles(rule, callback, nodes, testnames) {
    var mod = 'modernizr';
    var style;
    var ret;
    var node;
    var docOverflow;
    var div = createElement('div');
    var body = getBody();

    if (parseInt(nodes, 10)) {
      // In order not to give false positives we create a node for each test
      // This also allows the method to scale for unspecified uses
      while (nodes--) {
        node = createElement('div');
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    }

    style = createElement('style');
    style.type = 'text/css';
    style.id = 's' + mod;

    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
    (!body.fake ? div : body).appendChild(style);
    body.appendChild(div);

    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(document.createTextNode(rule));
    }
    div.id = mod;

    if (body.fake) {
      //avoid crashing IE8, if background image is used
      body.style.background = '';
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
      body.style.overflow = 'hidden';
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }

    ret = callback(div, rule);
    // If this is done after page load we don't want to remove the body so check if body exists
    if (body.fake) {
      body.parentNode.removeChild(body);
      docElement.style.overflow = docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      docElement.offsetHeight;
    } else {
      div.parentNode.removeChild(div);
    }

    return !!ret;

  }

  ;

  /**
   * testStyles injects an element with style element and some CSS rules
   *
   * @memberof Modernizr
   * @name Modernizr.testStyles
   * @optionName Modernizr.testStyles()
   * @optionProp testStyles
   * @access public
   * @function testStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   * @example
   *
   * `Modernizr.testStyles` takes a CSS rule and injects it onto the current page
   * along with (possibly multiple) DOM elements. This lets you check for features
   * that can not be detected by simply checking the [IDL](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_development_guide/IDL_interface_rules).
   *
   * ```js
   * Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', function(elem, rule) {
   *   // elem is the first DOM node in the page (by default #modernizr)
   *   // rule is the first argument you supplied - the CSS rule in string form
   *
   *   addTest('widthworks', elem.style.width === '9px')
   * });
   * ```
   *
   * If your test requires multiple nodes, you can include a third argument
   * indicating how many additional div elements to include on the page. The
   * additional nodes are injected as children of the `elem` that is returned as
   * the first argument to the callback.
   *
   * ```js
   * Modernizr.testStyles('#modernizr {width: 1px}; #modernizr2 {width: 2px}', function(elem) {
   *   document.getElementById('modernizr').style.width === '1px'; // true
   *   document.getElementById('modernizr2').style.width === '2px'; // true
   *   elem.firstChild === document.getElementById('modernizr2'); // true
   * }, 1);
   * ```
   *
   * By default, all of the additional elements have an ID of `modernizr[n]`, where
   * `n` is its index (e.g. the first additional, second overall is `#modernizr2`,
   * the second additional is `#modernizr3`, etc.).
   * If you want to have more meaningful IDs for your function, you can provide
   * them as the fourth argument, as an array of strings
   *
   * ```js
   * Modernizr.testStyles('#foo {width: 10px}; #bar {height: 20px}', function(elem) {
   *   elem.firstChild === document.getElementById('foo'); // true
   *   elem.lastChild === document.getElementById('bar'); // true
   * }, 2, ['foo', 'bar']);
   * ```
   *
   */

  var testStyles = ModernizrProto.testStyles = injectElementWithStyles;
  
/*!
{
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse" : "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
}
!*/
/* DOC
Indicates if the browser supports the W3C Touch Events API.

This *does not* necessarily reflect a touchscreen device:

* Older touchscreen devices only emulate mouse events
* Modern IE touch devices implement the Pointer Events API instead: use `Modernizr.pointerevents` to detect support for that
* Some browsers & OS setups may enable touch APIs when no touchscreen is connected
* Future browsers may implement other event models for touch interactions

See this article: [You Can't Detect A Touchscreen](http://www.stucox.com/blog/you-cant-detect-a-touchscreen/).

It's recommended to bind both mouse and touch/pointer events simultaneously – see [this HTML5 Rocks tutorial](http://www.html5rocks.com/en/mobile/touchandmouse/).

This test will also return `true` for Firefox 4 Multitouch support.
*/

  // Chrome (desktop) used to lie about its support on this, but that has since been rectified: http://crbug.com/36415
  Modernizr.addTest('touchevents', function() {
    var bool;
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
      bool = true;
    } else {
      // include the 'heartz' as a way to have a non matching MQ to help terminate the join
      // https://git.io/vznFH
      var query = ['@media (', prefixes.join('touch-enabled),('), 'heartz', ')', '{#modernizr{top:9px;position:absolute}}'].join('');
      testStyles(query, function(node) {
        bool = node.offsetTop === 9;
      });
    }
    return bool;
  });


  /**
   * If the browsers follow the spec, then they would expose vendor-specific style as:
   *   elem.style.WebkitBorderRadius
   * instead of something like the following, which would be technically incorrect:
   *   elem.style.webkitBorderRadius

   * Webkit ghosts their properties in lowercase but Opera & Moz do not.
   * Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
   *   erik.eae.net/archives/2008/03/10/21.48.10/

   * More here: github.com/Modernizr/Modernizr/issues/issue/21
   *
   * @access private
   * @returns {string} The string representing the vendor-specific style properties
   */

  var omPrefixes = 'Moz O ms Webkit';
  

  var cssomPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : []);
  ModernizrProto._cssomPrefixes = cssomPrefixes;
  

  /**
   * List of JavaScript DOM values used for tests
   *
   * @memberof Modernizr
   * @name Modernizr._domPrefixes
   * @optionName Modernizr._domPrefixes
   * @optionProp domPrefixes
   * @access public
   * @example
   *
   * Modernizr._domPrefixes is exactly the same as [_prefixes](#modernizr-_prefixes), but rather
   * than kebab-case properties, all properties are their Capitalized variant
   *
   * ```js
   * Modernizr._domPrefixes === [ "Moz", "O", "ms", "Webkit" ];
   * ```
   */

  var domPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(' ') : []);
  ModernizrProto._domPrefixes = domPrefixes;
  


  /**
   * contains checks to see if a string contains another string
   *
   * @access private
   * @function contains
   * @param {string} str - The string we want to check for substrings
   * @param {string} substr - The substring we want to search the first string for
   * @returns {boolean}
   */

  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }

  ;

  /**
   * cssToDOM takes a kebab-case string and converts it to camelCase
   * e.g. box-sizing -> boxSizing
   *
   * @access private
   * @function cssToDOM
   * @param {string} name - String name of kebab-case prop we want to convert
   * @returns {string} The camelCase version of the supplied name
   */

  function cssToDOM(name) {
    return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {
      return m1 + m2.toUpperCase();
    }).replace(/^-/, '');
  }
  ;

  /**
   * fnBind is a super small [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) polyfill.
   *
   * @access private
   * @function fnBind
   * @param {function} fn - a function you want to change `this` reference to
   * @param {object} that - the `this` you want to call the function with
   * @returns {function} The wrapped version of the supplied function
   */

  function fnBind(fn, that) {
    return function() {
      return fn.apply(that, arguments);
    };
  }

  ;

  /**
   * testDOMProps is a generic DOM property test; if a browser supports
   *   a certain property, it won't return undefined for it.
   *
   * @access private
   * @function testDOMProps
   * @param {array.<string>} props - An array of properties to test for
   * @param {object} obj - An object or Element you want to use to test the parameters again
   * @param {boolean|object} elem - An Element to bind the property lookup again. Use `false` to prevent the check
   */
  function testDOMProps(props, obj, elem) {
    var item;

    for (var i in props) {
      if (props[i] in obj) {

        // return the property name as a string
        if (elem === false) {
          return props[i];
        }

        item = obj[props[i]];

        // let's bind a function
        if (is(item, 'function')) {
          // bind to obj unless overriden
          return fnBind(item, elem || obj);
        }

        // return the unbound function or obj or value
        return item;
      }
    }
    return false;
  }

  ;

  /**
   * Create our "modernizr" element that we do most feature tests on.
   *
   * @access private
   */

  var modElem = {
    elem: createElement('modernizr')
  };

  // Clean up this element
  Modernizr._q.push(function() {
    delete modElem.elem;
  });

  

  var mStyle = {
    style: modElem.elem.style
  };

  // kill ref for gc, must happen before mod.elem is removed, so we unshift on to
  // the front of the queue.
  Modernizr._q.unshift(function() {
    delete mStyle.style;
  });

  

  /**
   * domToCSS takes a camelCase string and converts it to kebab-case
   * e.g. boxSizing -> box-sizing
   *
   * @access private
   * @function domToCSS
   * @param {string} name - String name of camelCase prop we want to convert
   * @returns {string} The kebab-case version of the supplied name
   */

  function domToCSS(name) {
    return name.replace(/([A-Z])/g, function(str, m1) {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-');
  }
  ;

  /**
   * nativeTestProps allows for us to use native feature detection functionality if available.
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @access private
   * @function nativeTestProps
   * @param {array} props - An array of property names
   * @param {string} value - A string representing the value we want to check via @supports
   * @returns {boolean|undefined} A boolean when @supports exists, undefined otherwise
   */

  // Accepts a list of property names and a single value
  // Returns `undefined` if native detection not available
  function nativeTestProps(props, value) {
    var i = props.length;
    // Start with the JS API: http://www.w3.org/TR/css3-conditional/#the-css-interface
    if ('CSS' in window && 'supports' in window.CSS) {
      // Try every prefixed variant of the property
      while (i--) {
        if (window.CSS.supports(domToCSS(props[i]), value)) {
          return true;
        }
      }
      return false;
    }
    // Otherwise fall back to at-rule (for Opera 12.x)
    else if ('CSSSupportsRule' in window) {
      // Build a condition string for every prefixed variant
      var conditionText = [];
      while (i--) {
        conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');
      }
      conditionText = conditionText.join(' or ');
      return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function(node) {
        return getComputedStyle(node, null).position == 'absolute';
      });
    }
    return undefined;
  }
  ;

  // testProps is a generic CSS / DOM property test.

  // In testing support for a given CSS property, it's legit to test:
  //    `elem.style[styleName] !== undefined`
  // If the property is supported it will return an empty string,
  // if unsupported it will return undefined.

  // We'll take advantage of this quick test and skip setting a style
  // on our modernizr element, but instead just testing undefined vs
  // empty string.

  // Property names can be provided in either camelCase or kebab-case.

  function testProps(props, prefixed, value, skipValueTest) {
    skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest;

    // Try native detect first
    if (!is(value, 'undefined')) {
      var result = nativeTestProps(props, value);
      if (!is(result, 'undefined')) {
        return result;
      }
    }

    // Otherwise do it properly
    var afterInit, i, propsLength, prop, before;

    // If we don't have a style element, that means we're running async or after
    // the core tests, so we'll need to create our own elements to use

    // inside of an SVG element, in certain browsers, the `style` element is only
    // defined for valid tags. Therefore, if `modernizr` does not have one, we
    // fall back to a less used element and hope for the best.
    // for strict XHTML browsers the hardly used samp element is used
    var elems = ['modernizr', 'tspan', 'samp'];
    while (!mStyle.style && elems.length) {
      afterInit = true;
      mStyle.modElem = createElement(elems.shift());
      mStyle.style = mStyle.modElem.style;
    }

    // Delete the objects if we created them.
    function cleanElems() {
      if (afterInit) {
        delete mStyle.style;
        delete mStyle.modElem;
      }
    }

    propsLength = props.length;
    for (i = 0; i < propsLength; i++) {
      prop = props[i];
      before = mStyle.style[prop];

      if (contains(prop, '-')) {
        prop = cssToDOM(prop);
      }

      if (mStyle.style[prop] !== undefined) {

        // If value to test has been passed in, do a set-and-check test.
        // 0 (integer) is a valid property value, so check that `value` isn't
        // undefined, rather than just checking it's truthy.
        if (!skipValueTest && !is(value, 'undefined')) {

          // Needs a try catch block because of old IE. This is slow, but will
          // be avoided in most cases because `skipValueTest` will be used.
          try {
            mStyle.style[prop] = value;
          } catch (e) {}

          // If the property value has changed, we assume the value used is
          // supported. If `value` is empty string, it'll fail here (because
          // it hasn't changed), which matches how browsers have implemented
          // CSS.supports()
          if (mStyle.style[prop] != before) {
            cleanElems();
            return prefixed == 'pfx' ? prop : true;
          }
        }
        // Otherwise just return true, or the property name if this is a
        // `prefixed()` call
        else {
          cleanElems();
          return prefixed == 'pfx' ? prop : true;
        }
      }
    }
    cleanElems();
    return false;
  }

  ;

  /**
   * testPropsAll tests a list of DOM properties we want to check against.
   * We specify literally ALL possible (known and/or likely) properties on
   * the element including the non-vendor prefixed one, for forward-
   * compatibility.
   *
   * @access private
   * @function testPropsAll
   * @param {string} prop - A string of the property to test for
   * @param {string|object} [prefixed] - An object to check the prefixed properties on. Use a string to skip
   * @param {HTMLElement|SVGElement} [elem] - An element used to test the property and value against
   * @param {string} [value] - A string of a css value
   * @param {boolean} [skipValueTest] - An boolean representing if you want to test if value sticks when set
   */
  function testPropsAll(prop, prefixed, elem, value, skipValueTest) {

    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
    props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

    // did they call .prefixed('boxSizing') or are we just testing a prop?
    if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
      return testProps(props, prefixed, value, skipValueTest);

      // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
    } else {
      props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  }

  // Modernizr.testAllProps() investigates whether a given style property,
  // or any of its vendor-prefixed variants, is recognized
  //
  // Note that the property names must be provided in the camelCase variant.
  // Modernizr.testAllProps('boxSizing')
  ModernizrProto.testAllProps = testPropsAll;

  

  /**
   * testAllProps determines whether a given CSS property is supported in the browser
   *
   * @memberof Modernizr
   * @name Modernizr.testAllProps
   * @optionName Modernizr.testAllProps()
   * @optionProp testAllProps
   * @access public
   * @function testAllProps
   * @param {string} prop - String naming the property to test (either camelCase or kebab-case)
   * @param {string} [value] - String of the value to test
   * @param {boolean} [skipValueTest=false] - Whether to skip testing that the value is supported when using non-native detection
   * @example
   *
   * testAllProps determines whether a given CSS property, in some prefixed form,
   * is supported by the browser.
   *
   * ```js
   * testAllProps('boxSizing')  // true
   * ```
   *
   * It can optionally be given a CSS value in string form to test if a property
   * value is valid
   *
   * ```js
   * testAllProps('display', 'block') // true
   * testAllProps('display', 'penguin') // false
   * ```
   *
   * A boolean can be passed as a third parameter to skip the value check when
   * native detection (@supports) isn't available.
   *
   * ```js
   * testAllProps('shapeOutside', 'content-box', true);
   * ```
   */

  function testAllProps(prop, value, skipValueTest) {
    return testPropsAll(prop, undefined, undefined, value, skipValueTest);
  }
  ModernizrProto.testAllProps = testAllProps;
  
/*!
{
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
  "notes": [{
    "name" : "Article: 'Dispelling the Android CSS animation myths'",
    "href": "https://goo.gl/OGw5Gm"
  }]
}
!*/
/* DOC
Detects whether or not elements can be animated using CSS
*/

  Modernizr.addTest('cssanimations', testAllProps('animationName', 'a', true));

/*!
{
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
}
!*/
/* DOC
Detects support for the Flexible Box Layout model, a.k.a. Flexbox, which allows easy manipulation of layout order and sizing within a container.
*/

  Modernizr.addTest('flexbox', testAllProps('flexBasis', '1px', true));

/*!
{
  "name": "Flexbox (tweener)",
  "property": "flexboxtweener",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _inbetween_ flexbox",
    "href": "https://www.w3.org/TR/2011/WD-css3-flexbox-20111129/"
  }],
  "warnings": ["This represents an old syntax, not the latest standard syntax."]
}
!*/

  Modernizr.addTest('flexboxtweener', testAllProps('flexAlign', 'end', true));


  // Run each test
  testRunner();

  // Remove the "no-js" class if it exists
  setClasses(classes);

  delete ModernizrProto.addTest;
  delete ModernizrProto.addAsyncTest;

  // Run the things that are supposed to run after the tests
  for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  }

  // Leak Modernizr namespace
  window.Modernizr = Modernizr;


;

})(window, document);
/*
selectivizr v1.0.2 - (c) Keith Clark, freely distributable under the terms 
of the MIT license.

selectivizr.com
*/
/* 
  
Notes about this source
-----------------------

 * The #DEBUG_START and #DEBUG_END comments are used to mark blocks of code
   that will be removed prior to building a final release version (using a
   pre-compression script)
  
  
References:
-----------
 
 * CSS Syntax          : http://www.w3.org/TR/2003/WD-css3-syntax-20030813/#style
 * Selectors           : http://www.w3.org/TR/css3-selectors/#selectors
 * IE Compatability    : http://msdn.microsoft.com/en-us/library/cc351024(VS.85).aspx
 * W3C Selector Tests  : http://www.w3.org/Style/CSS/Test/CSS3/Selectors/current/html/tests/
 
*/

(function(win) {

	// If browser isn't IE, then stop execution! This handles the script 
	// being loaded by non IE browsers because the developer didn't use 
	// conditional comments.
	if (/*@cc_on!@*/true) return;

	// =========================== Init Objects ============================

	var doc = document;
	var root = doc.documentElement;
	var xhr = getXHRObject();
	var ieVersion = /MSIE (\d+)/.exec(navigator.userAgent)[1];
	
	// If were not in standards mode, IE is too old / new or we can't create
	// an XMLHttpRequest object then we should get out now.
	if (doc.compatMode != 'CSS1Compat' || ieVersion<6 || ieVersion>8 || !xhr) {
		return;
	}
	
	
	// ========================= Common Objects ============================

	// Compatiable selector engines in order of CSS3 support. Note: '*' is
	// a placholder for the object key name. (basically, crude compression)
	var selectorEngines = {
		"NW"								: "*.Dom.select",
		"MooTools"							: "$$",
		"DOMAssistant"						: "*.$", 
		"Prototype"							: "$$",
		"YAHOO"								: "*.util.Selector.query",
		"Sizzle"							: "*", 
		"jQuery"							: "*",
		"dojo"								: "*.query"
	};

	var selectorMethod;
	var enabledWatchers 					= [];     // array of :enabled/:disabled elements to poll
	var ie6PatchID 							= 0;      // used to solve ie6's multiple class bug
	var patchIE6MultipleClasses				= true;   // if true adds class bloat to ie6
	var namespace 							= "slvzr";
	
	// Stylesheet parsing regexp's
	var RE_COMMENT							= /(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g;
	var RE_IMPORT							= /@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g;
	var RE_ASSET_URL 						= /\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g;
	var RE_PSEUDO_STRUCTURAL				= /^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/;
	var RE_PSEUDO_ELEMENTS					= /:(:first-(?:line|letter))/g;
	var RE_SELECTOR_GROUP					= /(^|})\s*([^\{]*?[\[:][^{]+)/g;
	var RE_SELECTOR_PARSE					= /([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g; 
	var RE_LIBRARY_INCOMPATIBLE_PSEUDOS		= /(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g;
	var RE_PATCH_CLASS_NAME_REPLACE			= /[^\w-]/g;
	
	// HTML UI element regexp's
	var RE_INPUT_ELEMENTS					= /^(INPUT|SELECT|TEXTAREA|BUTTON)$/;
	var RE_INPUT_CHECKABLE_TYPES			= /^(checkbox|radio)$/;

	// Broken attribute selector implementations (IE7/8 native [^=""], [$=""] and [*=""])
	var BROKEN_ATTR_IMPLEMENTATIONS			= ieVersion>6 ? /[\$\^*]=(['"])\1/ : null;

	// Whitespace normalization regexp's
	var RE_TIDY_TRAILING_WHITESPACE			= /([(\[+~])\s+/g;
	var RE_TIDY_LEADING_WHITESPACE			= /\s+([)\]+~])/g;
	var RE_TIDY_CONSECUTIVE_WHITESPACE		= /\s+/g;
	var RE_TIDY_TRIM_WHITESPACE				= /^\s*((?:[\S\s]*\S)?)\s*$/;
	
	// String constants
	var EMPTY_STRING						= "";
	var SPACE_STRING						= " ";
	var PLACEHOLDER_STRING					= "$1";

	// =========================== Patching ================================

	// --[ patchStyleSheet() ]----------------------------------------------
	// Scans the passed cssText for selectors that require emulation and
	// creates one or more patches for each matched selector.
	function patchStyleSheet( cssText ) {
		return cssText.replace(RE_PSEUDO_ELEMENTS, PLACEHOLDER_STRING).
			replace(RE_SELECTOR_GROUP, function(m, prefix, selectorText) {	
    			var selectorGroups = selectorText.split(",");
    			for (var c = 0, cs = selectorGroups.length; c < cs; c++) {
    				var selector = normalizeSelectorWhitespace(selectorGroups[c]) + SPACE_STRING;
    				var patches = [];
    				selectorGroups[c] = selector.replace(RE_SELECTOR_PARSE, 
    					function(match, combinator, pseudo, attribute, index) {
    						if (combinator) {
    							if (patches.length>0) {
    								applyPatches( selector.substring(0, index), patches );
    								patches = [];
    							}
    							return combinator;
    						}		
    						else {
    							var patch = (pseudo) ? patchPseudoClass( pseudo ) : patchAttribute( attribute );
    							if (patch) {
    								patches.push(patch);
    								return "." + patch.className;
    							}
    							return match;
    						}
    					}
    				);
    			}
    			return prefix + selectorGroups.join(",");
    		});
	};

	// --[ patchAttribute() ]-----------------------------------------------
	// returns a patch for an attribute selector.
	function patchAttribute( attr ) {
		return (!BROKEN_ATTR_IMPLEMENTATIONS || BROKEN_ATTR_IMPLEMENTATIONS.test(attr)) ? 
			{ className: createClassName(attr), applyClass: true } : null;
	};

	// --[ patchPseudoClass() ]---------------------------------------------
	// returns a patch for a pseudo-class
	function patchPseudoClass( pseudo ) {

		var applyClass = true;
		var className = createClassName(pseudo.slice(1));
		var isNegated = pseudo.substring(0, 5) == ":not(";
		var activateEventName;
		var deactivateEventName;

		// if negated, remove :not() 
		if (isNegated) {
			pseudo = pseudo.slice(5, -1);
		}
		
		// bracket contents are irrelevant - remove them
		var bracketIndex = pseudo.indexOf("(")
		if (bracketIndex > -1) {
			pseudo = pseudo.substring(0, bracketIndex);
		}		
		
		// check we're still dealing with a pseudo-class
		if (pseudo.charAt(0) == ":") {
			switch (pseudo.slice(1)) {

				case "root":
					applyClass = function(e) {
						return isNegated ? e != root : e == root;
					}
					break;

				case "target":
					// :target is only supported in IE8
					if (ieVersion == 8) {
						applyClass = function(e) {
							var handler = function() { 
								var hash = location.hash;
								var hashID = hash.slice(1);
								return isNegated ? (hash == EMPTY_STRING || e.id != hashID) : (hash != EMPTY_STRING && e.id == hashID);
							};
							addEvent( win, "hashchange", function() {
								toggleElementClass(e, className, handler());
							})
							return handler();
						}
						break;
					}
					return false;
				
				case "checked":
					applyClass = function(e) { 
						if (RE_INPUT_CHECKABLE_TYPES.test(e.type)) {
							addEvent( e, "propertychange", function() {
								if (event.propertyName == "checked") {
									toggleElementClass( e, className, e.checked !== isNegated );
								} 							
							})
						}
						return e.checked !== isNegated;
					}
					break;
					
				case "disabled":
					isNegated = !isNegated;

				case "enabled":
					applyClass = function(e) { 
						if (RE_INPUT_ELEMENTS.test(e.tagName)) {
							addEvent( e, "propertychange", function() {
								if (event.propertyName == "$disabled") {
									toggleElementClass( e, className, e.$disabled === isNegated );
								} 
							});
							enabledWatchers.push(e);
							e.$disabled = e.disabled;
							return e.disabled === isNegated;
						}
						return pseudo == ":enabled" ? isNegated : !isNegated;
					}
					break;
					
				case "focus":
					activateEventName = "focus";
					deactivateEventName = "blur";
								
				case "hover":
					if (!activateEventName) {
						activateEventName = "mouseenter";
						deactivateEventName = "mouseleave";
					}
					applyClass = function(e) {
						addEvent( e, isNegated ? deactivateEventName : activateEventName, function() {
							toggleElementClass( e, className, true );
						})
						addEvent( e, isNegated ? activateEventName : deactivateEventName, function() {
							toggleElementClass( e, className, false );
						})
						return isNegated;
					}
					break;
					
				// everything else
				default:
					// If we don't support this pseudo-class don't create 
					// a patch for it
					if (!RE_PSEUDO_STRUCTURAL.test(pseudo)) {
						return false;
					}
					break;
			}
		}
		return { className: className, applyClass: applyClass };
	};

	// --[ applyPatches() ]-------------------------------------------------
	// uses the passed selector text to find DOM nodes and patch them	
	function applyPatches(selectorText, patches) {
		var elms;
		
		// Although some selector libraries can find :checked :enabled etc. 
		// we need to find all elements that could have that state because 
		// it can be changed by the user.
		var domSelectorText = selectorText.replace(RE_LIBRARY_INCOMPATIBLE_PSEUDOS, EMPTY_STRING);
		
		// If the dom selector equates to an empty string or ends with 
		// whitespace then we need to append a universal selector (*) to it.
		if (domSelectorText == EMPTY_STRING || domSelectorText.charAt(domSelectorText.length - 1) == SPACE_STRING) {
			domSelectorText += "*";
		}
		
		// Ensure we catch errors from the selector library
		try {
			elms = selectorMethod( domSelectorText );
		} catch (ex) {
			// #DEBUG_START
			log( "Selector '" + selectorText + "' threw exception '" + ex + "'" );
			// #DEBUG_END
		}


		if (elms) {
			for (var d = 0, dl = elms.length; d < dl; d++) {	
				var elm = elms[d];
				var cssClasses = elm.className;
				for (var f = 0, fl = patches.length; f < fl; f++) {
					var patch = patches[f];
					
					if (!hasPatch(elm, patch)) {
						if (patch.applyClass && (patch.applyClass === true || patch.applyClass(elm) === true)) {
							cssClasses = toggleClass(cssClasses, patch.className, true );
						}
					}
				}
				elm.className = cssClasses;
			}
		}
	};

	// --[ hasPatch() ]-----------------------------------------------------
	// checks for the exsistence of a patch on an element
	function hasPatch( elm, patch ) {
		return new RegExp("(^|\\s)" + patch.className + "(\\s|$)").test(elm.className);
	};
	
	
	// =========================== Utility =================================
	
	function createClassName( className ) {
		return namespace + "-" + ((ieVersion == 6 && patchIE6MultipleClasses) ?
			ie6PatchID++
		:
			className.replace(RE_PATCH_CLASS_NAME_REPLACE, function(a) { return a.charCodeAt(0) }));
	};

	// --[ log() ]----------------------------------------------------------
	// #DEBUG_START
	function log( message ) {
		if (win.console) {
			win.console.log(message);
		}
	};
	// #DEBUG_END

	// --[ trim() ]---------------------------------------------------------
	// removes leading, trailing whitespace from a string
	function trim( text ) {
		return text.replace(RE_TIDY_TRIM_WHITESPACE, PLACEHOLDER_STRING);
	};

	// --[ normalizeWhitespace() ]------------------------------------------
	// removes leading, trailing and consecutive whitespace from a string
	function normalizeWhitespace( text ) {
		return trim(text).replace(RE_TIDY_CONSECUTIVE_WHITESPACE, SPACE_STRING);
	};

	// --[ normalizeSelectorWhitespace() ]----------------------------------
	// tidies whitespace around selector brackets and combinators
	function normalizeSelectorWhitespace( selectorText ) {
		return normalizeWhitespace(selectorText.
			replace(RE_TIDY_TRAILING_WHITESPACE, PLACEHOLDER_STRING).
			replace(RE_TIDY_LEADING_WHITESPACE, PLACEHOLDER_STRING)
		);
	};

	// --[ toggleElementClass() ]-------------------------------------------
	// toggles a single className on an element
	function toggleElementClass( elm, className, on ) {
		var oldClassName = elm.className;
		var newClassName = toggleClass(oldClassName, className, on);
		if (newClassName != oldClassName) {
			elm.className = newClassName;
			elm.parentNode.className += EMPTY_STRING;
		}
	};

	// --[ toggleClass() ]--------------------------------------------------
	// adds / removes a className from a string of classNames. Used to 
	// manage multiple class changes without forcing a DOM redraw
	function toggleClass( classList, className, on ) {
		var re = RegExp("(^|\\s)" + className + "(\\s|$)");
		var classExists = re.test(classList);
		if (on) {
			return classExists ? classList : classList + SPACE_STRING + className;
		} else {
			return classExists ? trim(classList.replace(re, PLACEHOLDER_STRING)) : classList;
		}
	};
	
	// --[ addEvent() ]-----------------------------------------------------
	function addEvent(elm, eventName, eventHandler) {
		elm.attachEvent("on" + eventName, eventHandler);
	};

	// --[ getXHRObject() ]-------------------------------------------------
	function getXHRObject()
	{
		if (win.XMLHttpRequest) {
			return new XMLHttpRequest;
		}
		try	{ 
			return new ActiveXObject('Microsoft.XMLHTTP');
		} catch(e) { 
			return null;
		}
	};

	// --[ loadStyleSheet() ]-----------------------------------------------
	function loadStyleSheet( url ) {
		xhr.open("GET", url, false);
		xhr.send();
		return (xhr.status==200) ? xhr.responseText : EMPTY_STRING;	
	};
	
	// --[ resolveUrl() ]---------------------------------------------------
	// Converts a URL fragment to a fully qualified URL using the specified
	// context URL. Returns null if same-origin policy is broken
	function resolveUrl( url, contextUrl ) {
	
		function getProtocolAndHost( url ) {
			return url.substring(0, url.indexOf("/", 8));
		};
		
		// absolute path
		if (/^https?:\/\//i.test(url)) {
			return getProtocolAndHost(contextUrl) == getProtocolAndHost(url) ? url : null;
		}
		
		// root-relative path
		if (url.charAt(0)=="/")	{
			return getProtocolAndHost(contextUrl) + url;
		}

		// relative path
		var contextUrlPath = contextUrl.split(/[?#]/)[0]; // ignore query string in the contextUrl	
		if (url.charAt(0) != "?" && contextUrlPath.charAt(contextUrlPath.length - 1) != "/") {
			contextUrlPath = contextUrlPath.substring(0, contextUrlPath.lastIndexOf("/") + 1);
		}
		
		return contextUrlPath + url;
	};
	
	// --[ parseStyleSheet() ]----------------------------------------------
	// Downloads the stylesheet specified by the URL, removes it's comments
	// and recursivly replaces @import rules with their contents, ultimately
	// returning the full cssText.
	function parseStyleSheet( url ) {
		if (url) {
			return loadStyleSheet(url).replace(RE_COMMENT, EMPTY_STRING).
			replace(RE_IMPORT, function( match, quoteChar, importUrl, quoteChar2, importUrl2 ) { 
				return parseStyleSheet(resolveUrl(importUrl || importUrl2, url));
			}).
			replace(RE_ASSET_URL, function( match, quoteChar, assetUrl ) { 
				quoteChar = quoteChar || EMPTY_STRING;
				return " url(" + quoteChar + resolveUrl(assetUrl, url) + quoteChar + ") "; 
			});
		}
		return EMPTY_STRING;
	};
	
	// --[ init() ]---------------------------------------------------------
	function init() {
		// honour the <base> tag
		var url, stylesheet;
		var baseTags = doc.getElementsByTagName("BASE");
		var baseUrl = (baseTags.length > 0) ? baseTags[0].href : doc.location.href;
		
		/* Note: This code prevents IE from freezing / crashing when using 
		@font-face .eot files but it modifies the <head> tag and could
		trigger the IE stylesheet limit. It will also cause FOUC issues.
		If you choose to use it, make sure you comment out the for loop 
		directly below this comment.

		var head = doc.getElementsByTagName("head")[0];
		for (var c=doc.styleSheets.length-1; c>=0; c--) {
			stylesheet = doc.styleSheets[c]
			head.appendChild(doc.createElement("style"))
			var patchedStylesheet = doc.styleSheets[doc.styleSheets.length-1];
			
			if (stylesheet.href != EMPTY_STRING) {
				url = resolveUrl(stylesheet.href, baseUrl)
				if (url) {
					patchedStylesheet.cssText = patchStyleSheet( parseStyleSheet( url ) )
					stylesheet.disabled = true
					setTimeout( function () {
						stylesheet.owningElement.parentNode.removeChild(stylesheet.owningElement)
					})
				}
			}
		}
		*/
		
		for (var c = 0; c < doc.styleSheets.length; c++) {
			stylesheet = doc.styleSheets[c]
			if (stylesheet.href != EMPTY_STRING) {
				url = resolveUrl(stylesheet.href, baseUrl);
				if (url) {
					stylesheet.cssText = patchStyleSheet( parseStyleSheet( url ) );
				}
			}
		}
		
		// :enabled & :disabled polling script (since we can't hook 
		// onpropertychange event when an element is disabled) 
		if (enabledWatchers.length > 0) {
			setInterval( function() {
				for (var c = 0, cl = enabledWatchers.length; c < cl; c++) {
					var e = enabledWatchers[c];
					if (e.disabled !== e.$disabled) {
						if (e.disabled) {
							e.disabled = false;
							e.$disabled = true;
							e.disabled = true;
						}
						else {
							e.$disabled = e.disabled;
						}
					}
				}
			},250)
		}
	};
	
	// Bind selectivizr to the ContentLoaded event. 
	ContentLoaded(win, function() {
		// Determine the "best fit" selector engine
		for (var engine in selectorEngines) {
			var members, member, context = win;
			if (win[engine]) {
				members = selectorEngines[engine].replace("*", engine).split(".");
				while ((member = members.shift()) && (context = context[member])) {}
				if (typeof context == "function") {
					selectorMethod = context;
					init();
					return;
				}
			}
		}
	});
	
	
	/*!
	 * ContentLoaded.js by Diego Perini, modified for IE<9 only (to save space)
	 *
	 * Author: Diego Perini (diego.perini at gmail.com)
	 * Summary: cross-browser wrapper for DOMContentLoaded
	 * Updated: 20101020
	 * License: MIT
	 * Version: 1.2
	 *
	 * URL:
	 * http://javascript.nwbox.com/ContentLoaded/
	 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
	 *
	 */

	// @w window reference
	// @f function reference
	function ContentLoaded(win, fn) {

		var done = false, top = true,
		init = function(e) {
			if (e.type == "readystatechange" && doc.readyState != "complete") return;
			(e.type == "load" ? win : doc).detachEvent("on" + e.type, init, false);
			if (!done && (done = true)) fn.call(win, e.type || e);
		},
		poll = function() {
			try { root.doScroll("left"); } catch(e) { setTimeout(poll, 50); return; }
			init('poll');
		};

		if (doc.readyState == "complete") fn.call(win, EMPTY_STRING);
		else {
			if (doc.createEventObject && root.doScroll) {
				try { top = !win.frameElement; } catch(e) { }
				if (top) poll();
			}
			addEvent(doc,"readystatechange", init);
			addEvent(win,"load", init);
		}
	};
})(this);
jQuery(document).ready(function($){

	var $w = $(window);
	var $d = $(document);


	/*===  SOME RANDOM THIGS ===*/
	$('input[placeholder], textarea[placeholder]').placeholderEnhanced();


	/*--- SCROLL ANCHOR SMOOTH ---*/
	$('.js-anchorSmooth').on('click', function(e){
		e.preventDefault();

		var ScrollBlockId = $(this).attr('href');
		if ( $(ScrollBlockId).length > 0 ){
			var ScrollPosition = $(ScrollBlockId).offset().top;
	    	$('body').animate({scrollTop: ScrollPosition }, 750);
	    }
	});
	
	/*===  END SOME RANDOM THIGS ===*/

});