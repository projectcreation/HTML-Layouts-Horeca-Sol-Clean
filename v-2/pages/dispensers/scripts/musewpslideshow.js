/*
 ADOBE CONFIDENTIAL
 ___________________

 Copyright 2012 Adobe Systems Incorporated
 All Rights Reserved.

 NOTICE:  All information contained herein is, and remains
 the property of Adobe Systems Incorporated and its suppliers,
 if any.  The intellectual and technical concepts contained
 herein are proprietary to Adobe Systems Incorporated and its
 suppliers and may be covered by U.S. and Foreign Patents,
 patents in process, and are protected by trade secret or copyright law.
 Dissemination of this information or reproduction of this material
 is strictly forbidden unless prior written permission is obtained
 from Adobe Systems Incorporated.
*/
(function(a,b,c,d,f){c.Plugins.SlideShowCaptions={defaultOptions:{captionClassName:"SSSlideCaption"},initialize:function(b,c){var d=this;a.extend(c,a.extend({},d.defaultOptions,c));b.bind("attach-behavior",function(){d._attachBehavior(b)})},_attachBehavior:function(a){var b=a._findWidgetElements("."+a.options.captionClassName);if(b.length)a._sscpCaptions=b,b.css("display","none"),a.slides.bind("wp-panel-show",function(a,c){b.eq(c.panelIndex).css("display","block")}),a.slides.bind("wp-panel-hide",
function(a,c){b.eq(c.panelIndex).css("display","none")}),a.bind("ready",function(){-1!=a.slides.activeIndex&&b.eq(a.slides.activeIndex).css("display","block")})}};c.Plugins.SlideShowLabel={defaultOptions:{labelClassName:"SlideShowLabel"},initialize:function(b,c){var d=this;a.extend(c,a.extend({},d.defaultOptions,c));b.bind("attach-behavior",function(){d._attachBehavior(b)})},_attachBehavior:function(a){var b=this,c=a._findWidgetElements("."+a.options.labelClassName);if(c.length)a._$sslpLabels=c,a.slides.bind("wp-panel-show",
function(){b._updateLabels(a)}),a.bind("ready",function(){b._updateLabels(a)})},_findAllTextNodes:function(a,b){b=b||[];switch(a.nodeType){case 3:b.push(a);break;case 1:if(a.nodeName.toLowerCase()!=="script")for(var c=a.firstChild;c;)this._findAllTextNodes(c,b),c=c.nextSibling}a.nextSibling&&this._findAllTextNodes(a.nextSibling,b);return b},_updateLabels:function(a){var b=this,c=a.slides,d=c.activeIndex+1,f=c.$element.length;a._$sslpLabels.each(function(){for(var a=b._findAllTextNodes(this),c=a.length,
g=0,h=function(a){return++g===1?d:g===2?f:a},q=0;q<c;q++){var m=a[q],r=m.nodeValue,t=r.replace(/\d+/g,h);if(t!==r)m.nodeValue=t}})}};c.Plugins.Lightbox={defaultOptions:{lightboxPartsSelector:".PamphletLightboxPart",closeBtnClassName:"PamphletCloseButton"},initialize:function(b,c){var d=this;a.extend(c,a.extend({},d.defaultOptions,c));b._sslbpAutoPlay=c.autoPlay;c.autoPlay=!1;b.bind("before-transform-markup",function(){d._beforeTransformMarkup(b)});b.bind("attach-behavior",function(){d._attachBehavior(b)})},
_beforeTransformMarkup:function(a){a._sslbpShownInitially=!0;var b=a._findWidgetElements("."+a.options.slideClassName);if(b.filter(":hidden").length==0)a._sslbpSlideOffset=b.offset();else{a._sslbpShownInitially=!1;var d=a._findWidgetElements("."+a.options.viewClassName);a._sslbpSlideOffset={top:c.Utils.getCSSIntValue(d,"top")+c.Utils.getCSSIntValue(b,"top"),left:c.Utils.getCSSIntValue(d,"left")+c.Utils.getCSSIntValue(b,"left")}}},_attachBehavior:function(a){var b=this,d=a.options;a.tabs.$element.bind(d.event,
function(){b._openLightbox(a)});a.slides.bind("wp-panel-before-show",function(){b._openLightbox(a)});if(c.Browser.Features.Touch&&d.elastic==="fullScreen")a.slides.$element.not("a[href]").on("click",function(){b._closeLightbox(a)});a._$sslbpCloseBtn=a._findWidgetElements("."+d.closeBtnClassName).bind("click",function(){b._closeLightbox(a)});b._initializeMarkup(a)},_initializeMarkup:function(b){var d=b.options,f=d.elastic!=="off",l=b._findWidgetElements("."+d.viewClassName),j=b.slides.$element,i=l,
n=b._sslbpSlideOffset,o=j.outerWidth(),p=j.outerHeight(),q=b._findWidgetElements(d.lightboxPartsSelector),i=a(l[0].parentNode).filter("."+d.clipClassName);i.length===0&&(i=l);q.each(function(d,k){var i=a(k);if(i.css("position")!=="fixed"){var j=b._sslbpShownInitially?i.offset():{top:c.Utils.getCSSIntValue(i,"top"),left:c.Utils.getCSSIntValue(i,"left")},l={top:j.top-n.top};if(!f)l.left=j.left-n.left;i.css(l)}}).addClass("popup_element");var m=a('<div id="'+(l.attr("id")||"")+'"></div>').css({left:0,
top:0,width:"auto",height:"auto",padding:0,margin:0,zIndex:"auto"}),r;f&&(r=a("<div/>"),d.elastic==="fullScreen"?r.addClass("fullscreen"):d.elastic==="fullWidth"&&r.addClass("fullwidth"),r.css({paddingLeft:l.css("padding-left"),paddingRight:l.css("padding-right"),paddingTop:l.css("padding-top"),paddingBottom:l.css("padding-bottom"),borderColor:l.css("border-left-color"),borderStyle:l.css("border-left-style"),borderLeftWidth:l.css("border-left-width"),borderRightWidth:l.css("border-right-width"),borderTopWidth:l.css("border-top-width"),
borderBottomWidth:l.css("border-bottom-width")}),r.append(i),r.append(q),m.css({border:"none"}));l.removeAttr("id");var t=a("<div class='overlayWedge'></div>").insertBefore(j[0]);m.append(l.children().not("."+d.slideClassName));l.append(j);m.css({visibility:"hidden"}).appendTo(document.body);var l=m.outerWidth(),x=m.outerHeight();m.detach().css({visibility:""});i.css({position:d.elastic==="fullScreen"?"relative":"absolute",padding:0,left:d.elastic==="fullWidth"?"":0,top:0,borderWidth:0,background:"none"});
d.elastic!=="fullScreen"&&i.css({width:o,height:p});d.transitionStyle==="fading"&&j.css({position:"absolute",left:0,top:0});var y;if(b._fstpPositionSlides||b._csspResizeFullScreenImages)y=function(a,c){b._fstpPositionSlides&&b._fstpPositionSlides(a,c);b._csspResizeFullScreenImages&&b._csspResizeFullScreenImages(b,b.slides.$element,d.heroFitting)};j=-o/2;p=-p/2;i=a("<div class='LightboxContent'></div>").css({position:"absolute"}).append(f?r:i);f||i.append(q);i.museOverlay({autoOpen:!1,offsetLeft:j,
offsetTop:p,overlayExtraWidth:l,overlayExtraHeight:x,$overlaySlice:m,$overlayWedge:t,onClose:function(){b.stop();b.slides.hidePanel(b.slides.activeElement)},$elasticContent:r,resizeSlidesFn:y});if(a.browser.msie&&a.browser.version<9){var F=m[0];c.Utils.needPIE(function(){PIE.detach(F);PIE.attach(F)})}b._$sslbpOverlay=i},_openLightbox:function(a){var b=a._$sslbpOverlay;b.data("museOverlay").isOpen||(b.museOverlay("open"),a._sslbpAutoPlay&&a.play())},_closeLightbox:function(a){a._$sslbpOverlay.data("museOverlay").isOpen&&
a._$sslbpOverlay.museOverlay("close")}};c.Plugins.ContentSlideShow={defaultOptions:{displayInterval:3E3,transitionDuration:500,transitionStyle:"fading",contentLayout_runtime:"stack",event:"click",deactivationEvent:"none",hideAllContentsFirst:!1,shuffle:!1,resumeAutoplay:!1,resumeAutoplayInterval:3E3,elastic:"off"},slideShowOverrides:{slideshowClassName:"SlideShowWidget",viewClassName:"SlideShowContentPanel",slideClassName:"SSSlide",slideLinksClassName:"SSSlideLinks",slideLinkClassName:"SSSlideLink",
slideLinkActiveClassName:"SSSlideLinkSelected",slideCountClassName:"SSSlideCount",firstBtnClassName:"SSFirstButton",lastBtnClassName:"SSLastButton",prevBtnClassName:"SSPreviousButton",nextBtnClassName:"SSNextButton",playBtnClassName:"SSPlayButton",stopBtnClassName:"SSStopButton",closeBtnClassName:"SSCloseButton",heroFitting:"fitContentProportionally",thumbFitting:"fillFrameProportionally",lightboxPartsSelector:".SlideShowCaptionPanel, .SSFirstButton, .SSPreviousButton, .SSNextButton, .SSLastButton, .SlideShowLabel, .SSCloseButton",
lightboxEnabled_runtime:!1},compositionOverrides:{slideshowClassName:"PamphletWidget",viewClassName:"ContainerGroup",slideClassName:"Container",slideLinkClassName:"Thumb",slideLinkActiveClassName:"PamphletThumbSelected",prevBtnClassName:"PamphletPrevButton",nextBtnClassName:"PamphletNextButton",closeBtnClassName:"PamphletCloseButton",lightboxPartsSelector:".PamphletLightboxPart"},initialize:function(d,f){var h=this,l=d.$element.hasClass("SlideShowWidget"),j=l?h.slideShowOverrides:h.compositionOverrides;
d._csspIsImageSlideShow=l;this._restartTimer=0;a.extend(f,a.extend({},h.defaultOptions,j,f));if(f.lightboxEnabled_runtime)f.contentLayout_runtime="lightbox";if(f.contentLayout_runtime=="lightbox")f.hideAllContentsFirst=!0;if(f.hideAllContentsFirst)f.defaultIndex=-1;if(f.elastic!=="off")d._csspPositionImage=h._positionImage;l&&(b.Widget.ContentSlideShow.slideImageIncludePlugin.initialize(d,f),c.Plugins.SlideShowLabel.initialize(d,f),c.Plugins.SlideShowCaptions.initialize(d,f));f.transitionStyle=="fading"?
b.Widget.ContentSlideShow.fadingTransitionPlugin.initialize(d,f):c.Browser.Features.Touch&&f.enableSwipe===!0?b.Widget.ContentSlideShow.swipeTransitionPlugin.initialize(d,f):b.Widget.ContentSlideShow.filmstripTransitionPlugin.initialize(d,f);b.Widget.ContentSlideShow.alignPartsToPagePlugin.initialize(d,f);if(f.contentLayout_runtime==="lightbox"){if(f.elastic!=="off")d._csspResizeFullScreenImages=h._resizeFullScreenImages;c.Plugins.Lightbox.initialize(d,f)}f.shuffle===!0&&b.Widget.ContentSlideShow.shufflePlayPlugin.initialize(d,
f);d.bind("transform-markup",function(){h._transformMarkup(d)});d.bind("attach-behavior",function(){h._attachBehavior(d)})},_transformMarkup:function(b){var d=b.options,f=b._findWidgetElements("."+d.viewClassName);if(d.transitionStyle!=="fading"){var l=a('<div class="'+d.clipClassName+'"/>'),j=b._findWidgetElements("."+d.slideClassName),b=j.outerWidth(),j=j.outerHeight();if(d.elastic==="fullScreen")l.addClass("fullscreen");else{var i={position:"relative",width:b+"px",height:j+"px",overflow:"hidden"},
n=f.css("position");if(n==="absolute")i.position=n,i.left=f.css("left"),i.top=f.css("top");else if(n==="fixed"){var o=c.Utils.getStyleSheetRuleById(c.Utils.getPageStyleSheet(),f.get(0).id);i.position=n;i.left=c.Utils.getRuleProperty(o,"left");i.top=c.Utils.getRuleProperty(o,"top");i.bottom=c.Utils.getRuleProperty(o,"bottom");i.right=c.Utils.getRuleProperty(o,"right")}l.css(i)}d.elastic!=="fullScreen"&&f.css({width:b+"px",height:j+"px"});f.css({position:"relative",top:"0",left:"0",margin:"0",overflow:"hidden"}).wrap(l)}else n=
f.css("position"),d.elastic!=="fullScreen"&&n!=="fixed"&&f.css({width:"0",height:"0"})},_attachBehavior:function(b){var f=this,h=b.options,l=b.tabs,j=b.slides.$element,i=h.slideLinkActiveClassName,n=h.contentLayout_runtime==="lightbox";if(h.elastic!=="off"&&(f._resizeFullScreenImages(b,b.slides.$element,h.heroFitting),!n))a(d).on("orientationchange resize",function(){f._resizeFullScreenImages(b,b.slides.$element,h.heroFitting)});if(n)h.hideAllContentsFirst=!0;if(l){var o=l.$element;h.event==="mouseover"&&
o.bind("mouseenter",function(){var b=a(this);b.data("enter",!0);l.selectTab(o.index(b))});h.deactivationEvent==="mouseout_trigger"?o.bind("mouseleave",function(){var c=a(this);c.data("enter",!1);b.slides.hidePanel(o.index(c))}):h.deactivationEvent==="mouseout_both"&&(o.bind("mouseleave",function(){var c=a(this),d=o.index(c),f=j.eq(d);c.data("enter",!1);c.data("setTimeout")||(c.data("setTimeout",!0),setTimeout(function(){!f.data("enter")&&!c.data("enter")&&b.slides.hidePanel(d);c.data("setTimeout",
!1)},300))}),j.bind("mouseenter",function(){a(this).data("enter",!0)}),j.bind("mouseleave",function(){var c=a(this),d=j.index(c),f=o.eq(d);c.data("enter",!1);f.data("setTimeout")||(f.data("setTimeout",!0),setTimeout(function(){!c.data("enter")&&!f.data("enter")&&b.slides.hidePanel(d);f.data("setTimeout",!1)},300))}))}l&&i&&(h.hideAllContentsFirst||l.$element.eq(l.options.defaultIndex).addClass(i),b.slides.bind("wp-panel-show",function(a,b){l.$element.eq(b.panelIndex).addClass(i)}).bind("wp-panel-hide",
function(a,b){l.$element.eq(b.panelIndex).removeClass(i)}));f._attachStopOnClickHandler(b,b.$firstBtn);f._attachStopOnClickHandler(b,b.$lastBtn);f._attachStopOnClickHandler(b,b.$previousBtn);f._attachStopOnClickHandler(b,b.$nextBtn);f._attachStopOnClickHandler(b,b.$playBtn);f._attachStopOnClickHandler(b,b.$stopBtn);f._attachStopOnClickHandler(b,b.$closeBtn);l&&!n&&f._attachStopOnClickHandler(b,l.$element);b._csspIsImageSlideShow||(b.slides.bind("wp-panel-hide",function(b,d){c.Utils.detachIframesAndObjectsToPauseMedia(a(d.panel))}).bind("wp-panel-show",
function(d,f){setTimeout(function(){c.Utils.attachIframesAndObjectsToResumeMedia(a(f.panel))},b.options.transitionDuration)}),j.each(function(){this!=b.slides.activeElement||h.hideAllContentsFirst?c.Utils.detachIframesAndObjectsToPauseMedia(a(this)):c.Utils.attachIframesAndObjectsToResumeMedia(a(this))}))},_startRestartTimer:function(a){this._stopRestartTimer();this._restartTimer=setTimeout(function(){a.play(!0)},a.options.resumeAutoplayInterval+a.options.transitionDuration)},_stopRestartTimer:function(){this._restartTimer&&
clearTimeout(this._restartTimer);this._restartTimer=0},_attachStopOnClickHandler:function(a,b){var c=this;b.bind(a.options.event==="click"?"click":"mouseover",function(){a.stop();(a.options.autoPlay||a._sslbpAutoPlay)&&a.options.resumeAutoplay&&0<a.options.resumeAutoplayInterval&&c._startRestartTimer(a)})},_hitTest:function(a,b){b.outerWidth()===0&&(b=b.children(".popup_anchor").children(".popup_element").eq(0));var c=b.offset(),c={x:c.left,y:c.top,width:b.outerWidth(),height:b.outerHeight()};return a.pageX>=
c.x&&a.pageX<=c.x+c.width&&a.pageY>=c.y&&a.pageY<=c.y+c.height},_layoutThumbs:function(b){var d=b.options,f=c.Utils.getStyleValue;b._findWidgetElements("."+d.slideLinksClassName).each(function(){var b=a(this).find("."+d.slideLinkClassName);firstThumb=b[0];tWidth=f(firstThumb,"width");tHeight=f(firstThumb,"height");gapH=f(firstThumb,"margin-right");gapV=f(firstThumb,"margin-bottom");borderL=f(firstThumb,"border-left-width");borderR=f(firstThumb,"border-right-width");borderT=f(firstThumb,"border-top-width");
borderB=f(firstThumb,"border-bottom-width");gWidth=f(this,"width");paddingL=f(this,"padding-left");paddingT=f(this,"padding-top");maxNumThumb=Math.floor((gWidth+gapH)/(tWidth+borderL+borderR+gapH));gStyle=this.runtimeStyle?this.runtimeStyle:this.style;numRow=Math.ceil(b.length/maxNumThumb);firstRowNum=b.length<maxNumThumb?b.length:maxNumThumb;leftPos=leftMostPos=c.Utils.pixelRound((gWidth-(tWidth+borderL+borderR)*firstRowNum-gapH*(firstRowNum-1))/2)+paddingL;topPos=paddingT;numInRow=1;gStyle.height=
(tHeight+borderT+borderB)*numRow+gapV*(numRow-1)+"px";b.each(function(){numInRow>firstRowNum&&(numInRow=1,leftPos=leftMostPos,topPos+=tHeight+borderT+borderB+gapV);numInRow++>1&&(leftPos+=tWidth+borderL+borderR+gapH);var a=this.runtimeStyle?this.runtimeStyle:this.style;a.marginRight="0px";a.marginBottom="0px";a.left=leftPos+"px";a.top=topPos+"px"})})},_resizeFullScreenImages:function(b,c,d){c.each(function(){a(this).find("img").each(function(){this.complete&&!a(this).hasClass(b.options.imageIncludeClassName)&&
b._csspPositionImage(this,d,b.options.elastic)})})},_setupImagePositioning:function(b,c,d,f){var j=this;c.each(function(){a(this).find("img").each(function(){var b=this;b.complete?j._positionImage(b,d,f):a(b).load(function(){j._positionImage(b,d,f)})})})},_positionImage:function(b,k,h,l,j){var i=a(d),n=b.runtimeStyle?b.runtimeStyle:b.style,o=h==="fullWidth"||h==="fullScreen",p=h==="fullHeight"||h==="fullScreen",q=k=="fitContentProportionally";$img=a(b);o=o?d.innerWidth?d.innerWidth:i.width():q?$img.data("width"):
$img.parent().width();i=p?d.innerHeight?d.innerHeight:i.height():q?$img.data("height"):$img.parent().height();l=l!==f?l:c.Utils.getNaturalWidth(b);b=j!==f?j:c.Utils.getNaturalHeight(b);h!=="off"&&(l===0&&(l=$img.data("imageWidth")),b===0&&(b=$img.data("imageHeight")));if(o==l&&i==b)n.marginTop="0px",n.marginLeft="0px";else{p=l;j=b;if(k=="fillFrameProportionally"){if(h!=="off"||l>o&&b>i)k=l/o,h=b/i,k<h?(j=b/k,p=o):(j=i,p=l/h)}else if(k=="fitContentProportionally"&&(h!=="off"||l>o||b>i))k=l/o,h=b/i,
k>h?(j=b/k,p=l/k):(j=b/h,p=l/h);n.width=c.Utils.pixelRound(p)+"px";n.height=c.Utils.pixelRound(j)+"px";n.marginTop=c.Utils.pixelRound((i-j)/2)+"px";n.marginLeft=c.Utils.pixelRound((o-p)/2)+"px"}}};a.extend(b.Widget.ContentSlideShow.slideImageIncludePlugin.defaultOptions,{imageIncludeClassName:"ImageInclude",slideLoadingClassName:"SSSlideLoading"});b.Widget.ContentSlideShow.prototype.defaultPlugins=[c.Plugins.ContentSlideShow];b.Widget.ContentSlideShow.prototype._getAjaxSrcForImage=function(b){for(var c=
a(d).data("ResolutionManager").getDataSrcAttrName(),f=c.length,l,j=0;j<f;j++)if((l=b.data(c[j]))&&l.length)return l;return b.data("src")}})(jQuery,WebPro,Muse,window);
;(function(){if(!("undefined"==typeof Muse||"undefined"==typeof Muse.assets)){var a=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]==b)return c;return-1}(Muse.assets.required,"musewpslideshow.js");if(-1!=a){Muse.assets.required.splice(a,1);for(var a=document.getElementsByTagName("meta"),b=0,c=a.length;b<c;b++){var d=a[b];if("generator"==d.getAttribute("name")){"2014.3.2.295"!=d.getAttribute("content")&&Muse.assets.outOfDate.push("musewpslideshow.js");break}}}}})();
