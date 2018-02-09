/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
var o_a=this;function o_(a,g,c){a=a.split(".");c=c||o_a;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var b;a.length&&(b=a.shift());)a.length||void 0===g?c=c[b]?c[b]:c[b]={}:c[b]=g};/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["require","ojL10n!ojtranslations/nls/ojtranslations","promise"],function(a,g,c){function b(){}c.polyfill();var d={};"undefined"!==typeof window?d=window:"undefined"!==typeof self&&(d=self);var e=d.oj,f=d.oj={version:"4.2.0",build:"8",revision:"41239",noConflict:function(){d.oj=e}};f.D={};o_("Logger",f.D,f);f.D.wCa=0;o_("Logger.LEVEL_NONE",f.D.wCa,f);f.D.qZ=1;o_("Logger.LEVEL_ERROR",f.D.qZ,f);f.D.Yv=2;o_("Logger.LEVEL_WARN",f.D.Yv,f);f.D.QC=3;o_("Logger.LEVEL_INFO",
f.D.QC,f);f.D.rZ=4;o_("Logger.LEVEL_LOG",f.D.rZ,f);f.D.vFa="error";f.D.yFa="warn";f.D.wFa="info";f.D.xFa="log";f.D.bu={level:f.D.qZ,writer:null};f.D.Cc=f.D.bu;f.D.error=function(b){f.D.BM(f.D.qZ,f.D.vFa,arguments)};o_("Logger.error",f.D.error,f);f.D.info=function(b){f.D.BM(f.D.QC,f.D.wFa,arguments)};o_("Logger.info",f.D.info,f);f.D.warn=function(b){f.D.BM(f.D.Yv,f.D.yFa,arguments)};o_("Logger.warn",f.D.warn,f);f.D.log=function(b){f.D.BM(f.D.rZ,f.D.xFa,arguments)};o_("Logger.log",f.D.log,f);f.D.option=
function(b,a){var c={},d;if(0==arguments.length){for(d in f.D.Cc)f.D.Cc.hasOwnProperty(d)&&(c[d]=f.D.Cc[d]);return c}if("string"===typeof b&&void 0===a)return void 0===f.D.Cc[b]?null:f.D.Cc[b];if("string"===typeof b)f.D.Cc[b]=a;else for(d in b)b.hasOwnProperty(d)&&f.D.option(d,b[d])};o_("Logger.option",f.D.option,f);f.D.BM=function(b,a,c){if(!(f.D.option("level")<b)){var d=f.D.YPa();null!=d&&(1==c.length&&c[0]instanceof Function&&(c=[c[0]()]),d[a]&&d[a].apply?d[a].apply(d,c):d[a]&&(d[a]=Function.prototype.bind.call(d[a],
d),f.D.BM(b,a,c)))}};f.D.YPa=function(){var b=null;f.D.option("writer")?b=f.D.option("writer"):"undefined"!==typeof window&&void 0!==window.console&&(b=window.console);return b};f.D.C9a=function(b){return void 0!==f.D.bu[b]};var h=d.__ojCheckpointManager;f.Vn={};o_("CHECKPOINT_MANAGER",f.Vn,f);f.Vn.d7a=function(b,a){h&&h.startCheckpoint(b,a)};o_("CHECKPOINT_MANAGER.startCheckpoint",f.Vn.d7a,f);f.Vn.d2a=function(b){h&&h.endCheckpoint(b)};o_("CHECKPOINT_MANAGER.endCheckpoint",f.Vn.d2a,f);f.Vn.D$=function(b){return h?
h.getRecord(b):void 0};o_("CHECKPOINT_MANAGER.getRecord",f.Vn.D$,f);f.Vn.Cza=function(b){return h?h.matchRecords(b):[]};o_("CHECKPOINT_MANAGER.matchRecords",f.Vn.Cza,f);f.Vn.gW=function(b){f.D.info(function(){for(var a="Checkpoint Records:",c=f.Vn.Cza(b),d=0;d<c.length;d++){var e=c[d],a=a+"\n"+e.name,h=e.description;null!=h&&(a=a+" ("+h+")");a+=":\n";a=a+"start: "+e.start+"\tduration: "+e.duration}return a})};o_("CHECKPOINT_MANAGER.dump",f.Vn.gW,f);f.f=function(){this.Init()};o_("Object",f.f,f);f.f.N=
null;f.f.P8="oj.Object";f.f.MEa=/function\s+([\w\$][\w\$\d]*)\s*\(/;f.f.prototype={};f.f.prototype.constructor=f.f;f.f.j=function(b,a){var c=null,d=null,e;for(e in a)if(a.hasOwnProperty(e)){c=e;d=a[e];break}var h=b.split(".");e=f[h[0]];h=h[2];if(c!=h&&null!=c){var g=e.Z6;g||(g={},e.Z6=g);g[c]=h;e.prototype[h]=d}};f.f.ua=function(b,a,c){f.C.Mx(b);f.C.QF(a);f.C.z9(c);void 0===a&&(a=f.f);f.C.assert(b!==a,"Class can't extend itself");var d=f.f.e_a;d.prototype=a.prototype;b.prototype=new d;b.prototype.constructor=
b;b.N=b.superclass=a.prototype;c&&(b.P8=c)};o_("Object.createSubclass",f.f.ua,f);f.f.m1a=function(b,a){var c;f.C.Mx(b);f.C.assert(null!=a,"source object cannot be null");for(c in a)a.hasOwnProperty(c)&&(b.prototype[c]=a[c])};o_("Object.copyPropertiesForClass",f.f.m1a,f);f.f.e_a=function(){};f.f.prototype.WM=function(b){if(void 0===b)b=this;else if(null===b)return null;return b.constructor};f.f.j("Object.prototype.getClass",{WM:f.f.prototype.WM});f.f.prototype.clone=function(){var b=new this.constructor;
f.tc.Md(b,this);return b};f.f.j("Object.prototype.clone",{clone:f.f.prototype.clone});f.f.prototype.toString=function(){return this.Vba()};f.f.j("Object.prototype.toString",{toString:f.f.prototype.toString});f.f.prototype.Vba=function(){return this.getTypeName()+" Object"};f.f.j("Object.prototype.toDebugString",{Vba:f.f.prototype.Vba});f.f.getTypeName=function(b){f.C.Mx(b);var a=b.P8;null==a&&(a=b.toString(),a=(a=f.f.MEa.exec(a))?a[1]:"anonymous",b.P8=a);return a};o_("Object.getTypeName",f.f.getTypeName,
f);f.f.prototype.getTypeName=function(){return f.f.getTypeName(this.constructor)};f.f.j("Object.prototype.getTypeName",{getTypeName:f.f.prototype.getTypeName});f.f.prototype.Init=function(){f.C.iaa()&&f.C.assert(this.getTypeName,"Not an oj.Object");var b=this.constructor;b.su||f.f.y5(b)};f.f.j("Object.prototype.Init",{Init:f.f.prototype.Init});f.f.e2a=function(b){f.C.Mx(b);b.su||f.f.y5(b)};o_("Object.ensureClassInitialization",f.f.e2a,f);f.f.prototype.IB=function(b){return this===b};f.f.j("Object.prototype.equals",
{IB:f.f.prototype.IB});f.f.Sva=function(b,a){f.C.Mx(a);return a.bind(b)};o_("Object.createCallback",f.f.Sva,f);f.f.y5=function(b){f.C.iaa()&&(f.C.Mx(b),f.C.assert(!b.su));b.su=!0;var a=b.N;a&&((a=a.constructor)&&!a.su&&f.f.y5(a),f.f.GIa(b));(a=b.InitClass||null)||(a=b.InitClass);a&&a.call(b)};f.f.Bb=function(b,a){if(b===a)return!0;if(typeof b!==typeof a||null===b||null===a)return!1;if(b.constructor===a.constructor){if(Array.isArray(b))return f.f.lKa(b,a);if(b.constructor===Object)return f.f.II(b,
a);if(b.valueOf&&"function"===typeof b.valueOf)return b.valueOf()===a.valueOf()}return!1};o_("Object.compareValues",f.f.Bb,f);f.f.lKa=function(b,a){if(b.length!==a.length)return!1;for(var c=0,d=b.length;c<d;c++)if(!f.f.Bb(b[c],a[c]))return!1;return!0};f.f.nKa=function(b,a){if("number"===typeof b&&"number"===typeof a||"string"===typeof b&&"string"===typeof a)return b==a;if("object"===typeof b&&"object"===typeof a){if(b.id&&a.id)return b.id!=a.id?!1:b.index&&a.index?b.index==a.index:!0;if(b.index&&
a.index)return b.index==a.index}return!1};f.f.Wia=function(b,a){if(!b)return!a||0==a.length;if(!a)return!b||0==b.length;if(b.length!=a.length)return!1;for(var c=0;c<b.length;c++){for(var d=!1,e=0;e<a.length;e++)if(f.f.nKa(b[c],a[e])){d=!0;break}if(!d)return!1}return!0};f.f.II=function(b,a){var c,d=!1;if(b===a)return!0;if(!(b instanceof Object&&a instanceof Object)||b.constructor!==a.constructor)return!1;for(c in b)if(d||(d=!0),b.hasOwnProperty(c)&&(!a.hasOwnProperty(c)||b[c]!==a[c]&&("object"!==typeof b[c]||
!f.f.II(b[c],a[c]))))return!1;for(c in a)if(d||(d=!0),a.hasOwnProperty(c)&&!b.hasOwnProperty(c))return!1;return d?!0:JSON.stringify(b)===JSON.stringify(a)};f.f.Yd=function(b){var a;if(void 0===b||null===b)return!0;for(a in b)if(b.hasOwnProperty(a))return!1;return!0};f.f.GIa=function(b){f.f.Z6&&f.f.Gha(b,b.N)};f.f.Gha=function(b,a){if(a){var c=a.constructor;f.f.Gha(b,c.N);var c=c.Z6,d;if(c)for(d in c)if(c.hasOwnProperty(d)){var e=c[d];if(d!=e){var h=b.prototype;!h.hasOwnProperty(d)&&h.hasOwnProperty(e)?
h[d]=h[e]:!h.hasOwnProperty(e)&&h.hasOwnProperty(d)&&(h[e]=h[d])}}}};f.tw=function(){return"function"===typeof define&&define.amd};f.C={};o_("Assert",f.C,f);f.C.o2a=function(){f.C.DEBUG=!0};o_("Assert.forceDebug",f.C.o2a,f);f.C.f1a=function(){f.C.DEBUG=!1};o_("Assert.clearDebug",f.C.f1a,f);f.C.iaa=function(){return!0==f.C.DEBUG};o_("Assert.isDebug",f.C.iaa,f);f.C.assert=function(b,a){if(f.C.DEBUG&&!b){var c=a||"",d;if(2<arguments.length){c+="(";for(d=2;d<arguments.length;d+=1)c+=arguments[d];c+=")"}f.C.uh(c)}};
o_("Assert.assert",f.C.assert,f);f.C.gf=function(){f.C.DEBUG&&f.C.uh("Abstract function called")};o_("Assert.failedInAbstractFunction",f.C.gf,f);f.C.Df=function(b,a,c){var d;f.C.DEBUG&&(null!=b?(f.C.Hn(a,"function",null,0,!1),d=a.prototype,d.isPrototypeOf(b)||f.C.uh("object '"+b+"' doesn't match prototype "+d,0,c)):f.C.uh("null object doesn't match prototype "+d,0,c))};o_("Assert.assertPrototype",f.C.Df,f);f.C.G0a=function(b,a,c){var d;f.C.DEBUG&&null!=b&&(null!=b?(f.C.Hn(a,"function",null,0,!1),
d=a.prototype,d.isPrototypeOf(b)||f.C.uh("object '"+b+"' doesn't match prototype "+d,0,c)):f.C.uh("null object doesn't match prototype "+d,0,c))};o_("Assert.assertPrototypeOrNull",f.C.G0a,f);f.C.H0a=function(b,a,c,d){f.C.DEBUG&&(a=a.prototype,c=c.prototype,a.isPrototypeOf(b)||c.isPrototypeOf(b)||f.C.uh("object '"+b+"' doesn't match prototype "+a+" or "+c,0,d))};o_("Assert.assertPrototypes",f.C.H0a,f);f.C.A0a=function(b){f.C.DEBUG&&b&&void 0===b.nodeType&&f.C.uh(b+" is not a DOM Node")};o_("Assert.assertDomNodeOrNull",
f.C.A0a,f);f.C.y9=function(b){f.C.DEBUG&&(b&&void 0!==b.nodeType||f.C.uh(b+" is not a DOM Node"))};o_("Assert.assertDomNode",f.C.y9,f);f.C.x9=function(b,a){f.C.DEBUG&&(f.C.y9(b),1!==b.nodeType?f.C.uh(b+" is not a DOM Element"):a&&b.nodeName!==a&&f.C.uh(b+" is not a "+a+" Element"))};o_("Assert.assertDomElement",f.C.x9,f);f.C.z0a=function(b,a){f.C.DEBUG&&null!=b&&(f.C.y9(b),1!==b.nodeType?f.C.uh(b+" is not a DOM Element"):a&&b.nodeName!==a&&f.C.uh(b+" is not a "+a+" Element"))};o_("Assert.assertDomElementOrNull",
f.C.z0a,f);f.C.Hn=function(b,a,c,d,e){!f.C.DEBUG||null==b&&e||typeof b===a||(b=b+" is not of type "+a,c&&(b=c+b),f.C.uh(b))};o_("Assert.assertType",f.C.Hn,f);f.C.jk=function(b,a){f.C.DEBUG&&f.C.Hn(b,"object",a,0,!1)};o_("Assert.assertObject",f.C.jk,f);f.C.nva=function(b,a){f.C.DEBUG&&f.C.Hn(b,"object",a,0,!0)};o_("Assert.assertObjectOrNull",f.C.nva,f);f.C.C0a=function(b,a){f.C.DEBUG&&(f.C.Hn(b,"string",a,0,!1),f.C.assert(0<b.length,"empty string"))};o_("Assert.assertNonEmptyString",f.C.C0a,f);f.C.Vu=
function(b,a){f.C.DEBUG&&f.C.Hn(b,"string",a,0,!1)};o_("Assert.assertString",f.C.Vu,f);f.C.z9=function(b,a){f.C.DEBUG&&f.C.Hn(b,"string",a,0,!0)};o_("Assert.assertStringOrNull",f.C.z9,f);f.C.Mx=function(b,a){f.C.DEBUG&&f.C.Hn(b,"function",a,0,!1)};o_("Assert.assertFunction",f.C.Mx,f);f.C.QF=function(b,a){f.C.DEBUG&&f.C.Hn(b,"function",a,0,!0)};o_("Assert.assertFunctionOrNull",f.C.QF,f);f.C.mva=function(b,a){f.C.DEBUG&&f.C.Hn(b,"boolean",a,0,!1)};o_("Assert.assertBoolean",f.C.mva,f);f.C.Uu=function(b,
a){f.C.DEBUG&&f.C.Hn(b,"number",a,0,!1)};o_("Assert.assertNumber",f.C.Uu,f);f.C.E0a=function(b,a){f.C.DEBUG&&f.C.Hn(b,"number",a,0,!0)};o_("Assert.assertNumberOrNull",f.C.E0a,f);f.C.HV=function(b,a){f.C.DEBUG&&!Array.isArray(b)&&(void 0===a&&(a=b+" is not an array"),f.C.uh(a))};o_("Assert.assertArray",f.C.HV,f);f.C.GM=function(b,a){f.C.DEBUG&&null!=b&&!Array.isArray(b)&&(void 0===a&&(a=b+" is not an array"),f.C.uh(a))};o_("Assert.assertArrayOrNull",f.C.GM,f);f.C.D0a=function(b,a){f.C.DEBUG&&!isNaN(b)&&
(void 0===a&&(a=b+" is convertible to a number"),f.C.uh(a))};o_("Assert.assertNonNumeric",f.C.D0a,f);f.C.F0a=function(b,a){f.C.DEBUG&&isNaN(b)&&(void 0===a&&(a=b+" is not convertible to a number"),f.C.uh(a))};o_("Assert.assertNumeric",f.C.F0a,f);f.C.B0a=function(b,a,c){var d;if(null==b||void 0===a[b.toString()]){if(void 0===c){c=" is not in set: {";for(d in a)a.hasOwnProperty(d)&&(c+=d,c+=",");c=b+(c+"}")}f.C.uh(c)}};o_("Assert.assertInSet",f.C.B0a,f);f.C.uh=function(b,a,c){a="Assertion";c&&(a+=" ("+
c+")");a+=" failed: ";void 0!==b&&(a+=b);throw Error(a);};o_("Assert.assertionFailed",f.C.uh,f);c=d.__oj_Assert_DEBUG;void 0!==c&&(f.C.DEBUG=c);f.Gl=function(){this.Init()};o_("EventSource",f.Gl,f);f.f.ua(f.Gl,f.f,"oj.EventSource");f.Gl.prototype.Init=function(){this.Uf=[];f.Gl.N.Init.call(this)};f.f.j("EventSource.prototype.Init",{Init:f.Gl.prototype.Init});f.Gl.prototype.on=function(b,a){var c=!1,d;for(d=0;d<this.Uf.length;d++)if(this.Uf[d].eventType==b&&this.Uf[d].eventHandlerFunc==a){c=!0;break}c||
this.Uf.push({eventType:b,eventHandlerFunc:a})};f.f.j("EventSource.prototype.on",{on:f.Gl.prototype.on});f.Gl.prototype.off=function(b,a){var c;for(c=this.Uf.length-1;0<=c;c--)if(this.Uf[c].eventType==b&&this.Uf[c].eventHandlerFunc==a){this.Uf.splice(c,1);break}};f.f.j("EventSource.prototype.off",{off:f.Gl.prototype.off});f.Gl.prototype.handleEvent=function(b,a){var c,d;for(c=0;c<this.Uf.length;c++)if(d=this.Uf[c],d.eventType==b&&(d=d.eventHandlerFunc.apply(this,Array.prototype.slice.call(arguments).slice(1)),
!1===d))return!1;return!0};f.f.j("EventSource.prototype.handleEvent",{handleEvent:f.Gl.prototype.handleEvent});f.ra={};o_("Config",f.ra,f);f.ra.qk=function(){var b;if(f.tw())return f.C.assert("undefined"!==typeof g,"ojtranslations module must be defined"),b=g._ojLocale_,"root"==b?"en":b;b=f.ra.OE;null==b&&((b=document.documentElement.lang)||(b=void 0===navigator?"en":(navigator.language||navigator.userLanguage||"en").toLowerCase()),f.ra.OE=b=b.toLowerCase());return b};o_("Config.getLocale",f.ra.qk,
f);f.ra.N6a=function(b,c){if(f.tw()){var d=["ojL10n!ojtranslations/nls/"+b+"/ojtranslations"],e=0;if(f.ub&&(d.push("ojL10n!ojtranslations/nls/"+b+"/localeElements"),f.sp)){var h=f.sp.oHa(),e=h.length;h.forEach(function(a){d.push("ojL10n!ojtranslations/nls/"+b+a)})}a(d,function(b,a){g=b;a&&f.ub.AHa(a);for(var d=0;d<e;d++)f.sp.Yga(arguments[d+2]);c&&c()})}else f.ra.OE=b,c&&c()};o_("Config.setLocale",f.ra.N6a,f);f.ra.Db=function(b){var c=/^\/|:/;return null==b||c.test(b)?b:(c=f.ra.UXa)?c+("/"==c.charAt(c.length-
1)?"":"/")+b:f.tw()?(c=a.toUrl("ojs/_foo_"),c.replace(/[^\/]*$/,"../"+b)):b};o_("Config.getResourceUrl",f.ra.Db,f);f.ra.P6a=function(b){f.ra.UXa=b};o_("Config.setResourceBaseUrl",f.ra.P6a,f);f.ra.I6a=function(b){f.ra.SIa=b};o_("Config.setAutomationMode",f.ra.I6a,f);f.ra.h$=function(){return f.ra.SIa};o_("Config.getAutomationMode",f.ra.h$,f);f.ra.Oxa=function(){var b="Oracle JET Version: "+f.version+"\n",b=b+("Oracle JET Revision: "+f.revision+"\n"),a="undefined"!==typeof window;a&&window.navigator&&
(b+="Browser: "+window.navigator.userAgent+"\n",b+="Browser Platform: "+window.navigator.platform+"\n");$&&($.fn&&(b+="jQuery Version: "+$.fn.jquery+"\n"),$.ui&&$.ui.version&&(b+="jQuery UI Version: "+$.ui.version+"\n"));f.xa&&(b+="Knockout Version: "+f.xa.qHa()+"\n");a&&window.o6a&&(b+="Require Version: "+window.o6a.version+"\n");return b};o_("Config.getVersionInfo",f.ra.Oxa,f);f.ra.c5a=function(){console.log(f.ra.Oxa())};o_("Config.logVersionInfo",f.ra.c5a,f);f.ra.Xga=function(){if(!f.ra.qua){if(!f.tw())throw"JET Temlate engine cannot be loaded with an AMD loader";
f.ra.qua=new Promise(function(b,c){a(["./ojtemplateengine"],b,c)})}return f.ra.qua};(function(){function b(a,c){c=c||{bubbles:!1,cancelable:!1,detail:void 0};var d=document.createEvent("CustomEvent");d.initCustomEvent(a,c.bubbles,c.cancelable,c.detail);return d}if("undefined"!==typeof window){if(!function(){var b=document.createEvent("Event");b.initEvent("foo",!0,!0);b.preventDefault();return b.defaultPrevented}()){var a=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&
(a.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}"function"!==typeof window.CustomEvent&&(b.prototype=window.Event.prototype,window.CustomEvent=b)}})();(function(){function b(a){if((a=a.data)&&"oj-setImmeidate"===a.message){a=a.id;var e=d.get(a);c(a);e&&e.Jc.apply(window,e.y0a)}}function a(){var c=arguments[0],f=Array.prototype.slice.call(arguments,1);"function"!==typeof c&&(c=new Function(c.toString()));var h;isNaN(e)&&(e=0);h=++e;d||(d=new Map);
d.set(h,{Jc:c,y0a:f});1===d.size&&window.addEventListener("message",b);window.postMessage({id:h,message:"oj-setImmeidate"},"*");return h}function c(a){d&&(d["delete"](a),1>d.size&&(window.removeEventListener("message",b),d=null))}if("undefined"!==typeof window&&!window.setImmediate&&window.postMessage){var d,e;window.setImmediate=a;window.clearImmediate=c}})();(function(){"undefined"===typeof window||window.__extends||(window.__extends=this&&this.z8a||function(){var b=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])};return function(a,c){function d(){this.constructor=a}b(a,c);a.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}())})();"undefined"!==typeof window&&(window.Symbol?(window.Symbol.asyncIterator||(window.Symbol.asyncIterator="asyncIterator"),window.Symbol.iterator||(window.Symbol.iterator="iterator")):(window.Symbol={},window.Symbol.asyncIterator="asyncIterator",window.Symbol.iterator=
"iterator"));f.Ja=function(){};f.Ja.Ag={gz:"ie",HC:"firefox",DZ:"safari",KBa:"chrome",RY:"edge",cw:"unknown"};f.Ja.jp={Vda:"trident",RZ:"webkit",Jca:"gecko",oca:"blink",bCa:"edgehtml",cw:"unknown"};f.Ja.Jl={cea:"Windows",hDa:"Solaris",kda:"Mac",cw:"Unknown",AY:"Android",TO:"IOS",xCa:"Linux"};f.Ja.rl=function(b){f.ab.So(b)&&(b=navigator.userAgent);b=b.toLowerCase();var a=f.ab.SB(b),c=f.Ja.GLa;if(c&&c.hashCode===a)return{os:c.os,browser:c.browser,browserVersion:c.browserVersion,engine:c.engine,engineVersion:c.engineVersion,
hashCode:c.hashCode};var c=f.Ja.Jl.cw,d=f.Ja.Ag.cw,e=0,h=f.Ja.jp.cw,g=0;-1<b.indexOf("iphone")||-1<b.indexOf("ipad")?c=f.Ja.Jl.TO:-1<b.indexOf("mac")?c=f.Ja.Jl.kda:-1<b.indexOf("sunos")?c=f.Ja.Jl.hDa:-1<b.indexOf("android")?c=f.Ja.Jl.AY:-1<b.indexOf("linux")?c=f.Ja.Jl.xCa:-1<b.indexOf("win")&&(c=f.Ja.Jl.cea);-1<b.indexOf("msie")?(d=f.Ja.Ag.gz,e=f.Ja.Bn(b,/msie (\d+[.]\d+)/),b.indexOf("trident")&&(h=f.Ja.jp.Vda,g=f.Ja.Bn(b,/trident\/(\d+[.]\d+)/))):-1<b.indexOf("trident")?(d=f.Ja.Ag.gz,e=f.Ja.Bn(b,
/rv:(\d+[.]\d+)/),b.indexOf("trident")&&(h=f.Ja.jp.Vda,g=f.Ja.Bn(b,/trident\/(\d+[.]\d+)/))):-1<b.indexOf("edge")?(d=f.Ja.Ag.RY,e=g=f.Ja.Bn(b,/edge\/(\d+[.]\d+)/),h=f.Ja.jp.bCa):-1<b.indexOf("chrome")?(d=f.Ja.Ag.KBa,e=f.Ja.Bn(b,/chrome\/(\d+[.]\d+)/),28<=e?(h=f.Ja.jp.oca,g=e):(h=f.Ja.jp.RZ,g=f.Ja.Bn(b,/applewebkit\/(\d+[.]\d+)/))):-1<b.indexOf("safari")?(d=f.Ja.Ag.DZ,e=f.Ja.Bn(b,/version\/(\d+[.]\d+)/),h=f.Ja.jp.RZ,g=f.Ja.Bn(b,/applewebkit\/(\d+[.]\d+)/)):-1<b.indexOf("firefox")&&(d=f.Ja.Ag.HC,e=
f.Ja.Bn(b,/rv:(\d+[.]\d+)/),h=f.Ja.jp.Jca,g=f.Ja.Bn(b,/gecko\/(\d+)/));c=f.Ja.GLa={hashCode:a,os:c,browser:d,browserVersion:e,engine:h,engineVersion:g};return{os:c.os,browser:c.browser,browserVersion:c.browserVersion,engine:c.engine,engineVersion:c.engineVersion,hashCode:c.hashCode}};f.Ja.Bn=function(b,a){var c=b.match(a);return c&&(c=c[1])?parseFloat(c):0};f.ic=function(){};o_("ThemeUtils",f.ic,f);f.ic.p3a=function(){return(f.ic.ad("oj-theme-json")||{}).name};o_("ThemeUtils.getThemeName",f.ic.p3a,
f);f.ic.q3a=function(){return(f.ic.ad("oj-theme-json")||{}).targetPlatform};o_("ThemeUtils.getThemeTargetPlatform",f.ic.q3a,f);f.ic.d1a=function(){this.UQ=null};o_("ThemeUtils.clearCache",f.ic.d1a,f);f.ic.ad=function(b){null==this.UQ&&(this.UQ={},this.yqa={},this.qSa=window.getComputedStyle(document.head).getPropertyValue("font-family"));var a=this.UQ[b];if(a===this.yqa)return null;if(null!=a)return a;var c=document.createElement("meta");c.className=b;document.head.appendChild(c);var d=window.getComputedStyle(c).getPropertyValue("font-family");
if(null!=d)if(d==this.qSa)f.D.warn("parseJSONFromFontFamily: When the selector ",b," is applied the font-family read off the dom element is ",d,". The parent dom elment has the same font-family value."," This is interpreted to mean that no value was sent down for selector ",b,". Null will be returned.");else if(d=d.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g,""))try{a=JSON.parse(d)}catch(e){var h=d.indexOf(","),g=!1;if(-1<h){d=d.substring(h+2);try{a=JSON.parse(d),g=!0}catch(q){}}if(!1==g)throw f.D.error("Error parsing json for selector "+
b+".\nString being parsed is "+d+". Error is:\n",e),document.head.removeChild(c),e;}document.head.removeChild(c);this.UQ[b]=null==a?this.yqa:a;return a};o_("ThemeUtils.parseJSONFromFontFamily",f.ic.ad,f);f.Ic=function(){};o_("ResponsiveUtils",f.Ic,f);f.Ic.mp={SM:"sm",MD:"md",LG:"lg",XL:"xl",XXL:"xxl"};o_("ResponsiveUtils.SCREEN_RANGE",f.Ic.mp,f);f.Ic.bz={SM_UP:"sm-up",MD_UP:"md-up",LG_UP:"lg-up",XL_UP:"xl-up",XXL_UP:"xxl-up",SM_ONLY:"sm-only",MD_ONLY:"md-only",LG_ONLY:"lg-only",XL_ONLY:"xl-only",
MD_DOWN:"md-down",LG_DOWN:"lg-down",XL_DOWN:"xl-down",HIGH_RESOLUTION:"high-resolution"};o_("ResponsiveUtils.FRAMEWORK_QUERY_KEY",f.Ic.bz,f);f.Ic.Fz={};f.Ic.Fz[f.Ic.mp.SM]=0;f.Ic.Fz[f.Ic.mp.MD]=1;f.Ic.Fz[f.Ic.mp.LG]=2;f.Ic.Fz[f.Ic.mp.XL]=3;f.Ic.Fz[f.Ic.mp.XXL]=4;f.Ic.ROa=function(b){var a=document.getElementsByClassName(b).item(0);null===a&&(a=document.createElement("meta"),a.className=b,document.head.appendChild(a));return window.getComputedStyle(a).getPropertyValue("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,
"")};f.Ic.LB=function(b){b=f.Ic.ROa("oj-mq-"+b);return"null"==b?null:b};o_("ResponsiveUtils.getFrameworkQuery",f.Ic.LB,f);f.Ic.compare=function(b,a){var c=f.Ic.Fz[b],d=f.Ic.Fz[a];if(void 0==c)throw"size1 param "+b+" illegal, please use one of the screen size constants like oj.ResponsiveUtils.SCREEN_RANGE.MD";if(void 0==d)throw"size2 param "+a+" illegal, please use one of the screen size constants like oj.ResponsiveUtils.SCREEN_RANGE.MD";return c-d};o_("ResponsiveUtils.compare",f.Ic.compare,f);f.ab=
{};o_("StringUtils",f.ab,f);f.ab.dHa=/^\s*|\s*$/g;f.ab.Yd=function(b){return null===b?!0:0===f.ab.trim(b).length};o_("StringUtils.isEmpty",f.ab.Yd,f);f.ab.So=function(b){return void 0===b||f.ab.Yd(b)?!0:!1};o_("StringUtils.isEmptyOrUndefined",f.ab.So,f);f.ab.Gd=function(b){return null!==b&&("string"===typeof b||b instanceof String)};o_("StringUtils.isString",f.ab.Gd,f);f.ab.trim=function(b){return f.ab.Gd(b)?b.replace(f.ab.dHa,""):b};o_("StringUtils.trim",f.ab.trim,f);f.ab.SB=function(b){var a=0;
if(0===b.length)return a;for(var c=0;c<b.length;c++)a=(a<<5)-a+b.charCodeAt(c),a&=a;return a};(function(){String.prototype.Tn||(String.prototype.Tn=function(b,a){return this.substr(a||0,b.length)===b});String.prototype.iwa||(String.prototype.iwa=function(b,a){var c=this.toString();if("number"!==typeof a||!isFinite(a)||Math.floor(a)!==a||a>c.length)a=c.length;a-=b.length;c=c.lastIndexOf(b,a);return-1!==c&&c===a})})();f.tc={};o_("CollectionUtils",f.tc,f);f.tc.Md=function(b,a,c,d,e){return f.tc.hja(b,
a,c,d,e,0)};o_("CollectionUtils.copyInto",f.tc.Md,f);f.tc.isPlainObject=function(b){if(null!==b&&"object"===typeof b)try{if(b.constructor&&b.constructor.prototype.hasOwnProperty("isPrototypeOf"))return!0}catch(a){}return!1};o_("CollectionUtils.isPlainObject",f.tc.isPlainObject,f);f.tc.hja=function(b,a,c,d,e,h){var g,q,r;if(void 0===e||null===e)e=Number.MAX_VALUE;if(b&&a&&b!==a){r=Object.keys(a);for(var u=0;u<r.length;u++){g=r[u];q=c?c(g):g;g=a[g];var w=!1;if(d&&h<e){var v=b[q];f.tc.isPlainObject(g)&&
(null==v||f.tc.isPlainObject(v))&&(w=!0,b[q]=v||{},f.tc.hja(b[q],g,c,!0,e,h+1))}w||(b[q]=g)}}return b};f.Aa={};o_("Translations",f.Aa,f);f.Aa.yba=function(b){f.Aa.j1=b};o_("Translations.setBundle",f.Aa.yba,f);f.Aa.uxa=function(b){return f.Aa.Wma(b)};o_("Translations.getResource",f.Aa.uxa,f);f.Aa.kd=function(b,a){return null==b?null:f.Aa.xNa(b,a)};o_("Translations.applyParameters",f.Aa.kd,f);f.Aa.T=function(b,a){var c=f.Aa.Wma(b);if(null==c)return b;var d={};2<arguments.length?d=Array.prototype.slice.call(arguments,
1):2==arguments.length&&(d=arguments[1],"object"===typeof d||d instanceof Array||(d=[d]));return f.Aa.kd(c,d)};o_("Translations.getTranslatedString",f.Aa.T,f);f.Aa.oW=function(b){b=f.Aa.ola()[b];var a,c;if(null==b)return{};a={};for(c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a};o_("Translations.getComponentTranslations",f.Aa.oW,f);f.Aa.Wma=function(b){b=b?b.split("."):[];var a=f.Aa.ola(),c=b.length,d=0,e=b[d];for(f.C.jk(a);0<--c&&a;)a=a[e],d++,e=b[d];return a?a[e]||null:null};f.Aa.xNa=function(b,
a){var c=b.length,d=[],e=null,f=!1,h=!1,g=!1,r=!1,u,w;for(w=0;w<c;w++){var v=b.charAt(w),x=!1;if(f)x=!0,f=!1;else switch(v){case "$":f=!0;break;case "{":r||(h||(u=!1,e=[]),h=!0);break;case "}":h&&0<e.length&&(h=a[e.join("")],d.push(void 0===h?"null":h));h=!1;break;case "[":h||(g?r=!0:g=!0);break;case "]":r?r=!1:g=!1;break;default:x=!0}x&&(h?","==v||" "==v?u=!0:u||e.push(v):r||d.push(v))}return d.join("")};f.Aa.ola=function(){var b=f.Aa.j1;return b?b:f.tw()?(f.C.assert(void 0!==g,"ojtranslations module must be defined"),
g):{}};f.BC=function(b){this.rR=b;this.rha=f.BC.una();this.wn=this.rha.toString(36)+"_"+Math.random().toString(36)};Object.defineProperties(f.BC.prototype,{id:{get:function(){return this.wn},enumerable:!0},description:{get:function(){if(this.rR)return this.rR instanceof Function?this.rR():this.rR.toString()},enumerable:!0}});f.BC.prototype.toString=function(){var b="Busy state: [description\x3d",a=this.description;null!==a&&(b+=a);return b+=", elapsed\x3d"+(f.BC.una()-this.rha)+"]"};f.BC.una=function(){return window.performance?
window.performance.now():(new Date).getTime()};f.lb=function(b){this.Init(b)};o_("BusyContext",f.lb,f);f.f.ua(f.lb,f.f,"oj.BusyContext");f.lb.l2=Number.NaN;f.lb.J6a=function(b){isNaN(b)||(f.lb.l2=b)};o_("BusyContext.setDefaultTimeout",f.lb.J6a,f);f.lb.prototype.Init=function(b){f.lb.N.Init.call(this);this.xK=b;this.Ou=new Map;this.eqa={P2a:function(){this.k6||(this.k6=new Promise(this.yJa.bind(this)));return this.k6},v6a:function(){this.l6&&this.l6(!0);this.l6=this.k6=null},j3a:function(b,a,c){var d,
e=new Promise(function(b,e){d=window.setTimeout(function(){e(a())},c)});this.q8.push(d);return Promise.race([b,e]).then(this.MJa.bind(this))},T2a:function(){this.v6||(this.v6=new Promise(function(b){window.setImmediate(function(){this.v6=null;b(!0)}.bind(this))}.bind(this)));return this.v6},MJa:function(){var b=this.q8;this.q8=[];for(var a=0;a<b.length;a++)window.clearTimeout(b[a]);return!0},yJa:function(b){this.l6=b},q8:[]}};f.lb.e6=function(b){f.D.option("level")===f.D.rZ&&(f.D.log("\x3e\x3e Busy states: %d",
b.size),b=f.lb.rg(b),0<b.length&&f.D.log(b.join("\n")))};f.lb.rg=function(b){var a=[];b.forEach(function(b){a.push(b)});return a};f.lb.prototype.Xc=function(b){f.D.log("BusyContext.addBusyState: start scope\x3d'%s'",this.Yl());var a=this.Ou;b=new f.BC(b[f.lb.Pea]);f.D.log("\x3e\x3e "+b);a.set(b.id,b);this.GHa();f.D.log("BusyContext.addBusyState: end scope\x3d'%s'",this.Yl());return this.Gra.bind(this,b)};f.f.j("BusyContext.prototype.addBusyState",{Xc:f.lb.prototype.Xc});f.lb.prototype.gW=function(b){f.D.info("BusyContext.dump: start scope\x3d'%s' %s",
this.Yl(),b?b:"");var a=this.Ou;f.D.info("\x3e\x3e Busy states: %d",a.size);a=f.lb.rg(a);0<a.length&&f.D.info(a.join("\n"));f.D.info("BusyContext.dump: start scope\x3d'%s' %s",this.Yl(),b?b:"")};f.f.j("BusyContext.prototype.dump",{gW:f.lb.prototype.gW});f.lb.prototype.Fwa=function(){return f.lb.rg(this.Ou)};f.f.j("BusyContext.prototype.getBusyStates",{Fwa:f.lb.prototype.Fwa});f.lb.prototype.clear=function(){f.D.log("BusyContext.clear: start scope\x3d'%s'",this.Yl());for(var b=f.lb.rg(this.Ou),a=0;a<
b.length;a++){var c=b[a];try{this.Gra(c)}catch(d){f.D.log("BusyContext.clear: %o",d)}Object.defineProperty(c,f.lb.Mfa,{value:!0,enumerable:!1})}f.D.log("BusyContext.clear: end scope\x3d'%s'",this.Yl())};f.f.j("BusyContext.prototype.clear",{clear:f.lb.prototype.clear});f.lb.prototype.whenReady=function(b){var a=this.Yl();f.D.log("BusyContext.whenReady: start, scope\x3d'%s', timeout\x3d%d",a,b);var c=this.Ou,d=this.eqa,e=d.T2a(),h=f.lb.uP.whenReady(),e=Promise.all([e,h]).then(function(){f.D.log("BusyContext.whenReady: bootstrap mediator ready scope\x3d%s",
a);f.lb.Wja();if(0!==c.size||this.AV)return f.D.log("BusyContext.whenReady: busy states returning master scope\x3d%s",a),d.P2a();f.D.log("BusyContext.whenReady: resolved no busy states scope\x3d%s",a);return Promise.resolve(!0)}.bind(this));isNaN(b)&&!isNaN(f.lb.l2)&&(b=f.lb.l2);isNaN(b)||(e=d.j3a(e,function(){var d;d="whenReady timeout of "+b+"ms expired ";f.lb.e6(c);var e=f.lb.rg(c);d=f.lb.uP.VB()?Error(d+"with the following busy states: "+e.join(", ")):Error(d+'while the application is loading. Busy state enabled by setting the "window.oj_whenReady \x3d true;" global variable. Application bootstrap busy state is released by calling "oj.Context.getPageContext().getBusyContext().applicationBootstrapComplete();".');
d.busyStates=e;f.D.log("BusyContext.whenReady: rejected scope\x3d'%s'\n%s",a,d.message);return d},b));f.D.log("BusyContext.whenReady: end scope\x3d'%s'",this.Yl());return e};f.f.j("BusyContext.prototype.whenReady",{whenReady:f.lb.prototype.whenReady});f.lb.prototype.VB=function(){f.D.log("BusyContext.isReady: start scope\x3d'%s'",this.Yl());var b=!1;if(f.lb.uP.VB()&&!this.AV){var a=this.Ou,b=0===a.size;f.lb.e6(a)}f.D.log("BusyContext.isReady: end scope\x3d'%s'",this.Yl());return b};f.f.j("BusyContext.prototype.isReady",
{VB:f.lb.prototype.VB});f.lb.prototype.Gra=function(b){var a=this.Yl();f.D.log("BusyContext._removeBusyState: start scope\x3d'%s'",a);var c=this.Ou;if(b[f.lb.Mfa])f.D.log("Busy state has been forcefully resolved via clear:\n"+b);else{if(!c["delete"](b.id))throw Error("Busy state has already been resolved:\n"+b);0!==c.size||this.AV?f.D.log("BusyContext._removeBusyState: resolving busy state:\n"+b):(this.AV=!0,window.setImmediate(this.QMa.bind(this)));f.D.log("BusyContext._removeBusyState: end scope\x3d'%s'",
a)}};f.lb.prototype.QMa=function(){var b=this.Yl();f.D.log("BusyContext._evalBusyness: begin scope\x3d'%s'",b);f.lb.Wja();var a=this.Ou,c=this.eqa;0===a.size?(f.D.log("BusyContext._evalBusyness: resolving whenReady promises"),c.v6a(),this.PXa()):f.lb.e6(a);this.AV=!1;f.D.log("BusyContext._evalBusyness: end scope\x3d'%s'",b)};f.lb.prototype.v9=function(){var b=this.Yl();f.D.log("BusyContext.applicationBootstrapComplete: begin scope\x3d'%s'",b);f.lb.uP.x5a();f.D.log("BusyContext.applicationBootstrapComplete: end scope\x3d'%s'",
b)};f.f.j("BusyContext.prototype.applicationBootstrapComplete",{v9:f.lb.prototype.v9});f.lb.prototype.jva=f.lb.prototype.v9;f.f.j("BusyContext.prototype.applicationBoostrapComplete",{jva:f.lb.prototype.jva});f.lb.prototype.jPa=function(){if(this.xK){var b=f.Context.getContext(f.Context.qxa(this.xK));if(b)return b.Dc()}return null};f.lb.prototype.GHa=function(){if(!this.Qqa){this.Qqa=!0;var b=this.jPa();if(b){var a={};a[f.lb.Pea]=this.Ala.bind(this);this.J6=b.Xc(a)}}};f.lb.prototype.PXa=function(){this.Qqa=
!1;this.J6&&(this.J6(),this.J6=null)};f.lb.prototype.Ala=function(){return"["+f.lb.rg(this.Ou).join(", ")+"]"};f.lb.prototype.Yl=function(){function b(a){var c="undefined";a&&(a.id&&0<a.id.length?c="#"+a.id:(c=a.nodeName,a.hasAttribute("data-oj-context")&&(c+="[data-oj-context]"),(a=a.getAttribute("class"))&&(c+="."+a.split(" ").join("."))));return c}this.Ija||(this.Ija=this.xK?b(this.xK.parentElement)+" \x3e "+b(this.xK):"page");return this.Ija};f.lb.prototype.toString=function(){var b;b="Busy Context: [scope\x3d"+
this.Yl();return b+=" states\x3d"+this.Ala()+"]"};f.lb.Wja=function(){f.xa&&f.xa.ZV()};f.lb.Pea="description";f.lb.Mfa="__ojRip";f.lb.uP=new function(){var b,a,c;"undefined"!==typeof window&&(b=window.oj_whenReady);this.whenReady=function(){return a?a:a=b?new Promise(function(b){c=b}):Promise.resolve(!0)};this.VB=function(){return!b};this.x5a=function(){c?window.setImmediate(function(){b=!1;c(!0);c=null}):b=!1}};f.Context=function(b){this.Init(b)};o_("Context",f.Context,f);f.f.ua(f.Context,f.f,"oj.Context");
f.Context.prototype.Init=function(b){f.Context.N.Init.call(this);this.fVa=b};f.Context.getContext=function(b){for(;b;){var a=b[f.Context.Lfa];if(a)return a;if(b.hasAttribute(f.Context.UFa))return a=new f.Context(b),Object.defineProperty(b,f.Context.Lfa,{value:a}),a;b=f.Context.qxa(b)}return f.Context.BW()};o_("Context.getContext",f.Context.getContext,f);f.Context.BW=function(){f.Context.Pqa||(f.Context.Pqa=new f.Context);return f.Context.Pqa};o_("Context.getPageContext",f.Context.BW,f);f.Context.prototype.Dc=
function(){this.cia||(this.cia=new f.lb(this.fVa));return this.cia};f.f.j("Context.prototype.getBusyContext",{Dc:f.Context.prototype.Dc});f.Context.UFa="data-oj-context";f.Context.Lfa="__ojContextInstance";f.Context.Nfa="data-oj-surrogate-id";f.Context.qxa=function(b){if(b&&b.hasAttribute(f.Context.Nfa)){var a=document.getElementById(b.getAttribute(f.Context.Nfa));if(a)return a.parentElement}return b.parentElement};f.aD={};b.prototype.rq=function(){};b.prototype.clear=function(){};f.aD.L$=function(b){return new f.aD.eHa(b)};
o_("TimerUtils.getTimer",f.aD.L$,f);f.aD.eHa=function(b){function a(b){e=null;d(b)}var c,d,e;this.rq=function(){return c};this.clear=function(){window.clearTimeout(e);e=null;a(!1)};c="undefined"===typeof window?Promise.reject():new Promise(function(c){d=c;e=window.setTimeout(a.bind(null,!0),b)})};(function(){"undefined"!==typeof window&&window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(b){b=(this.document||this.ownerDocument).querySelectorAll(b);var a,c=this;do for(a=
b.length;0<=--a&&b.item(a)!==c;);while(0>a&&(c=c.parentElement));return c})})();(function(){f.fc={};f.fc.KB=function(b){var a={};if(b){b=b.trim();var c=e.exec(b),c=c?c[1]:null;c||(a.Z1a=!0,c=(c=h.exec(b))?c[1]:null);a.expr=c}return a};f.fc.AB=function(b){return b.toLowerCase().replace(/-(.)/g,function(b,a){return a.toUpperCase()})};f.fc.mba=function(b){return b.replace(/([A-Z])/g,function(b){return"-"+b.toLowerCase()})};f.fc.mwa=function(b){return"on"+b.substr(0,1).toUpperCase()+b.substr(1)};f.fc.mq=
function(b){return/^on[A-Z]/.test(b)?b.substr(2,1).toLowerCase()+b.substr(3):null};f.fc.jAa=function(b){return b+"Changed"};f.fc.I9a=function(b){return/Changed$/.test(b)?b.substr(0,b.length-7):null};f.fc.lwa=function(b){return"oj"+b.substr(0,1).toUpperCase()+b.substr(1)};f.fc.S9a=function(b){return/^oj[A-Z]/.test(b)?b.substr(2,1).toLowerCase()+b.substr(3):null};f.fc.J9=function(e,f,h,g){if(!g)throw"Unable to parse "+f+"\x3d'"+h+"' for "+e.tagName+" with id "+e.id+" . This attribute only supports data bound values. Check the API doc for supported types";
var t=g.toLowerCase(),s=c.test(h),x=d.test(h);if(b.test(t)&&s||a.test(t)&&x||"any"===t&&(s||x))try{return JSON.parse(h)}catch(y){throw"Unable to parse "+f+"\x3d'"+h+"' for "+e.tagName+" with id "+e.id+" to a JSON Object. Check the value for correct JSON syntax, e.g. double quoted strings. "+y;}else if("boolean"===t){if(null==h||"true"===h||""===h||h.toLowerCase()===f)return!0;if("false"===h)return!1}else if("number"===t){if(!isNaN(h))return Number(h)}else if(-1!==g.split("|").indexOf("string")||"any"===
t)return h;throw"Unable to parse "+f+"\x3d'"+h+"' for "+e.tagName+" with id "+e.id+" to a "+g+".";};var b=/(^array)|(\|array)/,a=/(^object)|(\|object)/,c=/\s*\[[^]*\]\s*/,d=/\s*\{[^]*\}\s*/,e=/^(?:\{\{)([^]+)(?:\}\})$/,h=/^(?:\[\[)([^]+)(?:\]\])$/})();return f});