!function(e,t,a){var l,n,s,i,o,r,c,u,h,g,f,d="mPageScroll2id",p="mPS2id",_=".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id",C={scrollSpeed:1300,autoScrollSpeed:!0,scrollEasing:"easeInOutExpo",scrollingEasing:"easeInOutCirc",pageEndSmoothScroll:!0,layout:"vertical",offset:0,highlightSelector:!1,clickedClass:p+"-clicked",targetClass:p+"-target",highlightClass:p+"-highlight",forceSingleHighlight:!1,keepHighlightUntilNext:!1,highlightByNextTarget:!1,disablePluginBelow:!1,clickEvents:!0,onStart:function(){},onComplete:function(){},defaultSelector:!1,live:!0,liveSelector:!1},v=0,m={init:function(r){var r=e.extend(!0,{},C,r);if(e(a).data(p,r),n=e(a).data(p),!this.selector){var c="__"+p;this.each(function(){var t=e(this);t.hasClass(c)||t.addClass(c)}),this.selector="."+c}n.liveSelector&&(this.selector+=","+n.liveSelector),l=l?l+","+this.selector:this.selector,n.defaultSelector&&("object"==typeof e(l)&&0!==e(l).length||(l=_)),n.clickEvents&&e(a).undelegate("."+p).delegate(l,"click."+p,function(t){if(S._isDisabled.call(null))return void S._removeClasses.call(null);var a=e(this),l=a.attr("href"),n=a.prop("href");l&&-1!==l.indexOf("#/")||(S._reset.call(null),g=a.data("ps2id-offset")||0,S._isValid.call(null,l,n)&&S._findTarget.call(null,l)&&(t.preventDefault(),i="selector",o=a,S._setClasses.call(null,!0),S._scrollTo.call(null)))}),e(t).unbind("."+p).bind("scroll."+p+" resize."+p,function(){if(S._isDisabled.call(null))return void S._removeClasses.call(null);var t=e("._"+p+"-t");t.each(function(a){var l=e(this),n=l.attr("id"),s=S._findHighlight.call(null,n);S._setClasses.call(null,!1,l,s),a==t.length-1&&S._extendClasses.call(null)})}),s=!0,S._setup.call(null),S._live.call(null)},scrollTo:function(t,a){if(S._isDisabled.call(null))return void S._removeClasses.call(null);if(t&&"undefined"!=typeof t){S._isInit.call(null);var l={layout:n.layout,offset:n.offset,clicked:!1},a=e.extend(!0,{},l,a);S._reset.call(null),u=a.layout,h=a.offset,t=-1!==t.indexOf("#")?t:"#"+t,S._isValid.call(null,t)&&S._findTarget.call(null,t)&&(i="scrollTo",o=a.clicked,o&&S._setClasses.call(null,!0),S._scrollTo.call(null))}},destroy:function(){e(t).unbind("."+p),e(a).undelegate("."+p).removeData(p),e("._"+p+"-t").removeData(p),S._removeClasses.call(null,!0)}},S={_isDisabled:function(){var e=t,l="inner",s=n.disablePluginBelow instanceof Array?[n.disablePluginBelow[0]||0,n.disablePluginBelow[1]||0]:[n.disablePluginBelow||0,0];return"innerWidth"in t||(l="client",e=a.documentElement||a.body),e[l+"Width"]<=s[0]||e[l+"Height"]<=s[1]},_isValid:function(e,a){if(e){a=a?a:e;var l=-1!==a.indexOf("#/")?a.split("#/")[0]:a.split("#")[0],n=t.location.toString().split("#")[0];return"#"!==e&&-1!==e.indexOf("#")&&(""===l||l===n)}},_setup:function(){var t=S._highlightSelector(),a=1,l=0;return e(t).each(function(){var s=e(this),i=s.attr("href"),o=s.prop("href");if(S._isValid.call(null,i,o)){var r=-1!==i.indexOf("#/")?i.split("#/")[1]:i.split("#")[1],c=e("#"+r);if(c.length>0){n.highlightByNextTarget&&c!==l&&(l?l.data(p,{tn:c}):c.data(p,{tn:"0"}),l=c),c.hasClass("_"+p+"-t")||c.addClass("_"+p+"-t"),c.data(p,{i:a}),s.hasClass("_"+p+"-h")||s.addClass("_"+p+"-h");var u=S._findHighlight.call(null,r);S._setClasses.call(null,!1,c,u),v=a,a++,a==e(t).length&&S._extendClasses.call(null)}}})},_highlightSelector:function(){return n.highlightSelector&&""!==n.highlightSelector?n.highlightSelector:l},_findTarget:function(t){var a=-1!==t.indexOf("#/")?t.split("#/")[1]:t.split("#")[1],l=e("#"+a);if(l.length<1||"fixed"===l.css("position")){if("top"!==a)return;l=e("body")}return r=l,u||(u=n.layout),h=S._setOffset.call(null),c=[(l.offset().top-h[0]).toString(),(l.offset().left-h[1]).toString()],c[0]=c[0]<0?0:c[0],c[1]=c[1]<0?0:c[1],c},_setOffset:function(){h||(h=n.offset?n.offset:0),g&&(h=g);var t,a,l,s;switch(typeof h){case"object":case"string":t=[h.y?h.y:h,h.x?h.x:h],a=[t[0]instanceof jQuery?t[0]:e(t[0]),t[1]instanceof jQuery?t[1]:e(t[1])],a[0].length>0?(l=a[0].height(),"fixed"===a[0].css("position")&&(l+=a[0][0].offsetTop)):l=!isNaN(parseFloat(t[0]))&&isFinite(t[0])?parseInt(t[0]):0,a[1].length>0?(s=a[1].width(),"fixed"===a[1].css("position")&&(s+=a[1][0].offsetLeft)):s=!isNaN(parseFloat(t[1]))&&isFinite(t[1])?parseInt(t[1]):0;break;case"function":t=h.call(null),t instanceof Array?(l=t[0],s=t[1]):l=s=t;break;default:l=s=parseInt(h)}return[l,s]},_findHighlight:function(a){var l=t.location.toString().split("#")[0],n=e("._"+p+"-h[href='#"+a+"']"),s=e("._"+p+"-h[href='"+l+"#"+a+"']"),i=e("._"+p+"-h[href='#/"+a+"']"),o=e("._"+p+"-h[href='"+l+"#/"+a+"']");return n=n.length>0?n:s,i=i.length>0?i:o,i.length>0?i:n},_setClasses:function(t,a,l){var s=n.clickedClass,i=n.targetClass,r=n.highlightClass;t&&s&&""!==s?(e("."+s).removeClass(s),o.addClass(s)):a&&i&&""!==i&&l&&r&&""!==r&&(S._currentTarget.call(null,a)?(a.addClass(i),l.addClass(r)):(!n.keepHighlightUntilNext||e("."+r).length>1)&&(a.removeClass(i),l.removeClass(r)))},_extendClasses:function(){var t=n.targetClass,a=n.highlightClass,l=e("."+t),s=e("."+a),i=t+"-first",o=t+"-last",r=a+"-first",c=a+"-last";e("._"+p+"-t").removeClass(i+" "+o),e("._"+p+"-h").removeClass(r+" "+c),n.forceSingleHighlight?n.keepHighlightUntilNext&&l.length>1?(l.slice(0,1).removeClass(t),s.slice(0,1).removeClass(a)):(l.slice(1).removeClass(t),s.slice(1).removeClass(a)):(l.slice(0,1).addClass(i).end().slice(-1).addClass(o),s.slice(0,1).addClass(r).end().slice(-1).addClass(c))},_removeClasses:function(t){e("."+n.clickedClass).removeClass(n.clickedClass),e("."+n.targetClass).removeClass(n.targetClass+" "+n.targetClass+"-first "+n.targetClass+"-last"),e("."+n.highlightClass).removeClass(n.highlightClass+" "+n.highlightClass+"-first "+n.highlightClass+"-last"),t&&(e("._"+p+"-t").removeClass("_"+p+"-t"),e("._"+p+"-h").removeClass("_"+p+"-h"))},_currentTarget:function(a){var l=n["target_"+a.data(p).i],s=a.data("ps2id-target"),i=s?e(s)[0].getBoundingClientRect():a[0].getBoundingClientRect();if("undefined"!=typeof l){var o=a.offset().top,r=a.offset().left,c=l.from?l.from+o:o,u=l.to?l.to+o:o,h=l.fromX?l.fromX+r:r,g=l.toX?l.toX+r:r;return i.top>=u&&i.top<=c&&i.left>=g&&i.left<=h}var f=e(t).height(),d=e(t).width(),_=s?e(s).height():a.height(),C=s?e(s).width():a.width(),v=1+_/f,m=v,S=f>_?v*(f/_):v,I=1+C/d,O=I,M=d>C?I*(d/C):I,b=[i.top<=f/m,i.bottom>=f/S,i.left<=d/O,i.right>=d/M];if(n.highlightByNextTarget){var w=a.data(p).tn;if(w){var y=w[0].getBoundingClientRect();"vertical"===n.layout?b=[i.top<=f/2,y.top>f/2,1,1]:"horizontal"===n.layout&&(b=[1,1,i.left<=d/2,y.left>d/2])}}return b[0]&&b[1]&&b[2]&&b[3]},_scrollTo:function(){n.scrollSpeed=parseInt(n.scrollSpeed),c=n.pageEndSmoothScroll?S._pageEndSmoothScroll.call(null):c;var a=e("html,body"),l=n.autoScrollSpeed?S._autoScrollSpeed.call(null):n.scrollSpeed,s=a.is(":animated")?n.scrollingEasing:n.scrollEasing,i=e(t).scrollTop(),o=e(t).scrollLeft();switch(u){case"horizontal":o!=c[1]&&(S._callbacks.call(null,"onStart"),a.stop().animate({scrollLeft:c[1]},l,s).promise().then(function(){S._callbacks.call(null,"onComplete")}));break;case"auto":if(i!=c[0]||o!=c[1])if(S._callbacks.call(null,"onStart"),navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){var r;a.stop().animate({pageYOffset:c[0],pageXOffset:c[1]},{duration:l,easing:s,step:function(e,a){"pageXOffset"==a.prop?r=e:"pageYOffset"==a.prop&&t.scrollTo(r,e)}}).promise().then(function(){S._callbacks.call(null,"onComplete")})}else a.stop().animate({scrollTop:c[0],scrollLeft:c[1]},l,s).promise().then(function(){S._callbacks.call(null,"onComplete")});break;default:i!=c[0]&&(S._callbacks.call(null,"onStart"),a.stop().animate({scrollTop:c[0]},l,s).promise().then(function(){S._callbacks.call(null,"onComplete")}))}},_pageEndSmoothScroll:function(){var l=e(a).height(),n=e(a).width(),s=e(t).height(),i=e(t).width();return[l-c[0]<s?l-s:c[0],n-c[1]<i?n-i:c[1]]},_autoScrollSpeed:function(){var l=e(t).scrollTop(),s=e(t).scrollLeft(),i=e(a).height(),o=e(a).width(),r=[n.scrollSpeed+n.scrollSpeed*Math.floor(Math.abs(c[0]-l)/i*100)/100,n.scrollSpeed+n.scrollSpeed*Math.floor(Math.abs(c[1]-s)/o*100)/100];return Math.max.apply(Math,r)},_callbacks:function(e){if(n)switch(this[p]={trigger:i,clicked:o,target:r,scrollTo:{y:c[0],x:c[1]}},e){case"onStart":n.onStart.call(null,this[p]);break;case"onComplete":n.onComplete.call(null,this[p])}},_reset:function(){u=h=g=!1},_isInit:function(){s||m.init.apply(this)},_live:function(){f=setTimeout(function(){n.live?e(S._highlightSelector()).length!==v&&S._setup.call(null):f&&clearTimeout(f),S._live.call(null)},1e3)},_easing:function(){function t(e){var t=7.5625,a=2.75;return 1/a>e?t*e*e:2/a>e?t*(e-=1.5/a)*e+.75:2.5/a>e?t*(e-=2.25/a)*e+.9375:t*(e-=2.625/a)*e+.984375}e.easing.easeInQuad=e.easing.easeInQuad||function(e){return e*e},e.easing.easeOutQuad=e.easing.easeOutQuad||function(e){return 1-(1-e)*(1-e)},e.easing.easeInOutQuad=e.easing.easeInOutQuad||function(e){return.5>e?2*e*e:1-Math.pow(-2*e+2,2)/2},e.easing.easeInCubic=e.easing.easeInCubic||function(e){return e*e*e},e.easing.easeOutCubic=e.easing.easeOutCubic||function(e){return 1-Math.pow(1-e,3)},e.easing.easeInOutCubic=e.easing.easeInOutCubic||function(e){return.5>e?4*e*e*e:1-Math.pow(-2*e+2,3)/2},e.easing.easeInQuart=e.easing.easeInQuart||function(e){return e*e*e*e},e.easing.easeOutQuart=e.easing.easeOutQuart||function(e){return 1-Math.pow(1-e,4)},e.easing.easeInOutQuart=e.easing.easeInOutQuart||function(e){return.5>e?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2},e.easing.easeInQuint=e.easing.easeInQuint||function(e){return e*e*e*e*e},e.easing.easeOutQuint=e.easing.easeOutQuint||function(e){return 1-Math.pow(1-e,5)},e.easing.easeInOutQuint=e.easing.easeInOutQuint||function(e){return.5>e?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2},e.easing.easeInExpo=e.easing.easeInExpo||function(e){return 0===e?0:Math.pow(2,10*e-10)},e.easing.easeOutExpo=e.easing.easeOutExpo||function(e){return 1===e?1:1-Math.pow(2,-10*e)},e.easing.easeInOutExpo=e.easing.easeInOutExpo||function(e){return 0===e?0:1===e?1:.5>e?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2},e.easing.easeInSine=e.easing.easeInSine||function(e){return 1-Math.cos(e*Math.PI/2)},e.easing.easeOutSine=e.easing.easeOutSine||function(e){return Math.sin(e*Math.PI/2)},e.easing.easeInOutSine=e.easing.easeInOutSine||function(e){return-(Math.cos(Math.PI*e)-1)/2},e.easing.easeInCirc=e.easing.easeInCirc||function(e){return 1-Math.sqrt(1-Math.pow(e,2))},e.easing.easeOutCirc=e.easing.easeOutCirc||function(e){return Math.sqrt(1-Math.pow(e-1,2))},e.easing.easeInOutCirc=e.easing.easeInOutCirc||function(e){return.5>e?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2},e.easing.easeInElastic=e.easing.easeInElastic||function(e){return 0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*(2*Math.PI/3))},e.easing.easeOutElastic=e.easing.easeOutElastic||function(e){return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*(2*Math.PI/3))+1},e.easing.easeInOutElastic=e.easing.easeInOutElastic||function(e){return 0===e?0:1===e?1:.5>e?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5)))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5))/2+1},e.easing.easeInBack=e.easing.easeInBack||function(e){return 2.70158*e*e*e-1.70158*e*e},e.easing.easeOutBack=e.easing.easeOutBack||function(e){return 1+2.70158*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2)},e.easing.easeInOutBack=e.easing.easeInOutBack||function(e){return.5>e?Math.pow(2*e,2)*(7.189819*e-2.5949095)/2:(Math.pow(2*e-2,2)*(3.5949095*(2*e-2)+2.5949095)+2)/2},e.easing.easeInBounce=e.easing.easeInBounce||function(e){return 1-t(1-e)},e.easing.easeOutBounce=e.easing.easeOutBounce||t,e.easing.easeInOutBounce=e.easing.easeInOutBounce||function(e){return.5>e?(1-t(1-2*e))/2:(1+t(2*e-1))/2}}};S._easing.call(),e.fn[d]=function(t){return m[t]?m[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):m.init.apply(this,arguments)},e[d]=function(t){return m[t]?m[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):m.init.apply(this,arguments)},e[d].defaults=C}(jQuery,window,document);