!function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,i){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,i)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var i,r=n(e);if(t){var o=n(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return function(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,i)}}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e){"@babel/helpers - typeof";return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define(["exports","ojs/ojcore-base","ojs/ojdomutils","ojs/ojvcomponent","ojs/ojtranslation"],function(n,o,a,s,c){"use strict";
/**
   * @license
   * Copyright (c) 2017 2020, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */var u=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};n.FilePicker=function(n){!function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&t(e,i)}(h,s.VComponent);var l,u,p,d=i(h);function h(e){var t;return r(this,h),(t=d.call(this,e)).state={focus:!1,validity:"NA"},t.inputElemRef=function(e){t.inputElem=e},t.rootElemRef=function(e){t.rootElem=e},t}return l=h,(u=[{key:"_handleSelectingFiles",value:function(e){return("click"===e.type||"keypress"===e.type&&13===e.keyCode)&&(this.selecting=!0,e.preventDefault(),this.inputElem.value=null,this.inputElem.click(),!0)}},{key:"_handleFileSelected",value:function(e){e.preventDefault(),e.stopPropagation();var t=e.target.files;if(t.length>0){var i=this._validateTypes(t).rejected;i.length>0?this._fireInvalidSelectAction(this._getMimeTypeValidationMessages(i),e,!1):this._handleFilesAdded(t,e)}this.selecting=!1}},{key:"_handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation()}},{key:"_handleDragOver",value:function(e){e.preventDefault(),e.stopPropagation();var t=e.dataTransfer;if(!this.inDropZone){var i=o.AgentUtils.getAgentInfo();if(this.inDropZone=!0,this.isDroppable=!0,i.browser!==o.AgentUtils.BROWSER.SAFARI&&i.browser!==o.AgentUtils.BROWSER.IE){var n=t.items,r=[],l=this._validateSelectionMode(n),a=this._validateTypes(n);l&&0===a.rejected.length?this.updateState({validity:"valid"}):(this.isDroppable=!1,l?r=this._getMimeTypeValidationMessages(a.rejected):r.push({severity:"error",summary:c.getTranslatedString("oj-ojFilePicker.singleFileUploadError")}),this._fireInvalidSelectAction(r,e,!0))}else this.updateState({validity:"valid"})}}},{key:"_handleDragLeave",value:function(e,t){this.inDropZone&&(e.preventDefault(),e.stopPropagation(),this.rootElem.contains(e.relatedTarget)||(this.inDropZone=!1,this.updateState({validity:"NA"}),this.isDroppable||t||(this.dragPromiseResolver(),this.dragPromiseResolver=null)))}},{key:"_handleFileDrop",value:function(e){if(this.inDropZone){e.preventDefault(),e.stopPropagation();var t=this._createFileList(e.dataTransfer.files),i=!1;if(this.isDroppable){var n=[];if(this._validateSelectionMode(t)){var r=this._validateTypes(t);r.rejected.length>0&&(n=this._getMimeTypeValidationMessages(r.rejected),i=!0)}else n.push({severity:"error",summary:c.getTranslatedString("oj-ojFilePicker.singleFileUploadError")});n.length>0&&(this.isDroppable=!1,this._fireInvalidSelectAction(n,e,!1)),this.isDroppable&&this._handleFilesAdded(t,e)}this._handleDragLeave(e,i)}}},{key:"_handleFocusIn",value:function(e){this.selecting||this.updateState({focus:!a.recentPointer()})}},{key:"_handleFocusOut",value:function(e){this.selecting||this.updateState({focus:!1})}},{key:"render",value:function(){var e,t,i=this.props,n=null===(t=(e=this.props).trigger)||void 0===t?void 0:t.call(e);if(i.disabled)return this._renderDisabled(i,n);var r="drop"!=i.selectOn?this._handleSelectingFiles:void 0;return n?this._renderWithCustomTrigger(i,n,r):this._renderWithDefaultTrigger(i,r)}},{key:"_renderDisabled",value:function(e,t){var i=t?"oj-filepicker":"oj-filepicker oj-filepicker-no-trigger";return s.h("oj-file-picker",{class:i},s.h("div",{class:"oj-filepicker-disabled oj-filepicker-container"},t||this._renderDefaultTriggerContent(e)))}},{key:"_renderWithCustomTrigger",value:function(e,t,i){var n=this._getDndHandlers(e);return s.h("oj-file-picker",{class:"oj-filepicker"+this._getFocusClass(),ref:this.rootElemRef,onFocusin:this._handleFocusIn,onFocusout:this._handleFocusOut},this._renderInputElement(e),s.h("div",{onClick:i,onKeypress:this._handleSelectingFiles,onDragenter:n.handleDragEnter,onDragover:n.handleDragOver,onDragleave:n.handleDragLeave,onDragend:n.handleDragLeave,onDrop:n.handleFileDrop,class:"oj-filepicker-container"},t))}},{key:"_renderWithDefaultTrigger",value:function(e,t){var i=this.state.validity,n="valid"===i?" oj-valid-drop":"invalid"===i?" oj-invalid-drop":"",r=this._getDndHandlers(e);return s.h("oj-file-picker",{class:"oj-filepicker oj-filepicker-no-trigger",ref:this.rootElemRef},this._renderInputElement(e),s.h("div",{onClick:t,onKeypress:this._handleSelectingFiles,class:"oj-filepicker-container"},s.h("div",{tabindex:"0",class:"oj-filepicker-dropzone"+n+this._getFocusClass(),onDragenter:r.handleDragEnter,onDragover:r.handleDragOver,onDragleave:r.handleDragLeave,onDragend:r.handleDragLeave,onDrop:r.handleFileDrop,onFocusin:this._handleFocusIn,onFocusout:this._handleFocusOut},this._renderDefaultTriggerContent(e))))}},{key:"_renderDefaultTriggerContent",value:function(e){var t="single"==e.selectionMode;return[s.h("div",null,s.h("div",{class:"oj-filepicker-text"},c.getTranslatedString("oj-ojFilePicker.dropzonePrimaryText")),s.h("div",{class:"oj-filepicker-secondary-text"},t?c.getTranslatedString("oj-ojFilePicker.secondaryDropzoneText"):c.getTranslatedString("oj-ojFilePicker.secondaryDropzoneTextMultiple"))),s.h("div",{class:"oj-filepicker-icon oj-fwk-icon-plus oj-fwk-icon"})]}},{key:"_renderInputElement",value:function(e){var t=e.accept,i=t&&t.length?t.join(","):null;return s.h("input",{type:"file",class:"oj-helper-hidden",multiple:"multiple"==this.props.selectionMode,accept:i,ref:this.inputElemRef,onChange:this._handleFileSelected,capture:"implementation"===e.capture?"":e.capture})}},{key:"_getDndHandlers",value:function(e){return"click"!=e.selectOn?{handleDragEnter:this._handleDragEnter,handleDragOver:this._handleDragOver,handleDragLeave:this._handleDragLeave,handleFileDrop:this._handleFileDrop}:{}}},{key:"_getFocusClass",value:function(){return this.state.focus?" oj-focus-highlight":""}},{key:"_validateSelectionMode",value:function(e){return"single"!==this.props.selectionMode||1===e.length}},{key:"_validateTypes",value:function(e){var t,i,n=[],r=[];if(e)for(var l=0;l<e.length;l++){var o=(t=e[l]).name;if(i=c.getTranslatedString("oj-ojFilePicker.unknownFileType"),o){var a=o.split(".");i=a.length>1?"."+a.pop():i}i=t.type?t.type:i,-1===n.indexOf(i)&&-1===r.indexOf(i)&&(this._acceptFile(t)?n.push(i):r.push(i))}return{accepted:n,rejected:r}}},{key:"_getMimeTypeValidationMessages",value:function(e){var t=[];return 1===e.length?t.push({severity:"error",summary:c.getTranslatedString("oj-ojFilePicker.singleFileTypeUploadError",{fileType:e[0]})}):t.push({severity:"error",summary:c.getTranslatedString("oj-ojFilePicker.multipleFileTypeUploadError",{fileTypes:e.join(c.getTranslatedString("oj-converter.plural-separator"))})}),t}},{key:"_acceptFile",value:function(e){var t,i=this.props.accept;if(!i||0===i.length||!e)return!0;for(var n=0;n<i.length;n++){if(!(t=o.StringUtils.trim(i[n])))return!0;if(t.startsWith(".",0)){if(!e.name||e.name&&e.name.endsWith(t))return!0}else{if(!e.type)return!1;if("image/*"===t){if(e.type.startsWith("image/",0))return!0}else if("video/*"===t){if(e.type.startsWith("video/",0))return!0}else if("audio/*"===t){if(e.type.startsWith("audio/",0))return!0}else if(e.type===t)return!0}}return!1}},{key:"_handleFilesAdded",value:function(e,t){var i,n,r=this,l=this._createFileList(e);null===(n=(i=this.props).onOjBeforeSelect)||void 0===n||n.call(i,{files:l,originalEvent:t}).then(function(){var e,i;null===(i=(e=r.props).onOjSelect)||void 0===i||i.call(e,{files:l,originalEvent:t})},function(e){r._fireInvalidSelectAction(e,t,!1)})}},{key:"_fireInvalidSelectAction",value:function(e,t,i){var n,r,l=this;i&&this.updateState({validity:"invalid"});var o=i?new Promise(function(e){l.dragPromiseResolver=e}):null;null===(r=(n=this.props).onOjInvalidSelect)||void 0===r||r.call(n,{messages:e,originalEvent:t,until:o})}},{key:"_createFileList",value:function(e){for(var t={length:{value:e.length},item:{value:function(e){return this[e]}}},i=0;i<e.length;i++)t[i]={value:e[i],enumerable:!0};return Object.create(FileList.prototype,t)}}])&&e(l.prototype,u),p&&e(l,p),h}(),n.FilePicker.metadata={extension:{_DEFAULTS:function e(){r(this,e),this.accept=null,this.capture=null,this.disabled=!1,this.selectOn="auto",this.selectionMode="multiple"}},properties:{accept:{type:"Array<string>|null",value:null},capture:{type:"string|null",enumValues:["environment","implementation","user"],value:null},disabled:{type:"boolean",value:!1},selectOn:{type:"string",enumValues:["auto","click","clickAndDrop","drop"],value:"auto"},selectionMode:{type:"string",enumValues:["multiple","single"],value:"multiple"}},slots:{trigger:{}},events:{ojBeforeSelect:{cancelable:!0},ojInvalidSelect:{},ojSelect:{}}},u([s.listener()],n.FilePicker.prototype,"_handleSelectingFiles",null),u([s.listener()],n.FilePicker.prototype,"_handleFileSelected",null),u([s.listener()],n.FilePicker.prototype,"_handleDragEnter",null),u([s.listener()],n.FilePicker.prototype,"_handleDragOver",null),u([s.listener()],n.FilePicker.prototype,"_handleDragLeave",null),u([s.listener()],n.FilePicker.prototype,"_handleFileDrop",null),u([s.listener()],n.FilePicker.prototype,"_handleFocusIn",null),u([s.listener()],n.FilePicker.prototype,"_handleFocusOut",null),n.FilePicker=u([s.customElement("oj-file-picker")],n.FilePicker),Object.defineProperty(n,"__esModule",{value:!0})})}();