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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	if (!('serviceWorker' in navigator)) {
	    console.log("SW not available. Launch a normal but without any offline stuff")
	    launch()
	} else {
	    navigator.serviceWorker.register('/sw.js').then(function(registration) {
	        // Registration was successful
	        console.log('ServiceWorker registration successful');
	        launch(registration)
	    }).catch(function(err) {
	        // registration failed :(
	        console.error('ServiceWorker registration failed: ', err);
	        launch()
	    });
	}

	const launch = (registration) => {
	    if (registration) {
	        console.log('this has been called after SW registration, in scope:', registration.scope)
	    } else {
	        console.log('somehow starting without any offline stuff - either result of missing ServiceWorker in navigator, or error in registration')
	    }
	}

/***/ }
/******/ ]);