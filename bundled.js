!function r(s,a,u){function l(e,t){if(!a[e]){if(!s[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(h)return h(e,!0);var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}var o=a[e]={exports:{}};s[e][0].call(o.exports,function(t){return l(s[e][1][t]||t)},o,o.exports,r,s,a,u)}return a[e].exports}for(var h="function"==typeof require&&require,t=0;t<u.length;t++)l(u[t]);return l}({1:[function(t,e,n){"use strict";var i,w=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(n,"__esModule",{value:!0});var o,r=t("fraction.js");!function(o){o.defaultNextItem=null,o.currentLevel=0;var t=(Object.defineProperty(e.prototype,"isDisplaying",{get:function(){return this._isDisplaying},enumerable:!0,configurable:!0}),e.prototype.display=function(){this._isDisplaying=!0},e.prototype.undisplay=function(){this._isDisplaying=!1},e.prototype.getNextItem=function(){if(null!=o.defaultNextItem)return o.defaultNextItem(this);throw new Error("No default next item provided")},e.prototype.displayNext=function(){this.undisplay();var t=this.getNextItem();null!==t&&t.display()},e.prototype.reset=function(){},e);function e(){this._isDisplaying=!1,this._isDisplaying=!1,this.reset()}o.DisplayedItem=t;var n=(Object.defineProperty(i.prototype,"question",{get:function(){return this._question},enumerable:!0,configurable:!0}),i);function i(t,e,n){void 0===n&&(n=!1),this.imgSrc=t,this.name=e,this.isCorrect=n}o.QuestionOption=n;var r,s=(w(a,r=t),a.prototype.answered=function(t){if(!this.canAnswerMultipleTimes()&&null!=this.answeredOption)throw"Cannot answer a question twice";console.log("correct: "+t.isCorrect),t.isCorrect?(this.answeredOption=t,this.correctHandler(t)):this.incorrectHandler(t)},a.prototype.correctHandler=function(t){this.displayNext()},a.prototype.incorrectHandler=function(t){this.answeredOption=null,$("#question-dialog").removeData(),$("#question-dialog").attr("data-backdrop","static"),$("#question-dialog .modal-title").text("Incorrect"),$("#question-dialog .modal-footer button").text("OK"),$("#question-dialog .modal-body").text("Sorry, that's not the right answer. Try again!"),$("#question-dialog").modal()},a.prototype.canAnswerMultipleTimes=function(){return!1},a);function a(t,e){var n=r.call(this)||this;return n.questionTitle=t,(e=u(n.options=e)).forEach(function(t){t._question=n}),n.answeredOption=null,n}function u(t){var e,n,i;for(i=t.length-1;0<i;i--)e=Math.floor(Math.random()*(i+1)),n=t[i],t[i]=t[e],t[e]=n;return t}o.Question=s,o.shuffle=u;var l,h=(w(d,l=t),d.prototype.dialogCreated=function(){},d.prototype.display=function(){var t=this;setTimeout(function(){$("#question-dialog").removeData(),$("#question-dialog .modal-title").text(t.title),$("#question-dialog .modal-body").text(t.text),null!=t.buttonText?($("#question-dialog .close").show(),$("#question-dialog .modal-footer").show(),$("#question-dialog .modal-footer button").text(t.buttonText)):($("#question-dialog .close").hide(),$("#question-dialog .modal-footer").hide()),t.dialogCreated(),$("#question-dialog").modal({backdrop:"static"}),$("#question-dialog").one("shown.bs.modal",function(){}),$("#question-dialog").one("hidden.bs.modal",function(){$("#question-dialog").modal("dispose"),t.displayNext()})},1e3)},d);function d(t,e,n){void 0===n&&(n="OK");var i=l.call(this)||this;return i.title=t,i.text=e,i.buttonText=n,i}o.InfoBox=h;var c,f=(w(p,c=t),p.prototype.display=function(){var t=this;setTimeout(function(){t.displayNext()},this.time)},p);function p(t){var e=c.call(this)||this;return e.time=t,e}o.Delay=f;var v,m=(w(y,v=h),y.prototype.dialogCreated=function(){$("#question-dialog .modal-body").text("");var i=$("<div></div>");i.addClass("level-buttons"),this.levelMarkups.forEach(function(t,e){var n=$("<button></button>");n.html(t),n.data("level-id",e),n.click(function(){o.currentLevel=n.data("level-id"),$("#question-dialog").modal("hide")}),i.append(n)}),$("#question-dialog .modal-body").append(i)},y);function y(t){var e=v.call(this,"Choose a level","",null)||this;return e.levelMarkups=t,e}o.LevelChoice=m,o.getRandomInt=function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t},o.getRandomArbitrary=function(t,e){return Math.random()*(e-t)+t}}(o=o||{});var s,a=(s=o.DisplayedItem,w(u,s),u.prototype.display=function(){var t=this;!function(t,e,n){void 0===e&&(e=!1);var i=$(window).height()-$(".canoer").height()/2,o=parseInt($(".canoer").css("bottom"));e&&(t+=o/i*100),i*=t/100,console.log("target: "+i);var r=10*(i-o);$(".canoer").addClass("canoer-animated"),$(".canoer").animate({bottom:t+"%"},r,"linear",function(){$(".canoer-animated").removeClass("canoer-animated"),n&&n()})}(this.percent,this.relative,function(){t.displayNext()})},u);function u(t,e){void 0===e&&(e=!1);var n=s.call(this)||this;return n.percent=t,n.relative=e,n}var l,h=(l=o.DisplayedItem,w(d,l),d.prototype.display=function(){$(".canoer").css("bottom",this.percent+"%"),this.displayNext()},d);function d(t){var e=l.call(this)||this;return e.percent=t,e}var c,f=(c=o.LevelChoice,w(p,c),p.prototype.dialogCreated=function(){c.prototype.dialogCreated.call(this),MathJax.Hub.Queue(["Typeset",MathJax.Hub]),MathJax.Hub.Queue(function(){$(".MathJax_CHTML").css("font-size","inherit")})},p);function p(){return null!==c&&c.apply(this,arguments)||this}var v=o.getRandomInt;function m(t,e){if(e=e||function(){},Modernizr.audio){var n=new Audio(t);n.onerror=function(){e()},n.addEventListener("ended",e),n.play()}else e()}var y,g=(y=o.InfoBox,w(b,y),b.generateNumber=function(){var t=v(1,9);switch(o.currentLevel+1){default:throw"Unexpected level";case 1:return new r.default(v(0,9),1);case 2:return new r.default(v(10,99),1);case 3:return new r.default(v(100,999),1);case 4:return new r.default(v(1e3,9999),1);case 5:return new r.default(v(1,9),10);case 6:return new r.default(v(10,99),100);case 7:return new r.default(v(100,999),1e3);case 8:return new r.default(t,v(1,9));case 9:return new r.default(v(1,9),t);case 10:return new r.default(v(1,9).toString()+" "+new r.default(v(1,9),v(1,9)).toFraction())}},b.convertFraction=function(t){var e=o.currentLevel+1;return 5<=e&&e<=7?t.toString(e-5+1):t.toFraction(!0)},b.prototype.isCorrect=function(t){switch(t){case 0:return this.leftNum.compare(this.rightNum)<0;case 1:return 0==this.leftNum.compare(this.rightNum);case 2:return 0<this.leftNum.compare(this.rightNum);default:throw"Unexpected symbol"}},b.prototype.dialogCreated=function(){var i=this;$("#question-dialog .modal-body").text(""),this.leftNum=b.generateNumber(),this.rightNum=b.generateNumber();var o=$("<div></div>");o.addClass("math-question"),$("#question-dialog .modal-body").append(o),o.html("Choose the symbol that best describes these numbers.<p></p><span>`"+b.convertFraction(this.leftNum)+"` <span class='question-mark'><i class='far fa-question-circle'></i></span> `"+b.convertFraction(this.rightNum)+"`</span><p></p><button class='less-than'>` < `</button><button class='equals'>` = `</button><button class='greater-than'>` > `</button>"),o.find("button").click(function(t){var e,n=$(t.target);if(n.hasClass("less-than"))e=0;else if(n.hasClass("equals"))e=1;else{if(!n.hasClass("greater-than"))throw"Unknown symbol";e=2}i.isCorrect(e)?(m("correct.mp3"),$(".math-question button").prop("disabled",!0),o.find(".question-mark").html("` "+["<","=",">"][e]+" `"),o.find(".question-mark").css("color","green"),MathJax.Hub.Queue(["Typeset",MathJax.Hub]),MathJax.Hub.Queue(function(){setTimeout(function(){$("#question-dialog").modal("hide")},3e3)})):(n.effect("shake"),$(".math-question button").prop("disabled",!0),m("wrong.wav",function(){$(".math-question button").prop("disabled",!1)}))}),MathJax.Hub.Queue(["Typeset",MathJax.Hub]),MathJax.Hub.Queue(function(){$(".math-question > span").children("span").css("font-size","inherit")})},b);function b(){return y.call(this,"","",null)||this}var N,x=0,M=[],q=(N=o.DisplayedItem,w(C,N),C.prototype.display=function(){this.numLoops<this.times&&(this.relative?x+=this.index:x=this.index,x-=1,this.numLoops++),this.displayNext()},C.prototype.reset=function(){this.numLoops=0},C);function C(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=1);var i=N.call(this)||this;return i.index=t,i.relative=e,i.times=n,t<(i.numLoops=0)&&(i.relative=!0),i}var L,_=(L=o.DisplayedItem,w(D,L),D.prototype.display=function(){M.forEach(function(t){t.reset()}),this.displayNext()},D);function D(){return null!==L&&L.apply(this,arguments)||this}M=[new _,new o.InfoBox("Welcome!","Welcome to Comparison Canoeing! This game will teach you all about comparing numbers."),new a(7),new f(["Level 1<p>`6 < 7`","Level 2<p>`12 < 15`","Level 3<p>`325 > 199`","Level 4<p>`2500 > 1877`","Level 5<p>`0.2 < 0.5`","Level 6<p>`0.19 < 0.21`","Level 7<p>`0.234 > 0.168`","Level 8<p>`1/5 < 1/7`","Level 9<p>`2/4 < 3/4`","Level 10<p>`3 1/3 > 1 7/9`"]),new g,new a(7,!0),new q(-2,!0,9),new o.InfoBox("Congratulations!","You've crossed the river! Ready to try a different level?","Yes!"),new _,new h(0),new q(2,!1,1)],o.defaultNextItem=function(t){return x==M.length-1?(console.error("No next items"),null):(console.log("Get from index "+(x+1)),M[++x])},$(window).on("load",function(){r.default.REDUCE=!1,M[x].display()})},{"fraction.js":2}],2:[function(t,o,r){!function(t){"use strict";var v={s:1,n:0,d:1};function e(e){function t(){var t=Error.apply(this,arguments);t.name=this.name=e,this.stack=t.stack,this.message=t.message}function n(){}return n.prototype=Error.prototype,t.prototype=new n,t}var m=l.DivisionByZero=e("DivisionByZero"),n=l.InvalidParameter=e("InvalidParameter");function y(t,e){return isNaN(t=parseInt(t,10))&&w(),t*e}function w(){throw new n}var i=function(t,e){var n,i=0,o=1,r=1,s=0,a=0,u=0,l=1,h=1,d=0,c=1,f=1,p=1;if(null==t);else if(void 0!==e)r=(i=t)*(o=e);else switch(typeof t){case"object":"d"in t&&"n"in t?(i=t.n,o=t.d,"s"in t&&(i*=t.s)):0 in t?(i=t[0],1 in t&&(o=t[1])):w(),r=i*o;break;case"number":if(t<0&&(t=-(r=t)),t%1==0)i=t;else if(0<t){for(1<=t&&(t/=h=Math.pow(10,Math.floor(1+Math.log(t)/Math.LN10)));c<=1e7&&p<=1e7;){if(t===(n=(d+f)/(c+p))){o=c+p<=1e7?(i=d+f,c+p):c<p?(i=f,p):(i=d,c);break}n<t?(d+=f,c+=p):(f+=d,p+=c),o=1e7<c?(i=f,p):(i=d,c)}i*=h}else(isNaN(t)||isNaN(e))&&(o=i=NaN);break;case"string":if(null===(c=t.match(/\d+|./g))&&w(),"-"===c[d]?(r=-1,d++):"+"===c[d]&&d++,c.length===d+1?a=y(c[d++],r):"."===c[d+1]||"."===c[d]?("."!==c[d]&&(s=y(c[d++],r)),(++d+1===c.length||"("===c[d+1]&&")"===c[d+3]||"'"===c[d+1]&&"'"===c[d+3])&&(a=y(c[d],r),l=Math.pow(10,c[d].length),d++),("("===c[d]&&")"===c[d+2]||"'"===c[d]&&"'"===c[d+2])&&(u=y(c[d+1],r),h=Math.pow(10,c[d+1].length)-1,d+=3)):"/"===c[d+1]||":"===c[d+1]?(a=y(c[d],r),l=y(c[d+2],1),d+=3):"/"===c[d+3]&&" "===c[d+1]&&(s=y(c[d],r),a=y(c[d+2],r),l=y(c[d+4],1),d+=5),c.length<=d){r=i=u+(o=l*h)*s+h*a;break}default:w()}if(0===o)throw new m;v.s=r<0?-1:1,v.n=Math.abs(i),v.d=Math.abs(o)};function u(t,e){if(!t)return e;if(!e)return t;for(;;){if(!(t%=e))return e;if(!(e%=t))return t}}function l(t,e){if(!(this instanceof l))return new l(t,e);i(t,e),t=l.REDUCE?u(v.d,v.n):1,this.s=v.s,this.n=v.n/t,this.d=v.d/t}l.REDUCE=1,l.prototype={s:1,n:0,d:1,abs:function(){return new l(this.n,this.d)},neg:function(){return new l(-this.s*this.n,this.d)},add:function(t,e){return i(t,e),new l(this.s*this.n*v.d+v.s*this.d*v.n,this.d*v.d)},sub:function(t,e){return i(t,e),new l(this.s*this.n*v.d-v.s*this.d*v.n,this.d*v.d)},mul:function(t,e){return i(t,e),new l(this.s*v.s*this.n*v.n,this.d*v.d)},div:function(t,e){return i(t,e),new l(this.s*v.s*this.n*v.d,this.d*v.n)},clone:function(){return new l(this)},mod:function(t,e){return isNaN(this.n)||isNaN(this.d)?new l(NaN):void 0===t?new l(this.s*this.n%this.d,1):(i(t,e),0===v.n&&0===this.d&&l(0,0),new l(this.s*(v.d*this.n)%(v.n*this.d),v.d*this.d))},gcd:function(t,e){return i(t,e),new l(u(v.n,this.n)*u(v.d,this.d),v.d*this.d)},lcm:function(t,e){return i(t,e),0===v.n&&0===this.n?new l:new l(v.n*this.n,u(v.n,this.n)*u(v.d,this.d))},ceil:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new l(NaN):new l(Math.ceil(t*this.s*this.n/this.d),t)},floor:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new l(NaN):new l(Math.floor(t*this.s*this.n/this.d),t)},round:function(t){return t=Math.pow(10,t||0),isNaN(this.n)||isNaN(this.d)?new l(NaN):new l(Math.round(t*this.s*this.n/this.d),t)},inverse:function(){return new l(this.s*this.d,this.n)},pow:function(t){return t<0?new l(Math.pow(this.s*this.d,-t),Math.pow(this.n,-t)):new l(Math.pow(this.s*this.n,t),Math.pow(this.d,t))},equals:function(t,e){return i(t,e),this.s*this.n*v.d==v.s*v.n*this.d},compare:function(t,e){i(t,e);var n=this.s*this.n*v.d-v.s*v.n*this.d;return(0<n)-(n<0)},simplify:function(t){if(isNaN(this.n)||isNaN(this.d))return this;var e=this.abs().toContinued();function n(t){return 1===t.length?new l(t[0]):n(t.slice(1)).inverse().add(t[0])}t=t||.001;for(var i=0;i<e.length;i++){var o=n(e.slice(0,i+1));if(o.sub(this.abs()).abs().valueOf()<t)return o.mul(this.s)}return this},divisible:function(t,e){return i(t,e),!(!(v.n*this.d)||this.n*v.d%(v.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(t){var e,n="",i=this.n,o=this.d;return this.s<0&&(n+="-"),1===o?n+=i:(t&&0<(e=Math.floor(i/o))&&(n+=e,n+=" ",i%=o),n+=i,n+="/",n+=o),n},toLatex:function(t){var e,n="",i=this.n,o=this.d;return this.s<0&&(n+="-"),1===o?n+=i:(t&&0<(e=Math.floor(i/o))&&(n+=e,i%=o),n+="\\frac{",n+=i,n+="}{",n+=o,n+="}"),n},toContinued:function(){var t,e=this.n,n=this.d,i=[];if(isNaN(this.n)||isNaN(this.d))return i;for(;i.push(Math.floor(e/n)),t=e%n,e=n,n=t,1!==e;);return i},toString:function(t){var e,n=this.n,i=this.d;if(isNaN(n)||isNaN(i))return"NaN";l.REDUCE||(n/=e=u(n,i),i/=e),t=t||15;var o=function(t,e){for(;e%2==0;e/=2);for(;e%5==0;e/=5);if(1===e)return 0;for(var n=10%e,i=1;1!==n;i++)if(n=10*n%e,2e3<i)return 0;return i}(0,i),r=function(t,e,n){for(var i=1,o=function(t,e,n){for(var i=1;0<e;t=t*t%n,e>>=1)1&e&&(i=i*t%n);return i}(10,n,e),r=0;r<300;r++){if(i===o)return r;i=10*i%e,o=10*o%e}return 0}(0,i,o),s=-1===this.s?"-":"";if(s+=n/i|0,n%=i,(n*=10)&&(s+="."),o){for(var a=r;a--;)s+=n/i|0,n%=i,n*=10;s+="(";for(a=o;a--;)s+=n/i|0,n%=i,n*=10;s+=")"}else for(a=t;n&&a--;)s+=n/i|0,n%=i,n*=10;return s}},"function"==typeof define&&define.amd?define([],function(){return l}):"object"==typeof r?(Object.defineProperty(r,"__esModule",{value:!0}),(l.default=l).Fraction=l,o.exports=l):t.Fraction=l}(this)},{}]},{},[1]);