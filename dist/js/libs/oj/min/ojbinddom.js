/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","knockout","ojs/ojlogger","ojs/ojcontext","ojs/ojkoshared"],function(n,e,o,t,r){"use strict";!function(){r.registerPreprocessor("oj-bind-dom",function(e){var o,t="ko _ojBindDom_:",r=function(e){if(null!=e){var o=n.__AttributeUtils.getExpressionInfo(e).expr;return null==o&&(o="'"+e+"'"),o}return null}(e.getAttribute("config"));r&&(t+=r);var i=document.createComment(t),d=document.createComment("/ko");o=[i];var s=e.parentNode;for(s.insertBefore(i,e);e.childNodes.length>0;){var a=e.childNodes[0];s.insertBefore(a,e),o.push(a)}return o.push(d),s.replaceChild(d,e),o})}(),e.bindingHandlers._ojBindDom_={init:function(r,i,d,s,a){var l,u,c;function m(i){u||(u=t.getContext(r.parentNode).getBusyContext().addBusyState({description:"oj-bind-dom is waiting on config Promise resolution"})),function(){if(!c){var e=function(e){var o=r.parentNode;for(;o&&!n.ElementUtils.isValidCustomElementName(o.localName);)o=o.parentNode;o||(o=e?e._nearestCustomParent:null);return o}(a.$current),o=function(n,e){var o=!1,t=e&&Object.prototype.hasOwnProperty.call(e,"_immediate");r.parentNode===n?o=!0:t&&!r.parentNode.parentNode&&(o=e._immediate);return o}(e,a.$current);c=n._KnockoutBindingProvider.getInstance().__RegisterBindingAppliedPromiseForChildren(e,o)}}(),i.then(function(n){if(i===l)try{e.virtualElements.setDomNodeChildren(r,n.view||[]);var t=a.createChildContext(n.data,void 0,function(n){n.$parent=null,n.$parentContext=null,n.$parents=null});e.applyBindingsToDescendants(t,r)}catch(n){o.error("An error %o occurred during view insertion and apply bindings for oj-bind-dom.",n)}finally{f(),p()}},function(n){f(),p(),o.error("An error %o occurred during view insertion and apply bindings for oj-bind-dom.",n)})}function p(){c&&(c(),c=null)}function f(){u&&(u(),u=null)}return e.computed(function(){m(l=Promise.resolve(e.utils.unwrapObservable(i())))},null,{disposeWhenNodeIsRemoved:r}),{controlsDescendantBindings:!0}}},e.virtualElements.allowedBindings._ojBindDom_=!0});