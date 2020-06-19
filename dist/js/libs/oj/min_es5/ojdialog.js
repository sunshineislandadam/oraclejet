/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojthemeutils","ojs/ojcomponentcore","ojs/ojanimation","ojs/ojpopupcore","ojs/ojbutton","jqueryui-amd/widgets/draggable","jqueryui-amd/widgets/mouse"],function(e,t,i,s,o){"use strict";var n,l,r,a={properties:{cancelBehavior:{type:"string",enumValues:["escape","icon","none"],value:"icon"},dialogTitle:{type:"string"},dragAffordance:{type:"string",enumValues:["none","title-bar"],value:"title-bar"},initialVisibility:{type:"string",enumValues:["hide","show"],value:"hide"},modality:{type:"string",enumValues:["modal","modeless"],value:"modal"},position:{type:"object",properties:{at:{type:"object",properties:{horizontal:{type:"string",enumValues:["center","end","left","right","start"],value:"center"},vertical:{type:"string",enumValues:["bottom","center","top"],value:"center"}}},collision:{type:"string",enumValues:["fit","flip","flipfit","none"],value:"fit"},my:{type:"object",properties:{horizontal:{type:"string",enumValues:["center","end","left","right","start"],value:"center"},vertical:{type:"string",enumValues:["bottom","center","top"],value:"center"}}},of:{type:"string|object",value:"window"},offset:{type:"object",properties:{x:{type:"number",value:0},y:{type:"number",value:0}}}}},resizeBehavior:{type:"string",enumValues:["none","resizable"],value:"resizable"},translations:{type:"object",value:{},properties:{labelCloseIcon:{type:"string"}}}},methods:{close:{},isOpen:{},open:{},refresh:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojBeforeClose:{},ojBeforeOpen:{},ojClose:{},ojFocus:{},ojOpen:{},ojResize:{},ojResizeStart:{},ojResizeStop:{},ojAnimateStart:{},ojAnimateEnd:{}},extension:{}};
/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */function h(e){"@babel/helpers - typeof";return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
n="oj-dialog-body",l="oj-dialog-footer",r="oj-dialog-header",e.__registerWidget("oj.ojDialog",t.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{cancelBehavior:"icon",dragAffordance:"title-bar",initialVisibility:"hide",modality:"modal",position:{my:{horizontal:"center",vertical:"center"},offset:{x:0,y:0},at:{horizontal:"center",vertical:"center"},of:"window",collision:"fit",using:function(e){var i=t(this).css(e).offset().top;i<0&&t(this).css("top",e.top-i)}},resizeBehavior:"resizable",role:"dialog",dialogTitle:null,title:null,beforeClose:null,beforeOpen:null,close:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null,animateStart:null,animateEnd:null},_ComponentCreate:function(){this._super();var i=this;if(this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this._IsCustomElement()||(this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this.element.removeAttr("title")),this.element.hide(),this.element.uniqueId(),this.element.addClass("oj-dialog oj-component"),this.element.attr({tabIndex:-1}),this._IsCustomElement()&&this.element[0].hasAttribute("role")||this.element.attr("role",this.options.role),this._on(this.element,{keydown:this._keydownHandler.bind(this)}),this.userDefinedDialogHeader=!1,!this._IsCustomElement())for(var o=this.element.children(),n=0;n<o.length;n++){var l=t(o[n]);l.is(".oj-dialog-header")?(this.userDefinedDialogHeader=!0,this._userDefinedHeader=l,this._userDefinedHeaderDiv=o[n]):l.is(".oj-dialog-body")?(this._createContentDiv(),this._uiDialogContent=t(this._contentDiv),this.element[0].insertBefore(this._contentDiv,o[n]),s.subtreeAttached(this._contentDiv),this._contentDiv.appendChild(o[n]),s.subtreeAttached(o[n]),this._uiDialogBody=l,this._uiDialogBodyDiv=o[n]):l.is(".oj-dialog-footer")&&(this._uiDialogFooter=l,this._uiDialogFooterDiv=o[n])}this._IsCustomElement()&&this._processSlottedChildren(),this.userDefinedDialogHeader?(this._userDefinedTitleDiv=this._userDefinedHeaderDiv.querySelector(".oj-dialog-title"),this._userDefinedTitle=t(this._userDefinedTitleDiv),null!==this._userDefinedTitleDiv&&void 0!==this._userDefinedTitleDiv&&(this._userDefinedTitle.uniqueId(),this.element.attr({"aria-labelledby":this._userDefinedTitle.attr("id")}))):this._createTitlebar(),this._uiDialogContent||(this._createContentDiv(),this._uiDialogContent=t(this._contentDiv),this._userDefinedHeader?this.element[0].insertBefore(this._contentDiv,this._userDefinedHeaderDiv):this.element[0].insertBefore(this._contentDiv,this._uiDialogTitlebarDiv),s.subtreeAttached(this._contentDiv)),this._setupFocus(this.element);var r=this.options;r.position=e.PositionUtils.coerceToJet(r.position),this._IsCustomElement()&&(this._titleMutationObserver=new MutationObserver(function(e){e.forEach(function(e){"attributes"===e.type&&"title"===e.attributeName&&(i._uiDialogTitleDiv.textContent=e.target.getAttribute(e.attributeName))})}),this._titleMutationObserver.observe(this.element[0],{attributes:!0,attributeFilter:["title"]}))},_createHeaderSlot:function(){this._headerSlot=document.createElement("div"),this._headerSlot.classList.add(r),this.element[0].appendChild(this._headerSlot),s.subtreeAttached(this._headerSlot),this.userDefinedDialogHeader=!0,this._userDefinedHeaderDiv=this._headerSlot,this._userDefinedHeader=t(this._headerSlot)},_createFooterSlot:function(){this._footerSlot=document.createElement("div"),this.element[0].appendChild(this._footerSlot),s.subtreeAttached(this._footerSlot),this._uiDialogFooterDiv=this._footerSlot,this._uiDialogFooter=t(this._footerSlot)},_createContentDiv:function(){this._contentDiv=document.createElement("div"),this._contentDiv.classList.add("oj-dialog-content","oj-dialog-default-content")},_createBodySlot:function(){this._createContentDiv(),this.element[0].appendChild(this._contentDiv),s.subtreeAttached(this._contentDiv),this._bodySlot=document.createElement("div"),this._contentDiv.appendChild(this._bodySlot),this._uiDialogContent=t(this._contentDiv),this._uiDialogBodyDiv=this._bodySlot,this._uiDialogBody=t(this._bodySlot)},_GetContextMenu:function(){return this._IsCustomElement()?this._contextmenuSlot&&this._contextmenuSlot.length>0?this._contextmenuSlot[0]:this._super():null},_processSlottedChildren:function(){null!=this._footerSlot&&this.element[0].removeChild(this._footerSlot),null!=this._headerSlot&&this.element[0].removeChild(this._headerSlot),null!=this._bodySlot&&this.element[0].removeChild(this._bodySlot),null!=this._contextmenuSlot&&this.element[0].removeChild(this._contextmenuSlot);var t,i,s=e.BaseCustomElementBridge.getSlotMap(this.element[0]),o=Object.keys(s);for(i=0;i<o.length;i++)"header"!==(t=o[i])&&"footer"!==t&&"body"!==t&&""!==t&&"contextMenu"!==t&&s[t].parentNode.removeChild(s[t]);var r=Object.prototype.hasOwnProperty;r.call(s,"header")&&this._createHeaderSlot(),(r.call(s,"body")||r.call(s,""))&&this._createBodySlot(),r.call(s,"footer")&&this._createFooterSlot(),r.call(s,"contextMenu")&&(this._contextmenuSlot=s.contextMenu);var a=this._bodySlot;for(i=0;i<o.length;i++){switch(t=o[i]){case"header":a=this._headerSlot;break;case"footer":a=this._footerSlot;break;case"body":case"":a=this._bodySlot}var h=s[t];if(null!=h)for(var u=0;u<h.length;u++)switch(a.appendChild(h[u]),t){case"header":break;case"footer":a=this._footerSlot,s[t][u].classList.add(l);break;case"body":case"":a=this._bodySlot,s[t][u].classList.add(n)}}},_AfterCreateEvent:function(){"show"===this.options.initialVisibility&&this.open()},_destroy:function(){this._off(this.element,"keydown"),e.ZOrderUtils.getStatus(this.element)===e.ZOrderUtils.STATUS.OPEN&&this._closeImplicitly(),this._setWhenReady("none"),this._destroyResizable(),this.element.hasClass("oj-draggable")&&(this.element.draggable("destroy"),this.element.removeClass("oj-draggable")),this._destroyCloseButton(),this.userDefinedDialogHeader&&this._userDefinedTitle.removeUniqueId(),this._uiDialogBody&&this._uiDialogBody.insertAfter(this._uiDialogContent),this._uiDialogContent.remove(),this._uiDialogBody=null,this._uiDialogContent=null,this.element.removeUniqueId().removeClass("oj-dialog oj-component").css(this.originalCss),this.element.stop(!0,!0),this._IsCustomElement()||this.originalTitle&&this.element.attr("title",this.originalTitle),this._uiDialogTitlebar&&(this._uiDialogTitlebar.remove(),this._uiDialogTitlebar=null),delete this._popupServiceEvents,this._super()},disable:t.noop,enable:t.noop,close:function(i){if(!this._isOperationPending("close",[i])){var s=e.ZOrderUtils.getStatus(this.element);if(s===e.ZOrderUtils.STATUS.OPEN)if(e.ZOrderUtils.setStatus(this.element,e.ZOrderUtils.STATUS.BEFORE_CLOSE),!1!==this._trigger("beforeClose",i)||this._ignoreBeforeCloseResultant){if(this._setWhenReady("close"),this._focusedElement=null,!this.opener.filter(":focusable").focus().length){var o=this.opener.parents().filter(":focusable");o.length>0?o[0].focus():t(this.document[0].activeElement).blur()}if("modal"===this.options.modality){var n=Array.prototype.forEach,l=this.element[0].querySelectorAll(".oj-helper-element-in-dialog-with-accesskey");n.call(l,function(e){e.classList.remove("oj-helper-element-in-dialog-with-accesskey")});var r=document.querySelectorAll(".oj-helper-element-with-accesskey");n.call(r,function(e){e.setAttribute("accesskey",e.getAttribute("data-ojAccessKey")),e.removeAttribute("data-ojAccessKey"),e.classList.remove("oj-helper-element-with-accesskey")})}var a={};a[e.PopupService.OPTION.POPUP]=this.element,a[e.PopupService.OPTION.CONTEXT]={closeEvent:i},e.PopupService.getInstance().close(a)}else e.ZOrderUtils.setStatus(this.element,s)}},_beforeCloseHandler:function(t){var s=t[e.PopupService.OPTION.POPUP];this._destroyResizable();var n=(i.parseJSONFromFontFamily("oj-dialog-option-defaults")||{}).animation;if(!this._ignoreBeforeCloseResultant&&n&&n.close)return o.startAnimation(s[0],"close",n.close,this).then(function(){s.hide()});s.hide()},_afterCloseHandler:function(t){var i,s=t[e.PopupService.OPTION.CONTEXT];s&&(i=s.closeEvent),this._trigger("close",i)},isOpen:function(){var t=e.ZOrderUtils.getStatus(this.element);return t===e.ZOrderUtils.STATUS.OPENING||t===e.ZOrderUtils.STATUS.OPEN||t===e.ZOrderUtils.STATUS.BEFORE_CLOSE||t===e.ZOrderUtils.STATUS.CLOSING},open:function(i){if(!this._isOperationPending("open",[i])){var s=e.ZOrderUtils.getStatus(this.element);if(s===e.ZOrderUtils.STATUS.OPEN||s===e.ZOrderUtils.STATUS.UNKNOWN||s===e.ZOrderUtils.STATUS.CLOSE)if(e.ZOrderUtils.setStatus(this.element,e.ZOrderUtils.STATUS.BEFORE_OPEN),!1!==this._trigger("beforeOpen",i)){if(s===e.ZOrderUtils.STATUS.OPEN)return e.ZOrderUtils.setStatus(this.element,s),void this._focusTabbable();this._setWhenReady("open"),this.userDefinedDialogHeader?void 0!==this.closeButton&&null!==this.closeButton||"icon"!==this.options.cancelBehavior||this._createCloseButton(this._userDefinedHeaderDiv):this._createTitlebarCloseButton(),this.opener=t(this.document[0].activeElement),"title-bar"===this.options.dragAffordance&&t.fn.draggable&&this._makeDraggable();var o="rtl"===this._GetReadingDirection(),n=e.PositionUtils.coerceToJqUi(this.options.position);if(n=e.PositionUtils.normalizeHorizontalAlignment(n,o),"modal"===this.options.modality){var l=Array.prototype.forEach,r=this.element[0].querySelectorAll("[accesskey]");l.call(r,function(e){e.classList.add("oj-helper-element-in-dialog-with-accesskey")});var a=document.querySelectorAll("[accesskey]");l.call(a,function(e){e.classList.contains("oj-helper-element-in-dialog-with-accesskey")||(e.classList.add("oj-helper-element-with-accesskey"),e.setAttribute("data-ojAccessKey",e.getAttribute("accesskey")),e.removeAttribute("accesskey"))})}var h={};h[e.PopupService.OPTION.POPUP]=this.element,h[e.PopupService.OPTION.LAUNCHER]=this.opener,h[e.PopupService.OPTION.POSITION]=n,h[e.PopupService.OPTION.MODALITY]=this.options.modality,h[e.PopupService.OPTION.EVENTS]=this._getPopupServiceEvents(),h[e.PopupService.OPTION.LAYER_SELECTORS]="oj-dialog-layer",h[e.PopupService.OPTION.LAYER_LEVEL]=e.PopupService.LAYER_LEVEL.TOP_LEVEL,h[e.PopupService.OPTION.CUSTOM_ELEMENT]=this._IsCustomElement(),e.PopupService.getInstance().open(h)}else e.ZOrderUtils.setStatus(this.element,s)}},_beforeOpenHandler:function(t){var s=t[e.PopupService.OPTION.POPUP],n=t[e.PopupService.OPTION.POSITION];s.show(),s.position(n),s.parent().addClass("oj-animate-open");var l=(i.parseJSONFromFontFamily("oj-dialog-option-defaults")||{}).animation;if(l&&l.open)return o.startAnimation(s[0],"open",l.open,this)},_afterOpenHandler:function(t){t[e.PopupService.OPTION.POPUP].parent().removeClass("oj-animate-open"),this._makeResizable(),this._trigger("open"),this._focusTabbable()},refresh:function(){this._super()},_focusTabbable:function(){this.GetFocusElement().focus(),this._trigger("focus")},GetFocusElement:function(){var t=null;return!0===this._titleBarMousedown?this.element[0]:(t||(t=this.element.find("[autofocus]")),(null!=t&&t.length||null==(t=e.FocusUtils.getFirstTabStop(this._contentDiv)))&&(null!=t&&t.length||!this._uiDialogFooter||!this._uiDialogFooter.length||null==(t=e.FocusUtils.getFirstTabStop(this._uiDialogFooterDiv)))?(null!=t&&t.length||this.closeButton&&(t=this.closeButton),null!=t&&t.length||(t=this.element),t[0]):t)},_keydownHandler:function(i){if("none"!==this.options.cancelBehavior&&!i.isDefaultPrevented()&&i.keyCode&&i.keyCode===t.ui.keyCode.ESCAPE)return i.preventDefault(),i.stopImmediatePropagation(),void this.close(i);var s;i.keyCode===t.ui.keyCode.TAB&&(i.shiftKey?(e.FocusUtils.isFirstActiveElement(this.element)||document.activeElement===this.element[0])&&null!=(s=e.FocusUtils.getLastTabStop(this.element))&&(s.focus(),i.preventDefault()):(e.FocusUtils.isLastActiveElement(this.element)||document.activeElement===this.element[0])&&null!=(s=e.FocusUtils.getFirstTabStop(this.element))&&(s.focus(),i.preventDefault()))},_setupFocus:function(e){var i=this;this._focusable({applyHighlight:!0,setupHandlers:function(s,o){i._on(e,{focus:function(e){s(t(e.currentTarget))},blur:function(e){o(t(e.currentTarget))}})}})},_destroyCloseButton:function(){null!==this.closeButtonDiv&&void 0!==this.closeButtonDiv&&(this.closeButtonDiv.parentElement&&(s.subtreeDetached(this.closeButtonDiv),this.closeButtonDiv.parentElement.removeChild(this.closeButtonDiv)),this.closeButton=null),this._headerSlot&&this._headerSlot.classList.remove("oj-dialog-header-close"),this._uiDialogTitlebarDiv&&this._uiDialogTitlebarDiv.classList.remove("oj-dialog-header-close")},_createCloseButton:function(e){if(this._IsCustomElement()){this.closeButtonDiv=document.createElement("oj-button"),this.closeButtonDiv.classList.add("oj-dialog-header-close-wrapper"),this.closeButtonDiv.setAttribute("data-oj-binding-provider","none"),this.closeButtonDiv.setAttribute("display","icons"),this.closeButtonDiv.setAttribute("chroming","half");var i=document.createElement("span");i.textContent=this.getTranslatedString("labelCloseIcon");var o=document.createElement("span");o.className="oj-fwk-icon oj-fwk-icon-cross",o.setAttribute("slot","startIcon"),this.closeButtonDiv.appendChild(o),this.closeButtonDiv.appendChild(i),e.appendChild(this.closeButtonDiv),s.subtreeAttached(this.closeButtonDiv),this.closeButton=t(this.closeButtonDiv)}this._IsCustomElement()||(this.closeButton=t("<button><\button>").addClass("oj-dialog-header-close-wrapper"),this.closeButton.ojButton({display:"icons",chroming:"half",label:this.getTranslatedString("labelCloseIcon"),icons:{start:"oj-component-icon oj-fwk-icon-cross"}}).appendTo(e),this.closeButtonDiv=this.closeButton[0]),this._on(this.closeButton,{click:function(e){e.preventDefault(),e.stopImmediatePropagation(),this.close(e)}}),this._headerSlot&&this._headerSlot.classList.add("oj-dialog-header-close"),this._uiDialogTitlebarDiv&&this._uiDialogTitlebarDiv.classList.add("oj-dialog-header-close")},_createTitlebarCloseButton:function(){void 0!==this.closeButton&&null!==this.closeButton||"icon"!==this.options.cancelBehavior||this._createCloseButton(this._uiDialogTitlebarDiv),this._on(this._uiDialogTitlebar,{mousedown:function(t){var i=e.DomUtils.isAncestorOrSelf(this.closeButtonDiv,t.target);this._titleBarMousedown=!0,i||this.element.focus()},mouseup:function(){this._titleBarMousedown=null}})},_createTitlebar:function(){this._uiDialogTitlebarDiv=document.createElement("div"),this._uiDialogTitlebarDiv.classList.add(r),this.element[0].insertBefore(this._uiDialogTitlebarDiv,this.element[0].firstChild),s.subtreeAttached(this._uiDialogTitlebarDiv),this._uiDialogTitlebar=t(this._uiDialogTitlebarDiv),this._uiDialogTitleDiv=document.createElement("h1"),this._uiDialogTitleDiv.classList.add("oj-dialog-title"),t(this._uiDialogTitleDiv).uniqueId(),this._uiDialogTitlebarDiv.appendChild(this._uiDialogTitleDiv),s.subtreeAttached(this._uiDialogTitleDiv),this._title(this._uiDialogTitleDiv),this.element.attr({"aria-labelledby":this._uiDialogTitleDiv.id})},_title:function(e){var t=e;this._IsCustomElement()?this._IsCustomElement()&&(this.options.dialogTitle?t.textContent=this.options.dialogTitle:this.element.attr("title")?t.textContent=this.element.attr("title"):t.innerHTML="&#160;"):(this.options.title||(t.innerHTML="&#160;"),t.textContent=this.options.title)},_makeDraggable:function(){var e=this,i=this.options;function s(e){return{position:e.position,offset:e.offset}}this.element.draggable({addClasses:!1,handle:".oj-dialog-header",containment:"document",start:function(i,o){t(this).addClass("oj-dialog-dragging"),e._positionDescendents(),e._trigger("dragStart",i,s(o))},drag:function(t,i){e._positionDescendents(),e._trigger("drag",t,s(i))},stop:function(o,n){var l=n.offset.left-e.document.scrollLeft(),r=n.offset.top-e.document.scrollTop();i.position={my:{horizontal:"left",vertical:"top"},at:{horizontal:"left",vertical:"top"},offset:{x:l>=0?l:0,y:r>=0?r:0},of:window},t(this).removeClass("oj-dialog-dragging"),e._positionDescendents(),e._trigger("dragStop",o,s(n))}}),this.element.addClass("oj-draggable")},_destroyResizable:function(){this._resizableComponent&&this._resizableComponent("instance")&&(this._resizableComponent("destroy"),delete this._resizableComponent)},_makeResizable:function(){if(this._destroyResizable(),"resizable"===this.options.resizeBehavior){var i=this;this._resizableComponent=this.element.ojResizable.bind(this.element);var s=Math.max(e.DomUtils.getCSSLengthAsFloat(this.element.css("min-width")),10),o=Math.max(e.DomUtils.getCSSLengthAsFloat(this.element.css("min-height")),10),n=e.DomUtils.getCSSLengthAsFloat(this.element.css("max-width")),l=e.DomUtils.getCSSLengthAsFloat(this.element.css("max-height"));n=0===n?null:n,l=0===l?null:l,this._resizableComponent({minWidth:s,minHeight:o,maxWidth:n,maxHeight:l,cancel:".oj-dialog-content",containment:"document",handles:"n,e,s,w,se,sw,ne,nw",start:function(e,s){i._isResizing=!0,t(this).addClass("oj-dialog-resizing"),i._trigger("resizeStart",e,r(s))},resize:function(e,t){i._trigger("resize",e,r(t))},stop:function(e,s){i._isResizing=!1,t(this).removeClass("oj-dialog-resizing"),i._trigger("resizeStop",e,r(s))}})}function r(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}},_position:function(){var t="rtl"===this._GetReadingDirection(),i=e.PositionUtils.coerceToJqUi(this.options.position);i=e.PositionUtils.normalizeHorizontalAlignment(i,t),this.element.position(i),this._positionDescendents()},_positionDescendents:function(){e.PopupService.getInstance().triggerOnDescendents(this.element,e.PopupService.EVENT.POPUP_REFRESH)},_setOption:function(i,s,o){var n;if("disabled"!==i)switch(this._super(i,s,o),i){case"dragAffordance":(n=this.element.hasClass("oj-draggable"))&&"none"===s&&(this.element.draggable("destroy"),this.element.removeClass("oj-draggable")),n||"title-bar"!==s||this._makeDraggable();break;case"position":var l=this.options;return l.position=e.PositionUtils.coerceToJet(s,l.position),void this._position();case"resizeBehavior":e.ZOrderUtils.getStatus(this.element)===e.ZOrderUtils.STATUS.OPEN&&this._makeResizable();break;case"title":case"dialogTitle":this.userDefinedDialogHeader?this._title(this._userDefinedHeaderDiv.querySelector(".oj-dialog-title")):this._title(this._uiDialogTitlebarDiv.querySelector(".oj-dialog-title"));break;case"role":this.element.attr("role",s);break;case"modality":if(e.ZOrderUtils.getStatus(this.element)===e.ZOrderUtils.STATUS.OPEN){var r={};r[e.PopupService.OPTION.POPUP]=this.element,r[e.PopupService.OPTION.MODALITY]=s,e.PopupService.getInstance().changeOptions(r)}break;case"cancelBehavior":"none"===s||"escape"===s?this._destroyCloseButton():"icon"===s&&(this.userDefinedDialogHeader?(this._destroyCloseButton(),this._createCloseButton(this._userDefinedHeaderDiv),this._userDefinedTitleDiv=this._userDefinedHeaderDiv.querySelector(".oj-dialog-title"),this._userDefinedTitle=t(this._userDefinedTitleDiv)):(this._destroyCloseButton(),this._createCloseButton(this._uiDialogTitlebarDiv),this.standardTitleDiv=this._uiDialogTitlebarDiv.querySelector(".oj-dialog-title"),this.standardTitle=t(this.standardTitleDiv)))}},getNodeBySubId:function(e){if(null===e)return this.element?this.element[0]:null;function t(e){for(var t=[],i=/\w|_|-/,s=0;s<e.length;s++){var o=e.substring(s,s+1);i.test(o)?t.push(o):t.push("\\"+o)}return t.join("")}var i=e.subId;if(!this._IsCustomElement()||i!==l&&i!==n){var s,o;switch(i){case r:case l:case"oj-dialog-content":case"oj-resizable-n":case"oj-resizable-e":case"oj-resizable-s":case"oj-resizable-w":case"oj-resizable-se":case"oj-resizable-sw":case"oj-resizable-ne":case"oj-resizable-nw":return s=this.element[0].nodeName+'[id="'+t(this.element.attr("id"))+'"] > ',s+="."+i,(o=this.element.parent().find(s))&&0!==o.length?o[0]:null;case"oj-dialog-close-icon":case"oj-dialog-close":return null;case n:return s=this.element[0].nodeName+'[id="'+t(this.element.attr("id"))+'"] > ',s+=".oj-dialog-content > ",s+="."+i,(o=this.element.parent().find(s))&&0!==o.length?o[0]:null;case"oj-dialog-header-close-wrapper":return s=this.element[0].nodeName+'[id="'+t(this.element.attr("id"))+'"] > ',s+=".oj-dialog-header > ",s+="."+i,(o=this.element.parent().find(s))&&0!==o.length?o[0]:null}}else{if(i===n)return this._uiDialogBodyDiv.querySelector(".oj-dialog-body");if(i===l)return this._uiDialogFooterDiv.querySelector(".oj-dialog-footer")}return null},getSubIdByNode:function(e){if(null!=e){var i=t(e);if(i.hasClass(r))return{subId:r};if(i.hasClass(l))return{subId:l};if(i.hasClass("oj-dialog-content"))return{subId:"oj-dialog-content"};if(i.hasClass("oj-dialog-header-close-wrapper"))return{subId:"oj-dialog-header-close-wrapper"};if(i.hasClass("oj-resizable-n"))return{subId:"oj-resizable-n"};if(i.hasClass("oj-resizable-e"))return{subId:"oj-resizable-e"};if(i.hasClass("oj-resizable-s"))return{subId:"oj-resizable-s"};if(i.hasClass("oj-resizable-w"))return{subId:"oj-resizable-w"};if(i.hasClass("oj-resizable-se"))return{subId:"oj-resizable-se"};if(i.hasClass("oj-resizable-sw"))return{subId:"oj-resizable-sw"};if(i.hasClass("oj-resizable-ne"))return{subId:"oj-resizable-ne"};if(i.hasClass("oj-resizable-nw"))return{subId:"oj-resizable-nw"}}return null},_surrogateRemoveHandler:function(){var t=this.element;e.ZOrderUtils.getStatus(t)===e.ZOrderUtils.STATUS.OPEN&&t.remove()},_getPopupServiceEvents:function(){if(!this._popupServiceEvents){var t={};t[e.PopupService.EVENT.POPUP_CLOSE]=this._closeImplicitly.bind(this),t[e.PopupService.EVENT.POPUP_REMOVE]=this._surrogateRemoveHandler.bind(this),t[e.PopupService.EVENT.POPUP_REFRESH]=this._positionDescendents.bind(this),t[e.PopupService.EVENT.POPUP_BEFORE_OPEN]=this._beforeOpenHandler.bind(this),t[e.PopupService.EVENT.POPUP_AFTER_OPEN]=this._afterOpenHandler.bind(this),t[e.PopupService.EVENT.POPUP_BEFORE_CLOSE]=this._beforeCloseHandler.bind(this),t[e.PopupService.EVENT.POPUP_AFTER_CLOSE]=this._afterCloseHandler.bind(this),this._popupServiceEvents=t}return this._popupServiceEvents},_closeImplicitly:function(){this._ignoreBeforeCloseResultant=!0,this.close(),delete this._ignoreBeforeCloseResultant},_setWhenReady:function(t){var i=this._whenReadyMediator;i&&(i.destroy(),delete this._whenReadyMediator),["open","close"].indexOf(t)<0||(this._whenReadyMediator=new e.PopupWhenReadyMediator(this.element,t,"ojDialog",this._IsCustomElement()))},_isOperationPending:function(e,t){var i=this._whenReadyMediator;return!!i&&i.isOperationPending(this,e,e,t)},_NotifyDetached:function(){e.ZOrderUtils.getStatus(this.element)===e.ZOrderUtils.STATUS.OPEN&&this._closeImplicitly(),this._super()}}),s.setDefaultOptions({ojDialog:{resizeBehavior:s.createDynamicPropertyGetter(function(){return(i.parseJSONFromFontFamily("oj-dialog-option-defaults")||{}).resizeBehavior}),cancelBehavior:s.createDynamicPropertyGetter(function(){return(i.parseJSONFromFontFamily("oj-dialog-option-defaults")||{}).cancelBehavior}),dragAffordance:s.createDynamicPropertyGetter(function(){return(i.parseJSONFromFontFamily("oj-dialog-option-defaults")||{}).dragAffordance})}}),t.widget("oj.ojResizable",{version:"1.0.0",widgetEventPrefix:"oj",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(e,i){var s=e;if("hidden"===t(s).css("overflow"))return!1;var o,n=i&&"left"===i?"scrollLeft":"scrollTop";return s[n]>0||(s[n]=1,o=s[n]>0,s[n]=0,o)},_create:function(){var e,i,s,o;this._super();var n=this,l=this.options,r=this.element.mouse.bind(this.element);if(r(),this.mouse=r("instance"),this.mouse._mouseCapture=function(e){return n._mouseCapture(e)},this.mouse._mouseStart=function(e){return n._mouseStart(e)},this.mouse._mouseDrag=function(e){return n._mouseDrag(e)},this.mouse._mouseStop=function(e){return this.element&&this.element.focus(),n._mouseStop(e)},this.element.addClass("oj-resizable"),t.extend(this,{originalElement:this.element,_proportionallyResizeElements:[],_helper:null}),this._initialResize=!0,this.handles=l.handles||(t(".oj-resizable-handle",this.element).length?{n:".oj-resizable-n",e:".oj-resizable-e",s:".oj-resizable-s",w:".oj-resizable-w",se:".oj-resizable-se",sw:".oj-resizable-sw",ne:".oj-resizable-ne",nw:".oj-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),e=this.handles.split(","),this.handles={},i=0;i<e.length;i++)s=t.trim(e[i]),o=t("<div class='oj-resizable-handle oj-resizable-"+s+"'></div>"),this.handles[s]=".oj-resizable-"+s,this.element.append(o);var a=Object.keys(this.handles);for(i=0;i<a.length;i++){var h=a[i];this.handles[h].constructor===String&&(this.handles[h]=this.element.children(this.handles[h]).first().show())}this._handles=t(".oj-resizable-handle",this.element),this._handles.mouseover(function(){n.resizing||(this.className&&(o=this.className.match(/oj-resizable-(se|sw|ne|nw|n|e|s|w)/i)),n.axis=o&&o[1]?o[1]:"se")}),this.mouse._mouseInit()},_destroy:function(){this.mouse&&this.mouse._mouseDestroy();try{this.mouse.destroy(),this.mouse=null}catch(e){}var e;return e=this.originalElement,t(e).removeClass("oj-resizable oj-resizable-disabled oj-resizable-resizing").removeData("resizable").removeData("oj-resizable").unbind(".resizable").find(".oj-resizable-handle").remove(),this},_mouseCapture:function(e){for(var i=!1,s=Object.keys(this.handles),o=0;o<s.length;o++){var n=t(this.handles[s[o]])[0];(n===e.target||t.contains(n,e.target))&&(i=!0)}return!this.options.disabled&&i},_mouseStart:function(e){var i,s,o,n=this.options,l=this.element.position(),r=this.element;return this.resizing=!0,/absolute/.test(r.css("position"))?r.css({position:"absolute",top:r.css("top"),left:r.css("left")}):r.is(".oj-draggable")&&r.css({position:"absolute",top:l.top,left:l.left}),this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),n.containment&&(i+=t(n.containment).scrollLeft()||0,s+=t(n.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size={width:r.width(),height:r.height()},this.originalSize={width:r.width(),height:r.height()},this.originalPosition={left:i,top:s},this.sizeDiff={width:r.outerWidth()-r.width(),height:r.outerHeight()-r.height()},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio=this.originalSize.width/this.originalSize.height||1,o=t(".oj-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===o?this.axis+"-resize":o),r.addClass("oj-resizable-resizing"),this._propagate("start",e),this._alsoresize_start(e),this._containment_start(e),!0},_mouseDrag:function(e){var i,s=this.helper,o={},n=this.originalMousePosition,l=this.axis,r=e.pageX-n.left||0,a=e.pageY-n.top||0,h=this._change[l];return this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height},!!h&&(i=h.apply(this,[e,r,a]),this._updateVirtualBoundaries(e.shiftKey),e.shiftKey&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),this._alsoresize_resize(e,this.ui()),this._containment_resize(e,this.ui()),this.position.top!==this.prevPosition.top&&(o.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(o.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(o.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(o.height=this.size.height+"px"),s.css(o),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(o)||this._trigger("resize",e,this.ui()),!1)},_mouseStop:function(e){return this.resizing=!1,t("body").css("cursor","auto"),this.element.removeClass("oj-resizable-resizing"),this._propagate("stop",e),this._alsoresize_stop(e),this._containment_stop(e),!1},_updateVirtualBoundaries:function(e){var t,i,s,o,n,l=this.options;n={minWidth:this._isNumber(l.minWidth)?l.minWidth:0,maxWidth:this._isNumber(l.maxWidth)?l.maxWidth:1/0,minHeight:this._isNumber(l.minHeight)?l.minHeight:0,maxHeight:this._isNumber(l.maxHeight)?l.maxHeight:1/0},e&&(t=n.minHeight*this.aspectRatio,s=n.minWidth/this.aspectRatio,i=n.maxHeight*this.aspectRatio,o=n.maxWidth/this.aspectRatio,t>n.minWidth&&(n.minWidth=t),s>n.minHeight&&(n.minHeight=s),i<n.maxWidth&&(n.maxWidth=i),o<n.maxHeight&&(n.maxHeight=o)),this._vBoundaries=n},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=e,i=this.position,s=this.size,o=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===o&&(t.left=i.left+(s.width-t.width),t.top=null),"nw"===o&&(t.top=i.top+(s.height-t.height),t.left=i.left+(s.width-t.width)),t},_respectSize:function(e){var t=e,i=this._vBoundaries,s=this.axis,o=this._isNumber(t.width)&&i.maxWidth&&i.maxWidth<t.width,n=this._isNumber(t.height)&&i.maxHeight&&i.maxHeight<t.height,l=this._isNumber(t.width)&&i.minWidth&&i.minWidth>t.width,r=this._isNumber(t.height)&&i.minHeight&&i.minHeight>t.height,a=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,u=/sw|nw|w/.test(s),d=/nw|ne|n/.test(s);return l&&(t.width=i.minWidth),r&&(t.height=i.minHeight),o&&(t.width=i.maxWidth),n&&(t.height=i.maxHeight),l&&u&&(t.left=a-i.minWidth),o&&u&&(t.left=a-i.maxWidth),r&&d&&(t.top=h-i.minHeight),n&&d&&(t.top=h-i.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var e,t,i,s,o,n=this.helper||this.element;for(e=0;e<this._proportionallyResizeElements.length;e++){if(o=this._proportionallyResizeElements[e],!this.borderDif)for(this.borderDif=[],i=[o.css("borderTopWidth"),o.css("borderRightWidth"),o.css("borderBottomWidth"),o.css("borderLeftWidth")],s=[o.css("paddingTop"),o.css("paddingRight"),o.css("paddingBottom"),o.css("paddingLeft")],t=0;t<i.length;t++)this.borderDif[t]=(parseInt(i[t],10)||0)+(parseInt(s[t],10)||0);o.css({height:n.height()-this.borderDif[0]-this.borderDif[2]||0,width:n.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var e=this.element;this.elementOffset=e.offset(),this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize;return{left:this.originalPosition.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize;return{top:this.originalPosition.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,t){"resize"!==e&&this._trigger(e,t,this.ui())},_alsoresize_start:function(){var e=this.options,i=function(e){t(e).each(function(){var e=t(this);e.data("oj-resizable-alsoresize",{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css("left"),10),top:parseInt(e.css("top"),10)})})};"object"!==h(e.alsoResize)||e.alsoResize.parentNode?i(e.alsoResize):e.alsoResize.length?(e.alsoResize=e.alsoResize[0],i(e.alsoResize)):t.each(e.alsoResize,function(e){i(e)})},_alsoresize_resize:function(e,i){var s=this.options,o=this.originalSize,n=this.originalPosition,l={height:this.size.height-o.height||0,width:this.size.width-o.width||0,top:this.position.top-n.top||0,left:this.position.left-n.left||0},r=function(e,s){t(e).each(function(){var e,o=t(this),n=t(this).data("oj-resizable-alsoresize"),r={};e=s&&s.length?s:o.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"],t.each(e,function(e,t){var i=(n[t]||0)+(l[t]||0);i&&i>=0&&(r[t]=i||null)}),o.css(r)})};"object"!==h(s.alsoResize)||s.alsoResize.nodeType?r(s.alsoResize,null):t.each(s.alsoResize,function(e,t){r(e,t)})},_alsoresize_stop:function(){t(this).removeData("oj-resizable-alsoresize")},_containment_start:function(){var e,i,s,o,n,l,r,a,h=this,u=h.options,d=h.element,c=u.containment;(a=c instanceof t?c.get(0):/parent/.test(c)?d.parent().get(0):c)&&(h.containerElement=t(a),/document/.test(c)||c===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(a),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=h._num(e.css("padding"+s))}),h.containerOffset=e.offset(),h.containerPosition=e.position(),h.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=h.containerOffset,o=h.containerSize.height,n=h.containerSize.width,l=h._hasScroll(a,"left")?a.scrollWidth:n,r=h._hasScroll(a)?a.scrollHeight:o,h.parentData={element:a,left:s.left,top:s.top,width:l,height:r}))},_containment_resize:function(e,t){var i,s,o,n,l=this.options,r=this.containerOffset,a=this.position,h=e.shiftKey,u={top:0,left:0},d=this.containerElement,c=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=r),a.left<(this._helper?r.left:0)&&(this.size.width+=this._helper?this.position.left-r.left:this.position.left-u.left,h&&(this.size.height=this.size.width/this.aspectRatio,c=!1),this.position.left=l.helper?r.left:0),a.top<(this._helper?r.top:0)&&(this.size.height+=this._helper?this.position.top-r.top:this.position.top,h&&(this.size.width=this.size.height*this.aspectRatio,c=!1),this.position.top=this._helper?r.top:0),this.offset.left=this.parentData.left+this.position.left,this.offset.top=this.parentData.top+this.position.top,i=Math.abs((this._helper?this.offset.left-u.left:this.offset.left-r.left)+this.sizeDiff.width),s=Math.abs((this._helper?this.offset.top-u.top:this.offset.top-r.top)+this.sizeDiff.height),o=this.containerElement.get(0)===this.element.parent().get(0),n=/relative|absolute/.test(this.containerElement.css("position")),o&&n&&(i-=Math.abs(this.parentData.left)),i+this.size.width>=this.parentData.width&&(this.size.width=this.parentData.width-i,h&&(this.size.height=this.size.width/this.aspectRatio,c=!1)),s+this.size.height>=this.parentData.height&&(this.size.height=this.parentData.height-s,h&&(this.size.width=this.size.height*this.aspectRatio,c=!1)),c||(this.position.left=t.prevPosition.left,this.position.top=t.prevPosition.top,this.size.width=t.prevSize.width,this.size.height=t.prevSize.height)},_containment_stop:function(){var e=this.options,i=this.containerOffset,s=this.containerPosition,o=this.containerElement,n=t(this.helper),l=n.offset(),r=n.outerWidth()-this.sizeDiff.width,a=n.outerHeight()-this.sizeDiff.height;this._helper&&!e.animate&&/relative/.test(o.css("position"))&&t(this).css({left:l.left-s.left-i.left,width:r,height:a}),this._helper&&!e.animate&&/static/.test(o.css("position"))&&t(this).css({left:l.left-s.left-i.left,width:r,height:a})},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition,prevSize:this.prevSize,prevPosition:this.prevPosition}}}),a.extension._WIDGET_NAME="ojDialog",e.CustomElementBridge.register("oj-dialog",{metadata:a})});