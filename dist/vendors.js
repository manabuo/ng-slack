/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

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

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	__webpack_require__(79);
	__webpack_require__(81);
	__webpack_require__(84);
	__webpack_require__(104);
	__webpack_require__(51);
	module.exports = __webpack_require__(236);


/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(77);
	module.exports = 'ngAnimate';


/***/ },

/***/ 51:
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

/***/ 77:
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

/***/ 78:
/***/ function(module, exports) {

	/**
	 * @license AngularJS v1.5.5
	 * (c) 2010-2016 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular) {'use strict';

	/**
	 * @ngdoc module
	 * @name ngAria
	 * @description
	 *
	 * The `ngAria` module provides support for common
	 * [<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](http://www.w3.org/TR/wai-aria/)
	 * attributes that convey state or semantic information about the application for users
	 * of assistive technologies, such as screen readers.
	 *
	 * <div doc-module-components="ngAria"></div>
	 *
	 * ## Usage
	 *
	 * For ngAria to do its magic, simply include the module `ngAria` as a dependency. The following
	 * directives are supported:
	 * `ngModel`, `ngChecked`, `ngReadonly`, `ngRequired`, `ngValue`, `ngDisabled`, `ngShow`, `ngHide`, `ngClick`,
	 * `ngDblClick`, and `ngMessages`.
	 *
	 * Below is a more detailed breakdown of the attributes handled by ngAria:
	 *
	 * | Directive                                   | Supported Attributes                                                                   |
	 * |---------------------------------------------|----------------------------------------------------------------------------------------|
	 * | {@link ng.directive:ngModel ngModel}        | aria-checked, aria-valuemin, aria-valuemax, aria-valuenow, aria-invalid, aria-required, input roles |
	 * | {@link ng.directive:ngDisabled ngDisabled}  | aria-disabled                                                                          |
	 * | {@link ng.directive:ngRequired ngRequired}  | aria-required
	 * | {@link ng.directive:ngChecked ngChecked}    | aria-checked
	 * | {@link ng.directive:ngReadonly ngReadonly}  | aria-readonly                                                                          ||
	 * | {@link ng.directive:ngValue ngValue}        | aria-checked                                                                           |
	 * | {@link ng.directive:ngShow ngShow}          | aria-hidden                                                                            |
	 * | {@link ng.directive:ngHide ngHide}          | aria-hidden                                                                            |
	 * | {@link ng.directive:ngDblclick ngDblclick}  | tabindex                                                                               |
	 * | {@link module:ngMessages ngMessages}        | aria-live                                                                              |
	 * | {@link ng.directive:ngClick ngClick}        | tabindex, keypress event, button role                                                  |
	 *
	 * Find out more information about each directive by reading the
	 * {@link guide/accessibility ngAria Developer Guide}.
	 *
	 * ##Example
	 * Using ngDisabled with ngAria:
	 * ```html
	 * <md-checkbox ng-disabled="disabled">
	 * ```
	 * Becomes:
	 * ```html
	 * <md-checkbox ng-disabled="disabled" aria-disabled="true">
	 * ```
	 *
	 * ##Disabling Attributes
	 * It's possible to disable individual attributes added by ngAria with the
	 * {@link ngAria.$ariaProvider#config config} method. For more details, see the
	 * {@link guide/accessibility Developer Guide}.
	 */
	 /* global -ngAriaModule */
	var ngAriaModule = angular.module('ngAria', ['ng']).
	                        provider('$aria', $AriaProvider);

	/**
	* Internal Utilities
	*/
	var nodeBlackList = ['BUTTON', 'A', 'INPUT', 'TEXTAREA', 'SELECT', 'DETAILS', 'SUMMARY'];

	var isNodeOneOf = function(elem, nodeTypeArray) {
	  if (nodeTypeArray.indexOf(elem[0].nodeName) !== -1) {
	    return true;
	  }
	};
	/**
	 * @ngdoc provider
	 * @name $ariaProvider
	 *
	 * @description
	 *
	 * Used for configuring the ARIA attributes injected and managed by ngAria.
	 *
	 * ```js
	 * angular.module('myApp', ['ngAria'], function config($ariaProvider) {
	 *   $ariaProvider.config({
	 *     ariaValue: true,
	 *     tabindex: false
	 *   });
	 * });
	 *```
	 *
	 * ## Dependencies
	 * Requires the {@link ngAria} module to be installed.
	 *
	 */
	function $AriaProvider() {
	  var config = {
	    ariaHidden: true,
	    ariaChecked: true,
	    ariaReadonly: true,
	    ariaDisabled: true,
	    ariaRequired: true,
	    ariaInvalid: true,
	    ariaValue: true,
	    tabindex: true,
	    bindKeypress: true,
	    bindRoleForClick: true
	  };

	  /**
	   * @ngdoc method
	   * @name $ariaProvider#config
	   *
	   * @param {object} config object to enable/disable specific ARIA attributes
	   *
	   *  - **ariaHidden** – `{boolean}` – Enables/disables aria-hidden tags
	   *  - **ariaChecked** – `{boolean}` – Enables/disables aria-checked tags
	   *  - **ariaReadonly** – `{boolean}` – Enables/disables aria-readonly tags
	   *  - **ariaDisabled** – `{boolean}` – Enables/disables aria-disabled tags
	   *  - **ariaRequired** – `{boolean}` – Enables/disables aria-required tags
	   *  - **ariaInvalid** – `{boolean}` – Enables/disables aria-invalid tags
	   *  - **ariaValue** – `{boolean}` – Enables/disables aria-valuemin, aria-valuemax and aria-valuenow tags
	   *  - **tabindex** – `{boolean}` – Enables/disables tabindex tags
	   *  - **bindKeypress** – `{boolean}` – Enables/disables keypress event binding on `div` and
	   *    `li` elements with ng-click
	   *  - **bindRoleForClick** – `{boolean}` – Adds role=button to non-interactive elements like `div`
	   *    using ng-click, making them more accessible to users of assistive technologies
	   *
	   * @description
	   * Enables/disables various ARIA attributes
	   */
	  this.config = function(newConfig) {
	    config = angular.extend(config, newConfig);
	  };

	  function watchExpr(attrName, ariaAttr, nodeBlackList, negate) {
	    return function(scope, elem, attr) {
	      var ariaCamelName = attr.$normalize(ariaAttr);
	      if (config[ariaCamelName] && !isNodeOneOf(elem, nodeBlackList) && !attr[ariaCamelName]) {
	        scope.$watch(attr[attrName], function(boolVal) {
	          // ensure boolean value
	          boolVal = negate ? !boolVal : !!boolVal;
	          elem.attr(ariaAttr, boolVal);
	        });
	      }
	    };
	  }
	  /**
	   * @ngdoc service
	   * @name $aria
	   *
	   * @description
	   * @priority 200
	   *
	   * The $aria service contains helper methods for applying common
	   * [ARIA](http://www.w3.org/TR/wai-aria/) attributes to HTML directives.
	   *
	   * ngAria injects common accessibility attributes that tell assistive technologies when HTML
	   * elements are enabled, selected, hidden, and more. To see how this is performed with ngAria,
	   * let's review a code snippet from ngAria itself:
	   *
	   *```js
	   * ngAriaModule.directive('ngDisabled', ['$aria', function($aria) {
	   *   return $aria.$$watchExpr('ngDisabled', 'aria-disabled', nodeBlackList, false);
	   * }])
	   *```
	   * Shown above, the ngAria module creates a directive with the same signature as the
	   * traditional `ng-disabled` directive. But this ngAria version is dedicated to
	   * solely managing accessibility attributes on custom elements. The internal `$aria` service is
	   * used to watch the boolean attribute `ngDisabled`. If it has not been explicitly set by the
	   * developer, `aria-disabled` is injected as an attribute with its value synchronized to the
	   * value in `ngDisabled`.
	   *
	   * Because ngAria hooks into the `ng-disabled` directive, developers do not have to do
	   * anything to enable this feature. The `aria-disabled` attribute is automatically managed
	   * simply as a silent side-effect of using `ng-disabled` with the ngAria module.
	   *
	   * The full list of directives that interface with ngAria:
	   * * **ngModel**
	   * * **ngChecked**
	   * * **ngReadonly**
	   * * **ngRequired**
	   * * **ngDisabled**
	   * * **ngValue**
	   * * **ngShow**
	   * * **ngHide**
	   * * **ngClick**
	   * * **ngDblclick**
	   * * **ngMessages**
	   *
	   * Read the {@link guide/accessibility ngAria Developer Guide} for a thorough explanation of each
	   * directive.
	   *
	   *
	   * ## Dependencies
	   * Requires the {@link ngAria} module to be installed.
	   */
	  this.$get = function() {
	    return {
	      config: function(key) {
	        return config[key];
	      },
	      $$watchExpr: watchExpr
	    };
	  };
	}


	ngAriaModule.directive('ngShow', ['$aria', function($aria) {
	  return $aria.$$watchExpr('ngShow', 'aria-hidden', [], true);
	}])
	.directive('ngHide', ['$aria', function($aria) {
	  return $aria.$$watchExpr('ngHide', 'aria-hidden', [], false);
	}])
	.directive('ngValue', ['$aria', function($aria) {
	  return $aria.$$watchExpr('ngValue', 'aria-checked', nodeBlackList, false);
	}])
	.directive('ngChecked', ['$aria', function($aria) {
	  return $aria.$$watchExpr('ngChecked', 'aria-checked', nodeBlackList, false);
	}])
	.directive('ngReadonly', ['$aria', function($aria) {
	  return $aria.$$watchExpr('ngReadonly', 'aria-readonly', nodeBlackList, false);
	}])
	.directive('ngRequired', ['$aria', function($aria) {
	  return $aria.$$watchExpr('ngRequired', 'aria-required', nodeBlackList, false);
	}])
	.directive('ngModel', ['$aria', function($aria) {

	  function shouldAttachAttr(attr, normalizedAttr, elem, allowBlacklistEls) {
	    return $aria.config(normalizedAttr) && !elem.attr(attr) && (allowBlacklistEls || !isNodeOneOf(elem, nodeBlackList));
	  }

	  function shouldAttachRole(role, elem) {
	    // if element does not have role attribute
	    // AND element type is equal to role (if custom element has a type equaling shape) <-- remove?
	    // AND element is not INPUT
	    return !elem.attr('role') && (elem.attr('type') === role) && (elem[0].nodeName !== 'INPUT');
	  }

	  function getShape(attr, elem) {
	    var type = attr.type,
	        role = attr.role;

	    return ((type || role) === 'checkbox' || role === 'menuitemcheckbox') ? 'checkbox' :
	           ((type || role) === 'radio'    || role === 'menuitemradio') ? 'radio' :
	           (type === 'range'              || role === 'progressbar' || role === 'slider') ? 'range' : '';
	  }

	  return {
	    restrict: 'A',
	    require: 'ngModel',
	    priority: 200, //Make sure watches are fired after any other directives that affect the ngModel value
	    compile: function(elem, attr) {
	      var shape = getShape(attr, elem);

	      return {
	        pre: function(scope, elem, attr, ngModel) {
	          if (shape === 'checkbox') {
	            //Use the input[checkbox] $isEmpty implementation for elements with checkbox roles
	            ngModel.$isEmpty = function(value) {
	              return value === false;
	            };
	          }
	        },
	        post: function(scope, elem, attr, ngModel) {
	          var needsTabIndex = shouldAttachAttr('tabindex', 'tabindex', elem, false);

	          function ngAriaWatchModelValue() {
	            return ngModel.$modelValue;
	          }

	          function getRadioReaction(newVal) {
	            var boolVal = (attr.value == ngModel.$viewValue);
	            elem.attr('aria-checked', boolVal);
	          }

	          function getCheckboxReaction() {
	            elem.attr('aria-checked', !ngModel.$isEmpty(ngModel.$viewValue));
	          }

	          switch (shape) {
	            case 'radio':
	            case 'checkbox':
	              if (shouldAttachRole(shape, elem)) {
	                elem.attr('role', shape);
	              }
	              if (shouldAttachAttr('aria-checked', 'ariaChecked', elem, false)) {
	                scope.$watch(ngAriaWatchModelValue, shape === 'radio' ?
	                    getRadioReaction : getCheckboxReaction);
	              }
	              if (needsTabIndex) {
	                elem.attr('tabindex', 0);
	              }
	              break;
	            case 'range':
	              if (shouldAttachRole(shape, elem)) {
	                elem.attr('role', 'slider');
	              }
	              if ($aria.config('ariaValue')) {
	                var needsAriaValuemin = !elem.attr('aria-valuemin') &&
	                    (attr.hasOwnProperty('min') || attr.hasOwnProperty('ngMin'));
	                var needsAriaValuemax = !elem.attr('aria-valuemax') &&
	                    (attr.hasOwnProperty('max') || attr.hasOwnProperty('ngMax'));
	                var needsAriaValuenow = !elem.attr('aria-valuenow');

	                if (needsAriaValuemin) {
	                  attr.$observe('min', function ngAriaValueMinReaction(newVal) {
	                    elem.attr('aria-valuemin', newVal);
	                  });
	                }
	                if (needsAriaValuemax) {
	                  attr.$observe('max', function ngAriaValueMinReaction(newVal) {
	                    elem.attr('aria-valuemax', newVal);
	                  });
	                }
	                if (needsAriaValuenow) {
	                  scope.$watch(ngAriaWatchModelValue, function ngAriaValueNowReaction(newVal) {
	                    elem.attr('aria-valuenow', newVal);
	                  });
	                }
	              }
	              if (needsTabIndex) {
	                elem.attr('tabindex', 0);
	              }
	              break;
	          }

	          if (!attr.hasOwnProperty('ngRequired') && ngModel.$validators.required
	            && shouldAttachAttr('aria-required', 'ariaRequired', elem, false)) {
	            // ngModel.$error.required is undefined on custom controls
	            attr.$observe('required', function() {
	              elem.attr('aria-required', !!attr['required']);
	            });
	          }

	          if (shouldAttachAttr('aria-invalid', 'ariaInvalid', elem, true)) {
	            scope.$watch(function ngAriaInvalidWatch() {
	              return ngModel.$invalid;
	            }, function ngAriaInvalidReaction(newVal) {
	              elem.attr('aria-invalid', !!newVal);
	            });
	          }
	        }
	      };
	    }
	  };
	}])
	.directive('ngDisabled', ['$aria', function($aria) {
	  return $aria.$$watchExpr('ngDisabled', 'aria-disabled', nodeBlackList, false);
	}])
	.directive('ngMessages', function() {
	  return {
	    restrict: 'A',
	    require: '?ngMessages',
	    link: function(scope, elem, attr, ngMessages) {
	      if (!elem.attr('aria-live')) {
	        elem.attr('aria-live', 'assertive');
	      }
	    }
	  };
	})
	.directive('ngClick',['$aria', '$parse', function($aria, $parse) {
	  return {
	    restrict: 'A',
	    compile: function(elem, attr) {
	      var fn = $parse(attr.ngClick, /* interceptorFn */ null, /* expensiveChecks */ true);
	      return function(scope, elem, attr) {

	        if (!isNodeOneOf(elem, nodeBlackList)) {

	          if ($aria.config('bindRoleForClick') && !elem.attr('role')) {
	            elem.attr('role', 'button');
	          }

	          if ($aria.config('tabindex') && !elem.attr('tabindex')) {
	            elem.attr('tabindex', 0);
	          }

	          if ($aria.config('bindKeypress') && !attr.ngKeypress) {
	            elem.on('keypress', function(event) {
	              var keyCode = event.which || event.keyCode;
	              if (keyCode === 32 || keyCode === 13) {
	                scope.$apply(callback);
	              }

	              function callback() {
	                fn(scope, { $event: event });
	              }
	            });
	          }
	        }
	      };
	    }
	  };
	}])
	.directive('ngDblclick', ['$aria', function($aria) {
	  return function(scope, elem, attr) {
	    if ($aria.config('tabindex') && !elem.attr('tabindex') && !isNodeOneOf(elem, nodeBlackList)) {
	      elem.attr('tabindex', 0);
	    }
	  };
	}]);


	})(window, window.angular);


/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78);
	module.exports = 'ngAria';


/***/ },

/***/ 80:
/***/ function(module, exports) {

	(function() {


	// Create all modules and define dependencies to make sure they exist
	// and are loaded in the correct order to satisfy dependency injection
	// before all nested files are concatenated by Grunt

	// Modules
	angular.module('angular-jwt',
	    [
	        'angular-jwt.interceptor',
	        'angular-jwt.jwt'
	    ]);

	 angular.module('angular-jwt.interceptor', [])
	  .provider('jwtInterceptor', function() {

	    this.urlParam = null;
	    this.authHeader = 'Authorization';
	    this.authPrefix = 'Bearer ';
	    this.tokenGetter = function() {
	      return null;
	    }

	    var config = this;

	    this.$get = ["$q", "$injector", "$rootScope", function ($q, $injector, $rootScope) {
	      return {
	        request: function (request) {
	          if (request.skipAuthorization) {
	            return request;
	          }

	          if (config.urlParam) {
	            request.params = request.params || {};
	            // Already has the token in the url itself
	            if (request.params[config.urlParam]) {
	              return request;
	            }
	          } else {
	            request.headers = request.headers || {};
	            // Already has an Authorization header
	            if (request.headers[config.authHeader]) {
	              return request;
	            }
	          }

	          var tokenPromise = $q.when($injector.invoke(config.tokenGetter, this, {
	            config: request
	          }));

	          return tokenPromise.then(function(token) {
	            if (token) {
	              if (config.urlParam) {
	                request.params[config.urlParam] = token;
	              } else {
	                request.headers[config.authHeader] = config.authPrefix + token;
	              }
	            }
	            return request;
	          });
	        },
	        responseError: function (response) {
	          // handle the case where the user is not authenticated
	          if (response.status === 401) {
	            $rootScope.$broadcast('unauthenticated', response);
	          }
	          return $q.reject(response);
	        }
	      };
	    }];
	  });

	 angular.module('angular-jwt.jwt', [])
	  .service('jwtHelper', function() {

	    this.urlBase64Decode = function(str) {
	      var output = str.replace(/-/g, '+').replace(/_/g, '/');
	      switch (output.length % 4) {
	        case 0: { break; }
	        case 2: { output += '=='; break; }
	        case 3: { output += '='; break; }
	        default: {
	          throw 'Illegal base64url string!';
	        }
	      }
	      return decodeURIComponent(escape(window.atob(output))); //polifyll https://github.com/davidchambers/Base64.js
	    }


	    this.decodeToken = function(token) {
	      var parts = token.split('.');

	      if (parts.length !== 3) {
	        throw new Error('JWT must have 3 parts');
	      }

	      var decoded = this.urlBase64Decode(parts[1]);
	      if (!decoded) {
	        throw new Error('Cannot decode the token');
	      }

	      return JSON.parse(decoded);
	    }

	    this.getTokenExpirationDate = function(token) {
	      var decoded;
	      decoded = this.decodeToken(token);

	      if(typeof decoded.exp === "undefined") {
	        return null;
	      }

	      var d = new Date(0); // The 0 here is the key, which sets the date to the epoch
	      d.setUTCSeconds(decoded.exp);

	      return d;
	    };

	    this.isTokenExpired = function(token, offsetSeconds) {
	      var d = this.getTokenExpirationDate(token);
	      offsetSeconds = offsetSeconds || 0;
	      if (d === null) {
	        return false;
	      }

	      // Token expired?
	      return !(d.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
	    };
	  });

	}());

/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(80);
	module.exports = 'angular-jwt';



/***/ },

/***/ 83:
/***/ function(module, exports) {

	/**
	 * @license AngularJS v1.5.5
	 * (c) 2010-2016 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular) {'use strict';

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 *     Any commits to this file should be reviewed with security in mind.  *
	 *   Changes to this file can potentially create security vulnerabilities. *
	 *          An approval from 2 Core members with history of modifying      *
	 *                         this file is required.                          *
	 *                                                                         *
	 *  Does the change somehow allow for arbitrary javascript to be executed? *
	 *    Or allows for someone to change the prototype of built-in objects?   *
	 *     Or gives undesired access to variables likes document or window?    *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	var $sanitizeMinErr = angular.$$minErr('$sanitize');

	/**
	 * @ngdoc module
	 * @name ngSanitize
	 * @description
	 *
	 * # ngSanitize
	 *
	 * The `ngSanitize` module provides functionality to sanitize HTML.
	 *
	 *
	 * <div doc-module-components="ngSanitize"></div>
	 *
	 * See {@link ngSanitize.$sanitize `$sanitize`} for usage.
	 */

	/**
	 * @ngdoc service
	 * @name $sanitize
	 * @kind function
	 *
	 * @description
	 *   Sanitizes an html string by stripping all potentially dangerous tokens.
	 *
	 *   The input is sanitized by parsing the HTML into tokens. All safe tokens (from a whitelist) are
	 *   then serialized back to properly escaped html string. This means that no unsafe input can make
	 *   it into the returned string.
	 *
	 *   The whitelist for URL sanitization of attribute values is configured using the functions
	 *   `aHrefSanitizationWhitelist` and `imgSrcSanitizationWhitelist` of {@link ng.$compileProvider
	 *   `$compileProvider`}.
	 *
	 *   The input may also contain SVG markup if this is enabled via {@link $sanitizeProvider}.
	 *
	 * @param {string} html HTML input.
	 * @returns {string} Sanitized HTML.
	 *
	 * @example
	   <example module="sanitizeExample" deps="angular-sanitize.js">
	   <file name="index.html">
	     <script>
	         angular.module('sanitizeExample', ['ngSanitize'])
	           .controller('ExampleController', ['$scope', '$sce', function($scope, $sce) {
	             $scope.snippet =
	               '<p style="color:blue">an html\n' +
	               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
	               'snippet</p>';
	             $scope.deliberatelyTrustDangerousSnippet = function() {
	               return $sce.trustAsHtml($scope.snippet);
	             };
	           }]);
	     </script>
	     <div ng-controller="ExampleController">
	        Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
	       <table>
	         <tr>
	           <td>Directive</td>
	           <td>How</td>
	           <td>Source</td>
	           <td>Rendered</td>
	         </tr>
	         <tr id="bind-html-with-sanitize">
	           <td>ng-bind-html</td>
	           <td>Automatically uses $sanitize</td>
	           <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
	           <td><div ng-bind-html="snippet"></div></td>
	         </tr>
	         <tr id="bind-html-with-trust">
	           <td>ng-bind-html</td>
	           <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
	           <td>
	           <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
	&lt;/div&gt;</pre>
	           </td>
	           <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
	         </tr>
	         <tr id="bind-default">
	           <td>ng-bind</td>
	           <td>Automatically escapes</td>
	           <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
	           <td><div ng-bind="snippet"></div></td>
	         </tr>
	       </table>
	       </div>
	   </file>
	   <file name="protractor.js" type="protractor">
	     it('should sanitize the html snippet by default', function() {
	       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
	         toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
	     });

	     it('should inline raw snippet if bound to a trusted value', function() {
	       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).
	         toBe("<p style=\"color:blue\">an html\n" +
	              "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
	              "snippet</p>");
	     });

	     it('should escape snippet without any filter', function() {
	       expect(element(by.css('#bind-default div')).getInnerHtml()).
	         toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
	              "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
	              "snippet&lt;/p&gt;");
	     });

	     it('should update', function() {
	       element(by.model('snippet')).clear();
	       element(by.model('snippet')).sendKeys('new <b onclick="alert(1)">text</b>');
	       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
	         toBe('new <b>text</b>');
	       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).toBe(
	         'new <b onclick="alert(1)">text</b>');
	       expect(element(by.css('#bind-default div')).getInnerHtml()).toBe(
	         "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
	     });
	   </file>
	   </example>
	 */


	/**
	 * @ngdoc provider
	 * @name $sanitizeProvider
	 *
	 * @description
	 * Creates and configures {@link $sanitize} instance.
	 */
	function $SanitizeProvider() {
	  var svgEnabled = false;

	  this.$get = ['$$sanitizeUri', function($$sanitizeUri) {
	    if (svgEnabled) {
	      angular.extend(validElements, svgElements);
	    }
	    return function(html) {
	      var buf = [];
	      htmlParser(html, htmlSanitizeWriter(buf, function(uri, isImage) {
	        return !/^unsafe:/.test($$sanitizeUri(uri, isImage));
	      }));
	      return buf.join('');
	    };
	  }];


	  /**
	   * @ngdoc method
	   * @name $sanitizeProvider#enableSvg
	   * @kind function
	   *
	   * @description
	   * Enables a subset of svg to be supported by the sanitizer.
	   *
	   * <div class="alert alert-warning">
	   *   <p>By enabling this setting without taking other precautions, you might expose your
	   *   application to click-hijacking attacks. In these attacks, sanitized svg elements could be positioned
	   *   outside of the containing element and be rendered over other elements on the page (e.g. a login
	   *   link). Such behavior can then result in phishing incidents.</p>
	   *
	   *   <p>To protect against these, explicitly setup `overflow: hidden` css rule for all potential svg
	   *   tags within the sanitized content:</p>
	   *
	   *   <br>
	   *
	   *   <pre><code>
	   *   .rootOfTheIncludedContent svg {
	   *     overflow: hidden !important;
	   *   }
	   *   </code></pre>
	   * </div>
	   *
	   * @param {boolean=} regexp New regexp to whitelist urls with.
	   * @returns {boolean|ng.$sanitizeProvider} Returns the currently configured value if called
	   *    without an argument or self for chaining otherwise.
	   */
	  this.enableSvg = function(enableSvg) {
	    if (angular.isDefined(enableSvg)) {
	      svgEnabled = enableSvg;
	      return this;
	    } else {
	      return svgEnabled;
	    }
	  };
	}

	function sanitizeText(chars) {
	  var buf = [];
	  var writer = htmlSanitizeWriter(buf, angular.noop);
	  writer.chars(chars);
	  return buf.join('');
	}


	// Regular Expressions for parsing tags and attributes
	var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
	  // Match everything outside of normal chars and " (quote character)
	  NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;


	// Good source of info about elements and attributes
	// http://dev.w3.org/html5/spec/Overview.html#semantics
	// http://simon.html5.org/html-elements

	// Safe Void Elements - HTML5
	// http://dev.w3.org/html5/spec/Overview.html#void-elements
	var voidElements = toMap("area,br,col,hr,img,wbr");

	// Elements that you can, intentionally, leave open (and which close themselves)
	// http://dev.w3.org/html5/spec/Overview.html#optional-tags
	var optionalEndTagBlockElements = toMap("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
	    optionalEndTagInlineElements = toMap("rp,rt"),
	    optionalEndTagElements = angular.extend({},
	                                            optionalEndTagInlineElements,
	                                            optionalEndTagBlockElements);

	// Safe Block Elements - HTML5
	var blockElements = angular.extend({}, optionalEndTagBlockElements, toMap("address,article," +
	        "aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5," +
	        "h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul"));

	// Inline Elements - HTML5
	var inlineElements = angular.extend({}, optionalEndTagInlineElements, toMap("a,abbr,acronym,b," +
	        "bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s," +
	        "samp,small,span,strike,strong,sub,sup,time,tt,u,var"));

	// SVG Elements
	// https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Elements
	// Note: the elements animate,animateColor,animateMotion,animateTransform,set are intentionally omitted.
	// They can potentially allow for arbitrary javascript to be executed. See #11290
	var svgElements = toMap("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph," +
	        "hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline," +
	        "radialGradient,rect,stop,svg,switch,text,title,tspan");

	// Blocked Elements (will be stripped)
	var blockedElements = toMap("script,style");

	var validElements = angular.extend({},
	                                   voidElements,
	                                   blockElements,
	                                   inlineElements,
	                                   optionalEndTagElements);

	//Attributes that have href and hence need to be sanitized
	var uriAttrs = toMap("background,cite,href,longdesc,src,xlink:href");

	var htmlAttrs = toMap('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' +
	    'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' +
	    'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' +
	    'scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,' +
	    'valign,value,vspace,width');

	// SVG attributes (without "id" and "name" attributes)
	// https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Attributes
	var svgAttrs = toMap('accent-height,accumulate,additive,alphabetic,arabic-form,ascent,' +
	    'baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,' +
	    'cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,' +
	    'font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,' +
	    'height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,' +
	    'marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,' +
	    'max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,' +
	    'path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,' +
	    'requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,' +
	    'stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,' +
	    'stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,' +
	    'stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,' +
	    'underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,' +
	    'width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,' +
	    'xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan', true);

	var validAttrs = angular.extend({},
	                                uriAttrs,
	                                svgAttrs,
	                                htmlAttrs);

	function toMap(str, lowercaseKeys) {
	  var obj = {}, items = str.split(','), i;
	  for (i = 0; i < items.length; i++) {
	    obj[lowercaseKeys ? angular.lowercase(items[i]) : items[i]] = true;
	  }
	  return obj;
	}

	var inertBodyElement;
	(function(window) {
	  var doc;
	  if (window.document && window.document.implementation) {
	    doc = window.document.implementation.createHTMLDocument("inert");
	  } else {
	    throw $sanitizeMinErr('noinert', "Can't create an inert html document");
	  }
	  var docElement = doc.documentElement || doc.getDocumentElement();
	  var bodyElements = docElement.getElementsByTagName('body');

	  // usually there should be only one body element in the document, but IE doesn't have any, so we need to create one
	  if (bodyElements.length === 1) {
	    inertBodyElement = bodyElements[0];
	  } else {
	    var html = doc.createElement('html');
	    inertBodyElement = doc.createElement('body');
	    html.appendChild(inertBodyElement);
	    doc.appendChild(html);
	  }
	})(window);

	/**
	 * @example
	 * htmlParser(htmlString, {
	 *     start: function(tag, attrs) {},
	 *     end: function(tag) {},
	 *     chars: function(text) {},
	 *     comment: function(text) {}
	 * });
	 *
	 * @param {string} html string
	 * @param {object} handler
	 */
	function htmlParser(html, handler) {
	  if (html === null || html === undefined) {
	    html = '';
	  } else if (typeof html !== 'string') {
	    html = '' + html;
	  }
	  inertBodyElement.innerHTML = html;

	  //mXSS protection
	  var mXSSAttempts = 5;
	  do {
	    if (mXSSAttempts === 0) {
	      throw $sanitizeMinErr('uinput', "Failed to sanitize html because the input is unstable");
	    }
	    mXSSAttempts--;

	    // strip custom-namespaced attributes on IE<=11
	    if (window.document.documentMode) {
	      stripCustomNsAttrs(inertBodyElement);
	    }
	    html = inertBodyElement.innerHTML; //trigger mXSS
	    inertBodyElement.innerHTML = html;
	  } while (html !== inertBodyElement.innerHTML);

	  var node = inertBodyElement.firstChild;
	  while (node) {
	    switch (node.nodeType) {
	      case 1: // ELEMENT_NODE
	        handler.start(node.nodeName.toLowerCase(), attrToMap(node.attributes));
	        break;
	      case 3: // TEXT NODE
	        handler.chars(node.textContent);
	        break;
	    }

	    var nextNode;
	    if (!(nextNode = node.firstChild)) {
	      if (node.nodeType == 1) {
	        handler.end(node.nodeName.toLowerCase());
	      }
	      nextNode = node.nextSibling;
	      if (!nextNode) {
	        while (nextNode == null) {
	          node = node.parentNode;
	          if (node === inertBodyElement) break;
	          nextNode = node.nextSibling;
	          if (node.nodeType == 1) {
	            handler.end(node.nodeName.toLowerCase());
	          }
	        }
	      }
	    }
	    node = nextNode;
	  }

	  while (node = inertBodyElement.firstChild) {
	    inertBodyElement.removeChild(node);
	  }
	}

	function attrToMap(attrs) {
	  var map = {};
	  for (var i = 0, ii = attrs.length; i < ii; i++) {
	    var attr = attrs[i];
	    map[attr.name] = attr.value;
	  }
	  return map;
	}


	/**
	 * Escapes all potentially dangerous characters, so that the
	 * resulting string can be safely inserted into attribute or
	 * element text.
	 * @param value
	 * @returns {string} escaped text
	 */
	function encodeEntities(value) {
	  return value.
	    replace(/&/g, '&amp;').
	    replace(SURROGATE_PAIR_REGEXP, function(value) {
	      var hi = value.charCodeAt(0);
	      var low = value.charCodeAt(1);
	      return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
	    }).
	    replace(NON_ALPHANUMERIC_REGEXP, function(value) {
	      return '&#' + value.charCodeAt(0) + ';';
	    }).
	    replace(/</g, '&lt;').
	    replace(/>/g, '&gt;');
	}

	/**
	 * create an HTML/XML writer which writes to buffer
	 * @param {Array} buf use buf.join('') to get out sanitized html string
	 * @returns {object} in the form of {
	 *     start: function(tag, attrs) {},
	 *     end: function(tag) {},
	 *     chars: function(text) {},
	 *     comment: function(text) {}
	 * }
	 */
	function htmlSanitizeWriter(buf, uriValidator) {
	  var ignoreCurrentElement = false;
	  var out = angular.bind(buf, buf.push);
	  return {
	    start: function(tag, attrs) {
	      tag = angular.lowercase(tag);
	      if (!ignoreCurrentElement && blockedElements[tag]) {
	        ignoreCurrentElement = tag;
	      }
	      if (!ignoreCurrentElement && validElements[tag] === true) {
	        out('<');
	        out(tag);
	        angular.forEach(attrs, function(value, key) {
	          var lkey=angular.lowercase(key);
	          var isImage = (tag === 'img' && lkey === 'src') || (lkey === 'background');
	          if (validAttrs[lkey] === true &&
	            (uriAttrs[lkey] !== true || uriValidator(value, isImage))) {
	            out(' ');
	            out(key);
	            out('="');
	            out(encodeEntities(value));
	            out('"');
	          }
	        });
	        out('>');
	      }
	    },
	    end: function(tag) {
	      tag = angular.lowercase(tag);
	      if (!ignoreCurrentElement && validElements[tag] === true && voidElements[tag] !== true) {
	        out('</');
	        out(tag);
	        out('>');
	      }
	      if (tag == ignoreCurrentElement) {
	        ignoreCurrentElement = false;
	      }
	    },
	    chars: function(chars) {
	      if (!ignoreCurrentElement) {
	        out(encodeEntities(chars));
	      }
	    }
	  };
	}


	/**
	 * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1' attribute to declare
	 * ns1 namespace and prefixes the attribute with 'ns1' (e.g. 'ns1:xlink:foo'). This is undesirable since we don't want
	 * to allow any of these custom attributes. This method strips them all.
	 *
	 * @param node Root element to process
	 */
	function stripCustomNsAttrs(node) {
	  if (node.nodeType === window.Node.ELEMENT_NODE) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var attrNode = attrs[i];
	      var attrName = attrNode.name.toLowerCase();
	      if (attrName === 'xmlns:ns1' || attrName.indexOf('ns1:') === 0) {
	        node.removeAttributeNode(attrNode);
	        i--;
	        l--;
	      }
	    }
	  }

	  var nextNode = node.firstChild;
	  if (nextNode) {
	    stripCustomNsAttrs(nextNode);
	  }

	  nextNode = node.nextSibling;
	  if (nextNode) {
	    stripCustomNsAttrs(nextNode);
	  }
	}



	// define ngSanitize module and register $sanitize service
	angular.module('ngSanitize', []).provider('$sanitize', $SanitizeProvider);

	/* global sanitizeText: false */

	/**
	 * @ngdoc filter
	 * @name linky
	 * @kind function
	 *
	 * @description
	 * Finds links in text input and turns them into html links. Supports `http/https/ftp/mailto` and
	 * plain email address links.
	 *
	 * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
	 *
	 * @param {string} text Input text.
	 * @param {string} target Window (`_blank|_self|_parent|_top`) or named frame to open links in.
	 * @param {object|function(url)} [attributes] Add custom attributes to the link element.
	 *
	 *    Can be one of:
	 *
	 *    - `object`: A map of attributes
	 *    - `function`: Takes the url as a parameter and returns a map of attributes
	 *
	 *    If the map of attributes contains a value for `target`, it overrides the value of
	 *    the target parameter.
	 *
	 *
	 * @returns {string} Html-linkified and {@link $sanitize sanitized} text.
	 *
	 * @usage
	   <span ng-bind-html="linky_expression | linky"></span>
	 *
	 * @example
	   <example module="linkyExample" deps="angular-sanitize.js">
	     <file name="index.html">
	       <div ng-controller="ExampleController">
	       Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
	       <table>
	         <tr>
	           <th>Filter</th>
	           <th>Source</th>
	           <th>Rendered</th>
	         </tr>
	         <tr id="linky-filter">
	           <td>linky filter</td>
	           <td>
	             <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
	           </td>
	           <td>
	             <div ng-bind-html="snippet | linky"></div>
	           </td>
	         </tr>
	         <tr id="linky-target">
	          <td>linky target</td>
	          <td>
	            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
	          </td>
	          <td>
	            <div ng-bind-html="snippetWithSingleURL | linky:'_blank'"></div>
	          </td>
	         </tr>
	         <tr id="linky-custom-attributes">
	          <td>linky custom attributes</td>
	          <td>
	            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"&gt;<br>&lt;/div&gt;</pre>
	          </td>
	          <td>
	            <div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"></div>
	          </td>
	         </tr>
	         <tr id="escaped-html">
	           <td>no filter</td>
	           <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
	           <td><div ng-bind="snippet"></div></td>
	         </tr>
	       </table>
	     </file>
	     <file name="script.js">
	       angular.module('linkyExample', ['ngSanitize'])
	         .controller('ExampleController', ['$scope', function($scope) {
	           $scope.snippet =
	             'Pretty text with some links:\n'+
	             'http://angularjs.org/,\n'+
	             'mailto:us@somewhere.org,\n'+
	             'another@somewhere.org,\n'+
	             'and one more: ftp://127.0.0.1/.';
	           $scope.snippetWithSingleURL = 'http://angularjs.org/';
	         }]);
	     </file>
	     <file name="protractor.js" type="protractor">
	       it('should linkify the snippet with urls', function() {
	         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
	             toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
	                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
	         expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
	       });

	       it('should not linkify snippet without the linky filter', function() {
	         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
	             toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
	                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
	         expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
	       });

	       it('should update', function() {
	         element(by.model('snippet')).clear();
	         element(by.model('snippet')).sendKeys('new http://link.');
	         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
	             toBe('new http://link.');
	         expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
	         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
	             .toBe('new http://link.');
	       });

	       it('should work with the target property', function() {
	        expect(element(by.id('linky-target')).
	            element(by.binding("snippetWithSingleURL | linky:'_blank'")).getText()).
	            toBe('http://angularjs.org/');
	        expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
	       });

	       it('should optionally add custom attributes', function() {
	        expect(element(by.id('linky-custom-attributes')).
	            element(by.binding("snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}")).getText()).
	            toBe('http://angularjs.org/');
	        expect(element(by.css('#linky-custom-attributes a')).getAttribute('rel')).toEqual('nofollow');
	       });
	     </file>
	   </example>
	 */
	angular.module('ngSanitize').filter('linky', ['$sanitize', function($sanitize) {
	  var LINKY_URL_REGEXP =
	        /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
	      MAILTO_REGEXP = /^mailto:/i;

	  var linkyMinErr = angular.$$minErr('linky');
	  var isString = angular.isString;

	  return function(text, target, attributes) {
	    if (text == null || text === '') return text;
	    if (!isString(text)) throw linkyMinErr('notstring', 'Expected string but received: {0}', text);

	    var match;
	    var raw = text;
	    var html = [];
	    var url;
	    var i;
	    while ((match = raw.match(LINKY_URL_REGEXP))) {
	      // We can not end in these as they are sometimes found at the end of the sentence
	      url = match[0];
	      // if we did not match ftp/http/www/mailto then assume mailto
	      if (!match[2] && !match[4]) {
	        url = (match[3] ? 'http://' : 'mailto:') + url;
	      }
	      i = match.index;
	      addText(raw.substr(0, i));
	      addLink(url, match[0].replace(MAILTO_REGEXP, ''));
	      raw = raw.substring(i + match[0].length);
	    }
	    addText(raw);
	    return $sanitize(html.join(''));

	    function addText(text) {
	      if (!text) {
	        return;
	      }
	      html.push(sanitizeText(text));
	    }

	    function addLink(url, text) {
	      var key;
	      html.push('<a ');
	      if (angular.isFunction(attributes)) {
	        attributes = attributes(url);
	      }
	      if (angular.isObject(attributes)) {
	        for (key in attributes) {
	          html.push(key + '="' + attributes[key] + '" ');
	        }
	      } else {
	        attributes = {};
	      }
	      if (angular.isDefined(target) && !('target' in attributes)) {
	        html.push('target="',
	                  target,
	                  '" ');
	      }
	      html.push('href="',
	                url.replace(/"/g, '&quot;'),
	                '">');
	      addText(text);
	      html.push('</a>');
	    }
	  };
	}]);


	})(window, window.angular);


/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	module.exports = 'ngSanitize';


/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	// This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.
	__webpack_require__(116)
	__webpack_require__(106)
	__webpack_require__(107)
	__webpack_require__(108)
	__webpack_require__(109)
	__webpack_require__(110)
	__webpack_require__(111)
	__webpack_require__(115)
	__webpack_require__(112)
	__webpack_require__(113)
	__webpack_require__(114)
	__webpack_require__(105)

/***/ },

/***/ 105:
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: affix.js v3.3.6
	 * http://getbootstrap.com/javascript/#affix
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // AFFIX CLASS DEFINITION
	  // ======================

	  var Affix = function (element, options) {
	    this.options = $.extend({}, Affix.DEFAULTS, options)

	    this.$target = $(this.options.target)
	      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
	      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

	    this.$element     = $(element)
	    this.affixed      = null
	    this.unpin        = null
	    this.pinnedOffset = null

	    this.checkPosition()
	  }

	  Affix.VERSION  = '3.3.6'

	  Affix.RESET    = 'affix affix-top affix-bottom'

	  Affix.DEFAULTS = {
	    offset: 0,
	    target: window
	  }

	  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
	    var scrollTop    = this.$target.scrollTop()
	    var position     = this.$element.offset()
	    var targetHeight = this.$target.height()

	    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

	    if (this.affixed == 'bottom') {
	      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
	      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
	    }

	    var initializing   = this.affixed == null
	    var colliderTop    = initializing ? scrollTop : position.top
	    var colliderHeight = initializing ? targetHeight : height

	    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
	    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

	    return false
	  }

	  Affix.prototype.getPinnedOffset = function () {
	    if (this.pinnedOffset) return this.pinnedOffset
	    this.$element.removeClass(Affix.RESET).addClass('affix')
	    var scrollTop = this.$target.scrollTop()
	    var position  = this.$element.offset()
	    return (this.pinnedOffset = position.top - scrollTop)
	  }

	  Affix.prototype.checkPositionWithEventLoop = function () {
	    setTimeout($.proxy(this.checkPosition, this), 1)
	  }

	  Affix.prototype.checkPosition = function () {
	    if (!this.$element.is(':visible')) return

	    var height       = this.$element.height()
	    var offset       = this.options.offset
	    var offsetTop    = offset.top
	    var offsetBottom = offset.bottom
	    var scrollHeight = Math.max($(document).height(), $(document.body).height())

	    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
	    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
	    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

	    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

	    if (this.affixed != affix) {
	      if (this.unpin != null) this.$element.css('top', '')

	      var affixType = 'affix' + (affix ? '-' + affix : '')
	      var e         = $.Event(affixType + '.bs.affix')

	      this.$element.trigger(e)

	      if (e.isDefaultPrevented()) return

	      this.affixed = affix
	      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

	      this.$element
	        .removeClass(Affix.RESET)
	        .addClass(affixType)
	        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
	    }

	    if (affix == 'bottom') {
	      this.$element.offset({
	        top: scrollHeight - height - offsetBottom
	      })
	    }
	  }


	  // AFFIX PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.affix')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.affix

	  $.fn.affix             = Plugin
	  $.fn.affix.Constructor = Affix


	  // AFFIX NO CONFLICT
	  // =================

	  $.fn.affix.noConflict = function () {
	    $.fn.affix = old
	    return this
	  }


	  // AFFIX DATA-API
	  // ==============

	  $(window).on('load', function () {
	    $('[data-spy="affix"]').each(function () {
	      var $spy = $(this)
	      var data = $spy.data()

	      data.offset = data.offset || {}

	      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
	      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

	      Plugin.call($spy, data)
	    })
	  })

	}(jQuery);


/***/ },

/***/ 106:
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: alert.js v3.3.6
	 * http://getbootstrap.com/javascript/#alerts
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // ALERT CLASS DEFINITION
	  // ======================

	  var dismiss = '[data-dismiss="alert"]'
	  var Alert   = function (el) {
	    $(el).on('click', dismiss, this.close)
	  }

	  Alert.VERSION = '3.3.6'

	  Alert.TRANSITION_DURATION = 150

	  Alert.prototype.close = function (e) {
	    var $this    = $(this)
	    var selector = $this.attr('data-target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    var $parent = $(selector)

	    if (e) e.preventDefault()

	    if (!$parent.length) {
	      $parent = $this.closest('.alert')
	    }

	    $parent.trigger(e = $.Event('close.bs.alert'))

	    if (e.isDefaultPrevented()) return

	    $parent.removeClass('in')

	    function removeElement() {
	      // detach from parent, fire event then clean up data
	      $parent.detach().trigger('closed.bs.alert').remove()
	    }

	    $.support.transition && $parent.hasClass('fade') ?
	      $parent
	        .one('bsTransitionEnd', removeElement)
	        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
	      removeElement()
	  }


	  // ALERT PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.alert')

	      if (!data) $this.data('bs.alert', (data = new Alert(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }

	  var old = $.fn.alert

	  $.fn.alert             = Plugin
	  $.fn.alert.Constructor = Alert


	  // ALERT NO CONFLICT
	  // =================

	  $.fn.alert.noConflict = function () {
	    $.fn.alert = old
	    return this
	  }


	  // ALERT DATA-API
	  // ==============

	  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

	}(jQuery);


/***/ },

/***/ 107:
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: button.js v3.3.6
	 * http://getbootstrap.com/javascript/#buttons
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // BUTTON PUBLIC CLASS DEFINITION
	  // ==============================

	  var Button = function (element, options) {
	    this.$element  = $(element)
	    this.options   = $.extend({}, Button.DEFAULTS, options)
	    this.isLoading = false
	  }

	  Button.VERSION  = '3.3.6'

	  Button.DEFAULTS = {
	    loadingText: 'loading...'
	  }

	  Button.prototype.setState = function (state) {
	    var d    = 'disabled'
	    var $el  = this.$element
	    var val  = $el.is('input') ? 'val' : 'html'
	    var data = $el.data()

	    state += 'Text'

	    if (data.resetText == null) $el.data('resetText', $el[val]())

	    // push to event loop to allow forms to submit
	    setTimeout($.proxy(function () {
	      $el[val](data[state] == null ? this.options[state] : data[state])

	      if (state == 'loadingText') {
	        this.isLoading = true
	        $el.addClass(d).attr(d, d)
	      } else if (this.isLoading) {
	        this.isLoading = false
	        $el.removeClass(d).removeAttr(d)
	      }
	    }, this), 0)
	  }

	  Button.prototype.toggle = function () {
	    var changed = true
	    var $parent = this.$element.closest('[data-toggle="buttons"]')

	    if ($parent.length) {
	      var $input = this.$element.find('input')
	      if ($input.prop('type') == 'radio') {
	        if ($input.prop('checked')) changed = false
	        $parent.find('.active').removeClass('active')
	        this.$element.addClass('active')
	      } else if ($input.prop('type') == 'checkbox') {
	        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
	        this.$element.toggleClass('active')
	      }
	      $input.prop('checked', this.$element.hasClass('active'))
	      if (changed) $input.trigger('change')
	    } else {
	      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
	      this.$element.toggleClass('active')
	    }
	  }


	  // BUTTON PLUGIN DEFINITION
	  // ========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.button')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.button', (data = new Button(this, options)))

	      if (option == 'toggle') data.toggle()
	      else if (option) data.setState(option)
	    })
	  }

	  var old = $.fn.button

	  $.fn.button             = Plugin
	  $.fn.button.Constructor = Button


	  // BUTTON NO CONFLICT
	  // ==================

	  $.fn.button.noConflict = function () {
	    $.fn.button = old
	    return this
	  }


	  // BUTTON DATA-API
	  // ===============

	  $(document)
	    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      var $btn = $(e.target)
	      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
	      Plugin.call($btn, 'toggle')
	      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
	    })
	    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
	    })

	}(jQuery);


/***/ },

/***/ 108:
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: carousel.js v3.3.6
	 * http://getbootstrap.com/javascript/#carousel
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // CAROUSEL CLASS DEFINITION
	  // =========================

	  var Carousel = function (element, options) {
	    this.$element    = $(element)
	    this.$indicators = this.$element.find('.carousel-indicators')
	    this.options     = options
	    this.paused      = null
	    this.sliding     = null
	    this.interval    = null
	    this.$active     = null
	    this.$items      = null

	    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

	    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
	      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
	      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
	  }

	  Carousel.VERSION  = '3.3.6'

	  Carousel.TRANSITION_DURATION = 600

	  Carousel.DEFAULTS = {
	    interval: 5000,
	    pause: 'hover',
	    wrap: true,
	    keyboard: true
	  }

	  Carousel.prototype.keydown = function (e) {
	    if (/input|textarea/i.test(e.target.tagName)) return
	    switch (e.which) {
	      case 37: this.prev(); break
	      case 39: this.next(); break
	      default: return
	    }

	    e.preventDefault()
	  }

	  Carousel.prototype.cycle = function (e) {
	    e || (this.paused = false)

	    this.interval && clearInterval(this.interval)

	    this.options.interval
	      && !this.paused
	      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

	    return this
	  }

	  Carousel.prototype.getItemIndex = function (item) {
	    this.$items = item.parent().children('.item')
	    return this.$items.index(item || this.$active)
	  }

	  Carousel.prototype.getItemForDirection = function (direction, active) {
	    var activeIndex = this.getItemIndex(active)
	    var willWrap = (direction == 'prev' && activeIndex === 0)
	                || (direction == 'next' && activeIndex == (this.$items.length - 1))
	    if (willWrap && !this.options.wrap) return active
	    var delta = direction == 'prev' ? -1 : 1
	    var itemIndex = (activeIndex + delta) % this.$items.length
	    return this.$items.eq(itemIndex)
	  }

	  Carousel.prototype.to = function (pos) {
	    var that        = this
	    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

	    if (pos > (this.$items.length - 1) || pos < 0) return

	    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
	    if (activeIndex == pos) return this.pause().cycle()

	    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
	  }

	  Carousel.prototype.pause = function (e) {
	    e || (this.paused = true)

	    if (this.$element.find('.next, .prev').length && $.support.transition) {
	      this.$element.trigger($.support.transition.end)
	      this.cycle(true)
	    }

	    this.interval = clearInterval(this.interval)

	    return this
	  }

	  Carousel.prototype.next = function () {
	    if (this.sliding) return
	    return this.slide('next')
	  }

	  Carousel.prototype.prev = function () {
	    if (this.sliding) return
	    return this.slide('prev')
	  }

	  Carousel.prototype.slide = function (type, next) {
	    var $active   = this.$element.find('.item.active')
	    var $next     = next || this.getItemForDirection(type, $active)
	    var isCycling = this.interval
	    var direction = type == 'next' ? 'left' : 'right'
	    var that      = this

	    if ($next.hasClass('active')) return (this.sliding = false)

	    var relatedTarget = $next[0]
	    var slideEvent = $.Event('slide.bs.carousel', {
	      relatedTarget: relatedTarget,
	      direction: direction
	    })
	    this.$element.trigger(slideEvent)
	    if (slideEvent.isDefaultPrevented()) return

	    this.sliding = true

	    isCycling && this.pause()

	    if (this.$indicators.length) {
	      this.$indicators.find('.active').removeClass('active')
	      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
	      $nextIndicator && $nextIndicator.addClass('active')
	    }

	    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
	    if ($.support.transition && this.$element.hasClass('slide')) {
	      $next.addClass(type)
	      $next[0].offsetWidth // force reflow
	      $active.addClass(direction)
	      $next.addClass(direction)
	      $active
	        .one('bsTransitionEnd', function () {
	          $next.removeClass([type, direction].join(' ')).addClass('active')
	          $active.removeClass(['active', direction].join(' '))
	          that.sliding = false
	          setTimeout(function () {
	            that.$element.trigger(slidEvent)
	          }, 0)
	        })
	        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
	    } else {
	      $active.removeClass('active')
	      $next.addClass('active')
	      this.sliding = false
	      this.$element.trigger(slidEvent)
	    }

	    isCycling && this.cycle()

	    return this
	  }


	  // CAROUSEL PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.carousel')
	      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
	      var action  = typeof option == 'string' ? option : options.slide

	      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
	      if (typeof option == 'number') data.to(option)
	      else if (action) data[action]()
	      else if (options.interval) data.pause().cycle()
	    })
	  }

	  var old = $.fn.carousel

	  $.fn.carousel             = Plugin
	  $.fn.carousel.Constructor = Carousel


	  // CAROUSEL NO CONFLICT
	  // ====================

	  $.fn.carousel.noConflict = function () {
	    $.fn.carousel = old
	    return this
	  }


	  // CAROUSEL DATA-API
	  // =================

	  var clickHandler = function (e) {
	    var href
	    var $this   = $(this)
	    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
	    if (!$target.hasClass('carousel')) return
	    var options = $.extend({}, $target.data(), $this.data())
	    var slideIndex = $this.attr('data-slide-to')
	    if (slideIndex) options.interval = false

	    Plugin.call($target, options)

	    if (slideIndex) {
	      $target.data('bs.carousel').to(slideIndex)
	    }

	    e.preventDefault()
	  }

	  $(document)
	    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
	    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

	  $(window).on('load', function () {
	    $('[data-ride="carousel"]').each(function () {
	      var $carousel = $(this)
	      Plugin.call($carousel, $carousel.data())
	    })
	  })

	}(jQuery);


/***/ },

/***/ 109:
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: collapse.js v3.3.6
	 * http://getbootstrap.com/javascript/#collapse
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // COLLAPSE PUBLIC CLASS DEFINITION
	  // ================================

	  var Collapse = function (element, options) {
	    this.$element      = $(element)
	    this.options       = $.extend({}, Collapse.DEFAULTS, options)
	    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
	                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
	    this.transitioning = null

	    if (this.options.parent) {
	      this.$parent = this.getParent()
	    } else {
	      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
	    }

	    if (this.options.toggle) this.toggle()
	  }

	  Collapse.VERSION  = '3.3.6'

	  Collapse.TRANSITION_DURATION = 350

	  Collapse.DEFAULTS = {
	    toggle: true
	  }

	  Collapse.prototype.dimension = function () {
	    var hasWidth = this.$element.hasClass('width')
	    return hasWidth ? 'width' : 'height'
	  }

	  Collapse.prototype.show = function () {
	    if (this.transitioning || this.$element.hasClass('in')) return

	    var activesData
	    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

	    if (actives && actives.length) {
	      activesData = actives.data('bs.collapse')
	      if (activesData && activesData.transitioning) return
	    }

	    var startEvent = $.Event('show.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return

	    if (actives && actives.length) {
	      Plugin.call(actives, 'hide')
	      activesData || actives.data('bs.collapse', null)
	    }

	    var dimension = this.dimension()

	    this.$element
	      .removeClass('collapse')
	      .addClass('collapsing')[dimension](0)
	      .attr('aria-expanded', true)

	    this.$trigger
	      .removeClass('collapsed')
	      .attr('aria-expanded', true)

	    this.transitioning = 1

	    var complete = function () {
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse in')[dimension]('')
	      this.transitioning = 0
	      this.$element
	        .trigger('shown.bs.collapse')
	    }

	    if (!$.support.transition) return complete.call(this)

	    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

	    this.$element
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
	  }

	  Collapse.prototype.hide = function () {
	    if (this.transitioning || !this.$element.hasClass('in')) return

	    var startEvent = $.Event('hide.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return

	    var dimension = this.dimension()

	    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

	    this.$element
	      .addClass('collapsing')
	      .removeClass('collapse in')
	      .attr('aria-expanded', false)

	    this.$trigger
	      .addClass('collapsed')
	      .attr('aria-expanded', false)

	    this.transitioning = 1

	    var complete = function () {
	      this.transitioning = 0
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse')
	        .trigger('hidden.bs.collapse')
	    }

	    if (!$.support.transition) return complete.call(this)

	    this.$element
	      [dimension](0)
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
	  }

	  Collapse.prototype.toggle = function () {
	    this[this.$element.hasClass('in') ? 'hide' : 'show']()
	  }

	  Collapse.prototype.getParent = function () {
	    return $(this.options.parent)
	      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
	      .each($.proxy(function (i, element) {
	        var $element = $(element)
	        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
	      }, this))
	      .end()
	  }

	  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
	    var isOpen = $element.hasClass('in')

	    $element.attr('aria-expanded', isOpen)
	    $trigger
	      .toggleClass('collapsed', !isOpen)
	      .attr('aria-expanded', isOpen)
	  }

	  function getTargetFromTrigger($trigger) {
	    var href
	    var target = $trigger.attr('data-target')
	      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

	    return $(target)
	  }


	  // COLLAPSE PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.collapse')
	      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

	      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
	      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.collapse

	  $.fn.collapse             = Plugin
	  $.fn.collapse.Constructor = Collapse


	  // COLLAPSE NO CONFLICT
	  // ====================

	  $.fn.collapse.noConflict = function () {
	    $.fn.collapse = old
	    return this
	  }


	  // COLLAPSE DATA-API
	  // =================

	  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
	    var $this   = $(this)

	    if (!$this.attr('data-target')) e.preventDefault()

	    var $target = getTargetFromTrigger($this)
	    var data    = $target.data('bs.collapse')
	    var option  = data ? 'toggle' : $this.data()

	    Plugin.call($target, option)
	  })

	}(jQuery);


/***/ },

/***/ 110:
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: dropdown.js v3.3.6
	 * http://getbootstrap.com/javascript/#dropdowns
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // DROPDOWN CLASS DEFINITION
	  // =========================

	  var backdrop = '.dropdown-backdrop'
	  var toggle   = '[data-toggle="dropdown"]'
	  var Dropdown = function (element) {
	    $(element).on('click.bs.dropdown', this.toggle)
	  }

	  Dropdown.VERSION = '3.3.6'

	  function getParent($this) {
	    var selector = $this.attr('data-target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    var $parent = selector && $(selector)

	    return $parent && $parent.length ? $parent : $this.parent()
	  }

	  function clearMenus(e) {
	    if (e && e.which === 3) return
	    $(backdrop).remove()
	    $(toggle).each(function () {
	      var $this         = $(this)
	      var $parent       = getParent($this)
	      var relatedTarget = { relatedTarget: this }

	      if (!$parent.hasClass('open')) return

	      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

	      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

	      if (e.isDefaultPrevented()) return

	      $this.attr('aria-expanded', 'false')
	      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
	    })
	  }

	  Dropdown.prototype.toggle = function (e) {
	    var $this = $(this)

	    if ($this.is('.disabled, :disabled')) return

	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')

	    clearMenus()

	    if (!isActive) {
	      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
	        // if mobile we use a backdrop because click events don't delegate
	        $(document.createElement('div'))
	          .addClass('dropdown-backdrop')
	          .insertAfter($(this))
	          .on('click', clearMenus)
	      }

	      var relatedTarget = { relatedTarget: this }
	      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

	      if (e.isDefaultPrevented()) return

	      $this
	        .trigger('focus')
	        .attr('aria-expanded', 'true')

	      $parent
	        .toggleClass('open')
	        .trigger($.Event('shown.bs.dropdown', relatedTarget))
	    }

	    return false
	  }

	  Dropdown.prototype.keydown = function (e) {
	    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

	    var $this = $(this)

	    e.preventDefault()
	    e.stopPropagation()

	    if ($this.is('.disabled, :disabled')) return

	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')

	    if (!isActive && e.which != 27 || isActive && e.which == 27) {
	      if (e.which == 27) $parent.find(toggle).trigger('focus')
	      return $this.trigger('click')
	    }

	    var desc = ' li:not(.disabled):visible a'
	    var $items = $parent.find('.dropdown-menu' + desc)

	    if (!$items.length) return

	    var index = $items.index(e.target)

	    if (e.which == 38 && index > 0)                 index--         // up
	    if (e.which == 40 && index < $items.length - 1) index++         // down
	    if (!~index)                                    index = 0

	    $items.eq(index).trigger('focus')
	  }


	  // DROPDOWN PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.dropdown')

	      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }

	  var old = $.fn.dropdown

	  $.fn.dropdown             = Plugin
	  $.fn.dropdown.Constructor = Dropdown


	  // DROPDOWN NO CONFLICT
	  // ====================

	  $.fn.dropdown.noConflict = function () {
	    $.fn.dropdown = old
	    return this
	  }


	  // APPLY TO STANDARD DROPDOWN ELEMENTS
	  // ===================================

	  $(document)
	    .on('click.bs.dropdown.data-api', clearMenus)
	    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
	    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
	    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
	    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

	}(jQuery);


/***/ },

/***/ 111:
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: modal.js v3.3.6
	 * http://getbootstrap.com/javascript/#modals
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // MODAL CLASS DEFINITION
	  // ======================

	  var Modal = function (element, options) {
	    this.options             = options
	    this.$body               = $(document.body)
	    this.$element            = $(element)
	    this.$dialog             = this.$element.find('.modal-dialog')
	    this.$backdrop           = null
	    this.isShown             = null
	    this.originalBodyPad     = null
	    this.scrollbarWidth      = 0
	    this.ignoreBackdropClick = false

	    if (this.options.remote) {
	      this.$element
	        .find('.modal-content')
	        .load(this.options.remote, $.proxy(function () {
	          this.$element.trigger('loaded.bs.modal')
	        }, this))
	    }
	  }

	  Modal.VERSION  = '3.3.6'

	  Modal.TRANSITION_DURATION = 300
	  Modal.BACKDROP_TRANSITION_DURATION = 150

	  Modal.DEFAULTS = {
	    backdrop: true,
	    keyboard: true,
	    show: true
	  }

	  Modal.prototype.toggle = function (_relatedTarget) {
	    return this.isShown ? this.hide() : this.show(_relatedTarget)
	  }

	  Modal.prototype.show = function (_relatedTarget) {
	    var that = this
	    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

	    this.$element.trigger(e)

	    if (this.isShown || e.isDefaultPrevented()) return

	    this.isShown = true

	    this.checkScrollbar()
	    this.setScrollbar()
	    this.$body.addClass('modal-open')

	    this.escape()
	    this.resize()

	    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

	    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
	      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
	        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
	      })
	    })

	    this.backdrop(function () {
	      var transition = $.support.transition && that.$element.hasClass('fade')

	      if (!that.$element.parent().length) {
	        that.$element.appendTo(that.$body) // don't move modals dom position
	      }

	      that.$element
	        .show()
	        .scrollTop(0)

	      that.adjustDialog()

	      if (transition) {
	        that.$element[0].offsetWidth // force reflow
	      }

	      that.$element.addClass('in')

	      that.enforceFocus()

	      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

	      transition ?
	        that.$dialog // wait for modal to slide in
	          .one('bsTransitionEnd', function () {
	            that.$element.trigger('focus').trigger(e)
	          })
	          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	        that.$element.trigger('focus').trigger(e)
	    })
	  }

	  Modal.prototype.hide = function (e) {
	    if (e) e.preventDefault()

	    e = $.Event('hide.bs.modal')

	    this.$element.trigger(e)

	    if (!this.isShown || e.isDefaultPrevented()) return

	    this.isShown = false

	    this.escape()
	    this.resize()

	    $(document).off('focusin.bs.modal')

	    this.$element
	      .removeClass('in')
	      .off('click.dismiss.bs.modal')
	      .off('mouseup.dismiss.bs.modal')

	    this.$dialog.off('mousedown.dismiss.bs.modal')

	    $.support.transition && this.$element.hasClass('fade') ?
	      this.$element
	        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
	        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	      this.hideModal()
	  }

	  Modal.prototype.enforceFocus = function () {
	    $(document)
	      .off('focusin.bs.modal') // guard against infinite focus loop
	      .on('focusin.bs.modal', $.proxy(function (e) {
	        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
	          this.$element.trigger('focus')
	        }
	      }, this))
	  }

	  Modal.prototype.escape = function () {
	    if (this.isShown && this.options.keyboard) {
	      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
	        e.which == 27 && this.hide()
	      }, this))
	    } else if (!this.isShown) {
	      this.$element.off('keydown.dismiss.bs.modal')
	    }
	  }

	  Modal.prototype.resize = function () {
	    if (this.isShown) {
	      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
	    } else {
	      $(window).off('resize.bs.modal')
	    }
	  }

	  Modal.prototype.hideModal = function () {
	    var that = this
	    this.$element.hide()
	    this.backdrop(function () {
	      that.$body.removeClass('modal-open')
	      that.resetAdjustments()
	      that.resetScrollbar()
	      that.$element.trigger('hidden.bs.modal')
	    })
	  }

	  Modal.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove()
	    this.$backdrop = null
	  }

	  Modal.prototype.backdrop = function (callback) {
	    var that = this
	    var animate = this.$element.hasClass('fade') ? 'fade' : ''

	    if (this.isShown && this.options.backdrop) {
	      var doAnimate = $.support.transition && animate

	      this.$backdrop = $(document.createElement('div'))
	        .addClass('modal-backdrop ' + animate)
	        .appendTo(this.$body)

	      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
	        if (this.ignoreBackdropClick) {
	          this.ignoreBackdropClick = false
	          return
	        }
	        if (e.target !== e.currentTarget) return
	        this.options.backdrop == 'static'
	          ? this.$element[0].focus()
	          : this.hide()
	      }, this))

	      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

	      this.$backdrop.addClass('in')

	      if (!callback) return

	      doAnimate ?
	        this.$backdrop
	          .one('bsTransitionEnd', callback)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callback()

	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass('in')

	      var callbackRemove = function () {
	        that.removeBackdrop()
	        callback && callback()
	      }
	      $.support.transition && this.$element.hasClass('fade') ?
	        this.$backdrop
	          .one('bsTransitionEnd', callbackRemove)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callbackRemove()

	    } else if (callback) {
	      callback()
	    }
	  }

	  // these following methods are used to handle overflowing modals

	  Modal.prototype.handleUpdate = function () {
	    this.adjustDialog()
	  }

	  Modal.prototype.adjustDialog = function () {
	    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

	    this.$element.css({
	      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
	      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
	    })
	  }

	  Modal.prototype.resetAdjustments = function () {
	    this.$element.css({
	      paddingLeft: '',
	      paddingRight: ''
	    })
	  }

	  Modal.prototype.checkScrollbar = function () {
	    var fullWindowWidth = window.innerWidth
	    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
	      var documentElementRect = document.documentElement.getBoundingClientRect()
	      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
	    }
	    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
	    this.scrollbarWidth = this.measureScrollbar()
	  }

	  Modal.prototype.setScrollbar = function () {
	    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
	    this.originalBodyPad = document.body.style.paddingRight || ''
	    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
	  }

	  Modal.prototype.resetScrollbar = function () {
	    this.$body.css('padding-right', this.originalBodyPad)
	  }

	  Modal.prototype.measureScrollbar = function () { // thx walsh
	    var scrollDiv = document.createElement('div')
	    scrollDiv.className = 'modal-scrollbar-measure'
	    this.$body.append(scrollDiv)
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
	    this.$body[0].removeChild(scrollDiv)
	    return scrollbarWidth
	  }


	  // MODAL PLUGIN DEFINITION
	  // =======================

	  function Plugin(option, _relatedTarget) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.modal')
	      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

	      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
	      if (typeof option == 'string') data[option](_relatedTarget)
	      else if (options.show) data.show(_relatedTarget)
	    })
	  }

	  var old = $.fn.modal

	  $.fn.modal             = Plugin
	  $.fn.modal.Constructor = Modal


	  // MODAL NO CONFLICT
	  // =================

	  $.fn.modal.noConflict = function () {
	    $.fn.modal = old
	    return this
	  }


	  // MODAL DATA-API
	  // ==============

	  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	    var $this   = $(this)
	    var href    = $this.attr('href')
	    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
	    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

	    if ($this.is('a')) e.preventDefault()

	    $target.one('show.bs.modal', function (showEvent) {
	      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
	      $target.one('hidden.bs.modal', function () {
	        $this.is(':visible') && $this.trigger('focus')
	      })
	    })
	    Plugin.call($target, option, this)
	  })

	}(jQuery);


/***/ },

/***/ 112:
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: popover.js v3.3.6
	 * http://getbootstrap.com/javascript/#popovers
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // POPOVER PUBLIC CLASS DEFINITION
	  // ===============================

	  var Popover = function (element, options) {
	    this.init('popover', element, options)
	  }

	  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

	  Popover.VERSION  = '3.3.6'

	  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
	    placement: 'right',
	    trigger: 'click',
	    content: '',
	    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	  })


	  // NOTE: POPOVER EXTENDS tooltip.js
	  // ================================

	  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

	  Popover.prototype.constructor = Popover

	  Popover.prototype.getDefaults = function () {
	    return Popover.DEFAULTS
	  }

	  Popover.prototype.setContent = function () {
	    var $tip    = this.tip()
	    var title   = this.getTitle()
	    var content = this.getContent()

	    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
	    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
	      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
	    ](content)

	    $tip.removeClass('fade top bottom left right in')

	    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
	    // this manually by checking the contents.
	    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
	  }

	  Popover.prototype.hasContent = function () {
	    return this.getTitle() || this.getContent()
	  }

	  Popover.prototype.getContent = function () {
	    var $e = this.$element
	    var o  = this.options

	    return $e.attr('data-content')
	      || (typeof o.content == 'function' ?
	            o.content.call($e[0]) :
	            o.content)
	  }

	  Popover.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
	  }


	  // POPOVER PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.popover')
	      var options = typeof option == 'object' && option

	      if (!data && /destroy|hide/.test(option)) return
	      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.popover

	  $.fn.popover             = Plugin
	  $.fn.popover.Constructor = Popover


	  // POPOVER NO CONFLICT
	  // ===================

	  $.fn.popover.noConflict = function () {
	    $.fn.popover = old
	    return this
	  }

	}(jQuery);


/***/ },

/***/ 113:
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: scrollspy.js v3.3.6
	 * http://getbootstrap.com/javascript/#scrollspy
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // SCROLLSPY CLASS DEFINITION
	  // ==========================

	  function ScrollSpy(element, options) {
	    this.$body          = $(document.body)
	    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
	    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
	    this.selector       = (this.options.target || '') + ' .nav li > a'
	    this.offsets        = []
	    this.targets        = []
	    this.activeTarget   = null
	    this.scrollHeight   = 0

	    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
	    this.refresh()
	    this.process()
	  }

	  ScrollSpy.VERSION  = '3.3.6'

	  ScrollSpy.DEFAULTS = {
	    offset: 10
	  }

	  ScrollSpy.prototype.getScrollHeight = function () {
	    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	  }

	  ScrollSpy.prototype.refresh = function () {
	    var that          = this
	    var offsetMethod  = 'offset'
	    var offsetBase    = 0

	    this.offsets      = []
	    this.targets      = []
	    this.scrollHeight = this.getScrollHeight()

	    if (!$.isWindow(this.$scrollElement[0])) {
	      offsetMethod = 'position'
	      offsetBase   = this.$scrollElement.scrollTop()
	    }

	    this.$body
	      .find(this.selector)
	      .map(function () {
	        var $el   = $(this)
	        var href  = $el.data('target') || $el.attr('href')
	        var $href = /^#./.test(href) && $(href)

	        return ($href
	          && $href.length
	          && $href.is(':visible')
	          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
	      })
	      .sort(function (a, b) { return a[0] - b[0] })
	      .each(function () {
	        that.offsets.push(this[0])
	        that.targets.push(this[1])
	      })
	  }

	  ScrollSpy.prototype.process = function () {
	    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
	    var scrollHeight = this.getScrollHeight()
	    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
	    var offsets      = this.offsets
	    var targets      = this.targets
	    var activeTarget = this.activeTarget
	    var i

	    if (this.scrollHeight != scrollHeight) {
	      this.refresh()
	    }

	    if (scrollTop >= maxScroll) {
	      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
	    }

	    if (activeTarget && scrollTop < offsets[0]) {
	      this.activeTarget = null
	      return this.clear()
	    }

	    for (i = offsets.length; i--;) {
	      activeTarget != targets[i]
	        && scrollTop >= offsets[i]
	        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
	        && this.activate(targets[i])
	    }
	  }

	  ScrollSpy.prototype.activate = function (target) {
	    this.activeTarget = target

	    this.clear()

	    var selector = this.selector +
	      '[data-target="' + target + '"],' +
	      this.selector + '[href="' + target + '"]'

	    var active = $(selector)
	      .parents('li')
	      .addClass('active')

	    if (active.parent('.dropdown-menu').length) {
	      active = active
	        .closest('li.dropdown')
	        .addClass('active')
	    }

	    active.trigger('activate.bs.scrollspy')
	  }

	  ScrollSpy.prototype.clear = function () {
	    $(this.selector)
	      .parentsUntil(this.options.target, '.active')
	      .removeClass('active')
	  }


	  // SCROLLSPY PLUGIN DEFINITION
	  // ===========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.scrollspy')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.scrollspy

	  $.fn.scrollspy             = Plugin
	  $.fn.scrollspy.Constructor = ScrollSpy


	  // SCROLLSPY NO CONFLICT
	  // =====================

	  $.fn.scrollspy.noConflict = function () {
	    $.fn.scrollspy = old
	    return this
	  }


	  // SCROLLSPY DATA-API
	  // ==================

	  $(window).on('load.bs.scrollspy.data-api', function () {
	    $('[data-spy="scroll"]').each(function () {
	      var $spy = $(this)
	      Plugin.call($spy, $spy.data())
	    })
	  })

	}(jQuery);


/***/ },

/***/ 114:
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: tab.js v3.3.6
	 * http://getbootstrap.com/javascript/#tabs
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // TAB CLASS DEFINITION
	  // ====================

	  var Tab = function (element) {
	    // jscs:disable requireDollarBeforejQueryAssignment
	    this.element = $(element)
	    // jscs:enable requireDollarBeforejQueryAssignment
	  }

	  Tab.VERSION = '3.3.6'

	  Tab.TRANSITION_DURATION = 150

	  Tab.prototype.show = function () {
	    var $this    = this.element
	    var $ul      = $this.closest('ul:not(.dropdown-menu)')
	    var selector = $this.data('target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    if ($this.parent('li').hasClass('active')) return

	    var $previous = $ul.find('.active:last a')
	    var hideEvent = $.Event('hide.bs.tab', {
	      relatedTarget: $this[0]
	    })
	    var showEvent = $.Event('show.bs.tab', {
	      relatedTarget: $previous[0]
	    })

	    $previous.trigger(hideEvent)
	    $this.trigger(showEvent)

	    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

	    var $target = $(selector)

	    this.activate($this.closest('li'), $ul)
	    this.activate($target, $target.parent(), function () {
	      $previous.trigger({
	        type: 'hidden.bs.tab',
	        relatedTarget: $this[0]
	      })
	      $this.trigger({
	        type: 'shown.bs.tab',
	        relatedTarget: $previous[0]
	      })
	    })
	  }

	  Tab.prototype.activate = function (element, container, callback) {
	    var $active    = container.find('> .active')
	    var transition = callback
	      && $.support.transition
	      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

	    function next() {
	      $active
	        .removeClass('active')
	        .find('> .dropdown-menu > .active')
	          .removeClass('active')
	        .end()
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', false)

	      element
	        .addClass('active')
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', true)

	      if (transition) {
	        element[0].offsetWidth // reflow for transition
	        element.addClass('in')
	      } else {
	        element.removeClass('fade')
	      }

	      if (element.parent('.dropdown-menu').length) {
	        element
	          .closest('li.dropdown')
	            .addClass('active')
	          .end()
	          .find('[data-toggle="tab"]')
	            .attr('aria-expanded', true)
	      }

	      callback && callback()
	    }

	    $active.length && transition ?
	      $active
	        .one('bsTransitionEnd', next)
	        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
	      next()

	    $active.removeClass('in')
	  }


	  // TAB PLUGIN DEFINITION
	  // =====================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.tab')

	      if (!data) $this.data('bs.tab', (data = new Tab(this)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.tab

	  $.fn.tab             = Plugin
	  $.fn.tab.Constructor = Tab


	  // TAB NO CONFLICT
	  // ===============

	  $.fn.tab.noConflict = function () {
	    $.fn.tab = old
	    return this
	  }


	  // TAB DATA-API
	  // ============

	  var clickHandler = function (e) {
	    e.preventDefault()
	    Plugin.call($(this), 'show')
	  }

	  $(document)
	    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
	    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

	}(jQuery);


/***/ },

/***/ 115:
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: tooltip.js v3.3.6
	 * http://getbootstrap.com/javascript/#tooltip
	 * Inspired by the original jQuery.tipsy by Jason Frame
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // TOOLTIP PUBLIC CLASS DEFINITION
	  // ===============================

	  var Tooltip = function (element, options) {
	    this.type       = null
	    this.options    = null
	    this.enabled    = null
	    this.timeout    = null
	    this.hoverState = null
	    this.$element   = null
	    this.inState    = null

	    this.init('tooltip', element, options)
	  }

	  Tooltip.VERSION  = '3.3.6'

	  Tooltip.TRANSITION_DURATION = 150

	  Tooltip.DEFAULTS = {
	    animation: true,
	    placement: 'top',
	    selector: false,
	    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    container: false,
	    viewport: {
	      selector: 'body',
	      padding: 0
	    }
	  }

	  Tooltip.prototype.init = function (type, element, options) {
	    this.enabled   = true
	    this.type      = type
	    this.$element  = $(element)
	    this.options   = this.getOptions(options)
	    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
	    this.inState   = { click: false, hover: false, focus: false }

	    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
	      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
	    }

	    var triggers = this.options.trigger.split(' ')

	    for (var i = triggers.length; i--;) {
	      var trigger = triggers[i]

	      if (trigger == 'click') {
	        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
	      } else if (trigger != 'manual') {
	        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
	        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

	        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
	        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
	      }
	    }

	    this.options.selector ?
	      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
	      this.fixTitle()
	  }

	  Tooltip.prototype.getDefaults = function () {
	    return Tooltip.DEFAULTS
	  }

	  Tooltip.prototype.getOptions = function (options) {
	    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

	    if (options.delay && typeof options.delay == 'number') {
	      options.delay = {
	        show: options.delay,
	        hide: options.delay
	      }
	    }

	    return options
	  }

	  Tooltip.prototype.getDelegateOptions = function () {
	    var options  = {}
	    var defaults = this.getDefaults()

	    this._options && $.each(this._options, function (key, value) {
	      if (defaults[key] != value) options[key] = value
	    })

	    return options
	  }

	  Tooltip.prototype.enter = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }

	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
	    }

	    if (self.tip().hasClass('in') || self.hoverState == 'in') {
	      self.hoverState = 'in'
	      return
	    }

	    clearTimeout(self.timeout)

	    self.hoverState = 'in'

	    if (!self.options.delay || !self.options.delay.show) return self.show()

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'in') self.show()
	    }, self.options.delay.show)
	  }

	  Tooltip.prototype.isInStateTrue = function () {
	    for (var key in this.inState) {
	      if (this.inState[key]) return true
	    }

	    return false
	  }

	  Tooltip.prototype.leave = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }

	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
	    }

	    if (self.isInStateTrue()) return

	    clearTimeout(self.timeout)

	    self.hoverState = 'out'

	    if (!self.options.delay || !self.options.delay.hide) return self.hide()

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'out') self.hide()
	    }, self.options.delay.hide)
	  }

	  Tooltip.prototype.show = function () {
	    var e = $.Event('show.bs.' + this.type)

	    if (this.hasContent() && this.enabled) {
	      this.$element.trigger(e)

	      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
	      if (e.isDefaultPrevented() || !inDom) return
	      var that = this

	      var $tip = this.tip()

	      var tipId = this.getUID(this.type)

	      this.setContent()
	      $tip.attr('id', tipId)
	      this.$element.attr('aria-describedby', tipId)

	      if (this.options.animation) $tip.addClass('fade')

	      var placement = typeof this.options.placement == 'function' ?
	        this.options.placement.call(this, $tip[0], this.$element[0]) :
	        this.options.placement

	      var autoToken = /\s?auto?\s?/i
	      var autoPlace = autoToken.test(placement)
	      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

	      $tip
	        .detach()
	        .css({ top: 0, left: 0, display: 'block' })
	        .addClass(placement)
	        .data('bs.' + this.type, this)

	      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
	      this.$element.trigger('inserted.bs.' + this.type)

	      var pos          = this.getPosition()
	      var actualWidth  = $tip[0].offsetWidth
	      var actualHeight = $tip[0].offsetHeight

	      if (autoPlace) {
	        var orgPlacement = placement
	        var viewportDim = this.getPosition(this.$viewport)

	        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
	                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
	                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
	                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
	                    placement

	        $tip
	          .removeClass(orgPlacement)
	          .addClass(placement)
	      }

	      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

	      this.applyPlacement(calculatedOffset, placement)

	      var complete = function () {
	        var prevHoverState = that.hoverState
	        that.$element.trigger('shown.bs.' + that.type)
	        that.hoverState = null

	        if (prevHoverState == 'out') that.leave(that)
	      }

	      $.support.transition && this.$tip.hasClass('fade') ?
	        $tip
	          .one('bsTransitionEnd', complete)
	          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	        complete()
	    }
	  }

	  Tooltip.prototype.applyPlacement = function (offset, placement) {
	    var $tip   = this.tip()
	    var width  = $tip[0].offsetWidth
	    var height = $tip[0].offsetHeight

	    // manually read margins because getBoundingClientRect includes difference
	    var marginTop = parseInt($tip.css('margin-top'), 10)
	    var marginLeft = parseInt($tip.css('margin-left'), 10)

	    // we must check for NaN for ie 8/9
	    if (isNaN(marginTop))  marginTop  = 0
	    if (isNaN(marginLeft)) marginLeft = 0

	    offset.top  += marginTop
	    offset.left += marginLeft

	    // $.fn.offset doesn't round pixel values
	    // so we use setOffset directly with our own function B-0
	    $.offset.setOffset($tip[0], $.extend({
	      using: function (props) {
	        $tip.css({
	          top: Math.round(props.top),
	          left: Math.round(props.left)
	        })
	      }
	    }, offset), 0)

	    $tip.addClass('in')

	    // check to see if placing tip in new offset caused the tip to resize itself
	    var actualWidth  = $tip[0].offsetWidth
	    var actualHeight = $tip[0].offsetHeight

	    if (placement == 'top' && actualHeight != height) {
	      offset.top = offset.top + height - actualHeight
	    }

	    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

	    if (delta.left) offset.left += delta.left
	    else offset.top += delta.top

	    var isVertical          = /top|bottom/.test(placement)
	    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
	    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

	    $tip.offset(offset)
	    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
	  }

	  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
	    this.arrow()
	      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
	      .css(isVertical ? 'top' : 'left', '')
	  }

	  Tooltip.prototype.setContent = function () {
	    var $tip  = this.tip()
	    var title = this.getTitle()

	    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
	    $tip.removeClass('fade in top bottom left right')
	  }

	  Tooltip.prototype.hide = function (callback) {
	    var that = this
	    var $tip = $(this.$tip)
	    var e    = $.Event('hide.bs.' + this.type)

	    function complete() {
	      if (that.hoverState != 'in') $tip.detach()
	      that.$element
	        .removeAttr('aria-describedby')
	        .trigger('hidden.bs.' + that.type)
	      callback && callback()
	    }

	    this.$element.trigger(e)

	    if (e.isDefaultPrevented()) return

	    $tip.removeClass('in')

	    $.support.transition && $tip.hasClass('fade') ?
	      $tip
	        .one('bsTransitionEnd', complete)
	        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	      complete()

	    this.hoverState = null

	    return this
	  }

	  Tooltip.prototype.fixTitle = function () {
	    var $e = this.$element
	    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
	      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
	    }
	  }

	  Tooltip.prototype.hasContent = function () {
	    return this.getTitle()
	  }

	  Tooltip.prototype.getPosition = function ($element) {
	    $element   = $element || this.$element

	    var el     = $element[0]
	    var isBody = el.tagName == 'BODY'

	    var elRect    = el.getBoundingClientRect()
	    if (elRect.width == null) {
	      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
	      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
	    }
	    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
	    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
	    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

	    return $.extend({}, elRect, scroll, outerDims, elOffset)
	  }

	  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
	    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
	        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

	  }

	  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
	    var delta = { top: 0, left: 0 }
	    if (!this.$viewport) return delta

	    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
	    var viewportDimensions = this.getPosition(this.$viewport)

	    if (/right|left/.test(placement)) {
	      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
	      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
	      if (topEdgeOffset < viewportDimensions.top) { // top overflow
	        delta.top = viewportDimensions.top - topEdgeOffset
	      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
	        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
	      }
	    } else {
	      var leftEdgeOffset  = pos.left - viewportPadding
	      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
	      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
	        delta.left = viewportDimensions.left - leftEdgeOffset
	      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
	        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
	      }
	    }

	    return delta
	  }

	  Tooltip.prototype.getTitle = function () {
	    var title
	    var $e = this.$element
	    var o  = this.options

	    title = $e.attr('data-original-title')
	      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

	    return title
	  }

	  Tooltip.prototype.getUID = function (prefix) {
	    do prefix += ~~(Math.random() * 1000000)
	    while (document.getElementById(prefix))
	    return prefix
	  }

	  Tooltip.prototype.tip = function () {
	    if (!this.$tip) {
	      this.$tip = $(this.options.template)
	      if (this.$tip.length != 1) {
	        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
	      }
	    }
	    return this.$tip
	  }

	  Tooltip.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
	  }

	  Tooltip.prototype.enable = function () {
	    this.enabled = true
	  }

	  Tooltip.prototype.disable = function () {
	    this.enabled = false
	  }

	  Tooltip.prototype.toggleEnabled = function () {
	    this.enabled = !this.enabled
	  }

	  Tooltip.prototype.toggle = function (e) {
	    var self = this
	    if (e) {
	      self = $(e.currentTarget).data('bs.' + this.type)
	      if (!self) {
	        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
	        $(e.currentTarget).data('bs.' + this.type, self)
	      }
	    }

	    if (e) {
	      self.inState.click = !self.inState.click
	      if (self.isInStateTrue()) self.enter(self)
	      else self.leave(self)
	    } else {
	      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
	    }
	  }

	  Tooltip.prototype.destroy = function () {
	    var that = this
	    clearTimeout(this.timeout)
	    this.hide(function () {
	      that.$element.off('.' + that.type).removeData('bs.' + that.type)
	      if (that.$tip) {
	        that.$tip.detach()
	      }
	      that.$tip = null
	      that.$arrow = null
	      that.$viewport = null
	    })
	  }


	  // TOOLTIP PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.tooltip')
	      var options = typeof option == 'object' && option

	      if (!data && /destroy|hide/.test(option)) return
	      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.tooltip

	  $.fn.tooltip             = Plugin
	  $.fn.tooltip.Constructor = Tooltip


	  // TOOLTIP NO CONFLICT
	  // ===================

	  $.fn.tooltip.noConflict = function () {
	    $.fn.tooltip = old
	    return this
	  }

	}(jQuery);


/***/ },

/***/ 116:
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: transition.js v3.3.6
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================

	  function transitionEnd() {
	    var el = document.createElement('bootstrap')

	    var transEndEventNames = {
	      WebkitTransition : 'webkitTransitionEnd',
	      MozTransition    : 'transitionend',
	      OTransition      : 'oTransitionEnd otransitionend',
	      transition       : 'transitionend'
	    }

	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] }
	      }
	    }

	    return false // explicit for ie8 (  ._.)
	  }

	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false
	    var $el = this
	    $(this).one('bsTransitionEnd', function () { called = true })
	    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
	    setTimeout(callback, duration)
	    return this
	  }

	  $(function () {
	    $.support.transition = transitionEnd()

	    if (!$.support.transition) return

	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function (e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
	      }
	    }
	  })

	}(jQuery);


/***/ },

/***/ 236:
/***/ function(module, exports) {

	module.exports = core-js;

/***/ }

/******/ });