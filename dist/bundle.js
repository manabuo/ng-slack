/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/home/blackend/WebstormProjects/ng-slack/app";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(191);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(2);

	__webpack_require__(189);

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(36);
	__webpack_require__(42);
	__webpack_require__(44);
	__webpack_require__(46);
	__webpack_require__(48);
	__webpack_require__(50);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(122);
	__webpack_require__(124);
	__webpack_require__(126);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(145);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(164);
	__webpack_require__(165);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(188);
	module.exports = __webpack_require__(7);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(4)
	  , $export           = __webpack_require__(5)
	  , DESCRIPTORS       = __webpack_require__(10)
	  , createDesc        = __webpack_require__(9)
	  , html              = __webpack_require__(16)
	  , cel               = __webpack_require__(17)
	  , has               = __webpack_require__(19)
	  , cof               = __webpack_require__(20)
	  , invoke            = __webpack_require__(21)
	  , fails             = __webpack_require__(11)
	  , anObject          = __webpack_require__(22)
	  , aFunction         = __webpack_require__(15)
	  , isObject          = __webpack_require__(18)
	  , toObject          = __webpack_require__(23)
	  , toIObject         = __webpack_require__(25)
	  , toInteger         = __webpack_require__(27)
	  , toIndex           = __webpack_require__(28)
	  , toLength          = __webpack_require__(29)
	  , IObject           = __webpack_require__(26)
	  , IE_PROTO          = __webpack_require__(13)('__proto__')
	  , createArrayMethod = __webpack_require__(30)
	  , arrayIndexOf      = __webpack_require__(35)(false)
	  , ObjectProto       = Object.prototype
	  , ArrayProto        = Array.prototype
	  , arraySlice        = ArrayProto.slice
	  , arrayJoin         = ArrayProto.join
	  , defineProperty    = $.setDesc
	  , getOwnDescriptor  = $.getDesc
	  , defineProperties  = $.setDescs
	  , factories         = {}
	  , IE8_DOM_DEFINE;

	if(!DESCRIPTORS){
	  IE8_DOM_DEFINE = !fails(function(){
	    return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
	  });
	  $.setDesc = function(O, P, Attributes){
	    if(IE8_DOM_DEFINE)try {
	      return defineProperty(O, P, Attributes);
	    } catch(e){ /* empty */ }
	    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	    if('value' in Attributes)anObject(O)[P] = Attributes.value;
	    return O;
	  };
	  $.getDesc = function(O, P){
	    if(IE8_DOM_DEFINE)try {
	      return getOwnDescriptor(O, P);
	    } catch(e){ /* empty */ }
	    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
	  };
	  $.setDescs = defineProperties = function(O, Properties){
	    anObject(O);
	    var keys   = $.getKeys(Properties)
	      , length = keys.length
	      , i = 0
	      , P;
	    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
	    return O;
	  };
	}
	$export($export.S + $export.F * !DESCRIPTORS, 'Object', {
	  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $.getDesc,
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  defineProperty: $.setDesc,
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties
	});

	  // IE 8- don't enum bug keys
	var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
	            'toLocaleString,toString,valueOf').split(',')
	  // Additional keys for getOwnPropertyNames
	  , keys2 = keys1.concat('length', 'prototype')
	  , keysLen1 = keys1.length;

	// Create object with `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = cel('iframe')
	    , i      = keysLen1
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict.prototype[keys1[i]];
	  return createDict();
	};
	var createGetKeys = function(names, length){
	  return function(object){
	    var O      = toIObject(object)
	      , i      = 0
	      , result = []
	      , key;
	    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	    // Don't enum bug & hidden keys
	    while(length > i)if(has(O, key = names[i++])){
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	    return result;
	  };
	};
	var Empty = function(){};
	$export($export.S, 'Object', {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  getPrototypeOf: $.getProto = $.getProto || function(O){
	    O = toObject(O);
	    if(has(O, IE_PROTO))return O[IE_PROTO];
	    if(typeof O.constructor == 'function' && O instanceof O.constructor){
	      return O.constructor.prototype;
	    } return O instanceof Object ? ObjectProto : null;
	  },
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  create: $.create = $.create || function(O, /*?*/Properties){
	    var result;
	    if(O !== null){
	      Empty.prototype = anObject(O);
	      result = new Empty();
	      Empty.prototype = null;
	      // add "__proto__" for Object.getPrototypeOf shim
	      result[IE_PROTO] = O;
	    } else result = createDict();
	    return Properties === undefined ? result : defineProperties(result, Properties);
	  },
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
	});

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }
	  return factories[len](F, args);
	};

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	$export($export.P, 'Function', {
	  bind: function bind(that /*, args... */){
	    var fn       = aFunction(this)
	      , partArgs = arraySlice.call(arguments, 1);
	    var bound = function(/* args... */){
	      var args = partArgs.concat(arraySlice.call(arguments));
	      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	    };
	    if(isObject(fn.prototype))bound.prototype = fn.prototype;
	    return bound;
	  }
	});

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * fails(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});
	$export($export.P + $export.F * (IObject != Object), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(IObject(this), separator === undefined ? ',' : separator);
	  }
	});

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	$export($export.S, 'Array', {isArray: __webpack_require__(32)});

	var createArrayReduce = function(isRight){
	  return function(callbackfn, memo){
	    aFunction(callbackfn);
	    var O      = IObject(this)
	      , length = toLength(O.length)
	      , index  = isRight ? length - 1 : 0
	      , i      = isRight ? -1 : 1;
	    if(arguments.length < 2)for(;;){
	      if(index in O){
	        memo = O[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if(isRight ? index < 0 : length <= index){
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
	      memo = callbackfn(memo, O[index], index, this);
	    }
	    return memo;
	  };
	};

	var methodize = function($fn){
	  return function(arg1/*, arg2 = undefined */){
	    return $fn(this, arg1, arguments[1]);
	  };
	};

	$export($export.P, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: $.each = $.each || methodize(createArrayMethod(0)),
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: methodize(createArrayMethod(1)),
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: methodize(createArrayMethod(2)),
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: methodize(createArrayMethod(3)),
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: methodize(createArrayMethod(4)),
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: createArrayReduce(false),
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: createArrayReduce(true),
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: methodize(arrayIndexOf),
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
	    if(index < 0)index = toLength(length + index);
	    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
	    return -1;
	  }
	});

	// 20.3.3.1 / 15.9.4.4 Date.now()
	$export($export.S, 'Date', {now: function(){ return +new Date; }});

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(this))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , hide      = __webpack_require__(8)
	  , redefine  = __webpack_require__(12)
	  , ctx       = __webpack_require__(14)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)redefine(target, key, out);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(4)
	  , createDesc = __webpack_require__(9);
	module.exports = __webpack_require__(10) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(11)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// add fake Function#toString
	// for correct work wrapped methods / constructors with methods like LoDash isNative
	var global    = __webpack_require__(6)
	  , hide      = __webpack_require__(8)
	  , SRC       = __webpack_require__(13)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(7).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  if(typeof val == 'function'){
	    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	    val.hasOwnProperty('name') || hide(val, 'name', key);
	  }
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    hide(O, key, val);
	  }
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(24);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(26)
	  , defined = __webpack_require__(24);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(20);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(27)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(14)
	  , IObject  = __webpack_require__(26)
	  , toObject = __webpack_require__(23)
	  , toLength = __webpack_require__(29)
	  , asc      = __webpack_require__(31);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(18)
	  , isArray  = __webpack_require__(32)
	  , SPECIES  = __webpack_require__(33)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(20);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(34)('wks')
	  , uid    = __webpack_require__(13)
	  , Symbol = __webpack_require__(6).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29)
	  , toIndex   = __webpack_require__(28);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(4)
	  , global         = __webpack_require__(6)
	  , has            = __webpack_require__(19)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , $fails         = __webpack_require__(11)
	  , shared         = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(37)
	  , uid            = __webpack_require__(13)
	  , wks            = __webpack_require__(33)
	  , keyOf          = __webpack_require__(38)
	  , $names         = __webpack_require__(39)
	  , enumKeys       = __webpack_require__(40)
	  , isArray        = __webpack_require__(32)
	  , anObject       = __webpack_require__(22)
	  , toIObject      = __webpack_require__(25)
	  , createDesc     = __webpack_require__(9)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(41)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(4).setDesc
	  , has = __webpack_require__(19)
	  , TAG = __webpack_require__(33)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(25)
	  , getNames  = __webpack_require__(4).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(4);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(5);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(43)});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(4)
	  , toObject = __webpack_require__(23)
	  , IObject  = __webpack_require__(26);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(11)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {is: __webpack_require__(45)});

/***/ },
/* 45 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(47).set});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(4).getDesc
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(14)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(49)
	  , test    = {};
	test[__webpack_require__(33)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(12)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(20)
	  , TAG = __webpack_require__(33)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(5)
	  , core    = __webpack_require__(7)
	  , fails   = __webpack_require__(11);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
	  };
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(25);

	__webpack_require__(51)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(23);

	__webpack_require__(51)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(23);

	__webpack_require__(51)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(51)('getOwnPropertyNames', function(){
	  return __webpack_require__(39).get;
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var setDesc    = __webpack_require__(4).setDesc
	  , createDesc = __webpack_require__(9)
	  , has        = __webpack_require__(19)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(10) && setDesc(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = ('' + this).match(nameRE)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
	    return name;
	  }
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $             = __webpack_require__(4)
	  , isObject      = __webpack_require__(18)
	  , HAS_INSTANCE  = __webpack_require__(33)('hasInstance')
	  , FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = $.getProto(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $           = __webpack_require__(4)
	  , global      = __webpack_require__(6)
	  , has         = __webpack_require__(19)
	  , cof         = __webpack_require__(20)
	  , toPrimitive = __webpack_require__(64)
	  , fails       = __webpack_require__(11)
	  , $trim       = __webpack_require__(65).trim
	  , NUMBER      = 'Number'
	  , $Number     = global[NUMBER]
	  , Base        = $Number
	  , proto       = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF  = cof($.create(proto)) == NUMBER
	  , TRIM        = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? new Base(toNumber(it)) : toNumber(it);
	  };
	  $.each.call(__webpack_require__(10) ? $.getNames(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), function(key){
	    if(has(Base, key) && !has($Number, key)){
	      $.setDesc($Number, key, $.getDesc(Base, key));
	    }
	  });
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(12)(global, NUMBER, $Number);
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(18);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , defined = __webpack_require__(24)
	  , fails   = __webpack_require__(11)
	  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec){
	  var exp  = {};
	  exp[KEY] = exec(trim);
	  $export($export.P + $export.F * fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  }), 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(5)
	  , _isFinite = __webpack_require__(6).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {isInteger: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(18)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(5)
	  , isInteger = __webpack_require__(69)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.12 Number.parseFloat(string)
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.13 Number.parseInt(string, radix)
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {parseInt: parseInt});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(5)
	  , log1p   = __webpack_require__(77)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	// V8 bug https://code.google.com/p/v8/issues/detail?id=3509
	$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 77 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(5);

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(5)
	  , sign    = __webpack_require__(81);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 81 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(5)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {expm1: __webpack_require__(85)});

/***/ },
/* 85 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(5)
	  , sign      = __webpack_require__(81)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(5)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum   = 0
	      , i     = 0
	      , $$    = arguments
	      , $$len = $$.length
	      , larg  = 0
	      , arg, div;
	    while(i < $$len){
	      arg = abs($$[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(5)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {log1p: __webpack_require__(77)});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {sign: __webpack_require__(81)});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(5)
	  , toIndex        = __webpack_require__(28)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res   = []
	      , $$    = arguments
	      , $$len = $$.length
	      , i     = 0
	      , code;
	    while($$len > i){
	      code = +$$[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(5)
	  , toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl   = toIObject(callSite.raw)
	      , len   = toLength(tpl.length)
	      , $$    = arguments
	      , $$len = $$.length
	      , res   = []
	      , i     = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < $$len)res.push(String($$[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(65)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(100)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(101)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(41)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , hide           = __webpack_require__(8)
	  , has            = __webpack_require__(19)
	  , Iterators      = __webpack_require__(102)
	  , $iterCreate    = __webpack_require__(103)
	  , setToStringTag = __webpack_require__(37)
	  , getProto       = __webpack_require__(4).getProto
	  , ITERATOR       = __webpack_require__(33)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(4)
	  , descriptor     = __webpack_require__(9)
	  , setToStringTag = __webpack_require__(37)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(8)(IteratorPrototype, __webpack_require__(33)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(5)
	  , toLength  = __webpack_require__(29)
	  , context   = __webpack_require__(106)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(108)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , $$   = arguments
	      , endPosition = $$.length > 1 ? $$[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(107)
	  , defined  = __webpack_require__(24);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(18)
	  , cof      = __webpack_require__(20)
	  , MATCH    = __webpack_require__(33)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(33)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(5)
	  , context  = __webpack_require__(106)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(108)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(111)
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(5)
	  , toLength    = __webpack_require__(29)
	  , context     = __webpack_require__(106)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(108)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , $$     = arguments
	      , index  = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(14)
	  , $export     = __webpack_require__(5)
	  , toObject    = __webpack_require__(23)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
	$export($export.S + $export.F * !__webpack_require__(117)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(22);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(102)
	  , ITERATOR   = __webpack_require__(33)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(49)
	  , ITERATOR  = __webpack_require__(33)('iterator')
	  , Iterators = __webpack_require__(102);
	module.exports = __webpack_require__(7).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(33)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , $$     = arguments
	      , $$len  = $$.length
	      , result = new (typeof this == 'function' ? this : Array)($$len);
	    while($$len > index)result[index] = $$[index++];
	    result.length = $$len;
	    return result;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(120)
	  , step             = __webpack_require__(121)
	  , Iterators        = __webpack_require__(102)
	  , toIObject        = __webpack_require__(25);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(101)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(33)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(123)('Array');

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(6)
	  , $           = __webpack_require__(4)
	  , DESCRIPTORS = __webpack_require__(10)
	  , SPECIES     = __webpack_require__(33)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(5);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(125)});

	__webpack_require__(120)('copyWithin');

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , $$    = arguments
	    , end   = $$.length > 2 ? $$[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(5);

	$export($export.P, 'Array', {fill: __webpack_require__(127)});

	__webpack_require__(120)('fill');

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);
	module.exports = [].fill || function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , $$     = arguments
	    , $$len  = $$.length
	    , index  = toIndex($$len > 1 ? $$[1] : undefined, length)
	    , end    = $$len > 2 ? $$[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(4)
	  , global   = __webpack_require__(6)
	  , isRegExp = __webpack_require__(107)
	  , $flags   = __webpack_require__(131)
	  , $RegExp  = global.RegExp
	  , Base     = $RegExp
	  , proto    = $RegExp.prototype
	  , re1      = /a/g
	  , re2      = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW = new $RegExp(re1) !== re1;

	if(__webpack_require__(10) && (!CORRECT_NEW || __webpack_require__(11)(function(){
	  re2[__webpack_require__(33)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !(this instanceof $RegExp) && piRE && p.constructor === $RegExp && fiU ? p
	      : CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f);
	  };
	  $.each.call($.getNames(Base), function(key){
	    key in $RegExp || $.setDesc($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  });
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(12)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(123)('RegExp');

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(22);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	var $ = __webpack_require__(4);
	if(__webpack_require__(10) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(131)
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(134)('match', 1, function(defined, MATCH){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  };
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(8)
	  , redefine = __webpack_require__(12)
	  , fails    = __webpack_require__(11)
	  , defined  = __webpack_require__(24)
	  , wks      = __webpack_require__(33);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , original = ''[KEY];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, exec(defined, SYMBOL, original));
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return original.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return original.call(string, this); }
	    );
	  }
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(134)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  };
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(134)('search', 1, function(defined, SEARCH){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  };
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(134)('split', 2, function(defined, SPLIT, $split){
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return function split(separator, limit){
	    'use strict';
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined
	      ? fn.call(separator, O, limit)
	      : $split.call(String(O), separator, limit);
	  };
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(4)
	  , LIBRARY    = __webpack_require__(41)
	  , global     = __webpack_require__(6)
	  , ctx        = __webpack_require__(14)
	  , classof    = __webpack_require__(49)
	  , $export    = __webpack_require__(5)
	  , isObject   = __webpack_require__(18)
	  , anObject   = __webpack_require__(22)
	  , aFunction  = __webpack_require__(15)
	  , strictNew  = __webpack_require__(139)
	  , forOf      = __webpack_require__(140)
	  , setProto   = __webpack_require__(47).set
	  , same       = __webpack_require__(45)
	  , SPECIES    = __webpack_require__(33)('species')
	  , speciesConstructor = __webpack_require__(141)
	  , asap       = __webpack_require__(142)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;

	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};

	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(10)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(144)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(37)(P, PROMISE);
	__webpack_require__(123)(PROMISE);
	Wrapper = __webpack_require__(7)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(117)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(14)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , anObject    = __webpack_require__(22)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(22)
	  , aFunction = __webpack_require__(15)
	  , SPECIES   = __webpack_require__(33)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , macrotask = __webpack_require__(143).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(20)(process) == 'process'
	  , head, last, notify;

	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};

	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}

	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(14)
	  , invoke             = __webpack_require__(21)
	  , html               = __webpack_require__(16)
	  , cel                = __webpack_require__(17)
	  , global             = __webpack_require__(6)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(20)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(12);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);

	// 23.1 Map Objects
	__webpack_require__(147)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , hide         = __webpack_require__(8)
	  , redefineAll  = __webpack_require__(144)
	  , ctx          = __webpack_require__(14)
	  , strictNew    = __webpack_require__(139)
	  , defined      = __webpack_require__(24)
	  , forOf        = __webpack_require__(140)
	  , $iterDefine  = __webpack_require__(101)
	  , step         = __webpack_require__(121)
	  , ID           = __webpack_require__(13)('id')
	  , $has         = __webpack_require__(19)
	  , isObject     = __webpack_require__(18)
	  , setSpecies   = __webpack_require__(123)
	  , DESCRIPTORS  = __webpack_require__(10)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;

	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(6)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , redefineAll    = __webpack_require__(144)
	  , forOf          = __webpack_require__(140)
	  , strictNew      = __webpack_require__(139)
	  , isObject       = __webpack_require__(18)
	  , fails          = __webpack_require__(11)
	  , $iterDetect    = __webpack_require__(117)
	  , setToStringTag = __webpack_require__(37);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO;
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        strictNew(target, C, NAME);
	        var that = new Base;
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    IS_WEAK || instance.forEach(function(val, key){
	      BUGGY_ZERO = 1 / key === -Infinity;
	    });
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);

	// 23.2 Set Objects
	__webpack_require__(147)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , redefine     = __webpack_require__(12)
	  , weak         = __webpack_require__(150)
	  , isObject     = __webpack_require__(18)
	  , has          = __webpack_require__(19)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};

	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(147)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return frozenStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide              = __webpack_require__(8)
	  , redefineAll       = __webpack_require__(144)
	  , anObject          = __webpack_require__(22)
	  , isObject          = __webpack_require__(18)
	  , strictNew         = __webpack_require__(139)
	  , forOf             = __webpack_require__(140)
	  , createArrayMethod = __webpack_require__(30)
	  , $has              = __webpack_require__(19)
	  , WEAK              = __webpack_require__(13)('weak')
	  , isExtensible      = Object.isExtensible || isObject
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for frozen keys
	var frozenStore = function(that){
	  return that._l || (that._l = new FrozenStore);
	};
	var FrozenStore = function(){
	  this.a = [];
	};
	var findFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	FrozenStore.prototype = {
	  get: function(key){
	    var entry = findFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(anObject(key))){
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    } return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(150);

	// 23.4 WeakSet Objects
	__webpack_require__(147)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(5)
	  , _apply  = Function.apply;

	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $         = __webpack_require__(4)
	  , $export   = __webpack_require__(5)
	  , aFunction = __webpack_require__(15)
	  , anObject  = __webpack_require__(22)
	  , isObject  = __webpack_require__(18)
	  , bind      = Function.bind || __webpack_require__(7).Function.prototype.bind;

	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      if(args != undefined)switch(anObject(args).length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = $.create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    try {
	      $.setDesc(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(5)
	  , getDesc  = __webpack_require__(4).getDesc
	  , anObject = __webpack_require__(22);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = getDesc(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(103)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var $        = __webpack_require__(4)
	  , has      = __webpack_require__(19)
	  , $export  = __webpack_require__(5)
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return $.getDesc(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(5)
	  , getProto = __webpack_require__(4).getProto
	  , anObject = __webpack_require__(22);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(5);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(5)
	  , anObject      = __webpack_require__(22)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(5);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(163)});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var $        = __webpack_require__(4)
	  , anObject = __webpack_require__(22)
	  , Reflect  = __webpack_require__(6).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = $.getNames(anObject(it))
	    , getSymbols = $.getSymbols;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(5)
	  , anObject           = __webpack_require__(22)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var $          = __webpack_require__(4)
	  , has        = __webpack_require__(19)
	  , $export    = __webpack_require__(5)
	  , createDesc = __webpack_require__(9)
	  , anObject   = __webpack_require__(22)
	  , isObject   = __webpack_require__(18);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = $.getDesc(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = $.getProto(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    $.setDesc(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(5)
	  , setProto = __webpack_require__(47);

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(5)
	  , $includes = __webpack_require__(35)(true);

	$export($export.P, 'Array', {
	  // https://github.com/domenic/Array.prototype.includes
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(120)('includes');

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);

	$export($export.P, 'String', {
	  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-string-pad-left-right
	var toLength = __webpack_require__(29)
	  , repeat   = __webpack_require__(111)
	  , defined  = __webpack_require__(24);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength)return S;
	  if(fillStr == '')fillStr = ' ';
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);

	$export($export.P, 'String', {
	  padRight: function padRight(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(5)
	  , $re     = __webpack_require__(175)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/WebReflection/9353781
	var $          = __webpack_require__(4)
	  , $export    = __webpack_require__(5)
	  , ownKeys    = __webpack_require__(163)
	  , toIObject  = __webpack_require__(25)
	  , createDesc = __webpack_require__(9);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , setDesc = $.setDesc
	      , getDesc = $.getDesc
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i){
	      D = getDesc(O, key = keys[i++]);
	      if(key in result)setDesc(result, key, createDesc(0, D));
	      else result[key] = D;
	    } return result;
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export = __webpack_require__(5)
	  , $values = __webpack_require__(178)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25)
	  , isEnum    = $.isEnum;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = $.getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export  = __webpack_require__(5)
	  , $entries = __webpack_require__(178)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);

	$export($export.P, 'Map', {toJSON: __webpack_require__(181)('Map')});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(140)
	  , classof = __webpack_require__(49);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);

	$export($export.P, 'Set', {toJSON: __webpack_require__(181)('Set')});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// JavaScript 1.6 / Strawman array statics shim
	var $       = __webpack_require__(4)
	  , $export = __webpack_require__(5)
	  , $ctx    = __webpack_require__(14)
	  , $Array  = __webpack_require__(7).Array || Array
	  , statics = {};
	var setStatics = function(keys, length){
	  $.each.call(keys.split(','), function(key){
	    if(length == undefined && key in $Array)statics[key] = $Array[key];
	    else if(key in [])statics[key] = $ctx(Function.call, [][key], length);
	  });
	};
	setStatics('pop,reverse,shift,keys,values,entries', 1);
	setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	           'reduce,reduceRight,copyWithin,fill');
	$export($export.S, 'Array', statics);

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(6)
	  , $export    = __webpack_require__(5)
	  , invoke     = __webpack_require__(21)
	  , partial    = __webpack_require__(185)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(186)
	  , invoke    = __webpack_require__(21)
	  , aFunction = __webpack_require__(15);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that  = this
	      , $$    = arguments
	      , $$len = $$.length
	      , j = 0, k = 0, args;
	    if(!holder && !$$len)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = $$[k++];
	    while($$len > k)args.push($$[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , $task   = __webpack_require__(143);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(119);
	var global      = __webpack_require__(6)
	  , hide        = __webpack_require__(8)
	  , Iterators   = __webpack_require__(102)
	  , ITERATOR    = __webpack_require__(33)('iterator')
	  , NL          = global.NodeList
	  , HTC         = global.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
	if(NLProto && !NLProto[ITERATOR])hide(NLProto, ITERATOR, ArrayValues);
	if(HTCProto && !HTCProto[ITERATOR])hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol =
	    typeof Symbol === "function" && Symbol.iterator || "@@iterator";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument
	        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
	        : Promise.resolve(value).then(function(unwrapped) {
	            // When a yielded Promise is resolved, its final value becomes
	            // the .value of the Promise<{value,done}> result for the
	            // current iteration. If the Promise is rejected, however, the
	            // result for this iteration will be rejected with the same
	            // reason. Note that rejections of yielded Promises are not
	            // thrown back into the generator function, as is the case
	            // when an awaited Promise is rejected. This difference in
	            // behavior between yield and await is important, because it
	            // allows the consumer to decide what to do with the yielded
	            // rejection (swallow it and continue, manually .throw it back
	            // into the generator, abandon iteration, whatever). With
	            // await, by contrast, there is no opportunity to examine the
	            // rejection reason outside the generator function, so the
	            // only option is to throw it from the await expression, and
	            // let the generator function handle the exception.
	            result.value = unwrapped;
	            return result;
	          });
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return invoke(method, arg);
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : new Promise(function (resolve) {
	          resolve(callInvokeWithMethodAndArg());
	        });
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          context._sent = arg;

	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }

	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(190)))

/***/ },
/* 190 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _angular = __webpack_require__(192);

	var _angular2 = _interopRequireDefault(_angular);

	var _app = __webpack_require__(193);

	var _app2 = _interopRequireDefault(_app);

	var _app3 = __webpack_require__(194);

	var _app4 = _interopRequireDefault(_app3);

	var _components = __webpack_require__(203);

	var _components2 = _interopRequireDefault(_components);

	var _shared = __webpack_require__(209);

	var _shared2 = _interopRequireDefault(_shared);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_angular2.default.module('app', [_app4.default.name, _components2.default.name, _shared2.default.name]).config(_app2.default).constant('FIREBASE_URL', 'https://ng-slack.firebaseio.com/');

	_angular2.default.bootstrap(document, ['app'], {
	   strictDi: true
	});

/***/ },
/* 192 */
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 193 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider) {
	   $stateProvider.state('home', {
	      url: '/',
	      template: '<home></home>'
	   }).state('login', {
	      url: '/login',
	      templateUrl: 'components/auth/login.html'
	   }).state('register', {
	      url: '/register',
	      templateUrl: 'components/auth/register.html'
	   });

	   $urlRouterProvider.otherwise('/');
	}

	exports.default = config;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _angular = __webpack_require__(192);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularAnimate = __webpack_require__(195);

	var _angularAnimate2 = _interopRequireDefault(_angularAnimate);

	var _angularUiRouter = __webpack_require__(197);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _angularUiBootstrap = __webpack_require__(198);

	var _angularUiBootstrap2 = _interopRequireDefault(_angularUiBootstrap);

	var _angularfire = __webpack_require__(200);

	var _angularfire2 = _interopRequireDefault(_angularfire);

	var _angularMd = __webpack_require__(202);

	var _angularMd2 = _interopRequireDefault(_angularMd);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var appLibraries = _angular2.default.module('app.libraries', [_angularAnimate2.default, _angularUiRouter2.default, _angularUiBootstrap2.default, _angularfire2.default, _angularMd2.default]);

	exports.default = appLibraries;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(196);
	module.exports = 'ngAnimate';


/***/ },
/* 196 */
/***/ function(module, exports) {

	/**
	 * @license AngularJS v1.5.5
	 * (c) 2010-2016 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular) {'use strict';

	/* jshint ignore:start */
	var noop        = angular.noop;
	var copy        = angular.copy;
	var extend      = angular.extend;
	var jqLite      = angular.element;
	var forEach     = angular.forEach;
	var isArray     = angular.isArray;
	var isString    = angular.isString;
	var isObject    = angular.isObject;
	var isUndefined = angular.isUndefined;
	var isDefined   = angular.isDefined;
	var isFunction  = angular.isFunction;
	var isElement   = angular.isElement;

	var ELEMENT_NODE = 1;
	var COMMENT_NODE = 8;

	var ADD_CLASS_SUFFIX = '-add';
	var REMOVE_CLASS_SUFFIX = '-remove';
	var EVENT_CLASS_PREFIX = 'ng-';
	var ACTIVE_CLASS_SUFFIX = '-active';
	var PREPARE_CLASS_SUFFIX = '-prepare';

	var NG_ANIMATE_CLASSNAME = 'ng-animate';
	var NG_ANIMATE_CHILDREN_DATA = '$$ngAnimateChildren';

	// Detect proper transitionend/animationend event names.
	var CSS_PREFIX = '', TRANSITION_PROP, TRANSITIONEND_EVENT, ANIMATION_PROP, ANIMATIONEND_EVENT;

	// If unprefixed events are not supported but webkit-prefixed are, use the latter.
	// Otherwise, just use W3C names, browsers not supporting them at all will just ignore them.
	// Note: Chrome implements `window.onwebkitanimationend` and doesn't implement `window.onanimationend`
	// but at the same time dispatches the `animationend` event and not `webkitAnimationEnd`.
	// Register both events in case `window.onanimationend` is not supported because of that,
	// do the same for `transitionend` as Safari is likely to exhibit similar behavior.
	// Also, the only modern browser that uses vendor prefixes for transitions/keyframes is webkit
	// therefore there is no reason to test anymore for other vendor prefixes:
	// http://caniuse.com/#search=transition
	if (isUndefined(window.ontransitionend) && isDefined(window.onwebkittransitionend)) {
	  CSS_PREFIX = '-webkit-';
	  TRANSITION_PROP = 'WebkitTransition';
	  TRANSITIONEND_EVENT = 'webkitTransitionEnd transitionend';
	} else {
	  TRANSITION_PROP = 'transition';
	  TRANSITIONEND_EVENT = 'transitionend';
	}

	if (isUndefined(window.onanimationend) && isDefined(window.onwebkitanimationend)) {
	  CSS_PREFIX = '-webkit-';
	  ANIMATION_PROP = 'WebkitAnimation';
	  ANIMATIONEND_EVENT = 'webkitAnimationEnd animationend';
	} else {
	  ANIMATION_PROP = 'animation';
	  ANIMATIONEND_EVENT = 'animationend';
	}

	var DURATION_KEY = 'Duration';
	var PROPERTY_KEY = 'Property';
	var DELAY_KEY = 'Delay';
	var TIMING_KEY = 'TimingFunction';
	var ANIMATION_ITERATION_COUNT_KEY = 'IterationCount';
	var ANIMATION_PLAYSTATE_KEY = 'PlayState';
	var SAFE_FAST_FORWARD_DURATION_VALUE = 9999;

	var ANIMATION_DELAY_PROP = ANIMATION_PROP + DELAY_KEY;
	var ANIMATION_DURATION_PROP = ANIMATION_PROP + DURATION_KEY;
	var TRANSITION_DELAY_PROP = TRANSITION_PROP + DELAY_KEY;
	var TRANSITION_DURATION_PROP = TRANSITION_PROP + DURATION_KEY;

	var isPromiseLike = function(p) {
	  return p && p.then ? true : false;
	};

	var ngMinErr = angular.$$minErr('ng');
	function assertArg(arg, name, reason) {
	  if (!arg) {
	    throw ngMinErr('areq', "Argument '{0}' is {1}", (name || '?'), (reason || "required"));
	  }
	  return arg;
	}

	function mergeClasses(a,b) {
	  if (!a && !b) return '';
	  if (!a) return b;
	  if (!b) return a;
	  if (isArray(a)) a = a.join(' ');
	  if (isArray(b)) b = b.join(' ');
	  return a + ' ' + b;
	}

	function packageStyles(options) {
	  var styles = {};
	  if (options && (options.to || options.from)) {
	    styles.to = options.to;
	    styles.from = options.from;
	  }
	  return styles;
	}

	function pendClasses(classes, fix, isPrefix) {
	  var className = '';
	  classes = isArray(classes)
	      ? classes
	      : classes && isString(classes) && classes.length
	          ? classes.split(/\s+/)
	          : [];
	  forEach(classes, function(klass, i) {
	    if (klass && klass.length > 0) {
	      className += (i > 0) ? ' ' : '';
	      className += isPrefix ? fix + klass
	                            : klass + fix;
	    }
	  });
	  return className;
	}

	function removeFromArray(arr, val) {
	  var index = arr.indexOf(val);
	  if (val >= 0) {
	    arr.splice(index, 1);
	  }
	}

	function stripCommentsFromElement(element) {
	  if (element instanceof jqLite) {
	    switch (element.length) {
	      case 0:
	        return [];
	        break;

	      case 1:
	        // there is no point of stripping anything if the element
	        // is the only element within the jqLite wrapper.
	        // (it's important that we retain the element instance.)
	        if (element[0].nodeType === ELEMENT_NODE) {
	          return element;
	        }
	        break;

	      default:
	        return jqLite(extractElementNode(element));
	        break;
	    }
	  }

	  if (element.nodeType === ELEMENT_NODE) {
	    return jqLite(element);
	  }
	}

	function extractElementNode(element) {
	  if (!element[0]) return element;
	  for (var i = 0; i < element.length; i++) {
	    var elm = element[i];
	    if (elm.nodeType == ELEMENT_NODE) {
	      return elm;
	    }
	  }
	}

	function $$addClass($$jqLite, element, className) {
	  forEach(element, function(elm) {
	    $$jqLite.addClass(elm, className);
	  });
	}

	function $$removeClass($$jqLite, element, className) {
	  forEach(element, function(elm) {
	    $$jqLite.removeClass(elm, className);
	  });
	}

	function applyAnimationClassesFactory($$jqLite) {
	  return function(element, options) {
	    if (options.addClass) {
	      $$addClass($$jqLite, element, options.addClass);
	      options.addClass = null;
	    }
	    if (options.removeClass) {
	      $$removeClass($$jqLite, element, options.removeClass);
	      options.removeClass = null;
	    }
	  }
	}

	function prepareAnimationOptions(options) {
	  options = options || {};
	  if (!options.$$prepared) {
	    var domOperation = options.domOperation || noop;
	    options.domOperation = function() {
	      options.$$domOperationFired = true;
	      domOperation();
	      domOperation = noop;
	    };
	    options.$$prepared = true;
	  }
	  return options;
	}

	function applyAnimationStyles(element, options) {
	  applyAnimationFromStyles(element, options);
	  applyAnimationToStyles(element, options);
	}

	function applyAnimationFromStyles(element, options) {
	  if (options.from) {
	    element.css(options.from);
	    options.from = null;
	  }
	}

	function applyAnimationToStyles(element, options) {
	  if (options.to) {
	    element.css(options.to);
	    options.to = null;
	  }
	}

	function mergeAnimationDetails(element, oldAnimation, newAnimation) {
	  var target = oldAnimation.options || {};
	  var newOptions = newAnimation.options || {};

	  var toAdd = (target.addClass || '') + ' ' + (newOptions.addClass || '');
	  var toRemove = (target.removeClass || '') + ' ' + (newOptions.removeClass || '');
	  var classes = resolveElementClasses(element.attr('class'), toAdd, toRemove);

	  if (newOptions.preparationClasses) {
	    target.preparationClasses = concatWithSpace(newOptions.preparationClasses, target.preparationClasses);
	    delete newOptions.preparationClasses;
	  }

	  // noop is basically when there is no callback; otherwise something has been set
	  var realDomOperation = target.domOperation !== noop ? target.domOperation : null;

	  extend(target, newOptions);

	  // TODO(matsko or sreeramu): proper fix is to maintain all animation callback in array and call at last,but now only leave has the callback so no issue with this.
	  if (realDomOperation) {
	    target.domOperation = realDomOperation;
	  }

	  if (classes.addClass) {
	    target.addClass = classes.addClass;
	  } else {
	    target.addClass = null;
	  }

	  if (classes.removeClass) {
	    target.removeClass = classes.removeClass;
	  } else {
	    target.removeClass = null;
	  }

	  oldAnimation.addClass = target.addClass;
	  oldAnimation.removeClass = target.removeClass;

	  return target;
	}

	function resolveElementClasses(existing, toAdd, toRemove) {
	  var ADD_CLASS = 1;
	  var REMOVE_CLASS = -1;

	  var flags = {};
	  existing = splitClassesToLookup(existing);

	  toAdd = splitClassesToLookup(toAdd);
	  forEach(toAdd, function(value, key) {
	    flags[key] = ADD_CLASS;
	  });

	  toRemove = splitClassesToLookup(toRemove);
	  forEach(toRemove, function(value, key) {
	    flags[key] = flags[key] === ADD_CLASS ? null : REMOVE_CLASS;
	  });

	  var classes = {
	    addClass: '',
	    removeClass: ''
	  };

	  forEach(flags, function(val, klass) {
	    var prop, allow;
	    if (val === ADD_CLASS) {
	      prop = 'addClass';
	      allow = !existing[klass];
	    } else if (val === REMOVE_CLASS) {
	      prop = 'removeClass';
	      allow = existing[klass];
	    }
	    if (allow) {
	      if (classes[prop].length) {
	        classes[prop] += ' ';
	      }
	      classes[prop] += klass;
	    }
	  });

	  function splitClassesToLookup(classes) {
	    if (isString(classes)) {
	      classes = classes.split(' ');
	    }

	    var obj = {};
	    forEach(classes, function(klass) {
	      // sometimes the split leaves empty string values
	      // incase extra spaces were applied to the options
	      if (klass.length) {
	        obj[klass] = true;
	      }
	    });
	    return obj;
	  }

	  return classes;
	}

	function getDomNode(element) {
	  return (element instanceof angular.element) ? element[0] : element;
	}

	function applyGeneratedPreparationClasses(element, event, options) {
	  var classes = '';
	  if (event) {
	    classes = pendClasses(event, EVENT_CLASS_PREFIX, true);
	  }
	  if (options.addClass) {
	    classes = concatWithSpace(classes, pendClasses(options.addClass, ADD_CLASS_SUFFIX));
	  }
	  if (options.removeClass) {
	    classes = concatWithSpace(classes, pendClasses(options.removeClass, REMOVE_CLASS_SUFFIX));
	  }
	  if (classes.length) {
	    options.preparationClasses = classes;
	    element.addClass(classes);
	  }
	}

	function clearGeneratedClasses(element, options) {
	  if (options.preparationClasses) {
	    element.removeClass(options.preparationClasses);
	    options.preparationClasses = null;
	  }
	  if (options.activeClasses) {
	    element.removeClass(options.activeClasses);
	    options.activeClasses = null;
	  }
	}

	function blockTransitions(node, duration) {
	  // we use a negative delay value since it performs blocking
	  // yet it doesn't kill any existing transitions running on the
	  // same element which makes this safe for class-based animations
	  var value = duration ? '-' + duration + 's' : '';
	  applyInlineStyle(node, [TRANSITION_DELAY_PROP, value]);
	  return [TRANSITION_DELAY_PROP, value];
	}

	function blockKeyframeAnimations(node, applyBlock) {
	  var value = applyBlock ? 'paused' : '';
	  var key = ANIMATION_PROP + ANIMATION_PLAYSTATE_KEY;
	  applyInlineStyle(node, [key, value]);
	  return [key, value];
	}

	function applyInlineStyle(node, styleTuple) {
	  var prop = styleTuple[0];
	  var value = styleTuple[1];
	  node.style[prop] = value;
	}

	function concatWithSpace(a,b) {
	  if (!a) return b;
	  if (!b) return a;
	  return a + ' ' + b;
	}

	var $$rAFSchedulerFactory = ['$$rAF', function($$rAF) {
	  var queue, cancelFn;

	  function scheduler(tasks) {
	    // we make a copy since RAFScheduler mutates the state
	    // of the passed in array variable and this would be difficult
	    // to track down on the outside code
	    queue = queue.concat(tasks);
	    nextTick();
	  }

	  queue = scheduler.queue = [];

	  /* waitUntilQuiet does two things:
	   * 1. It will run the FINAL `fn` value only when an uncanceled RAF has passed through
	   * 2. It will delay the next wave of tasks from running until the quiet `fn` has run.
	   *
	   * The motivation here is that animation code can request more time from the scheduler
	   * before the next wave runs. This allows for certain DOM properties such as classes to
	   * be resolved in time for the next animation to run.
	   */
	  scheduler.waitUntilQuiet = function(fn) {
	    if (cancelFn) cancelFn();

	    cancelFn = $$rAF(function() {
	      cancelFn = null;
	      fn();
	      nextTick();
	    });
	  };

	  return scheduler;

	  function nextTick() {
	    if (!queue.length) return;

	    var items = queue.shift();
	    for (var i = 0; i < items.length; i++) {
	      items[i]();
	    }

	    if (!cancelFn) {
	      $$rAF(function() {
	        if (!cancelFn) nextTick();
	      });
	    }
	  }
	}];

	/**
	 * @ngdoc directive
	 * @name ngAnimateChildren
	 * @restrict AE
	 * @element ANY
	 *
	 * @description
	 *
	 * ngAnimateChildren allows you to specify that children of this element should animate even if any
	 * of the children's parents are currently animating. By default, when an element has an active `enter`, `leave`, or `move`
	 * (structural) animation, child elements that also have an active structural animation are not animated.
	 *
	 * Note that even if `ngAnimteChildren` is set, no child animations will run when the parent element is removed from the DOM (`leave` animation).
	 *
	 *
	 * @param {string} ngAnimateChildren If the value is empty, `true` or `on`,
	 *     then child animations are allowed. If the value is `false`, child animations are not allowed.
	 *
	 * @example
	 * <example module="ngAnimateChildren" name="ngAnimateChildren" deps="angular-animate.js" animations="true">
	     <file name="index.html">
	       <div ng-controller="mainController as main">
	         <label>Show container? <input type="checkbox" ng-model="main.enterElement" /></label>
	         <label>Animate children? <input type="checkbox" ng-model="main.animateChildren" /></label>
	         <hr>
	         <div ng-animate-children="{{main.animateChildren}}">
	           <div ng-if="main.enterElement" class="container">
	             List of items:
	             <div ng-repeat="item in [0, 1, 2, 3]" class="item">Item {{item}}</div>
	           </div>
	         </div>
	       </div>
	     </file>
	     <file name="animations.css">

	      .container.ng-enter,
	      .container.ng-leave {
	        transition: all ease 1.5s;
	      }

	      .container.ng-enter,
	      .container.ng-leave-active {
	        opacity: 0;
	      }

	      .container.ng-leave,
	      .container.ng-enter-active {
	        opacity: 1;
	      }

	      .item {
	        background: firebrick;
	        color: #FFF;
	        margin-bottom: 10px;
	      }

	      .item.ng-enter,
	      .item.ng-leave {
	        transition: transform 1.5s ease;
	      }

	      .item.ng-enter {
	        transform: translateX(50px);
	      }

	      .item.ng-enter-active {
	        transform: translateX(0);
	      }
	    </file>
	    <file name="script.js">
	      angular.module('ngAnimateChildren', ['ngAnimate'])
	        .controller('mainController', function() {
	          this.animateChildren = false;
	          this.enterElement = false;
	        });
	    </file>
	  </example>
	 */
	var $$AnimateChildrenDirective = ['$interpolate', function($interpolate) {
	  return {
	    link: function(scope, element, attrs) {
	      var val = attrs.ngAnimateChildren;
	      if (angular.isString(val) && val.length === 0) { //empty attribute
	        element.data(NG_ANIMATE_CHILDREN_DATA, true);
	      } else {
	        // Interpolate and set the value, so that it is available to
	        // animations that run right after compilation
	        setData($interpolate(val)(scope));
	        attrs.$observe('ngAnimateChildren', setData);
	      }

	      function setData(value) {
	        value = value === 'on' || value === 'true';
	        element.data(NG_ANIMATE_CHILDREN_DATA, value);
	      }
	    }
	  };
	}];

	var ANIMATE_TIMER_KEY = '$$animateCss';

	/**
	 * @ngdoc service
	 * @name $animateCss
	 * @kind object
	 *
	 * @description
	 * The `$animateCss` service is a useful utility to trigger customized CSS-based transitions/keyframes
	 * from a JavaScript-based animation or directly from a directive. The purpose of `$animateCss` is NOT
	 * to side-step how `$animate` and ngAnimate work, but the goal is to allow pre-existing animations or
	 * directives to create more complex animations that can be purely driven using CSS code.
	 *
	 * Note that only browsers that support CSS transitions and/or keyframe animations are capable of
	 * rendering animations triggered via `$animateCss` (bad news for IE9 and lower).
	 *
	 * ## Usage
	 * Once again, `$animateCss` is designed to be used inside of a registered JavaScript animation that
	 * is powered by ngAnimate. It is possible to use `$animateCss` directly inside of a directive, however,
	 * any automatic control over cancelling animations and/or preventing animations from being run on
	 * child elements will not be handled by Angular. For this to work as expected, please use `$animate` to
	 * trigger the animation and then setup a JavaScript animation that injects `$animateCss` to trigger
	 * the CSS animation.
	 *
	 * The example below shows how we can create a folding animation on an element using `ng-if`:
	 *
	 * ```html
	 * <!-- notice the `fold-animation` CSS class -->
	 * <div ng-if="onOff" class="fold-animation">
	 *   This element will go BOOM
	 * </div>
	 * <button ng-click="onOff=true">Fold In</button>
	 * ```
	 *
	 * Now we create the **JavaScript animation** that will trigger the CSS transition:
	 *
	 * ```js
	 * ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element, doneFn) {
	 *       var height = element[0].offsetHeight;
	 *       return $animateCss(element, {
	 *         from: { height:'0px' },
	 *         to: { height:height + 'px' },
	 *         duration: 1 // one second
	 *       });
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * ## More Advanced Uses
	 *
	 * `$animateCss` is the underlying code that ngAnimate uses to power **CSS-based animations** behind the scenes. Therefore CSS hooks
	 * like `.ng-EVENT`, `.ng-EVENT-active`, `.ng-EVENT-stagger` are all features that can be triggered using `$animateCss` via JavaScript code.
	 *
	 * This also means that just about any combination of adding classes, removing classes, setting styles, dynamically setting a keyframe animation,
	 * applying a hardcoded duration or delay value, changing the animation easing or applying a stagger animation are all options that work with
	 * `$animateCss`. The service itself is smart enough to figure out the combination of options and examine the element styling properties in order
	 * to provide a working animation that will run in CSS.
	 *
	 * The example below showcases a more advanced version of the `.fold-animation` from the example above:
	 *
	 * ```js
	 * ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element, doneFn) {
	 *       var height = element[0].offsetHeight;
	 *       return $animateCss(element, {
	 *         addClass: 'red large-text pulse-twice',
	 *         easing: 'ease-out',
	 *         from: { height:'0px' },
	 *         to: { height:height + 'px' },
	 *         duration: 1 // one second
	 *       });
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * Since we're adding/removing CSS classes then the CSS transition will also pick those up:
	 *
	 * ```css
	 * /&#42; since a hardcoded duration value of 1 was provided in the JavaScript animation code,
	 * the CSS classes below will be transitioned despite them being defined as regular CSS classes &#42;/
	 * .red { background:red; }
	 * .large-text { font-size:20px; }
	 *
	 * /&#42; we can also use a keyframe animation and $animateCss will make it work alongside the transition &#42;/
	 * .pulse-twice {
	 *   animation: 0.5s pulse linear 2;
	 *   -webkit-animation: 0.5s pulse linear 2;
	 * }
	 *
	 * @keyframes pulse {
	 *   from { transform: scale(0.5); }
	 *   to { transform: scale(1.5); }
	 * }
	 *
	 * @-webkit-keyframes pulse {
	 *   from { -webkit-transform: scale(0.5); }
	 *   to { -webkit-transform: scale(1.5); }
	 * }
	 * ```
	 *
	 * Given this complex combination of CSS classes, styles and options, `$animateCss` will figure everything out and make the animation happen.
	 *
	 * ## How the Options are handled
	 *
	 * `$animateCss` is very versatile and intelligent when it comes to figuring out what configurations to apply to the element to ensure the animation
	 * works with the options provided. Say for example we were adding a class that contained a keyframe value and we wanted to also animate some inline
	 * styles using the `from` and `to` properties.
	 *
	 * ```js
	 * var animator = $animateCss(element, {
	 *   from: { background:'red' },
	 *   to: { background:'blue' }
	 * });
	 * animator.start();
	 * ```
	 *
	 * ```css
	 * .rotating-animation {
	 *   animation:0.5s rotate linear;
	 *   -webkit-animation:0.5s rotate linear;
	 * }
	 *
	 * @keyframes rotate {
	 *   from { transform: rotate(0deg); }
	 *   to { transform: rotate(360deg); }
	 * }
	 *
	 * @-webkit-keyframes rotate {
	 *   from { -webkit-transform: rotate(0deg); }
	 *   to { -webkit-transform: rotate(360deg); }
	 * }
	 * ```
	 *
	 * The missing pieces here are that we do not have a transition set (within the CSS code nor within the `$animateCss` options) and the duration of the animation is
	 * going to be detected from what the keyframe styles on the CSS class are. In this event, `$animateCss` will automatically create an inline transition
	 * style matching the duration detected from the keyframe style (which is present in the CSS class that is being added) and then prepare both the transition
	 * and keyframe animations to run in parallel on the element. Then when the animation is underway the provided `from` and `to` CSS styles will be applied
	 * and spread across the transition and keyframe animation.
	 *
	 * ## What is returned
	 *
	 * `$animateCss` works in two stages: a preparation phase and an animation phase. Therefore when `$animateCss` is first called it will NOT actually
	 * start the animation. All that is going on here is that the element is being prepared for the animation (which means that the generated CSS classes are
	 * added and removed on the element). Once `$animateCss` is called it will return an object with the following properties:
	 *
	 * ```js
	 * var animator = $animateCss(element, { ... });
	 * ```
	 *
	 * Now what do the contents of our `animator` variable look like:
	 *
	 * ```js
	 * {
	 *   // starts the animation
	 *   start: Function,
	 *
	 *   // ends (aborts) the animation
	 *   end: Function
	 * }
	 * ```
	 *
	 * To actually start the animation we need to run `animation.start()` which will then return a promise that we can hook into to detect when the animation ends.
	 * If we choose not to run the animation then we MUST run `animation.end()` to perform a cleanup on the element (since some CSS classes and styles may have been
	 * applied to the element during the preparation phase). Note that all other properties such as duration, delay, transitions and keyframes are just properties
	 * and that changing them will not reconfigure the parameters of the animation.
	 *
	 * ### runner.done() vs runner.then()
	 * It is documented that `animation.start()` will return a promise object and this is true, however, there is also an additional method available on the
	 * runner called `.done(callbackFn)`. The done method works the same as `.finally(callbackFn)`, however, it does **not trigger a digest to occur**.
	 * Therefore, for performance reasons, it's always best to use `runner.done(callback)` instead of `runner.then()`, `runner.catch()` or `runner.finally()`
	 * unless you really need a digest to kick off afterwards.
	 *
	 * Keep in mind that, to make this easier, ngAnimate has tweaked the JS animations API to recognize when a runner instance is returned from $animateCss
	 * (so there is no need to call `runner.done(doneFn)` inside of your JavaScript animation code).
	 * Check the {@link ngAnimate.$animateCss#usage animation code above} to see how this works.
	 *
	 * @param {DOMElement} element the element that will be animated
	 * @param {object} options the animation-related options that will be applied during the animation
	 *
	 * * `event` - The DOM event (e.g. enter, leave, move). When used, a generated CSS class of `ng-EVENT` and `ng-EVENT-active` will be applied
	 * to the element during the animation. Multiple events can be provided when spaces are used as a separator. (Note that this will not perform any DOM operation.)
	 * * `structural` - Indicates that the `ng-` prefix will be added to the event class. Setting to `false` or omitting will turn `ng-EVENT` and
	 * `ng-EVENT-active` in `EVENT` and `EVENT-active`. Unused if `event` is omitted.
	 * * `easing` - The CSS easing value that will be applied to the transition or keyframe animation (or both).
	 * * `transitionStyle` - The raw CSS transition style that will be used (e.g. `1s linear all`).
	 * * `keyframeStyle` - The raw CSS keyframe animation style that will be used (e.g. `1s my_animation linear`).
	 * * `from` - The starting CSS styles (a key/value object) that will be applied at the start of the animation.
	 * * `to` - The ending CSS styles (a key/value object) that will be applied across the animation via a CSS transition.
	 * * `addClass` - A space separated list of CSS classes that will be added to the element and spread across the animation.
	 * * `removeClass` - A space separated list of CSS classes that will be removed from the element and spread across the animation.
	 * * `duration` - A number value representing the total duration of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of `0`
	 * is provided then the animation will be skipped entirely.
	 * * `delay` - A number value representing the total delay of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of `true` is
	 * used then whatever delay value is detected from the CSS classes will be mirrored on the elements styles (e.g. by setting delay true then the style value
	 * of the element will be `transition-delay: DETECTED_VALUE`). Using `true` is useful when you want the CSS classes and inline styles to all share the same
	 * CSS delay value.
	 * * `stagger` - A numeric time value representing the delay between successively animated elements
	 * ({@link ngAnimate#css-staggering-animations Click here to learn how CSS-based staggering works in ngAnimate.})
	 * * `staggerIndex` - The numeric index representing the stagger item (e.g. a value of 5 is equal to the sixth item in the stagger; therefore when a
	 *   `stagger` option value of `0.1` is used then there will be a stagger delay of `600ms`)
	 * * `applyClassesEarly` - Whether or not the classes being added or removed will be used when detecting the animation. This is set by `$animate` when enter/leave/move animations are fired to ensure that the CSS classes are resolved in time. (Note that this will prevent any transitions from occurring on the classes being added and removed.)
	 * * `cleanupStyles` - Whether or not the provided `from` and `to` styles will be removed once
	 *    the animation is closed. This is useful for when the styles are used purely for the sake of
	 *    the animation and do not have a lasting visual effect on the element (e.g. a collapse and open animation).
	 *    By default this value is set to `false`.
	 *
	 * @return {object} an object with start and end methods and details about the animation.
	 *
	 * * `start` - The method to start the animation. This will return a `Promise` when called.
	 * * `end` - This method will cancel the animation and remove all applied CSS classes and styles.
	 */
	var ONE_SECOND = 1000;
	var BASE_TEN = 10;

	var ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;
	var CLOSING_TIME_BUFFER = 1.5;

	var DETECT_CSS_PROPERTIES = {
	  transitionDuration:      TRANSITION_DURATION_PROP,
	  transitionDelay:         TRANSITION_DELAY_PROP,
	  transitionProperty:      TRANSITION_PROP + PROPERTY_KEY,
	  animationDuration:       ANIMATION_DURATION_PROP,
	  animationDelay:          ANIMATION_DELAY_PROP,
	  animationIterationCount: ANIMATION_PROP + ANIMATION_ITERATION_COUNT_KEY
	};

	var DETECT_STAGGER_CSS_PROPERTIES = {
	  transitionDuration:      TRANSITION_DURATION_PROP,
	  transitionDelay:         TRANSITION_DELAY_PROP,
	  animationDuration:       ANIMATION_DURATION_PROP,
	  animationDelay:          ANIMATION_DELAY_PROP
	};

	function getCssKeyframeDurationStyle(duration) {
	  return [ANIMATION_DURATION_PROP, duration + 's'];
	}

	function getCssDelayStyle(delay, isKeyframeAnimation) {
	  var prop = isKeyframeAnimation ? ANIMATION_DELAY_PROP : TRANSITION_DELAY_PROP;
	  return [prop, delay + 's'];
	}

	function computeCssStyles($window, element, properties) {
	  var styles = Object.create(null);
	  var detectedStyles = $window.getComputedStyle(element) || {};
	  forEach(properties, function(formalStyleName, actualStyleName) {
	    var val = detectedStyles[formalStyleName];
	    if (val) {
	      var c = val.charAt(0);

	      // only numerical-based values have a negative sign or digit as the first value
	      if (c === '-' || c === '+' || c >= 0) {
	        val = parseMaxTime(val);
	      }

	      // by setting this to null in the event that the delay is not set or is set directly as 0
	      // then we can still allow for negative values to be used later on and not mistake this
	      // value for being greater than any other negative value.
	      if (val === 0) {
	        val = null;
	      }
	      styles[actualStyleName] = val;
	    }
	  });

	  return styles;
	}

	function parseMaxTime(str) {
	  var maxValue = 0;
	  var values = str.split(/\s*,\s*/);
	  forEach(values, function(value) {
	    // it's always safe to consider only second values and omit `ms` values since
	    // getComputedStyle will always handle the conversion for us
	    if (value.charAt(value.length - 1) == 's') {
	      value = value.substring(0, value.length - 1);
	    }
	    value = parseFloat(value) || 0;
	    maxValue = maxValue ? Math.max(value, maxValue) : value;
	  });
	  return maxValue;
	}

	function truthyTimingValue(val) {
	  return val === 0 || val != null;
	}

	function getCssTransitionDurationStyle(duration, applyOnlyDuration) {
	  var style = TRANSITION_PROP;
	  var value = duration + 's';
	  if (applyOnlyDuration) {
	    style += DURATION_KEY;
	  } else {
	    value += ' linear all';
	  }
	  return [style, value];
	}

	function createLocalCacheLookup() {
	  var cache = Object.create(null);
	  return {
	    flush: function() {
	      cache = Object.create(null);
	    },

	    count: function(key) {
	      var entry = cache[key];
	      return entry ? entry.total : 0;
	    },

	    get: function(key) {
	      var entry = cache[key];
	      return entry && entry.value;
	    },

	    put: function(key, value) {
	      if (!cache[key]) {
	        cache[key] = { total: 1, value: value };
	      } else {
	        cache[key].total++;
	      }
	    }
	  };
	}

	// we do not reassign an already present style value since
	// if we detect the style property value again we may be
	// detecting styles that were added via the `from` styles.
	// We make use of `isDefined` here since an empty string
	// or null value (which is what getPropertyValue will return
	// for a non-existing style) will still be marked as a valid
	// value for the style (a falsy value implies that the style
	// is to be removed at the end of the animation). If we had a simple
	// "OR" statement then it would not be enough to catch that.
	function registerRestorableStyles(backup, node, properties) {
	  forEach(properties, function(prop) {
	    backup[prop] = isDefined(backup[prop])
	        ? backup[prop]
	        : node.style.getPropertyValue(prop);
	  });
	}

	var $AnimateCssProvider = ['$animateProvider', function($animateProvider) {
	  var gcsLookup = createLocalCacheLookup();
	  var gcsStaggerLookup = createLocalCacheLookup();

	  this.$get = ['$window', '$$jqLite', '$$AnimateRunner', '$timeout',
	               '$$forceReflow', '$sniffer', '$$rAFScheduler', '$$animateQueue',
	       function($window,   $$jqLite,   $$AnimateRunner,   $timeout,
	                $$forceReflow,   $sniffer,   $$rAFScheduler, $$animateQueue) {

	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

	    var parentCounter = 0;
	    function gcsHashFn(node, extraClasses) {
	      var KEY = "$$ngAnimateParentKey";
	      var parentNode = node.parentNode;
	      var parentID = parentNode[KEY] || (parentNode[KEY] = ++parentCounter);
	      return parentID + '-' + node.getAttribute('class') + '-' + extraClasses;
	    }

	    function computeCachedCssStyles(node, className, cacheKey, properties) {
	      var timings = gcsLookup.get(cacheKey);

	      if (!timings) {
	        timings = computeCssStyles($window, node, properties);
	        if (timings.animationIterationCount === 'infinite') {
	          timings.animationIterationCount = 1;
	        }
	      }

	      // we keep putting this in multiple times even though the value and the cacheKey are the same
	      // because we're keeping an internal tally of how many duplicate animations are detected.
	      gcsLookup.put(cacheKey, timings);
	      return timings;
	    }

	    function computeCachedCssStaggerStyles(node, className, cacheKey, properties) {
	      var stagger;

	      // if we have one or more existing matches of matching elements
	      // containing the same parent + CSS styles (which is how cacheKey works)
	      // then staggering is possible
	      if (gcsLookup.count(cacheKey) > 0) {
	        stagger = gcsStaggerLookup.get(cacheKey);

	        if (!stagger) {
	          var staggerClassName = pendClasses(className, '-stagger');

	          $$jqLite.addClass(node, staggerClassName);

	          stagger = computeCssStyles($window, node, properties);

	          // force the conversion of a null value to zero incase not set
	          stagger.animationDuration = Math.max(stagger.animationDuration, 0);
	          stagger.transitionDuration = Math.max(stagger.transitionDuration, 0);

	          $$jqLite.removeClass(node, staggerClassName);

	          gcsStaggerLookup.put(cacheKey, stagger);
	        }
	      }

	      return stagger || {};
	    }

	    var cancelLastRAFRequest;
	    var rafWaitQueue = [];
	    function waitUntilQuiet(callback) {
	      rafWaitQueue.push(callback);
	      $$rAFScheduler.waitUntilQuiet(function() {
	        gcsLookup.flush();
	        gcsStaggerLookup.flush();

	        // DO NOT REMOVE THIS LINE OR REFACTOR OUT THE `pageWidth` variable.
	        // PLEASE EXAMINE THE `$$forceReflow` service to understand why.
	        var pageWidth = $$forceReflow();

	        // we use a for loop to ensure that if the queue is changed
	        // during this looping then it will consider new requests
	        for (var i = 0; i < rafWaitQueue.length; i++) {
	          rafWaitQueue[i](pageWidth);
	        }
	        rafWaitQueue.length = 0;
	      });
	    }

	    function computeTimings(node, className, cacheKey) {
	      var timings = computeCachedCssStyles(node, className, cacheKey, DETECT_CSS_PROPERTIES);
	      var aD = timings.animationDelay;
	      var tD = timings.transitionDelay;
	      timings.maxDelay = aD && tD
	          ? Math.max(aD, tD)
	          : (aD || tD);
	      timings.maxDuration = Math.max(
	          timings.animationDuration * timings.animationIterationCount,
	          timings.transitionDuration);

	      return timings;
	    }

	    return function init(element, initialOptions) {
	      // all of the animation functions should create
	      // a copy of the options data, however, if a
	      // parent service has already created a copy then
	      // we should stick to using that
	      var options = initialOptions || {};
	      if (!options.$$prepared) {
	        options = prepareAnimationOptions(copy(options));
	      }

	      var restoreStyles = {};
	      var node = getDomNode(element);
	      if (!node
	          || !node.parentNode
	          || !$$animateQueue.enabled()) {
	        return closeAndReturnNoopAnimator();
	      }

	      var temporaryStyles = [];
	      var classes = element.attr('class');
	      var styles = packageStyles(options);
	      var animationClosed;
	      var animationPaused;
	      var animationCompleted;
	      var runner;
	      var runnerHost;
	      var maxDelay;
	      var maxDelayTime;
	      var maxDuration;
	      var maxDurationTime;
	      var startTime;
	      var events = [];

	      if (options.duration === 0 || (!$sniffer.animations && !$sniffer.transitions)) {
	        return closeAndReturnNoopAnimator();
	      }

	      var method = options.event && isArray(options.event)
	            ? options.event.join(' ')
	            : options.event;

	      var isStructural = method && options.structural;
	      var structuralClassName = '';
	      var addRemoveClassName = '';

	      if (isStructural) {
	        structuralClassName = pendClasses(method, EVENT_CLASS_PREFIX, true);
	      } else if (method) {
	        structuralClassName = method;
	      }

	      if (options.addClass) {
	        addRemoveClassName += pendClasses(options.addClass, ADD_CLASS_SUFFIX);
	      }

	      if (options.removeClass) {
	        if (addRemoveClassName.length) {
	          addRemoveClassName += ' ';
	        }
	        addRemoveClassName += pendClasses(options.removeClass, REMOVE_CLASS_SUFFIX);
	      }

	      // there may be a situation where a structural animation is combined together
	      // with CSS classes that need to resolve before the animation is computed.
	      // However this means that there is no explicit CSS code to block the animation
	      // from happening (by setting 0s none in the class name). If this is the case
	      // we need to apply the classes before the first rAF so we know to continue if
	      // there actually is a detected transition or keyframe animation
	      if (options.applyClassesEarly && addRemoveClassName.length) {
	        applyAnimationClasses(element, options);
	      }

	      var preparationClasses = [structuralClassName, addRemoveClassName].join(' ').trim();
	      var fullClassName = classes + ' ' + preparationClasses;
	      var activeClasses = pendClasses(preparationClasses, ACTIVE_CLASS_SUFFIX);
	      var hasToStyles = styles.to && Object.keys(styles.to).length > 0;
	      var containsKeyframeAnimation = (options.keyframeStyle || '').length > 0;

	      // there is no way we can trigger an animation if no styles and
	      // no classes are being applied which would then trigger a transition,
	      // unless there a is raw keyframe value that is applied to the element.
	      if (!containsKeyframeAnimation
	           && !hasToStyles
	           && !preparationClasses) {
	        return closeAndReturnNoopAnimator();
	      }

	      var cacheKey, stagger;
	      if (options.stagger > 0) {
	        var staggerVal = parseFloat(options.stagger);
	        stagger = {
	          transitionDelay: staggerVal,
	          animationDelay: staggerVal,
	          transitionDuration: 0,
	          animationDuration: 0
	        };
	      } else {
	        cacheKey = gcsHashFn(node, fullClassName);
	        stagger = computeCachedCssStaggerStyles(node, preparationClasses, cacheKey, DETECT_STAGGER_CSS_PROPERTIES);
	      }

	      if (!options.$$skipPreparationClasses) {
	        $$jqLite.addClass(element, preparationClasses);
	      }

	      var applyOnlyDuration;

	      if (options.transitionStyle) {
	        var transitionStyle = [TRANSITION_PROP, options.transitionStyle];
	        applyInlineStyle(node, transitionStyle);
	        temporaryStyles.push(transitionStyle);
	      }

	      if (options.duration >= 0) {
	        applyOnlyDuration = node.style[TRANSITION_PROP].length > 0;
	        var durationStyle = getCssTransitionDurationStyle(options.duration, applyOnlyDuration);

	        // we set the duration so that it will be picked up by getComputedStyle later
	        applyInlineStyle(node, durationStyle);
	        temporaryStyles.push(durationStyle);
	      }

	      if (options.keyframeStyle) {
	        var keyframeStyle = [ANIMATION_PROP, options.keyframeStyle];
	        applyInlineStyle(node, keyframeStyle);
	        temporaryStyles.push(keyframeStyle);
	      }

	      var itemIndex = stagger
	          ? options.staggerIndex >= 0
	              ? options.staggerIndex
	              : gcsLookup.count(cacheKey)
	          : 0;

	      var isFirst = itemIndex === 0;

	      // this is a pre-emptive way of forcing the setup classes to be added and applied INSTANTLY
	      // without causing any combination of transitions to kick in. By adding a negative delay value
	      // it forces the setup class' transition to end immediately. We later then remove the negative
	      // transition delay to allow for the transition to naturally do it's thing. The beauty here is
	      // that if there is no transition defined then nothing will happen and this will also allow
	      // other transitions to be stacked on top of each other without any chopping them out.
	      if (isFirst && !options.skipBlocking) {
	        blockTransitions(node, SAFE_FAST_FORWARD_DURATION_VALUE);
	      }

	      var timings = computeTimings(node, fullClassName, cacheKey);
	      var relativeDelay = timings.maxDelay;
	      maxDelay = Math.max(relativeDelay, 0);
	      maxDuration = timings.maxDuration;

	      var flags = {};
	      flags.hasTransitions          = timings.transitionDuration > 0;
	      flags.hasAnimations           = timings.animationDuration > 0;
	      flags.hasTransitionAll        = flags.hasTransitions && timings.transitionProperty == 'all';
	      flags.applyTransitionDuration = hasToStyles && (
	                                        (flags.hasTransitions && !flags.hasTransitionAll)
	                                         || (flags.hasAnimations && !flags.hasTransitions));
	      flags.applyAnimationDuration  = options.duration && flags.hasAnimations;
	      flags.applyTransitionDelay    = truthyTimingValue(options.delay) && (flags.applyTransitionDuration || flags.hasTransitions);
	      flags.applyAnimationDelay     = truthyTimingValue(options.delay) && flags.hasAnimations;
	      flags.recalculateTimingStyles = addRemoveClassName.length > 0;

	      if (flags.applyTransitionDuration || flags.applyAnimationDuration) {
	        maxDuration = options.duration ? parseFloat(options.duration) : maxDuration;

	        if (flags.applyTransitionDuration) {
	          flags.hasTransitions = true;
	          timings.transitionDuration = maxDuration;
	          applyOnlyDuration = node.style[TRANSITION_PROP + PROPERTY_KEY].length > 0;
	          temporaryStyles.push(getCssTransitionDurationStyle(maxDuration, applyOnlyDuration));
	        }

	        if (flags.applyAnimationDuration) {
	          flags.hasAnimations = true;
	          timings.animationDuration = maxDuration;
	          temporaryStyles.push(getCssKeyframeDurationStyle(maxDuration));
	        }
	      }

	      if (maxDuration === 0 && !flags.recalculateTimingStyles) {
	        return closeAndReturnNoopAnimator();
	      }

	      if (options.delay != null) {
	        var delayStyle;
	        if (typeof options.delay !== "boolean") {
	          delayStyle = parseFloat(options.delay);
	          // number in options.delay means we have to recalculate the delay for the closing timeout
	          maxDelay = Math.max(delayStyle, 0);
	        }

	        if (flags.applyTransitionDelay) {
	          temporaryStyles.push(getCssDelayStyle(delayStyle));
	        }

	        if (flags.applyAnimationDelay) {
	          temporaryStyles.push(getCssDelayStyle(delayStyle, true));
	        }
	      }

	      // we need to recalculate the delay value since we used a pre-emptive negative
	      // delay value and the delay value is required for the final event checking. This
	      // property will ensure that this will happen after the RAF phase has passed.
	      if (options.duration == null && timings.transitionDuration > 0) {
	        flags.recalculateTimingStyles = flags.recalculateTimingStyles || isFirst;
	      }

	      maxDelayTime = maxDelay * ONE_SECOND;
	      maxDurationTime = maxDuration * ONE_SECOND;
	      if (!options.skipBlocking) {
	        flags.blockTransition = timings.transitionDuration > 0;
	        flags.blockKeyframeAnimation = timings.animationDuration > 0 &&
	                                       stagger.animationDelay > 0 &&
	                                       stagger.animationDuration === 0;
	      }

	      if (options.from) {
	        if (options.cleanupStyles) {
	          registerRestorableStyles(restoreStyles, node, Object.keys(options.from));
	        }
	        applyAnimationFromStyles(element, options);
	      }

	      if (flags.blockTransition || flags.blockKeyframeAnimation) {
	        applyBlocking(maxDuration);
	      } else if (!options.skipBlocking) {
	        blockTransitions(node, false);
	      }

	      // TODO(matsko): for 1.5 change this code to have an animator object for better debugging
	      return {
	        $$willAnimate: true,
	        end: endFn,
	        start: function() {
	          if (animationClosed) return;

	          runnerHost = {
	            end: endFn,
	            cancel: cancelFn,
	            resume: null, //this will be set during the start() phase
	            pause: null
	          };

	          runner = new $$AnimateRunner(runnerHost);

	          waitUntilQuiet(start);

	          // we don't have access to pause/resume the animation
	          // since it hasn't run yet. AnimateRunner will therefore
	          // set noop functions for resume and pause and they will
	          // later be overridden once the animation is triggered
	          return runner;
	        }
	      };

	      function endFn() {
	        close();
	      }

	      function cancelFn() {
	        close(true);
	      }

	      function close(rejected) { // jshint ignore:line
	        // if the promise has been called already then we shouldn't close
	        // the animation again
	        if (animationClosed || (animationCompleted && animationPaused)) return;
	        animationClosed = true;
	        animationPaused = false;

	        if (!options.$$skipPreparationClasses) {
	          $$jqLite.removeClass(element, preparationClasses);
	        }
	        $$jqLite.removeClass(element, activeClasses);

	        blockKeyframeAnimations(node, false);
	        blockTransitions(node, false);

	        forEach(temporaryStyles, function(entry) {
	          // There is only one way to remove inline style properties entirely from elements.
	          // By using `removeProperty` this works, but we need to convert camel-cased CSS
	          // styles down to hyphenated values.
	          node.style[entry[0]] = '';
	        });

	        applyAnimationClasses(element, options);
	        applyAnimationStyles(element, options);

	        if (Object.keys(restoreStyles).length) {
	          forEach(restoreStyles, function(value, prop) {
	            value ? node.style.setProperty(prop, value)
	                  : node.style.removeProperty(prop);
	          });
	        }

	        // the reason why we have this option is to allow a synchronous closing callback
	        // that is fired as SOON as the animation ends (when the CSS is removed) or if
	        // the animation never takes off at all. A good example is a leave animation since
	        // the element must be removed just after the animation is over or else the element
	        // will appear on screen for one animation frame causing an overbearing flicker.
	        if (options.onDone) {
	          options.onDone();
	        }

	        if (events && events.length) {
	          // Remove the transitionend / animationend listener(s)
	          element.off(events.join(' '), onAnimationProgress);
	        }

	        //Cancel the fallback closing timeout and remove the timer data
	        var animationTimerData = element.data(ANIMATE_TIMER_KEY);
	        if (animationTimerData) {
	          $timeout.cancel(animationTimerData[0].timer);
	          element.removeData(ANIMATE_TIMER_KEY);
	        }

	        // if the preparation function fails then the promise is not setup
	        if (runner) {
	          runner.complete(!rejected);
	        }
	      }

	      function applyBlocking(duration) {
	        if (flags.blockTransition) {
	          blockTransitions(node, duration);
	        }

	        if (flags.blockKeyframeAnimation) {
	          blockKeyframeAnimations(node, !!duration);
	        }
	      }

	      function closeAndReturnNoopAnimator() {
	        runner = new $$AnimateRunner({
	          end: endFn,
	          cancel: cancelFn
	        });

	        // should flush the cache animation
	        waitUntilQuiet(noop);
	        close();

	        return {
	          $$willAnimate: false,
	          start: function() {
	            return runner;
	          },
	          end: endFn
	        };
	      }

	      function onAnimationProgress(event) {
	        event.stopPropagation();
	        var ev = event.originalEvent || event;

	        // we now always use `Date.now()` due to the recent changes with
	        // event.timeStamp in Firefox, Webkit and Chrome (see #13494 for more info)
	        var timeStamp = ev.$manualTimeStamp || Date.now();

	        /* Firefox (or possibly just Gecko) likes to not round values up
	         * when a ms measurement is used for the animation */
	        var elapsedTime = parseFloat(ev.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES));

	        /* $manualTimeStamp is a mocked timeStamp value which is set
	         * within browserTrigger(). This is only here so that tests can
	         * mock animations properly. Real events fallback to event.timeStamp,
	         * or, if they don't, then a timeStamp is automatically created for them.
	         * We're checking to see if the timeStamp surpasses the expected delay,
	         * but we're using elapsedTime instead of the timeStamp on the 2nd
	         * pre-condition since animationPauseds sometimes close off early */
	        if (Math.max(timeStamp - startTime, 0) >= maxDelayTime && elapsedTime >= maxDuration) {
	          // we set this flag to ensure that if the transition is paused then, when resumed,
	          // the animation will automatically close itself since transitions cannot be paused.
	          animationCompleted = true;
	          close();
	        }
	      }

	      function start() {
	        if (animationClosed) return;
	        if (!node.parentNode) {
	          close();
	          return;
	        }

	        // even though we only pause keyframe animations here the pause flag
	        // will still happen when transitions are used. Only the transition will
	        // not be paused since that is not possible. If the animation ends when
	        // paused then it will not complete until unpaused or cancelled.
	        var playPause = function(playAnimation) {
	          if (!animationCompleted) {
	            animationPaused = !playAnimation;
	            if (timings.animationDuration) {
	              var value = blockKeyframeAnimations(node, animationPaused);
	              animationPaused
	                  ? temporaryStyles.push(value)
	                  : removeFromArray(temporaryStyles, value);
	            }
	          } else if (animationPaused && playAnimation) {
	            animationPaused = false;
	            close();
	          }
	        };

	        // checking the stagger duration prevents an accidentally cascade of the CSS delay style
	        // being inherited from the parent. If the transition duration is zero then we can safely
	        // rely that the delay value is an intentional stagger delay style.
	        var maxStagger = itemIndex > 0
	                         && ((timings.transitionDuration && stagger.transitionDuration === 0) ||
	                            (timings.animationDuration && stagger.animationDuration === 0))
	                         && Math.max(stagger.animationDelay, stagger.transitionDelay);
	        if (maxStagger) {
	          $timeout(triggerAnimationStart,
	                   Math.floor(maxStagger * itemIndex * ONE_SECOND),
	                   false);
	        } else {
	          triggerAnimationStart();
	        }

	        // this will decorate the existing promise runner with pause/resume methods
	        runnerHost.resume = function() {
	          playPause(true);
	        };

	        runnerHost.pause = function() {
	          playPause(false);
	        };

	        function triggerAnimationStart() {
	          // just incase a stagger animation kicks in when the animation
	          // itself was cancelled entirely
	          if (animationClosed) return;

	          applyBlocking(false);

	          forEach(temporaryStyles, function(entry) {
	            var key = entry[0];
	            var value = entry[1];
	            node.style[key] = value;
	          });

	          applyAnimationClasses(element, options);
	          $$jqLite.addClass(element, activeClasses);

	          if (flags.recalculateTimingStyles) {
	            fullClassName = node.className + ' ' + preparationClasses;
	            cacheKey = gcsHashFn(node, fullClassName);

	            timings = computeTimings(node, fullClassName, cacheKey);
	            relativeDelay = timings.maxDelay;
	            maxDelay = Math.max(relativeDelay, 0);
	            maxDuration = timings.maxDuration;

	            if (maxDuration === 0) {
	              close();
	              return;
	            }

	            flags.hasTransitions = timings.transitionDuration > 0;
	            flags.hasAnimations = timings.animationDuration > 0;
	          }

	          if (flags.applyAnimationDelay) {
	            relativeDelay = typeof options.delay !== "boolean" && truthyTimingValue(options.delay)
	                  ? parseFloat(options.delay)
	                  : relativeDelay;

	            maxDelay = Math.max(relativeDelay, 0);
	            timings.animationDelay = relativeDelay;
	            delayStyle = getCssDelayStyle(relativeDelay, true);
	            temporaryStyles.push(delayStyle);
	            node.style[delayStyle[0]] = delayStyle[1];
	          }

	          maxDelayTime = maxDelay * ONE_SECOND;
	          maxDurationTime = maxDuration * ONE_SECOND;

	          if (options.easing) {
	            var easeProp, easeVal = options.easing;
	            if (flags.hasTransitions) {
	              easeProp = TRANSITION_PROP + TIMING_KEY;
	              temporaryStyles.push([easeProp, easeVal]);
	              node.style[easeProp] = easeVal;
	            }
	            if (flags.hasAnimations) {
	              easeProp = ANIMATION_PROP + TIMING_KEY;
	              temporaryStyles.push([easeProp, easeVal]);
	              node.style[easeProp] = easeVal;
	            }
	          }

	          if (timings.transitionDuration) {
	            events.push(TRANSITIONEND_EVENT);
	          }

	          if (timings.animationDuration) {
	            events.push(ANIMATIONEND_EVENT);
	          }

	          startTime = Date.now();
	          var timerTime = maxDelayTime + CLOSING_TIME_BUFFER * maxDurationTime;
	          var endTime = startTime + timerTime;

	          var animationsData = element.data(ANIMATE_TIMER_KEY) || [];
	          var setupFallbackTimer = true;
	          if (animationsData.length) {
	            var currentTimerData = animationsData[0];
	            setupFallbackTimer = endTime > currentTimerData.expectedEndTime;
	            if (setupFallbackTimer) {
	              $timeout.cancel(currentTimerData.timer);
	            } else {
	              animationsData.push(close);
	            }
	          }

	          if (setupFallbackTimer) {
	            var timer = $timeout(onAnimationExpired, timerTime, false);
	            animationsData[0] = {
	              timer: timer,
	              expectedEndTime: endTime
	            };
	            animationsData.push(close);
	            element.data(ANIMATE_TIMER_KEY, animationsData);
	          }

	          if (events.length) {
	            element.on(events.join(' '), onAnimationProgress);
	          }

	          if (options.to) {
	            if (options.cleanupStyles) {
	              registerRestorableStyles(restoreStyles, node, Object.keys(options.to));
	            }
	            applyAnimationToStyles(element, options);
	          }
	        }

	        function onAnimationExpired() {
	          var animationsData = element.data(ANIMATE_TIMER_KEY);

	          // this will be false in the event that the element was
	          // removed from the DOM (via a leave animation or something
	          // similar)
	          if (animationsData) {
	            for (var i = 1; i < animationsData.length; i++) {
	              animationsData[i]();
	            }
	            element.removeData(ANIMATE_TIMER_KEY);
	          }
	        }
	      }
	    };
	  }];
	}];

	var $$AnimateCssDriverProvider = ['$$animationProvider', function($$animationProvider) {
	  $$animationProvider.drivers.push('$$animateCssDriver');

	  var NG_ANIMATE_SHIM_CLASS_NAME = 'ng-animate-shim';
	  var NG_ANIMATE_ANCHOR_CLASS_NAME = 'ng-anchor';

	  var NG_OUT_ANCHOR_CLASS_NAME = 'ng-anchor-out';
	  var NG_IN_ANCHOR_CLASS_NAME = 'ng-anchor-in';

	  function isDocumentFragment(node) {
	    return node.parentNode && node.parentNode.nodeType === 11;
	  }

	  this.$get = ['$animateCss', '$rootScope', '$$AnimateRunner', '$rootElement', '$sniffer', '$$jqLite', '$document',
	       function($animateCss,   $rootScope,   $$AnimateRunner,   $rootElement,   $sniffer,   $$jqLite,   $document) {

	    // only browsers that support these properties can render animations
	    if (!$sniffer.animations && !$sniffer.transitions) return noop;

	    var bodyNode = $document[0].body;
	    var rootNode = getDomNode($rootElement);

	    var rootBodyElement = jqLite(
	      // this is to avoid using something that exists outside of the body
	      // we also special case the doc fragment case because our unit test code
	      // appends the $rootElement to the body after the app has been bootstrapped
	      isDocumentFragment(rootNode) || bodyNode.contains(rootNode) ? rootNode : bodyNode
	    );

	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

	    return function initDriverFn(animationDetails) {
	      return animationDetails.from && animationDetails.to
	          ? prepareFromToAnchorAnimation(animationDetails.from,
	                                         animationDetails.to,
	                                         animationDetails.classes,
	                                         animationDetails.anchors)
	          : prepareRegularAnimation(animationDetails);
	    };

	    function filterCssClasses(classes) {
	      //remove all the `ng-` stuff
	      return classes.replace(/\bng-\S+\b/g, '');
	    }

	    function getUniqueValues(a, b) {
	      if (isString(a)) a = a.split(' ');
	      if (isString(b)) b = b.split(' ');
	      return a.filter(function(val) {
	        return b.indexOf(val) === -1;
	      }).join(' ');
	    }

	    function prepareAnchoredAnimation(classes, outAnchor, inAnchor) {
	      var clone = jqLite(getDomNode(outAnchor).cloneNode(true));
	      var startingClasses = filterCssClasses(getClassVal(clone));

	      outAnchor.addClass(NG_ANIMATE_SHIM_CLASS_NAME);
	      inAnchor.addClass(NG_ANIMATE_SHIM_CLASS_NAME);

	      clone.addClass(NG_ANIMATE_ANCHOR_CLASS_NAME);

	      rootBodyElement.append(clone);

	      var animatorIn, animatorOut = prepareOutAnimation();

	      // the user may not end up using the `out` animation and
	      // only making use of the `in` animation or vice-versa.
	      // In either case we should allow this and not assume the
	      // animation is over unless both animations are not used.
	      if (!animatorOut) {
	        animatorIn = prepareInAnimation();
	        if (!animatorIn) {
	          return end();
	        }
	      }

	      var startingAnimator = animatorOut || animatorIn;

	      return {
	        start: function() {
	          var runner;

	          var currentAnimation = startingAnimator.start();
	          currentAnimation.done(function() {
	            currentAnimation = null;
	            if (!animatorIn) {
	              animatorIn = prepareInAnimation();
	              if (animatorIn) {
	                currentAnimation = animatorIn.start();
	                currentAnimation.done(function() {
	                  currentAnimation = null;
	                  end();
	                  runner.complete();
	                });
	                return currentAnimation;
	              }
	            }
	            // in the event that there is no `in` animation
	            end();
	            runner.complete();
	          });

	          runner = new $$AnimateRunner({
	            end: endFn,
	            cancel: endFn
	          });

	          return runner;

	          function endFn() {
	            if (currentAnimation) {
	              currentAnimation.end();
	            }
	          }
	        }
	      };

	      function calculateAnchorStyles(anchor) {
	        var styles = {};

	        var coords = getDomNode(anchor).getBoundingClientRect();

	        // we iterate directly since safari messes up and doesn't return
	        // all the keys for the coords object when iterated
	        forEach(['width','height','top','left'], function(key) {
	          var value = coords[key];
	          switch (key) {
	            case 'top':
	              value += bodyNode.scrollTop;
	              break;
	            case 'left':
	              value += bodyNode.scrollLeft;
	              break;
	          }
	          styles[key] = Math.floor(value) + 'px';
	        });
	        return styles;
	      }

	      function prepareOutAnimation() {
	        var animator = $animateCss(clone, {
	          addClass: NG_OUT_ANCHOR_CLASS_NAME,
	          delay: true,
	          from: calculateAnchorStyles(outAnchor)
	        });

	        // read the comment within `prepareRegularAnimation` to understand
	        // why this check is necessary
	        return animator.$$willAnimate ? animator : null;
	      }

	      function getClassVal(element) {
	        return element.attr('class') || '';
	      }

	      function prepareInAnimation() {
	        var endingClasses = filterCssClasses(getClassVal(inAnchor));
	        var toAdd = getUniqueValues(endingClasses, startingClasses);
	        var toRemove = getUniqueValues(startingClasses, endingClasses);

	        var animator = $animateCss(clone, {
	          to: calculateAnchorStyles(inAnchor),
	          addClass: NG_IN_ANCHOR_CLASS_NAME + ' ' + toAdd,
	          removeClass: NG_OUT_ANCHOR_CLASS_NAME + ' ' + toRemove,
	          delay: true
	        });

	        // read the comment within `prepareRegularAnimation` to understand
	        // why this check is necessary
	        return animator.$$willAnimate ? animator : null;
	      }

	      function end() {
	        clone.remove();
	        outAnchor.removeClass(NG_ANIMATE_SHIM_CLASS_NAME);
	        inAnchor.removeClass(NG_ANIMATE_SHIM_CLASS_NAME);
	      }
	    }

	    function prepareFromToAnchorAnimation(from, to, classes, anchors) {
	      var fromAnimation = prepareRegularAnimation(from, noop);
	      var toAnimation = prepareRegularAnimation(to, noop);

	      var anchorAnimations = [];
	      forEach(anchors, function(anchor) {
	        var outElement = anchor['out'];
	        var inElement = anchor['in'];
	        var animator = prepareAnchoredAnimation(classes, outElement, inElement);
	        if (animator) {
	          anchorAnimations.push(animator);
	        }
	      });

	      // no point in doing anything when there are no elements to animate
	      if (!fromAnimation && !toAnimation && anchorAnimations.length === 0) return;

	      return {
	        start: function() {
	          var animationRunners = [];

	          if (fromAnimation) {
	            animationRunners.push(fromAnimation.start());
	          }

	          if (toAnimation) {
	            animationRunners.push(toAnimation.start());
	          }

	          forEach(anchorAnimations, function(animation) {
	            animationRunners.push(animation.start());
	          });

	          var runner = new $$AnimateRunner({
	            end: endFn,
	            cancel: endFn // CSS-driven animations cannot be cancelled, only ended
	          });

	          $$AnimateRunner.all(animationRunners, function(status) {
	            runner.complete(status);
	          });

	          return runner;

	          function endFn() {
	            forEach(animationRunners, function(runner) {
	              runner.end();
	            });
	          }
	        }
	      };
	    }

	    function prepareRegularAnimation(animationDetails) {
	      var element = animationDetails.element;
	      var options = animationDetails.options || {};

	      if (animationDetails.structural) {
	        options.event = animationDetails.event;
	        options.structural = true;
	        options.applyClassesEarly = true;

	        // we special case the leave animation since we want to ensure that
	        // the element is removed as soon as the animation is over. Otherwise
	        // a flicker might appear or the element may not be removed at all
	        if (animationDetails.event === 'leave') {
	          options.onDone = options.domOperation;
	        }
	      }

	      // We assign the preparationClasses as the actual animation event since
	      // the internals of $animateCss will just suffix the event token values
	      // with `-active` to trigger the animation.
	      if (options.preparationClasses) {
	        options.event = concatWithSpace(options.event, options.preparationClasses);
	      }

	      var animator = $animateCss(element, options);

	      // the driver lookup code inside of $$animation attempts to spawn a
	      // driver one by one until a driver returns a.$$willAnimate animator object.
	      // $animateCss will always return an object, however, it will pass in
	      // a flag as a hint as to whether an animation was detected or not
	      return animator.$$willAnimate ? animator : null;
	    }
	  }];
	}];

	// TODO(matsko): use caching here to speed things up for detection
	// TODO(matsko): add documentation
	//  by the time...

	var $$AnimateJsProvider = ['$animateProvider', function($animateProvider) {
	  this.$get = ['$injector', '$$AnimateRunner', '$$jqLite',
	       function($injector,   $$AnimateRunner,   $$jqLite) {

	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
	         // $animateJs(element, 'enter');
	    return function(element, event, classes, options) {
	      var animationClosed = false;

	      // the `classes` argument is optional and if it is not used
	      // then the classes will be resolved from the element's className
	      // property as well as options.addClass/options.removeClass.
	      if (arguments.length === 3 && isObject(classes)) {
	        options = classes;
	        classes = null;
	      }

	      options = prepareAnimationOptions(options);
	      if (!classes) {
	        classes = element.attr('class') || '';
	        if (options.addClass) {
	          classes += ' ' + options.addClass;
	        }
	        if (options.removeClass) {
	          classes += ' ' + options.removeClass;
	        }
	      }

	      var classesToAdd = options.addClass;
	      var classesToRemove = options.removeClass;

	      // the lookupAnimations function returns a series of animation objects that are
	      // matched up with one or more of the CSS classes. These animation objects are
	      // defined via the module.animation factory function. If nothing is detected then
	      // we don't return anything which then makes $animation query the next driver.
	      var animations = lookupAnimations(classes);
	      var before, after;
	      if (animations.length) {
	        var afterFn, beforeFn;
	        if (event == 'leave') {
	          beforeFn = 'leave';
	          afterFn = 'afterLeave'; // TODO(matsko): get rid of this
	        } else {
	          beforeFn = 'before' + event.charAt(0).toUpperCase() + event.substr(1);
	          afterFn = event;
	        }

	        if (event !== 'enter' && event !== 'move') {
	          before = packageAnimations(element, event, options, animations, beforeFn);
	        }
	        after  = packageAnimations(element, event, options, animations, afterFn);
	      }

	      // no matching animations
	      if (!before && !after) return;

	      function applyOptions() {
	        options.domOperation();
	        applyAnimationClasses(element, options);
	      }

	      function close() {
	        animationClosed = true;
	        applyOptions();
	        applyAnimationStyles(element, options);
	      }

	      var runner;

	      return {
	        $$willAnimate: true,
	        end: function() {
	          if (runner) {
	            runner.end();
	          } else {
	            close();
	            runner = new $$AnimateRunner();
	            runner.complete(true);
	          }
	          return runner;
	        },
	        start: function() {
	          if (runner) {
	            return runner;
	          }

	          runner = new $$AnimateRunner();
	          var closeActiveAnimations;
	          var chain = [];

	          if (before) {
	            chain.push(function(fn) {
	              closeActiveAnimations = before(fn);
	            });
	          }

	          if (chain.length) {
	            chain.push(function(fn) {
	              applyOptions();
	              fn(true);
	            });
	          } else {
	            applyOptions();
	          }

	          if (after) {
	            chain.push(function(fn) {
	              closeActiveAnimations = after(fn);
	            });
	          }

	          runner.setHost({
	            end: function() {
	              endAnimations();
	            },
	            cancel: function() {
	              endAnimations(true);
	            }
	          });

	          $$AnimateRunner.chain(chain, onComplete);
	          return runner;

	          function onComplete(success) {
	            close(success);
	            runner.complete(success);
	          }

	          function endAnimations(cancelled) {
	            if (!animationClosed) {
	              (closeActiveAnimations || noop)(cancelled);
	              onComplete(cancelled);
	            }
	          }
	        }
	      };

	      function executeAnimationFn(fn, element, event, options, onDone) {
	        var args;
	        switch (event) {
	          case 'animate':
	            args = [element, options.from, options.to, onDone];
	            break;

	          case 'setClass':
	            args = [element, classesToAdd, classesToRemove, onDone];
	            break;

	          case 'addClass':
	            args = [element, classesToAdd, onDone];
	            break;

	          case 'removeClass':
	            args = [element, classesToRemove, onDone];
	            break;

	          default:
	            args = [element, onDone];
	            break;
	        }

	        args.push(options);

	        var value = fn.apply(fn, args);
	        if (value) {
	          if (isFunction(value.start)) {
	            value = value.start();
	          }

	          if (value instanceof $$AnimateRunner) {
	            value.done(onDone);
	          } else if (isFunction(value)) {
	            // optional onEnd / onCancel callback
	            return value;
	          }
	        }

	        return noop;
	      }

	      function groupEventedAnimations(element, event, options, animations, fnName) {
	        var operations = [];
	        forEach(animations, function(ani) {
	          var animation = ani[fnName];
	          if (!animation) return;

	          // note that all of these animations will run in parallel
	          operations.push(function() {
	            var runner;
	            var endProgressCb;

	            var resolved = false;
	            var onAnimationComplete = function(rejected) {
	              if (!resolved) {
	                resolved = true;
	                (endProgressCb || noop)(rejected);
	                runner.complete(!rejected);
	              }
	            };

	            runner = new $$AnimateRunner({
	              end: function() {
	                onAnimationComplete();
	              },
	              cancel: function() {
	                onAnimationComplete(true);
	              }
	            });

	            endProgressCb = executeAnimationFn(animation, element, event, options, function(result) {
	              var cancelled = result === false;
	              onAnimationComplete(cancelled);
	            });

	            return runner;
	          });
	        });

	        return operations;
	      }

	      function packageAnimations(element, event, options, animations, fnName) {
	        var operations = groupEventedAnimations(element, event, options, animations, fnName);
	        if (operations.length === 0) {
	          var a,b;
	          if (fnName === 'beforeSetClass') {
	            a = groupEventedAnimations(element, 'removeClass', options, animations, 'beforeRemoveClass');
	            b = groupEventedAnimations(element, 'addClass', options, animations, 'beforeAddClass');
	          } else if (fnName === 'setClass') {
	            a = groupEventedAnimations(element, 'removeClass', options, animations, 'removeClass');
	            b = groupEventedAnimations(element, 'addClass', options, animations, 'addClass');
	          }

	          if (a) {
	            operations = operations.concat(a);
	          }
	          if (b) {
	            operations = operations.concat(b);
	          }
	        }

	        if (operations.length === 0) return;

	        // TODO(matsko): add documentation
	        return function startAnimation(callback) {
	          var runners = [];
	          if (operations.length) {
	            forEach(operations, function(animateFn) {
	              runners.push(animateFn());
	            });
	          }

	          runners.length ? $$AnimateRunner.all(runners, callback) : callback();

	          return function endFn(reject) {
	            forEach(runners, function(runner) {
	              reject ? runner.cancel() : runner.end();
	            });
	          };
	        };
	      }
	    };

	    function lookupAnimations(classes) {
	      classes = isArray(classes) ? classes : classes.split(' ');
	      var matches = [], flagMap = {};
	      for (var i=0; i < classes.length; i++) {
	        var klass = classes[i],
	            animationFactory = $animateProvider.$$registeredAnimations[klass];
	        if (animationFactory && !flagMap[klass]) {
	          matches.push($injector.get(animationFactory));
	          flagMap[klass] = true;
	        }
	      }
	      return matches;
	    }
	  }];
	}];

	var $$AnimateJsDriverProvider = ['$$animationProvider', function($$animationProvider) {
	  $$animationProvider.drivers.push('$$animateJsDriver');
	  this.$get = ['$$animateJs', '$$AnimateRunner', function($$animateJs, $$AnimateRunner) {
	    return function initDriverFn(animationDetails) {
	      if (animationDetails.from && animationDetails.to) {
	        var fromAnimation = prepareAnimation(animationDetails.from);
	        var toAnimation = prepareAnimation(animationDetails.to);
	        if (!fromAnimation && !toAnimation) return;

	        return {
	          start: function() {
	            var animationRunners = [];

	            if (fromAnimation) {
	              animationRunners.push(fromAnimation.start());
	            }

	            if (toAnimation) {
	              animationRunners.push(toAnimation.start());
	            }

	            $$AnimateRunner.all(animationRunners, done);

	            var runner = new $$AnimateRunner({
	              end: endFnFactory(),
	              cancel: endFnFactory()
	            });

	            return runner;

	            function endFnFactory() {
	              return function() {
	                forEach(animationRunners, function(runner) {
	                  // at this point we cannot cancel animations for groups just yet. 1.5+
	                  runner.end();
	                });
	              };
	            }

	            function done(status) {
	              runner.complete(status);
	            }
	          }
	        };
	      } else {
	        return prepareAnimation(animationDetails);
	      }
	    };

	    function prepareAnimation(animationDetails) {
	      // TODO(matsko): make sure to check for grouped animations and delegate down to normal animations
	      var element = animationDetails.element;
	      var event = animationDetails.event;
	      var options = animationDetails.options;
	      var classes = animationDetails.classes;
	      return $$animateJs(element, event, classes, options);
	    }
	  }];
	}];

	var NG_ANIMATE_ATTR_NAME = 'data-ng-animate';
	var NG_ANIMATE_PIN_DATA = '$ngAnimatePin';
	var $$AnimateQueueProvider = ['$animateProvider', function($animateProvider) {
	  var PRE_DIGEST_STATE = 1;
	  var RUNNING_STATE = 2;
	  var ONE_SPACE = ' ';

	  var rules = this.rules = {
	    skip: [],
	    cancel: [],
	    join: []
	  };

	  function makeTruthyCssClassMap(classString) {
	    if (!classString) {
	      return null;
	    }

	    var keys = classString.split(ONE_SPACE);
	    var map = Object.create(null);

	    forEach(keys, function(key) {
	      map[key] = true;
	    });
	    return map;
	  }

	  function hasMatchingClasses(newClassString, currentClassString) {
	    if (newClassString && currentClassString) {
	      var currentClassMap = makeTruthyCssClassMap(currentClassString);
	      return newClassString.split(ONE_SPACE).some(function(className) {
	        return currentClassMap[className];
	      });
	    }
	  }

	  function isAllowed(ruleType, element, currentAnimation, previousAnimation) {
	    return rules[ruleType].some(function(fn) {
	      return fn(element, currentAnimation, previousAnimation);
	    });
	  }

	  function hasAnimationClasses(animation, and) {
	    var a = (animation.addClass || '').length > 0;
	    var b = (animation.removeClass || '').length > 0;
	    return and ? a && b : a || b;
	  }

	  rules.join.push(function(element, newAnimation, currentAnimation) {
	    // if the new animation is class-based then we can just tack that on
	    return !newAnimation.structural && hasAnimationClasses(newAnimation);
	  });

	  rules.skip.push(function(element, newAnimation, currentAnimation) {
	    // there is no need to animate anything if no classes are being added and
	    // there is no structural animation that will be triggered
	    return !newAnimation.structural && !hasAnimationClasses(newAnimation);
	  });

	  rules.skip.push(function(element, newAnimation, currentAnimation) {
	    // why should we trigger a new structural animation if the element will
	    // be removed from the DOM anyway?
	    return currentAnimation.event == 'leave' && newAnimation.structural;
	  });

	  rules.skip.push(function(element, newAnimation, currentAnimation) {
	    // if there is an ongoing current animation then don't even bother running the class-based animation
	    return currentAnimation.structural && currentAnimation.state === RUNNING_STATE && !newAnimation.structural;
	  });

	  rules.cancel.push(function(element, newAnimation, currentAnimation) {
	    // there can never be two structural animations running at the same time
	    return currentAnimation.structural && newAnimation.structural;
	  });

	  rules.cancel.push(function(element, newAnimation, currentAnimation) {
	    // if the previous animation is already running, but the new animation will
	    // be triggered, but the new animation is structural
	    return currentAnimation.state === RUNNING_STATE && newAnimation.structural;
	  });

	  rules.cancel.push(function(element, newAnimation, currentAnimation) {
	    // cancel the animation if classes added / removed in both animation cancel each other out,
	    // but only if the current animation isn't structural

	    if (currentAnimation.structural) return false;

	    var nA = newAnimation.addClass;
	    var nR = newAnimation.removeClass;
	    var cA = currentAnimation.addClass;
	    var cR = currentAnimation.removeClass;

	    // early detection to save the global CPU shortage :)
	    if ((isUndefined(nA) && isUndefined(nR)) || (isUndefined(cA) && isUndefined(cR))) {
	      return false;
	    }

	    return hasMatchingClasses(nA, cR) || hasMatchingClasses(nR, cA);
	  });

	  this.$get = ['$$rAF', '$rootScope', '$rootElement', '$document', '$$HashMap',
	               '$$animation', '$$AnimateRunner', '$templateRequest', '$$jqLite', '$$forceReflow',
	       function($$rAF,   $rootScope,   $rootElement,   $document,   $$HashMap,
	                $$animation,   $$AnimateRunner,   $templateRequest,   $$jqLite,   $$forceReflow) {

	    var activeAnimationsLookup = new $$HashMap();
	    var disabledElementsLookup = new $$HashMap();
	    var animationsEnabled = null;

	    function postDigestTaskFactory() {
	      var postDigestCalled = false;
	      return function(fn) {
	        // we only issue a call to postDigest before
	        // it has first passed. This prevents any callbacks
	        // from not firing once the animation has completed
	        // since it will be out of the digest cycle.
	        if (postDigestCalled) {
	          fn();
	        } else {
	          $rootScope.$$postDigest(function() {
	            postDigestCalled = true;
	            fn();
	          });
	        }
	      };
	    }

	    // Wait until all directive and route-related templates are downloaded and
	    // compiled. The $templateRequest.totalPendingRequests variable keeps track of
	    // all of the remote templates being currently downloaded. If there are no
	    // templates currently downloading then the watcher will still fire anyway.
	    var deregisterWatch = $rootScope.$watch(
	      function() { return $templateRequest.totalPendingRequests === 0; },
	      function(isEmpty) {
	        if (!isEmpty) return;
	        deregisterWatch();

	        // Now that all templates have been downloaded, $animate will wait until
	        // the post digest queue is empty before enabling animations. By having two
	        // calls to $postDigest calls we can ensure that the flag is enabled at the
	        // very end of the post digest queue. Since all of the animations in $animate
	        // use $postDigest, it's important that the code below executes at the end.
	        // This basically means that the page is fully downloaded and compiled before
	        // any animations are triggered.
	        $rootScope.$$postDigest(function() {
	          $rootScope.$$postDigest(function() {
	            // we check for null directly in the event that the application already called
	            // .enabled() with whatever arguments that it provided it with
	            if (animationsEnabled === null) {
	              animationsEnabled = true;
	            }
	          });
	        });
	      }
	    );

	    var callbackRegistry = {};

	    // remember that the classNameFilter is set during the provider/config
	    // stage therefore we can optimize here and setup a helper function
	    var classNameFilter = $animateProvider.classNameFilter();
	    var isAnimatableClassName = !classNameFilter
	              ? function() { return true; }
	              : function(className) {
	                return classNameFilter.test(className);
	              };

	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

	    function normalizeAnimationDetails(element, animation) {
	      return mergeAnimationDetails(element, animation, {});
	    }

	    // IE9-11 has no method "contains" in SVG element and in Node.prototype. Bug #10259.
	    var contains = window.Node.prototype.contains || function(arg) {
	      // jshint bitwise: false
	      return this === arg || !!(this.compareDocumentPosition(arg) & 16);
	      // jshint bitwise: true
	    };

	    function findCallbacks(parent, element, event) {
	      var targetNode = getDomNode(element);
	      var targetParentNode = getDomNode(parent);

	      var matches = [];
	      var entries = callbackRegistry[event];
	      if (entries) {
	        forEach(entries, function(entry) {
	          if (contains.call(entry.node, targetNode)) {
	            matches.push(entry.callback);
	          } else if (event === 'leave' && contains.call(entry.node, targetParentNode)) {
	            matches.push(entry.callback);
	          }
	        });
	      }

	      return matches;
	    }

	    function filterFromRegistry(list, matchContainer, matchCallback) {
	      var containerNode = extractElementNode(matchContainer);
	      return list.filter(function(entry) {
	        var isMatch = entry.node === containerNode &&
	                        (!matchCallback || entry.callback === matchCallback);
	        return !isMatch;
	      });
	    }

	    function cleanupEventListeners(phase, element) {
	      if (phase === 'close' && !element[0].parentNode) {
	        // If the element is not attached to a parentNode, it has been removed by
	        // the domOperation, and we can safely remove the event callbacks
	        $animate.off(element);
	      }
	    }

	    var $animate = {
	      on: function(event, container, callback) {
	        var node = extractElementNode(container);
	        callbackRegistry[event] = callbackRegistry[event] || [];
	        callbackRegistry[event].push({
	          node: node,
	          callback: callback
	        });

	        // Remove the callback when the element is removed from the DOM
	        jqLite(container).on('$destroy', function() {
	          var animationDetails = activeAnimationsLookup.get(node);

	          if (!animationDetails) {
	            // If there's an animation ongoing, the callback calling code will remove
	            // the event listeners. If we'd remove here, the callbacks would be removed
	            // before the animation ends
	            $animate.off(event, container, callback);
	          }
	        });
	      },

	      off: function(event, container, callback) {
	        if (arguments.length === 1 && !angular.isString(arguments[0])) {
	          container = arguments[0];
	          for (var eventType in callbackRegistry) {
	            callbackRegistry[eventType] = filterFromRegistry(callbackRegistry[eventType], container);
	          }

	          return;
	        }

	        var entries = callbackRegistry[event];
	        if (!entries) return;

	        callbackRegistry[event] = arguments.length === 1
	            ? null
	            : filterFromRegistry(entries, container, callback);
	      },

	      pin: function(element, parentElement) {
	        assertArg(isElement(element), 'element', 'not an element');
	        assertArg(isElement(parentElement), 'parentElement', 'not an element');
	        element.data(NG_ANIMATE_PIN_DATA, parentElement);
	      },

	      push: function(element, event, options, domOperation) {
	        options = options || {};
	        options.domOperation = domOperation;
	        return queueAnimation(element, event, options);
	      },

	      // this method has four signatures:
	      //  () - global getter
	      //  (bool) - global setter
	      //  (element) - element getter
	      //  (element, bool) - element setter<F37>
	      enabled: function(element, bool) {
	        var argCount = arguments.length;

	        if (argCount === 0) {
	          // () - Global getter
	          bool = !!animationsEnabled;
	        } else {
	          var hasElement = isElement(element);

	          if (!hasElement) {
	            // (bool) - Global setter
	            bool = animationsEnabled = !!element;
	          } else {
	            var node = getDomNode(element);
	            var recordExists = disabledElementsLookup.get(node);

	            if (argCount === 1) {
	              // (element) - Element getter
	              bool = !recordExists;
	            } else {
	              // (element, bool) - Element setter
	              disabledElementsLookup.put(node, !bool);
	            }
	          }
	        }

	        return bool;
	      }
	    };

	    return $animate;

	    function queueAnimation(element, event, initialOptions) {
	      // we always make a copy of the options since
	      // there should never be any side effects on
	      // the input data when running `$animateCss`.
	      var options = copy(initialOptions);

	      var node, parent;
	      element = stripCommentsFromElement(element);
	      if (element) {
	        node = getDomNode(element);
	        parent = element.parent();
	      }

	      options = prepareAnimationOptions(options);

	      // we create a fake runner with a working promise.
	      // These methods will become available after the digest has passed
	      var runner = new $$AnimateRunner();

	      // this is used to trigger callbacks in postDigest mode
	      var runInNextPostDigestOrNow = postDigestTaskFactory();

	      if (isArray(options.addClass)) {
	        options.addClass = options.addClass.join(' ');
	      }

	      if (options.addClass && !isString(options.addClass)) {
	        options.addClass = null;
	      }

	      if (isArray(options.removeClass)) {
	        options.removeClass = options.removeClass.join(' ');
	      }

	      if (options.removeClass && !isString(options.removeClass)) {
	        options.removeClass = null;
	      }

	      if (options.from && !isObject(options.from)) {
	        options.from = null;
	      }

	      if (options.to && !isObject(options.to)) {
	        options.to = null;
	      }

	      // there are situations where a directive issues an animation for
	      // a jqLite wrapper that contains only comment nodes... If this
	      // happens then there is no way we can perform an animation
	      if (!node) {
	        close();
	        return runner;
	      }

	      var className = [node.className, options.addClass, options.removeClass].join(' ');
	      if (!isAnimatableClassName(className)) {
	        close();
	        return runner;
	      }

	      var isStructural = ['enter', 'move', 'leave'].indexOf(event) >= 0;

	      var documentHidden = $document[0].hidden;

	      // this is a hard disable of all animations for the application or on
	      // the element itself, therefore  there is no need to continue further
	      // past this point if not enabled
	      // Animations are also disabled if the document is currently hidden (page is not visible
	      // to the user), because browsers slow down or do not flush calls to requestAnimationFrame
	      var skipAnimations = !animationsEnabled || documentHidden || disabledElementsLookup.get(node);
	      var existingAnimation = (!skipAnimations && activeAnimationsLookup.get(node)) || {};
	      var hasExistingAnimation = !!existingAnimation.state;

	      // there is no point in traversing the same collection of parent ancestors if a followup
	      // animation will be run on the same element that already did all that checking work
	      if (!skipAnimations && (!hasExistingAnimation || existingAnimation.state != PRE_DIGEST_STATE)) {
	        skipAnimations = !areAnimationsAllowed(element, parent, event);
	      }

	      if (skipAnimations) {
	        // Callbacks should fire even if the document is hidden (regression fix for issue #14120)
	        if (documentHidden) notifyProgress(runner, event, 'start');
	        close();
	        if (documentHidden) notifyProgress(runner, event, 'close');
	        return runner;
	      }

	      if (isStructural) {
	        closeChildAnimations(element);
	      }

	      var newAnimation = {
	        structural: isStructural,
	        element: element,
	        event: event,
	        addClass: options.addClass,
	        removeClass: options.removeClass,
	        close: close,
	        options: options,
	        runner: runner
	      };

	      if (hasExistingAnimation) {
	        var skipAnimationFlag = isAllowed('skip', element, newAnimation, existingAnimation);
	        if (skipAnimationFlag) {
	          if (existingAnimation.state === RUNNING_STATE) {
	            close();
	            return runner;
	          } else {
	            mergeAnimationDetails(element, existingAnimation, newAnimation);
	            return existingAnimation.runner;
	          }
	        }
	        var cancelAnimationFlag = isAllowed('cancel', element, newAnimation, existingAnimation);
	        if (cancelAnimationFlag) {
	          if (existingAnimation.state === RUNNING_STATE) {
	            // this will end the animation right away and it is safe
	            // to do so since the animation is already running and the
	            // runner callback code will run in async
	            existingAnimation.runner.end();
	          } else if (existingAnimation.structural) {
	            // this means that the animation is queued into a digest, but
	            // hasn't started yet. Therefore it is safe to run the close
	            // method which will call the runner methods in async.
	            existingAnimation.close();
	          } else {
	            // this will merge the new animation options into existing animation options
	            mergeAnimationDetails(element, existingAnimation, newAnimation);

	            return existingAnimation.runner;
	          }
	        } else {
	          // a joined animation means that this animation will take over the existing one
	          // so an example would involve a leave animation taking over an enter. Then when
	          // the postDigest kicks in the enter will be ignored.
	          var joinAnimationFlag = isAllowed('join', element, newAnimation, existingAnimation);
	          if (joinAnimationFlag) {
	            if (existingAnimation.state === RUNNING_STATE) {
	              normalizeAnimationDetails(element, newAnimation);
	            } else {
	              applyGeneratedPreparationClasses(element, isStructural ? event : null, options);

	              event = newAnimation.event = existingAnimation.event;
	              options = mergeAnimationDetails(element, existingAnimation, newAnimation);

	              //we return the same runner since only the option values of this animation will
	              //be fed into the `existingAnimation`.
	              return existingAnimation.runner;
	            }
	          }
	        }
	      } else {
	        // normalization in this case means that it removes redundant CSS classes that
	        // already exist (addClass) or do not exist (removeClass) on the element
	        normalizeAnimationDetails(element, newAnimation);
	      }

	      // when the options are merged and cleaned up we may end up not having to do
	      // an animation at all, therefore we should check this before issuing a post
	      // digest callback. Structural animations will always run no matter what.
	      var isValidAnimation = newAnimation.structural;
	      if (!isValidAnimation) {
	        // animate (from/to) can be quickly checked first, otherwise we check if any classes are present
	        isValidAnimation = (newAnimation.event === 'animate' && Object.keys(newAnimation.options.to || {}).length > 0)
	                            || hasAnimationClasses(newAnimation);
	      }

	      if (!isValidAnimation) {
	        close();
	        clearElementAnimationState(element);
	        return runner;
	      }

	      // the counter keeps track of cancelled animations
	      var counter = (existingAnimation.counter || 0) + 1;
	      newAnimation.counter = counter;

	      markElementAnimationState(element, PRE_DIGEST_STATE, newAnimation);

	      $rootScope.$$postDigest(function() {
	        var animationDetails = activeAnimationsLookup.get(node);
	        var animationCancelled = !animationDetails;
	        animationDetails = animationDetails || {};

	        // if addClass/removeClass is called before something like enter then the
	        // registered parent element may not be present. The code below will ensure
	        // that a final value for parent element is obtained
	        var parentElement = element.parent() || [];

	        // animate/structural/class-based animations all have requirements. Otherwise there
	        // is no point in performing an animation. The parent node must also be set.
	        var isValidAnimation = parentElement.length > 0
	                                && (animationDetails.event === 'animate'
	                                    || animationDetails.structural
	                                    || hasAnimationClasses(animationDetails));

	        // this means that the previous animation was cancelled
	        // even if the follow-up animation is the same event
	        if (animationCancelled || animationDetails.counter !== counter || !isValidAnimation) {
	          // if another animation did not take over then we need
	          // to make sure that the domOperation and options are
	          // handled accordingly
	          if (animationCancelled) {
	            applyAnimationClasses(element, options);
	            applyAnimationStyles(element, options);
	          }

	          // if the event changed from something like enter to leave then we do
	          // it, otherwise if it's the same then the end result will be the same too
	          if (animationCancelled || (isStructural && animationDetails.event !== event)) {
	            options.domOperation();
	            runner.end();
	          }

	          // in the event that the element animation was not cancelled or a follow-up animation
	          // isn't allowed to animate from here then we need to clear the state of the element
	          // so that any future animations won't read the expired animation data.
	          if (!isValidAnimation) {
	            clearElementAnimationState(element);
	          }

	          return;
	        }

	        // this combined multiple class to addClass / removeClass into a setClass event
	        // so long as a structural event did not take over the animation
	        event = !animationDetails.structural && hasAnimationClasses(animationDetails, true)
	            ? 'setClass'
	            : animationDetails.event;

	        markElementAnimationState(element, RUNNING_STATE);
	        var realRunner = $$animation(element, event, animationDetails.options);

	        // this will update the runner's flow-control events based on
	        // the `realRunner` object.
	        runner.setHost(realRunner);
	        notifyProgress(runner, event, 'start', {});

	        realRunner.done(function(status) {
	          close(!status);
	          var animationDetails = activeAnimationsLookup.get(node);
	          if (animationDetails && animationDetails.counter === counter) {
	            clearElementAnimationState(getDomNode(element));
	          }
	          notifyProgress(runner, event, 'close', {});
	        });
	      });

	      return runner;

	      function notifyProgress(runner, event, phase, data) {
	        runInNextPostDigestOrNow(function() {
	          var callbacks = findCallbacks(parent, element, event);
	          if (callbacks.length) {
	            // do not optimize this call here to RAF because
	            // we don't know how heavy the callback code here will
	            // be and if this code is buffered then this can
	            // lead to a performance regression.
	            $$rAF(function() {
	              forEach(callbacks, function(callback) {
	                callback(element, phase, data);
	              });
	              cleanupEventListeners(phase, element);
	            });
	          } else {
	            cleanupEventListeners(phase, element);
	          }
	        });
	        runner.progress(event, phase, data);
	      }

	      function close(reject) { // jshint ignore:line
	        clearGeneratedClasses(element, options);
	        applyAnimationClasses(element, options);
	        applyAnimationStyles(element, options);
	        options.domOperation();
	        runner.complete(!reject);
	      }
	    }

	    function closeChildAnimations(element) {
	      var node = getDomNode(element);
	      var children = node.querySelectorAll('[' + NG_ANIMATE_ATTR_NAME + ']');
	      forEach(children, function(child) {
	        var state = parseInt(child.getAttribute(NG_ANIMATE_ATTR_NAME));
	        var animationDetails = activeAnimationsLookup.get(child);
	        if (animationDetails) {
	          switch (state) {
	            case RUNNING_STATE:
	              animationDetails.runner.end();
	              /* falls through */
	            case PRE_DIGEST_STATE:
	              activeAnimationsLookup.remove(child);
	              break;
	          }
	        }
	      });
	    }

	    function clearElementAnimationState(element) {
	      var node = getDomNode(element);
	      node.removeAttribute(NG_ANIMATE_ATTR_NAME);
	      activeAnimationsLookup.remove(node);
	    }

	    function isMatchingElement(nodeOrElmA, nodeOrElmB) {
	      return getDomNode(nodeOrElmA) === getDomNode(nodeOrElmB);
	    }

	    /**
	     * This fn returns false if any of the following is true:
	     * a) animations on any parent element are disabled, and animations on the element aren't explicitly allowed
	     * b) a parent element has an ongoing structural animation, and animateChildren is false
	     * c) the element is not a child of the body
	     * d) the element is not a child of the $rootElement
	     */
	    function areAnimationsAllowed(element, parentElement, event) {
	      var bodyElement = jqLite($document[0].body);
	      var bodyElementDetected = isMatchingElement(element, bodyElement) || element[0].nodeName === 'HTML';
	      var rootElementDetected = isMatchingElement(element, $rootElement);
	      var parentAnimationDetected = false;
	      var animateChildren;
	      var elementDisabled = disabledElementsLookup.get(getDomNode(element));

	      var parentHost = jqLite.data(element[0], NG_ANIMATE_PIN_DATA);
	      if (parentHost) {
	        parentElement = parentHost;
	      }

	      parentElement = getDomNode(parentElement);

	      while (parentElement) {
	        if (!rootElementDetected) {
	          // angular doesn't want to attempt to animate elements outside of the application
	          // therefore we need to ensure that the rootElement is an ancestor of the current element
	          rootElementDetected = isMatchingElement(parentElement, $rootElement);
	        }

	        if (parentElement.nodeType !== ELEMENT_NODE) {
	          // no point in inspecting the #document element
	          break;
	        }

	        var details = activeAnimationsLookup.get(parentElement) || {};
	        // either an enter, leave or move animation will commence
	        // therefore we can't allow any animations to take place
	        // but if a parent animation is class-based then that's ok
	        if (!parentAnimationDetected) {
	          var parentElementDisabled = disabledElementsLookup.get(parentElement);

	          if (parentElementDisabled === true && elementDisabled !== false) {
	            // disable animations if the user hasn't explicitly enabled animations on the
	            // current element
	            elementDisabled = true;
	            // element is disabled via parent element, no need to check anything else
	            break;
	          } else if (parentElementDisabled === false) {
	            elementDisabled = false;
	          }
	          parentAnimationDetected = details.structural;
	        }

	        if (isUndefined(animateChildren) || animateChildren === true) {
	          var value = jqLite.data(parentElement, NG_ANIMATE_CHILDREN_DATA);
	          if (isDefined(value)) {
	            animateChildren = value;
	          }
	        }

	        // there is no need to continue traversing at this point
	        if (parentAnimationDetected && animateChildren === false) break;

	        if (!bodyElementDetected) {
	          // we also need to ensure that the element is or will be a part of the body element
	          // otherwise it is pointless to even issue an animation to be rendered
	          bodyElementDetected = isMatchingElement(parentElement, bodyElement);
	        }

	        if (bodyElementDetected && rootElementDetected) {
	          // If both body and root have been found, any other checks are pointless,
	          // as no animation data should live outside the application
	          break;
	        }

	        if (!rootElementDetected) {
	          // If no rootElement is detected, check if the parentElement is pinned to another element
	          parentHost = jqLite.data(parentElement, NG_ANIMATE_PIN_DATA);
	          if (parentHost) {
	            // The pin target element becomes the next parent element
	            parentElement = getDomNode(parentHost);
	            continue;
	          }
	        }

	        parentElement = parentElement.parentNode;
	      }

	      var allowAnimation = (!parentAnimationDetected || animateChildren) && elementDisabled !== true;
	      return allowAnimation && rootElementDetected && bodyElementDetected;
	    }

	    function markElementAnimationState(element, state, details) {
	      details = details || {};
	      details.state = state;

	      var node = getDomNode(element);
	      node.setAttribute(NG_ANIMATE_ATTR_NAME, state);

	      var oldValue = activeAnimationsLookup.get(node);
	      var newValue = oldValue
	          ? extend(oldValue, details)
	          : details;
	      activeAnimationsLookup.put(node, newValue);
	    }
	  }];
	}];

	var $$AnimationProvider = ['$animateProvider', function($animateProvider) {
	  var NG_ANIMATE_REF_ATTR = 'ng-animate-ref';

	  var drivers = this.drivers = [];

	  var RUNNER_STORAGE_KEY = '$$animationRunner';

	  function setRunner(element, runner) {
	    element.data(RUNNER_STORAGE_KEY, runner);
	  }

	  function removeRunner(element) {
	    element.removeData(RUNNER_STORAGE_KEY);
	  }

	  function getRunner(element) {
	    return element.data(RUNNER_STORAGE_KEY);
	  }

	  this.$get = ['$$jqLite', '$rootScope', '$injector', '$$AnimateRunner', '$$HashMap', '$$rAFScheduler',
	       function($$jqLite,   $rootScope,   $injector,   $$AnimateRunner,   $$HashMap,   $$rAFScheduler) {

	    var animationQueue = [];
	    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

	    function sortAnimations(animations) {
	      var tree = { children: [] };
	      var i, lookup = new $$HashMap();

	      // this is done first beforehand so that the hashmap
	      // is filled with a list of the elements that will be animated
	      for (i = 0; i < animations.length; i++) {
	        var animation = animations[i];
	        lookup.put(animation.domNode, animations[i] = {
	          domNode: animation.domNode,
	          fn: animation.fn,
	          children: []
	        });
	      }

	      for (i = 0; i < animations.length; i++) {
	        processNode(animations[i]);
	      }

	      return flatten(tree);

	      function processNode(entry) {
	        if (entry.processed) return entry;
	        entry.processed = true;

	        var elementNode = entry.domNode;
	        var parentNode = elementNode.parentNode;
	        lookup.put(elementNode, entry);

	        var parentEntry;
	        while (parentNode) {
	          parentEntry = lookup.get(parentNode);
	          if (parentEntry) {
	            if (!parentEntry.processed) {
	              parentEntry = processNode(parentEntry);
	            }
	            break;
	          }
	          parentNode = parentNode.parentNode;
	        }

	        (parentEntry || tree).children.push(entry);
	        return entry;
	      }

	      function flatten(tree) {
	        var result = [];
	        var queue = [];
	        var i;

	        for (i = 0; i < tree.children.length; i++) {
	          queue.push(tree.children[i]);
	        }

	        var remainingLevelEntries = queue.length;
	        var nextLevelEntries = 0;
	        var row = [];

	        for (i = 0; i < queue.length; i++) {
	          var entry = queue[i];
	          if (remainingLevelEntries <= 0) {
	            remainingLevelEntries = nextLevelEntries;
	            nextLevelEntries = 0;
	            result.push(row);
	            row = [];
	          }
	          row.push(entry.fn);
	          entry.children.forEach(function(childEntry) {
	            nextLevelEntries++;
	            queue.push(childEntry);
	          });
	          remainingLevelEntries--;
	        }

	        if (row.length) {
	          result.push(row);
	        }

	        return result;
	      }
	    }

	    // TODO(matsko): document the signature in a better way
	    return function(element, event, options) {
	      options = prepareAnimationOptions(options);
	      var isStructural = ['enter', 'move', 'leave'].indexOf(event) >= 0;

	      // there is no animation at the current moment, however
	      // these runner methods will get later updated with the
	      // methods leading into the driver's end/cancel methods
	      // for now they just stop the animation from starting
	      var runner = new $$AnimateRunner({
	        end: function() { close(); },
	        cancel: function() { close(true); }
	      });

	      if (!drivers.length) {
	        close();
	        return runner;
	      }

	      setRunner(element, runner);

	      var classes = mergeClasses(element.attr('class'), mergeClasses(options.addClass, options.removeClass));
	      var tempClasses = options.tempClasses;
	      if (tempClasses) {
	        classes += ' ' + tempClasses;
	        options.tempClasses = null;
	      }

	      var prepareClassName;
	      if (isStructural) {
	        prepareClassName = 'ng-' + event + PREPARE_CLASS_SUFFIX;
	        $$jqLite.addClass(element, prepareClassName);
	      }

	      animationQueue.push({
	        // this data is used by the postDigest code and passed into
	        // the driver step function
	        element: element,
	        classes: classes,
	        event: event,
	        structural: isStructural,
	        options: options,
	        beforeStart: beforeStart,
	        close: close
	      });

	      element.on('$destroy', handleDestroyedElement);

	      // we only want there to be one function called within the post digest
	      // block. This way we can group animations for all the animations that
	      // were apart of the same postDigest flush call.
	      if (animationQueue.length > 1) return runner;

	      $rootScope.$$postDigest(function() {
	        var animations = [];
	        forEach(animationQueue, function(entry) {
	          // the element was destroyed early on which removed the runner
	          // form its storage. This means we can't animate this element
	          // at all and it already has been closed due to destruction.
	          if (getRunner(entry.element)) {
	            animations.push(entry);
	          } else {
	            entry.close();
	          }
	        });

	        // now any future animations will be in another postDigest
	        animationQueue.length = 0;

	        var groupedAnimations = groupAnimations(animations);
	        var toBeSortedAnimations = [];

	        forEach(groupedAnimations, function(animationEntry) {
	          toBeSortedAnimations.push({
	            domNode: getDomNode(animationEntry.from ? animationEntry.from.element : animationEntry.element),
	            fn: function triggerAnimationStart() {
	              // it's important that we apply the `ng-animate` CSS class and the
	              // temporary classes before we do any driver invoking since these
	              // CSS classes may be required for proper CSS detection.
	              animationEntry.beforeStart();

	              var startAnimationFn, closeFn = animationEntry.close;

	              // in the event that the element was removed before the digest runs or
	              // during the RAF sequencing then we should not trigger the animation.
	              var targetElement = animationEntry.anchors
	                  ? (animationEntry.from.element || animationEntry.to.element)
	                  : animationEntry.element;

	              if (getRunner(targetElement)) {
	                var operation = invokeFirstDriver(animationEntry);
	                if (operation) {
	                  startAnimationFn = operation.start;
	                }
	              }

	              if (!startAnimationFn) {
	                closeFn();
	              } else {
	                var animationRunner = startAnimationFn();
	                animationRunner.done(function(status) {
	                  closeFn(!status);
	                });
	                updateAnimationRunners(animationEntry, animationRunner);
	              }
	            }
	          });
	        });

	        // we need to sort each of the animations in order of parent to child
	        // relationships. This ensures that the child classes are applied at the
	        // right time.
	        $$rAFScheduler(sortAnimations(toBeSortedAnimations));
	      });

	      return runner;

	      // TODO(matsko): change to reference nodes
	      function getAnchorNodes(node) {
	        var SELECTOR = '[' + NG_ANIMATE_REF_ATTR + ']';
	        var items = node.hasAttribute(NG_ANIMATE_REF_ATTR)
	              ? [node]
	              : node.querySelectorAll(SELECTOR);
	        var anchors = [];
	        forEach(items, function(node) {
	          var attr = node.getAttribute(NG_ANIMATE_REF_ATTR);
	          if (attr && attr.length) {
	            anchors.push(node);
	          }
	        });
	        return anchors;
	      }

	      function groupAnimations(animations) {
	        var preparedAnimations = [];
	        var refLookup = {};
	        forEach(animations, function(animation, index) {
	          var element = animation.element;
	          var node = getDomNode(element);
	          var event = animation.event;
	          var enterOrMove = ['enter', 'move'].indexOf(event) >= 0;
	          var anchorNodes = animation.structural ? getAnchorNodes(node) : [];

	          if (anchorNodes.length) {
	            var direction = enterOrMove ? 'to' : 'from';

	            forEach(anchorNodes, function(anchor) {
	              var key = anchor.getAttribute(NG_ANIMATE_REF_ATTR);
	              refLookup[key] = refLookup[key] || {};
	              refLookup[key][direction] = {
	                animationID: index,
	                element: jqLite(anchor)
	              };
	            });
	          } else {
	            preparedAnimations.push(animation);
	          }
	        });

	        var usedIndicesLookup = {};
	        var anchorGroups = {};
	        forEach(refLookup, function(operations, key) {
	          var from = operations.from;
	          var to = operations.to;

	          if (!from || !to) {
	            // only one of these is set therefore we can't have an
	            // anchor animation since all three pieces are required
	            var index = from ? from.animationID : to.animationID;
	            var indexKey = index.toString();
	            if (!usedIndicesLookup[indexKey]) {
	              usedIndicesLookup[indexKey] = true;
	              preparedAnimations.push(animations[index]);
	            }
	            return;
	          }

	          var fromAnimation = animations[from.animationID];
	          var toAnimation = animations[to.animationID];
	          var lookupKey = from.animationID.toString();
	          if (!anchorGroups[lookupKey]) {
	            var group = anchorGroups[lookupKey] = {
	              structural: true,
	              beforeStart: function() {
	                fromAnimation.beforeStart();
	                toAnimation.beforeStart();
	              },
	              close: function() {
	                fromAnimation.close();
	                toAnimation.close();
	              },
	              classes: cssClassesIntersection(fromAnimation.classes, toAnimation.classes),
	              from: fromAnimation,
	              to: toAnimation,
	              anchors: [] // TODO(matsko): change to reference nodes
	            };

	            // the anchor animations require that the from and to elements both have at least
	            // one shared CSS class which effectively marries the two elements together to use
	            // the same animation driver and to properly sequence the anchor animation.
	            if (group.classes.length) {
	              preparedAnimations.push(group);
	            } else {
	              preparedAnimations.push(fromAnimation);
	              preparedAnimations.push(toAnimation);
	            }
	          }

	          anchorGroups[lookupKey].anchors.push({
	            'out': from.element, 'in': to.element
	          });
	        });

	        return preparedAnimations;
	      }

	      function cssClassesIntersection(a,b) {
	        a = a.split(' ');
	        b = b.split(' ');
	        var matches = [];

	        for (var i = 0; i < a.length; i++) {
	          var aa = a[i];
	          if (aa.substring(0,3) === 'ng-') continue;

	          for (var j = 0; j < b.length; j++) {
	            if (aa === b[j]) {
	              matches.push(aa);
	              break;
	            }
	          }
	        }

	        return matches.join(' ');
	      }

	      function invokeFirstDriver(animationDetails) {
	        // we loop in reverse order since the more general drivers (like CSS and JS)
	        // may attempt more elements, but custom drivers are more particular
	        for (var i = drivers.length - 1; i >= 0; i--) {
	          var driverName = drivers[i];
	          if (!$injector.has(driverName)) continue; // TODO(matsko): remove this check

	          var factory = $injector.get(driverName);
	          var driver = factory(animationDetails);
	          if (driver) {
	            return driver;
	          }
	        }
	      }

	      function beforeStart() {
	        element.addClass(NG_ANIMATE_CLASSNAME);
	        if (tempClasses) {
	          $$jqLite.addClass(element, tempClasses);
	        }
	        if (prepareClassName) {
	          $$jqLite.removeClass(element, prepareClassName);
	          prepareClassName = null;
	        }
	      }

	      function updateAnimationRunners(animation, newRunner) {
	        if (animation.from && animation.to) {
	          update(animation.from.element);
	          update(animation.to.element);
	        } else {
	          update(animation.element);
	        }

	        function update(element) {
	          getRunner(element).setHost(newRunner);
	        }
	      }

	      function handleDestroyedElement() {
	        var runner = getRunner(element);
	        if (runner && (event !== 'leave' || !options.$$domOperationFired)) {
	          runner.end();
	        }
	      }

	      function close(rejected) { // jshint ignore:line
	        element.off('$destroy', handleDestroyedElement);
	        removeRunner(element);

	        applyAnimationClasses(element, options);
	        applyAnimationStyles(element, options);
	        options.domOperation();

	        if (tempClasses) {
	          $$jqLite.removeClass(element, tempClasses);
	        }

	        element.removeClass(NG_ANIMATE_CLASSNAME);
	        runner.complete(!rejected);
	      }
	    };
	  }];
	}];

	/**
	 * @ngdoc directive
	 * @name ngAnimateSwap
	 * @restrict A
	 * @scope
	 *
	 * @description
	 *
	 * ngAnimateSwap is a animation-oriented directive that allows for the container to
	 * be removed and entered in whenever the associated expression changes. A
	 * common usecase for this directive is a rotating banner or slider component which
	 * contains one image being present at a time. When the active image changes
	 * then the old image will perform a `leave` animation and the new element
	 * will be inserted via an `enter` animation.
	 *
	 * @animations
	 * | Animation                        | Occurs                               |
	 * |----------------------------------|--------------------------------------|
	 * | {@link ng.$animate#enter enter}  | when the new element is inserted to the DOM  |
	 * | {@link ng.$animate#leave leave}  | when the old element is removed from the DOM |
	 *
	 * @example
	 * <example name="ngAnimateSwap-directive" module="ngAnimateSwapExample"
	 *          deps="angular-animate.js"
	 *          animations="true" fixBase="true">
	 *   <file name="index.html">
	 *     <div class="container" ng-controller="AppCtrl">
	 *       <div ng-animate-swap="number" class="cell swap-animation" ng-class="colorClass(number)">
	 *         {{ number }}
	 *       </div>
	 *     </div>
	 *   </file>
	 *   <file name="script.js">
	 *     angular.module('ngAnimateSwapExample', ['ngAnimate'])
	 *       .controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
	 *         $scope.number = 0;
	 *         $interval(function() {
	 *           $scope.number++;
	 *         }, 1000);
	 *
	 *         var colors = ['red','blue','green','yellow','orange'];
	 *         $scope.colorClass = function(number) {
	 *           return colors[number % colors.length];
	 *         };
	 *       }]);
	 *   </file>
	 *  <file name="animations.css">
	 *  .container {
	 *    height:250px;
	 *    width:250px;
	 *    position:relative;
	 *    overflow:hidden;
	 *    border:2px solid black;
	 *  }
	 *  .container .cell {
	 *    font-size:150px;
	 *    text-align:center;
	 *    line-height:250px;
	 *    position:absolute;
	 *    top:0;
	 *    left:0;
	 *    right:0;
	 *    border-bottom:2px solid black;
	 *  }
	 *  .swap-animation.ng-enter, .swap-animation.ng-leave {
	 *    transition:0.5s linear all;
	 *  }
	 *  .swap-animation.ng-enter {
	 *    top:-250px;
	 *  }
	 *  .swap-animation.ng-enter-active {
	 *    top:0px;
	 *  }
	 *  .swap-animation.ng-leave {
	 *    top:0px;
	 *  }
	 *  .swap-animation.ng-leave-active {
	 *    top:250px;
	 *  }
	 *  .red { background:red; }
	 *  .green { background:green; }
	 *  .blue { background:blue; }
	 *  .yellow { background:yellow; }
	 *  .orange { background:orange; }
	 *  </file>
	 * </example>
	 */
	var ngAnimateSwapDirective = ['$animate', '$rootScope', function($animate, $rootScope) {
	  return {
	    restrict: 'A',
	    transclude: 'element',
	    terminal: true,
	    priority: 600, // we use 600 here to ensure that the directive is caught before others
	    link: function(scope, $element, attrs, ctrl, $transclude) {
	      var previousElement, previousScope;
	      scope.$watchCollection(attrs.ngAnimateSwap || attrs['for'], function(value) {
	        if (previousElement) {
	          $animate.leave(previousElement);
	        }
	        if (previousScope) {
	          previousScope.$destroy();
	          previousScope = null;
	        }
	        if (value || value === 0) {
	          previousScope = scope.$new();
	          $transclude(previousScope, function(element) {
	            previousElement = element;
	            $animate.enter(element, null, $element);
	          });
	        }
	      });
	    }
	  };
	}];

	/* global angularAnimateModule: true,

	   ngAnimateSwapDirective,
	   $$AnimateAsyncRunFactory,
	   $$rAFSchedulerFactory,
	   $$AnimateChildrenDirective,
	   $$AnimateQueueProvider,
	   $$AnimationProvider,
	   $AnimateCssProvider,
	   $$AnimateCssDriverProvider,
	   $$AnimateJsProvider,
	   $$AnimateJsDriverProvider,
	*/

	/**
	 * @ngdoc module
	 * @name ngAnimate
	 * @description
	 *
	 * The `ngAnimate` module provides support for CSS-based animations (keyframes and transitions) as well as JavaScript-based animations via
	 * callback hooks. Animations are not enabled by default, however, by including `ngAnimate` the animation hooks are enabled for an Angular app.
	 *
	 * <div doc-module-components="ngAnimate"></div>
	 *
	 * # Usage
	 * Simply put, there are two ways to make use of animations when ngAnimate is used: by using **CSS** and **JavaScript**. The former works purely based
	 * using CSS (by using matching CSS selectors/styles) and the latter triggers animations that are registered via `module.animation()`. For
	 * both CSS and JS animations the sole requirement is to have a matching `CSS class` that exists both in the registered animation and within
	 * the HTML element that the animation will be triggered on.
	 *
	 * ## Directive Support
	 * The following directives are "animation aware":
	 *
	 * | Directive                                                                                                | Supported Animations                                                     |
	 * |----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
	 * | {@link ng.directive:ngRepeat#animations ngRepeat}                                                        | enter, leave and move                                                    |
	 * | {@link ngRoute.directive:ngView#animations ngView}                                                       | enter and leave                                                          |
	 * | {@link ng.directive:ngInclude#animations ngInclude}                                                      | enter and leave                                                          |
	 * | {@link ng.directive:ngSwitch#animations ngSwitch}                                                        | enter and leave                                                          |
	 * | {@link ng.directive:ngIf#animations ngIf}                                                                | enter and leave                                                          |
	 * | {@link ng.directive:ngClass#animations ngClass}                                                          | add and remove (the CSS class(es) present)                               |
	 * | {@link ng.directive:ngShow#animations ngShow} & {@link ng.directive:ngHide#animations ngHide}            | add and remove (the ng-hide class value)                                 |
	 * | {@link ng.directive:form#animation-hooks form} & {@link ng.directive:ngModel#animation-hooks ngModel}    | add and remove (dirty, pristine, valid, invalid & all other validations) |
	 * | {@link module:ngMessages#animations ngMessages}                                                          | add and remove (ng-active & ng-inactive)                                 |
	 * | {@link module:ngMessages#animations ngMessage}                                                           | enter and leave                                                          |
	 *
	 * (More information can be found by visiting each the documentation associated with each directive.)
	 *
	 * ## CSS-based Animations
	 *
	 * CSS-based animations with ngAnimate are unique since they require no JavaScript code at all. By using a CSS class that we reference between our HTML
	 * and CSS code we can create an animation that will be picked up by Angular when an the underlying directive performs an operation.
	 *
	 * The example below shows how an `enter` animation can be made possible on an element using `ng-if`:
	 *
	 * ```html
	 * <div ng-if="bool" class="fade">
	 *    Fade me in out
	 * </div>
	 * <button ng-click="bool=true">Fade In!</button>
	 * <button ng-click="bool=false">Fade Out!</button>
	 * ```
	 *
	 * Notice the CSS class **fade**? We can now create the CSS transition code that references this class:
	 *
	 * ```css
	 * /&#42; The starting CSS styles for the enter animation &#42;/
	 * .fade.ng-enter {
	 *   transition:0.5s linear all;
	 *   opacity:0;
	 * }
	 *
	 * /&#42; The finishing CSS styles for the enter animation &#42;/
	 * .fade.ng-enter.ng-enter-active {
	 *   opacity:1;
	 * }
	 * ```
	 *
	 * The key thing to remember here is that, depending on the animation event (which each of the directives above trigger depending on what's going on) two
	 * generated CSS classes will be applied to the element; in the example above we have `.ng-enter` and `.ng-enter-active`. For CSS transitions, the transition
	 * code **must** be defined within the starting CSS class (in this case `.ng-enter`). The destination class is what the transition will animate towards.
	 *
	 * If for example we wanted to create animations for `leave` and `move` (ngRepeat triggers move) then we can do so using the same CSS naming conventions:
	 *
	 * ```css
	 * /&#42; now the element will fade out before it is removed from the DOM &#42;/
	 * .fade.ng-leave {
	 *   transition:0.5s linear all;
	 *   opacity:1;
	 * }
	 * .fade.ng-leave.ng-leave-active {
	 *   opacity:0;
	 * }
	 * ```
	 *
	 * We can also make use of **CSS Keyframes** by referencing the keyframe animation within the starting CSS class:
	 *
	 * ```css
	 * /&#42; there is no need to define anything inside of the destination
	 * CSS class since the keyframe will take charge of the animation &#42;/
	 * .fade.ng-leave {
	 *   animation: my_fade_animation 0.5s linear;
	 *   -webkit-animation: my_fade_animation 0.5s linear;
	 * }
	 *
	 * @keyframes my_fade_animation {
	 *   from { opacity:1; }
	 *   to { opacity:0; }
	 * }
	 *
	 * @-webkit-keyframes my_fade_animation {
	 *   from { opacity:1; }
	 *   to { opacity:0; }
	 * }
	 * ```
	 *
	 * Feel free also mix transitions and keyframes together as well as any other CSS classes on the same element.
	 *
	 * ### CSS Class-based Animations
	 *
	 * Class-based animations (animations that are triggered via `ngClass`, `ngShow`, `ngHide` and some other directives) have a slightly different
	 * naming convention. Class-based animations are basic enough that a standard transition or keyframe can be referenced on the class being added
	 * and removed.
	 *
	 * For example if we wanted to do a CSS animation for `ngHide` then we place an animation on the `.ng-hide` CSS class:
	 *
	 * ```html
	 * <div ng-show="bool" class="fade">
	 *   Show and hide me
	 * </div>
	 * <button ng-click="bool=!bool">Toggle</button>
	 *
	 * <style>
	 * .fade.ng-hide {
	 *   transition:0.5s linear all;
	 *   opacity:0;
	 * }
	 * </style>
	 * ```
	 *
	 * All that is going on here with ngShow/ngHide behind the scenes is the `.ng-hide` class is added/removed (when the hidden state is valid). Since
	 * ngShow and ngHide are animation aware then we can match up a transition and ngAnimate handles the rest.
	 *
	 * In addition the addition and removal of the CSS class, ngAnimate also provides two helper methods that we can use to further decorate the animation
	 * with CSS styles.
	 *
	 * ```html
	 * <div ng-class="{on:onOff}" class="highlight">
	 *   Highlight this box
	 * </div>
	 * <button ng-click="onOff=!onOff">Toggle</button>
	 *
	 * <style>
	 * .highlight {
	 *   transition:0.5s linear all;
	 * }
	 * .highlight.on-add {
	 *   background:white;
	 * }
	 * .highlight.on {
	 *   background:yellow;
	 * }
	 * .highlight.on-remove {
	 *   background:black;
	 * }
	 * </style>
	 * ```
	 *
	 * We can also make use of CSS keyframes by placing them within the CSS classes.
	 *
	 *
	 * ### CSS Staggering Animations
	 * A Staggering animation is a collection of animations that are issued with a slight delay in between each successive operation resulting in a
	 * curtain-like effect. The ngAnimate module (versions >=1.2) supports staggering animations and the stagger effect can be
	 * performed by creating a **ng-EVENT-stagger** CSS class and attaching that class to the base CSS class used for
	 * the animation. The style property expected within the stagger class can either be a **transition-delay** or an
	 * **animation-delay** property (or both if your animation contains both transitions and keyframe animations).
	 *
	 * ```css
	 * .my-animation.ng-enter {
	 *   /&#42; standard transition code &#42;/
	 *   transition: 1s linear all;
	 *   opacity:0;
	 * }
	 * .my-animation.ng-enter-stagger {
	 *   /&#42; this will have a 100ms delay between each successive leave animation &#42;/
	 *   transition-delay: 0.1s;
	 *
	 *   /&#42; As of 1.4.4, this must always be set: it signals ngAnimate
	 *     to not accidentally inherit a delay property from another CSS class &#42;/
	 *   transition-duration: 0s;
	 * }
	 * .my-animation.ng-enter.ng-enter-active {
	 *   /&#42; standard transition styles &#42;/
	 *   opacity:1;
	 * }
	 * ```
	 *
	 * Staggering animations work by default in ngRepeat (so long as the CSS class is defined). Outside of ngRepeat, to use staggering animations
	 * on your own, they can be triggered by firing multiple calls to the same event on $animate. However, the restrictions surrounding this
	 * are that each of the elements must have the same CSS className value as well as the same parent element. A stagger operation
	 * will also be reset if one or more animation frames have passed since the multiple calls to `$animate` were fired.
	 *
	 * The following code will issue the **ng-leave-stagger** event on the element provided:
	 *
	 * ```js
	 * var kids = parent.children();
	 *
	 * $animate.leave(kids[0]); //stagger index=0
	 * $animate.leave(kids[1]); //stagger index=1
	 * $animate.leave(kids[2]); //stagger index=2
	 * $animate.leave(kids[3]); //stagger index=3
	 * $animate.leave(kids[4]); //stagger index=4
	 *
	 * window.requestAnimationFrame(function() {
	 *   //stagger has reset itself
	 *   $animate.leave(kids[5]); //stagger index=0
	 *   $animate.leave(kids[6]); //stagger index=1
	 *
	 *   $scope.$digest();
	 * });
	 * ```
	 *
	 * Stagger animations are currently only supported within CSS-defined animations.
	 *
	 * ### The `ng-animate` CSS class
	 *
	 * When ngAnimate is animating an element it will apply the `ng-animate` CSS class to the element for the duration of the animation.
	 * This is a temporary CSS class and it will be removed once the animation is over (for both JavaScript and CSS-based animations).
	 *
	 * Therefore, animations can be applied to an element using this temporary class directly via CSS.
	 *
	 * ```css
	 * .zipper.ng-animate {
	 *   transition:0.5s linear all;
	 * }
	 * .zipper.ng-enter {
	 *   opacity:0;
	 * }
	 * .zipper.ng-enter.ng-enter-active {
	 *   opacity:1;
	 * }
	 * .zipper.ng-leave {
	 *   opacity:1;
	 * }
	 * .zipper.ng-leave.ng-leave-active {
	 *   opacity:0;
	 * }
	 * ```
	 *
	 * (Note that the `ng-animate` CSS class is reserved and it cannot be applied on an element directly since ngAnimate will always remove
	 * the CSS class once an animation has completed.)
	 *
	 *
	 * ### The `ng-[event]-prepare` class
	 *
	 * This is a special class that can be used to prevent unwanted flickering / flash of content before
	 * the actual animation starts. The class is added as soon as an animation is initialized, but removed
	 * before the actual animation starts (after waiting for a $digest).
	 * It is also only added for *structural* animations (`enter`, `move`, and `leave`).
	 *
	 * In practice, flickering can appear when nesting elements with structural animations such as `ngIf`
	 * into elements that have class-based animations such as `ngClass`.
	 *
	 * ```html
	 * <div ng-class="{red: myProp}">
	 *   <div ng-class="{blue: myProp}">
	 *     <div class="message" ng-if="myProp"></div>
	 *   </div>
	 * </div>
	 * ```
	 *
	 * It is possible that during the `enter` animation, the `.message` div will be briefly visible before it starts animating.
	 * In that case, you can add styles to the CSS that make sure the element stays hidden before the animation starts:
	 *
	 * ```css
	 * .message.ng-enter-prepare {
	 *   opacity: 0;
	 * }
	 *
	 * ```
	 *
	 * ## JavaScript-based Animations
	 *
	 * ngAnimate also allows for animations to be consumed by JavaScript code. The approach is similar to CSS-based animations (where there is a shared
	 * CSS class that is referenced in our HTML code) but in addition we need to register the JavaScript animation on the module. By making use of the
	 * `module.animation()` module function we can register the animation.
	 *
	 * Let's see an example of a enter/leave animation using `ngRepeat`:
	 *
	 * ```html
	 * <div ng-repeat="item in items" class="slide">
	 *   {{ item }}
	 * </div>
	 * ```
	 *
	 * See the **slide** CSS class? Let's use that class to define an animation that we'll structure in our module code by using `module.animation`:
	 *
	 * ```js
	 * myModule.animation('.slide', [function() {
	 *   return {
	 *     // make note that other events (like addClass/removeClass)
	 *     // have different function input parameters
	 *     enter: function(element, doneFn) {
	 *       jQuery(element).fadeIn(1000, doneFn);
	 *
	 *       // remember to call doneFn so that angular
	 *       // knows that the animation has concluded
	 *     },
	 *
	 *     move: function(element, doneFn) {
	 *       jQuery(element).fadeIn(1000, doneFn);
	 *     },
	 *
	 *     leave: function(element, doneFn) {
	 *       jQuery(element).fadeOut(1000, doneFn);
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * The nice thing about JS-based animations is that we can inject other services and make use of advanced animation libraries such as
	 * greensock.js and velocity.js.
	 *
	 * If our animation code class-based (meaning that something like `ngClass`, `ngHide` and `ngShow` triggers it) then we can still define
	 * our animations inside of the same registered animation, however, the function input arguments are a bit different:
	 *
	 * ```html
	 * <div ng-class="color" class="colorful">
	 *   this box is moody
	 * </div>
	 * <button ng-click="color='red'">Change to red</button>
	 * <button ng-click="color='blue'">Change to blue</button>
	 * <button ng-click="color='green'">Change to green</button>
	 * ```
	 *
	 * ```js
	 * myModule.animation('.colorful', [function() {
	 *   return {
	 *     addClass: function(element, className, doneFn) {
	 *       // do some cool animation and call the doneFn
	 *     },
	 *     removeClass: function(element, className, doneFn) {
	 *       // do some cool animation and call the doneFn
	 *     },
	 *     setClass: function(element, addedClass, removedClass, doneFn) {
	 *       // do some cool animation and call the doneFn
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * ## CSS + JS Animations Together
	 *
	 * AngularJS 1.4 and higher has taken steps to make the amalgamation of CSS and JS animations more flexible. However, unlike earlier versions of Angular,
	 * defining CSS and JS animations to work off of the same CSS class will not work anymore. Therefore the example below will only result in **JS animations taking
	 * charge of the animation**:
	 *
	 * ```html
	 * <div ng-if="bool" class="slide">
	 *   Slide in and out
	 * </div>
	 * ```
	 *
	 * ```js
	 * myModule.animation('.slide', [function() {
	 *   return {
	 *     enter: function(element, doneFn) {
	 *       jQuery(element).slideIn(1000, doneFn);
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * ```css
	 * .slide.ng-enter {
	 *   transition:0.5s linear all;
	 *   transform:translateY(-100px);
	 * }
	 * .slide.ng-enter.ng-enter-active {
	 *   transform:translateY(0);
	 * }
	 * ```
	 *
	 * Does this mean that CSS and JS animations cannot be used together? Do JS-based animations always have higher priority? We can make up for the
	 * lack of CSS animations by using the `$animateCss` service to trigger our own tweaked-out, CSS-based animations directly from
	 * our own JS-based animation code:
	 *
	 * ```js
	 * myModule.animation('.slide', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element) {
	*        // this will trigger `.slide.ng-enter` and `.slide.ng-enter-active`.
	 *       return $animateCss(element, {
	 *         event: 'enter',
	 *         structural: true
	 *       });
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * The nice thing here is that we can save bandwidth by sticking to our CSS-based animation code and we don't need to rely on a 3rd-party animation framework.
	 *
	 * The `$animateCss` service is very powerful since we can feed in all kinds of extra properties that will be evaluated and fed into a CSS transition or
	 * keyframe animation. For example if we wanted to animate the height of an element while adding and removing classes then we can do so by providing that
	 * data into `$animateCss` directly:
	 *
	 * ```js
	 * myModule.animation('.slide', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element) {
	 *       return $animateCss(element, {
	 *         event: 'enter',
	 *         structural: true,
	 *         addClass: 'maroon-setting',
	 *         from: { height:0 },
	 *         to: { height: 200 }
	 *       });
	 *     }
	 *   }
	 * }]);
	 * ```
	 *
	 * Now we can fill in the rest via our transition CSS code:
	 *
	 * ```css
	 * /&#42; the transition tells ngAnimate to make the animation happen &#42;/
	 * .slide.ng-enter { transition:0.5s linear all; }
	 *
	 * /&#42; this extra CSS class will be absorbed into the transition
	 * since the $animateCss code is adding the class &#42;/
	 * .maroon-setting { background:red; }
	 * ```
	 *
	 * And `$animateCss` will figure out the rest. Just make sure to have the `done()` callback fire the `doneFn` function to signal when the animation is over.
	 *
	 * To learn more about what's possible be sure to visit the {@link ngAnimate.$animateCss $animateCss service}.
	 *
	 * ## Animation Anchoring (via `ng-animate-ref`)
	 *
	 * ngAnimate in AngularJS 1.4 comes packed with the ability to cross-animate elements between
	 * structural areas of an application (like views) by pairing up elements using an attribute
	 * called `ng-animate-ref`.
	 *
	 * Let's say for example we have two views that are managed by `ng-view` and we want to show
	 * that there is a relationship between two components situated in within these views. By using the
	 * `ng-animate-ref` attribute we can identify that the two components are paired together and we
	 * can then attach an animation, which is triggered when the view changes.
	 *
	 * Say for example we have the following template code:
	 *
	 * ```html
	 * <!-- index.html -->
	 * <div ng-view class="view-animation">
	 * </div>
	 *
	 * <!-- home.html -->
	 * <a href="#/banner-page">
	 *   <img src="./banner.jpg" class="banner" ng-animate-ref="banner">
	 * </a>
	 *
	 * <!-- banner-page.html -->
	 * <img src="./banner.jpg" class="banner" ng-animate-ref="banner">
	 * ```
	 *
	 * Now, when the view changes (once the link is clicked), ngAnimate will examine the
	 * HTML contents to see if there is a match reference between any components in the view
	 * that is leaving and the view that is entering. It will scan both the view which is being
	 * removed (leave) and inserted (enter) to see if there are any paired DOM elements that
	 * contain a matching ref value.
	 *
	 * The two images match since they share the same ref value. ngAnimate will now create a
	 * transport element (which is a clone of the first image element) and it will then attempt
	 * to animate to the position of the second image element in the next view. For the animation to
	 * work a special CSS class called `ng-anchor` will be added to the transported element.
	 *
	 * We can now attach a transition onto the `.banner.ng-anchor` CSS class and then
	 * ngAnimate will handle the entire transition for us as well as the addition and removal of
	 * any changes of CSS classes between the elements:
	 *
	 * ```css
	 * .banner.ng-anchor {
	 *   /&#42; this animation will last for 1 second since there are
	 *          two phases to the animation (an `in` and an `out` phase) &#42;/
	 *   transition:0.5s linear all;
	 * }
	 * ```
	 *
	 * We also **must** include animations for the views that are being entered and removed
	 * (otherwise anchoring wouldn't be possible since the new view would be inserted right away).
	 *
	 * ```css
	 * .view-animation.ng-enter, .view-animation.ng-leave {
	 *   transition:0.5s linear all;
	 *   position:fixed;
	 *   left:0;
	 *   top:0;
	 *   width:100%;
	 * }
	 * .view-animation.ng-enter {
	 *   transform:translateX(100%);
	 * }
	 * .view-animation.ng-leave,
	 * .view-animation.ng-enter.ng-enter-active {
	 *   transform:translateX(0%);
	 * }
	 * .view-animation.ng-leave.ng-leave-active {
	 *   transform:translateX(-100%);
	 * }
	 * ```
	 *
	 * Now we can jump back to the anchor animation. When the animation happens, there are two stages that occur:
	 * an `out` and an `in` stage. The `out` stage happens first and that is when the element is animated away
	 * from its origin. Once that animation is over then the `in` stage occurs which animates the
	 * element to its destination. The reason why there are two animations is to give enough time
	 * for the enter animation on the new element to be ready.
	 *
	 * The example above sets up a transition for both the in and out phases, but we can also target the out or
	 * in phases directly via `ng-anchor-out` and `ng-anchor-in`.
	 *
	 * ```css
	 * .banner.ng-anchor-out {
	 *   transition: 0.5s linear all;
	 *
	 *   /&#42; the scale will be applied during the out animation,
	 *          but will be animated away when the in animation runs &#42;/
	 *   transform: scale(1.2);
	 * }
	 *
	 * .banner.ng-anchor-in {
	 *   transition: 1s linear all;
	 * }
	 * ```
	 *
	 *
	 *
	 *
	 * ### Anchoring Demo
	 *
	  <example module="anchoringExample"
	           name="anchoringExample"
	           id="anchoringExample"
	           deps="angular-animate.js;angular-route.js"
	           animations="true">
	    <file name="index.html">
	      <a href="#/">Home</a>
	      <hr />
	      <div class="view-container">
	        <div ng-view class="view"></div>
	      </div>
	    </file>
	    <file name="script.js">
	      angular.module('anchoringExample', ['ngAnimate', 'ngRoute'])
	        .config(['$routeProvider', function($routeProvider) {
	          $routeProvider.when('/', {
	            templateUrl: 'home.html',
	            controller: 'HomeController as home'
	          });
	          $routeProvider.when('/profile/:id', {
	            templateUrl: 'profile.html',
	            controller: 'ProfileController as profile'
	          });
	        }])
	        .run(['$rootScope', function($rootScope) {
	          $rootScope.records = [
	            { id:1, title: "Miss Beulah Roob" },
	            { id:2, title: "Trent Morissette" },
	            { id:3, title: "Miss Ava Pouros" },
	            { id:4, title: "Rod Pouros" },
	            { id:5, title: "Abdul Rice" },
	            { id:6, title: "Laurie Rutherford Sr." },
	            { id:7, title: "Nakia McLaughlin" },
	            { id:8, title: "Jordon Blanda DVM" },
	            { id:9, title: "Rhoda Hand" },
	            { id:10, title: "Alexandrea Sauer" }
	          ];
	        }])
	        .controller('HomeController', [function() {
	          //empty
	        }])
	        .controller('ProfileController', ['$rootScope', '$routeParams', function($rootScope, $routeParams) {
	          var index = parseInt($routeParams.id, 10);
	          var record = $rootScope.records[index - 1];

	          this.title = record.title;
	          this.id = record.id;
	        }]);
	    </file>
	    <file name="home.html">
	      <h2>Welcome to the home page</h1>
	      <p>Please click on an element</p>
	      <a class="record"
	         ng-href="#/profile/{{ record.id }}"
	         ng-animate-ref="{{ record.id }}"
	         ng-repeat="record in records">
	        {{ record.title }}
	      </a>
	    </file>
	    <file name="profile.html">
	      <div class="profile record" ng-animate-ref="{{ profile.id }}">
	        {{ profile.title }}
	      </div>
	    </file>
	    <file name="animations.css">
	      .record {
	        display:block;
	        font-size:20px;
	      }
	      .profile {
	        background:black;
	        color:white;
	        font-size:100px;
	      }
	      .view-container {
	        position:relative;
	      }
	      .view-container > .view.ng-animate {
	        position:absolute;
	        top:0;
	        left:0;
	        width:100%;
	        min-height:500px;
	      }
	      .view.ng-enter, .view.ng-leave,
	      .record.ng-anchor {
	        transition:0.5s linear all;
	      }
	      .view.ng-enter {
	        transform:translateX(100%);
	      }
	      .view.ng-enter.ng-enter-active, .view.ng-leave {
	        transform:translateX(0%);
	      }
	      .view.ng-leave.ng-leave-active {
	        transform:translateX(-100%);
	      }
	      .record.ng-anchor-out {
	        background:red;
	      }
	    </file>
	  </example>
	 *
	 * ### How is the element transported?
	 *
	 * When an anchor animation occurs, ngAnimate will clone the starting element and position it exactly where the starting
	 * element is located on screen via absolute positioning. The cloned element will be placed inside of the root element
	 * of the application (where ng-app was defined) and all of the CSS classes of the starting element will be applied. The
	 * element will then animate into the `out` and `in` animations and will eventually reach the coordinates and match
	 * the dimensions of the destination element. During the entire animation a CSS class of `.ng-animate-shim` will be applied
	 * to both the starting and destination elements in order to hide them from being visible (the CSS styling for the class
	 * is: `visibility:hidden`). Once the anchor reaches its destination then it will be removed and the destination element
	 * will become visible since the shim class will be removed.
	 *
	 * ### How is the morphing handled?
	 *
	 * CSS Anchoring relies on transitions and keyframes and the internal code is intelligent enough to figure out
	 * what CSS classes differ between the starting element and the destination element. These different CSS classes
	 * will be added/removed on the anchor element and a transition will be applied (the transition that is provided
	 * in the anchor class). Long story short, ngAnimate will figure out what classes to add and remove which will
	 * make the transition of the element as smooth and automatic as possible. Be sure to use simple CSS classes that
	 * do not rely on DOM nesting structure so that the anchor element appears the same as the starting element (since
	 * the cloned element is placed inside of root element which is likely close to the body element).
	 *
	 * Note that if the root element is on the `<html>` element then the cloned node will be placed inside of body.
	 *
	 *
	 * ## Using $animate in your directive code
	 *
	 * So far we've explored how to feed in animations into an Angular application, but how do we trigger animations within our own directives in our application?
	 * By injecting the `$animate` service into our directive code, we can trigger structural and class-based hooks which can then be consumed by animations. Let's
	 * imagine we have a greeting box that shows and hides itself when the data changes
	 *
	 * ```html
	 * <greeting-box active="onOrOff">Hi there</greeting-box>
	 * ```
	 *
	 * ```js
	 * ngModule.directive('greetingBox', ['$animate', function($animate) {
	 *   return function(scope, element, attrs) {
	 *     attrs.$observe('active', function(value) {
	 *       value ? $animate.addClass(element, 'on') : $animate.removeClass(element, 'on');
	 *     });
	 *   });
	 * }]);
	 * ```
	 *
	 * Now the `on` CSS class is added and removed on the greeting box component. Now if we add a CSS class on top of the greeting box element
	 * in our HTML code then we can trigger a CSS or JS animation to happen.
	 *
	 * ```css
	 * /&#42; normally we would create a CSS class to reference on the element &#42;/
	 * greeting-box.on { transition:0.5s linear all; background:green; color:white; }
	 * ```
	 *
	 * The `$animate` service contains a variety of other methods like `enter`, `leave`, `animate` and `setClass`. To learn more about what's
	 * possible be sure to visit the {@link ng.$animate $animate service API page}.
	 *
	 *
	 * ## Callbacks and Promises
	 *
	 * When `$animate` is called it returns a promise that can be used to capture when the animation has ended. Therefore if we were to trigger
	 * an animation (within our directive code) then we can continue performing directive and scope related activities after the animation has
	 * ended by chaining onto the returned promise that animation method returns.
	 *
	 * ```js
	 * // somewhere within the depths of the directive
	 * $animate.enter(element, parent).then(function() {
	 *   //the animation has completed
	 * });
	 * ```
	 *
	 * (Note that earlier versions of Angular prior to v1.4 required the promise code to be wrapped using `$scope.$apply(...)`. This is not the case
	 * anymore.)
	 *
	 * In addition to the animation promise, we can also make use of animation-related callbacks within our directives and controller code by registering
	 * an event listener using the `$animate` service. Let's say for example that an animation was triggered on our view
	 * routing controller to hook into that:
	 *
	 * ```js
	 * ngModule.controller('HomePageController', ['$animate', function($animate) {
	 *   $animate.on('enter', ngViewElement, function(element) {
	 *     // the animation for this route has completed
	 *   }]);
	 * }])
	 * ```
	 *
	 * (Note that you will need to trigger a digest within the callback to get angular to notice any scope-related changes.)
	 */

	/**
	 * @ngdoc service
	 * @name $animate
	 * @kind object
	 *
	 * @description
	 * The ngAnimate `$animate` service documentation is the same for the core `$animate` service.
	 *
	 * Click here {@link ng.$animate to learn more about animations with `$animate`}.
	 */
	angular.module('ngAnimate', [])
	  .directive('ngAnimateSwap', ngAnimateSwapDirective)

	  .directive('ngAnimateChildren', $$AnimateChildrenDirective)
	  .factory('$$rAFScheduler', $$rAFSchedulerFactory)

	  .provider('$$animateQueue', $$AnimateQueueProvider)
	  .provider('$$animation', $$AnimationProvider)

	  .provider('$animateCss', $AnimateCssProvider)
	  .provider('$$animateCssDriver', $$AnimateCssDriverProvider)

	  .provider('$$animateJs', $$AnimateJsProvider)
	  .provider('$$animateJsDriver', $$AnimateJsDriverProvider);


	})(window, window.angular);


/***/ },
/* 197 */
/***/ function(module, exports) {

	/**
	 * State-based routing for AngularJS
	 * @version v0.2.15
	 * @link http://angular-ui.github.com/
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */

	/* commonjs package manager support (eg componentjs) */
	if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
	  module.exports = 'ui.router';
	}

	(function (window, angular, undefined) {
	/*jshint globalstrict:true*/
	/*global angular:false*/
	'use strict';

	var isDefined = angular.isDefined,
	    isFunction = angular.isFunction,
	    isString = angular.isString,
	    isObject = angular.isObject,
	    isArray = angular.isArray,
	    forEach = angular.forEach,
	    extend = angular.extend,
	    copy = angular.copy;

	function inherit(parent, extra) {
	  return extend(new (extend(function() {}, { prototype: parent }))(), extra);
	}

	function merge(dst) {
	  forEach(arguments, function(obj) {
	    if (obj !== dst) {
	      forEach(obj, function(value, key) {
	        if (!dst.hasOwnProperty(key)) dst[key] = value;
	      });
	    }
	  });
	  return dst;
	}

	/**
	 * Finds the common ancestor path between two states.
	 *
	 * @param {Object} first The first state.
	 * @param {Object} second The second state.
	 * @return {Array} Returns an array of state names in descending order, not including the root.
	 */
	function ancestors(first, second) {
	  var path = [];

	  for (var n in first.path) {
	    if (first.path[n] !== second.path[n]) break;
	    path.push(first.path[n]);
	  }
	  return path;
	}

	/**
	 * IE8-safe wrapper for `Object.keys()`.
	 *
	 * @param {Object} object A JavaScript object.
	 * @return {Array} Returns the keys of the object as an array.
	 */
	function objectKeys(object) {
	  if (Object.keys) {
	    return Object.keys(object);
	  }
	  var result = [];

	  forEach(object, function(val, key) {
	    result.push(key);
	  });
	  return result;
	}

	/**
	 * IE8-safe wrapper for `Array.prototype.indexOf()`.
	 *
	 * @param {Array} array A JavaScript array.
	 * @param {*} value A value to search the array for.
	 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
	 */
	function indexOf(array, value) {
	  if (Array.prototype.indexOf) {
	    return array.indexOf(value, Number(arguments[2]) || 0);
	  }
	  var len = array.length >>> 0, from = Number(arguments[2]) || 0;
	  from = (from < 0) ? Math.ceil(from) : Math.floor(from);

	  if (from < 0) from += len;

	  for (; from < len; from++) {
	    if (from in array && array[from] === value) return from;
	  }
	  return -1;
	}

	/**
	 * Merges a set of parameters with all parameters inherited between the common parents of the
	 * current state and a given destination state.
	 *
	 * @param {Object} currentParams The value of the current state parameters ($stateParams).
	 * @param {Object} newParams The set of parameters which will be composited with inherited params.
	 * @param {Object} $current Internal definition of object representing the current state.
	 * @param {Object} $to Internal definition of object representing state to transition to.
	 */
	function inheritParams(currentParams, newParams, $current, $to) {
	  var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];

	  for (var i in parents) {
	    if (!parents[i].params) continue;
	    parentParams = objectKeys(parents[i].params);
	    if (!parentParams.length) continue;

	    for (var j in parentParams) {
	      if (indexOf(inheritList, parentParams[j]) >= 0) continue;
	      inheritList.push(parentParams[j]);
	      inherited[parentParams[j]] = currentParams[parentParams[j]];
	    }
	  }
	  return extend({}, inherited, newParams);
	}

	/**
	 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
	 *
	 * @param {Object} a The first object.
	 * @param {Object} b The second object.
	 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
	 *                     it defaults to the list of keys in `a`.
	 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
	 */
	function equalForKeys(a, b, keys) {
	  if (!keys) {
	    keys = [];
	    for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
	  }

	  for (var i=0; i<keys.length; i++) {
	    var k = keys[i];
	    if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
	  }
	  return true;
	}

	/**
	 * Returns the subset of an object, based on a list of keys.
	 *
	 * @param {Array} keys
	 * @param {Object} values
	 * @return {Boolean} Returns a subset of `values`.
	 */
	function filterByKeys(keys, values) {
	  var filtered = {};

	  forEach(keys, function (name) {
	    filtered[name] = values[name];
	  });
	  return filtered;
	}

	// like _.indexBy
	// when you know that your index values will be unique, or you want last-one-in to win
	function indexBy(array, propName) {
	  var result = {};
	  forEach(array, function(item) {
	    result[item[propName]] = item;
	  });
	  return result;
	}

	// extracted from underscore.js
	// Return a copy of the object only containing the whitelisted properties.
	function pick(obj) {
	  var copy = {};
	  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
	  forEach(keys, function(key) {
	    if (key in obj) copy[key] = obj[key];
	  });
	  return copy;
	}

	// extracted from underscore.js
	// Return a copy of the object omitting the blacklisted properties.
	function omit(obj) {
	  var copy = {};
	  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
	  for (var key in obj) {
	    if (indexOf(keys, key) == -1) copy[key] = obj[key];
	  }
	  return copy;
	}

	function pluck(collection, key) {
	  var result = isArray(collection) ? [] : {};

	  forEach(collection, function(val, i) {
	    result[i] = isFunction(key) ? key(val) : val[key];
	  });
	  return result;
	}

	function filter(collection, callback) {
	  var array = isArray(collection);
	  var result = array ? [] : {};
	  forEach(collection, function(val, i) {
	    if (callback(val, i)) {
	      result[array ? result.length : i] = val;
	    }
	  });
	  return result;
	}

	function map(collection, callback) {
	  var result = isArray(collection) ? [] : {};

	  forEach(collection, function(val, i) {
	    result[i] = callback(val, i);
	  });
	  return result;
	}

	/**
	 * @ngdoc overview
	 * @name ui.router.util
	 *
	 * @description
	 * # ui.router.util sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 *
	 */
	angular.module('ui.router.util', ['ng']);

	/**
	 * @ngdoc overview
	 * @name ui.router.router
	 * 
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.router sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 */
	angular.module('ui.router.router', ['ui.router.util']);

	/**
	 * @ngdoc overview
	 * @name ui.router.state
	 * 
	 * @requires ui.router.router
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.state sub-module
	 *
	 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 * 
	 */
	angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);

	/**
	 * @ngdoc overview
	 * @name ui.router
	 *
	 * @requires ui.router.state
	 *
	 * @description
	 * # ui.router
	 * 
	 * ## The main module for ui.router 
	 * There are several sub-modules included with the ui.router module, however only this module is needed
	 * as a dependency within your angular app. The other modules are for organization purposes. 
	 *
	 * The modules are:
	 * * ui.router - the main "umbrella" module
	 * * ui.router.router - 
	 * 
	 * *You'll need to include **only** this module as the dependency within your angular app.*
	 * 
	 * <pre>
	 * <!doctype html>
	 * <html ng-app="myApp">
	 * <head>
	 *   <script src="js/angular.js"></script>
	 *   <!-- Include the ui-router script -->
	 *   <script src="js/angular-ui-router.min.js"></script>
	 *   <script>
	 *     // ...and add 'ui.router' as a dependency
	 *     var myApp = angular.module('myApp', ['ui.router']);
	 *   </script>
	 * </head>
	 * <body>
	 * </body>
	 * </html>
	 * </pre>
	 */
	angular.module('ui.router', ['ui.router.state']);

	angular.module('ui.router.compat', ['ui.router']);

	/**
	 * @ngdoc object
	 * @name ui.router.util.$resolve
	 *
	 * @requires $q
	 * @requires $injector
	 *
	 * @description
	 * Manages resolution of (acyclic) graphs of promises.
	 */
	$Resolve.$inject = ['$q', '$injector'];
	function $Resolve(  $q,    $injector) {
	  
	  var VISIT_IN_PROGRESS = 1,
	      VISIT_DONE = 2,
	      NOTHING = {},
	      NO_DEPENDENCIES = [],
	      NO_LOCALS = NOTHING,
	      NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });
	  

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#study
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Studies a set of invocables that are likely to be used multiple times.
	   * <pre>
	   * $resolve.study(invocables)(locals, parent, self)
	   * </pre>
	   * is equivalent to
	   * <pre>
	   * $resolve.resolve(invocables, locals, parent, self)
	   * </pre>
	   * but the former is more efficient (in fact `resolve` just calls `study` 
	   * internally).
	   *
	   * @param {object} invocables Invocable objects
	   * @return {function} a function to pass in locals, parent and self
	   */
	  this.study = function (invocables) {
	    if (!isObject(invocables)) throw new Error("'invocables' must be an object");
	    var invocableKeys = objectKeys(invocables || {});
	    
	    // Perform a topological sort of invocables to build an ordered plan
	    var plan = [], cycle = [], visited = {};
	    function visit(value, key) {
	      if (visited[key] === VISIT_DONE) return;
	      
	      cycle.push(key);
	      if (visited[key] === VISIT_IN_PROGRESS) {
	        cycle.splice(0, indexOf(cycle, key));
	        throw new Error("Cyclic dependency: " + cycle.join(" -> "));
	      }
	      visited[key] = VISIT_IN_PROGRESS;
	      
	      if (isString(value)) {
	        plan.push(key, [ function() { return $injector.get(value); }], NO_DEPENDENCIES);
	      } else {
	        var params = $injector.annotate(value);
	        forEach(params, function (param) {
	          if (param !== key && invocables.hasOwnProperty(param)) visit(invocables[param], param);
	        });
	        plan.push(key, value, params);
	      }
	      
	      cycle.pop();
	      visited[key] = VISIT_DONE;
	    }
	    forEach(invocables, visit);
	    invocables = cycle = visited = null; // plan is all that's required
	    
	    function isResolve(value) {
	      return isObject(value) && value.then && value.$$promises;
	    }
	    
	    return function (locals, parent, self) {
	      if (isResolve(locals) && self === undefined) {
	        self = parent; parent = locals; locals = null;
	      }
	      if (!locals) locals = NO_LOCALS;
	      else if (!isObject(locals)) {
	        throw new Error("'locals' must be an object");
	      }       
	      if (!parent) parent = NO_PARENT;
	      else if (!isResolve(parent)) {
	        throw new Error("'parent' must be a promise returned by $resolve.resolve()");
	      }
	      
	      // To complete the overall resolution, we have to wait for the parent
	      // promise and for the promise for each invokable in our plan.
	      var resolution = $q.defer(),
	          result = resolution.promise,
	          promises = result.$$promises = {},
	          values = extend({}, locals),
	          wait = 1 + plan.length/3,
	          merged = false;
	          
	      function done() {
	        // Merge parent values we haven't got yet and publish our own $$values
	        if (!--wait) {
	          if (!merged) merge(values, parent.$$values); 
	          result.$$values = values;
	          result.$$promises = result.$$promises || true; // keep for isResolve()
	          delete result.$$inheritedValues;
	          resolution.resolve(values);
	        }
	      }
	      
	      function fail(reason) {
	        result.$$failure = reason;
	        resolution.reject(reason);
	      }

	      // Short-circuit if parent has already failed
	      if (isDefined(parent.$$failure)) {
	        fail(parent.$$failure);
	        return result;
	      }
	      
	      if (parent.$$inheritedValues) {
	        merge(values, omit(parent.$$inheritedValues, invocableKeys));
	      }

	      // Merge parent values if the parent has already resolved, or merge
	      // parent promises and wait if the parent resolve is still in progress.
	      extend(promises, parent.$$promises);
	      if (parent.$$values) {
	        merged = merge(values, omit(parent.$$values, invocableKeys));
	        result.$$inheritedValues = omit(parent.$$values, invocableKeys);
	        done();
	      } else {
	        if (parent.$$inheritedValues) {
	          result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
	        }        
	        parent.then(done, fail);
	      }
	      
	      // Process each invocable in the plan, but ignore any where a local of the same name exists.
	      for (var i=0, ii=plan.length; i<ii; i+=3) {
	        if (locals.hasOwnProperty(plan[i])) done();
	        else invoke(plan[i], plan[i+1], plan[i+2]);
	      }
	      
	      function invoke(key, invocable, params) {
	        // Create a deferred for this invocation. Failures will propagate to the resolution as well.
	        var invocation = $q.defer(), waitParams = 0;
	        function onfailure(reason) {
	          invocation.reject(reason);
	          fail(reason);
	        }
	        // Wait for any parameter that we have a promise for (either from parent or from this
	        // resolve; in that case study() will have made sure it's ordered before us in the plan).
	        forEach(params, function (dep) {
	          if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
	            waitParams++;
	            promises[dep].then(function (result) {
	              values[dep] = result;
	              if (!(--waitParams)) proceed();
	            }, onfailure);
	          }
	        });
	        if (!waitParams) proceed();
	        function proceed() {
	          if (isDefined(result.$$failure)) return;
	          try {
	            invocation.resolve($injector.invoke(invocable, self, values));
	            invocation.promise.then(function (result) {
	              values[key] = result;
	              done();
	            }, onfailure);
	          } catch (e) {
	            onfailure(e);
	          }
	        }
	        // Publish promise synchronously; invocations further down in the plan may depend on it.
	        promises[key] = invocation.promise;
	      }
	      
	      return result;
	    };
	  };
	  
	  /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#resolve
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Resolves a set of invocables. An invocable is a function to be invoked via 
	   * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
	   * An invocable can either return a value directly,
	   * or a `$q` promise. If a promise is returned it will be resolved and the 
	   * resulting value will be used instead. Dependencies of invocables are resolved 
	   * (in this order of precedence)
	   *
	   * - from the specified `locals`
	   * - from another invocable that is part of this `$resolve` call
	   * - from an invocable that is inherited from a `parent` call to `$resolve` 
	   *   (or recursively
	   * - from any ancestor `$resolve` of that parent).
	   *
	   * The return value of `$resolve` is a promise for an object that contains 
	   * (in this order of precedence)
	   *
	   * - any `locals` (if specified)
	   * - the resolved return values of all injectables
	   * - any values inherited from a `parent` call to `$resolve` (if specified)
	   *
	   * The promise will resolve after the `parent` promise (if any) and all promises 
	   * returned by injectables have been resolved. If any invocable 
	   * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
	   * invocable is rejected, the `$resolve` promise is immediately rejected with the 
	   * same error. A rejection of a `parent` promise (if specified) will likewise be 
	   * propagated immediately. Once the `$resolve` promise has been rejected, no 
	   * further invocables will be called.
	   * 
	   * Cyclic dependencies between invocables are not permitted and will caues `$resolve`
	   * to throw an error. As a special case, an injectable can depend on a parameter 
	   * with the same name as the injectable, which will be fulfilled from the `parent` 
	   * injectable of the same name. This allows inherited values to be decorated. 
	   * Note that in this case any other injectable in the same `$resolve` with the same
	   * dependency would see the decorated value, not the inherited value.
	   *
	   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
	   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
	   * exception.
	   *
	   * Invocables are invoked eagerly as soon as all dependencies are available. 
	   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
	   *
	   * As a special case, an invocable can be a string, in which case it is taken to 
	   * be a service name to be passed to `$injector.get()`. This is supported primarily 
	   * for backwards-compatibility with the `resolve` property of `$routeProvider` 
	   * routes.
	   *
	   * @param {object} invocables functions to invoke or 
	   * `$injector` services to fetch.
	   * @param {object} locals  values to make available to the injectables
	   * @param {object} parent  a promise returned by another call to `$resolve`.
	   * @param {object} self  the `this` for the invoked methods
	   * @return {object} Promise for an object that contains the resolved return value
	   * of all invocables, as well as any inherited and local values.
	   */
	  this.resolve = function (invocables, locals, parent, self) {
	    return this.study(invocables)(locals, parent, self);
	  };
	}

	angular.module('ui.router.util').service('$resolve', $Resolve);


	/**
	 * @ngdoc object
	 * @name ui.router.util.$templateFactory
	 *
	 * @requires $http
	 * @requires $templateCache
	 * @requires $injector
	 *
	 * @description
	 * Service. Manages loading of templates.
	 */
	$TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
	function $TemplateFactory(  $http,   $templateCache,   $injector) {

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromConfig
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a configuration object. 
	   *
	   * @param {object} config Configuration object for which to load a template. 
	   * The following properties are search in the specified order, and the first one 
	   * that is defined is used to create the template:
	   *
	   * @param {string|object} config.template html string template or function to 
	   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
	   * @param {string|object} config.templateUrl url to load or a function returning 
	   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
	   * @param {Function} config.templateProvider function to invoke via 
	   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
	   * @param {object} params  Parameters to pass to the template function.
	   * @param {object} locals Locals to pass to `invoke` if the template is loaded 
	   * via a `templateProvider`. Defaults to `{ params: params }`.
	   *
	   * @return {string|object}  The template html as a string, or a promise for 
	   * that string,or `null` if no template is configured.
	   */
	  this.fromConfig = function (config, params, locals) {
	    return (
	      isDefined(config.template) ? this.fromString(config.template, params) :
	      isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
	      isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) :
	      null
	    );
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromString
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a string or a function returning a string.
	   *
	   * @param {string|object} template html template as a string or function that 
	   * returns an html template as a string.
	   * @param {object} params Parameters to pass to the template function.
	   *
	   * @return {string|object} The template html as a string, or a promise for that 
	   * string.
	   */
	  this.fromString = function (template, params) {
	    return isFunction(template) ? template(params) : template;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromUrl
	   * @methodOf ui.router.util.$templateFactory
	   * 
	   * @description
	   * Loads a template from the a URL via `$http` and `$templateCache`.
	   *
	   * @param {string|Function} url url of the template to load, or a function 
	   * that returns a url.
	   * @param {Object} params Parameters to pass to the url function.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */
	  this.fromUrl = function (url, params) {
	    if (isFunction(url)) url = url(params);
	    if (url == null) return null;
	    else return $http
	        .get(url, { cache: $templateCache, headers: { Accept: 'text/html' }})
	        .then(function(response) { return response.data; });
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromProvider
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template by invoking an injectable provider function.
	   *
	   * @param {Function} provider Function to invoke via `$injector.invoke`
	   * @param {Object} params Parameters for the template.
	   * @param {Object} locals Locals to pass to `invoke`. Defaults to 
	   * `{ params: params }`.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */
	  this.fromProvider = function (provider, params, locals) {
	    return $injector.invoke(provider, null, locals || { params: params });
	  };
	}

	angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);

	var $$UMFP; // reference to $UrlMatcherFactoryProvider

	/**
	 * @ngdoc object
	 * @name ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Matches URLs against patterns and extracts named parameters from the path or the search
	 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
	 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
	 * do not influence whether or not a URL is matched, but their values are passed through into
	 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
	 *
	 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
	 * syntax, which optionally allows a regular expression for the parameter to be specified:
	 *
	 * * `':'` name - colon placeholder
	 * * `'*'` name - catch-all placeholder
	 * * `'{' name '}'` - curly placeholder
	 * * `'{' name ':' regexp|type '}'` - curly placeholder with regexp or type name. Should the
	 *   regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
	 *
	 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
	 * must be unique within the pattern (across both path and search parameters). For colon
	 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
	 * number of characters other than '/'. For catch-all placeholders the path parameter matches
	 * any number of characters.
	 *
	 * Examples:
	 *
	 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
	 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
	 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
	 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
	 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
	 * * `'/user/{id:[^/]*}'` - Same as the previous example.
	 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
	 *   parameter consists of 1 to 8 hex digits.
	 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
	 *   path into the parameter 'path'.
	 * * `'/files/*path'` - ditto.
	 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
	 *   in the built-in  `date` Type matches `2014-11-12`) and provides a Date object in $stateParams.start
	 *
	 * @param {string} pattern  The pattern to compile into a matcher.
	 * @param {Object} config  A configuration object hash:
	 * @param {Object=} parentMatcher Used to concatenate the pattern/config onto
	 *   an existing UrlMatcher
	 *
	 * * `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
	 * * `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
	 *
	 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
	 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
	 *   non-null) will start with this prefix.
	 *
	 * @property {string} source  The pattern that was passed into the constructor
	 *
	 * @property {string} sourcePath  The path portion of the source property
	 *
	 * @property {string} sourceSearch  The search portion of the source property
	 *
	 * @property {string} regex  The constructed regex that will be used to match against the url when
	 *   it is time to determine which url will match.
	 *
	 * @returns {Object}  New `UrlMatcher` object
	 */
	function UrlMatcher(pattern, config, parentMatcher) {
	  config = extend({ params: {} }, isObject(config) ? config : {});

	  // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
	  //   '*' name
	  //   ':' name
	  //   '{' name '}'
	  //   '{' name ':' regexp '}'
	  // The regular expression is somewhat complicated due to the need to allow curly braces
	  // inside the regular expression. The placeholder regexp breaks down as follows:
	  //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
	  //    \{([\w\[\]]+)(?:\:( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
	  //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
	  //    [^{}\\]+                       - anything other than curly braces or backslash
	  //    \\.                            - a backslash escape
	  //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
	  var placeholder       = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
	      searchPlaceholder = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
	      compiled = '^', last = 0, m,
	      segments = this.segments = [],
	      parentParams = parentMatcher ? parentMatcher.params : {},
	      params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(),
	      paramNames = [];

	  function addParameter(id, type, config, location) {
	    paramNames.push(id);
	    if (parentParams[id]) return parentParams[id];
	    if (!/^\w+(-+\w+)*(?:\[\])?$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
	    if (params[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
	    params[id] = new $$UMFP.Param(id, type, config, location);
	    return params[id];
	  }

	  function quoteRegExp(string, pattern, squash, optional) {
	    var surroundPattern = ['',''], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
	    if (!pattern) return result;
	    switch(squash) {
	      case false: surroundPattern = ['(', ')' + (optional ? "?" : "")]; break;
	      case true:  surroundPattern = ['?(', ')?']; break;
	      default:    surroundPattern = ['(' + squash + "|", ')?']; break;
	    }
	    return result + surroundPattern[0] + pattern + surroundPattern[1];
	  }

	  this.source = pattern;

	  // Split into static segments separated by path parameter placeholders.
	  // The number of segments is always 1 more than the number of parameters.
	  function matchDetails(m, isSearch) {
	    var id, regexp, segment, type, cfg, arrayMode;
	    id          = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
	    cfg         = config.params[id];
	    segment     = pattern.substring(last, m.index);
	    regexp      = isSearch ? m[4] : m[4] || (m[1] == '*' ? '.*' : null);
	    type        = $$UMFP.type(regexp || "string") || inherit($$UMFP.type("string"), { pattern: new RegExp(regexp, config.caseInsensitive ? 'i' : undefined) });
	    return {
	      id: id, regexp: regexp, segment: segment, type: type, cfg: cfg
	    };
	  }

	  var p, param, segment;
	  while ((m = placeholder.exec(pattern))) {
	    p = matchDetails(m, false);
	    if (p.segment.indexOf('?') >= 0) break; // we're into the search part

	    param = addParameter(p.id, p.type, p.cfg, "path");
	    compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash, param.isOptional);
	    segments.push(p.segment);
	    last = placeholder.lastIndex;
	  }
	  segment = pattern.substring(last);

	  // Find any search parameter names and remove them from the last segment
	  var i = segment.indexOf('?');

	  if (i >= 0) {
	    var search = this.sourceSearch = segment.substring(i);
	    segment = segment.substring(0, i);
	    this.sourcePath = pattern.substring(0, last + i);

	    if (search.length > 0) {
	      last = 0;
	      while ((m = searchPlaceholder.exec(search))) {
	        p = matchDetails(m, true);
	        param = addParameter(p.id, p.type, p.cfg, "search");
	        last = placeholder.lastIndex;
	        // check if ?&
	      }
	    }
	  } else {
	    this.sourcePath = pattern;
	    this.sourceSearch = '';
	  }

	  compiled += quoteRegExp(segment) + (config.strict === false ? '\/?' : '') + '$';
	  segments.push(segment);

	  this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
	  this.prefix = segments[0];
	  this.$$paramNames = paramNames;
	}

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#concat
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns a new matcher for a pattern constructed by appending the path part and adding the
	 * search parameters of the specified pattern to this pattern. The current pattern is not
	 * modified. This can be understood as creating a pattern for URLs that are relative to (or
	 * suffixes of) the current pattern.
	 *
	 * @example
	 * The following two matchers are equivalent:
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').concat('/details?date');
	 * new UrlMatcher('/user/{id}/details?q&date');
	 * </pre>
	 *
	 * @param {string} pattern  The pattern to append.
	 * @param {Object} config  An object hash of the configuration for the matcher.
	 * @returns {UrlMatcher}  A matcher for the concatenated pattern.
	 */
	UrlMatcher.prototype.concat = function (pattern, config) {
	  // Because order of search parameters is irrelevant, we can add our own search
	  // parameters to the end of the new pattern. Parse the new pattern by itself
	  // and then join the bits together, but it's much easier to do this on a string level.
	  var defaultConfig = {
	    caseInsensitive: $$UMFP.caseInsensitive(),
	    strict: $$UMFP.strictMode(),
	    squash: $$UMFP.defaultSquashPolicy()
	  };
	  return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
	};

	UrlMatcher.prototype.toString = function () {
	  return this.source;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#exec
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Tests the specified path against this matcher, and returns an object containing the captured
	 * parameter values, or null if the path does not match. The returned object contains the values
	 * of any search parameters that are mentioned in the pattern, but their value may be null if
	 * they are not present in `searchParams`. This means that search parameters are always treated
	 * as optional.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
	 *   x: '1', q: 'hello'
	 * });
	 * // returns { id: 'bob', q: 'hello', r: null }
	 * </pre>
	 *
	 * @param {string} path  The URL path to match, e.g. `$location.path()`.
	 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
	 * @returns {Object}  The captured parameter values.
	 */
	UrlMatcher.prototype.exec = function (path, searchParams) {
	  var m = this.regexp.exec(path);
	  if (!m) return null;
	  searchParams = searchParams || {};

	  var paramNames = this.parameters(), nTotal = paramNames.length,
	    nPath = this.segments.length - 1,
	    values = {}, i, j, cfg, paramName;

	  if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");

	  function decodePathArray(string) {
	    function reverseString(str) { return str.split("").reverse().join(""); }
	    function unquoteDashes(str) { return str.replace(/\\-/g, "-"); }

	    var split = reverseString(string).split(/-(?!\\)/);
	    var allReversed = map(split, reverseString);
	    return map(allReversed, unquoteDashes).reverse();
	  }

	  for (i = 0; i < nPath; i++) {
	    paramName = paramNames[i];
	    var param = this.params[paramName];
	    var paramVal = m[i+1];
	    // if the param value matches a pre-replace pair, replace the value before decoding.
	    for (j = 0; j < param.replace; j++) {
	      if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
	    }
	    if (paramVal && param.array === true) paramVal = decodePathArray(paramVal);
	    values[paramName] = param.value(paramVal);
	  }
	  for (/**/; i < nTotal; i++) {
	    paramName = paramNames[i];
	    values[paramName] = this.params[paramName].value(searchParams[paramName]);
	  }

	  return values;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#parameters
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns the names of all path and search parameters of this pattern in an unspecified order.
	 *
	 * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
	 *    pattern has no parameters, an empty array is returned.
	 */
	UrlMatcher.prototype.parameters = function (param) {
	  if (!isDefined(param)) return this.$$paramNames;
	  return this.params[param] || null;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#validate
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Checks an object hash of parameters to validate their correctness according to the parameter
	 * types of this `UrlMatcher`.
	 *
	 * @param {Object} params The object hash of parameters to validate.
	 * @returns {boolean} Returns `true` if `params` validates, otherwise `false`.
	 */
	UrlMatcher.prototype.validates = function (params) {
	  return this.params.$$validates(params);
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#format
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Creates a URL that matches this pattern by substituting the specified values
	 * for the path and search parameters. Null values for path parameters are
	 * treated as empty strings.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
	 * // returns '/user/bob?q=yes'
	 * </pre>
	 *
	 * @param {Object} values  the values to substitute for the parameters in this pattern.
	 * @returns {string}  the formatted URL (path and optionally search part).
	 */
	UrlMatcher.prototype.format = function (values) {
	  values = values || {};
	  var segments = this.segments, params = this.parameters(), paramset = this.params;
	  if (!this.validates(values)) return null;

	  var i, search = false, nPath = segments.length - 1, nTotal = params.length, result = segments[0];

	  function encodeDashes(str) { // Replace dashes with encoded "\-"
	    return encodeURIComponent(str).replace(/-/g, function(c) { return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase(); });
	  }

	  for (i = 0; i < nTotal; i++) {
	    var isPathParam = i < nPath;
	    var name = params[i], param = paramset[name], value = param.value(values[name]);
	    var isDefaultValue = param.isOptional && param.type.equals(param.value(), value);
	    var squash = isDefaultValue ? param.squash : false;
	    var encoded = param.type.encode(value);

	    if (isPathParam) {
	      var nextSegment = segments[i + 1];
	      if (squash === false) {
	        if (encoded != null) {
	          if (isArray(encoded)) {
	            result += map(encoded, encodeDashes).join("-");
	          } else {
	            result += encodeURIComponent(encoded);
	          }
	        }
	        result += nextSegment;
	      } else if (squash === true) {
	        var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
	        result += nextSegment.match(capture)[1];
	      } else if (isString(squash)) {
	        result += squash + nextSegment;
	      }
	    } else {
	      if (encoded == null || (isDefaultValue && squash !== false)) continue;
	      if (!isArray(encoded)) encoded = [ encoded ];
	      encoded = map(encoded, encodeURIComponent).join('&' + name + '=');
	      result += (search ? '&' : '?') + (name + '=' + encoded);
	      search = true;
	    }
	  }

	  return result;
	};

	/**
	 * @ngdoc object
	 * @name ui.router.util.type:Type
	 *
	 * @description
	 * Implements an interface to define custom parameter types that can be decoded from and encoded to
	 * string parameters matched in a URL. Used by {@link ui.router.util.type:UrlMatcher `UrlMatcher`}
	 * objects when matching or formatting URLs, or comparing or validating parameter values.
	 *
	 * See {@link ui.router.util.$urlMatcherFactory#methods_type `$urlMatcherFactory#type()`} for more
	 * information on registering custom types.
	 *
	 * @param {Object} config  A configuration object which contains the custom type definition.  The object's
	 *        properties will override the default methods and/or pattern in `Type`'s public interface.
	 * @example
	 * <pre>
	 * {
	 *   decode: function(val) { return parseInt(val, 10); },
	 *   encode: function(val) { return val && val.toString(); },
	 *   equals: function(a, b) { return this.is(a) && a === b; },
	 *   is: function(val) { return angular.isNumber(val) isFinite(val) && val % 1 === 0; },
	 *   pattern: /\d+/
	 * }
	 * </pre>
	 *
	 * @property {RegExp} pattern The regular expression pattern used to match values of this type when
	 *           coming from a substring of a URL.
	 *
	 * @returns {Object}  Returns a new `Type` object.
	 */
	function Type(config) {
	  extend(this, config);
	}

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#is
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Detects whether a value is of a particular type. Accepts a native (decoded) value
	 * and determines whether it matches the current `Type` object.
	 *
	 * @param {*} val  The value to check.
	 * @param {string} key  Optional. If the type check is happening in the context of a specific
	 *        {@link ui.router.util.type:UrlMatcher `UrlMatcher`} object, this is the name of the
	 *        parameter in which `val` is stored. Can be used for meta-programming of `Type` objects.
	 * @returns {Boolean}  Returns `true` if the value matches the type, otherwise `false`.
	 */
	Type.prototype.is = function(val, key) {
	  return true;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#encode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the
	 * return value does *not* need to be URL-safe (i.e. passed through `encodeURIComponent()`), it
	 * only needs to be a representation of `val` that has been coerced to a string.
	 *
	 * @param {*} val  The value to encode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {string}  Returns a string representation of `val` that can be encoded in a URL.
	 */
	Type.prototype.encode = function(val, key) {
	  return val;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#decode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Converts a parameter value (from URL string or transition param) to a custom/native value.
	 *
	 * @param {string} val  The URL parameter value to decode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {*}  Returns a custom representation of the URL parameter value.
	 */
	Type.prototype.decode = function(val, key) {
	  return val;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#equals
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Determines whether two decoded values are equivalent.
	 *
	 * @param {*} a  A value to compare against.
	 * @param {*} b  A value to compare against.
	 * @returns {Boolean}  Returns `true` if the values are equivalent/equal, otherwise `false`.
	 */
	Type.prototype.equals = function(a, b) {
	  return a == b;
	};

	Type.prototype.$subPattern = function() {
	  var sub = this.pattern.toString();
	  return sub.substr(1, sub.length - 2);
	};

	Type.prototype.pattern = /.*/;

	Type.prototype.toString = function() { return "{Type:" + this.name + "}"; };

	/** Given an encoded string, or a decoded object, returns a decoded object */
	Type.prototype.$normalize = function(val) {
	  return this.is(val) ? val : this.decode(val);
	};

	/*
	 * Wraps an existing custom Type as an array of Type, depending on 'mode'.
	 * e.g.:
	 * - urlmatcher pattern "/path?{queryParam[]:int}"
	 * - url: "/path?queryParam=1&queryParam=2
	 * - $stateParams.queryParam will be [1, 2]
	 * if `mode` is "auto", then
	 * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
	 * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
	 */
	Type.prototype.$asArray = function(mode, isSearch) {
	  if (!mode) return this;
	  if (mode === "auto" && !isSearch) throw new Error("'auto' array mode is for query parameters only");

	  function ArrayType(type, mode) {
	    function bindTo(type, callbackName) {
	      return function() {
	        return type[callbackName].apply(type, arguments);
	      };
	    }

	    // Wrap non-array value as array
	    function arrayWrap(val) { return isArray(val) ? val : (isDefined(val) ? [ val ] : []); }
	    // Unwrap array value for "auto" mode. Return undefined for empty array.
	    function arrayUnwrap(val) {
	      switch(val.length) {
	        case 0: return undefined;
	        case 1: return mode === "auto" ? val[0] : val;
	        default: return val;
	      }
	    }
	    function falsey(val) { return !val; }

	    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
	    function arrayHandler(callback, allTruthyMode) {
	      return function handleArray(val) {
	        val = arrayWrap(val);
	        var result = map(val, callback);
	        if (allTruthyMode === true)
	          return filter(result, falsey).length === 0;
	        return arrayUnwrap(result);
	      };
	    }

	    // Wraps type (.equals) functions to operate on each value of an array
	    function arrayEqualsHandler(callback) {
	      return function handleArray(val1, val2) {
	        var left = arrayWrap(val1), right = arrayWrap(val2);
	        if (left.length !== right.length) return false;
	        for (var i = 0; i < left.length; i++) {
	          if (!callback(left[i], right[i])) return false;
	        }
	        return true;
	      };
	    }

	    this.encode = arrayHandler(bindTo(type, 'encode'));
	    this.decode = arrayHandler(bindTo(type, 'decode'));
	    this.is     = arrayHandler(bindTo(type, 'is'), true);
	    this.equals = arrayEqualsHandler(bindTo(type, 'equals'));
	    this.pattern = type.pattern;
	    this.$normalize = arrayHandler(bindTo(type, '$normalize'));
	    this.name = type.name;
	    this.$arrayMode = mode;
	  }

	  return new ArrayType(this, mode);
	};



	/**
	 * @ngdoc object
	 * @name ui.router.util.$urlMatcherFactory
	 *
	 * @description
	 * Factory for {@link ui.router.util.type:UrlMatcher `UrlMatcher`} instances. The factory
	 * is also available to providers under the name `$urlMatcherFactoryProvider`.
	 */
	function $UrlMatcherFactory() {
	  $$UMFP = this;

	  var isCaseInsensitive = false, isStrictMode = true, defaultSquashPolicy = false;

	  function valToString(val) { return val != null ? val.toString().replace(/\//g, "%2F") : val; }
	  function valFromString(val) { return val != null ? val.toString().replace(/%2F/g, "/") : val; }

	  var $types = {}, enqueue = true, typeQueue = [], injector, defaultTypes = {
	    string: {
	      encode: valToString,
	      decode: valFromString,
	      // TODO: in 1.0, make string .is() return false if value is undefined/null by default.
	      // In 0.2.x, string params are optional by default for backwards compat
	      is: function(val) { return val == null || !isDefined(val) || typeof val === "string"; },
	      pattern: /[^/]*/
	    },
	    int: {
	      encode: valToString,
	      decode: function(val) { return parseInt(val, 10); },
	      is: function(val) { return isDefined(val) && this.decode(val.toString()) === val; },
	      pattern: /\d+/
	    },
	    bool: {
	      encode: function(val) { return val ? 1 : 0; },
	      decode: function(val) { return parseInt(val, 10) !== 0; },
	      is: function(val) { return val === true || val === false; },
	      pattern: /0|1/
	    },
	    date: {
	      encode: function (val) {
	        if (!this.is(val))
	          return undefined;
	        return [ val.getFullYear(),
	          ('0' + (val.getMonth() + 1)).slice(-2),
	          ('0' + val.getDate()).slice(-2)
	        ].join("-");
	      },
	      decode: function (val) {
	        if (this.is(val)) return val;
	        var match = this.capture.exec(val);
	        return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
	      },
	      is: function(val) { return val instanceof Date && !isNaN(val.valueOf()); },
	      equals: function (a, b) { return this.is(a) && this.is(b) && a.toISOString() === b.toISOString(); },
	      pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
	      capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
	    },
	    json: {
	      encode: angular.toJson,
	      decode: angular.fromJson,
	      is: angular.isObject,
	      equals: angular.equals,
	      pattern: /[^/]*/
	    },
	    any: { // does not encode/decode
	      encode: angular.identity,
	      decode: angular.identity,
	      equals: angular.equals,
	      pattern: /.*/
	    }
	  };

	  function getDefaultConfig() {
	    return {
	      strict: isStrictMode,
	      caseInsensitive: isCaseInsensitive
	    };
	  }

	  function isInjectable(value) {
	    return (isFunction(value) || (isArray(value) && isFunction(value[value.length - 1])));
	  }

	  /**
	   * [Internal] Get the default value of a parameter, which may be an injectable function.
	   */
	  $UrlMatcherFactory.$$getDefaultValue = function(config) {
	    if (!isInjectable(config.value)) return config.value;
	    if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
	    return injector.invoke(config.value);
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#caseInsensitive
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URL matching should be case sensitive (the default behavior), or not.
	   *
	   * @param {boolean} value `false` to match URL in a case sensitive manner; otherwise `true`;
	   * @returns {boolean} the current value of caseInsensitive
	   */
	  this.caseInsensitive = function(value) {
	    if (isDefined(value))
	      isCaseInsensitive = value;
	    return isCaseInsensitive;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#strictMode
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URLs should match trailing slashes, or not (the default behavior).
	   *
	   * @param {boolean=} value `false` to match trailing slashes in URLs, otherwise `true`.
	   * @returns {boolean} the current value of strictMode
	   */
	  this.strictMode = function(value) {
	    if (isDefined(value))
	      isStrictMode = value;
	    return isStrictMode;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#defaultSquashPolicy
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Sets the default behavior when generating or matching URLs with default parameter values.
	   *
	   * @param {string} value A string that defines the default parameter URL squashing behavior.
	   *    `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
	   *    `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
	   *             parameter is surrounded by slashes, squash (remove) one slash from the URL
	   *    any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
	   *             the parameter value from the URL and replace it with this string.
	   */
	  this.defaultSquashPolicy = function(value) {
	    if (!isDefined(value)) return defaultSquashPolicy;
	    if (value !== true && value !== false && !isString(value))
	      throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
	    defaultSquashPolicy = value;
	    return value;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#compile
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Creates a {@link ui.router.util.type:UrlMatcher `UrlMatcher`} for the specified pattern.
	   *
	   * @param {string} pattern  The URL pattern.
	   * @param {Object} config  The config object hash.
	   * @returns {UrlMatcher}  The UrlMatcher.
	   */
	  this.compile = function (pattern, config) {
	    return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#isMatcher
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Returns true if the specified object is a `UrlMatcher`, or false otherwise.
	   *
	   * @param {Object} object  The object to perform the type check against.
	   * @returns {Boolean}  Returns `true` if the object matches the `UrlMatcher` interface, by
	   *          implementing all the same methods.
	   */
	  this.isMatcher = function (o) {
	    if (!isObject(o)) return false;
	    var result = true;

	    forEach(UrlMatcher.prototype, function(val, name) {
	      if (isFunction(val)) {
	        result = result && (isDefined(o[name]) && isFunction(o[name]));
	      }
	    });
	    return result;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#type
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Registers a custom {@link ui.router.util.type:Type `Type`} object that can be used to
	   * generate URLs with typed parameters.
	   *
	   * @param {string} name  The type name.
	   * @param {Object|Function} definition   The type definition. See
	   *        {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   * @param {Object|Function} definitionFn (optional) A function that is injected before the app
	   *        runtime starts.  The result of this function is merged into the existing `definition`.
	   *        See {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   *
	   * @returns {Object}  Returns `$urlMatcherFactoryProvider`.
	   *
	   * @example
	   * This is a simple example of a custom type that encodes and decodes items from an
	   * array, using the array index as the URL-encoded value:
	   *
	   * <pre>
	   * var list = ['John', 'Paul', 'George', 'Ringo'];
	   *
	   * $urlMatcherFactoryProvider.type('listItem', {
	   *   encode: function(item) {
	   *     // Represent the list item in the URL using its corresponding index
	   *     return list.indexOf(item);
	   *   },
	   *   decode: function(item) {
	   *     // Look up the list item by index
	   *     return list[parseInt(item, 10)];
	   *   },
	   *   is: function(item) {
	   *     // Ensure the item is valid by checking to see that it appears
	   *     // in the list
	   *     return list.indexOf(item) > -1;
	   *   }
	   * });
	   *
	   * $stateProvider.state('list', {
	   *   url: "/list/{item:listItem}",
	   *   controller: function($scope, $stateParams) {
	   *     console.log($stateParams.item);
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * // Changes URL to '/list/3', logs "Ringo" to the console
	   * $state.go('list', { item: "Ringo" });
	   * </pre>
	   *
	   * This is a more complex example of a type that relies on dependency injection to
	   * interact with services, and uses the parameter name from the URL to infer how to
	   * handle encoding and decoding parameter values:
	   *
	   * <pre>
	   * // Defines a custom type that gets a value from a service,
	   * // where each service gets different types of values from
	   * // a backend API:
	   * $urlMatcherFactoryProvider.type('dbObject', {}, function(Users, Posts) {
	   *
	   *   // Matches up services to URL parameter names
	   *   var services = {
	   *     user: Users,
	   *     post: Posts
	   *   };
	   *
	   *   return {
	   *     encode: function(object) {
	   *       // Represent the object in the URL using its unique ID
	   *       return object.id;
	   *     },
	   *     decode: function(value, key) {
	   *       // Look up the object by ID, using the parameter
	   *       // name (key) to call the correct service
	   *       return services[key].findById(value);
	   *     },
	   *     is: function(object, key) {
	   *       // Check that object is a valid dbObject
	   *       return angular.isObject(object) && object.id && services[key];
	   *     }
	   *     equals: function(a, b) {
	   *       // Check the equality of decoded objects by comparing
	   *       // their unique IDs
	   *       return a.id === b.id;
	   *     }
	   *   };
	   * });
	   *
	   * // In a config() block, you can then attach URLs with
	   * // type-annotated parameters:
	   * $stateProvider.state('users', {
	   *   url: "/users",
	   *   // ...
	   * }).state('users.item', {
	   *   url: "/{user:dbObject}",
	   *   controller: function($scope, $stateParams) {
	   *     // $stateParams.user will now be an object returned from
	   *     // the Users service
	   *   },
	   *   // ...
	   * });
	   * </pre>
	   */
	  this.type = function (name, definition, definitionFn) {
	    if (!isDefined(definition)) return $types[name];
	    if ($types.hasOwnProperty(name)) throw new Error("A type named '" + name + "' has already been defined.");

	    $types[name] = new Type(extend({ name: name }, definition));
	    if (definitionFn) {
	      typeQueue.push({ name: name, def: definitionFn });
	      if (!enqueue) flushTypeQueue();
	    }
	    return this;
	  };

	  // `flushTypeQueue()` waits until `$urlMatcherFactory` is injected before invoking the queued `definitionFn`s
	  function flushTypeQueue() {
	    while(typeQueue.length) {
	      var type = typeQueue.shift();
	      if (type.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
	      angular.extend($types[type.name], injector.invoke(type.def));
	    }
	  }

	  // Register default types. Store them in the prototype of $types.
	  forEach(defaultTypes, function(type, name) { $types[name] = new Type(extend({name: name}, type)); });
	  $types = inherit($types, {});

	  /* No need to document $get, since it returns this */
	  this.$get = ['$injector', function ($injector) {
	    injector = $injector;
	    enqueue = false;
	    flushTypeQueue();

	    forEach(defaultTypes, function(type, name) {
	      if (!$types[name]) $types[name] = new Type(type);
	    });
	    return this;
	  }];

	  this.Param = function Param(id, type, config, location) {
	    var self = this;
	    config = unwrapShorthand(config);
	    type = getType(config, type, location);
	    var arrayMode = getArrayMode();
	    type = arrayMode ? type.$asArray(arrayMode, location === "search") : type;
	    if (type.name === "string" && !arrayMode && location === "path" && config.value === undefined)
	      config.value = ""; // for 0.2.x; in 0.3.0+ do not automatically default to ""
	    var isOptional = config.value !== undefined;
	    var squash = getSquashPolicy(config, isOptional);
	    var replace = getReplace(config, arrayMode, isOptional, squash);

	    function unwrapShorthand(config) {
	      var keys = isObject(config) ? objectKeys(config) : [];
	      var isShorthand = indexOf(keys, "value") === -1 && indexOf(keys, "type") === -1 &&
	                        indexOf(keys, "squash") === -1 && indexOf(keys, "array") === -1;
	      if (isShorthand) config = { value: config };
	      config.$$fn = isInjectable(config.value) ? config.value : function () { return config.value; };
	      return config;
	    }

	    function getType(config, urlType, location) {
	      if (config.type && urlType) throw new Error("Param '"+id+"' has two type configurations.");
	      if (urlType) return urlType;
	      if (!config.type) return (location === "config" ? $types.any : $types.string);
	      return config.type instanceof Type ? config.type : new Type(config.type);
	    }

	    // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
	    function getArrayMode() {
	      var arrayDefaults = { array: (location === "search" ? "auto" : false) };
	      var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
	      return extend(arrayDefaults, arrayParamNomenclature, config).array;
	    }

	    /**
	     * returns false, true, or the squash value to indicate the "default parameter url squash policy".
	     */
	    function getSquashPolicy(config, isOptional) {
	      var squash = config.squash;
	      if (!isOptional || squash === false) return false;
	      if (!isDefined(squash) || squash == null) return defaultSquashPolicy;
	      if (squash === true || isString(squash)) return squash;
	      throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
	    }

	    function getReplace(config, arrayMode, isOptional, squash) {
	      var replace, configuredKeys, defaultPolicy = [
	        { from: "",   to: (isOptional || arrayMode ? undefined : "") },
	        { from: null, to: (isOptional || arrayMode ? undefined : "") }
	      ];
	      replace = isArray(config.replace) ? config.replace : [];
	      if (isString(squash))
	        replace.push({ from: squash, to: undefined });
	      configuredKeys = map(replace, function(item) { return item.from; } );
	      return filter(defaultPolicy, function(item) { return indexOf(configuredKeys, item.from) === -1; }).concat(replace);
	    }

	    /**
	     * [Internal] Get the default value of a parameter, which may be an injectable function.
	     */
	    function $$getDefaultValue() {
	      if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
	      var defaultValue = injector.invoke(config.$$fn);
	      if (defaultValue !== null && defaultValue !== undefined && !self.type.is(defaultValue))
	        throw new Error("Default value (" + defaultValue + ") for parameter '" + self.id + "' is not an instance of Type (" + self.type.name + ")");
	      return defaultValue;
	    }

	    /**
	     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
	     * default value, which may be the result of an injectable function.
	     */
	    function $value(value) {
	      function hasReplaceVal(val) { return function(obj) { return obj.from === val; }; }
	      function $replace(value) {
	        var replacement = map(filter(self.replace, hasReplaceVal(value)), function(obj) { return obj.to; });
	        return replacement.length ? replacement[0] : value;
	      }
	      value = $replace(value);
	      return !isDefined(value) ? $$getDefaultValue() : self.type.$normalize(value);
	    }

	    function toString() { return "{Param:" + id + " " + type + " squash: '" + squash + "' optional: " + isOptional + "}"; }

	    extend(this, {
	      id: id,
	      type: type,
	      location: location,
	      array: arrayMode,
	      squash: squash,
	      replace: replace,
	      isOptional: isOptional,
	      value: $value,
	      dynamic: undefined,
	      config: config,
	      toString: toString
	    });
	  };

	  function ParamSet(params) {
	    extend(this, params || {});
	  }

	  ParamSet.prototype = {
	    $$new: function() {
	      return inherit(this, extend(new ParamSet(), { $$parent: this}));
	    },
	    $$keys: function () {
	      var keys = [], chain = [], parent = this,
	        ignore = objectKeys(ParamSet.prototype);
	      while (parent) { chain.push(parent); parent = parent.$$parent; }
	      chain.reverse();
	      forEach(chain, function(paramset) {
	        forEach(objectKeys(paramset), function(key) {
	            if (indexOf(keys, key) === -1 && indexOf(ignore, key) === -1) keys.push(key);
	        });
	      });
	      return keys;
	    },
	    $$values: function(paramValues) {
	      var values = {}, self = this;
	      forEach(self.$$keys(), function(key) {
	        values[key] = self[key].value(paramValues && paramValues[key]);
	      });
	      return values;
	    },
	    $$equals: function(paramValues1, paramValues2) {
	      var equal = true, self = this;
	      forEach(self.$$keys(), function(key) {
	        var left = paramValues1 && paramValues1[key], right = paramValues2 && paramValues2[key];
	        if (!self[key].type.equals(left, right)) equal = false;
	      });
	      return equal;
	    },
	    $$validates: function $$validate(paramValues) {
	      var keys = this.$$keys(), i, param, rawVal, normalized, encoded;
	      for (i = 0; i < keys.length; i++) {
	        param = this[keys[i]];
	        rawVal = paramValues[keys[i]];
	        if ((rawVal === undefined || rawVal === null) && param.isOptional)
	          break; // There was no parameter value, but the param is optional
	        normalized = param.type.$normalize(rawVal);
	        if (!param.type.is(normalized))
	          return false; // The value was not of the correct Type, and could not be decoded to the correct Type
	        encoded = param.type.encode(normalized);
	        if (angular.isString(encoded) && !param.type.pattern.exec(encoded))
	          return false; // The value was of the correct type, but when encoded, did not match the Type's regexp
	      }
	      return true;
	    },
	    $$parent: undefined
	  };

	  this.ParamSet = ParamSet;
	}

	// Register as a provider so it's available to other providers
	angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
	angular.module('ui.router.util').run(['$urlMatcherFactory', function($urlMatcherFactory) { }]);

	/**
	 * @ngdoc object
	 * @name ui.router.router.$urlRouterProvider
	 *
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 * @requires $locationProvider
	 *
	 * @description
	 * `$urlRouterProvider` has the responsibility of watching `$location`. 
	 * When `$location` changes it runs through a list of rules one by one until a 
	 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
	 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
	 *
	 * There are several methods on `$urlRouterProvider` that make it useful to use directly
	 * in your module config.
	 */
	$UrlRouterProvider.$inject = ['$locationProvider', '$urlMatcherFactoryProvider'];
	function $UrlRouterProvider(   $locationProvider,   $urlMatcherFactory) {
	  var rules = [], otherwise = null, interceptDeferred = false, listener;

	  // Returns a string that is a prefix of all strings matching the RegExp
	  function regExpPrefix(re) {
	    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
	    return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
	  }

	  // Interpolates matched values into a String.replace()-style pattern
	  function interpolate(pattern, match) {
	    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
	      return match[what === '$' ? 0 : Number(what)];
	    });
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#rule
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines rules that are used by `$urlRouterProvider` to find matches for
	   * specific URLs.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // Here's an example of how you might allow case insensitive urls
	   *   $urlRouterProvider.rule(function ($injector, $location) {
	   *     var path = $location.path(),
	   *         normalized = path.toLowerCase();
	   *
	   *     if (path !== normalized) {
	   *       return normalized;
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {object} rule Handler function that takes `$injector` and `$location`
	   * services as arguments. You can use them to return a valid path as a string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */
	  this.rule = function (rule) {
	    if (!isFunction(rule)) throw new Error("'rule' must be a function");
	    rules.push(rule);
	    return this;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouterProvider#otherwise
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines a path that is used when an invalid route is requested.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // if the path doesn't match any of the urls you configured
	   *   // otherwise will take care of routing the user to the
	   *   // specified url
	   *   $urlRouterProvider.otherwise('/index');
	   *
	   *   // Example of using function rule as param
	   *   $urlRouterProvider.otherwise(function ($injector, $location) {
	   *     return '/a/valid/url';
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|object} rule The url path you want to redirect to or a function 
	   * rule that returns the url path. The function version is passed two params: 
	   * `$injector` and `$location` services, and must return a url string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */
	  this.otherwise = function (rule) {
	    if (isString(rule)) {
	      var redirect = rule;
	      rule = function () { return redirect; };
	    }
	    else if (!isFunction(rule)) throw new Error("'rule' must be a function");
	    otherwise = rule;
	    return this;
	  };


	  function handleIfMatch($injector, handler, match) {
	    if (!match) return false;
	    var result = $injector.invoke(handler, handler, { $match: match });
	    return isDefined(result) ? result : true;
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#when
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Registers a handler for a given url matching. if handle is a string, it is
	   * treated as a redirect, and is interpolated according to the syntax of match
	   * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
	   *
	   * If the handler is a function, it is injectable. It gets invoked if `$location`
	   * matches. You have the option of inject the match object as `$match`.
	   *
	   * The handler can return
	   *
	   * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
	   *   will continue trying to find another one that matches.
	   * - **string** which is treated as a redirect and passed to `$location.url()`
	   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
	   *     if ($state.$current.navigable !== state ||
	   *         !equalForKeys($match, $stateParams) {
	   *      $state.transitionTo(state, $match, false);
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|object} what The incoming path that you want to redirect.
	   * @param {string|object} handler The path you want to redirect your user to.
	   */
	  this.when = function (what, handler) {
	    var redirect, handlerIsString = isString(handler);
	    if (isString(what)) what = $urlMatcherFactory.compile(what);

	    if (!handlerIsString && !isFunction(handler) && !isArray(handler))
	      throw new Error("invalid 'handler' in when()");

	    var strategies = {
	      matcher: function (what, handler) {
	        if (handlerIsString) {
	          redirect = $urlMatcherFactory.compile(handler);
	          handler = ['$match', function ($match) { return redirect.format($match); }];
	        }
	        return extend(function ($injector, $location) {
	          return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
	        }, {
	          prefix: isString(what.prefix) ? what.prefix : ''
	        });
	      },
	      regex: function (what, handler) {
	        if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");

	        if (handlerIsString) {
	          redirect = handler;
	          handler = ['$match', function ($match) { return interpolate(redirect, $match); }];
	        }
	        return extend(function ($injector, $location) {
	          return handleIfMatch($injector, handler, what.exec($location.path()));
	        }, {
	          prefix: regExpPrefix(what)
	        });
	      }
	    };

	    var check = { matcher: $urlMatcherFactory.isMatcher(what), regex: what instanceof RegExp };

	    for (var n in check) {
	      if (check[n]) return this.rule(strategies[n](what, handler));
	    }

	    throw new Error("invalid 'what' in when()");
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#deferIntercept
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Disables (or enables) deferring location change interception.
	   *
	   * If you wish to customize the behavior of syncing the URL (for example, if you wish to
	   * defer a transition but maintain the current URL), call this method at configuration time.
	   * Then, at run time, call `$urlRouter.listen()` after you have configured your own
	   * `$locationChangeSuccess` event handler.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *
	   *   // Prevent $urlRouter from automatically intercepting URL changes;
	   *   // this allows you to configure custom behavior in between
	   *   // location changes and route synchronization:
	   *   $urlRouterProvider.deferIntercept();
	   *
	   * }).run(function ($rootScope, $urlRouter, UserService) {
	   *
	   *   $rootScope.$on('$locationChangeSuccess', function(e) {
	   *     // UserService is an example service for managing user state
	   *     if (UserService.isLoggedIn()) return;
	   *
	   *     // Prevent $urlRouter's default handler from firing
	   *     e.preventDefault();
	   *
	   *     UserService.handleLogin().then(function() {
	   *       // Once the user has logged in, sync the current URL
	   *       // to the router:
	   *       $urlRouter.sync();
	   *     });
	   *   });
	   *
	   *   // Configures $urlRouter's listener *after* your custom listener
	   *   $urlRouter.listen();
	   * });
	   * </pre>
	   *
	   * @param {boolean} defer Indicates whether to defer location change interception. Passing
	            no parameter is equivalent to `true`.
	   */
	  this.deferIntercept = function (defer) {
	    if (defer === undefined) defer = true;
	    interceptDeferred = defer;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouter
	   *
	   * @requires $location
	   * @requires $rootScope
	   * @requires $injector
	   * @requires $browser
	   *
	   * @description
	   *
	   */
	  this.$get = $get;
	  $get.$inject = ['$location', '$rootScope', '$injector', '$browser'];
	  function $get(   $location,   $rootScope,   $injector,   $browser) {

	    var baseHref = $browser.baseHref(), location = $location.url(), lastPushedUrl;

	    function appendBasePath(url, isHtml5, absolute) {
	      if (baseHref === '/') return url;
	      if (isHtml5) return baseHref.slice(0, -1) + url;
	      if (absolute) return baseHref.slice(1) + url;
	      return url;
	    }

	    // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
	    function update(evt) {
	      if (evt && evt.defaultPrevented) return;
	      var ignoreUpdate = lastPushedUrl && $location.url() === lastPushedUrl;
	      lastPushedUrl = undefined;
	      // TODO: Re-implement this in 1.0 for https://github.com/angular-ui/ui-router/issues/1573
	      //if (ignoreUpdate) return true;

	      function check(rule) {
	        var handled = rule($injector, $location);

	        if (!handled) return false;
	        if (isString(handled)) $location.replace().url(handled);
	        return true;
	      }
	      var n = rules.length, i;

	      for (i = 0; i < n; i++) {
	        if (check(rules[i])) return;
	      }
	      // always check otherwise last to allow dynamic updates to the set of rules
	      if (otherwise) check(otherwise);
	    }

	    function listen() {
	      listener = listener || $rootScope.$on('$locationChangeSuccess', update);
	      return listener;
	    }

	    if (!interceptDeferred) listen();

	    return {
	      /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#sync
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
	       * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
	       * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
	       * with the transition by calling `$urlRouter.sync()`.
	       *
	       * @example
	       * <pre>
	       * angular.module('app', ['ui.router'])
	       *   .run(function($rootScope, $urlRouter) {
	       *     $rootScope.$on('$locationChangeSuccess', function(evt) {
	       *       // Halt state change from even starting
	       *       evt.preventDefault();
	       *       // Perform custom logic
	       *       var meetsRequirement = ...
	       *       // Continue with the update and state transition if logic allows
	       *       if (meetsRequirement) $urlRouter.sync();
	       *     });
	       * });
	       * </pre>
	       */
	      sync: function() {
	        update();
	      },

	      listen: function() {
	        return listen();
	      },

	      update: function(read) {
	        if (read) {
	          location = $location.url();
	          return;
	        }
	        if ($location.url() === location) return;

	        $location.url(location);
	        $location.replace();
	      },

	      push: function(urlMatcher, params, options) {
	         var url = urlMatcher.format(params || {});

	        // Handle the special hash param, if needed
	        if (url !== null && params && params['#']) {
	            url += '#' + params['#'];
	        }

	        $location.url(url);
	        lastPushedUrl = options && options.$$avoidResync ? $location.url() : undefined;
	        if (options && options.replace) $location.replace();
	      },

	      /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#href
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * A URL generation method that returns the compiled URL for a given
	       * {@link ui.router.util.type:UrlMatcher `UrlMatcher`}, populated with the provided parameters.
	       *
	       * @example
	       * <pre>
	       * $bob = $urlRouter.href(new UrlMatcher("/about/:person"), {
	       *   person: "bob"
	       * });
	       * // $bob == "/about/bob";
	       * </pre>
	       *
	       * @param {UrlMatcher} urlMatcher The `UrlMatcher` object which is used as the template of the URL to generate.
	       * @param {object=} params An object of parameter values to fill the matcher's required parameters.
	       * @param {object=} options Options object. The options are:
	       *
	       * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	       *
	       * @returns {string} Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
	       */
	      href: function(urlMatcher, params, options) {
	        if (!urlMatcher.validates(params)) return null;

	        var isHtml5 = $locationProvider.html5Mode();
	        if (angular.isObject(isHtml5)) {
	          isHtml5 = isHtml5.enabled;
	        }
	        
	        var url = urlMatcher.format(params);
	        options = options || {};

	        if (!isHtml5 && url !== null) {
	          url = "#" + $locationProvider.hashPrefix() + url;
	        }

	        // Handle special hash param, if needed
	        if (url !== null && params && params['#']) {
	          url += '#' + params['#'];
	        }

	        url = appendBasePath(url, isHtml5, options.absolute);

	        if (!options.absolute || !url) {
	          return url;
	        }

	        var slash = (!isHtml5 && url ? '/' : ''), port = $location.port();
	        port = (port === 80 || port === 443 ? '' : ':' + port);

	        return [$location.protocol(), '://', $location.host(), port, slash, url].join('');
	      }
	    };
	  }
	}

	angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);

	/**
	 * @ngdoc object
	 * @name ui.router.state.$stateProvider
	 *
	 * @requires ui.router.router.$urlRouterProvider
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 *
	 * @description
	 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
	 * on state.
	 *
	 * A state corresponds to a "place" in the application in terms of the overall UI and
	 * navigation. A state describes (via the controller / template / view properties) what
	 * the UI looks like and does at that place.
	 *
	 * States often have things in common, and the primary way of factoring out these
	 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
	 * nested states.
	 *
	 * The `$stateProvider` provides interfaces to declare these states for your app.
	 */
	$StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
	function $StateProvider(   $urlRouterProvider,   $urlMatcherFactory) {

	  var root, states = {}, $state, queue = {}, abstractKey = 'abstract';

	  // Builds state properties from definition passed to registerState()
	  var stateBuilder = {

	    // Derive parent state from a hierarchical name only if 'parent' is not explicitly defined.
	    // state.children = [];
	    // if (parent) parent.children.push(state);
	    parent: function(state) {
	      if (isDefined(state.parent) && state.parent) return findState(state.parent);
	      // regex matches any valid composite state name
	      // would match "contact.list" but not "contacts"
	      var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
	      return compositeName ? findState(compositeName[1]) : root;
	    },

	    // inherit 'data' from parent and override by own values (if any)
	    data: function(state) {
	      if (state.parent && state.parent.data) {
	        state.data = state.self.data = extend({}, state.parent.data, state.data);
	      }
	      return state.data;
	    },

	    // Build a URLMatcher if necessary, either via a relative or absolute URL
	    url: function(state) {
	      var url = state.url, config = { params: state.params || {} };

	      if (isString(url)) {
	        if (url.charAt(0) == '^') return $urlMatcherFactory.compile(url.substring(1), config);
	        return (state.parent.navigable || root).url.concat(url, config);
	      }

	      if (!url || $urlMatcherFactory.isMatcher(url)) return url;
	      throw new Error("Invalid url '" + url + "' in state '" + state + "'");
	    },

	    // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
	    navigable: function(state) {
	      return state.url ? state : (state.parent ? state.parent.navigable : null);
	    },

	    // Own parameters for this state. state.url.params is already built at this point. Create and add non-url params
	    ownParams: function(state) {
	      var params = state.url && state.url.params || new $$UMFP.ParamSet();
	      forEach(state.params || {}, function(config, id) {
	        if (!params[id]) params[id] = new $$UMFP.Param(id, null, config, "config");
	      });
	      return params;
	    },

	    // Derive parameters for this state and ensure they're a super-set of parent's parameters
	    params: function(state) {
	      return state.parent && state.parent.params ? extend(state.parent.params.$$new(), state.ownParams) : new $$UMFP.ParamSet();
	    },

	    // If there is no explicit multi-view configuration, make one up so we don't have
	    // to handle both cases in the view directive later. Note that having an explicit
	    // 'views' property will mean the default unnamed view properties are ignored. This
	    // is also a good time to resolve view names to absolute names, so everything is a
	    // straight lookup at link time.
	    views: function(state) {
	      var views = {};

	      forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
	        if (name.indexOf('@') < 0) name += '@' + state.parent.name;
	        views[name] = view;
	      });
	      return views;
	    },

	    // Keep a full path from the root down to this state as this is needed for state activation.
	    path: function(state) {
	      return state.parent ? state.parent.path.concat(state) : []; // exclude root from path
	    },

	    // Speed up $state.contains() as it's used a lot
	    includes: function(state) {
	      var includes = state.parent ? extend({}, state.parent.includes) : {};
	      includes[state.name] = true;
	      return includes;
	    },

	    $delegates: {}
	  };

	  function isRelative(stateName) {
	    return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
	  }

	  function findState(stateOrName, base) {
	    if (!stateOrName) return undefined;

	    var isStr = isString(stateOrName),
	        name  = isStr ? stateOrName : stateOrName.name,
	        path  = isRelative(name);

	    if (path) {
	      if (!base) throw new Error("No reference point given for path '"  + name + "'");
	      base = findState(base);
	      
	      var rel = name.split("."), i = 0, pathLength = rel.length, current = base;

	      for (; i < pathLength; i++) {
	        if (rel[i] === "" && i === 0) {
	          current = base;
	          continue;
	        }
	        if (rel[i] === "^") {
	          if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
	          current = current.parent;
	          continue;
	        }
	        break;
	      }
	      rel = rel.slice(i).join(".");
	      name = current.name + (current.name && rel ? "." : "") + rel;
	    }
	    var state = states[name];

	    if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
	      return state;
	    }
	    return undefined;
	  }

	  function queueState(parentName, state) {
	    if (!queue[parentName]) {
	      queue[parentName] = [];
	    }
	    queue[parentName].push(state);
	  }

	  function flushQueuedChildren(parentName) {
	    var queued = queue[parentName] || [];
	    while(queued.length) {
	      registerState(queued.shift());
	    }
	  }

	  function registerState(state) {
	    // Wrap a new object around the state so we can store our private details easily.
	    state = inherit(state, {
	      self: state,
	      resolve: state.resolve || {},
	      toString: function() { return this.name; }
	    });

	    var name = state.name;
	    if (!isString(name) || name.indexOf('@') >= 0) throw new Error("State must have a valid name");
	    if (states.hasOwnProperty(name)) throw new Error("State '" + name + "'' is already defined");

	    // Get parent name
	    var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.'))
	        : (isString(state.parent)) ? state.parent
	        : (isObject(state.parent) && isString(state.parent.name)) ? state.parent.name
	        : '';

	    // If parent is not registered yet, add state to queue and register later
	    if (parentName && !states[parentName]) {
	      return queueState(parentName, state.self);
	    }

	    for (var key in stateBuilder) {
	      if (isFunction(stateBuilder[key])) state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
	    }
	    states[name] = state;

	    // Register the state in the global state list and with $urlRouter if necessary.
	    if (!state[abstractKey] && state.url) {
	      $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
	        if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
	          $state.transitionTo(state, $match, { inherit: true, location: false });
	        }
	      }]);
	    }

	    // Register any queued children
	    flushQueuedChildren(name);

	    return state;
	  }

	  // Checks text to see if it looks like a glob.
	  function isGlob (text) {
	    return text.indexOf('*') > -1;
	  }

	  // Returns true if glob matches current $state name.
	  function doesStateMatchGlob (glob) {
	    var globSegments = glob.split('.'),
	        segments = $state.$current.name.split('.');

	    //match single stars
	    for (var i = 0, l = globSegments.length; i < l; i++) {
	      if (globSegments[i] === '*') {
	        segments[i] = '*';
	      }
	    }

	    //match greedy starts
	    if (globSegments[0] === '**') {
	       segments = segments.slice(indexOf(segments, globSegments[1]));
	       segments.unshift('**');
	    }
	    //match greedy ends
	    if (globSegments[globSegments.length - 1] === '**') {
	       segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
	       segments.push('**');
	    }

	    if (globSegments.length != segments.length) {
	      return false;
	    }

	    return segments.join('') === globSegments.join('');
	  }


	  // Implicit root state that is always active
	  root = registerState({
	    name: '',
	    url: '^',
	    views: null,
	    'abstract': true
	  });
	  root.navigable = null;


	  /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#decorator
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Allows you to extend (carefully) or override (at your own peril) the 
	   * `stateBuilder` object used internally by `$stateProvider`. This can be used 
	   * to add custom functionality to ui-router, for example inferring templateUrl 
	   * based on the state name.
	   *
	   * When passing only a name, it returns the current (original or decorated) builder
	   * function that matches `name`.
	   *
	   * The builder functions that can be decorated are listed below. Though not all
	   * necessarily have a good use case for decoration, that is up to you to decide.
	   *
	   * In addition, users can attach custom decorators, which will generate new 
	   * properties within the state's internal definition. There is currently no clear 
	   * use-case for this beyond accessing internal states (i.e. $state.$current), 
	   * however, expect this to become increasingly relevant as we introduce additional 
	   * meta-programming features.
	   *
	   * **Warning**: Decorators should not be interdependent because the order of 
	   * execution of the builder functions in non-deterministic. Builder functions 
	   * should only be dependent on the state definition object and super function.
	   *
	   *
	   * Existing builder functions and current return values:
	   *
	   * - **parent** `{object}` - returns the parent state object.
	   * - **data** `{object}` - returns state data, including any inherited data that is not
	   *   overridden by own values (if any).
	   * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
	   *   or `null`.
	   * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
	   *   navigable).
	   * - **params** `{object}` - returns an array of state params that are ensured to 
	   *   be a super-set of parent's params.
	   * - **views** `{object}` - returns a views object where each key is an absolute view 
	   *   name (i.e. "viewName@stateName") and each value is the config object 
	   *   (template, controller) for the view. Even when you don't use the views object 
	   *   explicitly on a state config, one is still created for you internally.
	   *   So by decorating this builder function you have access to decorating template 
	   *   and controller properties.
	   * - **ownParams** `{object}` - returns an array of params that belong to the state, 
	   *   not including any params defined by ancestor states.
	   * - **path** `{string}` - returns the full path from the root down to this state. 
	   *   Needed for state activation.
	   * - **includes** `{object}` - returns an object that includes every state that 
	   *   would pass a `$state.includes()` test.
	   *
	   * @example
	   * <pre>
	   * // Override the internal 'views' builder with a function that takes the state
	   * // definition, and a reference to the internal function being overridden:
	   * $stateProvider.decorator('views', function (state, parent) {
	   *   var result = {},
	   *       views = parent(state);
	   *
	   *   angular.forEach(views, function (config, name) {
	   *     var autoName = (state.name + '.' + name).replace('.', '/');
	   *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
	   *     result[name] = config;
	   *   });
	   *   return result;
	   * });
	   *
	   * $stateProvider.state('home', {
	   *   views: {
	   *     'contact.list': { controller: 'ListController' },
	   *     'contact.item': { controller: 'ItemController' }
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * $state.go('home');
	   * // Auto-populates list and item views with /partials/home/contact/list.html,
	   * // and /partials/home/contact/item.html, respectively.
	   * </pre>
	   *
	   * @param {string} name The name of the builder function to decorate. 
	   * @param {object} func A function that is responsible for decorating the original 
	   * builder function. The function receives two parameters:
	   *
	   *   - `{object}` - state - The state config object.
	   *   - `{object}` - super - The original builder function.
	   *
	   * @return {object} $stateProvider - $stateProvider instance
	   */
	  this.decorator = decorator;
	  function decorator(name, func) {
	    /*jshint validthis: true */
	    if (isString(name) && !isDefined(func)) {
	      return stateBuilder[name];
	    }
	    if (!isFunction(func) || !isString(name)) {
	      return this;
	    }
	    if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
	      stateBuilder.$delegates[name] = stateBuilder[name];
	    }
	    stateBuilder[name] = func;
	    return this;
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#state
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Registers a state configuration under a given state name. The stateConfig object
	   * has the following acceptable properties.
	   *
	   * @param {string} name A unique state name, e.g. "home", "about", "contacts".
	   * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
	   * @param {object} stateConfig State configuration object.
	   * @param {string|function=} stateConfig.template
	   * <a id='template'></a>
	   *   html template as a string or a function that returns
	   *   an html template as a string which should be used by the uiView directives. This property 
	   *   takes precedence over templateUrl.
	   *   
	   *   If `template` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
	   *     applying the current state
	   *
	   * <pre>template:
	   *   "<h1>inline template definition</h1>" +
	   *   "<div ui-view></div>"</pre>
	   * <pre>template: function(params) {
	   *       return "<h1>generated template</h1>"; }</pre>
	   * </div>
	   *
	   * @param {string|function=} stateConfig.templateUrl
	   * <a id='templateUrl'></a>
	   *
	   *   path or function that returns a path to an html
	   *   template that should be used by uiView.
	   *   
	   *   If `templateUrl` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by 
	   *     applying the current state
	   *
	   * <pre>templateUrl: "home.html"</pre>
	   * <pre>templateUrl: function(params) {
	   *     return myTemplates[params.pageId]; }</pre>
	   *
	   * @param {function=} stateConfig.templateProvider
	   * <a id='templateProvider'></a>
	   *    Provider function that returns HTML content string.
	   * <pre> templateProvider:
	   *       function(MyTemplateService, params) {
	   *         return MyTemplateService.getTemplate(params.pageId);
	   *       }</pre>
	   *
	   * @param {string|function=} stateConfig.controller
	   * <a id='controller'></a>
	   *
	   *  Controller fn that should be associated with newly
	   *   related scope or the name of a registered controller if passed as a string.
	   *   Optionally, the ControllerAs may be declared here.
	   * <pre>controller: "MyRegisteredController"</pre>
	   * <pre>controller:
	   *     "MyRegisteredController as fooCtrl"}</pre>
	   * <pre>controller: function($scope, MyService) {
	   *     $scope.data = MyService.getData(); }</pre>
	   *
	   * @param {function=} stateConfig.controllerProvider
	   * <a id='controllerProvider'></a>
	   *
	   * Injectable provider function that returns the actual controller or string.
	   * <pre>controllerProvider:
	   *   function(MyResolveData) {
	   *     if (MyResolveData.foo)
	   *       return "FooCtrl"
	   *     else if (MyResolveData.bar)
	   *       return "BarCtrl";
	   *     else return function($scope) {
	   *       $scope.baz = "Qux";
	   *     }
	   *   }</pre>
	   *
	   * @param {string=} stateConfig.controllerAs
	   * <a id='controllerAs'></a>
	   * 
	   * A controller alias name. If present the controller will be
	   *   published to scope under the controllerAs name.
	   * <pre>controllerAs: "myCtrl"</pre>
	   *
	   * @param {string|object=} stateConfig.parent
	   * <a id='parent'></a>
	   * Optionally specifies the parent state of this state.
	   *
	   * <pre>parent: 'parentState'</pre>
	   * <pre>parent: parentState // JS variable</pre>
	   *
	   * @param {object=} stateConfig.resolve
	   * <a id='resolve'></a>
	   *
	   * An optional map&lt;string, function&gt; of dependencies which
	   *   should be injected into the controller. If any of these dependencies are promises, 
	   *   the router will wait for them all to be resolved before the controller is instantiated.
	   *   If all the promises are resolved successfully, the $stateChangeSuccess event is fired
	   *   and the values of the resolved promises are injected into any controllers that reference them.
	   *   If any  of the promises are rejected the $stateChangeError event is fired.
	   *
	   *   The map object is:
	   *   
	   *   - key - {string}: name of dependency to be injected into controller
	   *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
	   *     it is injected and return value it treated as dependency. If result is a promise, it is 
	   *     resolved before its value is injected into controller.
	   *
	   * <pre>resolve: {
	   *     myResolve1:
	   *       function($http, $stateParams) {
	   *         return $http.get("/api/foos/"+stateParams.fooID);
	   *       }
	   *     }</pre>
	   *
	   * @param {string=} stateConfig.url
	   * <a id='url'></a>
	   *
	   *   A url fragment with optional parameters. When a state is navigated or
	   *   transitioned to, the `$stateParams` service will be populated with any 
	   *   parameters that were passed.
	   *
	   *   (See {@link ui.router.util.type:UrlMatcher UrlMatcher} `UrlMatcher`} for
	   *   more details on acceptable patterns )
	   *
	   * examples:
	   * <pre>url: "/home"
	   * url: "/users/:userid"
	   * url: "/books/{bookid:[a-zA-Z_-]}"
	   * url: "/books/{categoryid:int}"
	   * url: "/books/{publishername:string}/{categoryid:int}"
	   * url: "/messages?before&after"
	   * url: "/messages?{before:date}&{after:date}"
	   * url: "/messages/:mailboxid?{before:date}&{after:date}"
	   * </pre>
	   *
	   * @param {object=} stateConfig.views
	   * <a id='views'></a>
	   * an optional map&lt;string, object&gt; which defined multiple views, or targets views
	   * manually/explicitly.
	   *
	   * Examples:
	   *
	   * Targets three named `ui-view`s in the parent state's template
	   * <pre>views: {
	   *     header: {
	   *       controller: "headerCtrl",
	   *       templateUrl: "header.html"
	   *     }, body: {
	   *       controller: "bodyCtrl",
	   *       templateUrl: "body.html"
	   *     }, footer: {
	   *       controller: "footCtrl",
	   *       templateUrl: "footer.html"
	   *     }
	   *   }</pre>
	   *
	   * Targets named `ui-view="header"` from grandparent state 'top''s template, and named `ui-view="body" from parent state's template.
	   * <pre>views: {
	   *     'header@top': {
	   *       controller: "msgHeaderCtrl",
	   *       templateUrl: "msgHeader.html"
	   *     }, 'body': {
	   *       controller: "messagesCtrl",
	   *       templateUrl: "messages.html"
	   *     }
	   *   }</pre>
	   *
	   * @param {boolean=} [stateConfig.abstract=false]
	   * <a id='abstract'></a>
	   * An abstract state will never be directly activated,
	   *   but can provide inherited properties to its common children states.
	   * <pre>abstract: true</pre>
	   *
	   * @param {function=} stateConfig.onEnter
	   * <a id='onEnter'></a>
	   *
	   * Callback function for when a state is entered. Good way
	   *   to trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explictly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onEnter: function(MyService, $stateParams) {
	   *     MyService.foo($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {function=} stateConfig.onExit
	   * <a id='onExit'></a>
	   *
	   * Callback function for when a state is exited. Good way to
	   *   trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explictly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onExit: function(MyService, $stateParams) {
	   *     MyService.cleanup($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {boolean=} [stateConfig.reloadOnSearch=true]
	   * <a id='reloadOnSearch'></a>
	   *
	   * If `false`, will not retrigger the same state
	   *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
	   *   Useful for when you'd like to modify $location.search() without triggering a reload.
	   * <pre>reloadOnSearch: false</pre>
	   *
	   * @param {object=} stateConfig.data
	   * <a id='data'></a>
	   *
	   * Arbitrary data object, useful for custom configuration.  The parent state's `data` is
	   *   prototypally inherited.  In other words, adding a data property to a state adds it to
	   *   the entire subtree via prototypal inheritance.
	   *
	   * <pre>data: {
	   *     requiredRole: 'foo'
	   * } </pre>
	   *
	   * @param {object=} stateConfig.params
	   * <a id='params'></a>
	   *
	   * A map which optionally configures parameters declared in the `url`, or
	   *   defines additional non-url parameters.  For each parameter being
	   *   configured, add a configuration object keyed to the name of the parameter.
	   *
	   *   Each parameter configuration object may contain the following properties:
	   *
	   *   - ** value ** - {object|function=}: specifies the default value for this
	   *     parameter.  This implicitly sets this parameter as optional.
	   *
	   *     When UI-Router routes to a state and no value is
	   *     specified for this parameter in the URL or transition, the
	   *     default value will be used instead.  If `value` is a function,
	   *     it will be injected and invoked, and the return value used.
	   *
	   *     *Note*: `undefined` is treated as "no default value" while `null`
	   *     is treated as "the default value is `null`".
	   *
	   *     *Shorthand*: If you only need to configure the default value of the
	   *     parameter, you may use a shorthand syntax.   In the **`params`**
	   *     map, instead mapping the param name to a full parameter configuration
	   *     object, simply set map it to the default parameter value, e.g.:
	   *
	   * <pre>// define a parameter's default value
	   * params: {
	   *     param1: { value: "defaultValue" }
	   * }
	   * // shorthand default values
	   * params: {
	   *     param1: "defaultValue",
	   *     param2: "param2Default"
	   * }</pre>
	   *
	   *   - ** array ** - {boolean=}: *(default: false)* If true, the param value will be
	   *     treated as an array of values.  If you specified a Type, the value will be
	   *     treated as an array of the specified Type.  Note: query parameter values
	   *     default to a special `"auto"` mode.
	   *
	   *     For query parameters in `"auto"` mode, if multiple  values for a single parameter
	   *     are present in the URL (e.g.: `/foo?bar=1&bar=2&bar=3`) then the values
	   *     are mapped to an array (e.g.: `{ foo: [ '1', '2', '3' ] }`).  However, if
	   *     only one value is present (e.g.: `/foo?bar=1`) then the value is treated as single
	   *     value (e.g.: `{ foo: '1' }`).
	   *
	   * <pre>params: {
	   *     param1: { array: true }
	   * }</pre>
	   *
	   *   - ** squash ** - {bool|string=}: `squash` configures how a default parameter value is represented in the URL when
	   *     the current parameter value is the same as the default value. If `squash` is not set, it uses the
	   *     configured default squash policy.
	   *     (See {@link ui.router.util.$urlMatcherFactory#methods_defaultSquashPolicy `defaultSquashPolicy()`})
	   *
	   *   There are three squash settings:
	   *
	   *     - false: The parameter's default value is not squashed.  It is encoded and included in the URL
	   *     - true: The parameter's default value is omitted from the URL.  If the parameter is preceeded and followed
	   *       by slashes in the state's `url` declaration, then one of those slashes are omitted.
	   *       This can allow for cleaner looking URLs.
	   *     - `"<arbitrary string>"`: The parameter's default value is replaced with an arbitrary placeholder of  your choice.
	   *
	   * <pre>params: {
	   *     param1: {
	   *       value: "defaultId",
	   *       squash: true
	   * } }
	   * // squash "defaultValue" to "~"
	   * params: {
	   *     param1: {
	   *       value: "defaultValue",
	   *       squash: "~"
	   * } }
	   * </pre>
	   *
	   *
	   * @example
	   * <pre>
	   * // Some state name examples
	   *
	   * // stateName can be a single top-level name (must be unique).
	   * $stateProvider.state("home", {});
	   *
	   * // Or it can be a nested state name. This state is a child of the
	   * // above "home" state.
	   * $stateProvider.state("home.newest", {});
	   *
	   * // Nest states as deeply as needed.
	   * $stateProvider.state("home.newest.abc.xyz.inception", {});
	   *
	   * // state() returns $stateProvider, so you can chain state declarations.
	   * $stateProvider
	   *   .state("home", {})
	   *   .state("about", {})
	   *   .state("contacts", {});
	   * </pre>
	   *
	   */
	  this.state = state;
	  function state(name, definition) {
	    /*jshint validthis: true */
	    if (isObject(name)) definition = name;
	    else definition.name = name;
	    registerState(definition);
	    return this;
	  }

	  /**
	   * @ngdoc object
	   * @name ui.router.state.$state
	   *
	   * @requires $rootScope
	   * @requires $q
	   * @requires ui.router.state.$view
	   * @requires $injector
	   * @requires ui.router.util.$resolve
	   * @requires ui.router.state.$stateParams
	   * @requires ui.router.router.$urlRouter
	   *
	   * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
	   * you'd like to test against the current active state.
	   * @property {object} current A reference to the state's config object. However 
	   * you passed it in. Useful for accessing custom data.
	   * @property {object} transition Currently pending transition. A promise that'll 
	   * resolve or reject.
	   *
	   * @description
	   * `$state` service is responsible for representing states as well as transitioning
	   * between them. It also provides interfaces to ask for current state or even states
	   * you're coming from.
	   */
	  this.$get = $get;
	  $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$urlRouter', '$location', '$urlMatcherFactory'];
	  function $get(   $rootScope,   $q,   $view,   $injector,   $resolve,   $stateParams,   $urlRouter,   $location,   $urlMatcherFactory) {

	    var TransitionSuperseded = $q.reject(new Error('transition superseded'));
	    var TransitionPrevented = $q.reject(new Error('transition prevented'));
	    var TransitionAborted = $q.reject(new Error('transition aborted'));
	    var TransitionFailed = $q.reject(new Error('transition failed'));

	    // Handles the case where a state which is the target of a transition is not found, and the user
	    // can optionally retry or defer the transition
	    function handleRedirect(redirect, state, params, options) {
	      /**
	       * @ngdoc event
	       * @name ui.router.state.$state#$stateNotFound
	       * @eventOf ui.router.state.$state
	       * @eventType broadcast on root scope
	       * @description
	       * Fired when a requested state **cannot be found** using the provided state name during transition.
	       * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
	       * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
	       * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
	       * transition and the promise returned from `go` will be rejected with a `'transition aborted'` value.
	       *
	       * @param {Object} event Event object.
	       * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
	       * @param {State} fromState Current state object.
	       * @param {Object} fromParams Current state params.
	       *
	       * @example
	       *
	       * <pre>
	       * // somewhere, assume lazy.state has not been defined
	       * $state.go("lazy.state", {a:1, b:2}, {inherit:false});
	       *
	       * // somewhere else
	       * $scope.$on('$stateNotFound',
	       * function(event, unfoundState, fromState, fromParams){
	       *     console.log(unfoundState.to); // "lazy.state"
	       *     console.log(unfoundState.toParams); // {a:1, b:2}
	       *     console.log(unfoundState.options); // {inherit:false} + default options
	       * })
	       * </pre>
	       */
	      var evt = $rootScope.$broadcast('$stateNotFound', redirect, state, params);

	      if (evt.defaultPrevented) {
	        $urlRouter.update();
	        return TransitionAborted;
	      }

	      if (!evt.retry) {
	        return null;
	      }

	      // Allow the handler to return a promise to defer state lookup retry
	      if (options.$retry) {
	        $urlRouter.update();
	        return TransitionFailed;
	      }
	      var retryTransition = $state.transition = $q.when(evt.retry);

	      retryTransition.then(function() {
	        if (retryTransition !== $state.transition) return TransitionSuperseded;
	        redirect.options.$retry = true;
	        return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
	      }, function() {
	        return TransitionAborted;
	      });
	      $urlRouter.update();

	      return retryTransition;
	    }

	    root.locals = { resolve: null, globals: { $stateParams: {} } };

	    $state = {
	      params: {},
	      current: root.self,
	      $current: root,
	      transition: null
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#reload
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method that force reloads the current state. All resolves are re-resolved,
	     * controllers reinstantiated, and events re-fired.
	     *
	     * @example
	     * <pre>
	     * var app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     $state.reload();
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, { 
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>
	     *
	     * @param {string=|object=} state - A state name or a state object, which is the root of the resolves to be re-resolved.
	     * @example
	     * <pre>
	     * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item' 
	     * //and current state is 'contacts.detail.item'
	     * var app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     //will reload 'contact.detail' and 'contact.detail.item' states
	     *     $state.reload('contact.detail');
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, { 
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>

	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    $state.reload = function reload(state) {
	      return $state.transitionTo($state.current, $stateParams, { reload: state || true, inherit: false, notify: true});
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#go
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Convenience method for transitioning to a new state. `$state.go` calls 
	     * `$state.transitionTo` internally but automatically sets options to 
	     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
	     * This allows you to easily use an absolute or relative to path and specify 
	     * only the parameters you'd like to update (while letting unspecified parameters 
	     * inherit from the currently active ancestor states).
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.go('contact.detail');
	     *   };
	     * });
	     * </pre>
	     * <img src='../ngdoc_assets/StateGoExamples.png'/>
	     *
	     * @param {string} to Absolute state name or relative state path. Some examples:
	     *
	     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
	     * - `$state.go('^')` - will go to a parent state
	     * - `$state.go('^.sibling')` - will go to a sibling state
	     * - `$state.go('.child.grandchild')` - will go to grandchild state
	     *
	     * @param {object=} params A map of the parameters that will be sent to the state, 
	     * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
	     * defined parameters. This allows, for example, going to a sibling state that shares parameters
	     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
	     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
	     * will get you all current parameters, etc.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *
	     * @returns {promise} A promise representing the state of the new transition.
	     *
	     * Possible success values:
	     *
	     * - $state.current
	     *
	     * <br/>Possible rejection values:
	     *
	     * - 'transition superseded' - when a newer transition has been started after this one
	     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
	     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
	     *   when a `$stateNotFound` `event.retry` promise errors.
	     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
	     * - *resolve error* - when an error has occurred with a `resolve`
	     *
	     */
	    $state.go = function go(to, params, options) {
	      return $state.transitionTo(to, params, extend({ inherit: true, relative: $state.$current }, options));
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#transitionTo
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
	     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.transitionTo('contact.detail');
	     *   };
	     * });
	     * </pre>
	     *
	     * @param {string} to State name.
	     * @param {object=} toParams A map of the parameters that will be sent to the state,
	     * will populate $stateParams.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false|string=|object=}, If `true` will force transition even if the state or params 
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *    if String, then will reload the state with the name given in reload, and any children.
	     *    if Object, then a stateObj is expected, will reload the state found in stateObj, and any children.
	     *
	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    $state.transitionTo = function transitionTo(to, toParams, options) {
	      toParams = toParams || {};
	      options = extend({
	        location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false
	      }, options || {});

	      var from = $state.$current, fromParams = $state.params, fromPath = from.path;
	      var evt, toState = findState(to, options.relative);

	      // Store the hash param for later (since it will be stripped out by various methods)
	      var hash = toParams['#'];

	      if (!isDefined(toState)) {
	        var redirect = { to: to, toParams: toParams, options: options };
	        var redirectResult = handleRedirect(redirect, from.self, fromParams, options);

	        if (redirectResult) {
	          return redirectResult;
	        }

	        // Always retry once if the $stateNotFound was not prevented
	        // (handles either redirect changed or state lazy-definition)
	        to = redirect.to;
	        toParams = redirect.toParams;
	        options = redirect.options;
	        toState = findState(to, options.relative);

	        if (!isDefined(toState)) {
	          if (!options.relative) throw new Error("No such state '" + to + "'");
	          throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
	        }
	      }
	      if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
	      if (options.inherit) toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
	      if (!toState.params.$$validates(toParams)) return TransitionFailed;

	      toParams = toState.params.$$values(toParams);
	      to = toState;

	      var toPath = to.path;

	      // Starting from the root of the path, keep all levels that haven't changed
	      var keep = 0, state = toPath[keep], locals = root.locals, toLocals = [];

	      if (!options.reload) {
	        while (state && state === fromPath[keep] && state.ownParams.$$equals(toParams, fromParams)) {
	          locals = toLocals[keep] = state.locals;
	          keep++;
	          state = toPath[keep];
	        }
	      } else if (isString(options.reload) || isObject(options.reload)) {
	        if (isObject(options.reload) && !options.reload.name) {
	          throw new Error('Invalid reload state object');
	        }
	        
	        var reloadState = options.reload === true ? fromPath[0] : findState(options.reload);
	        if (options.reload && !reloadState) {
	          throw new Error("No such reload state '" + (isString(options.reload) ? options.reload : options.reload.name) + "'");
	        }

	        while (state && state === fromPath[keep] && state !== reloadState) {
	          locals = toLocals[keep] = state.locals;
	          keep++;
	          state = toPath[keep];
	        }
	      }

	      // If we're going to the same state and all locals are kept, we've got nothing to do.
	      // But clear 'transition', as we still want to cancel any other pending transitions.
	      // TODO: We may not want to bump 'transition' if we're called from a location change
	      // that we've initiated ourselves, because we might accidentally abort a legitimate
	      // transition initiated from code?
	      if (shouldSkipReload(to, toParams, from, fromParams, locals, options)) {
	        if (hash) toParams['#'] = hash;
	        $state.params = toParams;
	        copy($state.params, $stateParams);
	        if (options.location && to.navigable && to.navigable.url) {
	          $urlRouter.push(to.navigable.url, toParams, {
	            $$avoidResync: true, replace: options.location === 'replace'
	          });
	          $urlRouter.update(true);
	        }
	        $state.transition = null;
	        return $q.when($state.current);
	      }

	      // Filter parameters before we pass them to event handlers etc.
	      toParams = filterByKeys(to.params.$$keys(), toParams || {});

	      // Broadcast start event and cancel the transition if requested
	      if (options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeStart
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when the state transition **begins**. You can use `event.preventDefault()`
	         * to prevent the transition from happening and then the transition promise will be
	         * rejected with a `'transition prevented'` value.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         *
	         * @example
	         *
	         * <pre>
	         * $rootScope.$on('$stateChangeStart',
	         * function(event, toState, toParams, fromState, fromParams){
	         *     event.preventDefault();
	         *     // transitionTo() promise will be rejected with
	         *     // a 'transition prevented' error
	         * })
	         * </pre>
	         */
	        if ($rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams).defaultPrevented) {
	          $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
	          $urlRouter.update();
	          return TransitionPrevented;
	        }
	      }

	      // Resolve locals for the remaining states, but don't update any global state just
	      // yet -- if anything fails to resolve the current state needs to remain untouched.
	      // We also set up an inheritance chain for the locals here. This allows the view directive
	      // to quickly look up the correct definition for each view in the current state. Even
	      // though we create the locals object itself outside resolveState(), it is initially
	      // empty and gets filled asynchronously. We need to keep track of the promise for the
	      // (fully resolved) current locals, and pass this down the chain.
	      var resolved = $q.when(locals);

	      for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
	        locals = toLocals[l] = inherit(locals);
	        resolved = resolveState(state, toParams, state === to, resolved, locals, options);
	      }

	      // Once everything is resolved, we are ready to perform the actual transition
	      // and return a promise for the new state. We also keep track of what the
	      // current promise is, so that we can detect overlapping transitions and
	      // keep only the outcome of the last transition.
	      var transition = $state.transition = resolved.then(function () {
	        var l, entering, exiting;

	        if ($state.transition !== transition) return TransitionSuperseded;

	        // Exit 'from' states not kept
	        for (l = fromPath.length - 1; l >= keep; l--) {
	          exiting = fromPath[l];
	          if (exiting.self.onExit) {
	            $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
	          }
	          exiting.locals = null;
	        }

	        // Enter 'to' states not kept
	        for (l = keep; l < toPath.length; l++) {
	          entering = toPath[l];
	          entering.locals = toLocals[l];
	          if (entering.self.onEnter) {
	            $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
	          }
	        }

	        // Re-add the saved hash before we start returning things
	        if (hash) toParams['#'] = hash;

	        // Run it again, to catch any transitions in callbacks
	        if ($state.transition !== transition) return TransitionSuperseded;

	        // Update globals in $state
	        $state.$current = to;
	        $state.current = to.self;
	        $state.params = toParams;
	        copy($state.params, $stateParams);
	        $state.transition = null;

	        if (options.location && to.navigable) {
	          $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
	            $$avoidResync: true, replace: options.location === 'replace'
	          });
	        }

	        if (options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeSuccess
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired once the state transition is **complete**.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         */
	          $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
	        }
	        $urlRouter.update(true);

	        return $state.current;
	      }, function (error) {
	        if ($state.transition !== transition) return TransitionSuperseded;

	        $state.transition = null;
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeError
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when an **error occurs** during transition. It's important to note that if you
	         * have any errors in your resolve functions (javascript errors, non-existent services, etc)
	         * they will not throw traditionally. You must listen for this $stateChangeError event to
	         * catch **ALL** errors.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         * @param {Error} error The resolve error object.
	         */
	        evt = $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);

	        if (!evt.defaultPrevented) {
	            $urlRouter.update();
	        }

	        return $q.reject(error);
	      });

	      return transition;
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#is
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
	     * but only checks for the full state name. If params is supplied then it will be
	     * tested for strict equality against the current active params object, so all params
	     * must match with none missing and no extras.
	     *
	     * @example
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // absolute name
	     * $state.is('contact.details.item'); // returns true
	     * $state.is(contactDetailItemStateObject); // returns true
	     *
	     * // relative name (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name (absolute or relative) or state object you'd like to check.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like
	     * to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object} -  If `stateOrName` is a relative state name and `options.relative` is set, .is will
	     * test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it is the state.
	     */
	    $state.is = function is(stateOrName, params, options) {
	      options = extend({ relative: $state.$current }, options || {});
	      var state = findState(stateOrName, options.relative);

	      if (!isDefined(state)) { return undefined; }
	      if ($state.$current !== state) { return false; }
	      return params ? equalForKeys(state.params.$$values(params), $stateParams) : true;
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#includes
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method to determine if the current active state is equal to or is the child of the
	     * state stateName. If any params are passed then they will be tested for a match as well.
	     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
	     *
	     * @example
	     * Partial and relative names
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // Using partial names
	     * $state.includes("contacts"); // returns true
	     * $state.includes("contacts.details"); // returns true
	     * $state.includes("contacts.details.item"); // returns true
	     * $state.includes("contacts.list"); // returns false
	     * $state.includes("about"); // returns false
	     *
	     * // Using relative names (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.includes('.item')}">Item</div>
	     * </pre>
	     *
	     * Basic globbing patterns
	     * <pre>
	     * $state.$current.name = 'contacts.details.item.url';
	     *
	     * $state.includes("*.details.*.*"); // returns true
	     * $state.includes("*.details.**"); // returns true
	     * $state.includes("**.item.**"); // returns true
	     * $state.includes("*.details.item.url"); // returns true
	     * $state.includes("*.details.*.url"); // returns true
	     * $state.includes("*.details.*"); // returns false
	     * $state.includes("item.**"); // returns false
	     * </pre>
	     *
	     * @param {string} stateOrName A partial name, relative name, or glob pattern
	     * to be searched for within the current state name.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`,
	     * that you'd like to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object=} -  If `stateOrName` is a relative state reference and `options.relative` is set,
	     * .includes will test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it does include the state
	     */
	    $state.includes = function includes(stateOrName, params, options) {
	      options = extend({ relative: $state.$current }, options || {});
	      if (isString(stateOrName) && isGlob(stateOrName)) {
	        if (!doesStateMatchGlob(stateOrName)) {
	          return false;
	        }
	        stateOrName = $state.$current.name;
	      }

	      var state = findState(stateOrName, options.relative);
	      if (!isDefined(state)) { return undefined; }
	      if (!isDefined($state.$current.includes[state.name])) { return false; }
	      return params ? equalForKeys(state.params.$$values(params), $stateParams, objectKeys(params)) : true;
	    };


	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#href
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A url generation method that returns the compiled url for the given state populated with the given params.
	     *
	     * @example
	     * <pre>
	     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
	     * @param {object=} params An object of parameter values to fill the state's required parameters.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
	     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
	     *    ancestor with a valid url).
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	     * 
	     * @returns {string} compiled state url
	     */
	    $state.href = function href(stateOrName, params, options) {
	      options = extend({
	        lossy:    true,
	        inherit:  true,
	        absolute: false,
	        relative: $state.$current
	      }, options || {});

	      var state = findState(stateOrName, options.relative);

	      if (!isDefined(state)) return null;
	      if (options.inherit) params = inheritParams($stateParams, params || {}, $state.$current, state);
	      
	      var nav = (state && options.lossy) ? state.navigable : state;

	      if (!nav || nav.url === undefined || nav.url === null) {
	        return null;
	      }
	      return $urlRouter.href(nav.url, filterByKeys(state.params.$$keys().concat('#'), params || {}), {
	        absolute: options.absolute
	      });
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#get
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Returns the state configuration object for any specific state or all states.
	     *
	     * @param {string|object=} stateOrName (absolute or relative) If provided, will only get the config for
	     * the requested state. If not provided, returns an array of ALL state configs.
	     * @param {string|object=} context When stateOrName is a relative state reference, the state will be retrieved relative to context.
	     * @returns {Object|Array} State configuration object or array of all objects.
	     */
	    $state.get = function (stateOrName, context) {
	      if (arguments.length === 0) return map(objectKeys(states), function(name) { return states[name].self; });
	      var state = findState(stateOrName, context || $state.$current);
	      return (state && state.self) ? state.self : null;
	    };

	    function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
	      // Make a restricted $stateParams with only the parameters that apply to this state if
	      // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
	      // we also need $stateParams to be available for any $injector calls we make during the
	      // dependency resolution process.
	      var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params.$$keys(), params);
	      var locals = { $stateParams: $stateParams };

	      // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
	      // We're also including $stateParams in this; that way the parameters are restricted
	      // to the set that should be visible to the state, and are independent of when we update
	      // the global $state and $stateParams values.
	      dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
	      var promises = [dst.resolve.then(function (globals) {
	        dst.globals = globals;
	      })];
	      if (inherited) promises.push(inherited);

	      function resolveViews() {
	        var viewsPromises = [];

	        // Resolve template and dependencies for all views.
	        forEach(state.views, function (view, name) {
	          var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
	          injectables.$template = [ function () {
	            return $view.load(name, { view: view, locals: dst.globals, params: $stateParams, notify: options.notify }) || '';
	          }];

	          viewsPromises.push($resolve.resolve(injectables, dst.globals, dst.resolve, state).then(function (result) {
	            // References to the controller (only instantiated at link time)
	            if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
	              var injectLocals = angular.extend({}, injectables, dst.globals);
	              result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
	            } else {
	              result.$$controller = view.controller;
	            }
	            // Provide access to the state itself for internal use
	            result.$$state = state;
	            result.$$controllerAs = view.controllerAs;
	            dst[name] = result;
	          }));
	        });

	        return $q.all(viewsPromises).then(function(){
	          return dst.globals;
	        });
	      }

	      // Wait for all the promises and then return the activation object
	      return $q.all(promises).then(resolveViews).then(function (values) {
	        return dst;
	      });
	    }

	    return $state;
	  }

	  function shouldSkipReload(to, toParams, from, fromParams, locals, options) {
	    // Return true if there are no differences in non-search (path/object) params, false if there are differences
	    function nonSearchParamsEqual(fromAndToState, fromParams, toParams) {
	      // Identify whether all the parameters that differ between `fromParams` and `toParams` were search params.
	      function notSearchParam(key) {
	        return fromAndToState.params[key].location != "search";
	      }
	      var nonQueryParamKeys = fromAndToState.params.$$keys().filter(notSearchParam);
	      var nonQueryParams = pick.apply({}, [fromAndToState.params].concat(nonQueryParamKeys));
	      var nonQueryParamSet = new $$UMFP.ParamSet(nonQueryParams);
	      return nonQueryParamSet.$$equals(fromParams, toParams);
	    }

	    // If reload was not explicitly requested
	    // and we're transitioning to the same state we're already in
	    // and    the locals didn't change
	    //     or they changed in a way that doesn't merit reloading
	    //        (reloadOnParams:false, or reloadOnSearch.false and only search params changed)
	    // Then return true.
	    if (!options.reload && to === from &&
	      (locals === from.locals || (to.self.reloadOnSearch === false && nonSearchParamsEqual(from, fromParams, toParams)))) {
	      return true;
	    }
	  }
	}

	angular.module('ui.router.state')
	  .value('$stateParams', {})
	  .provider('$state', $StateProvider);


	$ViewProvider.$inject = [];
	function $ViewProvider() {

	  this.$get = $get;
	  /**
	   * @ngdoc object
	   * @name ui.router.state.$view
	   *
	   * @requires ui.router.util.$templateFactory
	   * @requires $rootScope
	   *
	   * @description
	   *
	   */
	  $get.$inject = ['$rootScope', '$templateFactory'];
	  function $get(   $rootScope,   $templateFactory) {
	    return {
	      // $view.load('full.viewName', { template: ..., controller: ..., resolve: ..., async: false, params: ... })
	      /**
	       * @ngdoc function
	       * @name ui.router.state.$view#load
	       * @methodOf ui.router.state.$view
	       *
	       * @description
	       *
	       * @param {string} name name
	       * @param {object} options option object.
	       */
	      load: function load(name, options) {
	        var result, defaults = {
	          template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}
	        };
	        options = extend(defaults, options);

	        if (options.view) {
	          result = $templateFactory.fromConfig(options.view, options.params, options.locals);
	        }
	        if (result && options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$viewContentLoading
	         * @eventOf ui.router.state.$view
	         * @eventType broadcast on root scope
	         * @description
	         *
	         * Fired once the view **begins loading**, *before* the DOM is rendered.
	         *
	         * @param {Object} event Event object.
	         * @param {Object} viewConfig The view config properties (template, controller, etc).
	         *
	         * @example
	         *
	         * <pre>
	         * $scope.$on('$viewContentLoading',
	         * function(event, viewConfig){
	         *     // Access to all the view config properties.
	         *     // and one special property 'targetView'
	         *     // viewConfig.targetView
	         * });
	         * </pre>
	         */
	          $rootScope.$broadcast('$viewContentLoading', options);
	        }
	        return result;
	      }
	    };
	  }
	}

	angular.module('ui.router.state').provider('$view', $ViewProvider);

	/**
	 * @ngdoc object
	 * @name ui.router.state.$uiViewScrollProvider
	 *
	 * @description
	 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
	 */
	function $ViewScrollProvider() {

	  var useAnchorScroll = false;

	  /**
	   * @ngdoc function
	   * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
	   * @methodOf ui.router.state.$uiViewScrollProvider
	   *
	   * @description
	   * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
	   * scrolling based on the url anchor.
	   */
	  this.useAnchorScroll = function () {
	    useAnchorScroll = true;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.state.$uiViewScroll
	   *
	   * @requires $anchorScroll
	   * @requires $timeout
	   *
	   * @description
	   * When called with a jqLite element, it scrolls the element into view (after a
	   * `$timeout` so the DOM has time to refresh).
	   *
	   * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
	   * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
	   */
	  this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
	    if (useAnchorScroll) {
	      return $anchorScroll;
	    }

	    return function ($element) {
	      return $timeout(function () {
	        $element[0].scrollIntoView();
	      }, 0, false);
	    };
	  }];
	}

	angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-view
	 *
	 * @requires ui.router.state.$state
	 * @requires $compile
	 * @requires $controller
	 * @requires $injector
	 * @requires ui.router.state.$uiViewScroll
	 * @requires $document
	 *
	 * @restrict ECA
	 *
	 * @description
	 * The ui-view directive tells $state where to place your templates.
	 *
	 * @param {string=} name A view name. The name should be unique amongst the other views in the
	 * same state. You can have views of the same name that live in different states.
	 *
	 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
	 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
	 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
	 * scroll ui-view elements into view when they are populated during a state activation.
	 *
	 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
	 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
	 *
	 * @param {string=} onload Expression to evaluate whenever the view updates.
	 * 
	 * @example
	 * A view can be unnamed or named. 
	 * <pre>
	 * <!-- Unnamed -->
	 * <div ui-view></div> 
	 * 
	 * <!-- Named -->
	 * <div ui-view="viewName"></div>
	 * </pre>
	 *
	 * You can only have one unnamed view within any template (or root html). If you are only using a 
	 * single view and it is unnamed then you can populate it like so:
	 * <pre>
	 * <div ui-view></div> 
	 * $stateProvider.state("home", {
	 *   template: "<h1>HELLO!</h1>"
	 * })
	 * </pre>
	 * 
	 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#views `views`}
	 * config property, by name, in this case an empty name:
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 * 
	 * But typically you'll only use the views property if you name your view or have more than one view 
	 * in the same template. There's not really a compelling reason to name a view if its the only one, 
	 * but you could if you wanted, like so:
	 * <pre>
	 * <div ui-view="main"></div>
	 * </pre> 
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "main": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 * 
	 * Really though, you'll use views to set up multiple views:
	 * <pre>
	 * <div ui-view></div>
	 * <div ui-view="chart"></div> 
	 * <div ui-view="data"></div> 
	 * </pre>
	 * 
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     },
	 *     "chart": {
	 *       template: "<chart_thing/>"
	 *     },
	 *     "data": {
	 *       template: "<data_thing/>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 *
	 * Examples for `autoscroll`:
	 *
	 * <pre>
	 * <!-- If autoscroll present with no expression,
	 *      then scroll ui-view into view -->
	 * <ui-view autoscroll/>
	 *
	 * <!-- If autoscroll present with valid expression,
	 *      then scroll ui-view into view if expression evaluates to true -->
	 * <ui-view autoscroll='true'/>
	 * <ui-view autoscroll='false'/>
	 * <ui-view autoscroll='scopeVariable'/>
	 * </pre>
	 */
	$ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll', '$interpolate'];
	function $ViewDirective(   $state,   $injector,   $uiViewScroll,   $interpolate) {

	  function getService() {
	    return ($injector.has) ? function(service) {
	      return $injector.has(service) ? $injector.get(service) : null;
	    } : function(service) {
	      try {
	        return $injector.get(service);
	      } catch (e) {
	        return null;
	      }
	    };
	  }

	  var service = getService(),
	      $animator = service('$animator'),
	      $animate = service('$animate');

	  // Returns a set of DOM manipulation functions based on which Angular version
	  // it should use
	  function getRenderer(attrs, scope) {
	    var statics = function() {
	      return {
	        enter: function (element, target, cb) { target.after(element); cb(); },
	        leave: function (element, cb) { element.remove(); cb(); }
	      };
	    };

	    if ($animate) {
	      return {
	        enter: function(element, target, cb) {
	          var promise = $animate.enter(element, null, target, cb);
	          if (promise && promise.then) promise.then(cb);
	        },
	        leave: function(element, cb) {
	          var promise = $animate.leave(element, cb);
	          if (promise && promise.then) promise.then(cb);
	        }
	      };
	    }

	    if ($animator) {
	      var animate = $animator && $animator(scope, attrs);

	      return {
	        enter: function(element, target, cb) {animate.enter(element, null, target); cb(); },
	        leave: function(element, cb) { animate.leave(element); cb(); }
	      };
	    }

	    return statics();
	  }

	  var directive = {
	    restrict: 'ECA',
	    terminal: true,
	    priority: 400,
	    transclude: 'element',
	    compile: function (tElement, tAttrs, $transclude) {
	      return function (scope, $element, attrs) {
	        var previousEl, currentEl, currentScope, latestLocals,
	            onloadExp     = attrs.onload || '',
	            autoScrollExp = attrs.autoscroll,
	            renderer      = getRenderer(attrs, scope);

	        scope.$on('$stateChangeSuccess', function() {
	          updateView(false);
	        });
	        scope.$on('$viewContentLoading', function() {
	          updateView(false);
	        });

	        updateView(true);

	        function cleanupLastView() {
	          if (previousEl) {
	            previousEl.remove();
	            previousEl = null;
	          }

	          if (currentScope) {
	            currentScope.$destroy();
	            currentScope = null;
	          }

	          if (currentEl) {
	            renderer.leave(currentEl, function() {
	              previousEl = null;
	            });

	            previousEl = currentEl;
	            currentEl = null;
	          }
	        }

	        function updateView(firstTime) {
	          var newScope,
	              name            = getUiViewName(scope, attrs, $element, $interpolate),
	              previousLocals  = name && $state.$current && $state.$current.locals[name];

	          if (!firstTime && previousLocals === latestLocals) return; // nothing to do
	          newScope = scope.$new();
	          latestLocals = $state.$current.locals[name];

	          var clone = $transclude(newScope, function(clone) {
	            renderer.enter(clone, $element, function onUiViewEnter() {
	              if(currentScope) {
	                currentScope.$emit('$viewContentAnimationEnded');
	              }

	              if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
	                $uiViewScroll(clone);
	              }
	            });
	            cleanupLastView();
	          });

	          currentEl = clone;
	          currentScope = newScope;
	          /**
	           * @ngdoc event
	           * @name ui.router.state.directive:ui-view#$viewContentLoaded
	           * @eventOf ui.router.state.directive:ui-view
	           * @eventType emits on ui-view directive scope
	           * @description           *
	           * Fired once the view is **loaded**, *after* the DOM is rendered.
	           *
	           * @param {Object} event Event object.
	           */
	          currentScope.$emit('$viewContentLoaded');
	          currentScope.$eval(onloadExp);
	        }
	      };
	    }
	  };

	  return directive;
	}

	$ViewDirectiveFill.$inject = ['$compile', '$controller', '$state', '$interpolate'];
	function $ViewDirectiveFill (  $compile,   $controller,   $state,   $interpolate) {
	  return {
	    restrict: 'ECA',
	    priority: -400,
	    compile: function (tElement) {
	      var initial = tElement.html();
	      return function (scope, $element, attrs) {
	        var current = $state.$current,
	            name = getUiViewName(scope, attrs, $element, $interpolate),
	            locals  = current && current.locals[name];

	        if (! locals) {
	          return;
	        }

	        $element.data('$uiView', { name: name, state: locals.$$state });
	        $element.html(locals.$template ? locals.$template : initial);

	        var link = $compile($element.contents());

	        if (locals.$$controller) {
	          locals.$scope = scope;
	          locals.$element = $element;
	          var controller = $controller(locals.$$controller, locals);
	          if (locals.$$controllerAs) {
	            scope[locals.$$controllerAs] = controller;
	          }
	          $element.data('$ngControllerController', controller);
	          $element.children().data('$ngControllerController', controller);
	        }

	        link(scope);
	      };
	    }
	  };
	}

	/**
	 * Shared ui-view code for both directives:
	 * Given scope, element, and its attributes, return the view's name
	 */
	function getUiViewName(scope, attrs, element, $interpolate) {
	  var name = $interpolate(attrs.uiView || attrs.name || '')(scope);
	  var inherited = element.inheritedData('$uiView');
	  return name.indexOf('@') >= 0 ?  name :  (name + '@' + (inherited ? inherited.state.name : ''));
	}

	angular.module('ui.router.state').directive('uiView', $ViewDirective);
	angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);

	function parseStateRef(ref, current) {
	  var preparsed = ref.match(/^\s*({[^}]*})\s*$/), parsed;
	  if (preparsed) ref = current + '(' + preparsed[1] + ')';
	  parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
	  if (!parsed || parsed.length !== 4) throw new Error("Invalid state ref '" + ref + "'");
	  return { state: parsed[1], paramExpr: parsed[3] || null };
	}

	function stateContext(el) {
	  var stateData = el.parent().inheritedData('$uiView');

	  if (stateData && stateData.state && stateData.state.name) {
	    return stateData.state;
	  }
	}

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref
	 *
	 * @requires ui.router.state.$state
	 * @requires $timeout
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated 
	 * URL, the directive will automatically generate & update the `href` attribute via 
	 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking 
	 * the link will trigger a state transition with optional parameters. 
	 *
	 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be 
	 * handled natively by the browser.
	 *
	 * You can also use relative state paths within ui-sref, just like the relative 
	 * paths passed to `$state.go()`. You just need to be aware that the path is relative
	 * to the state that the link lives in, in other words the state that loaded the 
	 * template containing the link.
	 *
	 * You can specify options to pass to {@link ui.router.state.$state#go $state.go()}
	 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
	 * and `reload`.
	 *
	 * @example
	 * Here's an example of how you'd use ui-sref and how it would compile. If you have the 
	 * following template:
	 * <pre>
	 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a> | <a ui-sref="{page: 2}">Next page</a>
	 * 
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
	 *     </li>
	 * </ul>
	 * </pre>
	 * 
	 * Then the compiled html would be (assuming Html5Mode is off and current state is contacts):
	 * <pre>
	 * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a> | <a href="#/contacts?page=2" ui-sref="{page: 2}">Next page</a>
	 * 
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
	 *     </li>
	 * </ul>
	 *
	 * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
	 * </pre>
	 *
	 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
	 * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#go $state.go()}
	 */
	$StateRefDirective.$inject = ['$state', '$timeout'];
	function $StateRefDirective($state, $timeout) {
	  var allowedOptions = ['location', 'inherit', 'reload', 'absolute'];

	  return {
	    restrict: 'A',
	    require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
	    link: function(scope, element, attrs, uiSrefActive) {
	      var ref = parseStateRef(attrs.uiSref, $state.current.name);
	      var params = null, url = null, base = stateContext(element) || $state.$current;
	      // SVGAElement does not use the href attribute, but rather the 'xlinkHref' attribute.
	      var hrefKind = Object.prototype.toString.call(element.prop('href')) === '[object SVGAnimatedString]' ?
	                 'xlink:href' : 'href';
	      var newHref = null, isAnchor = element.prop("tagName").toUpperCase() === "A";
	      var isForm = element[0].nodeName === "FORM";
	      var attr = isForm ? "action" : hrefKind, nav = true;

	      var options = { relative: base, inherit: true };
	      var optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};

	      angular.forEach(allowedOptions, function(option) {
	        if (option in optionsOverride) {
	          options[option] = optionsOverride[option];
	        }
	      });

	      var update = function(newVal) {
	        if (newVal) params = angular.copy(newVal);
	        if (!nav) return;

	        newHref = $state.href(ref.state, params, options);

	        var activeDirective = uiSrefActive[1] || uiSrefActive[0];
	        if (activeDirective) {
	          activeDirective.$$addStateInfo(ref.state, params);
	        }
	        if (newHref === null) {
	          nav = false;
	          return false;
	        }
	        attrs.$set(attr, newHref);
	      };

	      if (ref.paramExpr) {
	        scope.$watch(ref.paramExpr, function(newVal, oldVal) {
	          if (newVal !== params) update(newVal);
	        }, true);
	        params = angular.copy(scope.$eval(ref.paramExpr));
	      }
	      update();

	      if (isForm) return;

	      element.bind("click", function(e) {
	        var button = e.which || e.button;
	        if ( !(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr('target')) ) {
	          // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
	          var transition = $timeout(function() {
	            $state.go(ref.state, params, options);
	          });
	          e.preventDefault();

	          // if the state has no URL, ignore one preventDefault from the <a> directive.
	          var ignorePreventDefaultCount = isAnchor && !newHref ? 1: 0;
	          e.preventDefault = function() {
	            if (ignorePreventDefaultCount-- <= 0)
	              $timeout.cancel(transition);
	          };
	        }
	      });
	    }
	  };
	}

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive working alongside ui-sref to add classes to an element when the
	 * related ui-sref directive's state is active, and removing them when it is inactive.
	 * The primary use-case is to simplify the special appearance of navigation menus
	 * relying on `ui-sref`, by having the "active" state's menu button appear different,
	 * distinguishing it from the inactive menu items.
	 *
	 * ui-sref-active can live on the same element as ui-sref or on a parent element. The first
	 * ui-sref-active found at the same level or above the ui-sref will be used.
	 *
	 * Will activate when the ui-sref's target state or any child state is active. If you
	 * need to activate only when the ui-sref target state is active and *not* any of
	 * it's children, then you will use
	 * {@link ui.router.state.directive:ui-sref-active-eq ui-sref-active-eq}
	 *
	 * @example
	 * Given the following template:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item">
	 *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 *
	 * When the app state is "app.user" (or any children states), and contains the state parameter "user" with value "bilbobaggins",
	 * the resulting HTML will appear as (note the 'active' class):
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item active">
	 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 * The class name is interpolated **once** during the directives link time (any further changes to the
	 * interpolated value are ignored).
	 *
	 * Multiple classes may be specified in a space-separated format:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active='class1 class2 class3'>
	 *     <a ui-sref="app.user">link</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 */

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active-eq
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * The same as {@link ui.router.state.directive:ui-sref-active ui-sref-active} but will only activate
	 * when the exact target state used in the `ui-sref` is active; no child states.
	 *
	 */
	$StateRefActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
	function $StateRefActiveDirective($state, $stateParams, $interpolate) {
	  return  {
	    restrict: "A",
	    controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
	      var states = [], activeClass;

	      // There probably isn't much point in $observing this
	      // uiSrefActive and uiSrefActiveEq share the same directive object with some
	      // slight difference in logic routing
	      activeClass = $interpolate($attrs.uiSrefActiveEq || $attrs.uiSrefActive || '', false)($scope);

	      // Allow uiSref to communicate with uiSrefActive[Equals]
	      this.$$addStateInfo = function (newState, newParams) {
	        var state = $state.get(newState, stateContext($element));

	        states.push({
	          state: state || { name: newState },
	          params: newParams
	        });

	        update();
	      };

	      $scope.$on('$stateChangeSuccess', update);

	      // Update route state
	      function update() {
	        if (anyMatch()) {
	          $element.addClass(activeClass);
	        } else {
	          $element.removeClass(activeClass);
	        }
	      }

	      function anyMatch() {
	        for (var i = 0; i < states.length; i++) {
	          if (isMatch(states[i].state, states[i].params)) {
	            return true;
	          }
	        }
	        return false;
	      }

	      function isMatch(state, params) {
	        if (typeof $attrs.uiSrefActiveEq !== 'undefined') {
	          return $state.is(state.name, params);
	        } else {
	          return $state.includes(state.name, params);
	        }
	      }
	    }]
	  };
	}

	angular.module('ui.router.state')
	  .directive('uiSref', $StateRefDirective)
	  .directive('uiSrefActive', $StateRefActiveDirective)
	  .directive('uiSrefActiveEq', $StateRefActiveDirective);

	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:isState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
	 */
	$IsStateFilter.$inject = ['$state'];
	function $IsStateFilter($state) {
	  var isFilter = function (state) {
	    return $state.is(state);
	  };
	  isFilter.$stateful = true;
	  return isFilter;
	}

	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:includedByState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
	 */
	$IncludedByStateFilter.$inject = ['$state'];
	function $IncludedByStateFilter($state) {
	  var includesFilter = function (state) {
	    return $state.includes(state);
	  };
	  includesFilter.$stateful = true;
	  return  includesFilter;
	}

	angular.module('ui.router.state')
	  .filter('isState', $IsStateFilter)
	  .filter('includedByState', $IncludedByStateFilter);
	})(window, window.angular);

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(199);

	module.exports = 'ui.bootstrap';


/***/ },
/* 199 */
/***/ function(module, exports) {

	/*
	 * angular-ui-bootstrap
	 * http://angular-ui.github.io/bootstrap/

	 * Version: 1.3.1 - 2016-04-05
	 * License: MIT
	 */angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepicker","ui.bootstrap.position","ui.bootstrap.datepickerPopup","ui.bootstrap.debounce","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]);
	angular.module("ui.bootstrap.tpls", ["uib/template/accordion/accordion-group.html","uib/template/accordion/accordion.html","uib/template/alert/alert.html","uib/template/carousel/carousel.html","uib/template/carousel/slide.html","uib/template/datepicker/datepicker.html","uib/template/datepicker/day.html","uib/template/datepicker/month.html","uib/template/datepicker/year.html","uib/template/datepickerPopup/popup.html","uib/template/modal/backdrop.html","uib/template/modal/window.html","uib/template/pager/pager.html","uib/template/pagination/pagination.html","uib/template/tooltip/tooltip-html-popup.html","uib/template/tooltip/tooltip-popup.html","uib/template/tooltip/tooltip-template-popup.html","uib/template/popover/popover-html.html","uib/template/popover/popover-template.html","uib/template/popover/popover.html","uib/template/progressbar/bar.html","uib/template/progressbar/progress.html","uib/template/progressbar/progressbar.html","uib/template/rating/rating.html","uib/template/tabs/tab.html","uib/template/tabs/tabset.html","uib/template/timepicker/timepicker.html","uib/template/typeahead/typeahead-match.html","uib/template/typeahead/typeahead-popup.html"]);
	angular.module('ui.bootstrap.collapse', [])

	  .directive('uibCollapse', ['$animate', '$q', '$parse', '$injector', function($animate, $q, $parse, $injector) {
	    var $animateCss = $injector.has('$animateCss') ? $injector.get('$animateCss') : null;
	    return {
	      link: function(scope, element, attrs) {
	        var expandingExpr = $parse(attrs.expanding),
	            expandedExpr = $parse(attrs.expanded),
	            collapsingExpr = $parse(attrs.collapsing),
	            collapsedExpr = $parse(attrs.collapsed);

	        if (!scope.$eval(attrs.uibCollapse)) {
	          element.addClass('in')
	            .addClass('collapse')
	            .attr('aria-expanded', true)
	            .attr('aria-hidden', false)
	            .css({height: 'auto'});
	        }

	        function expand() {
	          if (element.hasClass('collapse') && element.hasClass('in')) {
	            return;
	          }

	          $q.resolve(expandingExpr(scope))
	            .then(function() {
	              element.removeClass('collapse')
	                .addClass('collapsing')
	                .attr('aria-expanded', true)
	                .attr('aria-hidden', false);

	              if ($animateCss) {
	                $animateCss(element, {
	                  addClass: 'in',
	                  easing: 'ease',
	                  to: { height: element[0].scrollHeight + 'px' }
	                }).start()['finally'](expandDone);
	              } else {
	                $animate.addClass(element, 'in', {
	                  to: { height: element[0].scrollHeight + 'px' }
	                }).then(expandDone);
	              }
	            });
	        }

	        function expandDone() {
	          element.removeClass('collapsing')
	            .addClass('collapse')
	            .css({height: 'auto'});
	          expandedExpr(scope);
	        }

	        function collapse() {
	          if (!element.hasClass('collapse') && !element.hasClass('in')) {
	            return collapseDone();
	          }

	          $q.resolve(collapsingExpr(scope))
	            .then(function() {
	              element
	                // IMPORTANT: The height must be set before adding "collapsing" class.
	                // Otherwise, the browser attempts to animate from height 0 (in
	                // collapsing class) to the given height here.
	                .css({height: element[0].scrollHeight + 'px'})
	                // initially all panel collapse have the collapse class, this removal
	                // prevents the animation from jumping to collapsed state
	                .removeClass('collapse')
	                .addClass('collapsing')
	                .attr('aria-expanded', false)
	                .attr('aria-hidden', true);

	              if ($animateCss) {
	                $animateCss(element, {
	                  removeClass: 'in',
	                  to: {height: '0'}
	                }).start()['finally'](collapseDone);
	              } else {
	                $animate.removeClass(element, 'in', {
	                  to: {height: '0'}
	                }).then(collapseDone);
	              }
	            });
	        }

	        function collapseDone() {
	          element.css({height: '0'}); // Required so that collapse works when animation is disabled
	          element.removeClass('collapsing')
	            .addClass('collapse');
	          collapsedExpr(scope);
	        }

	        scope.$watch(attrs.uibCollapse, function(shouldCollapse) {
	          if (shouldCollapse) {
	            collapse();
	          } else {
	            expand();
	          }
	        });
	      }
	    };
	  }]);

	angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])

	.constant('uibAccordionConfig', {
	  closeOthers: true
	})

	.controller('UibAccordionController', ['$scope', '$attrs', 'uibAccordionConfig', function($scope, $attrs, accordionConfig) {
	  // This array keeps track of the accordion groups
	  this.groups = [];

	  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
	  this.closeOthers = function(openGroup) {
	    var closeOthers = angular.isDefined($attrs.closeOthers) ?
	      $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
	    if (closeOthers) {
	      angular.forEach(this.groups, function(group) {
	        if (group !== openGroup) {
	          group.isOpen = false;
	        }
	      });
	    }
	  };

	  // This is called from the accordion-group directive to add itself to the accordion
	  this.addGroup = function(groupScope) {
	    var that = this;
	    this.groups.push(groupScope);

	    groupScope.$on('$destroy', function(event) {
	      that.removeGroup(groupScope);
	    });
	  };

	  // This is called from the accordion-group directive when to remove itself
	  this.removeGroup = function(group) {
	    var index = this.groups.indexOf(group);
	    if (index !== -1) {
	      this.groups.splice(index, 1);
	    }
	  };
	}])

	// The accordion directive simply sets up the directive controller
	// and adds an accordion CSS class to itself element.
	.directive('uibAccordion', function() {
	  return {
	    controller: 'UibAccordionController',
	    controllerAs: 'accordion',
	    transclude: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/accordion/accordion.html';
	    }
	  };
	})

	// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
	.directive('uibAccordionGroup', function() {
	  return {
	    require: '^uibAccordion',         // We need this directive to be inside an accordion
	    transclude: true,              // It transcludes the contents of the directive into the template
	    replace: true,                // The element containing the directive will be replaced with the template
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/accordion/accordion-group.html';
	    },
	    scope: {
	      heading: '@',               // Interpolate the heading attribute onto this scope
	      panelClass: '@?',           // Ditto with panelClass
	      isOpen: '=?',
	      isDisabled: '=?'
	    },
	    controller: function() {
	      this.setHeading = function(element) {
	        this.heading = element;
	      };
	    },
	    link: function(scope, element, attrs, accordionCtrl) {
	      accordionCtrl.addGroup(scope);

	      scope.openClass = attrs.openClass || 'panel-open';
	      scope.panelClass = attrs.panelClass || 'panel-default';
	      scope.$watch('isOpen', function(value) {
	        element.toggleClass(scope.openClass, !!value);
	        if (value) {
	          accordionCtrl.closeOthers(scope);
	        }
	      });

	      scope.toggleOpen = function($event) {
	        if (!scope.isDisabled) {
	          if (!$event || $event.which === 32) {
	            scope.isOpen = !scope.isOpen;
	          }
	        }
	      };

	      var id = 'accordiongroup-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
	      scope.headingId = id + '-tab';
	      scope.panelId = id + '-panel';
	    }
	  };
	})

	// Use accordion-heading below an accordion-group to provide a heading containing HTML
	.directive('uibAccordionHeading', function() {
	  return {
	    transclude: true,   // Grab the contents to be used as the heading
	    template: '',       // In effect remove this element!
	    replace: true,
	    require: '^uibAccordionGroup',
	    link: function(scope, element, attrs, accordionGroupCtrl, transclude) {
	      // Pass the heading to the accordion-group controller
	      // so that it can be transcluded into the right place in the template
	      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
	      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
	    }
	  };
	})

	// Use in the accordion-group template to indicate where you want the heading to be transcluded
	// You must provide the property on the accordion-group controller that will hold the transcluded element
	.directive('uibAccordionTransclude', function() {
	  return {
	    require: '^uibAccordionGroup',
	    link: function(scope, element, attrs, controller) {
	      scope.$watch(function() { return controller[attrs.uibAccordionTransclude]; }, function(heading) {
	        if (heading) {
	          var elem = angular.element(element[0].querySelector('[uib-accordion-header]'));
	          elem.html('');
	          elem.append(heading);
	        }
	      });
	    }
	  };
	});

	angular.module('ui.bootstrap.alert', [])

	.controller('UibAlertController', ['$scope', '$attrs', '$interpolate', '$timeout', function($scope, $attrs, $interpolate, $timeout) {
	  $scope.closeable = !!$attrs.close;

	  var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ?
	    $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;

	  if (dismissOnTimeout) {
	    $timeout(function() {
	      $scope.close();
	    }, parseInt(dismissOnTimeout, 10));
	  }
	}])

	.directive('uibAlert', function() {
	  return {
	    controller: 'UibAlertController',
	    controllerAs: 'alert',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/alert/alert.html';
	    },
	    transclude: true,
	    replace: true,
	    scope: {
	      type: '@',
	      close: '&'
	    }
	  };
	});

	angular.module('ui.bootstrap.buttons', [])

	.constant('uibButtonConfig', {
	  activeClass: 'active',
	  toggleEvent: 'click'
	})

	.controller('UibButtonsController', ['uibButtonConfig', function(buttonConfig) {
	  this.activeClass = buttonConfig.activeClass || 'active';
	  this.toggleEvent = buttonConfig.toggleEvent || 'click';
	}])

	.directive('uibBtnRadio', ['$parse', function($parse) {
	  return {
	    require: ['uibBtnRadio', 'ngModel'],
	    controller: 'UibButtonsController',
	    controllerAs: 'buttons',
	    link: function(scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	      var uncheckableExpr = $parse(attrs.uibUncheckable);

	      element.find('input').css({display: 'none'});

	      //model -> UI
	      ngModelCtrl.$render = function() {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.uibBtnRadio)));
	      };

	      //ui->model
	      element.on(buttonsCtrl.toggleEvent, function() {
	        if (attrs.disabled) {
	          return;
	        }

	        var isActive = element.hasClass(buttonsCtrl.activeClass);

	        if (!isActive || angular.isDefined(attrs.uncheckable)) {
	          scope.$apply(function() {
	            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.uibBtnRadio));
	            ngModelCtrl.$render();
	          });
	        }
	      });

	      if (attrs.uibUncheckable) {
	        scope.$watch(uncheckableExpr, function(uncheckable) {
	          attrs.$set('uncheckable', uncheckable ? '' : undefined);
	        });
	      }
	    }
	  };
	}])

	.directive('uibBtnCheckbox', function() {
	  return {
	    require: ['uibBtnCheckbox', 'ngModel'],
	    controller: 'UibButtonsController',
	    controllerAs: 'button',
	    link: function(scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      element.find('input').css({display: 'none'});

	      function getTrueValue() {
	        return getCheckboxValue(attrs.btnCheckboxTrue, true);
	      }

	      function getFalseValue() {
	        return getCheckboxValue(attrs.btnCheckboxFalse, false);
	      }

	      function getCheckboxValue(attribute, defaultValue) {
	        return angular.isDefined(attribute) ? scope.$eval(attribute) : defaultValue;
	      }

	      //model -> UI
	      ngModelCtrl.$render = function() {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
	      };

	      //ui->model
	      element.on(buttonsCtrl.toggleEvent, function() {
	        if (attrs.disabled) {
	          return;
	        }

	        scope.$apply(function() {
	          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
	          ngModelCtrl.$render();
	        });
	      });
	    }
	  };
	});

	angular.module('ui.bootstrap.carousel', [])

	.controller('UibCarouselController', ['$scope', '$element', '$interval', '$timeout', '$animate', function($scope, $element, $interval, $timeout, $animate) {
	  var self = this,
	    slides = self.slides = $scope.slides = [],
	    SLIDE_DIRECTION = 'uib-slideDirection',
	    currentIndex = $scope.active,
	    currentInterval, isPlaying, bufferedTransitions = [];

	  var destroyed = false;

	  self.addSlide = function(slide, element) {
	    slides.push({
	      slide: slide,
	      element: element
	    });
	    slides.sort(function(a, b) {
	      return +a.slide.index - +b.slide.index;
	    });
	    //if this is the first slide or the slide is set to active, select it
	    if (slide.index === $scope.active || slides.length === 1 && !angular.isNumber($scope.active)) {
	      if ($scope.$currentTransition) {
	        $scope.$currentTransition = null;
	      }

	      currentIndex = slide.index;
	      $scope.active = slide.index;
	      setActive(currentIndex);
	      self.select(slides[findSlideIndex(slide)]);
	      if (slides.length === 1) {
	        $scope.play();
	      }
	    }
	  };

	  self.getCurrentIndex = function() {
	    for (var i = 0; i < slides.length; i++) {
	      if (slides[i].slide.index === currentIndex) {
	        return i;
	      }
	    }
	  };

	  self.next = $scope.next = function() {
	    var newIndex = (self.getCurrentIndex() + 1) % slides.length;

	    if (newIndex === 0 && $scope.noWrap()) {
	      $scope.pause();
	      return;
	    }

	    return self.select(slides[newIndex], 'next');
	  };

	  self.prev = $scope.prev = function() {
	    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;

	    if ($scope.noWrap() && newIndex === slides.length - 1) {
	      $scope.pause();
	      return;
	    }

	    return self.select(slides[newIndex], 'prev');
	  };

	  self.removeSlide = function(slide) {
	    var index = findSlideIndex(slide);

	    var bufferedIndex = bufferedTransitions.indexOf(slides[index]);
	    if (bufferedIndex !== -1) {
	      bufferedTransitions.splice(bufferedIndex, 1);
	    }

	    //get the index of the slide inside the carousel
	    slides.splice(index, 1);
	    if (slides.length > 0 && currentIndex === index) {
	      if (index >= slides.length) {
	        currentIndex = slides.length - 1;
	        $scope.active = currentIndex;
	        setActive(currentIndex);
	        self.select(slides[slides.length - 1]);
	      } else {
	        currentIndex = index;
	        $scope.active = currentIndex;
	        setActive(currentIndex);
	        self.select(slides[index]);
	      }
	    } else if (currentIndex > index) {
	      currentIndex--;
	      $scope.active = currentIndex;
	    }

	    //clean the active value when no more slide
	    if (slides.length === 0) {
	      currentIndex = null;
	      $scope.active = null;
	      clearBufferedTransitions();
	    }
	  };

	  /* direction: "prev" or "next" */
	  self.select = $scope.select = function(nextSlide, direction) {
	    var nextIndex = findSlideIndex(nextSlide.slide);
	    //Decide direction if it's not given
	    if (direction === undefined) {
	      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
	    }
	    //Prevent this user-triggered transition from occurring if there is already one in progress
	    if (nextSlide.slide.index !== currentIndex &&
	      !$scope.$currentTransition) {
	      goNext(nextSlide.slide, nextIndex, direction);
	    } else if (nextSlide && nextSlide.slide.index !== currentIndex && $scope.$currentTransition) {
	      bufferedTransitions.push(slides[nextIndex]);
	    }
	  };

	  /* Allow outside people to call indexOf on slides array */
	  $scope.indexOfSlide = function(slide) {
	    return +slide.slide.index;
	  };

	  $scope.isActive = function(slide) {
	    return $scope.active === slide.slide.index;
	  };

	  $scope.isPrevDisabled = function() {
	    return $scope.active === 0 && $scope.noWrap();
	  };

	  $scope.isNextDisabled = function() {
	    return $scope.active === slides.length - 1 && $scope.noWrap();
	  };

	  $scope.pause = function() {
	    if (!$scope.noPause) {
	      isPlaying = false;
	      resetTimer();
	    }
	  };

	  $scope.play = function() {
	    if (!isPlaying) {
	      isPlaying = true;
	      restartTimer();
	    }
	  };

	  $scope.$on('$destroy', function() {
	    destroyed = true;
	    resetTimer();
	  });

	  $scope.$watch('noTransition', function(noTransition) {
	    $animate.enabled($element, !noTransition);
	  });

	  $scope.$watch('interval', restartTimer);

	  $scope.$watchCollection('slides', resetTransition);

	  $scope.$watch('active', function(index) {
	    if (angular.isNumber(index) && currentIndex !== index) {
	      for (var i = 0; i < slides.length; i++) {
	        if (slides[i].slide.index === index) {
	          index = i;
	          break;
	        }
	      }

	      var slide = slides[index];
	      if (slide) {
	        setActive(index);
	        self.select(slides[index]);
	        currentIndex = index;
	      }
	    }
	  });

	  function clearBufferedTransitions() {
	    while (bufferedTransitions.length) {
	      bufferedTransitions.shift();
	    }
	  }

	  function getSlideByIndex(index) {
	    for (var i = 0, l = slides.length; i < l; ++i) {
	      if (slides[i].index === index) {
	        return slides[i];
	      }
	    }
	  }

	  function setActive(index) {
	    for (var i = 0; i < slides.length; i++) {
	      slides[i].slide.active = i === index;
	    }
	  }

	  function goNext(slide, index, direction) {
	    if (destroyed) {
	      return;
	    }

	    angular.extend(slide, {direction: direction});
	    angular.extend(slides[currentIndex].slide || {}, {direction: direction});
	    if ($animate.enabled($element) && !$scope.$currentTransition &&
	      slides[index].element && self.slides.length > 1) {
	      slides[index].element.data(SLIDE_DIRECTION, slide.direction);
	      var currentIdx = self.getCurrentIndex();

	      if (angular.isNumber(currentIdx) && slides[currentIdx].element) {
	        slides[currentIdx].element.data(SLIDE_DIRECTION, slide.direction);
	      }

	      $scope.$currentTransition = true;
	      $animate.on('addClass', slides[index].element, function(element, phase) {
	        if (phase === 'close') {
	          $scope.$currentTransition = null;
	          $animate.off('addClass', element);
	          if (bufferedTransitions.length) {
	            var nextSlide = bufferedTransitions.pop().slide;
	            var nextIndex = nextSlide.index;
	            var nextDirection = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
	            clearBufferedTransitions();

	            goNext(nextSlide, nextIndex, nextDirection);
	          }
	        }
	      });
	    }

	    $scope.active = slide.index;
	    currentIndex = slide.index;
	    setActive(index);

	    //every time you change slides, reset the timer
	    restartTimer();
	  }

	  function findSlideIndex(slide) {
	    for (var i = 0; i < slides.length; i++) {
	      if (slides[i].slide === slide) {
	        return i;
	      }
	    }
	  }

	  function resetTimer() {
	    if (currentInterval) {
	      $interval.cancel(currentInterval);
	      currentInterval = null;
	    }
	  }

	  function resetTransition(slides) {
	    if (!slides.length) {
	      $scope.$currentTransition = null;
	      clearBufferedTransitions();
	    }
	  }

	  function restartTimer() {
	    resetTimer();
	    var interval = +$scope.interval;
	    if (!isNaN(interval) && interval > 0) {
	      currentInterval = $interval(timerFn, interval);
	    }
	  }

	  function timerFn() {
	    var interval = +$scope.interval;
	    if (isPlaying && !isNaN(interval) && interval > 0 && slides.length) {
	      $scope.next();
	    } else {
	      $scope.pause();
	    }
	  }
	}])

	.directive('uibCarousel', function() {
	  return {
	    transclude: true,
	    replace: true,
	    controller: 'UibCarouselController',
	    controllerAs: 'carousel',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/carousel/carousel.html';
	    },
	    scope: {
	      active: '=',
	      interval: '=',
	      noTransition: '=',
	      noPause: '=',
	      noWrap: '&'
	    }
	  };
	})

	.directive('uibSlide', function() {
	  return {
	    require: '^uibCarousel',
	    transclude: true,
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/carousel/slide.html';
	    },
	    scope: {
	      actual: '=?',
	      index: '=?'
	    },
	    link: function (scope, element, attrs, carouselCtrl) {
	      carouselCtrl.addSlide(scope, element);
	      //when the scope is destroyed then remove the slide from the current slides array
	      scope.$on('$destroy', function() {
	        carouselCtrl.removeSlide(scope);
	      });
	    }
	  };
	})

	.animation('.item', ['$animateCss',
	function($animateCss) {
	  var SLIDE_DIRECTION = 'uib-slideDirection';

	  function removeClass(element, className, callback) {
	    element.removeClass(className);
	    if (callback) {
	      callback();
	    }
	  }

	  return {
	    beforeAddClass: function(element, className, done) {
	      if (className === 'active') {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction === 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element,
	          directionClass + ' ' + direction, done);
	        element.addClass(direction);

	        $animateCss(element, {addClass: directionClass})
	          .start()
	          .done(removeClassFn);

	        return function() {
	          stopped = true;
	        };
	      }
	      done();
	    },
	    beforeRemoveClass: function (element, className, done) {
	      if (className === 'active') {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction === 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element, directionClass, done);

	        $animateCss(element, {addClass: directionClass})
	          .start()
	          .done(removeClassFn);

	        return function() {
	          stopped = true;
	        };
	      }
	      done();
	    }
	  };
	}]);

	angular.module('ui.bootstrap.dateparser', [])

	.service('uibDateParser', ['$log', '$locale', 'dateFilter', 'orderByFilter', function($log, $locale, dateFilter, orderByFilter) {
	  // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
	  var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

	  var localeId;
	  var formatCodeToRegex;

	  this.init = function() {
	    localeId = $locale.id;

	    this.parsers = {};
	    this.formatters = {};

	    formatCodeToRegex = [
	      {
	        key: 'yyyy',
	        regex: '\\d{4}',
	        apply: function(value) { this.year = +value; },
	        formatter: function(date) {
	          var _date = new Date();
	          _date.setFullYear(Math.abs(date.getFullYear()));
	          return dateFilter(_date, 'yyyy');
	        }
	      },
	      {
	        key: 'yy',
	        regex: '\\d{2}',
	        apply: function(value) { value = +value; this.year = value < 69 ? value + 2000 : value + 1900; },
	        formatter: function(date) {
	          var _date = new Date();
	          _date.setFullYear(Math.abs(date.getFullYear()));
	          return dateFilter(_date, 'yy');
	        }
	      },
	      {
	        key: 'y',
	        regex: '\\d{1,4}',
	        apply: function(value) { this.year = +value; },
	        formatter: function(date) {
	          var _date = new Date();
	          _date.setFullYear(Math.abs(date.getFullYear()));
	          return dateFilter(_date, 'y');
	        }
	      },
	      {
	        key: 'M!',
	        regex: '0?[1-9]|1[0-2]',
	        apply: function(value) { this.month = value - 1; },
	        formatter: function(date) {
	          var value = date.getMonth();
	          if (/^[0-9]$/.test(value)) {
	            return dateFilter(date, 'MM');
	          }

	          return dateFilter(date, 'M');
	        }
	      },
	      {
	        key: 'MMMM',
	        regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
	        apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); },
	        formatter: function(date) { return dateFilter(date, 'MMMM'); }
	      },
	      {
	        key: 'MMM',
	        regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
	        apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); },
	        formatter: function(date) { return dateFilter(date, 'MMM'); }
	      },
	      {
	        key: 'MM',
	        regex: '0[1-9]|1[0-2]',
	        apply: function(value) { this.month = value - 1; },
	        formatter: function(date) { return dateFilter(date, 'MM'); }
	      },
	      {
	        key: 'M',
	        regex: '[1-9]|1[0-2]',
	        apply: function(value) { this.month = value - 1; },
	        formatter: function(date) { return dateFilter(date, 'M'); }
	      },
	      {
	        key: 'd!',
	        regex: '[0-2]?[0-9]{1}|3[0-1]{1}',
	        apply: function(value) { this.date = +value; },
	        formatter: function(date) {
	          var value = date.getDate();
	          if (/^[1-9]$/.test(value)) {
	            return dateFilter(date, 'dd');
	          }

	          return dateFilter(date, 'd');
	        }
	      },
	      {
	        key: 'dd',
	        regex: '[0-2][0-9]{1}|3[0-1]{1}',
	        apply: function(value) { this.date = +value; },
	        formatter: function(date) { return dateFilter(date, 'dd'); }
	      },
	      {
	        key: 'd',
	        regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
	        apply: function(value) { this.date = +value; },
	        formatter: function(date) { return dateFilter(date, 'd'); }
	      },
	      {
	        key: 'EEEE',
	        regex: $locale.DATETIME_FORMATS.DAY.join('|'),
	        formatter: function(date) { return dateFilter(date, 'EEEE'); }
	      },
	      {
	        key: 'EEE',
	        regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|'),
	        formatter: function(date) { return dateFilter(date, 'EEE'); }
	      },
	      {
	        key: 'HH',
	        regex: '(?:0|1)[0-9]|2[0-3]',
	        apply: function(value) { this.hours = +value; },
	        formatter: function(date) { return dateFilter(date, 'HH'); }
	      },
	      {
	        key: 'hh',
	        regex: '0[0-9]|1[0-2]',
	        apply: function(value) { this.hours = +value; },
	        formatter: function(date) { return dateFilter(date, 'hh'); }
	      },
	      {
	        key: 'H',
	        regex: '1?[0-9]|2[0-3]',
	        apply: function(value) { this.hours = +value; },
	        formatter: function(date) { return dateFilter(date, 'H'); }
	      },
	      {
	        key: 'h',
	        regex: '[0-9]|1[0-2]',
	        apply: function(value) { this.hours = +value; },
	        formatter: function(date) { return dateFilter(date, 'h'); }
	      },
	      {
	        key: 'mm',
	        regex: '[0-5][0-9]',
	        apply: function(value) { this.minutes = +value; },
	        formatter: function(date) { return dateFilter(date, 'mm'); }
	      },
	      {
	        key: 'm',
	        regex: '[0-9]|[1-5][0-9]',
	        apply: function(value) { this.minutes = +value; },
	        formatter: function(date) { return dateFilter(date, 'm'); }
	      },
	      {
	        key: 'sss',
	        regex: '[0-9][0-9][0-9]',
	        apply: function(value) { this.milliseconds = +value; },
	        formatter: function(date) { return dateFilter(date, 'sss'); }
	      },
	      {
	        key: 'ss',
	        regex: '[0-5][0-9]',
	        apply: function(value) { this.seconds = +value; },
	        formatter: function(date) { return dateFilter(date, 'ss'); }
	      },
	      {
	        key: 's',
	        regex: '[0-9]|[1-5][0-9]',
	        apply: function(value) { this.seconds = +value; },
	        formatter: function(date) { return dateFilter(date, 's'); }
	      },
	      {
	        key: 'a',
	        regex: $locale.DATETIME_FORMATS.AMPMS.join('|'),
	        apply: function(value) {
	          if (this.hours === 12) {
	            this.hours = 0;
	          }

	          if (value === 'PM') {
	            this.hours += 12;
	          }
	        },
	        formatter: function(date) { return dateFilter(date, 'a'); }
	      },
	      {
	        key: 'Z',
	        regex: '[+-]\\d{4}',
	        apply: function(value) {
	          var matches = value.match(/([+-])(\d{2})(\d{2})/),
	            sign = matches[1],
	            hours = matches[2],
	            minutes = matches[3];
	          this.hours += toInt(sign + hours);
	          this.minutes += toInt(sign + minutes);
	        },
	        formatter: function(date) {
	          return dateFilter(date, 'Z');
	        }
	      },
	      {
	        key: 'ww',
	        regex: '[0-4][0-9]|5[0-3]',
	        formatter: function(date) { return dateFilter(date, 'ww'); }
	      },
	      {
	        key: 'w',
	        regex: '[0-9]|[1-4][0-9]|5[0-3]',
	        formatter: function(date) { return dateFilter(date, 'w'); }
	      },
	      {
	        key: 'GGGG',
	        regex: $locale.DATETIME_FORMATS.ERANAMES.join('|').replace(/\s/g, '\\s'),
	        formatter: function(date) { return dateFilter(date, 'GGGG'); }
	      },
	      {
	        key: 'GGG',
	        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
	        formatter: function(date) { return dateFilter(date, 'GGG'); }
	      },
	      {
	        key: 'GG',
	        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
	        formatter: function(date) { return dateFilter(date, 'GG'); }
	      },
	      {
	        key: 'G',
	        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
	        formatter: function(date) { return dateFilter(date, 'G'); }
	      }
	    ];
	  };

	  this.init();

	  function createParser(format, func) {
	    var map = [], regex = format.split('');

	    // check for literal values
	    var quoteIndex = format.indexOf('\'');
	    if (quoteIndex > -1) {
	      var inLiteral = false;
	      format = format.split('');
	      for (var i = quoteIndex; i < format.length; i++) {
	        if (inLiteral) {
	          if (format[i] === '\'') {
	            if (i + 1 < format.length && format[i+1] === '\'') { // escaped single quote
	              format[i+1] = '$';
	              regex[i+1] = '';
	            } else { // end of literal
	              regex[i] = '';
	              inLiteral = false;
	            }
	          }
	          format[i] = '$';
	        } else {
	          if (format[i] === '\'') { // start of literal
	            format[i] = '$';
	            regex[i] = '';
	            inLiteral = true;
	          }
	        }
	      }

	      format = format.join('');
	    }

	    angular.forEach(formatCodeToRegex, function(data) {
	      var index = format.indexOf(data.key);

	      if (index > -1) {
	        format = format.split('');

	        regex[index] = '(' + data.regex + ')';
	        format[index] = '$'; // Custom symbol to define consumed part of format
	        for (var i = index + 1, n = index + data.key.length; i < n; i++) {
	          regex[i] = '';
	          format[i] = '$';
	        }
	        format = format.join('');

	        map.push({
	          index: index,
	          key: data.key,
	          apply: data[func],
	          matcher: data.regex
	        });
	      }
	    });

	    return {
	      regex: new RegExp('^' + regex.join('') + '$'),
	      map: orderByFilter(map, 'index')
	    };
	  }

	  this.filter = function(date, format) {
	    if (!angular.isDate(date) || isNaN(date) || !format) {
	      return '';
	    }

	    format = $locale.DATETIME_FORMATS[format] || format;

	    if ($locale.id !== localeId) {
	      this.init();
	    }

	    if (!this.formatters[format]) {
	      this.formatters[format] = createParser(format, 'formatter');
	    }

	    var parser = this.formatters[format],
	      map = parser.map;

	    var _format = format;

	    return map.reduce(function(str, mapper, i) {
	      var match = _format.match(new RegExp('(.*)' + mapper.key));
	      if (match && angular.isString(match[1])) {
	        str += match[1];
	        _format = _format.replace(match[1] + mapper.key, '');
	      }

	      var endStr = i === map.length - 1 ? _format : '';

	      if (mapper.apply) {
	        return str + mapper.apply.call(null, date) + endStr;
	      }

	      return str + endStr;
	    }, '');
	  };

	  this.parse = function(input, format, baseDate) {
	    if (!angular.isString(input) || !format) {
	      return input;
	    }

	    format = $locale.DATETIME_FORMATS[format] || format;
	    format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');

	    if ($locale.id !== localeId) {
	      this.init();
	    }

	    if (!this.parsers[format]) {
	      this.parsers[format] = createParser(format, 'apply');
	    }

	    var parser = this.parsers[format],
	        regex = parser.regex,
	        map = parser.map,
	        results = input.match(regex),
	        tzOffset = false;
	    if (results && results.length) {
	      var fields, dt;
	      if (angular.isDate(baseDate) && !isNaN(baseDate.getTime())) {
	        fields = {
	          year: baseDate.getFullYear(),
	          month: baseDate.getMonth(),
	          date: baseDate.getDate(),
	          hours: baseDate.getHours(),
	          minutes: baseDate.getMinutes(),
	          seconds: baseDate.getSeconds(),
	          milliseconds: baseDate.getMilliseconds()
	        };
	      } else {
	        if (baseDate) {
	          $log.warn('dateparser:', 'baseDate is not a valid date');
	        }
	        fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
	      }

	      for (var i = 1, n = results.length; i < n; i++) {
	        var mapper = map[i - 1];
	        if (mapper.matcher === 'Z') {
	          tzOffset = true;
	        }

	        if (mapper.apply) {
	          mapper.apply.call(fields, results[i]);
	        }
	      }

	      var datesetter = tzOffset ? Date.prototype.setUTCFullYear :
	        Date.prototype.setFullYear;
	      var timesetter = tzOffset ? Date.prototype.setUTCHours :
	        Date.prototype.setHours;

	      if (isValid(fields.year, fields.month, fields.date)) {
	        if (angular.isDate(baseDate) && !isNaN(baseDate.getTime()) && !tzOffset) {
	          dt = new Date(baseDate);
	          datesetter.call(dt, fields.year, fields.month, fields.date);
	          timesetter.call(dt, fields.hours, fields.minutes,
	            fields.seconds, fields.milliseconds);
	        } else {
	          dt = new Date(0);
	          datesetter.call(dt, fields.year, fields.month, fields.date);
	          timesetter.call(dt, fields.hours || 0, fields.minutes || 0,
	            fields.seconds || 0, fields.milliseconds || 0);
	        }
	      }

	      return dt;
	    }
	  };

	  // Check if date is valid for specific month (and year for February).
	  // Month: 0 = Jan, 1 = Feb, etc
	  function isValid(year, month, date) {
	    if (date < 1) {
	      return false;
	    }

	    if (month === 1 && date > 28) {
	      return date === 29 && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
	    }

	    if (month === 3 || month === 5 || month === 8 || month === 10) {
	      return date < 31;
	    }

	    return true;
	  }

	  function toInt(str) {
	    return parseInt(str, 10);
	  }

	  this.toTimezone = toTimezone;
	  this.fromTimezone = fromTimezone;
	  this.timezoneToOffset = timezoneToOffset;
	  this.addDateMinutes = addDateMinutes;
	  this.convertTimezoneToLocal = convertTimezoneToLocal;

	  function toTimezone(date, timezone) {
	    return date && timezone ? convertTimezoneToLocal(date, timezone) : date;
	  }

	  function fromTimezone(date, timezone) {
	    return date && timezone ? convertTimezoneToLocal(date, timezone, true) : date;
	  }

	  //https://github.com/angular/angular.js/blob/4daafd3dbe6a80d578f5a31df1bb99c77559543e/src/Angular.js#L1207
	  function timezoneToOffset(timezone, fallback) {
	    var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
	    return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
	  }

	  function addDateMinutes(date, minutes) {
	    date = new Date(date.getTime());
	    date.setMinutes(date.getMinutes() + minutes);
	    return date;
	  }

	  function convertTimezoneToLocal(date, timezone, reverse) {
	    reverse = reverse ? -1 : 1;
	    var timezoneOffset = timezoneToOffset(timezone, date.getTimezoneOffset());
	    return addDateMinutes(date, reverse * (timezoneOffset - date.getTimezoneOffset()));
	  }
	}]);

	// Avoiding use of ng-class as it creates a lot of watchers when a class is to be applied to
	// at most one element.
	angular.module('ui.bootstrap.isClass', [])
	.directive('uibIsClass', [
	         '$animate',
	function ($animate) {
	  //                    11111111          22222222
	  var ON_REGEXP = /^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/;
	  //                    11111111           22222222
	  var IS_REGEXP = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;

	  var dataPerTracked = {};

	  return {
	    restrict: 'A',
	    compile: function (tElement, tAttrs) {
	      var linkedScopes = [];
	      var instances = [];
	      var expToData = {};
	      var lastActivated = null;
	      var onExpMatches = tAttrs.uibIsClass.match(ON_REGEXP);
	      var onExp = onExpMatches[2];
	      var expsStr = onExpMatches[1];
	      var exps = expsStr.split(',');

	      return linkFn;

	      function linkFn(scope, element, attrs) {
	        linkedScopes.push(scope);
	        instances.push({
	          scope: scope,
	          element: element
	        });

	        exps.forEach(function (exp, k) {
	          addForExp(exp, scope);
	        });

	        scope.$on('$destroy', removeScope);
	      }

	      function addForExp(exp, scope) {
	        var matches = exp.match(IS_REGEXP);
	        var clazz = scope.$eval(matches[1]);
	        var compareWithExp = matches[2];
	        var data = expToData[exp];
	        if (!data) {
	          var watchFn = function (compareWithVal) {
	            var newActivated = null;
	            instances.some(function (instance) {
	              var thisVal = instance.scope.$eval(onExp);
	              if (thisVal === compareWithVal) {
	                newActivated = instance;
	                return true;
	              }
	            });
	            if (data.lastActivated !== newActivated) {
	              if (data.lastActivated) {
	                $animate.removeClass(data.lastActivated.element, clazz);
	              }
	              if (newActivated) {
	                $animate.addClass(newActivated.element, clazz);
	              }
	              data.lastActivated = newActivated;
	            }
	          };
	          expToData[exp] = data = {
	            lastActivated: null,
	            scope: scope,
	            watchFn: watchFn,
	            compareWithExp: compareWithExp,
	            watcher: scope.$watch(compareWithExp, watchFn)
	          };
	        }
	        data.watchFn(scope.$eval(compareWithExp));
	      }

	      function removeScope(e) {
	        var removedScope = e.targetScope;
	        var index = linkedScopes.indexOf(removedScope);
	        linkedScopes.splice(index, 1);
	        instances.splice(index, 1);
	        if (linkedScopes.length) {
	          var newWatchScope = linkedScopes[0];
	          angular.forEach(expToData, function (data) {
	            if (data.scope === removedScope) {
	              data.watcher = newWatchScope.$watch(data.compareWithExp, data.watchFn);
	              data.scope = newWatchScope;
	            }
	          });
	        }
	        else {
	          expToData = {};
	        }
	      }
	    }
	  };
	}]);
	angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.isClass'])

	.value('$datepickerSuppressError', false)

	.value('$datepickerLiteralWarning', true)

	.constant('uibDatepickerConfig', {
	  datepickerMode: 'day',
	  formatDay: 'dd',
	  formatMonth: 'MMMM',
	  formatYear: 'yyyy',
	  formatDayHeader: 'EEE',
	  formatDayTitle: 'MMMM yyyy',
	  formatMonthTitle: 'yyyy',
	  maxDate: null,
	  maxMode: 'year',
	  minDate: null,
	  minMode: 'day',
	  ngModelOptions: {},
	  shortcutPropagation: false,
	  showWeeks: true,
	  yearColumns: 5,
	  yearRows: 4
	})

	.controller('UibDatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$locale', '$log', 'dateFilter', 'uibDatepickerConfig', '$datepickerLiteralWarning', '$datepickerSuppressError', 'uibDateParser',
	  function($scope, $attrs, $parse, $interpolate, $locale, $log, dateFilter, datepickerConfig, $datepickerLiteralWarning, $datepickerSuppressError, dateParser) {
	  var self = this,
	      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl;
	      ngModelOptions = {},
	      watchListeners = [],
	      optionsUsed = !!$attrs.datepickerOptions;

	  if (!$scope.datepickerOptions) {
	    $scope.datepickerOptions = {};
	  }

	  // Modes chain
	  this.modes = ['day', 'month', 'year'];

	  [
	    'customClass',
	    'dateDisabled',
	    'datepickerMode',
	    'formatDay',
	    'formatDayHeader',
	    'formatDayTitle',
	    'formatMonth',
	    'formatMonthTitle',
	    'formatYear',
	    'maxDate',
	    'maxMode',
	    'minDate',
	    'minMode',
	    'showWeeks',
	    'shortcutPropagation',
	    'startingDay',
	    'yearColumns',
	    'yearRows'
	  ].forEach(function(key) {
	    switch (key) {
	      case 'customClass':
	      case 'dateDisabled':
	        $scope[key] = $scope.datepickerOptions[key] || angular.noop;
	        break;
	      case 'datepickerMode':
	        $scope.datepickerMode = angular.isDefined($scope.datepickerOptions.datepickerMode) ?
	          $scope.datepickerOptions.datepickerMode : datepickerConfig.datepickerMode;
	        break;
	      case 'formatDay':
	      case 'formatDayHeader':
	      case 'formatDayTitle':
	      case 'formatMonth':
	      case 'formatMonthTitle':
	      case 'formatYear':
	        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
	          $interpolate($scope.datepickerOptions[key])($scope.$parent) :
	          datepickerConfig[key];
	        break;
	      case 'showWeeks':
	      case 'shortcutPropagation':
	      case 'yearColumns':
	      case 'yearRows':
	        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
	          $scope.datepickerOptions[key] : datepickerConfig[key];
	        break;
	      case 'startingDay':
	        if (angular.isDefined($scope.datepickerOptions.startingDay)) {
	          self.startingDay = $scope.datepickerOptions.startingDay;
	        } else if (angular.isNumber(datepickerConfig.startingDay)) {
	          self.startingDay = datepickerConfig.startingDay;
	        } else {
	          self.startingDay = ($locale.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7;
	        }

	        break;
	      case 'maxDate':
	      case 'minDate':
	        $scope.$watch('datepickerOptions.' + key, function(value) {
	          if (value) {
	            if (angular.isDate(value)) {
	              self[key] = dateParser.fromTimezone(new Date(value), ngModelOptions.timezone);
	            } else {
	              if ($datepickerLiteralWarning) {
	                $log.warn('Literal date support has been deprecated, please switch to date object usage');
	              }

	              self[key] = new Date(dateFilter(value, 'medium'));
	            }
	          } else {
	            self[key] = datepickerConfig[key] ?
	              dateParser.fromTimezone(new Date(datepickerConfig[key]), ngModelOptions.timezone) :
	              null;
	          }

	          self.refreshView();
	        });

	        break;
	      case 'maxMode':
	      case 'minMode':
	        if ($scope.datepickerOptions[key]) {
	          $scope.$watch(function() { return $scope.datepickerOptions[key]; }, function(value) {
	            self[key] = $scope[key] = angular.isDefined(value) ? value : datepickerOptions[key];
	            if (key === 'minMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) < self.modes.indexOf(self[key]) ||
	              key === 'maxMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) > self.modes.indexOf(self[key])) {
	              $scope.datepickerMode = self[key];
	              $scope.datepickerOptions.datepickerMode = self[key];
	            }
	          });
	        } else {
	          self[key] = $scope[key] = datepickerConfig[key] || null;
	        }

	        break;
	    }
	  });

	  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

	  $scope.disabled = angular.isDefined($attrs.disabled) || false;
	  if (angular.isDefined($attrs.ngDisabled)) {
	    watchListeners.push($scope.$parent.$watch($attrs.ngDisabled, function(disabled) {
	      $scope.disabled = disabled;
	      self.refreshView();
	    }));
	  }

	  $scope.isActive = function(dateObject) {
	    if (self.compare(dateObject.date, self.activeDate) === 0) {
	      $scope.activeDateId = dateObject.uid;
	      return true;
	    }
	    return false;
	  };

	  this.init = function(ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelOptions = ngModelCtrl_.$options || datepickerConfig.ngModelOptions;
	    if ($scope.datepickerOptions.initDate) {
	      self.activeDate = dateParser.fromTimezone($scope.datepickerOptions.initDate, ngModelOptions.timezone) || new Date();
	      $scope.$watch('datepickerOptions.initDate', function(initDate) {
	        if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
	          self.activeDate = dateParser.fromTimezone(initDate, ngModelOptions.timezone);
	          self.refreshView();
	        }
	      });
	    } else {
	      self.activeDate = new Date();
	    }

	    this.activeDate = ngModelCtrl.$modelValue ?
	      dateParser.fromTimezone(new Date(ngModelCtrl.$modelValue), ngModelOptions.timezone) :
	      dateParser.fromTimezone(new Date(), ngModelOptions.timezone);

	    ngModelCtrl.$render = function() {
	      self.render();
	    };
	  };

	  this.render = function() {
	    if (ngModelCtrl.$viewValue) {
	      var date = new Date(ngModelCtrl.$viewValue),
	          isValid = !isNaN(date);

	      if (isValid) {
	        this.activeDate = dateParser.fromTimezone(date, ngModelOptions.timezone);
	      } else if (!$datepickerSuppressError) {
	        $log.error('Datepicker directive: "ng-model" value must be a Date object');
	      }
	    }
	    this.refreshView();
	  };

	  this.refreshView = function() {
	    if (this.element) {
	      $scope.selectedDt = null;
	      this._refreshView();
	      if ($scope.activeDt) {
	        $scope.activeDateId = $scope.activeDt.uid;
	      }

	      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	      date = dateParser.fromTimezone(date, ngModelOptions.timezone);
	      ngModelCtrl.$setValidity('dateDisabled', !date ||
	        this.element && !this.isDisabled(date));
	    }
	  };

	  this.createDateObject = function(date, format) {
	    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	    model = dateParser.fromTimezone(model, ngModelOptions.timezone);
	    var today = new Date();
	    today = dateParser.fromTimezone(today, ngModelOptions.timezone);
	    var time = this.compare(date, today);
	    var dt = {
	      date: date,
	      label: dateParser.filter(date, format),
	      selected: model && this.compare(date, model) === 0,
	      disabled: this.isDisabled(date),
	      past: time < 0,
	      current: time === 0,
	      future: time > 0,
	      customClass: this.customClass(date) || null
	    };

	    if (model && this.compare(date, model) === 0) {
	      $scope.selectedDt = dt;
	    }

	    if (self.activeDate && this.compare(dt.date, self.activeDate) === 0) {
	      $scope.activeDt = dt;
	    }

	    return dt;
	  };

	  this.isDisabled = function(date) {
	    return $scope.disabled ||
	      this.minDate && this.compare(date, this.minDate) < 0 ||
	      this.maxDate && this.compare(date, this.maxDate) > 0 ||
	      $scope.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode});
	  };

	  this.customClass = function(date) {
	    return $scope.customClass({date: date, mode: $scope.datepickerMode});
	  };

	  // Split array into smaller arrays
	  this.split = function(arr, size) {
	    var arrays = [];
	    while (arr.length > 0) {
	      arrays.push(arr.splice(0, size));
	    }
	    return arrays;
	  };

	  $scope.select = function(date) {
	    if ($scope.datepickerMode === self.minMode) {
	      var dt = ngModelCtrl.$viewValue ? dateParser.fromTimezone(new Date(ngModelCtrl.$viewValue), ngModelOptions.timezone) : new Date(0, 0, 0, 0, 0, 0, 0);
	      dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	      dt = dateParser.toTimezone(dt, ngModelOptions.timezone);
	      ngModelCtrl.$setViewValue(dt);
	      ngModelCtrl.$render();
	    } else {
	      self.activeDate = date;
	      setMode(self.modes[self.modes.indexOf($scope.datepickerMode) - 1]);

	      $scope.$emit('uib:datepicker.mode');
	    }
	  };

	  $scope.move = function(direction) {
	    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
	        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
	    self.activeDate.setFullYear(year, month, 1);
	    self.refreshView();
	  };

	  $scope.toggleMode = function(direction) {
	    direction = direction || 1;

	    if ($scope.datepickerMode === self.maxMode && direction === 1 ||
	      $scope.datepickerMode === self.minMode && direction === -1) {
	      return;
	    }

	    setMode(self.modes[self.modes.indexOf($scope.datepickerMode) + direction]);

	    $scope.$emit('uib:datepicker.mode');
	  };

	  // Key event mapper
	  $scope.keys = { 13: 'enter', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down' };

	  var focusElement = function() {
	    self.element[0].focus();
	  };

	  // Listen for focus requests from popup directive
	  $scope.$on('uib:datepicker.focus', focusElement);

	  $scope.keydown = function(evt) {
	    var key = $scope.keys[evt.which];

	    if (!key || evt.shiftKey || evt.altKey || $scope.disabled) {
	      return;
	    }

	    evt.preventDefault();
	    if (!self.shortcutPropagation) {
	      evt.stopPropagation();
	    }

	    if (key === 'enter' || key === 'space') {
	      if (self.isDisabled(self.activeDate)) {
	        return; // do nothing
	      }
	      $scope.select(self.activeDate);
	    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
	      $scope.toggleMode(key === 'up' ? 1 : -1);
	    } else {
	      self.handleKeyDown(key, evt);
	      self.refreshView();
	    }
	  };

	  $scope.$on("$destroy", function() {
	    //Clear all watch listeners on destroy
	    while (watchListeners.length) {
	      watchListeners.shift()();
	    }
	  });

	  function setMode(mode) {
	    $scope.datepickerMode = mode;
	    $scope.datepickerOptions.datepickerMode = mode;
	  }
	}])

	.controller('UibDaypickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
	  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	  this.step = { months: 1 };
	  this.element = $element;
	  function getDaysInMonth(year, month) {
	    return month === 1 && year % 4 === 0 &&
	      (year % 100 !== 0 || year % 400 === 0) ? 29 : DAYS_IN_MONTH[month];
	  }

	  this.init = function(ctrl) {
	    angular.extend(ctrl, this);
	    scope.showWeeks = ctrl.showWeeks;
	    ctrl.refreshView();
	  };

	  this.getDates = function(startDate, n) {
	    var dates = new Array(n), current = new Date(startDate), i = 0, date;
	    while (i < n) {
	      date = new Date(current);
	      dates[i++] = date;
	      current.setDate(current.getDate() + 1);
	    }
	    return dates;
	  };

	  this._refreshView = function() {
	    var year = this.activeDate.getFullYear(),
	      month = this.activeDate.getMonth(),
	      firstDayOfMonth = new Date(this.activeDate);

	    firstDayOfMonth.setFullYear(year, month, 1);

	    var difference = this.startingDay - firstDayOfMonth.getDay(),
	      numDisplayedFromPreviousMonth = difference > 0 ?
	        7 - difference : - difference,
	      firstDate = new Date(firstDayOfMonth);

	    if (numDisplayedFromPreviousMonth > 0) {
	      firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
	    }

	    // 42 is the number of days on a six-week calendar
	    var days = this.getDates(firstDate, 42);
	    for (var i = 0; i < 42; i ++) {
	      days[i] = angular.extend(this.createDateObject(days[i], this.formatDay), {
	        secondary: days[i].getMonth() !== month,
	        uid: scope.uniqueId + '-' + i
	      });
	    }

	    scope.labels = new Array(7);
	    for (var j = 0; j < 7; j++) {
	      scope.labels[j] = {
	        abbr: dateFilter(days[j].date, this.formatDayHeader),
	        full: dateFilter(days[j].date, 'EEEE')
	      };
	    }

	    scope.title = dateFilter(this.activeDate, this.formatDayTitle);
	    scope.rows = this.split(days, 7);

	    if (scope.showWeeks) {
	      scope.weekNumbers = [];
	      var thursdayIndex = (4 + 7 - this.startingDay) % 7,
	          numWeeks = scope.rows.length;
	      for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
	        scope.weekNumbers.push(
	          getISO8601WeekNumber(scope.rows[curWeek][thursdayIndex].date));
	      }
	    }
	  };

	  this.compare = function(date1, date2) {
	    var _date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
	    var _date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
	    _date1.setFullYear(date1.getFullYear());
	    _date2.setFullYear(date2.getFullYear());
	    return _date1 - _date2;
	  };

	  function getISO8601WeekNumber(date) {
	    var checkDate = new Date(date);
	    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
	    var time = checkDate.getTime();
	    checkDate.setMonth(0); // Compare with Jan 1
	    checkDate.setDate(1);
	    return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	  }

	  this.handleKeyDown = function(key, evt) {
	    var date = this.activeDate.getDate();

	    if (key === 'left') {
	      date = date - 1;
	    } else if (key === 'up') {
	      date = date - 7;
	    } else if (key === 'right') {
	      date = date + 1;
	    } else if (key === 'down') {
	      date = date + 7;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      var month = this.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
	      this.activeDate.setMonth(month, 1);
	      date = Math.min(getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth()), date);
	    } else if (key === 'home') {
	      date = 1;
	    } else if (key === 'end') {
	      date = getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth());
	    }
	    this.activeDate.setDate(date);
	  };
	}])

	.controller('UibMonthpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
	  this.step = { years: 1 };
	  this.element = $element;

	  this.init = function(ctrl) {
	    angular.extend(ctrl, this);
	    ctrl.refreshView();
	  };

	  this._refreshView = function() {
	    var months = new Array(12),
	        year = this.activeDate.getFullYear(),
	        date;

	    for (var i = 0; i < 12; i++) {
	      date = new Date(this.activeDate);
	      date.setFullYear(year, i, 1);
	      months[i] = angular.extend(this.createDateObject(date, this.formatMonth), {
	        uid: scope.uniqueId + '-' + i
	      });
	    }

	    scope.title = dateFilter(this.activeDate, this.formatMonthTitle);
	    scope.rows = this.split(months, 3);
	  };

	  this.compare = function(date1, date2) {
	    var _date1 = new Date(date1.getFullYear(), date1.getMonth());
	    var _date2 = new Date(date2.getFullYear(), date2.getMonth());
	    _date1.setFullYear(date1.getFullYear());
	    _date2.setFullYear(date2.getFullYear());
	    return _date1 - _date2;
	  };

	  this.handleKeyDown = function(key, evt) {
	    var date = this.activeDate.getMonth();

	    if (key === 'left') {
	      date = date - 1;
	    } else if (key === 'up') {
	      date = date - 3;
	    } else if (key === 'right') {
	      date = date + 1;
	    } else if (key === 'down') {
	      date = date + 3;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      var year = this.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
	      this.activeDate.setFullYear(year);
	    } else if (key === 'home') {
	      date = 0;
	    } else if (key === 'end') {
	      date = 11;
	    }
	    this.activeDate.setMonth(date);
	  };
	}])

	.controller('UibYearpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
	  var columns, range;
	  this.element = $element;

	  function getStartingYear(year) {
	    return parseInt((year - 1) / range, 10) * range + 1;
	  }

	  this.yearpickerInit = function() {
	    columns = this.yearColumns;
	    range = this.yearRows * columns;
	    this.step = { years: range };
	  };

	  this._refreshView = function() {
	    var years = new Array(range), date;

	    for (var i = 0, start = getStartingYear(this.activeDate.getFullYear()); i < range; i++) {
	      date = new Date(this.activeDate);
	      date.setFullYear(start + i, 0, 1);
	      years[i] = angular.extend(this.createDateObject(date, this.formatYear), {
	        uid: scope.uniqueId + '-' + i
	      });
	    }

	    scope.title = [years[0].label, years[range - 1].label].join(' - ');
	    scope.rows = this.split(years, columns);
	    scope.columns = columns;
	  };

	  this.compare = function(date1, date2) {
	    return date1.getFullYear() - date2.getFullYear();
	  };

	  this.handleKeyDown = function(key, evt) {
	    var date = this.activeDate.getFullYear();

	    if (key === 'left') {
	      date = date - 1;
	    } else if (key === 'up') {
	      date = date - columns;
	    } else if (key === 'right') {
	      date = date + 1;
	    } else if (key === 'down') {
	      date = date + columns;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      date += (key === 'pageup' ? - 1 : 1) * range;
	    } else if (key === 'home') {
	      date = getStartingYear(this.activeDate.getFullYear());
	    } else if (key === 'end') {
	      date = getStartingYear(this.activeDate.getFullYear()) + range - 1;
	    }
	    this.activeDate.setFullYear(date);
	  };
	}])

	.directive('uibDatepicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/datepicker.html';
	    },
	    scope: {
	      datepickerOptions: '=?'
	    },
	    require: ['uibDatepicker', '^ngModel'],
	    controller: 'UibDatepickerController',
	    controllerAs: 'datepicker',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      datepickerCtrl.init(ngModelCtrl);
	    }
	  };
	})

	.directive('uibDaypicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/day.html';
	    },
	    require: ['^uibDatepicker', 'uibDaypicker'],
	    controller: 'UibDaypickerController',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0],
	        daypickerCtrl = ctrls[1];

	      daypickerCtrl.init(datepickerCtrl);
	    }
	  };
	})

	.directive('uibMonthpicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/month.html';
	    },
	    require: ['^uibDatepicker', 'uibMonthpicker'],
	    controller: 'UibMonthpickerController',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0],
	        monthpickerCtrl = ctrls[1];

	      monthpickerCtrl.init(datepickerCtrl);
	    }
	  };
	})

	.directive('uibYearpicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/year.html';
	    },
	    require: ['^uibDatepicker', 'uibYearpicker'],
	    controller: 'UibYearpickerController',
	    link: function(scope, element, attrs, ctrls) {
	      var ctrl = ctrls[0];
	      angular.extend(ctrl, ctrls[1]);
	      ctrl.yearpickerInit();

	      ctrl.refreshView();
	    }
	  };
	});

	angular.module('ui.bootstrap.position', [])

	/**
	 * A set of utility methods for working with the DOM.
	 * It is meant to be used where we need to absolute-position elements in
	 * relation to another element (this is the case for tooltips, popovers,
	 * typeahead suggestions etc.).
	 */
	  .factory('$uibPosition', ['$document', '$window', function($document, $window) {
	    /**
	     * Used by scrollbarWidth() function to cache scrollbar's width.
	     * Do not access this variable directly, use scrollbarWidth() instead.
	     */
	    var SCROLLBAR_WIDTH;
	    /**
	     * scrollbar on body and html element in IE and Edge overlay
	     * content and should be considered 0 width.
	     */
	    var BODY_SCROLLBAR_WIDTH;
	    var OVERFLOW_REGEX = {
	      normal: /(auto|scroll)/,
	      hidden: /(auto|scroll|hidden)/
	    };
	    var PLACEMENT_REGEX = {
	      auto: /\s?auto?\s?/i,
	      primary: /^(top|bottom|left|right)$/,
	      secondary: /^(top|bottom|left|right|center)$/,
	      vertical: /^(top|bottom)$/
	    };
	    var BODY_REGEX = /(HTML|BODY)/;

	    return {

	      /**
	       * Provides a raw DOM element from a jQuery/jQLite element.
	       *
	       * @param {element} elem - The element to convert.
	       *
	       * @returns {element} A HTML element.
	       */
	      getRawNode: function(elem) {
	        return elem.nodeName ? elem : elem[0] || elem;
	      },

	      /**
	       * Provides a parsed number for a style property.  Strips
	       * units and casts invalid numbers to 0.
	       *
	       * @param {string} value - The style value to parse.
	       *
	       * @returns {number} A valid number.
	       */
	      parseStyle: function(value) {
	        value = parseFloat(value);
	        return isFinite(value) ? value : 0;
	      },

	      /**
	       * Provides the closest positioned ancestor.
	       *
	       * @param {element} element - The element to get the offest parent for.
	       *
	       * @returns {element} The closest positioned ancestor.
	       */
	      offsetParent: function(elem) {
	        elem = this.getRawNode(elem);

	        var offsetParent = elem.offsetParent || $document[0].documentElement;

	        function isStaticPositioned(el) {
	          return ($window.getComputedStyle(el).position || 'static') === 'static';
	        }

	        while (offsetParent && offsetParent !== $document[0].documentElement && isStaticPositioned(offsetParent)) {
	          offsetParent = offsetParent.offsetParent;
	        }

	        return offsetParent || $document[0].documentElement;
	      },

	      /**
	       * Provides the scrollbar width, concept from TWBS measureScrollbar()
	       * function in https://github.com/twbs/bootstrap/blob/master/js/modal.js
	       * In IE and Edge, scollbar on body and html element overlay and should
	       * return a width of 0.
	       *
	       * @returns {number} The width of the browser scollbar.
	       */
	      scrollbarWidth: function(isBody) {
	        if (isBody) {
	          if (angular.isUndefined(BODY_SCROLLBAR_WIDTH)) {
	            var bodyElem = $document.find('body');
	            bodyElem.addClass('uib-position-body-scrollbar-measure');
	            BODY_SCROLLBAR_WIDTH = $window.innerWidth - bodyElem[0].clientWidth;
	            BODY_SCROLLBAR_WIDTH = isFinite(BODY_SCROLLBAR_WIDTH) ? BODY_SCROLLBAR_WIDTH : 0;
	            bodyElem.removeClass('uib-position-body-scrollbar-measure');
	          }
	          return BODY_SCROLLBAR_WIDTH;
	        }

	        if (angular.isUndefined(SCROLLBAR_WIDTH)) {
	          var scrollElem = angular.element('<div class="uib-position-scrollbar-measure"></div>');
	          $document.find('body').append(scrollElem);
	          SCROLLBAR_WIDTH = scrollElem[0].offsetWidth - scrollElem[0].clientWidth;
	          SCROLLBAR_WIDTH = isFinite(SCROLLBAR_WIDTH) ? SCROLLBAR_WIDTH : 0;
	          scrollElem.remove();
	        }

	        return SCROLLBAR_WIDTH;
	      },

	      /**
	       * Provides the padding required on an element to replace the scrollbar.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**scrollbarWidth**: the width of the scrollbar</li>
	       *     <li>**widthOverflow**: whether the the width is overflowing</li>
	       *     <li>**right**: the amount of right padding on the element needed to replace the scrollbar</li>
	       *     <li>**rightOriginal**: the amount of right padding currently on the element</li>
	       *     <li>**heightOverflow**: whether the the height is overflowing</li>
	       *     <li>**bottom**: the amount of bottom padding on the element needed to replace the scrollbar</li>
	       *     <li>**bottomOriginal**: the amount of bottom padding currently on the element</li>
	       *   </ul>
	       */
	      scrollbarPadding: function(elem) {
	        elem = this.getRawNode(elem);

	        var elemStyle = $window.getComputedStyle(elem);
	        var paddingRight = this.parseStyle(elemStyle.paddingRight);
	        var paddingBottom = this.parseStyle(elemStyle.paddingBottom);
	        var scrollParent = this.scrollParent(elem, false, true);
	        var scrollbarWidth = this.scrollbarWidth(scrollParent, BODY_REGEX.test(scrollParent.tagName));

	        return {
	          scrollbarWidth: scrollbarWidth,
	          widthOverflow: scrollParent.scrollWidth > scrollParent.clientWidth,
	          right: paddingRight + scrollbarWidth,
	          originalRight: paddingRight,
	          heightOverflow: scrollParent.scrollHeight > scrollParent.clientHeight,
	          bottom: paddingBottom + scrollbarWidth,
	          originalBottom: paddingBottom
	         };
	      },

	      /**
	       * Checks to see if the element is scrollable.
	       *
	       * @param {element} elem - The element to check.
	       * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
	       *   default is false.
	       *
	       * @returns {boolean} Whether the element is scrollable.
	       */
	      isScrollable: function(elem, includeHidden) {
	        elem = this.getRawNode(elem);

	        var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
	        var elemStyle = $window.getComputedStyle(elem);
	        return overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX);
	      },

	      /**
	       * Provides the closest scrollable ancestor.
	       * A port of the jQuery UI scrollParent method:
	       * https://github.com/jquery/jquery-ui/blob/master/ui/scroll-parent.js
	       *
	       * @param {element} elem - The element to find the scroll parent of.
	       * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
	       *   default is false.
	       * @param {boolean=} [includeSelf=false] - Should the element being passed be
	       * included in the scrollable llokup.
	       *
	       * @returns {element} A HTML element.
	       */
	      scrollParent: function(elem, includeHidden, includeSelf) {
	        elem = this.getRawNode(elem);

	        var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
	        var documentEl = $document[0].documentElement;
	        var elemStyle = $window.getComputedStyle(elem);
	        if (includeSelf && overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX)) {
	          return elem;
	        }
	        var excludeStatic = elemStyle.position === 'absolute';
	        var scrollParent = elem.parentElement || documentEl;

	        if (scrollParent === documentEl || elemStyle.position === 'fixed') {
	          return documentEl;
	        }

	        while (scrollParent.parentElement && scrollParent !== documentEl) {
	          var spStyle = $window.getComputedStyle(scrollParent);
	          if (excludeStatic && spStyle.position !== 'static') {
	            excludeStatic = false;
	          }

	          if (!excludeStatic && overflowRegex.test(spStyle.overflow + spStyle.overflowY + spStyle.overflowX)) {
	            break;
	          }
	          scrollParent = scrollParent.parentElement;
	        }

	        return scrollParent;
	      },

	      /**
	       * Provides read-only equivalent of jQuery's position function:
	       * http://api.jquery.com/position/ - distance to closest positioned
	       * ancestor.  Does not account for margins by default like jQuery position.
	       *
	       * @param {element} elem - The element to caclulate the position on.
	       * @param {boolean=} [includeMargins=false] - Should margins be accounted
	       * for, default is false.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**width**: the width of the element</li>
	       *     <li>**height**: the height of the element</li>
	       *     <li>**top**: distance to top edge of offset parent</li>
	       *     <li>**left**: distance to left edge of offset parent</li>
	       *   </ul>
	       */
	      position: function(elem, includeMagins) {
	        elem = this.getRawNode(elem);

	        var elemOffset = this.offset(elem);
	        if (includeMagins) {
	          var elemStyle = $window.getComputedStyle(elem);
	          elemOffset.top -= this.parseStyle(elemStyle.marginTop);
	          elemOffset.left -= this.parseStyle(elemStyle.marginLeft);
	        }
	        var parent = this.offsetParent(elem);
	        var parentOffset = {top: 0, left: 0};

	        if (parent !== $document[0].documentElement) {
	          parentOffset = this.offset(parent);
	          parentOffset.top += parent.clientTop - parent.scrollTop;
	          parentOffset.left += parent.clientLeft - parent.scrollLeft;
	        }

	        return {
	          width: Math.round(angular.isNumber(elemOffset.width) ? elemOffset.width : elem.offsetWidth),
	          height: Math.round(angular.isNumber(elemOffset.height) ? elemOffset.height : elem.offsetHeight),
	          top: Math.round(elemOffset.top - parentOffset.top),
	          left: Math.round(elemOffset.left - parentOffset.left)
	        };
	      },

	      /**
	       * Provides read-only equivalent of jQuery's offset function:
	       * http://api.jquery.com/offset/ - distance to viewport.  Does
	       * not account for borders, margins, or padding on the body
	       * element.
	       *
	       * @param {element} elem - The element to calculate the offset on.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**width**: the width of the element</li>
	       *     <li>**height**: the height of the element</li>
	       *     <li>**top**: distance to top edge of viewport</li>
	       *     <li>**right**: distance to bottom edge of viewport</li>
	       *   </ul>
	       */
	      offset: function(elem) {
	        elem = this.getRawNode(elem);

	        var elemBCR = elem.getBoundingClientRect();
	        return {
	          width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : elem.offsetWidth),
	          height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : elem.offsetHeight),
	          top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
	          left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
	        };
	      },

	      /**
	       * Provides offset distance to the closest scrollable ancestor
	       * or viewport.  Accounts for border and scrollbar width.
	       *
	       * Right and bottom dimensions represent the distance to the
	       * respective edge of the viewport element.  If the element
	       * edge extends beyond the viewport, a negative value will be
	       * reported.
	       *
	       * @param {element} elem - The element to get the viewport offset for.
	       * @param {boolean=} [useDocument=false] - Should the viewport be the document element instead
	       * of the first scrollable element, default is false.
	       * @param {boolean=} [includePadding=true] - Should the padding on the offset parent element
	       * be accounted for, default is true.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**top**: distance to the top content edge of viewport element</li>
	       *     <li>**bottom**: distance to the bottom content edge of viewport element</li>
	       *     <li>**left**: distance to the left content edge of viewport element</li>
	       *     <li>**right**: distance to the right content edge of viewport element</li>
	       *   </ul>
	       */
	      viewportOffset: function(elem, useDocument, includePadding) {
	        elem = this.getRawNode(elem);
	        includePadding = includePadding !== false ? true : false;

	        var elemBCR = elem.getBoundingClientRect();
	        var offsetBCR = {top: 0, left: 0, bottom: 0, right: 0};

	        var offsetParent = useDocument ? $document[0].documentElement : this.scrollParent(elem);
	        var offsetParentBCR = offsetParent.getBoundingClientRect();

	        offsetBCR.top = offsetParentBCR.top + offsetParent.clientTop;
	        offsetBCR.left = offsetParentBCR.left + offsetParent.clientLeft;
	        if (offsetParent === $document[0].documentElement) {
	          offsetBCR.top += $window.pageYOffset;
	          offsetBCR.left += $window.pageXOffset;
	        }
	        offsetBCR.bottom = offsetBCR.top + offsetParent.clientHeight;
	        offsetBCR.right = offsetBCR.left + offsetParent.clientWidth;

	        if (includePadding) {
	          var offsetParentStyle = $window.getComputedStyle(offsetParent);
	          offsetBCR.top += this.parseStyle(offsetParentStyle.paddingTop);
	          offsetBCR.bottom -= this.parseStyle(offsetParentStyle.paddingBottom);
	          offsetBCR.left += this.parseStyle(offsetParentStyle.paddingLeft);
	          offsetBCR.right -= this.parseStyle(offsetParentStyle.paddingRight);
	        }

	        return {
	          top: Math.round(elemBCR.top - offsetBCR.top),
	          bottom: Math.round(offsetBCR.bottom - elemBCR.bottom),
	          left: Math.round(elemBCR.left - offsetBCR.left),
	          right: Math.round(offsetBCR.right - elemBCR.right)
	        };
	      },

	      /**
	       * Provides an array of placement values parsed from a placement string.
	       * Along with the 'auto' indicator, supported placement strings are:
	       *   <ul>
	       *     <li>top: element on top, horizontally centered on host element.</li>
	       *     <li>top-left: element on top, left edge aligned with host element left edge.</li>
	       *     <li>top-right: element on top, lerightft edge aligned with host element right edge.</li>
	       *     <li>bottom: element on bottom, horizontally centered on host element.</li>
	       *     <li>bottom-left: element on bottom, left edge aligned with host element left edge.</li>
	       *     <li>bottom-right: element on bottom, right edge aligned with host element right edge.</li>
	       *     <li>left: element on left, vertically centered on host element.</li>
	       *     <li>left-top: element on left, top edge aligned with host element top edge.</li>
	       *     <li>left-bottom: element on left, bottom edge aligned with host element bottom edge.</li>
	       *     <li>right: element on right, vertically centered on host element.</li>
	       *     <li>right-top: element on right, top edge aligned with host element top edge.</li>
	       *     <li>right-bottom: element on right, bottom edge aligned with host element bottom edge.</li>
	       *   </ul>
	       * A placement string with an 'auto' indicator is expected to be
	       * space separated from the placement, i.e: 'auto bottom-left'  If
	       * the primary and secondary placement values do not match 'top,
	       * bottom, left, right' then 'top' will be the primary placement and
	       * 'center' will be the secondary placement.  If 'auto' is passed, true
	       * will be returned as the 3rd value of the array.
	       *
	       * @param {string} placement - The placement string to parse.
	       *
	       * @returns {array} An array with the following values
	       * <ul>
	       *   <li>**[0]**: The primary placement.</li>
	       *   <li>**[1]**: The secondary placement.</li>
	       *   <li>**[2]**: If auto is passed: true, else undefined.</li>
	       * </ul>
	       */
	      parsePlacement: function(placement) {
	        var autoPlace = PLACEMENT_REGEX.auto.test(placement);
	        if (autoPlace) {
	          placement = placement.replace(PLACEMENT_REGEX.auto, '');
	        }

	        placement = placement.split('-');

	        placement[0] = placement[0] || 'top';
	        if (!PLACEMENT_REGEX.primary.test(placement[0])) {
	          placement[0] = 'top';
	        }

	        placement[1] = placement[1] || 'center';
	        if (!PLACEMENT_REGEX.secondary.test(placement[1])) {
	          placement[1] = 'center';
	        }

	        if (autoPlace) {
	          placement[2] = true;
	        } else {
	          placement[2] = false;
	        }

	        return placement;
	      },

	      /**
	       * Provides coordinates for an element to be positioned relative to
	       * another element.  Passing 'auto' as part of the placement parameter
	       * will enable smart placement - where the element fits. i.e:
	       * 'auto left-top' will check to see if there is enough space to the left
	       * of the hostElem to fit the targetElem, if not place right (same for secondary
	       * top placement).  Available space is calculated using the viewportOffset
	       * function.
	       *
	       * @param {element} hostElem - The element to position against.
	       * @param {element} targetElem - The element to position.
	       * @param {string=} [placement=top] - The placement for the targetElem,
	       *   default is 'top'. 'center' is assumed as secondary placement for
	       *   'top', 'left', 'right', and 'bottom' placements.  Available placements are:
	       *   <ul>
	       *     <li>top</li>
	       *     <li>top-right</li>
	       *     <li>top-left</li>
	       *     <li>bottom</li>
	       *     <li>bottom-left</li>
	       *     <li>bottom-right</li>
	       *     <li>left</li>
	       *     <li>left-top</li>
	       *     <li>left-bottom</li>
	       *     <li>right</li>
	       *     <li>right-top</li>
	       *     <li>right-bottom</li>
	       *   </ul>
	       * @param {boolean=} [appendToBody=false] - Should the top and left values returned
	       *   be calculated from the body element, default is false.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**top**: Value for targetElem top.</li>
	       *     <li>**left**: Value for targetElem left.</li>
	       *     <li>**placement**: The resolved placement.</li>
	       *   </ul>
	       */
	      positionElements: function(hostElem, targetElem, placement, appendToBody) {
	        hostElem = this.getRawNode(hostElem);
	        targetElem = this.getRawNode(targetElem);

	        // need to read from prop to support tests.
	        var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop('offsetWidth');
	        var targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop('offsetHeight');

	        placement = this.parsePlacement(placement);

	        var hostElemPos = appendToBody ? this.offset(hostElem) : this.position(hostElem);
	        var targetElemPos = {top: 0, left: 0, placement: ''};

	        if (placement[2]) {
	          var viewportOffset = this.viewportOffset(hostElem, appendToBody);

	          var targetElemStyle = $window.getComputedStyle(targetElem);
	          var adjustedSize = {
	            width: targetWidth + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginLeft) + this.parseStyle(targetElemStyle.marginRight))),
	            height: targetHeight + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginTop) + this.parseStyle(targetElemStyle.marginBottom)))
	          };

	          placement[0] = placement[0] === 'top' && adjustedSize.height > viewportOffset.top && adjustedSize.height <= viewportOffset.bottom ? 'bottom' :
	                         placement[0] === 'bottom' && adjustedSize.height > viewportOffset.bottom && adjustedSize.height <= viewportOffset.top ? 'top' :
	                         placement[0] === 'left' && adjustedSize.width > viewportOffset.left && adjustedSize.width <= viewportOffset.right ? 'right' :
	                         placement[0] === 'right' && adjustedSize.width > viewportOffset.right && adjustedSize.width <= viewportOffset.left ? 'left' :
	                         placement[0];

	          placement[1] = placement[1] === 'top' && adjustedSize.height - hostElemPos.height > viewportOffset.bottom && adjustedSize.height - hostElemPos.height <= viewportOffset.top ? 'bottom' :
	                         placement[1] === 'bottom' && adjustedSize.height - hostElemPos.height > viewportOffset.top && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? 'top' :
	                         placement[1] === 'left' && adjustedSize.width - hostElemPos.width > viewportOffset.right && adjustedSize.width - hostElemPos.width <= viewportOffset.left ? 'right' :
	                         placement[1] === 'right' && adjustedSize.width - hostElemPos.width > viewportOffset.left && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? 'left' :
	                         placement[1];

	          if (placement[1] === 'center') {
	            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
	              var xOverflow = hostElemPos.width / 2 - targetWidth / 2;
	              if (viewportOffset.left + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.right) {
	                placement[1] = 'left';
	              } else if (viewportOffset.right + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.left) {
	                placement[1] = 'right';
	              }
	            } else {
	              var yOverflow = hostElemPos.height / 2 - adjustedSize.height / 2;
	              if (viewportOffset.top + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom) {
	                placement[1] = 'top';
	              } else if (viewportOffset.bottom + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.top) {
	                placement[1] = 'bottom';
	              }
	            }
	          }
	        }

	        switch (placement[0]) {
	          case 'top':
	            targetElemPos.top = hostElemPos.top - targetHeight;
	            break;
	          case 'bottom':
	            targetElemPos.top = hostElemPos.top + hostElemPos.height;
	            break;
	          case 'left':
	            targetElemPos.left = hostElemPos.left - targetWidth;
	            break;
	          case 'right':
	            targetElemPos.left = hostElemPos.left + hostElemPos.width;
	            break;
	        }

	        switch (placement[1]) {
	          case 'top':
	            targetElemPos.top = hostElemPos.top;
	            break;
	          case 'bottom':
	            targetElemPos.top = hostElemPos.top + hostElemPos.height - targetHeight;
	            break;
	          case 'left':
	            targetElemPos.left = hostElemPos.left;
	            break;
	          case 'right':
	            targetElemPos.left = hostElemPos.left + hostElemPos.width - targetWidth;
	            break;
	          case 'center':
	            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
	              targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;
	            } else {
	              targetElemPos.top = hostElemPos.top + hostElemPos.height / 2 - targetHeight / 2;
	            }
	            break;
	        }

	        targetElemPos.top = Math.round(targetElemPos.top);
	        targetElemPos.left = Math.round(targetElemPos.left);
	        targetElemPos.placement = placement[1] === 'center' ? placement[0] : placement[0] + '-' + placement[1];

	        return targetElemPos;
	      },

	      /**
	      * Provides a way for positioning tooltip & dropdown
	      * arrows when using placement options beyond the standard
	      * left, right, top, or bottom.
	      *
	      * @param {element} elem - The tooltip/dropdown element.
	      * @param {string} placement - The placement for the elem.
	      */
	      positionArrow: function(elem, placement) {
	        elem = this.getRawNode(elem);

	        var innerElem = elem.querySelector('.tooltip-inner, .popover-inner');
	        if (!innerElem) {
	          return;
	        }

	        var isTooltip = angular.element(innerElem).hasClass('tooltip-inner');

	        var arrowElem = isTooltip ? elem.querySelector('.tooltip-arrow') : elem.querySelector('.arrow');
	        if (!arrowElem) {
	          return;
	        }

	        var arrowCss = {
	          top: '',
	          bottom: '',
	          left: '',
	          right: ''
	        };

	        placement = this.parsePlacement(placement);
	        if (placement[1] === 'center') {
	          // no adjustment necessary - just reset styles
	          angular.element(arrowElem).css(arrowCss);
	          return;
	        }

	        var borderProp = 'border-' + placement[0] + '-width';
	        var borderWidth = $window.getComputedStyle(arrowElem)[borderProp];

	        var borderRadiusProp = 'border-';
	        if (PLACEMENT_REGEX.vertical.test(placement[0])) {
	          borderRadiusProp += placement[0] + '-' + placement[1];
	        } else {
	          borderRadiusProp += placement[1] + '-' + placement[0];
	        }
	        borderRadiusProp += '-radius';
	        var borderRadius = $window.getComputedStyle(isTooltip ? innerElem : elem)[borderRadiusProp];

	        switch (placement[0]) {
	          case 'top':
	            arrowCss.bottom = isTooltip ? '0' : '-' + borderWidth;
	            break;
	          case 'bottom':
	            arrowCss.top = isTooltip ? '0' : '-' + borderWidth;
	            break;
	          case 'left':
	            arrowCss.right = isTooltip ? '0' : '-' + borderWidth;
	            break;
	          case 'right':
	            arrowCss.left = isTooltip ? '0' : '-' + borderWidth;
	            break;
	        }

	        arrowCss[placement[1]] = borderRadius;

	        angular.element(arrowElem).css(arrowCss);
	      }
	    };
	  }]);

	angular.module('ui.bootstrap.datepickerPopup', ['ui.bootstrap.datepicker', 'ui.bootstrap.position'])

	.value('$datepickerPopupLiteralWarning', true)

	.constant('uibDatepickerPopupConfig', {
	  altInputFormats: [],
	  appendToBody: false,
	  clearText: 'Clear',
	  closeOnDateSelection: true,
	  closeText: 'Done',
	  currentText: 'Today',
	  datepickerPopup: 'yyyy-MM-dd',
	  datepickerPopupTemplateUrl: 'uib/template/datepickerPopup/popup.html',
	  datepickerTemplateUrl: 'uib/template/datepicker/datepicker.html',
	  html5Types: {
	    date: 'yyyy-MM-dd',
	    'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
	    'month': 'yyyy-MM'
	  },
	  onOpenFocus: true,
	  showButtonBar: true,
	  placement: 'auto bottom-left'
	})

	.controller('UibDatepickerPopupController', ['$scope', '$element', '$attrs', '$compile', '$log', '$parse', '$window', '$document', '$rootScope', '$uibPosition', 'dateFilter', 'uibDateParser', 'uibDatepickerPopupConfig', '$timeout', 'uibDatepickerConfig', '$datepickerPopupLiteralWarning',
	function($scope, $element, $attrs, $compile, $log, $parse, $window, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout, datepickerConfig, $datepickerPopupLiteralWarning) {
	  var cache = {},
	    isHtml5DateInput = false;
	  var dateFormat, closeOnDateSelection, appendToBody, onOpenFocus,
	    datepickerPopupTemplateUrl, datepickerTemplateUrl, popupEl, datepickerEl, scrollParentEl,
	    ngModel, ngModelOptions, $popup, altInputFormats, watchListeners = [],
	    timezone;

	  this.init = function(_ngModel_) {
	    ngModel = _ngModel_;
	    ngModelOptions = _ngModel_.$options;
	    closeOnDateSelection = angular.isDefined($attrs.closeOnDateSelection) ?
	      $scope.$parent.$eval($attrs.closeOnDateSelection) :
	      datepickerPopupConfig.closeOnDateSelection;
	    appendToBody = angular.isDefined($attrs.datepickerAppendToBody) ?
	      $scope.$parent.$eval($attrs.datepickerAppendToBody) :
	      datepickerPopupConfig.appendToBody;
	    onOpenFocus = angular.isDefined($attrs.onOpenFocus) ?
	      $scope.$parent.$eval($attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus;
	    datepickerPopupTemplateUrl = angular.isDefined($attrs.datepickerPopupTemplateUrl) ?
	      $attrs.datepickerPopupTemplateUrl :
	      datepickerPopupConfig.datepickerPopupTemplateUrl;
	    datepickerTemplateUrl = angular.isDefined($attrs.datepickerTemplateUrl) ?
	      $attrs.datepickerTemplateUrl : datepickerPopupConfig.datepickerTemplateUrl;
	    altInputFormats = angular.isDefined($attrs.altInputFormats) ?
	      $scope.$parent.$eval($attrs.altInputFormats) :
	      datepickerPopupConfig.altInputFormats;

	    $scope.showButtonBar = angular.isDefined($attrs.showButtonBar) ?
	      $scope.$parent.$eval($attrs.showButtonBar) :
	      datepickerPopupConfig.showButtonBar;

	    if (datepickerPopupConfig.html5Types[$attrs.type]) {
	      dateFormat = datepickerPopupConfig.html5Types[$attrs.type];
	      isHtml5DateInput = true;
	    } else {
	      dateFormat = $attrs.uibDatepickerPopup || datepickerPopupConfig.datepickerPopup;
	      $attrs.$observe('uibDatepickerPopup', function(value, oldValue) {
	        var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
	        // Invalidate the $modelValue to ensure that formatters re-run
	        // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
	        if (newDateFormat !== dateFormat) {
	          dateFormat = newDateFormat;
	          ngModel.$modelValue = null;

	          if (!dateFormat) {
	            throw new Error('uibDatepickerPopup must have a date format specified.');
	          }
	        }
	      });
	    }

	    if (!dateFormat) {
	      throw new Error('uibDatepickerPopup must have a date format specified.');
	    }

	    if (isHtml5DateInput && $attrs.uibDatepickerPopup) {
	      throw new Error('HTML5 date input types do not support custom formats.');
	    }

	    // popup element used to display calendar
	    popupEl = angular.element('<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>');
	    if (ngModelOptions) {
	      timezone = ngModelOptions.timezone;
	      $scope.ngModelOptions = angular.copy(ngModelOptions);
	      $scope.ngModelOptions.timezone = null;
	      if ($scope.ngModelOptions.updateOnDefault === true) {
	        $scope.ngModelOptions.updateOn = $scope.ngModelOptions.updateOn ?
	          $scope.ngModelOptions.updateOn + ' default' : 'default';
	      }

	      popupEl.attr('ng-model-options', 'ngModelOptions');
	    } else {
	      timezone = null;
	    }

	    popupEl.attr({
	      'ng-model': 'date',
	      'ng-change': 'dateSelection(date)',
	      'template-url': datepickerPopupTemplateUrl
	    });

	    // datepicker element
	    datepickerEl = angular.element(popupEl.children()[0]);
	    datepickerEl.attr('template-url', datepickerTemplateUrl);

	    if (!$scope.datepickerOptions) {
	      $scope.datepickerOptions = {};
	    }

	    if (isHtml5DateInput) {
	      if ($attrs.type === 'month') {
	        $scope.datepickerOptions.datepickerMode = 'month';
	        $scope.datepickerOptions.minMode = 'month';
	      }
	    }

	    datepickerEl.attr('datepicker-options', 'datepickerOptions');

	    if (!isHtml5DateInput) {
	      // Internal API to maintain the correct ng-invalid-[key] class
	      ngModel.$$parserName = 'date';
	      ngModel.$validators.date = validator;
	      ngModel.$parsers.unshift(parseDate);
	      ngModel.$formatters.push(function(value) {
	        if (ngModel.$isEmpty(value)) {
	          $scope.date = value;
	          return value;
	        }

	        $scope.date = dateParser.fromTimezone(value, timezone);

	        if (angular.isNumber($scope.date)) {
	          $scope.date = new Date($scope.date);
	        }

	        return dateParser.filter($scope.date, dateFormat);
	      });
	    } else {
	      ngModel.$formatters.push(function(value) {
	        $scope.date = dateParser.fromTimezone(value, timezone);
	        return value;
	      });
	    }

	    // Detect changes in the view from the text box
	    ngModel.$viewChangeListeners.push(function() {
	      $scope.date = parseDateString(ngModel.$viewValue);
	    });

	    $element.on('keydown', inputKeydownBind);

	    $popup = $compile(popupEl)($scope);
	    // Prevent jQuery cache memory leak (template is now redundant after linking)
	    popupEl.remove();

	    if (appendToBody) {
	      $document.find('body').append($popup);
	    } else {
	      $element.after($popup);
	    }

	    $scope.$on('$destroy', function() {
	      if ($scope.isOpen === true) {
	        if (!$rootScope.$$phase) {
	          $scope.$apply(function() {
	            $scope.isOpen = false;
	          });
	        }
	      }

	      $popup.remove();
	      $element.off('keydown', inputKeydownBind);
	      $document.off('click', documentClickBind);
	      if (scrollParentEl) {
	        scrollParentEl.off('scroll', positionPopup);
	      }
	      angular.element($window).off('resize', positionPopup);

	      //Clear all watch listeners on destroy
	      while (watchListeners.length) {
	        watchListeners.shift()();
	      }
	    });
	  };

	  $scope.getText = function(key) {
	    return $scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
	  };

	  $scope.isDisabled = function(date) {
	    if (date === 'today') {
	      date = dateParser.fromTimezone(new Date(), timezone);
	    }

	    var dates = {};
	    angular.forEach(['minDate', 'maxDate'], function(key) {
	      if ($scope.datepickerOptions[key] === null) {
	        dates[key] = null;
	      } else if (angular.isDate($scope.datepickerOptions[key])) {
	        dates[key] = dateParser.fromTimezone(new Date($scope.datepickerOptions[key]), timezone);
	      } else {
	        if ($datepickerPopupLiteralWarning) {
	          $log.warn('Literal date support has been deprecated, please switch to date object usage');
	        }

	        dates[key] = new Date(dateFilter($scope.datepickerOptions[key], 'medium'));
	      }
	    });

	    return $scope.datepickerOptions &&
	      dates.minDate && $scope.compare(date, dates.minDate) < 0 ||
	      dates.maxDate && $scope.compare(date, dates.maxDate) > 0;
	  };

	  $scope.compare = function(date1, date2) {
	    return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
	  };

	  // Inner change
	  $scope.dateSelection = function(dt) {
	    if (angular.isDefined(dt)) {
	      $scope.date = dt;
	    }
	    var date = $scope.date ? dateParser.filter($scope.date, dateFormat) : null; // Setting to NULL is necessary for form validators to function
	    $element.val(date);
	    ngModel.$setViewValue(date);

	    if (closeOnDateSelection) {
	      $scope.isOpen = false;
	      $element[0].focus();
	    }
	  };

	  $scope.keydown = function(evt) {
	    if (evt.which === 27) {
	      evt.stopPropagation();
	      $scope.isOpen = false;
	      $element[0].focus();
	    }
	  };

	  $scope.select = function(date, evt) {
	    evt.stopPropagation();

	    if (date === 'today') {
	      var today = new Date();
	      if (angular.isDate($scope.date)) {
	        date = new Date($scope.date);
	        date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
	      } else {
	        date = new Date(today.setHours(0, 0, 0, 0));
	      }
	    }
	    $scope.dateSelection(date);
	  };

	  $scope.close = function(evt) {
	    evt.stopPropagation();

	    $scope.isOpen = false;
	    $element[0].focus();
	  };

	  $scope.disabled = angular.isDefined($attrs.disabled) || false;
	  if ($attrs.ngDisabled) {
	    watchListeners.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(disabled) {
	      $scope.disabled = disabled;
	    }));
	  }

	  $scope.$watch('isOpen', function(value) {
	    if (value) {
	      if (!$scope.disabled) {
	        $timeout(function() {
	          positionPopup();

	          if (onOpenFocus) {
	            $scope.$broadcast('uib:datepicker.focus');
	          }

	          $document.on('click', documentClickBind);

	          var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
	          if (appendToBody || $position.parsePlacement(placement)[2]) {
	            scrollParentEl = scrollParentEl || angular.element($position.scrollParent($element));
	            if (scrollParentEl) {
	              scrollParentEl.on('scroll', positionPopup);
	            }
	          } else {
	            scrollParentEl = null;
	          }

	          angular.element($window).on('resize', positionPopup);
	        }, 0, false);
	      } else {
	        $scope.isOpen = false;
	      }
	    } else {
	      $document.off('click', documentClickBind);
	      if (scrollParentEl) {
	        scrollParentEl.off('scroll', positionPopup);
	      }
	      angular.element($window).off('resize', positionPopup);
	    }
	  });

	  function cameltoDash(string) {
	    return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
	  }

	  function parseDateString(viewValue) {
	    var date = dateParser.parse(viewValue, dateFormat, $scope.date);
	    if (isNaN(date)) {
	      for (var i = 0; i < altInputFormats.length; i++) {
	        date = dateParser.parse(viewValue, altInputFormats[i], $scope.date);
	        if (!isNaN(date)) {
	          return date;
	        }
	      }
	    }
	    return date;
	  }

	  function parseDate(viewValue) {
	    if (angular.isNumber(viewValue)) {
	      // presumably timestamp to date object
	      viewValue = new Date(viewValue);
	    }

	    if (!viewValue) {
	      return null;
	    }

	    if (angular.isDate(viewValue) && !isNaN(viewValue)) {
	      return viewValue;
	    }

	    if (angular.isString(viewValue)) {
	      var date = parseDateString(viewValue);
	      if (!isNaN(date)) {
	        return dateParser.toTimezone(date, timezone);
	      }
	    }

	    return ngModel.$options && ngModel.$options.allowInvalid ? viewValue : undefined;
	  }

	  function validator(modelValue, viewValue) {
	    var value = modelValue || viewValue;

	    if (!$attrs.ngRequired && !value) {
	      return true;
	    }

	    if (angular.isNumber(value)) {
	      value = new Date(value);
	    }

	    if (!value) {
	      return true;
	    }

	    if (angular.isDate(value) && !isNaN(value)) {
	      return true;
	    }

	    if (angular.isString(value)) {
	      return !isNaN(parseDateString(viewValue));
	    }

	    return false;
	  }

	  function documentClickBind(event) {
	    if (!$scope.isOpen && $scope.disabled) {
	      return;
	    }

	    var popup = $popup[0];
	    var dpContainsTarget = $element[0].contains(event.target);
	    // The popup node may not be an element node
	    // In some browsers (IE) only element nodes have the 'contains' function
	    var popupContainsTarget = popup.contains !== undefined && popup.contains(event.target);
	    if ($scope.isOpen && !(dpContainsTarget || popupContainsTarget)) {
	      $scope.$apply(function() {
	        $scope.isOpen = false;
	      });
	    }
	  }

	  function inputKeydownBind(evt) {
	    if (evt.which === 27 && $scope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.$apply(function() {
	        $scope.isOpen = false;
	      });
	      $element[0].focus();
	    } else if (evt.which === 40 && !$scope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.$apply(function() {
	        $scope.isOpen = true;
	      });
	    }
	  }

	  function positionPopup() {
	    if ($scope.isOpen) {
	      var dpElement = angular.element($popup[0].querySelector('.uib-datepicker-popup'));
	      var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
	      var position = $position.positionElements($element, dpElement, placement, appendToBody);
	      dpElement.css({top: position.top + 'px', left: position.left + 'px'});
	      if (dpElement.hasClass('uib-position-measure')) {
	        dpElement.removeClass('uib-position-measure');
	      }
	    }
	  }

	  $scope.$on('uib:datepicker.mode', function() {
	    $timeout(positionPopup, 0, false);
	  });
	}])

	.directive('uibDatepickerPopup', function() {
	  return {
	    require: ['ngModel', 'uibDatepickerPopup'],
	    controller: 'UibDatepickerPopupController',
	    scope: {
	      datepickerOptions: '=?',
	      isOpen: '=?',
	      currentText: '@',
	      clearText: '@',
	      closeText: '@'
	    },
	    link: function(scope, element, attrs, ctrls) {
	      var ngModel = ctrls[0],
	        ctrl = ctrls[1];

	      ctrl.init(ngModel);
	    }
	  };
	})

	.directive('uibDatepickerPopupWrap', function() {
	  return {
	    replace: true,
	    transclude: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepickerPopup/popup.html';
	    }
	  };
	});

	angular.module('ui.bootstrap.debounce', [])
	/**
	 * A helper, internal service that debounces a function
	 */
	  .factory('$$debounce', ['$timeout', function($timeout) {
	    return function(callback, debounceTime) {
	      var timeoutPromise;

	      return function() {
	        var self = this;
	        var args = Array.prototype.slice.call(arguments);
	        if (timeoutPromise) {
	          $timeout.cancel(timeoutPromise);
	        }

	        timeoutPromise = $timeout(function() {
	          callback.apply(self, args);
	        }, debounceTime);
	      };
	    };
	  }]);

	angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.position'])

	.constant('uibDropdownConfig', {
	  appendToOpenClass: 'uib-dropdown-open',
	  openClass: 'open'
	})

	.service('uibDropdownService', ['$document', '$rootScope', function($document, $rootScope) {
	  var openScope = null;

	  this.open = function(dropdownScope) {
	    if (!openScope) {
	      $document.on('click', closeDropdown);
	      $document.on('keydown', keybindFilter);
	    }

	    if (openScope && openScope !== dropdownScope) {
	      openScope.isOpen = false;
	    }

	    openScope = dropdownScope;
	  };

	  this.close = function(dropdownScope) {
	    if (openScope === dropdownScope) {
	      openScope = null;
	      $document.off('click', closeDropdown);
	      $document.off('keydown', keybindFilter);
	    }
	  };

	  var closeDropdown = function(evt) {
	    // This method may still be called during the same mouse event that
	    // unbound this event handler. So check openScope before proceeding.
	    if (!openScope) { return; }

	    if (evt && openScope.getAutoClose() === 'disabled') { return; }

	    if (evt && evt.which === 3) { return; }

	    var toggleElement = openScope.getToggleElement();
	    if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
	      return;
	    }

	    var dropdownElement = openScope.getDropdownElement();
	    if (evt && openScope.getAutoClose() === 'outsideClick' &&
	      dropdownElement && dropdownElement[0].contains(evt.target)) {
	      return;
	    }

	    openScope.isOpen = false;

	    if (!$rootScope.$$phase) {
	      openScope.$apply();
	    }
	  };

	  var keybindFilter = function(evt) {
	    if (evt.which === 27) {
	      openScope.focusToggleElement();
	      closeDropdown();
	    } else if (openScope.isKeynavEnabled() && [38, 40].indexOf(evt.which) !== -1 && openScope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      openScope.focusDropdownEntry(evt.which);
	    }
	  };
	}])

	.controller('UibDropdownController', ['$scope', '$element', '$attrs', '$parse', 'uibDropdownConfig', 'uibDropdownService', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', function($scope, $element, $attrs, $parse, dropdownConfig, uibDropdownService, $animate, $position, $document, $compile, $templateRequest) {
	  var self = this,
	    scope = $scope.$new(), // create a child scope so we are not polluting original one
	    templateScope,
	    appendToOpenClass = dropdownConfig.appendToOpenClass,
	    openClass = dropdownConfig.openClass,
	    getIsOpen,
	    setIsOpen = angular.noop,
	    toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
	    appendToBody = false,
	    appendTo = null,
	    keynavEnabled = false,
	    selectedOption = null,
	    body = $document.find('body');

	  $element.addClass('dropdown');

	  this.init = function() {
	    if ($attrs.isOpen) {
	      getIsOpen = $parse($attrs.isOpen);
	      setIsOpen = getIsOpen.assign;

	      $scope.$watch(getIsOpen, function(value) {
	        scope.isOpen = !!value;
	      });
	    }

	    if (angular.isDefined($attrs.dropdownAppendTo)) {
	      var appendToEl = $parse($attrs.dropdownAppendTo)(scope);
	      if (appendToEl) {
	        appendTo = angular.element(appendToEl);
	      }
	    }

	    appendToBody = angular.isDefined($attrs.dropdownAppendToBody);
	    keynavEnabled = angular.isDefined($attrs.keyboardNav);

	    if (appendToBody && !appendTo) {
	      appendTo = body;
	    }

	    if (appendTo && self.dropdownMenu) {
	      appendTo.append(self.dropdownMenu);
	      $element.on('$destroy', function handleDestroyEvent() {
	        self.dropdownMenu.remove();
	      });
	    }
	  };

	  this.toggle = function(open) {
	    scope.isOpen = arguments.length ? !!open : !scope.isOpen;
	    if (angular.isFunction(setIsOpen)) {
	      setIsOpen(scope, scope.isOpen);
	    }

	    return scope.isOpen;
	  };

	  // Allow other directives to watch status
	  this.isOpen = function() {
	    return scope.isOpen;
	  };

	  scope.getToggleElement = function() {
	    return self.toggleElement;
	  };

	  scope.getAutoClose = function() {
	    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
	  };

	  scope.getElement = function() {
	    return $element;
	  };

	  scope.isKeynavEnabled = function() {
	    return keynavEnabled;
	  };

	  scope.focusDropdownEntry = function(keyCode) {
	    var elems = self.dropdownMenu ? //If append to body is used.
	      angular.element(self.dropdownMenu).find('a') :
	      $element.find('ul').eq(0).find('a');

	    switch (keyCode) {
	      case 40: {
	        if (!angular.isNumber(self.selectedOption)) {
	          self.selectedOption = 0;
	        } else {
	          self.selectedOption = self.selectedOption === elems.length - 1 ?
	            self.selectedOption :
	            self.selectedOption + 1;
	        }
	        break;
	      }
	      case 38: {
	        if (!angular.isNumber(self.selectedOption)) {
	          self.selectedOption = elems.length - 1;
	        } else {
	          self.selectedOption = self.selectedOption === 0 ?
	            0 : self.selectedOption - 1;
	        }
	        break;
	      }
	    }
	    elems[self.selectedOption].focus();
	  };

	  scope.getDropdownElement = function() {
	    return self.dropdownMenu;
	  };

	  scope.focusToggleElement = function() {
	    if (self.toggleElement) {
	      self.toggleElement[0].focus();
	    }
	  };

	  scope.$watch('isOpen', function(isOpen, wasOpen) {
	    if (appendTo && self.dropdownMenu) {
	      var pos = $position.positionElements($element, self.dropdownMenu, 'bottom-left', true),
	        css,
	        rightalign;

	      css = {
	        top: pos.top + 'px',
	        display: isOpen ? 'block' : 'none'
	      };

	      rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
	      if (!rightalign) {
	        css.left = pos.left + 'px';
	        css.right = 'auto';
	      } else {
	        css.left = 'auto';
	        css.right = window.innerWidth -
	          (pos.left + $element.prop('offsetWidth')) + 'px';
	      }

	      // Need to adjust our positioning to be relative to the appendTo container
	      // if it's not the body element
	      if (!appendToBody) {
	        var appendOffset = $position.offset(appendTo);

	        css.top = pos.top - appendOffset.top + 'px';

	        if (!rightalign) {
	          css.left = pos.left - appendOffset.left + 'px';
	        } else {
	          css.right = window.innerWidth -
	            (pos.left - appendOffset.left + $element.prop('offsetWidth')) + 'px';
	        }
	      }

	      self.dropdownMenu.css(css);
	    }

	    var openContainer = appendTo ? appendTo : $element;
	    var hasOpenClass = openContainer.hasClass(appendTo ? appendToOpenClass : openClass);

	    if (hasOpenClass === !isOpen) {
	      $animate[isOpen ? 'addClass' : 'removeClass'](openContainer, appendTo ? appendToOpenClass : openClass).then(function() {
	        if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
	          toggleInvoker($scope, { open: !!isOpen });
	        }
	      });
	    }

	    if (isOpen) {
	      if (self.dropdownMenuTemplateUrl) {
	        $templateRequest(self.dropdownMenuTemplateUrl).then(function(tplContent) {
	          templateScope = scope.$new();
	          $compile(tplContent.trim())(templateScope, function(dropdownElement) {
	            var newEl = dropdownElement;
	            self.dropdownMenu.replaceWith(newEl);
	            self.dropdownMenu = newEl;
	          });
	        });
	      }

	      scope.focusToggleElement();
	      uibDropdownService.open(scope);
	    } else {
	      if (self.dropdownMenuTemplateUrl) {
	        if (templateScope) {
	          templateScope.$destroy();
	        }
	        var newEl = angular.element('<ul class="dropdown-menu"></ul>');
	        self.dropdownMenu.replaceWith(newEl);
	        self.dropdownMenu = newEl;
	      }

	      uibDropdownService.close(scope);
	      self.selectedOption = null;
	    }

	    if (angular.isFunction(setIsOpen)) {
	      setIsOpen($scope, isOpen);
	    }
	  });
	}])

	.directive('uibDropdown', function() {
	  return {
	    controller: 'UibDropdownController',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      dropdownCtrl.init();
	    }
	  };
	})

	.directive('uibDropdownMenu', function() {
	  return {
	    restrict: 'A',
	    require: '?^uibDropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl || angular.isDefined(attrs.dropdownNested)) {
	        return;
	      }

	      element.addClass('dropdown-menu');

	      var tplUrl = attrs.templateUrl;
	      if (tplUrl) {
	        dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
	      }

	      if (!dropdownCtrl.dropdownMenu) {
	        dropdownCtrl.dropdownMenu = element;
	      }
	    }
	  };
	})

	.directive('uibDropdownToggle', function() {
	  return {
	    require: '?^uibDropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl) {
	        return;
	      }

	      element.addClass('dropdown-toggle');

	      dropdownCtrl.toggleElement = element;

	      var toggleDropdown = function(event) {
	        event.preventDefault();

	        if (!element.hasClass('disabled') && !attrs.disabled) {
	          scope.$apply(function() {
	            dropdownCtrl.toggle();
	          });
	        }
	      };

	      element.bind('click', toggleDropdown);

	      // WAI-ARIA
	      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
	      scope.$watch(dropdownCtrl.isOpen, function(isOpen) {
	        element.attr('aria-expanded', !!isOpen);
	      });

	      scope.$on('$destroy', function() {
	        element.unbind('click', toggleDropdown);
	      });
	    }
	  };
	});

	angular.module('ui.bootstrap.stackedMap', [])
	/**
	 * A helper, internal data structure that acts as a map but also allows getting / removing
	 * elements in the LIFO order
	 */
	  .factory('$$stackedMap', function() {
	    return {
	      createNew: function() {
	        var stack = [];

	        return {
	          add: function(key, value) {
	            stack.push({
	              key: key,
	              value: value
	            });
	          },
	          get: function(key) {
	            for (var i = 0; i < stack.length; i++) {
	              if (key === stack[i].key) {
	                return stack[i];
	              }
	            }
	          },
	          keys: function() {
	            var keys = [];
	            for (var i = 0; i < stack.length; i++) {
	              keys.push(stack[i].key);
	            }
	            return keys;
	          },
	          top: function() {
	            return stack[stack.length - 1];
	          },
	          remove: function(key) {
	            var idx = -1;
	            for (var i = 0; i < stack.length; i++) {
	              if (key === stack[i].key) {
	                idx = i;
	                break;
	              }
	            }
	            return stack.splice(idx, 1)[0];
	          },
	          removeTop: function() {
	            return stack.splice(stack.length - 1, 1)[0];
	          },
	          length: function() {
	            return stack.length;
	          }
	        };
	      }
	    };
	  });
	angular.module('ui.bootstrap.modal', ['ui.bootstrap.stackedMap', 'ui.bootstrap.position'])
	/**
	 * A helper, internal data structure that stores all references attached to key
	 */
	  .factory('$$multiMap', function() {
	    return {
	      createNew: function() {
	        var map = {};

	        return {
	          entries: function() {
	            return Object.keys(map).map(function(key) {
	              return {
	                key: key,
	                value: map[key]
	              };
	            });
	          },
	          get: function(key) {
	            return map[key];
	          },
	          hasKey: function(key) {
	            return !!map[key];
	          },
	          keys: function() {
	            return Object.keys(map);
	          },
	          put: function(key, value) {
	            if (!map[key]) {
	              map[key] = [];
	            }

	            map[key].push(value);
	          },
	          remove: function(key, value) {
	            var values = map[key];

	            if (!values) {
	              return;
	            }

	            var idx = values.indexOf(value);

	            if (idx !== -1) {
	              values.splice(idx, 1);
	            }

	            if (!values.length) {
	              delete map[key];
	            }
	          }
	        };
	      }
	    };
	  })

	/**
	 * Pluggable resolve mechanism for the modal resolve resolution
	 * Supports UI Router's $resolve service
	 */
	  .provider('$uibResolve', function() {
	    var resolve = this;
	    this.resolver = null;

	    this.setResolver = function(resolver) {
	      this.resolver = resolver;
	    };

	    this.$get = ['$injector', '$q', function($injector, $q) {
	      var resolver = resolve.resolver ? $injector.get(resolve.resolver) : null;
	      return {
	        resolve: function(invocables, locals, parent, self) {
	          if (resolver) {
	            return resolver.resolve(invocables, locals, parent, self);
	          }

	          var promises = [];

	          angular.forEach(invocables, function(value) {
	            if (angular.isFunction(value) || angular.isArray(value)) {
	              promises.push($q.resolve($injector.invoke(value)));
	            } else if (angular.isString(value)) {
	              promises.push($q.resolve($injector.get(value)));
	            } else {
	              promises.push($q.resolve(value));
	            }
	          });

	          return $q.all(promises).then(function(resolves) {
	            var resolveObj = {};
	            var resolveIter = 0;
	            angular.forEach(invocables, function(value, key) {
	              resolveObj[key] = resolves[resolveIter++];
	            });

	            return resolveObj;
	          });
	        }
	      };
	    }];
	  })

	/**
	 * A helper directive for the $modal service. It creates a backdrop element.
	 */
	  .directive('uibModalBackdrop', ['$animate', '$injector', '$uibModalStack',
	  function($animate, $injector, $modalStack) {
	    return {
	      replace: true,
	      templateUrl: 'uib/template/modal/backdrop.html',
	      compile: function(tElement, tAttrs) {
	        tElement.addClass(tAttrs.backdropClass);
	        return linkFn;
	      }
	    };

	    function linkFn(scope, element, attrs) {
	      if (attrs.modalInClass) {
	        $animate.addClass(element, attrs.modalInClass);

	        scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
	          var done = setIsAsync();
	          if (scope.modalOptions.animation) {
	            $animate.removeClass(element, attrs.modalInClass).then(done);
	          } else {
	            done();
	          }
	        });
	      }
	    }
	  }])

	  .directive('uibModalWindow', ['$uibModalStack', '$q', '$animateCss', '$document',
	  function($modalStack, $q, $animateCss, $document) {
	    return {
	      scope: {
	        index: '@'
	      },
	      replace: true,
	      transclude: true,
	      templateUrl: function(tElement, tAttrs) {
	        return tAttrs.templateUrl || 'uib/template/modal/window.html';
	      },
	      link: function(scope, element, attrs) {
	        element.addClass(attrs.windowClass || '');
	        element.addClass(attrs.windowTopClass || '');
	        scope.size = attrs.size;

	        scope.close = function(evt) {
	          var modal = $modalStack.getTop();
	          if (modal && modal.value.backdrop &&
	            modal.value.backdrop !== 'static' &&
	            evt.target === evt.currentTarget) {
	            evt.preventDefault();
	            evt.stopPropagation();
	            $modalStack.dismiss(modal.key, 'backdrop click');
	          }
	        };

	        // moved from template to fix issue #2280
	        element.on('click', scope.close);

	        // This property is only added to the scope for the purpose of detecting when this directive is rendered.
	        // We can detect that by using this property in the template associated with this directive and then use
	        // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
	        scope.$isRendered = true;

	        // Deferred object that will be resolved when this modal is render.
	        var modalRenderDeferObj = $q.defer();
	        // Observe function will be called on next digest cycle after compilation, ensuring that the DOM is ready.
	        // In order to use this way of finding whether DOM is ready, we need to observe a scope property used in modal's template.
	        attrs.$observe('modalRender', function(value) {
	          if (value === 'true') {
	            modalRenderDeferObj.resolve();
	          }
	        });

	        modalRenderDeferObj.promise.then(function() {
	          var animationPromise = null;

	          if (attrs.modalInClass) {
	            animationPromise = $animateCss(element, {
	              addClass: attrs.modalInClass
	            }).start();

	            scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
	              var done = setIsAsync();
	              $animateCss(element, {
	                removeClass: attrs.modalInClass
	              }).start().then(done);
	            });
	          }


	          $q.when(animationPromise).then(function() {
	            // Notify {@link $modalStack} that modal is rendered.
	            var modal = $modalStack.getTop();
	            if (modal) {
	              $modalStack.modalRendered(modal.key);
	            }

	            /**
	             * If something within the freshly-opened modal already has focus (perhaps via a
	             * directive that causes focus). then no need to try and focus anything.
	             */
	            if (!($document[0].activeElement && element[0].contains($document[0].activeElement))) {
	              var inputWithAutofocus = element[0].querySelector('[autofocus]');
	              /**
	               * Auto-focusing of a freshly-opened modal element causes any child elements
	               * with the autofocus attribute to lose focus. This is an issue on touch
	               * based devices which will show and then hide the onscreen keyboard.
	               * Attempts to refocus the autofocus element via JavaScript will not reopen
	               * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
	               * the modal element if the modal does not contain an autofocus element.
	               */
	              if (inputWithAutofocus) {
	                inputWithAutofocus.focus();
	              } else {
	                element[0].focus();
	              }
	            }
	          });
	        });
	      }
	    };
	  }])

	  .directive('uibModalAnimationClass', function() {
	    return {
	      compile: function(tElement, tAttrs) {
	        if (tAttrs.modalAnimation) {
	          tElement.addClass(tAttrs.uibModalAnimationClass);
	        }
	      }
	    };
	  })

	  .directive('uibModalTransclude', function() {
	    return {
	      link: function(scope, element, attrs, controller, transclude) {
	        transclude(scope.$parent, function(clone) {
	          element.empty();
	          element.append(clone);
	        });
	      }
	    };
	  })

	  .factory('$uibModalStack', ['$animate', '$animateCss', '$document',
	    '$compile', '$rootScope', '$q', '$$multiMap', '$$stackedMap', '$uibPosition',
	    function($animate, $animateCss, $document, $compile, $rootScope, $q, $$multiMap, $$stackedMap, $uibPosition) {
	      var OPENED_MODAL_CLASS = 'modal-open';

	      var backdropDomEl, backdropScope;
	      var openedWindows = $$stackedMap.createNew();
	      var openedClasses = $$multiMap.createNew();
	      var $modalStack = {
	        NOW_CLOSING_EVENT: 'modal.stack.now-closing'
	      };
	      var topModalIndex = 0;
	      var previousTopOpenedModal = null;

	      //Modal focus behavior
	      var tabableSelector = 'a[href], area[href], input:not([disabled]), ' +
	        'button:not([disabled]),select:not([disabled]), textarea:not([disabled]), ' +
	        'iframe, object, embed, *[tabindex], *[contenteditable=true]';
	      var scrollbarPadding;

	      function isVisible(element) {
	        return !!(element.offsetWidth ||
	          element.offsetHeight ||
	          element.getClientRects().length);
	      }

	      function backdropIndex() {
	        var topBackdropIndex = -1;
	        var opened = openedWindows.keys();
	        for (var i = 0; i < opened.length; i++) {
	          if (openedWindows.get(opened[i]).value.backdrop) {
	            topBackdropIndex = i;
	          }
	        }

	        // If any backdrop exist, ensure that it's index is always
	        // right below the top modal
	        if (topBackdropIndex > -1 && topBackdropIndex < topModalIndex) {
	          topBackdropIndex = topModalIndex;
	        }
	        return topBackdropIndex;
	      }

	      $rootScope.$watch(backdropIndex, function(newBackdropIndex) {
	        if (backdropScope) {
	          backdropScope.index = newBackdropIndex;
	        }
	      });

	      function removeModalWindow(modalInstance, elementToReceiveFocus) {
	        var modalWindow = openedWindows.get(modalInstance).value;
	        var appendToElement = modalWindow.appendTo;

	        //clean up the stack
	        openedWindows.remove(modalInstance);
	        previousTopOpenedModal = openedWindows.top();
	        if (previousTopOpenedModal) {
	          topModalIndex = parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10);
	        }

	        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
	          var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
	          openedClasses.remove(modalBodyClass, modalInstance);
	          appendToElement.toggleClass(modalBodyClass, openedClasses.hasKey(modalBodyClass));
	          if (scrollbarPadding && scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
	            if (scrollbarPadding.originalRight) {
	              appendToElement.css({paddingRight: scrollbarPadding.originalRight + 'px'});
	            } else {
	              appendToElement.css({paddingRight: ''});
	            }
	            scrollbarPadding = null;
	          }
	          toggleTopWindowClass(true);
	        }, modalWindow.closedDeferred);
	        checkRemoveBackdrop();

	        //move focus to specified element if available, or else to body
	        if (elementToReceiveFocus && elementToReceiveFocus.focus) {
	          elementToReceiveFocus.focus();
	        } else if (appendToElement.focus) {
	          appendToElement.focus();
	        }
	      }

	      // Add or remove "windowTopClass" from the top window in the stack
	      function toggleTopWindowClass(toggleSwitch) {
	        var modalWindow;

	        if (openedWindows.length() > 0) {
	          modalWindow = openedWindows.top().value;
	          modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
	        }
	      }

	      function checkRemoveBackdrop() {
	        //remove backdrop if no longer needed
	        if (backdropDomEl && backdropIndex() === -1) {
	          var backdropScopeRef = backdropScope;
	          removeAfterAnimate(backdropDomEl, backdropScope, function() {
	            backdropScopeRef = null;
	          });
	          backdropDomEl = undefined;
	          backdropScope = undefined;
	        }
	      }

	      function removeAfterAnimate(domEl, scope, done, closedDeferred) {
	        var asyncDeferred;
	        var asyncPromise = null;
	        var setIsAsync = function() {
	          if (!asyncDeferred) {
	            asyncDeferred = $q.defer();
	            asyncPromise = asyncDeferred.promise;
	          }

	          return function asyncDone() {
	            asyncDeferred.resolve();
	          };
	        };
	        scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);

	        // Note that it's intentional that asyncPromise might be null.
	        // That's when setIsAsync has not been called during the
	        // NOW_CLOSING_EVENT broadcast.
	        return $q.when(asyncPromise).then(afterAnimating);

	        function afterAnimating() {
	          if (afterAnimating.done) {
	            return;
	          }
	          afterAnimating.done = true;

	          $animate.leave(domEl).then(function() {
	            domEl.remove();
	            if (closedDeferred) {
	              closedDeferred.resolve();
	            }
	          });

	          scope.$destroy();
	          if (done) {
	            done();
	          }
	        }
	      }

	      $document.on('keydown', keydownListener);

	      $rootScope.$on('$destroy', function() {
	        $document.off('keydown', keydownListener);
	      });

	      function keydownListener(evt) {
	        if (evt.isDefaultPrevented()) {
	          return evt;
	        }

	        var modal = openedWindows.top();
	        if (modal) {
	          switch (evt.which) {
	            case 27: {
	              if (modal.value.keyboard) {
	                evt.preventDefault();
	                $rootScope.$apply(function() {
	                  $modalStack.dismiss(modal.key, 'escape key press');
	                });
	              }
	              break;
	            }
	            case 9: {
	              var list = $modalStack.loadFocusElementList(modal);
	              var focusChanged = false;
	              if (evt.shiftKey) {
	                if ($modalStack.isFocusInFirstItem(evt, list) || $modalStack.isModalFocused(evt, modal)) {
	                  focusChanged = $modalStack.focusLastFocusableElement(list);
	                }
	              } else {
	                if ($modalStack.isFocusInLastItem(evt, list)) {
	                  focusChanged = $modalStack.focusFirstFocusableElement(list);
	                }
	              }

	              if (focusChanged) {
	                evt.preventDefault();
	                evt.stopPropagation();
	              }

	              break;
	            }
	          }
	        }
	      }

	      $modalStack.open = function(modalInstance, modal) {
	        var modalOpener = $document[0].activeElement,
	          modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;

	        toggleTopWindowClass(false);
	        
	        // Store the current top first, to determine what index we ought to use
	        // for the current top modal
	        previousTopOpenedModal = openedWindows.top();

	        openedWindows.add(modalInstance, {
	          deferred: modal.deferred,
	          renderDeferred: modal.renderDeferred,
	          closedDeferred: modal.closedDeferred,
	          modalScope: modal.scope,
	          backdrop: modal.backdrop,
	          keyboard: modal.keyboard,
	          openedClass: modal.openedClass,
	          windowTopClass: modal.windowTopClass,
	          animation: modal.animation,
	          appendTo: modal.appendTo
	        });

	        openedClasses.put(modalBodyClass, modalInstance);

	        var appendToElement = modal.appendTo,
	            currBackdropIndex = backdropIndex();

	        if (!appendToElement.length) {
	          throw new Error('appendTo element not found. Make sure that the element passed is in DOM.');
	        }

	        if (currBackdropIndex >= 0 && !backdropDomEl) {
	          backdropScope = $rootScope.$new(true);
	          backdropScope.modalOptions = modal;
	          backdropScope.index = currBackdropIndex;
	          backdropDomEl = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');
	          backdropDomEl.attr('backdrop-class', modal.backdropClass);
	          if (modal.animation) {
	            backdropDomEl.attr('modal-animation', 'true');
	          }
	          $compile(backdropDomEl)(backdropScope);
	          $animate.enter(backdropDomEl, appendToElement);
	        }

	        // Set the top modal index based on the index of the previous top modal
	        topModalIndex = previousTopOpenedModal ? parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10) + 1 : 0;
	        var angularDomEl = angular.element('<div uib-modal-window="modal-window"></div>');
	        angularDomEl.attr({
	          'template-url': modal.windowTemplateUrl,
	          'window-class': modal.windowClass,
	          'window-top-class': modal.windowTopClass,
	          'size': modal.size,
	          'index': topModalIndex,
	          'animate': 'animate'
	        }).html(modal.content);
	        if (modal.animation) {
	          angularDomEl.attr('modal-animation', 'true');
	        }

	        scrollbarPadding = $uibPosition.scrollbarPadding(appendToElement);
	        if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
	          appendToElement.css({paddingRight: scrollbarPadding.right + 'px'});
	        }
	        appendToElement.addClass(modalBodyClass);
	        $animate.enter($compile(angularDomEl)(modal.scope), appendToElement);

	        openedWindows.top().value.modalDomEl = angularDomEl;
	        openedWindows.top().value.modalOpener = modalOpener;
	      };

	      function broadcastClosing(modalWindow, resultOrReason, closing) {
	        return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
	      }

	      $modalStack.close = function(modalInstance, result) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
	          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
	          modalWindow.value.deferred.resolve(result);
	          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
	          return true;
	        }
	        return !modalWindow;
	      };

	      $modalStack.dismiss = function(modalInstance, reason) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
	          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
	          modalWindow.value.deferred.reject(reason);
	          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
	          return true;
	        }
	        return !modalWindow;
	      };

	      $modalStack.dismissAll = function(reason) {
	        var topModal = this.getTop();
	        while (topModal && this.dismiss(topModal.key, reason)) {
	          topModal = this.getTop();
	        }
	      };

	      $modalStack.getTop = function() {
	        return openedWindows.top();
	      };

	      $modalStack.modalRendered = function(modalInstance) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow) {
	          modalWindow.value.renderDeferred.resolve();
	        }
	      };

	      $modalStack.focusFirstFocusableElement = function(list) {
	        if (list.length > 0) {
	          list[0].focus();
	          return true;
	        }
	        return false;
	      };

	      $modalStack.focusLastFocusableElement = function(list) {
	        if (list.length > 0) {
	          list[list.length - 1].focus();
	          return true;
	        }
	        return false;
	      };

	      $modalStack.isModalFocused = function(evt, modalWindow) {
	        if (evt && modalWindow) {
	          var modalDomEl = modalWindow.value.modalDomEl;
	          if (modalDomEl && modalDomEl.length) {
	            return (evt.target || evt.srcElement) === modalDomEl[0];
	          }
	        }
	        return false;
	      };

	      $modalStack.isFocusInFirstItem = function(evt, list) {
	        if (list.length > 0) {
	          return (evt.target || evt.srcElement) === list[0];
	        }
	        return false;
	      };

	      $modalStack.isFocusInLastItem = function(evt, list) {
	        if (list.length > 0) {
	          return (evt.target || evt.srcElement) === list[list.length - 1];
	        }
	        return false;
	      };

	      $modalStack.loadFocusElementList = function(modalWindow) {
	        if (modalWindow) {
	          var modalDomE1 = modalWindow.value.modalDomEl;
	          if (modalDomE1 && modalDomE1.length) {
	            var elements = modalDomE1[0].querySelectorAll(tabableSelector);
	            return elements ?
	              Array.prototype.filter.call(elements, function(element) {
	                return isVisible(element);
	              }) : elements;
	          }
	        }
	      };

	      return $modalStack;
	    }])

	  .provider('$uibModal', function() {
	    var $modalProvider = {
	      options: {
	        animation: true,
	        backdrop: true, //can also be false or 'static'
	        keyboard: true
	      },
	      $get: ['$rootScope', '$q', '$document', '$templateRequest', '$controller', '$uibResolve', '$uibModalStack',
	        function ($rootScope, $q, $document, $templateRequest, $controller, $uibResolve, $modalStack) {
	          var $modal = {};

	          function getTemplatePromise(options) {
	            return options.template ? $q.when(options.template) :
	              $templateRequest(angular.isFunction(options.templateUrl) ?
	                options.templateUrl() : options.templateUrl);
	          }

	          var promiseChain = null;
	          $modal.getPromiseChain = function() {
	            return promiseChain;
	          };

	          $modal.open = function(modalOptions) {
	            var modalResultDeferred = $q.defer();
	            var modalOpenedDeferred = $q.defer();
	            var modalClosedDeferred = $q.defer();
	            var modalRenderDeferred = $q.defer();

	            //prepare an instance of a modal to be injected into controllers and returned to a caller
	            var modalInstance = {
	              result: modalResultDeferred.promise,
	              opened: modalOpenedDeferred.promise,
	              closed: modalClosedDeferred.promise,
	              rendered: modalRenderDeferred.promise,
	              close: function (result) {
	                return $modalStack.close(modalInstance, result);
	              },
	              dismiss: function (reason) {
	                return $modalStack.dismiss(modalInstance, reason);
	              }
	            };

	            //merge and clean up options
	            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
	            modalOptions.resolve = modalOptions.resolve || {};
	            modalOptions.appendTo = modalOptions.appendTo || $document.find('body').eq(0);

	            //verify options
	            if (!modalOptions.template && !modalOptions.templateUrl) {
	              throw new Error('One of template or templateUrl options is required.');
	            }

	            var templateAndResolvePromise =
	              $q.all([getTemplatePromise(modalOptions), $uibResolve.resolve(modalOptions.resolve, {}, null, null)]);

	            function resolveWithTemplate() {
	              return templateAndResolvePromise;
	            }

	            // Wait for the resolution of the existing promise chain.
	            // Then switch to our own combined promise dependency (regardless of how the previous modal fared).
	            // Then add to $modalStack and resolve opened.
	            // Finally clean up the chain variable if no subsequent modal has overwritten it.
	            var samePromise;
	            samePromise = promiseChain = $q.all([promiseChain])
	              .then(resolveWithTemplate, resolveWithTemplate)
	              .then(function resolveSuccess(tplAndVars) {
	                var providedScope = modalOptions.scope || $rootScope;

	                var modalScope = providedScope.$new();
	                modalScope.$close = modalInstance.close;
	                modalScope.$dismiss = modalInstance.dismiss;

	                modalScope.$on('$destroy', function() {
	                  if (!modalScope.$$uibDestructionScheduled) {
	                    modalScope.$dismiss('$uibUnscheduledDestruction');
	                  }
	                });

	                var ctrlInstance, ctrlInstantiate, ctrlLocals = {};

	                //controllers
	                if (modalOptions.controller) {
	                  ctrlLocals.$scope = modalScope;
	                  ctrlLocals.$uibModalInstance = modalInstance;
	                  angular.forEach(tplAndVars[1], function(value, key) {
	                    ctrlLocals[key] = value;
	                  });

	                  // the third param will make the controller instantiate later,private api
	                  // @see https://github.com/angular/angular.js/blob/master/src/ng/controller.js#L126
	                  ctrlInstantiate = $controller(modalOptions.controller, ctrlLocals, true);
	                  if (modalOptions.controllerAs) {
	                    ctrlInstance = ctrlInstantiate.instance;

	                    if (modalOptions.bindToController) {
	                      ctrlInstance.$close = modalScope.$close;
	                      ctrlInstance.$dismiss = modalScope.$dismiss;
	                      angular.extend(ctrlInstance, providedScope);
	                    }

	                    ctrlInstance = ctrlInstantiate();

	                    modalScope[modalOptions.controllerAs] = ctrlInstance;
	                  } else {
	                    ctrlInstance = ctrlInstantiate();
	                  }

	                  if (angular.isFunction(ctrlInstance.$onInit)) {
	                    ctrlInstance.$onInit();
	                  }
	                }

	                $modalStack.open(modalInstance, {
	                  scope: modalScope,
	                  deferred: modalResultDeferred,
	                  renderDeferred: modalRenderDeferred,
	                  closedDeferred: modalClosedDeferred,
	                  content: tplAndVars[0],
	                  animation: modalOptions.animation,
	                  backdrop: modalOptions.backdrop,
	                  keyboard: modalOptions.keyboard,
	                  backdropClass: modalOptions.backdropClass,
	                  windowTopClass: modalOptions.windowTopClass,
	                  windowClass: modalOptions.windowClass,
	                  windowTemplateUrl: modalOptions.windowTemplateUrl,
	                  size: modalOptions.size,
	                  openedClass: modalOptions.openedClass,
	                  appendTo: modalOptions.appendTo
	                });
	                modalOpenedDeferred.resolve(true);

	            }, function resolveError(reason) {
	              modalOpenedDeferred.reject(reason);
	              modalResultDeferred.reject(reason);
	            })['finally'](function() {
	              if (promiseChain === samePromise) {
	                promiseChain = null;
	              }
	            });

	            return modalInstance;
	          };

	          return $modal;
	        }
	      ]
	    };

	    return $modalProvider;
	  });

	angular.module('ui.bootstrap.paging', [])
	/**
	 * Helper internal service for generating common controller code between the
	 * pager and pagination components
	 */
	.factory('uibPaging', ['$parse', function($parse) {
	  return {
	    create: function(ctrl, $scope, $attrs) {
	      ctrl.setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
	      ctrl.ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl
	      ctrl._watchers = [];

	      ctrl.init = function(ngModelCtrl, config) {
	        ctrl.ngModelCtrl = ngModelCtrl;
	        ctrl.config = config;

	        ngModelCtrl.$render = function() {
	          ctrl.render();
	        };

	        if ($attrs.itemsPerPage) {
	          ctrl._watchers.push($scope.$parent.$watch($attrs.itemsPerPage, function(value) {
	            ctrl.itemsPerPage = parseInt(value, 10);
	            $scope.totalPages = ctrl.calculateTotalPages();
	            ctrl.updatePage();
	          }));
	        } else {
	          ctrl.itemsPerPage = config.itemsPerPage;
	        }

	        $scope.$watch('totalItems', function(newTotal, oldTotal) {
	          if (angular.isDefined(newTotal) || newTotal !== oldTotal) {
	            $scope.totalPages = ctrl.calculateTotalPages();
	            ctrl.updatePage();
	          }
	        });
	      };

	      ctrl.calculateTotalPages = function() {
	        var totalPages = ctrl.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / ctrl.itemsPerPage);
	        return Math.max(totalPages || 0, 1);
	      };

	      ctrl.render = function() {
	        $scope.page = parseInt(ctrl.ngModelCtrl.$viewValue, 10) || 1;
	      };

	      $scope.selectPage = function(page, evt) {
	        if (evt) {
	          evt.preventDefault();
	        }

	        var clickAllowed = !$scope.ngDisabled || !evt;
	        if (clickAllowed && $scope.page !== page && page > 0 && page <= $scope.totalPages) {
	          if (evt && evt.target) {
	            evt.target.blur();
	          }
	          ctrl.ngModelCtrl.$setViewValue(page);
	          ctrl.ngModelCtrl.$render();
	        }
	      };

	      $scope.getText = function(key) {
	        return $scope[key + 'Text'] || ctrl.config[key + 'Text'];
	      };

	      $scope.noPrevious = function() {
	        return $scope.page === 1;
	      };

	      $scope.noNext = function() {
	        return $scope.page === $scope.totalPages;
	      };

	      ctrl.updatePage = function() {
	        ctrl.setNumPages($scope.$parent, $scope.totalPages); // Readonly variable

	        if ($scope.page > $scope.totalPages) {
	          $scope.selectPage($scope.totalPages);
	        } else {
	          ctrl.ngModelCtrl.$render();
	        }
	      };

	      $scope.$on('$destroy', function() {
	        while (ctrl._watchers.length) {
	          ctrl._watchers.shift()();
	        }
	      });
	    }
	  };
	}]);

	angular.module('ui.bootstrap.pager', ['ui.bootstrap.paging'])

	.controller('UibPagerController', ['$scope', '$attrs', 'uibPaging', 'uibPagerConfig', function($scope, $attrs, uibPaging, uibPagerConfig) {
	  $scope.align = angular.isDefined($attrs.align) ? $scope.$parent.$eval($attrs.align) : uibPagerConfig.align;

	  uibPaging.create(this, $scope, $attrs);
	}])

	.constant('uibPagerConfig', {
	  itemsPerPage: 10,
	  previousText: '« Previous',
	  nextText: 'Next »',
	  align: true
	})

	.directive('uibPager', ['uibPagerConfig', function(uibPagerConfig) {
	  return {
	    scope: {
	      totalItems: '=',
	      previousText: '@',
	      nextText: '@',
	      ngDisabled: '='
	    },
	    require: ['uibPager', '?ngModel'],
	    controller: 'UibPagerController',
	    controllerAs: 'pager',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/pager/pager.html';
	    },
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (!ngModelCtrl) {
	        return; // do nothing if no ng-model
	      }

	      paginationCtrl.init(ngModelCtrl, uibPagerConfig);
	    }
	  };
	}]);

	angular.module('ui.bootstrap.pagination', ['ui.bootstrap.paging'])
	.controller('UibPaginationController', ['$scope', '$attrs', '$parse', 'uibPaging', 'uibPaginationConfig', function($scope, $attrs, $parse, uibPaging, uibPaginationConfig) {
	  var ctrl = this;
	  // Setup configuration parameters
	  var maxSize = angular.isDefined($attrs.maxSize) ? $scope.$parent.$eval($attrs.maxSize) : uibPaginationConfig.maxSize,
	    rotate = angular.isDefined($attrs.rotate) ? $scope.$parent.$eval($attrs.rotate) : uibPaginationConfig.rotate,
	    forceEllipses = angular.isDefined($attrs.forceEllipses) ? $scope.$parent.$eval($attrs.forceEllipses) : uibPaginationConfig.forceEllipses,
	    boundaryLinkNumbers = angular.isDefined($attrs.boundaryLinkNumbers) ? $scope.$parent.$eval($attrs.boundaryLinkNumbers) : uibPaginationConfig.boundaryLinkNumbers,
	    pageLabel = angular.isDefined($attrs.pageLabel) ? function(idx) { return $scope.$parent.$eval($attrs.pageLabel, {$page: idx}); } : angular.identity;
	  $scope.boundaryLinks = angular.isDefined($attrs.boundaryLinks) ? $scope.$parent.$eval($attrs.boundaryLinks) : uibPaginationConfig.boundaryLinks;
	  $scope.directionLinks = angular.isDefined($attrs.directionLinks) ? $scope.$parent.$eval($attrs.directionLinks) : uibPaginationConfig.directionLinks;

	  uibPaging.create(this, $scope, $attrs);

	  if ($attrs.maxSize) {
	    ctrl._watchers.push($scope.$parent.$watch($parse($attrs.maxSize), function(value) {
	      maxSize = parseInt(value, 10);
	      ctrl.render();
	    }));
	  }

	  // Create page object used in template
	  function makePage(number, text, isActive) {
	    return {
	      number: number,
	      text: text,
	      active: isActive
	    };
	  }

	  function getPages(currentPage, totalPages) {
	    var pages = [];

	    // Default page limits
	    var startPage = 1, endPage = totalPages;
	    var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;

	    // recompute if maxSize
	    if (isMaxSized) {
	      if (rotate) {
	        // Current page is displayed in the middle of the visible ones
	        startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
	        endPage = startPage + maxSize - 1;

	        // Adjust if limit is exceeded
	        if (endPage > totalPages) {
	          endPage = totalPages;
	          startPage = endPage - maxSize + 1;
	        }
	      } else {
	        // Visible pages are paginated with maxSize
	        startPage = (Math.ceil(currentPage / maxSize) - 1) * maxSize + 1;

	        // Adjust last page if limit is exceeded
	        endPage = Math.min(startPage + maxSize - 1, totalPages);
	      }
	    }

	    // Add page number links
	    for (var number = startPage; number <= endPage; number++) {
	      var page = makePage(number, pageLabel(number), number === currentPage);
	      pages.push(page);
	    }

	    // Add links to move between page sets
	    if (isMaxSized && maxSize > 0 && (!rotate || forceEllipses || boundaryLinkNumbers)) {
	      if (startPage > 1) {
	        if (!boundaryLinkNumbers || startPage > 3) { //need ellipsis for all options unless range is too close to beginning
	        var previousPageSet = makePage(startPage - 1, '...', false);
	        pages.unshift(previousPageSet);
	      }
	        if (boundaryLinkNumbers) {
	          if (startPage === 3) { //need to replace ellipsis when the buttons would be sequential
	            var secondPageLink = makePage(2, '2', false);
	            pages.unshift(secondPageLink);
	          }
	          //add the first page
	          var firstPageLink = makePage(1, '1', false);
	          pages.unshift(firstPageLink);
	        }
	      }

	      if (endPage < totalPages) {
	        if (!boundaryLinkNumbers || endPage < totalPages - 2) { //need ellipsis for all options unless range is too close to end
	        var nextPageSet = makePage(endPage + 1, '...', false);
	        pages.push(nextPageSet);
	      }
	        if (boundaryLinkNumbers) {
	          if (endPage === totalPages - 2) { //need to replace ellipsis when the buttons would be sequential
	            var secondToLastPageLink = makePage(totalPages - 1, totalPages - 1, false);
	            pages.push(secondToLastPageLink);
	          }
	          //add the last page
	          var lastPageLink = makePage(totalPages, totalPages, false);
	          pages.push(lastPageLink);
	        }
	      }
	    }
	    return pages;
	  }

	  var originalRender = this.render;
	  this.render = function() {
	    originalRender();
	    if ($scope.page > 0 && $scope.page <= $scope.totalPages) {
	      $scope.pages = getPages($scope.page, $scope.totalPages);
	    }
	  };
	}])

	.constant('uibPaginationConfig', {
	  itemsPerPage: 10,
	  boundaryLinks: false,
	  boundaryLinkNumbers: false,
	  directionLinks: true,
	  firstText: 'First',
	  previousText: 'Previous',
	  nextText: 'Next',
	  lastText: 'Last',
	  rotate: true,
	  forceEllipses: false
	})

	.directive('uibPagination', ['$parse', 'uibPaginationConfig', function($parse, uibPaginationConfig) {
	  return {
	    scope: {
	      totalItems: '=',
	      firstText: '@',
	      previousText: '@',
	      nextText: '@',
	      lastText: '@',
	      ngDisabled:'='
	    },
	    require: ['uibPagination', '?ngModel'],
	    controller: 'UibPaginationController',
	    controllerAs: 'pagination',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/pagination/pagination.html';
	    },
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (!ngModelCtrl) {
	         return; // do nothing if no ng-model
	      }

	      paginationCtrl.init(ngModelCtrl, uibPaginationConfig);
	    }
	  };
	}]);

	/**
	 * The following features are still outstanding: animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, html tooltips, and selector delegation.
	 */
	angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.stackedMap'])

	/**
	 * The $tooltip service creates tooltip- and popover-like directives as well as
	 * houses global options for them.
	 */
	.provider('$uibTooltip', function() {
	  // The default options tooltip and popover.
	  var defaultOptions = {
	    placement: 'top',
	    placementClassPrefix: '',
	    animation: true,
	    popupDelay: 0,
	    popupCloseDelay: 0,
	    useContentExp: false
	  };

	  // Default hide triggers for each show trigger
	  var triggerMap = {
	    'mouseenter': 'mouseleave',
	    'click': 'click',
	    'outsideClick': 'outsideClick',
	    'focus': 'blur',
	    'none': ''
	  };

	  // The options specified to the provider globally.
	  var globalOptions = {};

	  /**
	   * `options({})` allows global configuration of all tooltips in the
	   * application.
	   *
	   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
	   *     // place tooltips left instead of top by default
	   *     $tooltipProvider.options( { placement: 'left' } );
	   *   });
	   */
		this.options = function(value) {
			angular.extend(globalOptions, value);
		};

	  /**
	   * This allows you to extend the set of trigger mappings available. E.g.:
	   *
	   *   $tooltipProvider.setTriggers( { 'openTrigger': 'closeTrigger' } );
	   */
	  this.setTriggers = function setTriggers(triggers) {
	    angular.extend(triggerMap, triggers);
	  };

	  /**
	   * This is a helper function for translating camel-case to snake_case.
	   */
	  function snake_case(name) {
	    var regexp = /[A-Z]/g;
	    var separator = '-';
	    return name.replace(regexp, function(letter, pos) {
	      return (pos ? separator : '') + letter.toLowerCase();
	    });
	  }

	  /**
	   * Returns the actual instance of the $tooltip service.
	   * TODO support multiple triggers
	   */
	  this.$get = ['$window', '$compile', '$timeout', '$document', '$uibPosition', '$interpolate', '$rootScope', '$parse', '$$stackedMap', function($window, $compile, $timeout, $document, $position, $interpolate, $rootScope, $parse, $$stackedMap) {
	    var openedTooltips = $$stackedMap.createNew();
	    $document.on('keypress', keypressListener);

	    $rootScope.$on('$destroy', function() {
	      $document.off('keypress', keypressListener);
	    });

	    function keypressListener(e) {
	      if (e.which === 27) {
	        var last = openedTooltips.top();
	        if (last) {
	          last.value.close();
	          openedTooltips.removeTop();
	          last = null;
	        }
	      }
	    }

	    return function $tooltip(ttType, prefix, defaultTriggerShow, options) {
	      options = angular.extend({}, defaultOptions, globalOptions, options);

	      /**
	       * Returns an object of show and hide triggers.
	       *
	       * If a trigger is supplied,
	       * it is used to show the tooltip; otherwise, it will use the `trigger`
	       * option passed to the `$tooltipProvider.options` method; else it will
	       * default to the trigger supplied to this directive factory.
	       *
	       * The hide trigger is based on the show trigger. If the `trigger` option
	       * was passed to the `$tooltipProvider.options` method, it will use the
	       * mapped trigger from `triggerMap` or the passed trigger if the map is
	       * undefined; otherwise, it uses the `triggerMap` value of the show
	       * trigger; else it will just use the show trigger.
	       */
	      function getTriggers(trigger) {
	        var show = (trigger || options.trigger || defaultTriggerShow).split(' ');
	        var hide = show.map(function(trigger) {
	          return triggerMap[trigger] || trigger;
	        });
	        return {
	          show: show,
	          hide: hide
	        };
	      }

	      var directiveName = snake_case(ttType);

	      var startSym = $interpolate.startSymbol();
	      var endSym = $interpolate.endSymbol();
	      var template =
	        '<div '+ directiveName + '-popup ' +
	          'uib-title="' + startSym + 'title' + endSym + '" ' +
	          (options.useContentExp ?
	            'content-exp="contentExp()" ' :
	            'content="' + startSym + 'content' + endSym + '" ') +
	          'placement="' + startSym + 'placement' + endSym + '" ' +
	          'popup-class="' + startSym + 'popupClass' + endSym + '" ' +
	          'animation="animation" ' +
	          'is-open="isOpen" ' +
	          'origin-scope="origScope" ' +
	          'class="uib-position-measure"' +
	          '>' +
	        '</div>';

	      return {
	        compile: function(tElem, tAttrs) {
	          var tooltipLinker = $compile(template);

	          return function link(scope, element, attrs, tooltipCtrl) {
	            var tooltip;
	            var tooltipLinkedScope;
	            var transitionTimeout;
	            var showTimeout;
	            var hideTimeout;
	            var positionTimeout;
	            var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
	            var triggers = getTriggers(undefined);
	            var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
	            var ttScope = scope.$new(true);
	            var repositionScheduled = false;
	            var isOpenParse = angular.isDefined(attrs[prefix + 'IsOpen']) ? $parse(attrs[prefix + 'IsOpen']) : false;
	            var contentParse = options.useContentExp ? $parse(attrs[ttType]) : false;
	            var observers = [];
	            var lastPlacement;

	            var positionTooltip = function() {
	              // check if tooltip exists and is not empty
	              if (!tooltip || !tooltip.html()) { return; }

	              if (!positionTimeout) {
	                positionTimeout = $timeout(function() {
	                  var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
	                  tooltip.css({ top: ttPosition.top + 'px', left: ttPosition.left + 'px' });

	                  if (!tooltip.hasClass(ttPosition.placement.split('-')[0])) {
	                    tooltip.removeClass(lastPlacement.split('-')[0]);
	                    tooltip.addClass(ttPosition.placement.split('-')[0]);
	                  }

	                  if (!tooltip.hasClass(options.placementClassPrefix + ttPosition.placement)) {
	                    tooltip.removeClass(options.placementClassPrefix + lastPlacement);
	                    tooltip.addClass(options.placementClassPrefix + ttPosition.placement);
	                  }

	                  // first time through tt element will have the
	                  // uib-position-measure class or if the placement
	                  // has changed we need to position the arrow.
	                  if (tooltip.hasClass('uib-position-measure')) {
	                    $position.positionArrow(tooltip, ttPosition.placement);
	                    tooltip.removeClass('uib-position-measure');
	                  } else if (lastPlacement !== ttPosition.placement) {
	                    $position.positionArrow(tooltip, ttPosition.placement);
	                  }
	                  lastPlacement = ttPosition.placement;

	                  positionTimeout = null;
	                }, 0, false);
	              }
	            };

	            // Set up the correct scope to allow transclusion later
	            ttScope.origScope = scope;

	            // By default, the tooltip is not open.
	            // TODO add ability to start tooltip opened
	            ttScope.isOpen = false;
	            openedTooltips.add(ttScope, {
	              close: hide
	            });

	            function toggleTooltipBind() {
	              if (!ttScope.isOpen) {
	                showTooltipBind();
	              } else {
	                hideTooltipBind();
	              }
	            }

	            // Show the tooltip with delay if specified, otherwise show it immediately
	            function showTooltipBind() {
	              if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
	                return;
	              }

	              cancelHide();
	              prepareTooltip();

	              if (ttScope.popupDelay) {
	                // Do nothing if the tooltip was already scheduled to pop-up.
	                // This happens if show is triggered multiple times before any hide is triggered.
	                if (!showTimeout) {
	                  showTimeout = $timeout(show, ttScope.popupDelay, false);
	                }
	              } else {
	                show();
	              }
	            }

	            function hideTooltipBind() {
	              cancelShow();

	              if (ttScope.popupCloseDelay) {
	                if (!hideTimeout) {
	                  hideTimeout = $timeout(hide, ttScope.popupCloseDelay, false);
	                }
	              } else {
	                hide();
	              }
	            }

	            // Show the tooltip popup element.
	            function show() {
	              cancelShow();
	              cancelHide();

	              // Don't show empty tooltips.
	              if (!ttScope.content) {
	                return angular.noop;
	              }

	              createTooltip();

	              // And show the tooltip.
	              ttScope.$evalAsync(function() {
	                ttScope.isOpen = true;
	                assignIsOpen(true);
	                positionTooltip();
	              });
	            }

	            function cancelShow() {
	              if (showTimeout) {
	                $timeout.cancel(showTimeout);
	                showTimeout = null;
	              }

	              if (positionTimeout) {
	                $timeout.cancel(positionTimeout);
	                positionTimeout = null;
	              }
	            }

	            // Hide the tooltip popup element.
	            function hide() {
	              if (!ttScope) {
	                return;
	              }

	              // First things first: we don't show it anymore.
	              ttScope.$evalAsync(function() {
	                if (ttScope) {
	                  ttScope.isOpen = false;
	                  assignIsOpen(false);
	                  // And now we remove it from the DOM. However, if we have animation, we
	                  // need to wait for it to expire beforehand.
	                  // FIXME: this is a placeholder for a port of the transitions library.
	                  // The fade transition in TWBS is 150ms.
	                  if (ttScope.animation) {
	                    if (!transitionTimeout) {
	                      transitionTimeout = $timeout(removeTooltip, 150, false);
	                    }
	                  } else {
	                    removeTooltip();
	                  }
	                }
	              });
	            }

	            function cancelHide() {
	              if (hideTimeout) {
	                $timeout.cancel(hideTimeout);
	                hideTimeout = null;
	              }

	              if (transitionTimeout) {
	                $timeout.cancel(transitionTimeout);
	                transitionTimeout = null;
	              }
	            }

	            function createTooltip() {
	              // There can only be one tooltip element per directive shown at once.
	              if (tooltip) {
	                return;
	              }

	              tooltipLinkedScope = ttScope.$new();
	              tooltip = tooltipLinker(tooltipLinkedScope, function(tooltip) {
	                if (appendToBody) {
	                  $document.find('body').append(tooltip);
	                } else {
	                  element.after(tooltip);
	                }
	              });

	              prepObservers();
	            }

	            function removeTooltip() {
	              cancelShow();
	              cancelHide();
	              unregisterObservers();

	              if (tooltip) {
	                tooltip.remove();
	                tooltip = null;
	              }
	              if (tooltipLinkedScope) {
	                tooltipLinkedScope.$destroy();
	                tooltipLinkedScope = null;
	              }
	            }

	            /**
	             * Set the initial scope values. Once
	             * the tooltip is created, the observers
	             * will be added to keep things in sync.
	             */
	            function prepareTooltip() {
	              ttScope.title = attrs[prefix + 'Title'];
	              if (contentParse) {
	                ttScope.content = contentParse(scope);
	              } else {
	                ttScope.content = attrs[ttType];
	              }

	              ttScope.popupClass = attrs[prefix + 'Class'];
	              ttScope.placement = angular.isDefined(attrs[prefix + 'Placement']) ? attrs[prefix + 'Placement'] : options.placement;
	              var placement = $position.parsePlacement(ttScope.placement);
	              lastPlacement = placement[1] ? placement[0] + '-' + placement[1] : placement[0];

	              var delay = parseInt(attrs[prefix + 'PopupDelay'], 10);
	              var closeDelay = parseInt(attrs[prefix + 'PopupCloseDelay'], 10);
	              ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
	              ttScope.popupCloseDelay = !isNaN(closeDelay) ? closeDelay : options.popupCloseDelay;
	            }

	            function assignIsOpen(isOpen) {
	              if (isOpenParse && angular.isFunction(isOpenParse.assign)) {
	                isOpenParse.assign(scope, isOpen);
	              }
	            }

	            ttScope.contentExp = function() {
	              return ttScope.content;
	            };

	            /**
	             * Observe the relevant attributes.
	             */
	            attrs.$observe('disabled', function(val) {
	              if (val) {
	                cancelShow();
	              }

	              if (val && ttScope.isOpen) {
	                hide();
	              }
	            });

	            if (isOpenParse) {
	              scope.$watch(isOpenParse, function(val) {
	                if (ttScope && !val === ttScope.isOpen) {
	                  toggleTooltipBind();
	                }
	              });
	            }

	            function prepObservers() {
	              observers.length = 0;

	              if (contentParse) {
	                observers.push(
	                  scope.$watch(contentParse, function(val) {
	                    ttScope.content = val;
	                    if (!val && ttScope.isOpen) {
	                      hide();
	                    }
	                  })
	                );

	                observers.push(
	                  tooltipLinkedScope.$watch(function() {
	                    if (!repositionScheduled) {
	                      repositionScheduled = true;
	                      tooltipLinkedScope.$$postDigest(function() {
	                        repositionScheduled = false;
	                        if (ttScope && ttScope.isOpen) {
	                          positionTooltip();
	                        }
	                      });
	                    }
	                  })
	                );
	              } else {
	                observers.push(
	                  attrs.$observe(ttType, function(val) {
	                    ttScope.content = val;
	                    if (!val && ttScope.isOpen) {
	                      hide();
	                    } else {
	                      positionTooltip();
	                    }
	                  })
	                );
	              }

	              observers.push(
	                attrs.$observe(prefix + 'Title', function(val) {
	                  ttScope.title = val;
	                  if (ttScope.isOpen) {
	                    positionTooltip();
	                  }
	                })
	              );

	              observers.push(
	                attrs.$observe(prefix + 'Placement', function(val) {
	                  ttScope.placement = val ? val : options.placement;
	                  var placement = $position.parsePlacement(ttScope.placement);
	                  lastPlacement = placement[1] ? placement[0] + '-' + placement[1] : placement[0];
	                  if (ttScope.isOpen) {
	                    positionTooltip();
	                  }
	                })
	              );
	            }

	            function unregisterObservers() {
	              if (observers.length) {
	                angular.forEach(observers, function(observer) {
	                  observer();
	                });
	                observers.length = 0;
	              }
	            }

	            // hide tooltips/popovers for outsideClick trigger
	            function bodyHideTooltipBind(e) {
	              if (!ttScope || !ttScope.isOpen || !tooltip) {
	                return;
	              }
	              // make sure the tooltip/popover link or tool tooltip/popover itself were not clicked
	              if (!element[0].contains(e.target) && !tooltip[0].contains(e.target)) {
	                hideTooltipBind();
	              }
	            }

	            var unregisterTriggers = function() {
	              triggers.show.forEach(function(trigger) {
	                if (trigger === 'outsideClick') {
	                  element.off('click', toggleTooltipBind);
	                } else {
	                  element.off(trigger, showTooltipBind);
	                  element.off(trigger, toggleTooltipBind);
	                }
	              });
	              triggers.hide.forEach(function(trigger) {
	                if (trigger === 'outsideClick') {
	                  $document.off('click', bodyHideTooltipBind);
	                } else {
	                  element.off(trigger, hideTooltipBind);
	                }
	              });
	            };

	            function prepTriggers() {
	              var val = attrs[prefix + 'Trigger'];
	              unregisterTriggers();

	              triggers = getTriggers(val);

	              if (triggers.show !== 'none') {
	                triggers.show.forEach(function(trigger, idx) {
	                  if (trigger === 'outsideClick') {
	                    element.on('click', toggleTooltipBind);
	                    $document.on('click', bodyHideTooltipBind);
	                  } else if (trigger === triggers.hide[idx]) {
	                    element.on(trigger, toggleTooltipBind);
	                  } else if (trigger) {
	                    element.on(trigger, showTooltipBind);
	                    element.on(triggers.hide[idx], hideTooltipBind);
	                  }

	                  element.on('keypress', function(e) {
	                    if (e.which === 27) {
	                      hideTooltipBind();
	                    }
	                  });
	                });
	              }
	            }

	            prepTriggers();

	            var animation = scope.$eval(attrs[prefix + 'Animation']);
	            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;

	            var appendToBodyVal;
	            var appendKey = prefix + 'AppendToBody';
	            if (appendKey in attrs && attrs[appendKey] === undefined) {
	              appendToBodyVal = true;
	            } else {
	              appendToBodyVal = scope.$eval(attrs[appendKey]);
	            }

	            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;

	            // Make sure tooltip is destroyed and removed.
	            scope.$on('$destroy', function onDestroyTooltip() {
	              unregisterTriggers();
	              removeTooltip();
	              openedTooltips.remove(ttScope);
	              ttScope = null;
	            });
	          };
	        }
	      };
	    };
	  }];
	})

	// This is mostly ngInclude code but with a custom scope
	.directive('uibTooltipTemplateTransclude', [
	         '$animate', '$sce', '$compile', '$templateRequest',
	function ($animate, $sce, $compile, $templateRequest) {
	  return {
	    link: function(scope, elem, attrs) {
	      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);

	      var changeCounter = 0,
	        currentScope,
	        previousElement,
	        currentElement;

	      var cleanupLastIncludeContent = function() {
	        if (previousElement) {
	          previousElement.remove();
	          previousElement = null;
	        }

	        if (currentScope) {
	          currentScope.$destroy();
	          currentScope = null;
	        }

	        if (currentElement) {
	          $animate.leave(currentElement).then(function() {
	            previousElement = null;
	          });
	          previousElement = currentElement;
	          currentElement = null;
	        }
	      };

	      scope.$watch($sce.parseAsResourceUrl(attrs.uibTooltipTemplateTransclude), function(src) {
	        var thisChangeId = ++changeCounter;

	        if (src) {
	          //set the 2nd param to true to ignore the template request error so that the inner
	          //contents and scope can be cleaned up.
	          $templateRequest(src, true).then(function(response) {
	            if (thisChangeId !== changeCounter) { return; }
	            var newScope = origScope.$new();
	            var template = response;

	            var clone = $compile(template)(newScope, function(clone) {
	              cleanupLastIncludeContent();
	              $animate.enter(clone, elem);
	            });

	            currentScope = newScope;
	            currentElement = clone;

	            currentScope.$emit('$includeContentLoaded', src);
	          }, function() {
	            if (thisChangeId === changeCounter) {
	              cleanupLastIncludeContent();
	              scope.$emit('$includeContentError', src);
	            }
	          });
	          scope.$emit('$includeContentRequested', src);
	        } else {
	          cleanupLastIncludeContent();
	        }
	      });

	      scope.$on('$destroy', cleanupLastIncludeContent);
	    }
	  };
	}])

	/**
	 * Note that it's intentional that these classes are *not* applied through $animate.
	 * They must not be animated as they're expected to be present on the tooltip on
	 * initialization.
	 */
	.directive('uibTooltipClasses', ['$uibPosition', function($uibPosition) {
	  return {
	    restrict: 'A',
	    link: function(scope, element, attrs) {
	      // need to set the primary position so the
	      // arrow has space during position measure.
	      // tooltip.positionTooltip()
	      if (scope.placement) {
	        // // There are no top-left etc... classes
	        // // in TWBS, so we need the primary position.
	        var position = $uibPosition.parsePlacement(scope.placement);
	        element.addClass(position[0]);
	      }

	      if (scope.popupClass) {
	        element.addClass(scope.popupClass);
	      }

	      if (scope.animation()) {
	        element.addClass(attrs.tooltipAnimationClass);
	      }
	    }
	  };
	}])

	.directive('uibTooltipPopup', function() {
	  return {
	    replace: true,
	    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/tooltip/tooltip-popup.html'
	  };
	})

	.directive('uibTooltip', [ '$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibTooltip', 'tooltip', 'mouseenter');
	}])

	.directive('uibTooltipTemplatePopup', function() {
	  return {
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'uib/template/tooltip/tooltip-template-popup.html'
	  };
	})

	.directive('uibTooltipTemplate', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibTooltipTemplate', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}])

	.directive('uibTooltipHtmlPopup', function() {
	  return {
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/tooltip/tooltip-html-popup.html'
	  };
	})

	.directive('uibTooltipHtml', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibTooltipHtml', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}]);

	/**
	 * The following features are still outstanding: popup delay, animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, and selector delegatation.
	 */
	angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip'])

	.directive('uibPopoverTemplatePopup', function() {
	  return {
	    replace: true,
	    scope: { uibTitle: '@', contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'uib/template/popover/popover-template.html'
	  };
	})

	.directive('uibPopoverTemplate', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibPopoverTemplate', 'popover', 'click', {
	    useContentExp: true
	  });
	}])

	.directive('uibPopoverHtmlPopup', function() {
	  return {
	    replace: true,
	    scope: { contentExp: '&', uibTitle: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/popover/popover-html.html'
	  };
	})

	.directive('uibPopoverHtml', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibPopoverHtml', 'popover', 'click', {
	    useContentExp: true
	  });
	}])

	.directive('uibPopoverPopup', function() {
	  return {
	    replace: true,
	    scope: { uibTitle: '@', content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/popover/popover.html'
	  };
	})

	.directive('uibPopover', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibPopover', 'popover', 'click');
	}]);

	angular.module('ui.bootstrap.progressbar', [])

	.constant('uibProgressConfig', {
	  animate: true,
	  max: 100
	})

	.controller('UibProgressController', ['$scope', '$attrs', 'uibProgressConfig', function($scope, $attrs, progressConfig) {
	  var self = this,
	      animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

	  this.bars = [];
	  $scope.max = getMaxOrDefault();

	  this.addBar = function(bar, element, attrs) {
	    if (!animate) {
	      element.css({'transition': 'none'});
	    }

	    this.bars.push(bar);

	    bar.max = getMaxOrDefault();
	    bar.title = attrs && angular.isDefined(attrs.title) ? attrs.title : 'progressbar';

	    bar.$watch('value', function(value) {
	      bar.recalculatePercentage();
	    });

	    bar.recalculatePercentage = function() {
	      var totalPercentage = self.bars.reduce(function(total, bar) {
	        bar.percent = +(100 * bar.value / bar.max).toFixed(2);
	        return total + bar.percent;
	      }, 0);

	      if (totalPercentage > 100) {
	        bar.percent -= totalPercentage - 100;
	      }
	    };

	    bar.$on('$destroy', function() {
	      element = null;
	      self.removeBar(bar);
	    });
	  };

	  this.removeBar = function(bar) {
	    this.bars.splice(this.bars.indexOf(bar), 1);
	    this.bars.forEach(function (bar) {
	      bar.recalculatePercentage();
	    });
	  };

	  //$attrs.$observe('maxParam', function(maxParam) {
	  $scope.$watch('maxParam', function(maxParam) {
	    self.bars.forEach(function(bar) {
	      bar.max = getMaxOrDefault();
	      bar.recalculatePercentage();
	    });
	  });

	  function getMaxOrDefault () {
	    return angular.isDefined($scope.maxParam) ? $scope.maxParam : progressConfig.max;
	  }
	}])

	.directive('uibProgress', function() {
	  return {
	    replace: true,
	    transclude: true,
	    controller: 'UibProgressController',
	    require: 'uibProgress',
	    scope: {
	      maxParam: '=?max'
	    },
	    templateUrl: 'uib/template/progressbar/progress.html'
	  };
	})

	.directive('uibBar', function() {
	  return {
	    replace: true,
	    transclude: true,
	    require: '^uibProgress',
	    scope: {
	      value: '=',
	      type: '@'
	    },
	    templateUrl: 'uib/template/progressbar/bar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      progressCtrl.addBar(scope, element, attrs);
	    }
	  };
	})

	.directive('uibProgressbar', function() {
	  return {
	    replace: true,
	    transclude: true,
	    controller: 'UibProgressController',
	    scope: {
	      value: '=',
	      maxParam: '=?max',
	      type: '@'
	    },
	    templateUrl: 'uib/template/progressbar/progressbar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      progressCtrl.addBar(scope, angular.element(element.children()[0]), {title: attrs.title});
	    }
	  };
	});

	angular.module('ui.bootstrap.rating', [])

	.constant('uibRatingConfig', {
	  max: 5,
	  stateOn: null,
	  stateOff: null,
	  enableReset: true,
	  titles : ['one', 'two', 'three', 'four', 'five']
	})

	.controller('UibRatingController', ['$scope', '$attrs', 'uibRatingConfig', function($scope, $attrs, ratingConfig) {
	  var ngModelCtrl = { $setViewValue: angular.noop },
	    self = this;

	  this.init = function(ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;

	    ngModelCtrl.$formatters.push(function(value) {
	      if (angular.isNumber(value) && value << 0 !== value) {
	        value = Math.round(value);
	      }

	      return value;
	    });

	    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
	    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
	    this.enableReset = angular.isDefined($attrs.enableReset) ?
	      $scope.$parent.$eval($attrs.enableReset) : ratingConfig.enableReset;
	    var tmpTitles = angular.isDefined($attrs.titles) ? $scope.$parent.$eval($attrs.titles) : ratingConfig.titles;
	    this.titles = angular.isArray(tmpTitles) && tmpTitles.length > 0 ?
	      tmpTitles : ratingConfig.titles;

	    var ratingStates = angular.isDefined($attrs.ratingStates) ?
	      $scope.$parent.$eval($attrs.ratingStates) :
	      new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
	    $scope.range = this.buildTemplateObjects(ratingStates);
	  };

	  this.buildTemplateObjects = function(states) {
	    for (var i = 0, n = states.length; i < n; i++) {
	      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff, title: this.getTitle(i) }, states[i]);
	    }
	    return states;
	  };

	  this.getTitle = function(index) {
	    if (index >= this.titles.length) {
	      return index + 1;
	    }

	    return this.titles[index];
	  };

	  $scope.rate = function(value) {
	    if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
	      var newViewValue = self.enableReset && ngModelCtrl.$viewValue === value ? 0 : value;
	      ngModelCtrl.$setViewValue(newViewValue);
	      ngModelCtrl.$render();
	    }
	  };

	  $scope.enter = function(value) {
	    if (!$scope.readonly) {
	      $scope.value = value;
	    }
	    $scope.onHover({value: value});
	  };

	  $scope.reset = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	    $scope.onLeave();
	  };

	  $scope.onKeydown = function(evt) {
	    if (/(37|38|39|40)/.test(evt.which)) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
	    }
	  };

	  this.render = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	    $scope.title = self.getTitle($scope.value - 1);
	  };
	}])

	.directive('uibRating', function() {
	  return {
	    require: ['uibRating', 'ngModel'],
	    scope: {
	      readonly: '=?readOnly',
	      onHover: '&',
	      onLeave: '&'
	    },
	    controller: 'UibRatingController',
	    templateUrl: 'uib/template/rating/rating.html',
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	      ratingCtrl.init(ngModelCtrl);
	    }
	  };
	});

	angular.module('ui.bootstrap.tabs', [])

	.controller('UibTabsetController', ['$scope', function ($scope) {
	  var ctrl = this,
	    oldIndex;
	  ctrl.tabs = [];

	  ctrl.select = function(index, evt) {
	    if (!destroyed) {
	      var previousIndex = findTabIndex(oldIndex);
	      var previousSelected = ctrl.tabs[previousIndex];
	      if (previousSelected) {
	        previousSelected.tab.onDeselect({
	          $event: evt
	        });
	        if (evt && evt.isDefaultPrevented()) {
	          return;
	        }
	        previousSelected.tab.active = false;
	      }

	      var selected = ctrl.tabs[index];
	      if (selected) {
	        selected.tab.onSelect({
	          $event: evt
	        });
	        selected.tab.active = true;
	        ctrl.active = selected.index;
	        oldIndex = selected.index;
	      } else if (!selected && angular.isNumber(oldIndex)) {
	        ctrl.active = null;
	        oldIndex = null;
	      }
	    }
	  };

	  ctrl.addTab = function addTab(tab) {
	    ctrl.tabs.push({
	      tab: tab,
	      index: tab.index
	    });
	    ctrl.tabs.sort(function(t1, t2) {
	      if (t1.index > t2.index) {
	        return 1;
	      }

	      if (t1.index < t2.index) {
	        return -1;
	      }

	      return 0;
	    });

	    if (tab.index === ctrl.active || !angular.isNumber(ctrl.active) && ctrl.tabs.length === 1) {
	      var newActiveIndex = findTabIndex(tab.index);
	      ctrl.select(newActiveIndex);
	    }
	  };

	  ctrl.removeTab = function removeTab(tab) {
	    var index;
	    for (var i = 0; i < ctrl.tabs.length; i++) {
	      if (ctrl.tabs[i].tab === tab) {
	        index = i;
	        break;
	      }
	    }

	    if (ctrl.tabs[index].index === ctrl.active) {
	      var newActiveTabIndex = index === ctrl.tabs.length - 1 ?
	        index - 1 : index + 1 % ctrl.tabs.length;
	      ctrl.select(newActiveTabIndex);
	    }

	    ctrl.tabs.splice(index, 1);
	  };

	  $scope.$watch('tabset.active', function(val) {
	    if (angular.isNumber(val) && val !== oldIndex) {
	      ctrl.select(findTabIndex(val));
	    }
	  });

	  var destroyed;
	  $scope.$on('$destroy', function() {
	    destroyed = true;
	  });

	  function findTabIndex(index) {
	    for (var i = 0; i < ctrl.tabs.length; i++) {
	      if (ctrl.tabs[i].index === index) {
	        return i;
	      }
	    }
	  }
	}])

	.directive('uibTabset', function() {
	  return {
	    transclude: true,
	    replace: true,
	    scope: {},
	    bindToController: {
	      active: '=?',
	      type: '@'
	    },
	    controller: 'UibTabsetController',
	    controllerAs: 'tabset',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/tabs/tabset.html';
	    },
	    link: function(scope, element, attrs) {
	      scope.vertical = angular.isDefined(attrs.vertical) ?
	        scope.$parent.$eval(attrs.vertical) : false;
	      scope.justified = angular.isDefined(attrs.justified) ?
	        scope.$parent.$eval(attrs.justified) : false;
	      if (angular.isUndefined(attrs.active)) {
	        scope.active = 0;
	      }
	    }
	  };
	})

	.directive('uibTab', ['$parse', function($parse) {
	  return {
	    require: '^uibTabset',
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/tabs/tab.html';
	    },
	    transclude: true,
	    scope: {
	      heading: '@',
	      index: '=?',
	      classes: '@?',
	      onSelect: '&select', //This callback is called in contentHeadingTransclude
	                          //once it inserts the tab's content into the dom
	      onDeselect: '&deselect'
	    },
	    controller: function() {
	      //Empty controller so other directives can require being 'under' a tab
	    },
	    controllerAs: 'tab',
	    link: function(scope, elm, attrs, tabsetCtrl, transclude) {
	      scope.disabled = false;
	      if (attrs.disable) {
	        scope.$parent.$watch($parse(attrs.disable), function(value) {
	          scope.disabled = !! value;
	        });
	      }

	      if (angular.isUndefined(attrs.index)) {
	        if (tabsetCtrl.tabs && tabsetCtrl.tabs.length) {
	          scope.index = Math.max.apply(null, tabsetCtrl.tabs.map(function(t) { return t.index; })) + 1;
	        } else {
	          scope.index = 0;
	        }
	      }

	      if (angular.isUndefined(attrs.classes)) {
	        scope.classes = '';
	      }

	      scope.select = function(evt) {
	        if (!scope.disabled) {
	          var index;
	          for (var i = 0; i < tabsetCtrl.tabs.length; i++) {
	            if (tabsetCtrl.tabs[i].tab === scope) {
	              index = i;
	              break;
	            }
	          }

	          tabsetCtrl.select(index, evt);
	        }
	      };

	      tabsetCtrl.addTab(scope);
	      scope.$on('$destroy', function() {
	        tabsetCtrl.removeTab(scope);
	      });

	      //We need to transclude later, once the content container is ready.
	      //when this link happens, we're inside a tab heading.
	      scope.$transcludeFn = transclude;
	    }
	  };
	}])

	.directive('uibTabHeadingTransclude', function() {
	  return {
	    restrict: 'A',
	    require: '^uibTab',
	    link: function(scope, elm) {
	      scope.$watch('headingElement', function updateHeadingElement(heading) {
	        if (heading) {
	          elm.html('');
	          elm.append(heading);
	        }
	      });
	    }
	  };
	})

	.directive('uibTabContentTransclude', function() {
	  return {
	    restrict: 'A',
	    require: '^uibTabset',
	    link: function(scope, elm, attrs) {
	      var tab = scope.$eval(attrs.uibTabContentTransclude).tab;

	      //Now our tab is ready to be transcluded: both the tab heading area
	      //and the tab content area are loaded.  Transclude 'em both.
	      tab.$transcludeFn(tab.$parent, function(contents) {
	        angular.forEach(contents, function(node) {
	          if (isTabHeading(node)) {
	            //Let tabHeadingTransclude know.
	            tab.headingElement = node;
	          } else {
	            elm.append(node);
	          }
	        });
	      });
	    }
	  };

	  function isTabHeading(node) {
	    return node.tagName && (
	      node.hasAttribute('uib-tab-heading') ||
	      node.hasAttribute('data-uib-tab-heading') ||
	      node.hasAttribute('x-uib-tab-heading') ||
	      node.tagName.toLowerCase() === 'uib-tab-heading' ||
	      node.tagName.toLowerCase() === 'data-uib-tab-heading' ||
	      node.tagName.toLowerCase() === 'x-uib-tab-heading' ||
	      node.tagName.toLowerCase() === 'uib:tab-heading'
	    );
	  }
	});

	angular.module('ui.bootstrap.timepicker', [])

	.constant('uibTimepickerConfig', {
	  hourStep: 1,
	  minuteStep: 1,
	  secondStep: 1,
	  showMeridian: true,
	  showSeconds: false,
	  meridians: null,
	  readonlyInput: false,
	  mousewheel: true,
	  arrowkeys: true,
	  showSpinners: true,
	  templateUrl: 'uib/template/timepicker/timepicker.html'
	})

	.controller('UibTimepickerController', ['$scope', '$element', '$attrs', '$parse', '$log', '$locale', 'uibTimepickerConfig', function($scope, $element, $attrs, $parse, $log, $locale, timepickerConfig) {
	  var selected = new Date(),
	    watchers = [],
	    ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
	    meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS,
	    padHours = angular.isDefined($attrs.padHours) ? $scope.$parent.$eval($attrs.padHours) : true;

	  $scope.tabindex = angular.isDefined($attrs.tabindex) ? $attrs.tabindex : 0;
	  $element.removeAttr('tabindex');

	  this.init = function(ngModelCtrl_, inputs) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;

	    ngModelCtrl.$formatters.unshift(function(modelValue) {
	      return modelValue ? new Date(modelValue) : null;
	    });

	    var hoursInputEl = inputs.eq(0),
	        minutesInputEl = inputs.eq(1),
	        secondsInputEl = inputs.eq(2);

	    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;

	    if (mousewheel) {
	      this.setupMousewheelEvents(hoursInputEl, minutesInputEl, secondsInputEl);
	    }

	    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
	    if (arrowkeys) {
	      this.setupArrowkeyEvents(hoursInputEl, minutesInputEl, secondsInputEl);
	    }

	    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
	    this.setupInputEvents(hoursInputEl, minutesInputEl, secondsInputEl);
	  };

	  var hourStep = timepickerConfig.hourStep;
	  if ($attrs.hourStep) {
	    watchers.push($scope.$parent.$watch($parse($attrs.hourStep), function(value) {
	      hourStep = +value;
	    }));
	  }

	  var minuteStep = timepickerConfig.minuteStep;
	  if ($attrs.minuteStep) {
	    watchers.push($scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
	      minuteStep = +value;
	    }));
	  }

	  var min;
	  watchers.push($scope.$parent.$watch($parse($attrs.min), function(value) {
	    var dt = new Date(value);
	    min = isNaN(dt) ? undefined : dt;
	  }));

	  var max;
	  watchers.push($scope.$parent.$watch($parse($attrs.max), function(value) {
	    var dt = new Date(value);
	    max = isNaN(dt) ? undefined : dt;
	  }));

	  var disabled = false;
	  if ($attrs.ngDisabled) {
	    watchers.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(value) {
	      disabled = value;
	    }));
	  }

	  $scope.noIncrementHours = function() {
	    var incrementedSelected = addMinutes(selected, hourStep * 60);
	    return disabled || incrementedSelected > max ||
	      incrementedSelected < selected && incrementedSelected < min;
	  };

	  $scope.noDecrementHours = function() {
	    var decrementedSelected = addMinutes(selected, -hourStep * 60);
	    return disabled || decrementedSelected < min ||
	      decrementedSelected > selected && decrementedSelected > max;
	  };

	  $scope.noIncrementMinutes = function() {
	    var incrementedSelected = addMinutes(selected, minuteStep);
	    return disabled || incrementedSelected > max ||
	      incrementedSelected < selected && incrementedSelected < min;
	  };

	  $scope.noDecrementMinutes = function() {
	    var decrementedSelected = addMinutes(selected, -minuteStep);
	    return disabled || decrementedSelected < min ||
	      decrementedSelected > selected && decrementedSelected > max;
	  };

	  $scope.noIncrementSeconds = function() {
	    var incrementedSelected = addSeconds(selected, secondStep);
	    return disabled || incrementedSelected > max ||
	      incrementedSelected < selected && incrementedSelected < min;
	  };

	  $scope.noDecrementSeconds = function() {
	    var decrementedSelected = addSeconds(selected, -secondStep);
	    return disabled || decrementedSelected < min ||
	      decrementedSelected > selected && decrementedSelected > max;
	  };

	  $scope.noToggleMeridian = function() {
	    if (selected.getHours() < 12) {
	      return disabled || addMinutes(selected, 12 * 60) > max;
	    }

	    return disabled || addMinutes(selected, -12 * 60) < min;
	  };

	  var secondStep = timepickerConfig.secondStep;
	  if ($attrs.secondStep) {
	    watchers.push($scope.$parent.$watch($parse($attrs.secondStep), function(value) {
	      secondStep = +value;
	    }));
	  }

	  $scope.showSeconds = timepickerConfig.showSeconds;
	  if ($attrs.showSeconds) {
	    watchers.push($scope.$parent.$watch($parse($attrs.showSeconds), function(value) {
	      $scope.showSeconds = !!value;
	    }));
	  }

	  // 12H / 24H mode
	  $scope.showMeridian = timepickerConfig.showMeridian;
	  if ($attrs.showMeridian) {
	    watchers.push($scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
	      $scope.showMeridian = !!value;

	      if (ngModelCtrl.$error.time) {
	        // Evaluate from template
	        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
	        if (angular.isDefined(hours) && angular.isDefined(minutes)) {
	          selected.setHours(hours);
	          refresh();
	        }
	      } else {
	        updateTemplate();
	      }
	    }));
	  }

	  // Get $scope.hours in 24H mode if valid
	  function getHoursFromTemplate() {
	    var hours = +$scope.hours;
	    var valid = $scope.showMeridian ? hours > 0 && hours < 13 :
	      hours >= 0 && hours < 24;
	    if (!valid || $scope.hours === '') {
	      return undefined;
	    }

	    if ($scope.showMeridian) {
	      if (hours === 12) {
	        hours = 0;
	      }
	      if ($scope.meridian === meridians[1]) {
	        hours = hours + 12;
	      }
	    }
	    return hours;
	  }

	  function getMinutesFromTemplate() {
	    var minutes = +$scope.minutes;
	    var valid = minutes >= 0 && minutes < 60;
	    if (!valid || $scope.minutes === '') {
	      return undefined;
	    }
	    return minutes;
	  }

	  function getSecondsFromTemplate() {
	    var seconds = +$scope.seconds;
	    return seconds >= 0 && seconds < 60 ? seconds : undefined;
	  }

	  function pad(value, noPad) {
	    if (value === null) {
	      return '';
	    }

	    return angular.isDefined(value) && value.toString().length < 2 && !noPad ?
	      '0' + value : value.toString();
	  }

	  // Respond on mousewheel spin
	  this.setupMousewheelEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
	    var isScrollingUp = function(e) {
	      if (e.originalEvent) {
	        e = e.originalEvent;
	      }
	      //pick correct delta variable depending on event
	      var delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
	      return e.detail || delta > 0;
	    };

	    hoursInputEl.bind('mousewheel wheel', function(e) {
	      if (!disabled) {
	        $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours());
	      }
	      e.preventDefault();
	    });

	    minutesInputEl.bind('mousewheel wheel', function(e) {
	      if (!disabled) {
	        $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes());
	      }
	      e.preventDefault();
	    });

	     secondsInputEl.bind('mousewheel wheel', function(e) {
	      if (!disabled) {
	        $scope.$apply(isScrollingUp(e) ? $scope.incrementSeconds() : $scope.decrementSeconds());
	      }
	      e.preventDefault();
	    });
	  };

	  // Respond on up/down arrowkeys
	  this.setupArrowkeyEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
	    hoursInputEl.bind('keydown', function(e) {
	      if (!disabled) {
	        if (e.which === 38) { // up
	          e.preventDefault();
	          $scope.incrementHours();
	          $scope.$apply();
	        } else if (e.which === 40) { // down
	          e.preventDefault();
	          $scope.decrementHours();
	          $scope.$apply();
	        }
	      }
	    });

	    minutesInputEl.bind('keydown', function(e) {
	      if (!disabled) {
	        if (e.which === 38) { // up
	          e.preventDefault();
	          $scope.incrementMinutes();
	          $scope.$apply();
	        } else if (e.which === 40) { // down
	          e.preventDefault();
	          $scope.decrementMinutes();
	          $scope.$apply();
	        }
	      }
	    });

	    secondsInputEl.bind('keydown', function(e) {
	      if (!disabled) {
	        if (e.which === 38) { // up
	          e.preventDefault();
	          $scope.incrementSeconds();
	          $scope.$apply();
	        } else if (e.which === 40) { // down
	          e.preventDefault();
	          $scope.decrementSeconds();
	          $scope.$apply();
	        }
	      }
	    });
	  };

	  this.setupInputEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
	    if ($scope.readonlyInput) {
	      $scope.updateHours = angular.noop;
	      $scope.updateMinutes = angular.noop;
	      $scope.updateSeconds = angular.noop;
	      return;
	    }

	    var invalidate = function(invalidHours, invalidMinutes, invalidSeconds) {
	      ngModelCtrl.$setViewValue(null);
	      ngModelCtrl.$setValidity('time', false);
	      if (angular.isDefined(invalidHours)) {
	        $scope.invalidHours = invalidHours;
	      }

	      if (angular.isDefined(invalidMinutes)) {
	        $scope.invalidMinutes = invalidMinutes;
	      }

	      if (angular.isDefined(invalidSeconds)) {
	        $scope.invalidSeconds = invalidSeconds;
	      }
	    };

	    $scope.updateHours = function() {
	      var hours = getHoursFromTemplate(),
	        minutes = getMinutesFromTemplate();

	      ngModelCtrl.$setDirty();

	      if (angular.isDefined(hours) && angular.isDefined(minutes)) {
	        selected.setHours(hours);
	        selected.setMinutes(minutes);
	        if (selected < min || selected > max) {
	          invalidate(true);
	        } else {
	          refresh('h');
	        }
	      } else {
	        invalidate(true);
	      }
	    };

	    hoursInputEl.bind('blur', function(e) {
	      ngModelCtrl.$setTouched();
	      if (modelIsEmpty()) {
	        makeValid();
	      } else if ($scope.hours === null || $scope.hours === '') {
	        invalidate(true);
	      } else if (!$scope.invalidHours && $scope.hours < 10) {
	        $scope.$apply(function() {
	          $scope.hours = pad($scope.hours, !padHours);
	        });
	      }
	    });

	    $scope.updateMinutes = function() {
	      var minutes = getMinutesFromTemplate(),
	        hours = getHoursFromTemplate();

	      ngModelCtrl.$setDirty();

	      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
	        selected.setHours(hours);
	        selected.setMinutes(minutes);
	        if (selected < min || selected > max) {
	          invalidate(undefined, true);
	        } else {
	          refresh('m');
	        }
	      } else {
	        invalidate(undefined, true);
	      }
	    };

	    minutesInputEl.bind('blur', function(e) {
	      ngModelCtrl.$setTouched();
	      if (modelIsEmpty()) {
	        makeValid();
	      } else if ($scope.minutes === null) {
	        invalidate(undefined, true);
	      } else if (!$scope.invalidMinutes && $scope.minutes < 10) {
	        $scope.$apply(function() {
	          $scope.minutes = pad($scope.minutes);
	        });
	      }
	    });

	    $scope.updateSeconds = function() {
	      var seconds = getSecondsFromTemplate();

	      ngModelCtrl.$setDirty();

	      if (angular.isDefined(seconds)) {
	        selected.setSeconds(seconds);
	        refresh('s');
	      } else {
	        invalidate(undefined, undefined, true);
	      }
	    };

	    secondsInputEl.bind('blur', function(e) {
	      if (modelIsEmpty()) {
	        makeValid();
	      } else if (!$scope.invalidSeconds && $scope.seconds < 10) {
	        $scope.$apply( function() {
	          $scope.seconds = pad($scope.seconds);
	        });
	      }
	    });

	  };

	  this.render = function() {
	    var date = ngModelCtrl.$viewValue;

	    if (isNaN(date)) {
	      ngModelCtrl.$setValidity('time', false);
	      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	    } else {
	      if (date) {
	        selected = date;
	      }

	      if (selected < min || selected > max) {
	        ngModelCtrl.$setValidity('time', false);
	        $scope.invalidHours = true;
	        $scope.invalidMinutes = true;
	      } else {
	        makeValid();
	      }
	      updateTemplate();
	    }
	  };

	  // Call internally when we know that model is valid.
	  function refresh(keyboardChange) {
	    makeValid();
	    ngModelCtrl.$setViewValue(new Date(selected));
	    updateTemplate(keyboardChange);
	  }

	  function makeValid() {
	    ngModelCtrl.$setValidity('time', true);
	    $scope.invalidHours = false;
	    $scope.invalidMinutes = false;
	    $scope.invalidSeconds = false;
	  }

	  function updateTemplate(keyboardChange) {
	    if (!ngModelCtrl.$modelValue) {
	      $scope.hours = null;
	      $scope.minutes = null;
	      $scope.seconds = null;
	      $scope.meridian = meridians[0];
	    } else {
	      var hours = selected.getHours(),
	        minutes = selected.getMinutes(),
	        seconds = selected.getSeconds();

	      if ($scope.showMeridian) {
	        hours = hours === 0 || hours === 12 ? 12 : hours % 12; // Convert 24 to 12 hour system
	      }

	      $scope.hours = keyboardChange === 'h' ? hours : pad(hours, !padHours);
	      if (keyboardChange !== 'm') {
	        $scope.minutes = pad(minutes);
	      }
	      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];

	      if (keyboardChange !== 's') {
	        $scope.seconds = pad(seconds);
	      }
	      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
	    }
	  }

	  function addSecondsToSelected(seconds) {
	    selected = addSeconds(selected, seconds);
	    refresh();
	  }

	  function addMinutes(selected, minutes) {
	    return addSeconds(selected, minutes*60);
	  }

	  function addSeconds(date, seconds) {
	    var dt = new Date(date.getTime() + seconds * 1000);
	    var newDate = new Date(date);
	    newDate.setHours(dt.getHours(), dt.getMinutes(), dt.getSeconds());
	    return newDate;
	  }

	  function modelIsEmpty() {
	    return ($scope.hours === null || $scope.hours === '') &&
	      ($scope.minutes === null || $scope.minutes === '') &&
	      (!$scope.showSeconds || $scope.showSeconds && ($scope.seconds === null || $scope.seconds === ''));
	  }

	  $scope.showSpinners = angular.isDefined($attrs.showSpinners) ?
	    $scope.$parent.$eval($attrs.showSpinners) : timepickerConfig.showSpinners;

	  $scope.incrementHours = function() {
	    if (!$scope.noIncrementHours()) {
	      addSecondsToSelected(hourStep * 60 * 60);
	    }
	  };

	  $scope.decrementHours = function() {
	    if (!$scope.noDecrementHours()) {
	      addSecondsToSelected(-hourStep * 60 * 60);
	    }
	  };

	  $scope.incrementMinutes = function() {
	    if (!$scope.noIncrementMinutes()) {
	      addSecondsToSelected(minuteStep * 60);
	    }
	  };

	  $scope.decrementMinutes = function() {
	    if (!$scope.noDecrementMinutes()) {
	      addSecondsToSelected(-minuteStep * 60);
	    }
	  };

	  $scope.incrementSeconds = function() {
	    if (!$scope.noIncrementSeconds()) {
	      addSecondsToSelected(secondStep);
	    }
	  };

	  $scope.decrementSeconds = function() {
	    if (!$scope.noDecrementSeconds()) {
	      addSecondsToSelected(-secondStep);
	    }
	  };

	  $scope.toggleMeridian = function() {
	    var minutes = getMinutesFromTemplate(),
	        hours = getHoursFromTemplate();

	    if (!$scope.noToggleMeridian()) {
	      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
	        addSecondsToSelected(12 * 60 * (selected.getHours() < 12 ? 60 : -60));
	      } else {
	        $scope.meridian = $scope.meridian === meridians[0] ? meridians[1] : meridians[0];
	      }
	    }
	  };

	  $scope.blur = function() {
	    ngModelCtrl.$setTouched();
	  };

	  $scope.$on('$destroy', function() {
	    while (watchers.length) {
	      watchers.shift()();
	    }
	  });
	}])

	.directive('uibTimepicker', ['uibTimepickerConfig', function(uibTimepickerConfig) {
	  return {
	    require: ['uibTimepicker', '?^ngModel'],
	    controller: 'UibTimepickerController',
	    controllerAs: 'timepicker',
	    replace: true,
	    scope: {},
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || uibTimepickerConfig.templateUrl;
	    },
	    link: function(scope, element, attrs, ctrls) {
	      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (ngModelCtrl) {
	        timepickerCtrl.init(ngModelCtrl, element.find('input'));
	      }
	    }
	  };
	}]);

	angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.debounce', 'ui.bootstrap.position'])

	/**
	 * A helper service that can parse typeahead's syntax (string provided by users)
	 * Extracted to a separate service for ease of unit testing
	 */
	  .factory('uibTypeaheadParser', ['$parse', function($parse) {
	    //                      00000111000000000000022200000000000000003333333333333330000000000044000
	    var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
	    return {
	      parse: function(input) {
	        var match = input.match(TYPEAHEAD_REGEXP);
	        if (!match) {
	          throw new Error(
	            'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
	              ' but got "' + input + '".');
	        }

	        return {
	          itemName: match[3],
	          source: $parse(match[4]),
	          viewMapper: $parse(match[2] || match[1]),
	          modelMapper: $parse(match[1])
	        };
	      }
	    };
	  }])

	  .controller('UibTypeaheadController', ['$scope', '$element', '$attrs', '$compile', '$parse', '$q', '$timeout', '$document', '$window', '$rootScope', '$$debounce', '$uibPosition', 'uibTypeaheadParser',
	    function(originalScope, element, attrs, $compile, $parse, $q, $timeout, $document, $window, $rootScope, $$debounce, $position, typeaheadParser) {
	    var HOT_KEYS = [9, 13, 27, 38, 40];
	    var eventDebounceTime = 200;
	    var modelCtrl, ngModelOptions;
	    //SUPPORTED ATTRIBUTES (OPTIONS)

	    //minimal no of characters that needs to be entered before typeahead kicks-in
	    var minLength = originalScope.$eval(attrs.typeaheadMinLength);
	    if (!minLength && minLength !== 0) {
	      minLength = 1;
	    }

	    originalScope.$watch(attrs.typeaheadMinLength, function (newVal) {
	        minLength = !newVal && newVal !== 0 ? 1 : newVal;
	    });
	    
	    //minimal wait time after last character typed before typeahead kicks-in
	    var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

	    //should it restrict model values to the ones selected from the popup only?
	    var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;
	    originalScope.$watch(attrs.typeaheadEditable, function (newVal) {
	      isEditable = newVal !== false;
	    });

	    //binding to a variable that indicates if matches are being retrieved asynchronously
	    var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

	    //a callback executed when a match is selected
	    var onSelectCallback = $parse(attrs.typeaheadOnSelect);

	    //should it select highlighted popup value when losing focus?
	    var isSelectOnBlur = angular.isDefined(attrs.typeaheadSelectOnBlur) ? originalScope.$eval(attrs.typeaheadSelectOnBlur) : false;

	    //binding to a variable that indicates if there were no results after the query is completed
	    var isNoResultsSetter = $parse(attrs.typeaheadNoResults).assign || angular.noop;

	    var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

	    var appendToBody = attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;

	    var appendTo = attrs.typeaheadAppendTo ?
	      originalScope.$eval(attrs.typeaheadAppendTo) : null;

	    var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;

	    //If input matches an item of the list exactly, select it automatically
	    var selectOnExact = attrs.typeaheadSelectOnExact ? originalScope.$eval(attrs.typeaheadSelectOnExact) : false;

	    //binding to a variable that indicates if dropdown is open
	    var isOpenSetter = $parse(attrs.typeaheadIsOpen).assign || angular.noop;

	    var showHint = originalScope.$eval(attrs.typeaheadShowHint) || false;

	    //INTERNAL VARIABLES

	    //model setter executed upon match selection
	    var parsedModel = $parse(attrs.ngModel);
	    var invokeModelSetter = $parse(attrs.ngModel + '($$$p)');
	    var $setModelValue = function(scope, newValue) {
	      if (angular.isFunction(parsedModel(originalScope)) &&
	        ngModelOptions && ngModelOptions.$options && ngModelOptions.$options.getterSetter) {
	        return invokeModelSetter(scope, {$$$p: newValue});
	      }

	      return parsedModel.assign(scope, newValue);
	    };

	    //expressions used by typeahead
	    var parserResult = typeaheadParser.parse(attrs.uibTypeahead);

	    var hasFocus;

	    //Used to avoid bug in iOS webview where iOS keyboard does not fire
	    //mousedown & mouseup events
	    //Issue #3699
	    var selected;

	    //create a child scope for the typeahead directive so we are not polluting original scope
	    //with typeahead-specific data (matches, query etc.)
	    var scope = originalScope.$new();
	    var offDestroy = originalScope.$on('$destroy', function() {
	      scope.$destroy();
	    });
	    scope.$on('$destroy', offDestroy);

	    // WAI-ARIA
	    var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
	    element.attr({
	      'aria-autocomplete': 'list',
	      'aria-expanded': false,
	      'aria-owns': popupId
	    });

	    var inputsContainer, hintInputElem;
	    //add read-only input to show hint
	    if (showHint) {
	      inputsContainer = angular.element('<div></div>');
	      inputsContainer.css('position', 'relative');
	      element.after(inputsContainer);
	      hintInputElem = element.clone();
	      hintInputElem.attr('placeholder', '');
	      hintInputElem.attr('tabindex', '-1');
	      hintInputElem.val('');
	      hintInputElem.css({
	        'position': 'absolute',
	        'top': '0px',
	        'left': '0px',
	        'border-color': 'transparent',
	        'box-shadow': 'none',
	        'opacity': 1,
	        'background': 'none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)',
	        'color': '#999'
	      });
	      element.css({
	        'position': 'relative',
	        'vertical-align': 'top',
	        'background-color': 'transparent'
	      });
	      inputsContainer.append(hintInputElem);
	      hintInputElem.after(element);
	    }

	    //pop-up element used to display matches
	    var popUpEl = angular.element('<div uib-typeahead-popup></div>');
	    popUpEl.attr({
	      id: popupId,
	      matches: 'matches',
	      active: 'activeIdx',
	      select: 'select(activeIdx, evt)',
	      'move-in-progress': 'moveInProgress',
	      query: 'query',
	      position: 'position',
	      'assign-is-open': 'assignIsOpen(isOpen)',
	      debounce: 'debounceUpdate'
	    });
	    //custom item template
	    if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
	      popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
	    }

	    if (angular.isDefined(attrs.typeaheadPopupTemplateUrl)) {
	      popUpEl.attr('popup-template-url', attrs.typeaheadPopupTemplateUrl);
	    }

	    var resetHint = function() {
	      if (showHint) {
	        hintInputElem.val('');
	      }
	    };

	    var resetMatches = function() {
	      scope.matches = [];
	      scope.activeIdx = -1;
	      element.attr('aria-expanded', false);
	      resetHint();
	    };

	    var getMatchId = function(index) {
	      return popupId + '-option-' + index;
	    };

	    // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
	    // This attribute is added or removed automatically when the `activeIdx` changes.
	    scope.$watch('activeIdx', function(index) {
	      if (index < 0) {
	        element.removeAttr('aria-activedescendant');
	      } else {
	        element.attr('aria-activedescendant', getMatchId(index));
	      }
	    });

	    var inputIsExactMatch = function(inputValue, index) {
	      if (scope.matches.length > index && inputValue) {
	        return inputValue.toUpperCase() === scope.matches[index].label.toUpperCase();
	      }

	      return false;
	    };

	    var getMatchesAsync = function(inputValue, evt) {
	      var locals = {$viewValue: inputValue};
	      isLoadingSetter(originalScope, true);
	      isNoResultsSetter(originalScope, false);
	      $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
	        //it might happen that several async queries were in progress if a user were typing fast
	        //but we are interested only in responses that correspond to the current view value
	        var onCurrentRequest = inputValue === modelCtrl.$viewValue;
	        if (onCurrentRequest && hasFocus) {
	          if (matches && matches.length > 0) {
	            scope.activeIdx = focusFirst ? 0 : -1;
	            isNoResultsSetter(originalScope, false);
	            scope.matches.length = 0;

	            //transform labels
	            for (var i = 0; i < matches.length; i++) {
	              locals[parserResult.itemName] = matches[i];
	              scope.matches.push({
	                id: getMatchId(i),
	                label: parserResult.viewMapper(scope, locals),
	                model: matches[i]
	              });
	            }

	            scope.query = inputValue;
	            //position pop-up with matches - we need to re-calculate its position each time we are opening a window
	            //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
	            //due to other elements being rendered
	            recalculatePosition();

	            element.attr('aria-expanded', true);

	            //Select the single remaining option if user input matches
	            if (selectOnExact && scope.matches.length === 1 && inputIsExactMatch(inputValue, 0)) {
	              if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
	                $$debounce(function() {
	                  scope.select(0, evt);
	                }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
	              } else {
	                scope.select(0, evt);
	              }
	            }

	            if (showHint) {
	              var firstLabel = scope.matches[0].label;
	              if (angular.isString(inputValue) &&
	                inputValue.length > 0 &&
	                firstLabel.slice(0, inputValue.length).toUpperCase() === inputValue.toUpperCase()) {
	                hintInputElem.val(inputValue + firstLabel.slice(inputValue.length));
	              } else {
	                hintInputElem.val('');
	              }
	            }
	          } else {
	            resetMatches();
	            isNoResultsSetter(originalScope, true);
	          }
	        }
	        if (onCurrentRequest) {
	          isLoadingSetter(originalScope, false);
	        }
	      }, function() {
	        resetMatches();
	        isLoadingSetter(originalScope, false);
	        isNoResultsSetter(originalScope, true);
	      });
	    };

	    // bind events only if appendToBody params exist - performance feature
	    if (appendToBody) {
	      angular.element($window).on('resize', fireRecalculating);
	      $document.find('body').on('scroll', fireRecalculating);
	    }

	    // Declare the debounced function outside recalculating for
	    // proper debouncing
	    var debouncedRecalculate = $$debounce(function() {
	      // if popup is visible
	      if (scope.matches.length) {
	        recalculatePosition();
	      }

	      scope.moveInProgress = false;
	    }, eventDebounceTime);

	    // Default progress type
	    scope.moveInProgress = false;

	    function fireRecalculating() {
	      if (!scope.moveInProgress) {
	        scope.moveInProgress = true;
	        scope.$digest();
	      }

	      debouncedRecalculate();
	    }

	    // recalculate actual position and set new values to scope
	    // after digest loop is popup in right position
	    function recalculatePosition() {
	      scope.position = appendToBody ? $position.offset(element) : $position.position(element);
	      scope.position.top += element.prop('offsetHeight');
	    }

	    //we need to propagate user's query so we can higlight matches
	    scope.query = undefined;

	    //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
	    var timeoutPromise;

	    var scheduleSearchWithTimeout = function(inputValue) {
	      timeoutPromise = $timeout(function() {
	        getMatchesAsync(inputValue);
	      }, waitTime);
	    };

	    var cancelPreviousTimeout = function() {
	      if (timeoutPromise) {
	        $timeout.cancel(timeoutPromise);
	      }
	    };

	    resetMatches();

	    scope.assignIsOpen = function (isOpen) {
	      isOpenSetter(originalScope, isOpen);
	    };

	    scope.select = function(activeIdx, evt) {
	      //called from within the $digest() cycle
	      var locals = {};
	      var model, item;

	      selected = true;
	      locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
	      model = parserResult.modelMapper(originalScope, locals);
	      $setModelValue(originalScope, model);
	      modelCtrl.$setValidity('editable', true);
	      modelCtrl.$setValidity('parse', true);

	      onSelectCallback(originalScope, {
	        $item: item,
	        $model: model,
	        $label: parserResult.viewMapper(originalScope, locals),
	        $event: evt
	      });

	      resetMatches();

	      //return focus to the input element if a match was selected via a mouse click event
	      // use timeout to avoid $rootScope:inprog error
	      if (scope.$eval(attrs.typeaheadFocusOnSelect) !== false) {
	        $timeout(function() { element[0].focus(); }, 0, false);
	      }
	    };

	    //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
	    element.on('keydown', function(evt) {
	      //typeahead is open and an "interesting" key was pressed
	      if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
	        return;
	      }

	      /**
	       * if there's nothing selected (i.e. focusFirst) and enter or tab is hit
	       * or
	       * shift + tab is pressed to bring focus to the previous element
	       * then clear the results
	       */
	      if (scope.activeIdx === -1 && (evt.which === 9 || evt.which === 13) || evt.which === 9 && !!evt.shiftKey) {
	        resetMatches();
	        scope.$digest();
	        return;
	      }

	      evt.preventDefault();
	      var target;
	      switch (evt.which) {
	        case 9:
	        case 13:
	          scope.$apply(function () {
	            if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
	              $$debounce(function() {
	                scope.select(scope.activeIdx, evt);
	              }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
	            } else {
	              scope.select(scope.activeIdx, evt);
	            }
	          });
	          break;
	        case 27:
	          evt.stopPropagation();

	          resetMatches();
	          originalScope.$digest();
	          break;
	        case 38:
	          scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
	          scope.$digest();
	          target = popUpEl.find('li')[scope.activeIdx];
	          target.parentNode.scrollTop = target.offsetTop;
	          break;
	        case 40:
	          scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
	          scope.$digest();
	          target = popUpEl.find('li')[scope.activeIdx];
	          target.parentNode.scrollTop = target.offsetTop;
	          break;
	      }
	    });

	    element.bind('focus', function (evt) {
	      hasFocus = true;
	      if (minLength === 0 && !modelCtrl.$viewValue) {
	        $timeout(function() {
	          getMatchesAsync(modelCtrl.$viewValue, evt);
	        }, 0);
	      }
	    });

	    element.bind('blur', function(evt) {
	      if (isSelectOnBlur && scope.matches.length && scope.activeIdx !== -1 && !selected) {
	        selected = true;
	        scope.$apply(function() {
	          if (angular.isObject(scope.debounceUpdate) && angular.isNumber(scope.debounceUpdate.blur)) {
	            $$debounce(function() {
	              scope.select(scope.activeIdx, evt);
	            }, scope.debounceUpdate.blur);
	          } else {
	            scope.select(scope.activeIdx, evt);
	          }
	        });
	      }
	      if (!isEditable && modelCtrl.$error.editable) {
	        modelCtrl.$viewValue = '';
	        // Reset validity as we are clearing
	        modelCtrl.$setValidity('editable', true);
	        modelCtrl.$setValidity('parse', true);
	        element.val('');
	      }
	      hasFocus = false;
	      selected = false;
	    });

	    // Keep reference to click handler to unbind it.
	    var dismissClickHandler = function(evt) {
	      // Issue #3973
	      // Firefox treats right click as a click on document
	      if (element[0] !== evt.target && evt.which !== 3 && scope.matches.length !== 0) {
	        resetMatches();
	        if (!$rootScope.$$phase) {
	          originalScope.$digest();
	        }
	      }
	    };

	    $document.on('click', dismissClickHandler);

	    originalScope.$on('$destroy', function() {
	      $document.off('click', dismissClickHandler);
	      if (appendToBody || appendTo) {
	        $popup.remove();
	      }

	      if (appendToBody) {
	        angular.element($window).off('resize', fireRecalculating);
	        $document.find('body').off('scroll', fireRecalculating);
	      }
	      // Prevent jQuery cache memory leak
	      popUpEl.remove();

	      if (showHint) {
	          inputsContainer.remove();
	      }
	    });

	    var $popup = $compile(popUpEl)(scope);

	    if (appendToBody) {
	      $document.find('body').append($popup);
	    } else if (appendTo) {
	      angular.element(appendTo).eq(0).append($popup);
	    } else {
	      element.after($popup);
	    }

	    this.init = function(_modelCtrl, _ngModelOptions) {
	      modelCtrl = _modelCtrl;
	      ngModelOptions = _ngModelOptions;

	      scope.debounceUpdate = modelCtrl.$options && $parse(modelCtrl.$options.debounce)(originalScope);

	      //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
	      //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
	      modelCtrl.$parsers.unshift(function(inputValue) {
	        hasFocus = true;

	        if (minLength === 0 || inputValue && inputValue.length >= minLength) {
	          if (waitTime > 0) {
	            cancelPreviousTimeout();
	            scheduleSearchWithTimeout(inputValue);
	          } else {
	            getMatchesAsync(inputValue);
	          }
	        } else {
	          isLoadingSetter(originalScope, false);
	          cancelPreviousTimeout();
	          resetMatches();
	        }

	        if (isEditable) {
	          return inputValue;
	        }

	        if (!inputValue) {
	          // Reset in case user had typed something previously.
	          modelCtrl.$setValidity('editable', true);
	          return null;
	        }

	        modelCtrl.$setValidity('editable', false);
	        return undefined;
	      });

	      modelCtrl.$formatters.push(function(modelValue) {
	        var candidateViewValue, emptyViewValue;
	        var locals = {};

	        // The validity may be set to false via $parsers (see above) if
	        // the model is restricted to selected values. If the model
	        // is set manually it is considered to be valid.
	        if (!isEditable) {
	          modelCtrl.$setValidity('editable', true);
	        }

	        if (inputFormatter) {
	          locals.$model = modelValue;
	          return inputFormatter(originalScope, locals);
	        }

	        //it might happen that we don't have enough info to properly render input value
	        //we need to check for this situation and simply return model value if we can't apply custom formatting
	        locals[parserResult.itemName] = modelValue;
	        candidateViewValue = parserResult.viewMapper(originalScope, locals);
	        locals[parserResult.itemName] = undefined;
	        emptyViewValue = parserResult.viewMapper(originalScope, locals);

	        return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
	      });
	    };
	  }])

	  .directive('uibTypeahead', function() {
	    return {
	      controller: 'UibTypeaheadController',
	      require: ['ngModel', '^?ngModelOptions', 'uibTypeahead'],
	      link: function(originalScope, element, attrs, ctrls) {
	        ctrls[2].init(ctrls[0], ctrls[1]);
	      }
	    };
	  })

	  .directive('uibTypeaheadPopup', ['$$debounce', function($$debounce) {
	    return {
	      scope: {
	        matches: '=',
	        query: '=',
	        active: '=',
	        position: '&',
	        moveInProgress: '=',
	        select: '&',
	        assignIsOpen: '&',
	        debounce: '&'
	      },
	      replace: true,
	      templateUrl: function(element, attrs) {
	        return attrs.popupTemplateUrl || 'uib/template/typeahead/typeahead-popup.html';
	      },
	      link: function(scope, element, attrs) {
	        scope.templateUrl = attrs.templateUrl;

	        scope.isOpen = function() {
	          var isDropdownOpen = scope.matches.length > 0;
	          scope.assignIsOpen({ isOpen: isDropdownOpen });
	          return isDropdownOpen;
	        };

	        scope.isActive = function(matchIdx) {
	          return scope.active === matchIdx;
	        };

	        scope.selectActive = function(matchIdx) {
	          scope.active = matchIdx;
	        };

	        scope.selectMatch = function(activeIdx, evt) {
	          var debounce = scope.debounce();
	          if (angular.isNumber(debounce) || angular.isObject(debounce)) {
	            $$debounce(function() {
	              scope.select({activeIdx: activeIdx, evt: evt});
	            }, angular.isNumber(debounce) ? debounce : debounce['default']);
	          } else {
	            scope.select({activeIdx: activeIdx, evt: evt});
	          }
	        };
	      }
	    };
	  }])

	  .directive('uibTypeaheadMatch', ['$templateRequest', '$compile', '$parse', function($templateRequest, $compile, $parse) {
	    return {
	      scope: {
	        index: '=',
	        match: '=',
	        query: '='
	      },
	      link: function(scope, element, attrs) {
	        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'uib/template/typeahead/typeahead-match.html';
	        $templateRequest(tplUrl).then(function(tplContent) {
	          var tplEl = angular.element(tplContent.trim());
	          element.replaceWith(tplEl);
	          $compile(tplEl)(scope);
	        });
	      }
	    };
	  }])

	  .filter('uibTypeaheadHighlight', ['$sce', '$injector', '$log', function($sce, $injector, $log) {
	    var isSanitizePresent;
	    isSanitizePresent = $injector.has('$sanitize');

	    function escapeRegexp(queryToEscape) {
	      // Regex: capture the whole query string and replace it with the string that will be used to match
	      // the results, for example if the capture is "a" the result will be \a
	      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	    }

	    function containsHtml(matchItem) {
	      return /<.*>/g.test(matchItem);
	    }

	    return function(matchItem, query) {
	      if (!isSanitizePresent && containsHtml(matchItem)) {
	        $log.warn('Unsafe use of typeahead please use ngSanitize'); // Warn the user about the danger
	      }
	      matchItem = query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem; // Replaces the capture string with a the same string inside of a "strong" tag
	      if (!isSanitizePresent) {
	        matchItem = $sce.trustAsHtml(matchItem); // If $sanitize is not present we pack the string in a $sce object for the ng-bind-html directive
	      }
	      return matchItem;
	    };
	  }]);

	angular.module("uib/template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/accordion/accordion-group.html",
	    "<div class=\"panel\" ng-class=\"panelClass || 'panel-default'\">\n" +
	    "  <div role=\"tab\" id=\"{{::headingId}}\" aria-selected=\"{{isOpen}}\" class=\"panel-heading\" ng-keypress=\"toggleOpen($event)\">\n" +
	    "    <h4 class=\"panel-title\">\n" +
	    "      <a role=\"button\" data-toggle=\"collapse\" href aria-expanded=\"{{isOpen}}\" aria-controls=\"{{::panelId}}\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\"><span uib-accordion-header ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" +
	    "    </h4>\n" +
	    "  </div>\n" +
	    "  <div id=\"{{::panelId}}\" aria-labelledby=\"{{::headingId}}\" aria-hidden=\"{{!isOpen}}\" role=\"tabpanel\" class=\"panel-collapse collapse\" uib-collapse=\"!isOpen\">\n" +
	    "    <div class=\"panel-body\" ng-transclude></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/accordion/accordion.html",
	    "<div role=\"tablist\" class=\"panel-group\" ng-transclude></div>");
	}]);

	angular.module("uib/template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/alert/alert.html",
	    "<div class=\"alert\" ng-class=\"['alert-' + (type || 'warning'), closeable ? 'alert-dismissible' : null]\" role=\"alert\">\n" +
	    "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close({$event: $event})\">\n" +
	    "        <span aria-hidden=\"true\">&times;</span>\n" +
	    "        <span class=\"sr-only\">Close</span>\n" +
	    "    </button>\n" +
	    "    <div ng-transclude></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/carousel/carousel.html",
	    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
	    "  <div class=\"carousel-inner\" ng-transclude></div>\n" +
	    "  <a role=\"button\" href class=\"left carousel-control\" ng-click=\"prev()\" ng-class=\"{ disabled: isPrevDisabled() }\" ng-show=\"slides.length > 1\">\n" +
	    "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
	    "    <span class=\"sr-only\">previous</span>\n" +
	    "  </a>\n" +
	    "  <a role=\"button\" href class=\"right carousel-control\" ng-click=\"next()\" ng-class=\"{ disabled: isNextDisabled() }\" ng-show=\"slides.length > 1\">\n" +
	    "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
	    "    <span class=\"sr-only\">next</span>\n" +
	    "  </a>\n" +
	    "  <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" +
	    "    <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{ active: isActive(slide) }\" ng-click=\"select(slide)\">\n" +
	    "      <span class=\"sr-only\">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if=\"isActive(slide)\">, currently active</span></span>\n" +
	    "    </li>\n" +
	    "  </ol>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/carousel/slide.html",
	    "<div ng-class=\"{\n" +
	    "    'active': active\n" +
	    "  }\" class=\"item text-center\" ng-transclude></div>\n" +
	    "");
	}]);

	angular.module("uib/template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepicker/datepicker.html",
	    "<div class=\"uib-datepicker\" ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" +
	    "  <uib-daypicker ng-switch-when=\"day\" tabindex=\"0\"></uib-daypicker>\n" +
	    "  <uib-monthpicker ng-switch-when=\"month\" tabindex=\"0\"></uib-monthpicker>\n" +
	    "  <uib-yearpicker ng-switch-when=\"year\" tabindex=\"0\"></uib-yearpicker>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepicker/day.html",
	    "<table class=\"uib-daypicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th colspan=\"{{::5 + showWeeks}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "    <tr>\n" +
	    "      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" +
	    "      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"uib-weeks\" ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-if=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
	    "      <td ng-repeat=\"dt in row\" class=\"uib-day text-center\" role=\"gridcell\"\n" +
	    "        id=\"{{::dt.uid}}\"\n" +
	    "        ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" class=\"btn btn-default btn-sm\"\n" +
	    "          uib-is-class=\"\n" +
	    "            'btn-info' for selectedDt,\n" +
	    "            'active' for activeDt\n" +
	    "            on dt\"\n" +
	    "          ng-click=\"select(dt.date)\"\n" +
	    "          ng-disabled=\"::dt.disabled\"\n" +
	    "          tabindex=\"-1\"><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("uib/template/datepicker/month.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepicker/month.html",
	    "<table class=\"uib-monthpicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"uib-months\" ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-repeat=\"dt in row\" class=\"uib-month text-center\" role=\"gridcell\"\n" +
	    "        id=\"{{::dt.uid}}\"\n" +
	    "        ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" class=\"btn btn-default\"\n" +
	    "          uib-is-class=\"\n" +
	    "            'btn-info' for selectedDt,\n" +
	    "            'active' for activeDt\n" +
	    "            on dt\"\n" +
	    "          ng-click=\"select(dt.date)\"\n" +
	    "          ng-disabled=\"::dt.disabled\"\n" +
	    "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("uib/template/datepicker/year.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepicker/year.html",
	    "<table class=\"uib-yearpicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th colspan=\"{{::columns - 2}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"uib-years\" ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-repeat=\"dt in row\" class=\"uib-year text-center\" role=\"gridcell\"\n" +
	    "        id=\"{{::dt.uid}}\"\n" +
	    "        ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" class=\"btn btn-default\"\n" +
	    "          uib-is-class=\"\n" +
	    "            'btn-info' for selectedDt,\n" +
	    "            'active' for activeDt\n" +
	    "            on dt\"\n" +
	    "          ng-click=\"select(dt.date)\"\n" +
	    "          ng-disabled=\"::dt.disabled\"\n" +
	    "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("uib/template/datepickerPopup/popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepickerPopup/popup.html",
	    "<div>\n" +
	    "  <ul class=\"uib-datepicker-popup dropdown-menu uib-position-measure\" dropdown-nested ng-if=\"isOpen\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
	    "    <li ng-transclude></li>\n" +
	    "    <li ng-if=\"showButtonBar\" class=\"uib-button-bar\">\n" +
	    "      <span class=\"btn-group pull-left\">\n" +
	    "        <button type=\"button\" class=\"btn btn-sm btn-info uib-datepicker-current\" ng-click=\"select('today', $event)\" ng-disabled=\"isDisabled('today')\">{{ getText('current') }}</button>\n" +
	    "        <button type=\"button\" class=\"btn btn-sm btn-danger uib-clear\" ng-click=\"select(null, $event)\">{{ getText('clear') }}</button>\n" +
	    "      </span>\n" +
	    "      <button type=\"button\" class=\"btn btn-sm btn-success pull-right uib-close\" ng-click=\"close($event)\">{{ getText('close') }}</button>\n" +
	    "    </li>\n" +
	    "  </ul>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/modal/backdrop.html",
	    "<div class=\"modal-backdrop\"\n" +
	    "     uib-modal-animation-class=\"fade\"\n" +
	    "     modal-in-class=\"in\"\n" +
	    "     ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"\n" +
	    "></div>\n" +
	    "");
	}]);

	angular.module("uib/template/modal/window.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/modal/window.html",
	    "<div modal-render=\"{{$isRendered}}\" tabindex=\"-1\" role=\"dialog\" class=\"modal\"\n" +
	    "    uib-modal-animation-class=\"fade\"\n" +
	    "    modal-in-class=\"in\"\n" +
	    "    ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\">\n" +
	    "    <div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/pager/pager.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/pager/pager.html",
	    "<ul class=\"pager\">\n" +
	    "  <li ng-class=\"{disabled: noPrevious()||ngDisabled, previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
	    "  <li ng-class=\"{disabled: noNext()||ngDisabled, next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
	    "</ul>\n" +
	    "");
	}]);

	angular.module("uib/template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/pagination/pagination.html",
	    "<ul class=\"pagination\">\n" +
	    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-first\"><a href ng-click=\"selectPage(1, $event)\">{{::getText('first')}}</a></li>\n" +
	    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-prev\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
	    "  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active,disabled: ngDisabled&&!page.active}\" class=\"pagination-page\"><a href ng-click=\"selectPage(page.number, $event)\">{{page.text}}</a></li>\n" +
	    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
	    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-last\"><a href ng-click=\"selectPage(totalPages, $event)\">{{::getText('last')}}</a></li>\n" +
	    "</ul>\n" +
	    "");
	}]);

	angular.module("uib/template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tooltip/tooltip-html-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tooltip/tooltip-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tooltip/tooltip-template-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\"\n" +
	    "    uib-tooltip-template-transclude=\"contentExp()\"\n" +
	    "    tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/popover/popover-html.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/popover/popover-html.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
	    "      <div class=\"popover-content\" ng-bind-html=\"contentExp()\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/popover/popover-template.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/popover/popover-template.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
	    "      <div class=\"popover-content\"\n" +
	    "        uib-tooltip-template-transclude=\"contentExp()\"\n" +
	    "        tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/popover/popover.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
	    "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/progressbar/bar.html",
	    "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" +
	    "");
	}]);

	angular.module("uib/template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/progressbar/progress.html",
	    "<div class=\"progress\" ng-transclude aria-labelledby=\"{{::title}}\"></div>");
	}]);

	angular.module("uib/template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/progressbar/progressbar.html",
	    "<div class=\"progress\">\n" +
	    "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/rating/rating.html",
	    "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\" aria-valuetext=\"{{title}}\">\n" +
	    "    <span ng-repeat-start=\"r in range track by $index\" class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" +
	    "    <i ng-repeat-end ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\" ng-attr-title=\"{{r.title}}\"></i>\n" +
	    "</span>\n" +
	    "");
	}]);

	angular.module("uib/template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tabs/tab.html",
	    "<li ng-class=\"[{active: active, disabled: disabled}, classes]\" class=\"uib-tab nav-item\">\n" +
	    "  <a href ng-click=\"select($event)\" class=\"nav-link\" uib-tab-heading-transclude>{{heading}}</a>\n" +
	    "</li>\n" +
	    "");
	}]);

	angular.module("uib/template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tabs/tabset.html",
	    "<div>\n" +
	    "  <ul class=\"nav nav-{{tabset.type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
	    "  <div class=\"tab-content\">\n" +
	    "    <div class=\"tab-pane\"\n" +
	    "         ng-repeat=\"tab in tabset.tabs\"\n" +
	    "         ng-class=\"{active: tabset.active === tab.index}\"\n" +
	    "         uib-tab-content-transclude=\"tab\">\n" +
	    "    </div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/timepicker/timepicker.html",
	    "<table class=\"uib-timepicker\">\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
	    "      <td class=\"uib-increment hours\"><a ng-click=\"incrementHours()\" ng-class=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementHours()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td>&nbsp;</td>\n" +
	    "      <td class=\"uib-increment minutes\"><a ng-click=\"incrementMinutes()\" ng-class=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementMinutes()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
	    "      <td ng-show=\"showSeconds\" class=\"uib-increment seconds\"><a ng-click=\"incrementSeconds()\" ng-class=\"{disabled: noIncrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementSeconds()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td ng-show=\"showMeridian\"></td>\n" +
	    "    </tr>\n" +
	    "    <tr>\n" +
	    "      <td class=\"form-group uib-time hours\" ng-class=\"{'has-error': invalidHours}\">\n" +
	    "        <input style=\"width:50px;\" type=\"text\" placeholder=\"HH\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementHours()\" ng-blur=\"blur()\">\n" +
	    "      </td>\n" +
	    "      <td class=\"uib-separator\">:</td>\n" +
	    "      <td class=\"form-group uib-time minutes\" ng-class=\"{'has-error': invalidMinutes}\">\n" +
	    "        <input style=\"width:50px;\" type=\"text\" placeholder=\"MM\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementMinutes()\" ng-blur=\"blur()\">\n" +
	    "      </td>\n" +
	    "      <td ng-show=\"showSeconds\" class=\"uib-separator\">:</td>\n" +
	    "      <td class=\"form-group uib-time seconds\" ng-class=\"{'has-error': invalidSeconds}\" ng-show=\"showSeconds\">\n" +
	    "        <input style=\"width:50px;\" type=\"text\" placeholder=\"SS\" ng-model=\"seconds\" ng-change=\"updateSeconds()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementSeconds()\" ng-blur=\"blur()\">\n" +
	    "      </td>\n" +
	    "      <td ng-show=\"showMeridian\" class=\"uib-time am-pm\"><button type=\"button\" ng-class=\"{disabled: noToggleMeridian()}\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\" ng-disabled=\"noToggleMeridian()\" tabindex=\"{{::tabindex}}\">{{meridian}}</button></td>\n" +
	    "    </tr>\n" +
	    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
	    "      <td class=\"uib-decrement hours\"><a ng-click=\"decrementHours()\" ng-class=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementHours()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td>&nbsp;</td>\n" +
	    "      <td class=\"uib-decrement minutes\"><a ng-click=\"decrementMinutes()\" ng-class=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementMinutes()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
	    "      <td ng-show=\"showSeconds\" class=\"uib-decrement seconds\"><a ng-click=\"decrementSeconds()\" ng-class=\"{disabled: noDecrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementSeconds()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td ng-show=\"showMeridian\"></td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("uib/template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/typeahead/typeahead-match.html",
	    "<a href\n" +
	    "   tabindex=\"-1\"\n" +
	    "   ng-bind-html=\"match.label | uibTypeaheadHighlight:query\"\n" +
	    "   ng-attr-title=\"{{match.label}}\"></a>\n" +
	    "");
	}]);

	angular.module("uib/template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/typeahead/typeahead-popup.html",
	    "<ul class=\"dropdown-menu\" ng-show=\"isOpen() && !moveInProgress\" ng-style=\"{top: position().top+'px', left: position().left+'px'}\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" +
	    "    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index, $event)\" role=\"option\" id=\"{{::match.id}}\">\n" +
	    "        <div uib-typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
	    "    </li>\n" +
	    "</ul>\n" +
	    "");
	}]);
	angular.module('ui.bootstrap.carousel').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'); angular.$$uibCarouselCss = true; });
	angular.module('ui.bootstrap.datepicker').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibDatepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'); angular.$$uibDatepickerCss = true; });
	angular.module('ui.bootstrap.position').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'); angular.$$uibPositionCss = true; });
	angular.module('ui.bootstrap.datepickerPopup').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibDatepickerpopupCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'); angular.$$uibDatepickerpopupCss = true; });
	angular.module('ui.bootstrap.tooltip').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTooltipCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'); angular.$$uibTooltipCss = true; });
	angular.module('ui.bootstrap.timepicker').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTimepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-time input{width:50px;}</style>'); angular.$$uibTimepickerCss = true; });
	angular.module('ui.bootstrap.typeahead').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTypeaheadCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'); angular.$$uibTypeaheadCss = true; });

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(201);
	module.exports = 'firebase';


/***/ },
/* 201 */
/***/ function(module, exports) {

	/*!
	 * AngularFire is the officially supported AngularJS binding for Firebase. Firebase
	 * is a full backend so you don't need servers to build your Angular app. AngularFire
	 * provides you with the $firebase service which allows you to easily keep your $scope
	 * variables in sync with your Firebase backend.
	 *
	 * AngularFire 1.2.0
	 * https://github.com/firebase/angularfire/
	 * Date: 03/28/2016
	 * License: MIT
	 */
	(function(exports) {
	  "use strict";

	// Define the `firebase` module under which all AngularFire
	// services will live.
	  angular.module("firebase", [])
	    //todo use $window
	    .value("Firebase", exports.Firebase);

	})(window);
	(function() {
	  'use strict';
	  /**
	   * Creates and maintains a synchronized list of data. This is a pseudo-read-only array. One should
	   * not call splice(), push(), pop(), et al directly on this array, but should instead use the
	   * $remove and $add methods.
	   *
	   * It is acceptable to .sort() this array, but it is important to use this in conjunction with
	   * $watch(), so that it will be re-sorted any time the server data changes. Examples of this are
	   * included in the $watch documentation.
	   *
	   * Internally, the $firebase object depends on this class to provide several $$ (i.e. protected)
	   * methods, which it invokes to notify the array whenever a change has been made at the server:
	   *    $$added - called whenever a child_added event occurs
	   *    $$updated - called whenever a child_changed event occurs
	   *    $$moved - called whenever a child_moved event occurs
	   *    $$removed - called whenever a child_removed event occurs
	   *    $$error - called when listeners are canceled due to a security error
	   *    $$process - called immediately after $$added/$$updated/$$moved/$$removed
	   *                (assuming that these methods do not abort by returning false or null)
	   *                to splice/manipulate the array and invoke $$notify
	   *
	   * Additionally, these methods may be of interest to devs extending this class:
	   *    $$notify - triggers notifications to any $watch listeners, called by $$process
	   *    $$getKey - determines how to look up a record's key (returns $id by default)
	   *
	   * Instead of directly modifying this class, one should generally use the $extend
	   * method to add or change how methods behave. $extend modifies the prototype of
	   * the array class by returning a clone of $firebaseArray.
	   *
	   * <pre><code>
	   * var ExtendedArray = $firebaseArray.$extend({
	   *    // add a new method to the prototype
	   *    foo: function() { return 'bar'; },
	   *
	   *    // change how records are created
	   *    $$added: function(snap, prevChild) {
	   *       return new Widget(snap, prevChild);
	   *    },
	   *
	   *    // change how records are updated
	   *    $$updated: function(snap) {
	   *      return this.$getRecord(snap.key()).update(snap);
	   *    }
	   * });
	   *
	   * var list = new ExtendedArray(ref);
	   * </code></pre>
	   */
	  angular.module('firebase').factory('$firebaseArray', ["$log", "$firebaseUtils", "$q",
	    function($log, $firebaseUtils, $q) {
	      /**
	       * This constructor should probably never be called manually. It is used internally by
	       * <code>$firebase.$asArray()</code>.
	       *
	       * @param {Firebase} ref
	       * @returns {Array}
	       * @constructor
	       */
	      function FirebaseArray(ref) {
	        if( !(this instanceof FirebaseArray) ) {
	          return new FirebaseArray(ref);
	        }
	        var self = this;
	        this._observers = [];
	        this.$list = [];
	        this._ref = ref;
	        this._sync = new ArraySyncManager(this);

	        $firebaseUtils.assertValidRef(ref, 'Must pass a valid Firebase reference ' +
	        'to $firebaseArray (not a string or URL)');

	        // indexCache is a weak hashmap (a lazy list) of keys to array indices,
	        // items are not guaranteed to stay up to date in this list (since the data
	        // array can be manually edited without calling the $ methods) and it should
	        // always be used with skepticism regarding whether it is accurate
	        // (see $indexFor() below for proper usage)
	        this._indexCache = {};

	        // Array.isArray will not work on objects which extend the Array class.
	        // So instead of extending the Array class, we just return an actual array.
	        // However, it's still possible to extend FirebaseArray and have the public methods
	        // appear on the array object. We do this by iterating the prototype and binding
	        // any method that is not prefixed with an underscore onto the final array.
	        $firebaseUtils.getPublicMethods(self, function(fn, key) {
	          self.$list[key] = fn.bind(self);
	        });

	        this._sync.init(this.$list);

	        return this.$list;
	      }

	      FirebaseArray.prototype = {
	        /**
	         * Create a new record with a unique ID and add it to the end of the array.
	         * This should be used instead of Array.prototype.push, since those changes will not be
	         * synchronized with the server.
	         *
	         * Any value, including a primitive, can be added in this way. Note that when the record
	         * is created, the primitive value would be stored in $value (records are always objects
	         * by default).
	         *
	         * Returns a future which is resolved when the data has successfully saved to the server.
	         * The resolve callback will be passed a Firebase ref representing the new data element.
	         *
	         * @param data
	         * @returns a promise resolved after data is added
	         */
	        $add: function(data) {
	          this._assertNotDestroyed('$add');
	          var def = $firebaseUtils.defer();
	          var ref = this.$ref().ref().push();
	          ref.set($firebaseUtils.toJSON(data), $firebaseUtils.makeNodeResolver(def));
	          return def.promise.then(function() {
	            return ref;
	          });
	        },

	        /**
	         * Pass either an item in the array or the index of an item and it will be saved back
	         * to Firebase. While the array is read-only and its structure should not be changed,
	         * it is okay to modify properties on the objects it contains and then save those back
	         * individually.
	         *
	         * Returns a future which is resolved when the data has successfully saved to the server.
	         * The resolve callback will be passed a Firebase ref representing the saved element.
	         * If passed an invalid index or an object which is not a record in this array,
	         * the promise will be rejected.
	         *
	         * @param {int|object} indexOrItem
	         * @returns a promise resolved after data is saved
	         */
	        $save: function(indexOrItem) {
	          this._assertNotDestroyed('$save');
	          var self = this;
	          var item = self._resolveItem(indexOrItem);
	          var key = self.$keyAt(item);
	          if( key !== null ) {
	            var ref = self.$ref().ref().child(key);
	            var data = $firebaseUtils.toJSON(item);
	            return $firebaseUtils.doSet(ref, data).then(function() {
	              self.$$notify('child_changed', key);
	              return ref;
	            });
	          }
	          else {
	            return $firebaseUtils.reject('Invalid record; could determine key for '+indexOrItem);
	          }
	        },

	        /**
	         * Pass either an existing item in this array or the index of that item and it will
	         * be removed both locally and in Firebase. This should be used in place of
	         * Array.prototype.splice for removing items out of the array, as calling splice
	         * will not update the value on the server.
	         *
	         * Returns a future which is resolved when the data has successfully removed from the
	         * server. The resolve callback will be passed a Firebase ref representing the deleted
	         * element. If passed an invalid index or an object which is not a record in this array,
	         * the promise will be rejected.
	         *
	         * @param {int|object} indexOrItem
	         * @returns a promise which resolves after data is removed
	         */
	        $remove: function(indexOrItem) {
	          this._assertNotDestroyed('$remove');
	          var key = this.$keyAt(indexOrItem);
	          if( key !== null ) {
	            var ref = this.$ref().ref().child(key);
	            return $firebaseUtils.doRemove(ref).then(function() {
	              return ref;
	            });
	          }
	          else {
	            return $firebaseUtils.reject('Invalid record; could not determine key for '+indexOrItem);
	          }
	        },

	        /**
	         * Given an item in this array or the index of an item in the array, this returns the
	         * Firebase key (record.$id) for that record. If passed an invalid key or an item which
	         * does not exist in this array, it will return null.
	         *
	         * @param {int|object} indexOrItem
	         * @returns {null|string}
	         */
	        $keyAt: function(indexOrItem) {
	          var item = this._resolveItem(indexOrItem);
	          return this.$$getKey(item);
	        },

	        /**
	         * The inverse of $keyAt, this method takes a Firebase key (record.$id) and returns the
	         * index in the array where that record is stored. If the record is not in the array,
	         * this method returns -1.
	         *
	         * @param {String} key
	         * @returns {int} -1 if not found
	         */
	        $indexFor: function(key) {
	          var self = this;
	          var cache = self._indexCache;
	          // evaluate whether our key is cached and, if so, whether it is up to date
	          if( !cache.hasOwnProperty(key) || self.$keyAt(cache[key]) !== key ) {
	            // update the hashmap
	            var pos = self.$list.findIndex(function(rec) { return self.$$getKey(rec) === key; });
	            if( pos !== -1 ) {
	              cache[key] = pos;
	            }
	          }
	          return cache.hasOwnProperty(key)? cache[key] : -1;
	        },

	        /**
	         * The loaded method is invoked after the initial batch of data arrives from the server.
	         * When this resolves, all data which existed prior to calling $asArray() is now cached
	         * locally in the array.
	         *
	         * As a shortcut is also possible to pass resolve/reject methods directly into this
	         * method just as they would be passed to .then()
	         *
	         * @param {Function} [resolve]
	         * @param {Function} [reject]
	         * @returns a promise
	         */
	        $loaded: function(resolve, reject) {
	          var promise = this._sync.ready();
	          if( arguments.length ) {
	            // allow this method to be called just like .then
	            // by passing any arguments on to .then
	            promise = promise.then.call(promise, resolve, reject);
	          }
	          return promise;
	        },

	        /**
	         * @returns {Firebase} the original Firebase ref used to create this object.
	         */
	        $ref: function() { return this._ref; },

	        /**
	         * Listeners passed into this method are notified whenever a new change (add, updated,
	         * move, remove) is received from the server. Each invocation is sent an object
	         * containing <code>{ type: 'child_added|child_updated|child_moved|child_removed',
	         * key: 'key_of_item_affected'}</code>
	         *
	         * Additionally, added and moved events receive a prevChild parameter, containing the
	         * key of the item before this one in the array.
	         *
	         * This method returns a function which can be invoked to stop observing events.
	         *
	         * @param {Function} cb
	         * @param {Object} [context]
	         * @returns {Function} used to stop observing
	         */
	        $watch: function(cb, context) {
	          var list = this._observers;
	          list.push([cb, context]);
	          // an off function for cancelling the listener
	          return function() {
	            var i = list.findIndex(function(parts) {
	              return parts[0] === cb && parts[1] === context;
	            });
	            if( i > -1 ) {
	              list.splice(i, 1);
	            }
	          };
	        },

	        /**
	         * Informs $firebase to stop sending events and clears memory being used
	         * by this array (delete's its local content).
	         */
	        $destroy: function(err) {
	          if( !this._isDestroyed ) {
	            this._isDestroyed = true;
	            this._sync.destroy(err);
	            this.$list.length = 0;
	          }
	        },

	        /**
	         * Returns the record for a given Firebase key (record.$id). If the record is not found
	         * then returns null.
	         *
	         * @param {string} key
	         * @returns {Object|null} a record in this array
	         */
	        $getRecord: function(key) {
	          var i = this.$indexFor(key);
	          return i > -1? this.$list[i] : null;
	        },

	        /**
	         * Called to inform the array when a new item has been added at the server.
	         * This method should return the record (an object) that will be passed into $$process
	         * along with the add event. Alternately, the record will be skipped if this method returns
	         * a falsey value.
	         *
	         * @param {object} snap a Firebase snapshot
	         * @param {string} prevChild
	         * @return {object} the record to be inserted into the array
	         * @protected
	         */
	        $$added: function(snap/*, prevChild*/) {
	          // check to make sure record does not exist
	          var i = this.$indexFor($firebaseUtils.getKey(snap));
	          if( i === -1 ) {
	            // parse data and create record
	            var rec = snap.val();
	            if( !angular.isObject(rec) ) {
	              rec = { $value: rec };
	            }
	            rec.$id = $firebaseUtils.getKey(snap);
	            rec.$priority = snap.getPriority();
	            $firebaseUtils.applyDefaults(rec, this.$$defaults);

	            return rec;
	          }
	          return false;
	        },

	        /**
	         * Called whenever an item is removed at the server.
	         * This method does not physically remove the objects, but instead
	         * returns a boolean indicating whether it should be removed (and
	         * taking any other desired actions before the remove completes).
	         *
	         * @param {object} snap a Firebase snapshot
	         * @return {boolean} true if item should be removed
	         * @protected
	         */
	        $$removed: function(snap) {
	          return this.$indexFor($firebaseUtils.getKey(snap)) > -1;
	        },

	        /**
	         * Called whenever an item is changed at the server.
	         * This method should apply the changes, including changes to data
	         * and to $priority, and then return true if any changes were made.
	         *
	         * If this method returns false, then $$process will not be invoked,
	         * which means that $$notify will not take place and no $watch events
	         * will be triggered.
	         *
	         * @param {object} snap a Firebase snapshot
	         * @return {boolean} true if any data changed
	         * @protected
	         */
	        $$updated: function(snap) {
	          var changed = false;
	          var rec = this.$getRecord($firebaseUtils.getKey(snap));
	          if( angular.isObject(rec) ) {
	            // apply changes to the record
	            changed = $firebaseUtils.updateRec(rec, snap);
	            $firebaseUtils.applyDefaults(rec, this.$$defaults);
	          }
	          return changed;
	        },

	        /**
	         * Called whenever an item changes order (moves) on the server.
	         * This method should set $priority to the updated value and return true if
	         * the record should actually be moved. It should not actually apply the move
	         * operation.
	         *
	         * If this method returns false, then the record will not be moved in the array
	         * and no $watch listeners will be notified. (When true, $$process is invoked
	         * which invokes $$notify)
	         *
	         * @param {object} snap a Firebase snapshot
	         * @param {string} prevChild
	         * @protected
	         */
	        $$moved: function(snap/*, prevChild*/) {
	          var rec = this.$getRecord($firebaseUtils.getKey(snap));
	          if( angular.isObject(rec) ) {
	            rec.$priority = snap.getPriority();
	            return true;
	          }
	          return false;
	        },

	        /**
	         * Called whenever a security error or other problem causes the listeners to become
	         * invalid. This is generally an unrecoverable error.
	         *
	         * @param {Object} err which will have a `code` property and possibly a `message`
	         * @protected
	         */
	        $$error: function(err) {
	          $log.error(err);
	          this.$destroy(err);
	        },

	        /**
	         * Returns ID for a given record
	         * @param {object} rec
	         * @returns {string||null}
	         * @protected
	         */
	        $$getKey: function(rec) {
	          return angular.isObject(rec)? rec.$id : null;
	        },

	        /**
	         * Handles placement of recs in the array, sending notifications,
	         * and other internals. Called by the synchronization process
	         * after $$added, $$updated, $$moved, and $$removed return a truthy value.
	         *
	         * @param {string} event one of child_added, child_removed, child_moved, or child_changed
	         * @param {object} rec
	         * @param {string} [prevChild]
	         * @protected
	         */
	        $$process: function(event, rec, prevChild) {
	          var key = this.$$getKey(rec);
	          var changed = false;
	          var curPos;
	          switch(event) {
	            case 'child_added':
	              curPos = this.$indexFor(key);
	              break;
	            case 'child_moved':
	              curPos = this.$indexFor(key);
	              this._spliceOut(key);
	              break;
	            case 'child_removed':
	              // remove record from the array
	              changed = this._spliceOut(key) !== null;
	              break;
	            case 'child_changed':
	              changed = true;
	              break;
	            default:
	              throw new Error('Invalid event type: ' + event);
	          }
	          if( angular.isDefined(curPos) ) {
	            // add it to the array
	            changed = this._addAfter(rec, prevChild) !== curPos;
	          }
	          if( changed ) {
	            // send notifications to anybody monitoring $watch
	            this.$$notify(event, key, prevChild);
	          }
	          return changed;
	        },

	        /**
	         * Used to trigger notifications for listeners registered using $watch. This method is
	         * typically invoked internally by the $$process method.
	         *
	         * @param {string} event
	         * @param {string} key
	         * @param {string} [prevChild]
	         * @protected
	         */
	        $$notify: function(event, key, prevChild) {
	          var eventData = {event: event, key: key};
	          if( angular.isDefined(prevChild) ) {
	            eventData.prevChild = prevChild;
	          }
	          angular.forEach(this._observers, function(parts) {
	            parts[0].call(parts[1], eventData);
	          });
	        },

	        /**
	         * Used to insert a new record into the array at a specific position. If prevChild is
	         * null, is inserted first, if prevChild is not found, it is inserted last, otherwise,
	         * it goes immediately after prevChild.
	         *
	         * @param {object} rec
	         * @param {string|null} prevChild
	         * @private
	         */
	        _addAfter: function(rec, prevChild) {
	          var i;
	          if( prevChild === null ) {
	            i = 0;
	          }
	          else {
	            i = this.$indexFor(prevChild)+1;
	            if( i === 0 ) { i = this.$list.length; }
	          }
	          this.$list.splice(i, 0, rec);
	          this._indexCache[this.$$getKey(rec)] = i;
	          return i;
	        },

	        /**
	         * Removes a record from the array by calling splice. If the item is found
	         * this method returns it. Otherwise, this method returns null.
	         *
	         * @param {string} key
	         * @returns {object|null}
	         * @private
	         */
	        _spliceOut: function(key) {
	          var i = this.$indexFor(key);
	          if( i > -1 ) {
	            delete this._indexCache[key];
	            return this.$list.splice(i, 1)[0];
	          }
	          return null;
	        },

	        /**
	         * Resolves a variable which may contain an integer or an item that exists in this array.
	         * Returns the item or null if it does not exist.
	         *
	         * @param indexOrItem
	         * @returns {*}
	         * @private
	         */
	        _resolveItem: function(indexOrItem) {
	          var list = this.$list;
	          if( angular.isNumber(indexOrItem) && indexOrItem >= 0 && list.length >= indexOrItem ) {
	            return list[indexOrItem];
	          }
	          else if( angular.isObject(indexOrItem) ) {
	            // it must be an item in this array; it's not sufficient for it just to have
	            // a $id or even a $id that is in the array, it must be an actual record
	            // the fastest way to determine this is to use $getRecord (to avoid iterating all recs)
	            // and compare the two
	            var key = this.$$getKey(indexOrItem);
	            var rec = this.$getRecord(key);
	            return rec === indexOrItem? rec : null;
	          }
	          return null;
	        },

	        /**
	         * Throws an error if $destroy has been called. Should be used for any function
	         * which tries to write data back to $firebase.
	         * @param {string} method
	         * @private
	         */
	        _assertNotDestroyed: function(method) {
	          if( this._isDestroyed ) {
	            throw new Error('Cannot call ' + method + ' method on a destroyed $firebaseArray object');
	          }
	        }
	      };

	      /**
	       * This method allows FirebaseArray to be inherited by child classes. Methods passed into this
	       * function will be added onto the array's prototype. They can override existing methods as
	       * well.
	       *
	       * In addition to passing additional methods, it is also possible to pass in a class function.
	       * The prototype on that class function will be preserved, and it will inherit from
	       * FirebaseArray. It's also possible to do both, passing a class to inherit and additional
	       * methods to add onto the prototype.
	       *
	       *  <pre><code>
	       * var ExtendedArray = $firebaseArray.$extend({
	       *    // add a method onto the prototype that sums all items in the array
	       *    getSum: function() {
	       *       var ct = 0;
	       *       angular.forEach(this.$list, function(rec) { ct += rec.x; });
	        *      return ct;
	       *    }
	       * });
	       *
	       * // use our new factory in place of $firebaseArray
	       * var list = new ExtendedArray(ref);
	       * </code></pre>
	       *
	       * @param {Function} [ChildClass] a child class which should inherit FirebaseArray
	       * @param {Object} [methods] a list of functions to add onto the prototype
	       * @returns {Function} a child class suitable for use with $firebase (this will be ChildClass if provided)
	       * @static
	       */
	      FirebaseArray.$extend = function(ChildClass, methods) {
	        if( arguments.length === 1 && angular.isObject(ChildClass) ) {
	          methods = ChildClass;
	          ChildClass = function(ref) {
	            if( !(this instanceof ChildClass) ) {
	              return new ChildClass(ref);
	            }
	            FirebaseArray.apply(this, arguments);
	            return this.$list;
	          };
	        }
	        return $firebaseUtils.inherit(ChildClass, FirebaseArray, methods);
	      };

	      function ArraySyncManager(firebaseArray) {
	        function destroy(err) {
	          if( !sync.isDestroyed ) {
	            sync.isDestroyed = true;
	            var ref = firebaseArray.$ref();
	            ref.off('child_added', created);
	            ref.off('child_moved', moved);
	            ref.off('child_changed', updated);
	            ref.off('child_removed', removed);
	            firebaseArray = null;
	            initComplete(err||'destroyed');
	          }
	        }

	        function init($list) {
	          var ref = firebaseArray.$ref();

	          // listen for changes at the Firebase instance
	          ref.on('child_added', created, error);
	          ref.on('child_moved', moved, error);
	          ref.on('child_changed', updated, error);
	          ref.on('child_removed', removed, error);

	          // determine when initial load is completed
	          ref.once('value', function(snap) {
	            if (angular.isArray(snap.val())) {
	              $log.warn('Storing data using array indices in Firebase can result in unexpected behavior. See https://www.firebase.com/docs/web/guide/understanding-data.html#section-arrays-in-firebase for more information.');
	            }

	            initComplete(null, $list);
	          }, initComplete);
	        }

	        // call initComplete(), do not call this directly
	        function _initComplete(err, result) {
	          if( !isResolved ) {
	            isResolved = true;
	            if( err ) { def.reject(err); }
	            else { def.resolve(result); }
	          }
	        }

	        var def     = $firebaseUtils.defer();
	        var created = function(snap, prevChild) {
	          waitForResolution(firebaseArray.$$added(snap, prevChild), function(rec) {
	            firebaseArray.$$process('child_added', rec, prevChild);
	          });
	        };
	        var updated = function(snap) {
	          var rec = firebaseArray.$getRecord($firebaseUtils.getKey(snap));
	          if( rec ) {
	            waitForResolution(firebaseArray.$$updated(snap), function() {
	              firebaseArray.$$process('child_changed', rec);
	            });
	          }
	        };
	        var moved   = function(snap, prevChild) {
	          var rec = firebaseArray.$getRecord($firebaseUtils.getKey(snap));
	          if( rec ) {
	            waitForResolution(firebaseArray.$$moved(snap, prevChild), function() {
	              firebaseArray.$$process('child_moved', rec, prevChild);
	            });
	          }
	        };
	        var removed = function(snap) {
	          var rec = firebaseArray.$getRecord($firebaseUtils.getKey(snap));
	          if( rec ) {
	            waitForResolution(firebaseArray.$$removed(snap), function() {
	               firebaseArray.$$process('child_removed', rec);
	            });
	          }
	        };

	        function waitForResolution(maybePromise, callback) {
	          var promise = $q.when(maybePromise);
	          promise.then(function(result){
	            if (result) {
	              callback(result);
	            }
	          });
	          if (!isResolved) {
	            resolutionPromises.push(promise);
	          }
	        }

	        var resolutionPromises = [];
	        var isResolved = false;
	        var error   = $firebaseUtils.batch(function(err) {
	          _initComplete(err);
	          if( firebaseArray ) {
	            firebaseArray.$$error(err);
	          }
	        });
	        var initComplete = $firebaseUtils.batch(_initComplete);

	        var sync = {
	          destroy: destroy,
	          isDestroyed: false,
	          init: init,
	          ready: function() { return def.promise.then(function(result){
	            return $q.all(resolutionPromises).then(function(){
	              return result;
	            });
	          }); }
	        };

	        return sync;
	      }

	      return FirebaseArray;
	    }
	  ]);

	  /** @deprecated */
	  angular.module('firebase').factory('$FirebaseArray', ['$log', '$firebaseArray',
	    function($log, $firebaseArray) {
	      return function() {
	        $log.warn('$FirebaseArray has been renamed. Use $firebaseArray instead.');
	        return $firebaseArray.apply(null, arguments);
	      };
	    }
	  ]);
	})();

	(function() {
	  'use strict';
	  var FirebaseAuth;

	  // Define a service which provides user authentication and management.
	  angular.module('firebase').factory('$firebaseAuth', [
	    '$q', '$firebaseUtils', function($q, $firebaseUtils) {
	      /**
	       * This factory returns an object allowing you to manage the client's authentication state.
	       *
	       * @param {Firebase} ref A Firebase reference to authenticate.
	       * @return {object} An object containing methods for authenticating clients, retrieving
	       * authentication state, and managing users.
	       */
	      return function(ref) {
	        var auth = new FirebaseAuth($q, $firebaseUtils, ref);
	        return auth.construct();
	      };
	    }
	  ]);

	  FirebaseAuth = function($q, $firebaseUtils, ref) {
	    this._q = $q;
	    this._utils = $firebaseUtils;
	    if (typeof ref === 'string') {
	      throw new Error('Please provide a Firebase reference instead of a URL when creating a `$firebaseAuth` object.');
	    }
	    this._ref = ref;
	    this._initialAuthResolver = this._initAuthResolver();
	  };

	  FirebaseAuth.prototype = {
	    construct: function() {
	      this._object = {
	        // Authentication methods
	        $authWithCustomToken: this.authWithCustomToken.bind(this),
	        $authAnonymously: this.authAnonymously.bind(this),
	        $authWithPassword: this.authWithPassword.bind(this),
	        $authWithOAuthPopup: this.authWithOAuthPopup.bind(this),
	        $authWithOAuthRedirect: this.authWithOAuthRedirect.bind(this),
	        $authWithOAuthToken: this.authWithOAuthToken.bind(this),
	        $unauth: this.unauth.bind(this),

	        // Authentication state methods
	        $onAuth: this.onAuth.bind(this),
	        $getAuth: this.getAuth.bind(this),
	        $requireAuth: this.requireAuth.bind(this),
	        $waitForAuth: this.waitForAuth.bind(this),

	        // User management methods
	        $createUser: this.createUser.bind(this),
	        $changePassword: this.changePassword.bind(this),
	        $changeEmail: this.changeEmail.bind(this),
	        $removeUser: this.removeUser.bind(this),
	        $resetPassword: this.resetPassword.bind(this)
	      };

	      return this._object;
	    },


	    /********************/
	    /*  Authentication  */
	    /********************/

	    /**
	     * Authenticates the Firebase reference with a custom authentication token.
	     *
	     * @param {string} authToken An authentication token or a Firebase Secret. A Firebase Secret
	     * should only be used for authenticating a server process and provides full read / write
	     * access to the entire Firebase.
	     * @param {Object} [options] An object containing optional client arguments, such as configuring
	     * session persistence.
	     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
	     */
	    authWithCustomToken: function(authToken, options) {
	      var deferred = this._q.defer();

	      try {
	        this._ref.authWithCustomToken(authToken, this._utils.makeNodeResolver(deferred), options);
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Authenticates the Firebase reference anonymously.
	     *
	     * @param {Object} [options] An object containing optional client arguments, such as configuring
	     * session persistence.
	     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
	     */
	    authAnonymously: function(options) {
	      var deferred = this._q.defer();

	      try {
	        this._ref.authAnonymously(this._utils.makeNodeResolver(deferred), options);
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Authenticates the Firebase reference with an email/password user.
	     *
	     * @param {Object} credentials An object containing email and password attributes corresponding
	     * to the user account.
	     * @param {Object} [options] An object containing optional client arguments, such as configuring
	     * session persistence.
	     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
	     */
	    authWithPassword: function(credentials, options) {
	      var deferred = this._q.defer();

	      try {
	        this._ref.authWithPassword(credentials, this._utils.makeNodeResolver(deferred), options);
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Authenticates the Firebase reference with the OAuth popup flow.
	     *
	     * @param {string} provider The unique string identifying the OAuth provider to authenticate
	     * with, e.g. google.
	     * @param {Object} [options] An object containing optional client arguments, such as configuring
	     * session persistence.
	     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
	     */
	    authWithOAuthPopup: function(provider, options) {
	      var deferred = this._q.defer();

	      try {
	        this._ref.authWithOAuthPopup(provider, this._utils.makeNodeResolver(deferred), options);
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Authenticates the Firebase reference with the OAuth redirect flow.
	     *
	     * @param {string} provider The unique string identifying the OAuth provider to authenticate
	     * with, e.g. google.
	     * @param {Object} [options] An object containing optional client arguments, such as configuring
	     * session persistence.
	     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
	     */
	    authWithOAuthRedirect: function(provider, options) {
	      var deferred = this._q.defer();

	      try {
	        this._ref.authWithOAuthRedirect(provider, this._utils.makeNodeResolver(deferred), options);
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Authenticates the Firebase reference with an OAuth token.
	     *
	     * @param {string} provider The unique string identifying the OAuth provider to authenticate
	     * with, e.g. google.
	     * @param {string|Object} credentials Either a string, such as an OAuth 2.0 access token, or an
	     * Object of key / value pairs, such as a set of OAuth 1.0a credentials.
	     * @param {Object} [options] An object containing optional client arguments, such as configuring
	     * session persistence.
	     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
	     */
	    authWithOAuthToken: function(provider, credentials, options) {
	      var deferred = this._q.defer();

	      try {
	        this._ref.authWithOAuthToken(provider, credentials, this._utils.makeNodeResolver(deferred), options);
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Unauthenticates the Firebase reference.
	     */
	    unauth: function() {
	      if (this.getAuth() !== null) {
	        this._ref.unauth();
	      }
	    },


	    /**************************/
	    /*  Authentication State  */
	    /**************************/
	    /**
	     * Asynchronously fires the provided callback with the current authentication data every time
	     * the authentication data changes. It also fires as soon as the authentication data is
	     * retrieved from the server.
	     *
	     * @param {function} callback A callback that fires when the client's authenticate state
	     * changes. If authenticated, the callback will be passed an object containing authentication
	     * data according to the provider used to authenticate. Otherwise, it will be passed null.
	     * @param {string} [context] If provided, this object will be used as this when calling your
	     * callback.
	     * @return {function} A function which can be used to deregister the provided callback.
	     */
	    onAuth: function(callback, context) {
	      var self = this;

	      var fn = this._utils.debounce(callback, context, 0);
	      this._ref.onAuth(fn);

	      // Return a method to detach the `onAuth()` callback.
	      return function() {
	        self._ref.offAuth(fn);
	      };
	    },

	    /**
	     * Synchronously retrieves the current authentication data.
	     *
	     * @return {Object} The client's authentication data.
	     */
	    getAuth: function() {
	      return this._ref.getAuth();
	    },

	    /**
	     * Helper onAuth() callback method for the two router-related methods.
	     *
	     * @param {boolean} rejectIfAuthDataIsNull Determines if the returned promise should be
	     * resolved or rejected upon an unauthenticated client.
	     * @return {Promise<Object>} A promise fulfilled with the client's authentication state or
	     * rejected if the client is unauthenticated and rejectIfAuthDataIsNull is true.
	     */
	    _routerMethodOnAuthPromise: function(rejectIfAuthDataIsNull) {
	      var ref = this._ref, utils = this._utils;
	      // wait for the initial auth state to resolve; on page load we have to request auth state
	      // asynchronously so we don't want to resolve router methods or flash the wrong state
	      return this._initialAuthResolver.then(function() {
	        // auth state may change in the future so rather than depend on the initially resolved state
	        // we also check the auth data (synchronously) if a new promise is requested, ensuring we resolve
	        // to the current auth state and not a stale/initial state
	        var authData = ref.getAuth(), res = null;
	        if (rejectIfAuthDataIsNull && authData === null) {
	          res = utils.reject("AUTH_REQUIRED");
	        }
	        else {
	          res = utils.resolve(authData);
	        }
	        return res;
	      });
	    },

	    /**
	     * Helper that returns a promise which resolves when the initial auth state has been
	     * fetched from the Firebase server. This never rejects and resolves to undefined.
	     *
	     * @return {Promise<Object>} A promise fulfilled when the server returns initial auth state.
	     */
	    _initAuthResolver: function() {
	      var ref = this._ref;
	      return this._utils.promise(function(resolve) {
	        function callback() {
	          // Turn off this onAuth() callback since we just needed to get the authentication data once.
	          ref.offAuth(callback);
	          resolve();
	        }
	        ref.onAuth(callback);
	      });
	    },

	    /**
	     * Utility method which can be used in a route's resolve() method to require that a route has
	     * a logged in client.
	     *
	     * @returns {Promise<Object>} A promise fulfilled with the client's current authentication
	     * state or rejected if the client is not authenticated.
	     */
	    requireAuth: function() {
	      return this._routerMethodOnAuthPromise(true);
	    },

	    /**
	     * Utility method which can be used in a route's resolve() method to grab the current
	     * authentication data.
	     *
	     * @returns {Promise<Object|null>} A promise fulfilled with the client's current authentication
	     * state, which will be null if the client is not authenticated.
	     */
	    waitForAuth: function() {
	      return this._routerMethodOnAuthPromise(false);
	    },


	    /*********************/
	    /*  User Management  */
	    /*********************/
	    /**
	     * Creates a new email/password user. Note that this function only creates the user, if you
	     * wish to log in as the newly created user, call $authWithPassword() after the promise for
	     * this method has been resolved.
	     *
	     * @param {Object} credentials An object containing the email and password of the user to create.
	     * @return {Promise<Object>} A promise fulfilled with the user object, which contains the
	     * uid of the created user.
	     */
	    createUser: function(credentials) {
	      var deferred = this._q.defer();

	      // Throw an error if they are trying to pass in separate string arguments
	      if (typeof credentials === "string") {
	        throw new Error("$createUser() expects an object containing 'email' and 'password', but got a string.");
	      }

	      try {
	        this._ref.createUser(credentials, this._utils.makeNodeResolver(deferred));
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Changes the password for an email/password user.
	     *
	     * @param {Object} credentials An object containing the email, old password, and new password of
	     * the user whose password is to change.
	     * @return {Promise<>} An empty promise fulfilled once the password change is complete.
	     */
	    changePassword: function(credentials) {
	      var deferred = this._q.defer();

	      // Throw an error if they are trying to pass in separate string arguments
	      if (typeof credentials === "string") {
	        throw new Error("$changePassword() expects an object containing 'email', 'oldPassword', and 'newPassword', but got a string.");
	      }

	      try {
	        this._ref.changePassword(credentials, this._utils.makeNodeResolver(deferred));
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Changes the email for an email/password user.
	     *
	     * @param {Object} credentials An object containing the old email, new email, and password of
	     * the user whose email is to change.
	     * @return {Promise<>} An empty promise fulfilled once the email change is complete.
	     */
	    changeEmail: function(credentials) {
	      var deferred = this._q.defer();

	      if (typeof this._ref.changeEmail !== 'function') {
	        throw new Error("$firebaseAuth.$changeEmail() requires Firebase version 2.1.0 or greater.");
	      } else if (typeof credentials === 'string') {
	        throw new Error("$changeEmail() expects an object containing 'oldEmail', 'newEmail', and 'password', but got a string.");
	      }

	      try {
	        this._ref.changeEmail(credentials, this._utils.makeNodeResolver(deferred));
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Removes an email/password user.
	     *
	     * @param {Object} credentials An object containing the email and password of the user to remove.
	     * @return {Promise<>} An empty promise fulfilled once the user is removed.
	     */
	    removeUser: function(credentials) {
	      var deferred = this._q.defer();

	      // Throw an error if they are trying to pass in separate string arguments
	      if (typeof credentials === "string") {
	        throw new Error("$removeUser() expects an object containing 'email' and 'password', but got a string.");
	      }

	      try {
	        this._ref.removeUser(credentials, this._utils.makeNodeResolver(deferred));
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },


	    /**
	     * Sends a password reset email to an email/password user.
	     *
	     * @param {Object} credentials An object containing the email of the user to send a reset
	     * password email to.
	     * @return {Promise<>} An empty promise fulfilled once the reset password email is sent.
	     */
	    resetPassword: function(credentials) {
	      var deferred = this._q.defer();

	      // Throw an error if they are trying to pass in a string argument
	      if (typeof credentials === "string") {
	        throw new Error("$resetPassword() expects an object containing 'email', but got a string.");
	      }

	      try {
	        this._ref.resetPassword(credentials, this._utils.makeNodeResolver(deferred));
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    }
	  };
	})();

	(function() {
	  'use strict';
	  /**
	   * Creates and maintains a synchronized object, with 2-way bindings between Angular and Firebase.
	   *
	   * Implementations of this class are contracted to provide the following internal methods,
	   * which are used by the synchronization process and 3-way bindings:
	   *    $$updated - called whenever a change occurs (a value event from Firebase)
	   *    $$error - called when listeners are canceled due to a security error
	   *    $$notify - called to update $watch listeners and trigger updates to 3-way bindings
	   *    $ref - called to obtain the underlying Firebase reference
	   *
	   * Instead of directly modifying this class, one should generally use the $extend
	   * method to add or change how methods behave:
	   *
	   * <pre><code>
	   * var ExtendedObject = $firebaseObject.$extend({
	   *    // add a new method to the prototype
	   *    foo: function() { return 'bar'; },
	   * });
	   *
	   * var obj = new ExtendedObject(ref);
	   * </code></pre>
	   */
	  angular.module('firebase').factory('$firebaseObject', [
	    '$parse', '$firebaseUtils', '$log',
	    function($parse, $firebaseUtils, $log) {
	      /**
	       * Creates a synchronized object with 2-way bindings between Angular and Firebase.
	       *
	       * @param {Firebase} ref
	       * @returns {FirebaseObject}
	       * @constructor
	       */
	      function FirebaseObject(ref) {
	        if( !(this instanceof FirebaseObject) ) {
	          return new FirebaseObject(ref);
	        }
	        // These are private config props and functions used internally
	        // they are collected here to reduce clutter in console.log and forEach
	        this.$$conf = {
	          // synchronizes data to Firebase
	          sync: new ObjectSyncManager(this, ref),
	          // stores the Firebase ref
	          ref: ref,
	          // synchronizes $scope variables with this object
	          binding: new ThreeWayBinding(this),
	          // stores observers registered with $watch
	          listeners: []
	        };

	        // this bit of magic makes $$conf non-enumerable and non-configurable
	        // and non-writable (its properties are still writable but the ref cannot be replaced)
	        // we redundantly assign it above so the IDE can relax
	        Object.defineProperty(this, '$$conf', {
	          value: this.$$conf
	        });

	        this.$id = $firebaseUtils.getKey(ref.ref());
	        this.$priority = null;

	        $firebaseUtils.applyDefaults(this, this.$$defaults);

	        // start synchronizing data with Firebase
	        this.$$conf.sync.init();
	      }

	      FirebaseObject.prototype = {
	        /**
	         * Saves all data on the FirebaseObject back to Firebase.
	         * @returns a promise which will resolve after the save is completed.
	         */
	        $save: function () {
	          var self = this;
	          var ref = self.$ref();
	          var data = $firebaseUtils.toJSON(self);
	          return $firebaseUtils.doSet(ref, data).then(function() {
	            self.$$notify();
	            return self.$ref();
	          });
	        },

	        /**
	         * Removes all keys from the FirebaseObject and also removes
	         * the remote data from the server.
	         *
	         * @returns a promise which will resolve after the op completes
	         */
	        $remove: function() {
	          var self = this;
	          $firebaseUtils.trimKeys(self, {});
	          self.$value = null;
	          return $firebaseUtils.doRemove(self.$ref()).then(function() {
	            self.$$notify();
	            return self.$ref();
	          });
	        },

	        /**
	         * The loaded method is invoked after the initial batch of data arrives from the server.
	         * When this resolves, all data which existed prior to calling $asObject() is now cached
	         * locally in the object.
	         *
	         * As a shortcut is also possible to pass resolve/reject methods directly into this
	         * method just as they would be passed to .then()
	         *
	         * @param {Function} resolve
	         * @param {Function} reject
	         * @returns a promise which resolves after initial data is downloaded from Firebase
	         */
	        $loaded: function(resolve, reject) {
	          var promise = this.$$conf.sync.ready();
	          if (arguments.length) {
	            // allow this method to be called just like .then
	            // by passing any arguments on to .then
	            promise = promise.then.call(promise, resolve, reject);
	          }
	          return promise;
	        },

	        /**
	         * @returns {Firebase} the original Firebase instance used to create this object.
	         */
	        $ref: function () {
	          return this.$$conf.ref;
	        },

	        /**
	         * Creates a 3-way data sync between this object, the Firebase server, and a
	         * scope variable. This means that any changes made to the scope variable are
	         * pushed to Firebase, and vice versa.
	         *
	         * If scope emits a $destroy event, the binding is automatically severed. Otherwise,
	         * it is possible to unbind the scope variable by using the `unbind` function
	         * passed into the resolve method.
	         *
	         * Can only be bound to one scope variable at a time. If a second is attempted,
	         * the promise will be rejected with an error.
	         *
	         * @param {object} scope
	         * @param {string} varName
	         * @returns a promise which resolves to an unbind method after data is set in scope
	         */
	        $bindTo: function (scope, varName) {
	          var self = this;
	          return self.$loaded().then(function () {
	            return self.$$conf.binding.bindTo(scope, varName);
	          });
	        },

	        /**
	         * Listeners passed into this method are notified whenever a new change is received
	         * from the server. Each invocation is sent an object containing
	         * <code>{ type: 'value', key: 'my_firebase_id' }</code>
	         *
	         * This method returns an unbind function that can be used to detach the listener.
	         *
	         * @param {Function} cb
	         * @param {Object} [context]
	         * @returns {Function} invoke to stop observing events
	         */
	        $watch: function (cb, context) {
	          var list = this.$$conf.listeners;
	          list.push([cb, context]);
	          // an off function for cancelling the listener
	          return function () {
	            var i = list.findIndex(function (parts) {
	              return parts[0] === cb && parts[1] === context;
	            });
	            if (i > -1) {
	              list.splice(i, 1);
	            }
	          };
	        },

	        /**
	         * Informs $firebase to stop sending events and clears memory being used
	         * by this object (delete's its local content).
	         */
	        $destroy: function(err) {
	          var self = this;
	          if (!self.$isDestroyed) {
	            self.$isDestroyed = true;
	            self.$$conf.sync.destroy(err);
	            self.$$conf.binding.destroy();
	            $firebaseUtils.each(self, function (v, k) {
	              delete self[k];
	            });
	          }
	        },

	        /**
	         * Called by $firebase whenever an item is changed at the server.
	         * This method must exist on any objectFactory passed into $firebase.
	         *
	         * It should return true if any changes were made, otherwise `$$notify` will
	         * not be invoked.
	         *
	         * @param {object} snap a Firebase snapshot
	         * @return {boolean} true if any changes were made.
	         */
	        $$updated: function (snap) {
	          // applies new data to this object
	          var changed = $firebaseUtils.updateRec(this, snap);
	          // applies any defaults set using $$defaults
	          $firebaseUtils.applyDefaults(this, this.$$defaults);
	          // returning true here causes $$notify to be triggered
	          return changed;
	        },

	        /**
	         * Called whenever a security error or other problem causes the listeners to become
	         * invalid. This is generally an unrecoverable error.
	         * @param {Object} err which will have a `code` property and possibly a `message`
	         */
	        $$error: function (err) {
	          // prints an error to the console (via Angular's logger)
	          $log.error(err);
	          // frees memory and cancels any remaining listeners
	          this.$destroy(err);
	        },

	        /**
	         * Called internally by $bindTo when data is changed in $scope.
	         * Should apply updates to this record but should not call
	         * notify().
	         */
	        $$scopeUpdated: function(newData) {
	          // we use a one-directional loop to avoid feedback with 3-way bindings
	          // since set() is applied locally anyway, this is still performant
	          var def = $firebaseUtils.defer();
	          this.$ref().set($firebaseUtils.toJSON(newData), $firebaseUtils.makeNodeResolver(def));
	          return def.promise;
	        },

	        /**
	         * Updates any bound scope variables and
	         * notifies listeners registered with $watch
	         */
	        $$notify: function() {
	          var self = this, list = this.$$conf.listeners.slice();
	          // be sure to do this after setting up data and init state
	          angular.forEach(list, function (parts) {
	            parts[0].call(parts[1], {event: 'value', key: self.$id});
	          });
	        },

	        /**
	         * Overrides how Angular.forEach iterates records on this object so that only
	         * fields stored in Firebase are part of the iteration. To include meta fields like
	         * $id and $priority in the iteration, utilize for(key in obj) instead.
	         */
	        forEach: function(iterator, context) {
	          return $firebaseUtils.each(this, iterator, context);
	        }
	      };

	      /**
	       * This method allows FirebaseObject to be copied into a new factory. Methods passed into this
	       * function will be added onto the object's prototype. They can override existing methods as
	       * well.
	       *
	       * In addition to passing additional methods, it is also possible to pass in a class function.
	       * The prototype on that class function will be preserved, and it will inherit from
	       * FirebaseObject. It's also possible to do both, passing a class to inherit and additional
	       * methods to add onto the prototype.
	       *
	       * Once a factory is obtained by this method, it can be passed into $firebase as the
	       * `objectFactory` parameter:
	       *
	       * <pre><code>
	       * var MyFactory = $firebaseObject.$extend({
	       *    // add a method onto the prototype that prints a greeting
	       *    getGreeting: function() {
	       *       return 'Hello ' + this.first_name + ' ' + this.last_name + '!';
	       *    }
	       * });
	       *
	       * // use our new factory in place of $firebaseObject
	       * var obj = $firebase(ref, {objectFactory: MyFactory}).$asObject();
	       * </code></pre>
	       *
	       * @param {Function} [ChildClass] a child class which should inherit FirebaseObject
	       * @param {Object} [methods] a list of functions to add onto the prototype
	       * @returns {Function} a new factory suitable for use with $firebase
	       */
	      FirebaseObject.$extend = function(ChildClass, methods) {
	        if( arguments.length === 1 && angular.isObject(ChildClass) ) {
	          methods = ChildClass;
	          ChildClass = function(ref) {
	            if( !(this instanceof ChildClass) ) {
	              return new ChildClass(ref);
	            }
	            FirebaseObject.apply(this, arguments);
	          };
	        }
	        return $firebaseUtils.inherit(ChildClass, FirebaseObject, methods);
	      };

	      /**
	       * Creates a three-way data binding on a scope variable.
	       *
	       * @param {FirebaseObject} rec
	       * @returns {*}
	       * @constructor
	       */
	      function ThreeWayBinding(rec) {
	        this.subs = [];
	        this.scope = null;
	        this.key = null;
	        this.rec = rec;
	      }

	      ThreeWayBinding.prototype = {
	        assertNotBound: function(varName) {
	          if( this.scope ) {
	            var msg = 'Cannot bind to ' + varName + ' because this instance is already bound to ' +
	              this.key + '; one binding per instance ' +
	              '(call unbind method or create another FirebaseObject instance)';
	            $log.error(msg);
	            return $firebaseUtils.reject(msg);
	          }
	        },

	        bindTo: function(scope, varName) {
	          function _bind(self) {
	            var sending = false;
	            var parsed = $parse(varName);
	            var rec = self.rec;
	            self.scope = scope;
	            self.varName = varName;

	            function equals(scopeValue) {
	              return angular.equals(scopeValue, rec) &&
	                scopeValue.$priority === rec.$priority &&
	                scopeValue.$value === rec.$value;
	            }

	            function setScope(rec) {
	              parsed.assign(scope, $firebaseUtils.scopeData(rec));
	            }

	            var send = $firebaseUtils.debounce(function(val) {
	              var scopeData = $firebaseUtils.scopeData(val);
	              rec.$$scopeUpdated(scopeData)
	                ['finally'](function() {
	                  sending = false;
	                  if(!scopeData.hasOwnProperty('$value')){
	                    delete rec.$value;
	                    delete parsed(scope).$value;
	                  }
	                  setScope(rec);
	                }
	              );
	            }, 50, 500);

	            var scopeUpdated = function(newVal) {
	              newVal = newVal[0];
	              if( !equals(newVal) ) {
	                sending = true;
	                send(newVal);
	              }
	            };

	            var recUpdated = function() {
	              if( !sending && !equals(parsed(scope)) ) {
	                setScope(rec);
	              }
	            };

	            // $watch will not check any vars prefixed with $, so we
	            // manually check $priority and $value using this method
	            function watchExp(){
	              var obj = parsed(scope);
	              return [obj, obj.$priority, obj.$value];
	            }

	            setScope(rec);
	            self.subs.push(scope.$on('$destroy', self.unbind.bind(self)));

	            // monitor scope for any changes
	            self.subs.push(scope.$watch(watchExp, scopeUpdated, true));

	            // monitor the object for changes
	            self.subs.push(rec.$watch(recUpdated));

	            return self.unbind.bind(self);
	          }

	          return this.assertNotBound(varName) || _bind(this);
	        },

	        unbind: function() {
	          if( this.scope ) {
	            angular.forEach(this.subs, function(unbind) {
	              unbind();
	            });
	            this.subs = [];
	            this.scope = null;
	            this.key = null;
	          }
	        },

	        destroy: function() {
	          this.unbind();
	          this.rec = null;
	        }
	      };

	      function ObjectSyncManager(firebaseObject, ref) {
	        function destroy(err) {
	          if( !sync.isDestroyed ) {
	            sync.isDestroyed = true;
	            ref.off('value', applyUpdate);
	            firebaseObject = null;
	            initComplete(err||'destroyed');
	          }
	        }

	        function init() {
	          ref.on('value', applyUpdate, error);
	          ref.once('value', function(snap) {
	            if (angular.isArray(snap.val())) {
	              $log.warn('Storing data using array indices in Firebase can result in unexpected behavior. See https://www.firebase.com/docs/web/guide/understanding-data.html#section-arrays-in-firebase for more information. Also note that you probably wanted $firebaseArray and not $firebaseObject.');
	            }

	            initComplete(null);
	          }, initComplete);
	        }

	        // call initComplete(); do not call this directly
	        function _initComplete(err) {
	          if( !isResolved ) {
	            isResolved = true;
	            if( err ) { def.reject(err); }
	            else { def.resolve(firebaseObject); }
	          }
	        }

	        var isResolved = false;
	        var def = $firebaseUtils.defer();
	        var applyUpdate = $firebaseUtils.batch(function(snap) {
	          var changed = firebaseObject.$$updated(snap);
	          if( changed ) {
	            // notifies $watch listeners and
	            // updates $scope if bound to a variable
	            firebaseObject.$$notify();
	          }
	        });
	        var error = $firebaseUtils.batch(function(err) {
	          _initComplete(err);
	          if( firebaseObject ) {
	            firebaseObject.$$error(err);
	          }
	        });
	        var initComplete = $firebaseUtils.batch(_initComplete);

	        var sync = {
	          isDestroyed: false,
	          destroy: destroy,
	          init: init,
	          ready: function() { return def.promise; }
	        };
	        return sync;
	      }

	      return FirebaseObject;
	    }
	  ]);

	  /** @deprecated */
	  angular.module('firebase').factory('$FirebaseObject', ['$log', '$firebaseObject',
	    function($log, $firebaseObject) {
	      return function() {
	        $log.warn('$FirebaseObject has been renamed. Use $firebaseObject instead.');
	        return $firebaseObject.apply(null, arguments);
	      };
	    }
	  ]);
	})();

	(function() {
	  'use strict';

	  angular.module("firebase")

	    /** @deprecated */
	    .factory("$firebase", function() {
	      return function() {
	        throw new Error('$firebase has been removed. You may instantiate $firebaseArray and $firebaseObject ' +
	        'directly now. For simple write operations, just use the Firebase ref directly. ' +
	        'See the AngularFire 1.0.0 changelog for details: https://www.firebase.com/docs/web/libraries/angular/changelog.html');
	      };
	    });

	})();

	(function() {
	  "use strict";

	  function FirebaseAuthService($firebaseAuth, $firebaseRef) {
	    return $firebaseAuth($firebaseRef.default);
	  }
	  FirebaseAuthService.$inject = ['$firebaseAuth', '$firebaseRef'];

	  angular.module('firebase')
	    .factory('$firebaseAuthService', FirebaseAuthService);

	})();

	(function() {
	  "use strict";

	  function FirebaseRef() {
	    this.urls = null;
	    this.registerUrl = function registerUrl(urlOrConfig) {

	      if (typeof urlOrConfig === 'string') {
	        this.urls = {};
	        this.urls.default = urlOrConfig;
	      }

	      if (angular.isObject(urlOrConfig)) {
	        this.urls = urlOrConfig;
	      }

	    };

	    this.$$checkUrls = function $$checkUrls(urlConfig) {
	      if (!urlConfig) {
	        return new Error('No Firebase URL registered. Use firebaseRefProvider.registerUrl() in the config phase. This is required if you are using $firebaseAuthService.');
	      }
	      if (!urlConfig.default) {
	        return new Error('No default Firebase URL registered. Use firebaseRefProvider.registerUrl({ default: "https://<my-firebase-app>.firebaseio.com/"}).');
	      }
	    };

	    this.$$createRefsFromUrlConfig = function $$createMultipleRefs(urlConfig) {
	      var refs = {};
	      var error = this.$$checkUrls(urlConfig);
	      if (error) { throw error; }
	      angular.forEach(urlConfig, function(value, key) {
	        refs[key] = new Firebase(value);
	      });
	      return refs;
	    };

	    this.$get = function FirebaseRef_$get() {
	      return this.$$createRefsFromUrlConfig(this.urls);
	    };
	  }

	  angular.module('firebase')
	    .provider('$firebaseRef', FirebaseRef);

	})();

	'use strict';

	// Shim Array.indexOf for IE compatibility.
	if (!Array.prototype.indexOf) {
	  Array.prototype.indexOf = function (searchElement, fromIndex) {
	    if (this === undefined || this === null) {
	      throw new TypeError("'this' is null or not defined");
	    }
	    // Hack to convert object.length to a UInt32
	    // jshint -W016
	    var length = this.length >>> 0;
	    fromIndex = +fromIndex || 0;
	    // jshint +W016

	    if (Math.abs(fromIndex) === Infinity) {
	      fromIndex = 0;
	    }

	    if (fromIndex < 0) {
	      fromIndex += length;
	      if (fromIndex < 0) {
	        fromIndex = 0;
	      }
	    }

	    for (;fromIndex < length; fromIndex++) {
	      if (this[fromIndex] === searchElement) {
	        return fromIndex;
	      }
	    }

	    return -1;
	  };
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
	if (!Function.prototype.bind) {
	  Function.prototype.bind = function (oThis) {
	    if (typeof this !== "function") {
	      // closest thing possible to the ECMAScript 5
	      // internal IsCallable function
	      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
	    }

	    var aArgs = Array.prototype.slice.call(arguments, 1),
	      fToBind = this,
	      fNOP = function () {},
	      fBound = function () {
	        return fToBind.apply(this instanceof fNOP && oThis
	            ? this
	            : oThis,
	          aArgs.concat(Array.prototype.slice.call(arguments)));
	      };

	    fNOP.prototype = this.prototype;
	    fBound.prototype = new fNOP();

	    return fBound;
	  };
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
	if (!Array.prototype.findIndex) {
	  Object.defineProperty(Array.prototype, 'findIndex', {
	    enumerable: false,
	    configurable: true,
	    writable: true,
	    value: function(predicate) {
	      if (this == null) {
	        throw new TypeError('Array.prototype.find called on null or undefined');
	      }
	      if (typeof predicate !== 'function') {
	        throw new TypeError('predicate must be a function');
	      }
	      var list = Object(this);
	      var length = list.length >>> 0;
	      var thisArg = arguments[1];
	      var value;

	      for (var i = 0; i < length; i++) {
	        if (i in list) {
	          value = list[i];
	          if (predicate.call(thisArg, value, i, list)) {
	            return i;
	          }
	        }
	      }
	      return -1;
	    }
	  });
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
	if (typeof Object.create != 'function') {
	  (function () {
	    var F = function () {};
	    Object.create = function (o) {
	      if (arguments.length > 1) {
	        throw new Error('Second argument not supported');
	      }
	      if (o === null) {
	        throw new Error('Cannot set a null [[Prototype]]');
	      }
	      if (typeof o != 'object') {
	        throw new TypeError('Argument must be an object');
	      }
	      F.prototype = o;
	      return new F();
	    };
	  })();
	}

	// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
	if (!Object.keys) {
	  Object.keys = (function () {
	    'use strict';
	    var hasOwnProperty = Object.prototype.hasOwnProperty,
	      hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
	      dontEnums = [
	        'toString',
	        'toLocaleString',
	        'valueOf',
	        'hasOwnProperty',
	        'isPrototypeOf',
	        'propertyIsEnumerable',
	        'constructor'
	      ],
	      dontEnumsLength = dontEnums.length;

	    return function (obj) {
	      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
	        throw new TypeError('Object.keys called on non-object');
	      }

	      var result = [], prop, i;

	      for (prop in obj) {
	        if (hasOwnProperty.call(obj, prop)) {
	          result.push(prop);
	        }
	      }

	      if (hasDontEnumBug) {
	        for (i = 0; i < dontEnumsLength; i++) {
	          if (hasOwnProperty.call(obj, dontEnums[i])) {
	            result.push(dontEnums[i]);
	          }
	        }
	      }
	      return result;
	    };
	  }());
	}

	// http://ejohn.org/blog/objectgetprototypeof/
	if ( typeof Object.getPrototypeOf !== "function" ) {
	  if ( typeof "test".__proto__ === "object" ) {
	    Object.getPrototypeOf = function(object){
	      return object.__proto__;
	    };
	  } else {
	    Object.getPrototypeOf = function(object){
	      // May break if the constructor has been tampered with
	      return object.constructor.prototype;
	    };
	  }
	}

	(function() {
	  'use strict';

	  angular.module('firebase')
	    .factory('$firebaseConfig', ["$firebaseArray", "$firebaseObject", "$injector",
	      function($firebaseArray, $firebaseObject, $injector) {
	        return function(configOpts) {
	          // make a copy we can modify
	          var opts = angular.extend({}, configOpts);
	          // look up factories if passed as string names
	          if( typeof opts.objectFactory === 'string' ) {
	            opts.objectFactory = $injector.get(opts.objectFactory);
	          }
	          if( typeof opts.arrayFactory === 'string' ) {
	            opts.arrayFactory = $injector.get(opts.arrayFactory);
	          }
	          // extend defaults and return
	          return angular.extend({
	            arrayFactory: $firebaseArray,
	            objectFactory: $firebaseObject
	          }, opts);
	        };
	      }
	    ])

	    .factory('$firebaseUtils', ["$q", "$timeout", "$rootScope",
	      function($q, $timeout, $rootScope) {

	        // ES6 style promises polyfill for angular 1.2.x
	        // Copied from angular 1.3.x implementation: https://github.com/angular/angular.js/blob/v1.3.5/src/ng/q.js#L539
	        function Q(resolver) {
	          if (!angular.isFunction(resolver)) {
	            throw new Error('missing resolver function');
	          }

	          var deferred = $q.defer();

	          function resolveFn(value) {
	            deferred.resolve(value);
	          }

	          function rejectFn(reason) {
	            deferred.reject(reason);
	          }

	          resolver(resolveFn, rejectFn);

	          return deferred.promise;
	        }

	        var utils = {
	          /**
	           * Returns a function which, each time it is invoked, will gather up the values until
	           * the next "tick" in the Angular compiler process. Then they are all run at the same
	           * time to avoid multiple cycles of the digest loop. Internally, this is done using $evalAsync()
	           *
	           * @param {Function} action
	           * @param {Object} [context]
	           * @returns {Function}
	           */
	          batch: function(action, context) {
	            return function() {
	              var args = Array.prototype.slice.call(arguments, 0);
	              utils.compile(function() {
	                action.apply(context, args);
	              });
	            };
	          },

	          /**
	           * A rudimentary debounce method
	           * @param {function} fn the function to debounce
	           * @param {object} [ctx] the `this` context to set in fn
	           * @param {int} wait number of milliseconds to pause before sending out after each invocation
	           * @param {int} [maxWait] max milliseconds to wait before sending out, defaults to wait * 10 or 100
	           */
	          debounce: function(fn, ctx, wait, maxWait) {
	            var start, cancelTimer, args, runScheduledForNextTick;
	            if( typeof(ctx) === 'number' ) {
	              maxWait = wait;
	              wait = ctx;
	              ctx = null;
	            }

	            if( typeof wait !== 'number' ) {
	              throw new Error('Must provide a valid integer for wait. Try 0 for a default');
	            }
	            if( typeof(fn) !== 'function' ) {
	              throw new Error('Must provide a valid function to debounce');
	            }
	            if( !maxWait ) { maxWait = wait*10 || 100; }

	            // clears the current wait timer and creates a new one
	            // however, if maxWait is exceeded, calls runNow() on the next tick.
	            function resetTimer() {
	              if( cancelTimer ) {
	                cancelTimer();
	                cancelTimer = null;
	              }
	              if( start && Date.now() - start > maxWait ) {
	                if(!runScheduledForNextTick){
	                  runScheduledForNextTick = true;
	                  utils.compile(runNow);
	                }
	              }
	              else {
	                if( !start ) { start = Date.now(); }
	                cancelTimer = utils.wait(runNow, wait);
	              }
	            }

	            // Clears the queue and invokes the debounced function with the most recent arguments
	            function runNow() {
	              cancelTimer = null;
	              start = null;
	              runScheduledForNextTick = false;
	              fn.apply(ctx, args);
	            }

	            function debounced() {
	              args = Array.prototype.slice.call(arguments, 0);
	              resetTimer();
	            }
	            debounced.running = function() {
	              return start > 0;
	            };

	            return debounced;
	          },

	          assertValidRef: function(ref, msg) {
	            if( !angular.isObject(ref) ||
	              typeof(ref.ref) !== 'function' ||
	              typeof(ref.ref().transaction) !== 'function' ) {
	              throw new Error(msg || 'Invalid Firebase reference');
	            }
	          },

	          // http://stackoverflow.com/questions/7509831/alternative-for-the-deprecated-proto
	          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
	          inherit: function(ChildClass, ParentClass, methods) {
	            var childMethods = ChildClass.prototype;
	            ChildClass.prototype = Object.create(ParentClass.prototype);
	            ChildClass.prototype.constructor = ChildClass; // restoring proper constructor for child class
	            angular.forEach(Object.keys(childMethods), function(k) {
	              ChildClass.prototype[k] = childMethods[k];
	            });
	            if( angular.isObject(methods) ) {
	              angular.extend(ChildClass.prototype, methods);
	            }
	            return ChildClass;
	          },

	          getPrototypeMethods: function(inst, iterator, context) {
	            var methods = {};
	            var objProto = Object.getPrototypeOf({});
	            var proto = angular.isFunction(inst) && angular.isObject(inst.prototype)?
	              inst.prototype : Object.getPrototypeOf(inst);
	            while(proto && proto !== objProto) {
	              for (var key in proto) {
	                // we only invoke each key once; if a super is overridden it's skipped here
	                if (proto.hasOwnProperty(key) && !methods.hasOwnProperty(key)) {
	                  methods[key] = true;
	                  iterator.call(context, proto[key], key, proto);
	                }
	              }
	              proto = Object.getPrototypeOf(proto);
	            }
	          },

	          getPublicMethods: function(inst, iterator, context) {
	            utils.getPrototypeMethods(inst, function(m, k) {
	              if( typeof(m) === 'function' && k.charAt(0) !== '_' ) {
	                iterator.call(context, m, k);
	              }
	            });
	          },

	          defer: $q.defer,

	          reject: $q.reject,

	          resolve: $q.when,

	          //TODO: Remove false branch and use only angular implementation when we drop angular 1.2.x support.
	          promise: angular.isFunction($q) ? $q : Q,

	          makeNodeResolver:function(deferred){
	            return function(err,result){
	              if(err === null){
	                if(arguments.length > 2){
	                  result = Array.prototype.slice.call(arguments,1);
	                }
	                deferred.resolve(result);
	              }
	              else {
	                deferred.reject(err);
	              }
	            };
	          },

	          wait: function(fn, wait) {
	            var to = $timeout(fn, wait||0);
	            return function() {
	              if( to ) {
	                $timeout.cancel(to);
	                to = null;
	              }
	            };
	          },

	          compile: function(fn) {
	            return $rootScope.$evalAsync(fn||function() {});
	          },

	          deepCopy: function(obj) {
	            if( !angular.isObject(obj) ) { return obj; }
	            var newCopy = angular.isArray(obj) ? obj.slice() : angular.extend({}, obj);
	            for (var key in newCopy) {
	              if (newCopy.hasOwnProperty(key)) {
	                if (angular.isObject(newCopy[key])) {
	                  newCopy[key] = utils.deepCopy(newCopy[key]);
	                }
	              }
	            }
	            return newCopy;
	          },

	          trimKeys: function(dest, source) {
	            utils.each(dest, function(v,k) {
	              if( !source.hasOwnProperty(k) ) {
	                delete dest[k];
	              }
	            });
	          },

	          scopeData: function(dataOrRec) {
	            var data = {
	              $id: dataOrRec.$id,
	              $priority: dataOrRec.$priority
	            };
	            var hasPublicProp = false;
	            utils.each(dataOrRec, function(v,k) {
	              hasPublicProp = true;
	              data[k] = utils.deepCopy(v);
	            });
	            if(!hasPublicProp && dataOrRec.hasOwnProperty('$value')){
	              data.$value = dataOrRec.$value;
	            }
	            return data;
	          },

	          updateRec: function(rec, snap) {
	            var data = snap.val();
	            var oldData = angular.extend({}, rec);

	            // deal with primitives
	            if( !angular.isObject(data) ) {
	              rec.$value = data;
	              data = {};
	            }
	            else {
	              delete rec.$value;
	            }

	            // apply changes: remove old keys, insert new data, set priority
	            utils.trimKeys(rec, data);
	            angular.extend(rec, data);
	            rec.$priority = snap.getPriority();

	            return !angular.equals(oldData, rec) ||
	              oldData.$value !== rec.$value ||
	              oldData.$priority !== rec.$priority;
	          },

	          applyDefaults: function(rec, defaults) {
	            if( angular.isObject(defaults) ) {
	              angular.forEach(defaults, function(v,k) {
	                if( !rec.hasOwnProperty(k) ) {
	                  rec[k] = v;
	                }
	              });
	            }
	            return rec;
	          },

	          dataKeys: function(obj) {
	            var out = [];
	            utils.each(obj, function(v,k) {
	              out.push(k);
	            });
	            return out;
	          },

	          each: function(obj, iterator, context) {
	            if(angular.isObject(obj)) {
	              for (var k in obj) {
	                if (obj.hasOwnProperty(k)) {
	                  var c = k.charAt(0);
	                  if( c !== '_' && c !== '$' && c !== '.' ) {
	                    iterator.call(context, obj[k], k, obj);
	                  }
	                }
	              }
	            }
	            else if(angular.isArray(obj)) {
	              for(var i = 0, len = obj.length; i < len; i++) {
	                iterator.call(context, obj[i], i, obj);
	              }
	            }
	            return obj;
	          },

	          /**
	           * A utility for retrieving a Firebase reference or DataSnapshot's
	           * key name. This is backwards-compatible with `name()` from Firebase
	           * 1.x.x and `key()` from Firebase 2.0.0+. Once support for Firebase
	           * 1.x.x is dropped in AngularFire, this helper can be removed.
	           */
	          getKey: function(refOrSnapshot) {
	            return (typeof refOrSnapshot.key === 'function') ? refOrSnapshot.key() : refOrSnapshot.name();
	          },

	          /**
	           * A utility for converting records to JSON objects
	           * which we can save into Firebase. It asserts valid
	           * keys and strips off any items prefixed with $.
	           *
	           * If the rec passed into this method has a toJSON()
	           * method, that will be used in place of the custom
	           * functionality here.
	           *
	           * @param rec
	           * @returns {*}
	           */
	          toJSON: function(rec) {
	            var dat;
	            if( !angular.isObject(rec) ) {
	              rec = {$value: rec};
	            }
	            if (angular.isFunction(rec.toJSON)) {
	              dat = rec.toJSON();
	            }
	            else {
	              dat = {};
	              utils.each(rec, function (v, k) {
	                dat[k] = stripDollarPrefixedKeys(v);
	              });
	            }
	            if( angular.isDefined(rec.$value) && Object.keys(dat).length === 0 && rec.$value !== null ) {
	              dat['.value'] = rec.$value;
	            }
	            if( angular.isDefined(rec.$priority) && Object.keys(dat).length > 0 && rec.$priority !== null ) {
	              dat['.priority'] = rec.$priority;
	            }
	            angular.forEach(dat, function(v,k) {
	              if (k.match(/[.$\[\]#\/]/) && k !== '.value' && k !== '.priority' ) {
	                throw new Error('Invalid key ' + k + ' (cannot contain .$[]#)');
	              }
	              else if( angular.isUndefined(v) ) {
	                throw new Error('Key '+k+' was undefined. Cannot pass undefined in JSON. Use null instead.');
	              }
	            });
	            return dat;
	          },

	          doSet: function(ref, data) {
	            var def = utils.defer();
	            if( angular.isFunction(ref.set) || !angular.isObject(data) ) {
	              // this is not a query, just do a flat set
	              ref.set(data, utils.makeNodeResolver(def));
	            }
	            else {
	              var dataCopy = angular.extend({}, data);
	              // this is a query, so we will replace all the elements
	              // of this query with the value provided, but not blow away
	              // the entire Firebase path
	              ref.once('value', function(snap) {
	                snap.forEach(function(ss) {
	                  if( !dataCopy.hasOwnProperty(utils.getKey(ss)) ) {
	                    dataCopy[utils.getKey(ss)] = null;
	                  }
	                });
	                ref.ref().update(dataCopy, utils.makeNodeResolver(def));
	              }, function(err) {
	                def.reject(err);
	              });
	            }
	            return def.promise;
	          },

	          doRemove: function(ref) {
	            var def = utils.defer();
	            if( angular.isFunction(ref.remove) ) {
	              // ref is not a query, just do a flat remove
	              ref.remove(utils.makeNodeResolver(def));
	            }
	            else {
	              // ref is a query so let's only remove the
	              // items in the query and not the entire path
	              ref.once('value', function(snap) {
	                var promises = [];
	                snap.forEach(function(ss) {
	                  var d = utils.defer();
	                  promises.push(d.promise);
	                  ss.ref().remove(utils.makeNodeResolver(def));
	                });
	                utils.allPromises(promises)
	                  .then(function() {
	                    def.resolve(ref);
	                  },
	                  function(err){
	                    def.reject(err);
	                  }
	                );
	              }, function(err) {
	                def.reject(err);
	              });
	            }
	            return def.promise;
	          },

	          /**
	           * AngularFire version number.
	           */
	          VERSION: '1.2.0',

	          allPromises: $q.all.bind($q)
	        };

	        return utils;
	      }
	    ]);

	    function stripDollarPrefixedKeys(data) {
	      if( !angular.isObject(data) ) { return data; }
	      var out = angular.isArray(data)? [] : {};
	      angular.forEach(data, function(v,k) {
	        if(typeof k !== 'string' || k.charAt(0) !== '$') {
	          out[k] = stripDollarPrefixedKeys(v);
	        }
	      });
	      return out;
	    }
	})();


/***/ },
/* 202 */
/***/ function(module, exports) {

	/*
	  angular-md5 - v0.1.8 
	  2015-11-17
	*/

	/* commonjs package manager support (eg componentjs) */
	if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports) {
	  module.exports = "angular-md5";
	}
	(function(angular) {
	  angular.module("angular-md5", [ "gdi2290.md5" ]);
	  angular.module("ngMd5", [ "gdi2290.md5" ]);
	  angular.module("gdi2290.md5", [ "gdi2290.gravatar-filter", "gdi2290.md5-service", "gdi2290.md5-filter" ]);
	  "use strict";
	  angular.module("gdi2290.gravatar-filter", []).filter("gravatar", [ "md5", function(md5) {
	    var cache = {};
	    return function(text, defaultText) {
	      if (!cache[text]) {
	        defaultText = defaultText ? md5.createHash(defaultText.toString().toLowerCase()) : "";
	        cache[text] = text ? md5.createHash(text.toString().toLowerCase()) : defaultText;
	      }
	      return cache[text];
	    };
	  } ]);
	  "use strict";
	  angular.module("gdi2290.md5-filter", []).filter("md5", [ "md5", function(md5) {
	    return function(text) {
	      return text ? md5.createHash(text.toString().toLowerCase()) : text;
	    };
	  } ]);
	  "use strict";
	  angular.module("gdi2290.md5-service", []).factory("md5", [ function() {
	    var md5 = {
	      createHash: function(str) {
	        if (null === str) {
	          return null;
	        }
	        var xl;
	        var rotateLeft = function(lValue, iShiftBits) {
	          return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
	        };
	        var addUnsigned = function(lX, lY) {
	          var lX4, lY4, lX8, lY8, lResult;
	          lX8 = lX & 2147483648;
	          lY8 = lY & 2147483648;
	          lX4 = lX & 1073741824;
	          lY4 = lY & 1073741824;
	          lResult = (lX & 1073741823) + (lY & 1073741823);
	          if (lX4 & lY4) {
	            return lResult ^ 2147483648 ^ lX8 ^ lY8;
	          }
	          if (lX4 | lY4) {
	            if (lResult & 1073741824) {
	              return lResult ^ 3221225472 ^ lX8 ^ lY8;
	            } else {
	              return lResult ^ 1073741824 ^ lX8 ^ lY8;
	            }
	          } else {
	            return lResult ^ lX8 ^ lY8;
	          }
	        };
	        var _F = function(x, y, z) {
	          return x & y | ~x & z;
	        };
	        var _G = function(x, y, z) {
	          return x & z | y & ~z;
	        };
	        var _H = function(x, y, z) {
	          return x ^ y ^ z;
	        };
	        var _I = function(x, y, z) {
	          return y ^ (x | ~z);
	        };
	        var _FF = function(a, b, c, d, x, s, ac) {
	          a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac));
	          return addUnsigned(rotateLeft(a, s), b);
	        };
	        var _GG = function(a, b, c, d, x, s, ac) {
	          a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac));
	          return addUnsigned(rotateLeft(a, s), b);
	        };
	        var _HH = function(a, b, c, d, x, s, ac) {
	          a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac));
	          return addUnsigned(rotateLeft(a, s), b);
	        };
	        var _II = function(a, b, c, d, x, s, ac) {
	          a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac));
	          return addUnsigned(rotateLeft(a, s), b);
	        };
	        var convertToWordArray = function(str) {
	          var lWordCount;
	          var lMessageLength = str.length;
	          var lNumberOfWords_temp1 = lMessageLength + 8;
	          var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
	          var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
	          var lWordArray = new Array(lNumberOfWords - 1);
	          var lBytePosition = 0;
	          var lByteCount = 0;
	          while (lByteCount < lMessageLength) {
	            lWordCount = (lByteCount - lByteCount % 4) / 4;
	            lBytePosition = lByteCount % 4 * 8;
	            lWordArray[lWordCount] = lWordArray[lWordCount] | str.charCodeAt(lByteCount) << lBytePosition;
	            lByteCount++;
	          }
	          lWordCount = (lByteCount - lByteCount % 4) / 4;
	          lBytePosition = lByteCount % 4 * 8;
	          lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
	          lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
	          lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
	          return lWordArray;
	        };
	        var wordToHex = function(lValue) {
	          var wordToHexValue = "", wordToHexValue_temp = "", lByte, lCount;
	          for (lCount = 0; lCount <= 3; lCount++) {
	            lByte = lValue >>> lCount * 8 & 255;
	            wordToHexValue_temp = "0" + lByte.toString(16);
	            wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
	          }
	          return wordToHexValue;
	        };
	        var x = [], k, AA, BB, CC, DD, a, b, c, d, S11 = 7, S12 = 12, S13 = 17, S14 = 22, S21 = 5, S22 = 9, S23 = 14, S24 = 20, S31 = 4, S32 = 11, S33 = 16, S34 = 23, S41 = 6, S42 = 10, S43 = 15, S44 = 21;
	        x = convertToWordArray(str);
	        a = 1732584193;
	        b = 4023233417;
	        c = 2562383102;
	        d = 271733878;
	        xl = x.length;
	        for (k = 0; k < xl; k += 16) {
	          AA = a;
	          BB = b;
	          CC = c;
	          DD = d;
	          a = _FF(a, b, c, d, x[k + 0], S11, 3614090360);
	          d = _FF(d, a, b, c, x[k + 1], S12, 3905402710);
	          c = _FF(c, d, a, b, x[k + 2], S13, 606105819);
	          b = _FF(b, c, d, a, x[k + 3], S14, 3250441966);
	          a = _FF(a, b, c, d, x[k + 4], S11, 4118548399);
	          d = _FF(d, a, b, c, x[k + 5], S12, 1200080426);
	          c = _FF(c, d, a, b, x[k + 6], S13, 2821735955);
	          b = _FF(b, c, d, a, x[k + 7], S14, 4249261313);
	          a = _FF(a, b, c, d, x[k + 8], S11, 1770035416);
	          d = _FF(d, a, b, c, x[k + 9], S12, 2336552879);
	          c = _FF(c, d, a, b, x[k + 10], S13, 4294925233);
	          b = _FF(b, c, d, a, x[k + 11], S14, 2304563134);
	          a = _FF(a, b, c, d, x[k + 12], S11, 1804603682);
	          d = _FF(d, a, b, c, x[k + 13], S12, 4254626195);
	          c = _FF(c, d, a, b, x[k + 14], S13, 2792965006);
	          b = _FF(b, c, d, a, x[k + 15], S14, 1236535329);
	          a = _GG(a, b, c, d, x[k + 1], S21, 4129170786);
	          d = _GG(d, a, b, c, x[k + 6], S22, 3225465664);
	          c = _GG(c, d, a, b, x[k + 11], S23, 643717713);
	          b = _GG(b, c, d, a, x[k + 0], S24, 3921069994);
	          a = _GG(a, b, c, d, x[k + 5], S21, 3593408605);
	          d = _GG(d, a, b, c, x[k + 10], S22, 38016083);
	          c = _GG(c, d, a, b, x[k + 15], S23, 3634488961);
	          b = _GG(b, c, d, a, x[k + 4], S24, 3889429448);
	          a = _GG(a, b, c, d, x[k + 9], S21, 568446438);
	          d = _GG(d, a, b, c, x[k + 14], S22, 3275163606);
	          c = _GG(c, d, a, b, x[k + 3], S23, 4107603335);
	          b = _GG(b, c, d, a, x[k + 8], S24, 1163531501);
	          a = _GG(a, b, c, d, x[k + 13], S21, 2850285829);
	          d = _GG(d, a, b, c, x[k + 2], S22, 4243563512);
	          c = _GG(c, d, a, b, x[k + 7], S23, 1735328473);
	          b = _GG(b, c, d, a, x[k + 12], S24, 2368359562);
	          a = _HH(a, b, c, d, x[k + 5], S31, 4294588738);
	          d = _HH(d, a, b, c, x[k + 8], S32, 2272392833);
	          c = _HH(c, d, a, b, x[k + 11], S33, 1839030562);
	          b = _HH(b, c, d, a, x[k + 14], S34, 4259657740);
	          a = _HH(a, b, c, d, x[k + 1], S31, 2763975236);
	          d = _HH(d, a, b, c, x[k + 4], S32, 1272893353);
	          c = _HH(c, d, a, b, x[k + 7], S33, 4139469664);
	          b = _HH(b, c, d, a, x[k + 10], S34, 3200236656);
	          a = _HH(a, b, c, d, x[k + 13], S31, 681279174);
	          d = _HH(d, a, b, c, x[k + 0], S32, 3936430074);
	          c = _HH(c, d, a, b, x[k + 3], S33, 3572445317);
	          b = _HH(b, c, d, a, x[k + 6], S34, 76029189);
	          a = _HH(a, b, c, d, x[k + 9], S31, 3654602809);
	          d = _HH(d, a, b, c, x[k + 12], S32, 3873151461);
	          c = _HH(c, d, a, b, x[k + 15], S33, 530742520);
	          b = _HH(b, c, d, a, x[k + 2], S34, 3299628645);
	          a = _II(a, b, c, d, x[k + 0], S41, 4096336452);
	          d = _II(d, a, b, c, x[k + 7], S42, 1126891415);
	          c = _II(c, d, a, b, x[k + 14], S43, 2878612391);
	          b = _II(b, c, d, a, x[k + 5], S44, 4237533241);
	          a = _II(a, b, c, d, x[k + 12], S41, 1700485571);
	          d = _II(d, a, b, c, x[k + 3], S42, 2399980690);
	          c = _II(c, d, a, b, x[k + 10], S43, 4293915773);
	          b = _II(b, c, d, a, x[k + 1], S44, 2240044497);
	          a = _II(a, b, c, d, x[k + 8], S41, 1873313359);
	          d = _II(d, a, b, c, x[k + 15], S42, 4264355552);
	          c = _II(c, d, a, b, x[k + 6], S43, 2734768916);
	          b = _II(b, c, d, a, x[k + 13], S44, 1309151649);
	          a = _II(a, b, c, d, x[k + 4], S41, 4149444226);
	          d = _II(d, a, b, c, x[k + 11], S42, 3174756917);
	          c = _II(c, d, a, b, x[k + 2], S43, 718787259);
	          b = _II(b, c, d, a, x[k + 9], S44, 3951481745);
	          a = addUnsigned(a, AA);
	          b = addUnsigned(b, BB);
	          c = addUnsigned(c, CC);
	          d = addUnsigned(d, DD);
	        }
	        var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
	        return temp.toLowerCase();
	      }
	    };
	    return md5;
	  } ]);
	})(angular);

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _angular = __webpack_require__(192);

	var _angular2 = _interopRequireDefault(_angular);

	var _home = __webpack_require__(204);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var componentModule = _angular2.default.module('app.components', [_home2.default.name]);

	exports.default = componentModule;

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _angular = __webpack_require__(192);

	var _angular2 = _interopRequireDefault(_angular);

	var _home = __webpack_require__(205);

	var _home2 = _interopRequireDefault(_home);

	var _home3 = __webpack_require__(208);

	var _home4 = _interopRequireDefault(_home3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var homeModule = _angular2.default.module('app.home', []).component('home', _home2.default).controller('HomeController', _home4.default);

	exports.default = homeModule;

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _home = __webpack_require__(206);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var homeComponent = {
	   template: _home2.default,
	   controller: 'HomeController',
	   bindings: {}
	};

	exports.default = homeComponent;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"page-wrapper\">\n\n  <div class=\"page-header\">\n    <h1><img class=\"logo-img\" src=\"" + __webpack_require__(207) + "\" /> Welcome to ng-Slack</h1>\n  </div>\n\n  <p class=\"text-center\">\n    <a ui-sref=\"login\" class=\"btn btn-lg btn-default\">Login</a> or <a ui-sref=\"register\" class=\"btn btn-lg btn-primary\">Register</a>\n  </p>\n\n</div>\n";

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MDRCOTRGREYxMTkxMUU0OEQyQzg5MUFFREI1NDQwRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDRCOTRGRUYxMTkxMUU0OEQyQzg5MUFFREI1NDQwRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwNEI5NEZCRjExOTExRTQ4RDJDODkxQUVEQjU0NDBFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYwNEI5NEZDRjExOTExRTQ4RDJDODkxQUVEQjU0NDBFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+N+1H/AAAAwBQTFRF0Y4V3YkA+pQE+ZUK6rRc9ZhE9n0E1JAX/OrS9tis1JEX+qw9/u7Z7L905Z4y5Jsq4pop/Nei+eG+3Jkd+qEm96xr/MyL4psq+eTE7LFY+92//fLk45kj03UG2XcK8ZED/OjN+ngT2Jca/vny+q5E9ZM99nkS+cSO/XkU2XgK+pMD/vr0/LBJ66xM/MqG/fDd1HcJ9ncC45UY+nkV9dKd6KdW46I167xw5Zcd8cOA+nYS/vfu94gW7rZi+ZMF9dWi//369H4a2ZQe43cL+o8G5KlE550s8MyQ+buD8cJ72psd9XcB7cN6/JQG4aU89oUi+bN2+HUO1pMY/JgG+Z0a4YwC83UA6nkP3Zwf3owE93cH2osV/JQD96NW4YsA2Jgb6qhF5Jwu4JIV93gL24MR4pEN+XYR7caD/Naf+9CV048W6Y8G//799tqw/5YH9nYQ9HUB9c6V+ncQ9XcC7rlo/vXn+qk32YAO95A4/ZoI9You95QH+5QD+cmZ3JYb25Ua7pEF4o0E+nUR/vPo4Jwn/JQC99an9dep89an78qN+IUF540C+8Bt+HgR/HYS13gJ5Zsr+HgP+HoT8XkR13UG+5QG+XkT5Jsp25gb2pgb4o4F2pcb25cb+XkS+XgS+5UG45op+XgT2JUa+pQG4Y4F2pYa3XgL/JYI2p0e5psr5Zws+HgS+pQI3pci5p0v4Jgl9pg1+7pg2Zca9uLB+cCK+5MD5poo2JUZ2JYa4J4q14AQ6aU/9MyR+8iU/d+35a1M+sui6qZA5Zsp9HUC544F9qg4+aUw+5YE57Zk8JQP4Zoq+7RQ2pga4Zge+HkT+LqA05AX94UF/e7h8b1y9o4y+7V82ZMd45wu/XgT+HUU57JX57JY99Sh++/d/OrZ+r9t/ezc5rBI93oV/ODG9n0V+NKk+pUG88eH/5UE969vz4wS/vv4955Q5p0t+LFv+HcR9ZA064Yk5Joo46As5Zoo+Nuz+9i3+Nyz/d2x/ZUG97+I9t64+9Wz2pYb93sT////RzGgCwAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAVzSURBVHja7Jd7VBRVHMfXxeWxPGZlfeCDjVkQAUVZlrQGRUUkBVEDRVaRlRSUDRATNRUfiO9HbLS7s+PsCxd8oGJtrmmmdbK0hyW9rbQsSyMii04PKtnuvTPrwh8zerZzOqdz/PEPDPv97P3+7u/3u3cErn8ZgvuA/wPgbF+fWVGh3gP6pDjzrVUpfbwFBB3J14PY4jPKS0D/OKjXW51LvASMvIAAeudKb1eQwgCqjgTdG6Dss8mfl3XPgb2KXcJI8FfylXHx437lAwTTDppSB3d7EuiE8qzO70a4ygY2d9gwjJzKDUg6qTYajRT9SM8sdpYfWPvA402FQI2RGGZbxgmYfNIEAepTkR4PWUhdreqVGELCwEhJPBdg+GaHCRFuB3genodqVUNDQVETxhCwkOEcgNLRcqg3GuXuLCRfGfNQL1XDXhDVs4cUkgjBvQJXsINiAJuhh7aA+BO2T4ZUV+9FUcB4wDAJdw4CaAigjNKLoa6ycYc6JODjTUUFDGB2kRamUGLj2QXXdAiQSuns6ac7mJSTzYkFzBKgB8yGLdjKVweVDqDel+0naBmgZVJGFro9NPR6LKT3SzX8lRjaCNQajZ9YcDSd0ZOMhwaVavauN6/erZRDK8UCjR8IsSC1nV0BGZJYANSvbVzbWR7EB4i8Ujla2/SxQCyGhBY/m5bd9cIhql0b11rLO7NQP3ABfj9hA2lrPyZAeuihHW2Z7dUFSa87yzutsKH6lnICwjokcMlaUqxhAanp2ABJR/PDEaWu/luYjtTbIzgB8W/BKiex9FRmCeIWje3QoQ9CUdEG+bA9LRzJCQhhU5Z+TIBSoNFo3hh1p+RXxrFjJZAPABdAajHgQaMRZ++jp3k+VBLn9hDEBTgtIRkP7anfQ7VUSp3y9NwKtwc98jBoSr/WM5E9AcskA0DpgqQvGJgNqtFopCn6ec/XRKG5pM/PCXT5X5oRbcHxw0Mn9NzGqTYbaWseuNXV9osaDgWalvfudrwI9UJrzuoDaWM//LqYwHGDAd80/1rPQgq7eTMpGf6yGLW0yURLV3hGzSyo3umbmzsXiFEQ0cc5xnqYCREoit7mefg2UJ/LrVBkKgwGMwLgln5c58J0NTuX7nh4f8rYCqBWKJYrMp9WGsxmCwDsaeUCBDfC7zcaHYyHyD9FE289ujwTqEFkLlQyFjZ9c4YLENZIwSxSVMZ417XjorpbIGvKuZkKFMuRB5wgln7LebSVjlabaCojL2/fgzOjb6GcG5QLWQD0QBD1XaIveM7GxXKg3jBvlU4XfRkl3WxQmoEHZKJi7qddP71Sw3u4+h8EaplOJ0uYE8NumoH1AHLpO6zmLqdz8rpFCUAti41NmBSDm1kA8FCRe853Z1qOP+/xPvi3H7qemhQO5OCnVhbtXgL+REWu73tpB1bnCHfzANr6db1bTMQ8UwvlAAI81JvrLThRfFj0LFTfEOqrznMDJgwlCFjndfsTYlFADyAOr/lxkGtJzoUbVhB6+1lOwCUCJR2PmcMCamVLL9etmXmd7Wkrui/FPccJeJIARVpvMEAPIGQyXfjPH12f4O4Hdqzkj+ACRM4gLEzGlPsTgFoXu0jTraf/EDIAaxTfChDAEjMnXFe7at76vINSz6aN8gFjxQ6ufJwrcA0rBjmox3FCOfHFeRvy8jJAT2/3/Hu3M8tu11el9OfextalBE7smSj62/XVQSkF+omixnTbJHDjsjrjvuQrpGEi0fx1cDBNO0nBwUKrTd1P1JLAqJUl93bRjLhNw7FkougkL6/7LzuYuUTt8BKwg7kvUY5lXgKumtTAAHXx6GBv31i2vyCnKHnjNu9feQLeMa3f/Nf9177/APCPAAMAhIajDGySAE4AAAAASUVORK5CYII="

/***/ },
/* 208 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeController = function HomeController() {
	   _classCallCheck(this, HomeController);
	};

	HomeController.$inject = [];

	exports.default = HomeController;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _angular = __webpack_require__(192);

	var _angular2 = _interopRequireDefault(_angular);

	var _services = __webpack_require__(210);

	var _services2 = _interopRequireDefault(_services);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sharedModule = _angular2.default.module('app.shared', [_services2.default.name]);

	exports.default = sharedModule;

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _angular = __webpack_require__(192);

	var _angular2 = _interopRequireDefault(_angular);

	var _auth = __webpack_require__(211);

	var _auth2 = _interopRequireDefault(_auth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var servicesModule = _angular2.default.module('app.shared.services', []).service('AuthService', _auth2.default);

	exports.default = servicesModule;

/***/ },
/* 211 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AuthService = function AuthService($q, $firebaseAuth, FIREBASE_URL) {
	   _classCallCheck(this, AuthService);

	   var ref = new Firebase(FIREBASE_URL);

	   return $firebaseAuth(ref);
	};

	AuthService.$inject = ['$q', '$firebaseAuth', 'FIREBASE_URL'];

	exports.default = AuthService;

/***/ }
/******/ ]);