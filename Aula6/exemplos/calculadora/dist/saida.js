/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Botao.js":
/*!**********************!*\
  !*** ./src/Botao.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Componente_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Componente.js */ \"./src/Componente.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Botao =\n/*#__PURE__*/\nfunction (_Componente) {\n  _inherits(Botao, _Componente);\n\n  function Botao(id) {\n    var _this;\n\n    _classCallCheck(this, Botao);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Botao).call(this, id));\n    _this.callback_click = undefined;\n    _this.mensagem_clique = undefined;\n    _this.clicou = _this.clicou.bind(_assertThisInitialized(_this));\n\n    _this.Elemento.addEventListener(\"click\", _this.clicou);\n\n    return _this;\n  }\n\n  _createClass(Botao, [{\n    key: \"clicou\",\n    value: function clicou() {\n      if (this.callback_click) this.callback_click(this.mensagem_clique);\n    }\n  }, {\n    key: \"setCallbackClique\",\n    value: function setCallbackClique(func) {\n      var mensagem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n      this.callback_click = func;\n      this.mensagem_clique = mensagem;\n    }\n  }]);\n\n  return Botao;\n}(_Componente_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Botao);\n\n//# sourceURL=webpack:///./src/Botao.js?");

/***/ }),

/***/ "./src/CaixaTexto.js":
/*!***************************!*\
  !*** ./src/CaixaTexto.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Componente_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Componente.js */ \"./src/Componente.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar CaixaTexto =\n/*#__PURE__*/\nfunction (_Componente) {\n  _inherits(CaixaTexto, _Componente);\n\n  function CaixaTexto(id) {\n    _classCallCheck(this, CaixaTexto);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(CaixaTexto).call(this, id));\n  }\n\n  _createClass(CaixaTexto, [{\n    key: \"value\",\n    get: function get() {\n      return this.Elemento.value;\n    },\n    set: function set(value) {\n      this.Elemento.value = value;\n    }\n  }]);\n\n  return CaixaTexto;\n}(_Componente_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CaixaTexto);\n\n//# sourceURL=webpack:///./src/CaixaTexto.js?");

/***/ }),

/***/ "./src/Componente.js":
/*!***************************!*\
  !*** ./src/Componente.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Componente =\n/*#__PURE__*/\nfunction () {\n  function Componente(id) {\n    _classCallCheck(this, Componente);\n\n    this.id = id;\n    this.elem = document.getElementById(this.id);\n  }\n\n  _createClass(Componente, [{\n    key: \"Elemento\",\n    get: function get() {\n      return this.elem;\n    }\n  }]);\n\n  return Componente;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Componente);\n\n//# sourceURL=webpack:///./src/Componente.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Componente__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Componente */ \"./src/Componente.js\");\n/* harmony import */ var _CaixaTexto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaixaTexto.js */ \"./src/CaixaTexto.js\");\n/* harmony import */ var _Botao_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Botao.js */ \"./src/Botao.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n//Arquivo principal\n\n\n\nvar cxTexto = new _CaixaTexto_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"txtNumero\"); //Criando lista de IDS (será utilizado para criar a interface com os botões)\n\nvar nomesBotoes = [\"btn0\", \"btn1\", \"btn2\", \"btn3\", \"btn4\", \"btn5\", \"btn6\", \"btn7\", \"btn8\", \"btn9\"];\nnomesBotoes = [].concat(_toConsumableArray(nomesBotoes), [\"btnSoma\", \"btnDivide\", \"btnSubtrai\", \"btnMultiplica\"]);\nnomesBotoes = [].concat(_toConsumableArray(nomesBotoes), [\"btnPonto\", \"btnIgual\"]);\nnomesBotoes = [].concat(_toConsumableArray(nomesBotoes), [\"btnAc\"]);\nvar op1 = \"\";\nvar op2 = \"\";\nvar preenchendoOperando = 0;\nvar operacao = \"\"; //Preenche operandos\n\nfunction cliqueNumero(mensagem) {\n  if (preenchendoOperando == 0) {\n    op1 = \"\" + op1 + String(mensagem);\n    cxTexto.value = op1;\n  } else {\n    op2 = \"\" + op2 + String(mensagem);\n    cxTexto.value = op2;\n  }\n} //Trata o ponto\n\n\nfunction cliquePonto(mensagem) {\n  //Só coloca o ponto caso já não tenha ponto nos operandos\n  if (preenchendoOperando == 0) {\n    if (op1.indexOf(\".\") < 0) {\n      op1 = \"\" + op1 + String(mensagem);\n      cxTexto.value = op1;\n    }\n  } else {\n    if (op2.indexOf(\".\") < 0) {\n      op2 = \"\" + op2 + String(mensagem);\n      cxTexto.value = op2;\n    }\n  }\n} // Configuramos a operação pelo id do botão pressionado e\n// informamos que devemos preencher o operando 2\n\n\nfunction cliqueOperacao(mensagem) {\n  operacao = mensagem;\n  if (preenchendoOperando == 0) preenchendoOperando = 1;\n} //Faz a conta. Usamos os ids configurados na função anterior para\n//detectar a conta. Note que, após fazer a conta, o resultado\n//é armazenado no op1. Assim, a conta pode ser continuada pelo usuário.\n\n\nvar ultimoOp2;\n\nfunction calcula() {\n  if (op2 == \"\") op2 = ultimoOp2;else ultimoOp2 = op2;\n\n  if (preenchendoOperando == 1) {\n    var x = parseFloat(op1);\n    var y = parseFloat(op2);\n    var resultado;\n\n    if (operacao == \"btnSoma\") {\n      resultado = x + y;\n    } else if (operacao == \"btnSubtrai\") {\n      resultado = x - y;\n    } else if (operacao == \"btnDivide\") {\n      resultado = x / y;\n    } else if (operacao == \"btnMultiplica\") {\n      resultado = x * y;\n    }\n\n    op1 = resultado;\n    cxTexto.value = op1.toFixed(2);\n    op2 = \"\";\n  }\n} //Botão AC\n\n\nfunction zera() {\n  preenchendoOperando = 0;\n  cxTexto.value = \"\";\n  op1 = \"\";\n  op2 = \"\";\n} //botoes é um vetor criado utilizando o callback.\n//Esse calback testa o id (ou índice) para saber\n//qual botão estamos criando. Dependendo do botão,\n//registramos tarefas diferentes no clique.\n\n\nvar botoes = nomesBotoes.map(function (id, indice) {\n  var btn = new _Botao_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](id);\n\n  if (indice < 10) {\n    //seta o callback dos botões numéricos\n    btn.setCallbackClique(cliqueNumero, indice);\n  } else if (id == \"btnPonto\") {\n    //seta callback do botao \"ponto\"\n    btn.setCallbackClique(cliquePonto, \".\");\n  } else if (indice < 14) {\n    //seta callback dos botões de operações\n    btn.setCallbackClique(cliqueOperacao, id);\n  } else if (id == \"btnIgual\") {\n    btn.setCallbackClique(calcula);\n  } else if (id == \"btnAc\") {\n    btn.setCallbackClique(zera);\n  }\n\n  return btn;\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });