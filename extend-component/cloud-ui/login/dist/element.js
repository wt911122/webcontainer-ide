/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["internal"] = factory();
	else
		root["internal"] = root["internal"] || {}, root["internal"]["element"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./element.js":
/*!********************!*\
  !*** ./element.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var codewave_cloud_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codewave/cloud.js */ \"../../../model/ui-model/cloud.js\");\n\nconst TAG = 'lcap-login';\nclass LcapLoginElement extends codewave_cloud_js__WEBPACK_IMPORTED_MODULE_0__.CloudElement {\n  static accept(s) {\n    return s.tag === TAG;\n  }\n  renderIDE() {\n    return `<${TAG} ${(0,codewave_cloud_js__WEBPACK_IMPORTED_MODULE_0__.ideCommonAttributes)(this)}></${TAG}>\\n`;\n  }\n  render() {}\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LcapLoginElement);\n\n//# sourceURL=webpack://internal/./element.js?");

/***/ }),

/***/ "../../../model/ui-model/base.js":
/*!***************************************!*\
  !*** ../../../model/ui-model/base.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONTAINER_DIRECTION: () => (/* binding */ CONTAINER_DIRECTION),\n/* harmony export */   Container: () => (/* binding */ Container),\n/* harmony export */   Element: () => (/* binding */ Element),\n/* harmony export */   getNodeByNodePath: () => (/* binding */ getNodeByNodePath)\n/* harmony export */ });\nlet key = 1;\nclass Element {\n  static accept() {\n    return true;\n  }\n  componentKey = 0;\n  parentNode = null;\n  tag = '';\n  isContainer = false;\n  supportEditContent = false; // 是否可以编辑\n  draggable = true; // 是否可拖拽\n\n  get staticStyle() {\n    return this.source.staticStyle;\n  }\n  set staticStyle(val) {\n    this.source.staticStyle = val;\n  }\n  get innerText() {\n    return this.source.innerText;\n  }\n  set innerText(val) {\n    this.source.innerText = val;\n  }\n  get nodePath() {\n    if (!this.parentNode) {\n      return 'rootview';\n    }\n    const parentNode = this.parentNode;\n    const list = parentNode.elements;\n    const idx = list.findIndex(elem => elem === this);\n    if (idx === -1) {\n      return null;\n    }\n    return `${parentNode.nodePath}.${idx}`;\n  }\n  constructor(source) {\n    this.source = source;\n    this.tag = source.tag;\n    this.componentKey = key++;\n  }\n  updateComponentKey() {\n    this.componentKey = key++;\n  }\n  getSiblings() {}\n  renderIDE(refComps) {\n    throw 'renderIDE need implementation!';\n  }\n  dropToAccept(element) {\n    return true;\n  }\n}\nconst CONTAINER_DIRECTION = {\n  ROW: 'row',\n  COLUMN: 'column',\n  FREE: 'free',\n  AUTO: 'auto'\n};\nclass Container extends Element {\n  isRoot = false;\n  isContainer = true;\n  direction = CONTAINER_DIRECTION.AUTO;\n  elements = [];\n  // dropable = true;\n\n  dropable(element) {\n    return true;\n  }\n  constructor(source) {\n    super(source);\n    this.createSubElements(source);\n  }\n  createSubElements(source) {\n    throw 'createSubElements need implementation!';\n  }\n  insertNodeBefore(node, newNode) {\n    const source = newNode.source;\n    source.delete();\n    const idx = this.source.getViewElementIdx(node.source);\n    if (idx !== -1) {\n      this.source.insertViewElementAt(source, idx);\n    }\n  }\n  insertNodeAfter(node, newNode) {\n    const source = newNode.source;\n    source.delete();\n    const idx = this.source.getViewElementIdx(node.source);\n    if (idx !== -1) {\n      this.source.insertViewElementAt(source, idx + 1);\n    }\n  }\n  addChild(newNode) {\n    const source = newNode.source;\n    source.delete();\n    this.source.addViewElement(source);\n  }\n  renderIDE(refComps) {\n    throw 'renderIDE need implementation!';\n  }\n}\nfunction getNodeByNodePath(rootNode, nodePath) {\n  const path = nodePath.split('.');\n  path.shift();\n  let element = rootNode.elements[path.shift()];\n  while (path.length) {\n    const index = path.shift();\n    element = element.elements[index];\n  }\n  return element;\n}\n\n//# sourceURL=webpack://internal/../../../model/ui-model/base.js?");

/***/ }),

/***/ "../../../model/ui-model/cloud.js":
/*!****************************************!*\
  !*** ../../../model/ui-model/cloud.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CloudElement: () => (/* binding */ CloudElement),\n/* harmony export */   Root: () => (/* binding */ Root),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   ideCommonAttributes: () => (/* binding */ ideCommonAttributes)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"../../../model/ui-model/base.js\");\n\nlet globalIdeModel;\nclass CloudElement extends _base__WEBPACK_IMPORTED_MODULE_0__.Element {\n  renderIDE() {\n    let compCode = `\n    <${this.tag} \n        key=\"${this.componentKey}\" \n        nodepath=\"${this.nodePath}\" \n        ${bindAttributeToIDE(this.source.bindAttrs)}\n        ${staticStyleToIDE(this.source.staticStyle)}>`;\n    compCode += `</${this.tag}>\\n`;\n    return compCode;\n  }\n}\nclass CloudContainer extends _base__WEBPACK_IMPORTED_MODULE_0__.Container {\n  createSubElements(source) {\n    let children;\n    if (source.concept === 'View') {\n      children = source.elements;\n    }\n    if (source.concept === 'ViewElement') {\n      children = source.children;\n    }\n    debugger;\n    if (children) {\n      this.elements = children.map(mapFunc(this));\n    }\n  }\n  renderIDE() {\n    let compCode = `\n    <${this.tag} key=\"${this.componentKey}\" \n        nodepath=\"${this.nodePath}\" \n        ide-iscontainer=\"true\"\n        ${bindAttributeToIDE(this.source.bindAttrs)}\n        ${staticStyleToIDE(this.source.staticStyle)}>`;\n    if (this.elements.length > 0) {\n      this.elements.forEach(el => {\n        compCode += el.renderIDE();\n      });\n    } else {\n      compCode += `<EmptySlot />`;\n    }\n    compCode += `</${this.tag}>\\n`;\n    return compCode;\n  }\n}\nconst EDITABLE_ELEMENT = ['u-button'];\nclass EditableElemet extends CloudElement {\n  supportEditContent = true;\n  static accept(source) {\n    return EDITABLE_ELEMENT.includes(source.tag);\n  }\n}\nclass Root extends CloudContainer {\n  isRoot = true;\n  renderIDE(dependencies) {\n    let comps = '';\n    this.elements.forEach(el => {\n      comps += el.renderIDE();\n    });\n    let depDeclare = [];\n    let internalComponentID = 1;\n    dependencies.forEach(dep => {\n      depDeclare.push({\n        importKey: `internalComp-${internalComponentID++}`,\n        url: `@internals/${dep.name}`,\n        tag: dep.name\n      });\n    });\n    const internalComps = depDeclare.map(dec => `import ${dec.importKey} from \"${dec.url}\";`).join('\\n');\n    const useInternalComps = depDeclare.map(dec => `${dec.tag}: dec.importKey`).join(',\\n');\n    debugger;\n    const file = `\n        <template>\n            <div id=\"root\">\n            ${comps}\n            </div>\n        </template>\n        <script>\n        import EmptySlot from './Empty.vue'\n        import HoistNodePath from './HoistNodePath.vue';\n        ${internalComps}\n        export default {\n            components: {\n                EmptySlot,\n                HoistNodePath,\n                ${useInternalComps}\n            }\n        }\n        </script>\n                `;\n    return file;\n  }\n}\nclass LinearLayoutContainer extends CloudContainer {\n  static accept(source) {\n    return source.tag === 'u-linear-layout';\n  }\n  constructor(source) {\n    super(source);\n    this.direction = _base__WEBPACK_IMPORTED_MODULE_0__.CONTAINER_DIRECTION.ROW;\n    if (source.bindAttrs.find(attr => attr.name === 'direction' && attr.value === 'vertical')) {\n      this.direction = _base__WEBPACK_IMPORTED_MODULE_0__.CONTAINER_DIRECTION.COLUMN;\n    }\n  }\n}\nclass AbsoluteContainer extends CloudContainer {\n  isAbsolute = true;\n  static accept(source) {\n    return source.tag === 'AbsoluteLayout';\n  }\n  renderIDE() {\n    let compCode = `\n    <div key=\"${this.componentKey}\" \n        nodepath=\"${this.nodePath}\" \n        class=\"absoluteLayout\" \n        ${bindAttributeToIDE(this.source.bindAttrs)}\n        ${staticStyleToIDE(this.source.staticStyle)}>`;\n    if (this.elements.length > 0) {\n      this.elements.forEach(el => {\n        compCode += el.renderIDE();\n      });\n    }\n    compCode += `</div>\\n`;\n    return compCode;\n  }\n}\nclass TableContainer extends CloudContainer {\n  direction = _base__WEBPACK_IMPORTED_MODULE_0__.CONTAINER_DIRECTION.ROW;\n  static accept(source) {\n    return source.tag === 'u-table-view';\n  }\n  dropable(element) {\n    return element.tag === 'u-table-view-column';\n  }\n  createSubElements(source) {\n    let children;\n    if (source.concept === 'ViewElement') {\n      children = source.children;\n    }\n    if (children) {\n      this.elements = children.map(mapFunc(this));\n    }\n  }\n  renderIDE() {\n    let compCode = `\n    <u-table-view class=\"designer-table\" key=\"${this.componentKey}\" \n        nodepath=\"${this.nodePath}\" \n        :data-source=\"[{}, {}, {}]\"\n        ${bindAttributeToIDE(this.source.bindAttrs, ['data-source', 'value-field'])}\n        ${staticStyleToIDE(this.source.staticStyle)}>`;\n    if (this.elements.length > 0) {\n      this.elements.forEach(el => {\n        compCode += el.renderIDE();\n      });\n    }\n    compCode += `</u-table-view>\\n`;\n    return compCode;\n  }\n}\nfunction groupBy(arr, key) {\n  const map = {};\n  arr.forEach(elem => {\n    const k = elem[key];\n    if (!map[k]) {\n      map[k] = [];\n    }\n    map[k].push(elem);\n  });\n  return map;\n}\nclass TableColumn extends CloudContainer {\n  static accept(source) {\n    return source.tag === 'u-table-view-column';\n  }\n  dropToAccept(element) {\n    return element.tag === 'u-table-view';\n  }\n  dropable(element) {\n    return false;\n  }\n  createSubElements(source) {\n    let children;\n    if (source.concept === 'ViewElement') {\n      children = source.children;\n    }\n    if (children) {\n      // const slots = groupBy(children, 'slotTarget');\n      // Object.keys(slots).forEach(slot => {\n      //     slots[slot].forEach(template => {\n\n      //     })\n      // })\n      this.elements = children.map(c => {\n        const element = new TableColumnSlotTemplate(c);\n        element.parentNode = this;\n        return element;\n      });\n      // this.elements = children.map(mapFunc(this));\n    }\n  }\n  renderIDE() {\n    let compCode = `\n    <u-table-view-column key=\"${this.componentKey}\" \n        nodepath=\"${this.nodePath}\" \n        ${bindAttributeToIDE(this.source.bindAttrs)}\n        ${staticStyleToIDE(this.source.staticStyle)}>`;\n    this.elements.forEach(el => {\n      compCode += el.renderIDE();\n    });\n    compCode += `</u-table-view-column>\\n`;\n    return compCode;\n  }\n}\nclass TableColumnSlotTemplate extends CloudContainer {\n  draggable = false;\n  createSubElements(source) {\n    let children;\n    if (source.concept === 'ViewElement') {\n      children = source.children;\n    }\n    if (children) {\n      this.elements = children.map(mapFunc(this));\n    }\n  }\n  renderIDE() {\n    console.log(this.source);\n    const useHoist = ['title'].includes(this.source.slotTarget);\n    let hositCode = useHoist ? `<HoistNodePath nodePath=\"${this.parentNode.nodePath}\" topSelector=\"${this.source.slotTarget === 'title' ? 'th' : 'td'}\"></HoistNodePath>` : '';\n    let compCode = `\n    <template #${this.source.slotTarget}=\"${this.source.slotScope}\"\n        ${bindAttributeToIDE(this.source.bindAttrs)}>\n        <div nodepath=\"${this.nodePath}\" ide-draggable=\"false\">\n        ${hositCode}\n        `;\n    if (this.elements.length === 0) {\n      compCode += `<EmptySlot/>`;\n    } else {\n      this.elements.forEach(el => {\n        compCode += el.renderIDE();\n      });\n    }\n    compCode += `</div></template>\\n`;\n    return compCode;\n  }\n}\nclass SlotTemplate extends CloudContainer {\n  createSubElements(source) {\n    let children;\n    if (source.concept === 'ViewElement') {\n      children = source.children;\n    }\n    if (children) {\n      this.elements = children.map(mapFunc(this));\n    }\n  }\n  renderIDE() {\n    let compCode = `\n    <template key=\"${this.componentKey}\" \n        #${this.source.slotTarget}=\"${this.source.slotScope}\"\n        ${bindAttributeToIDE(this.source.bindAttrs)}>`;\n    this.elements.forEach(el => {\n      compCode += el.renderIDE();\n    });\n    compCode += `</template>\\n`;\n    return compCode;\n  }\n}\nfunction bindAttributeToIDE(bindAttrs, ignoreAttrs = []) {\n  if (bindAttrs && bindAttrs.length > 0) {\n    return bindAttrs.filter(attr => !ignoreAttrs.includes(attr.name)).map(attr => `${attr.name}=\"${attr.value}\"`).join(' ');\n  }\n  return '';\n}\nfunction staticStyleToIDE(staticStyle) {\n  if (staticStyle && staticStyle.trim()) {\n    return ` style=\"${staticStyle.trim()}\" `;\n  }\n  return '';\n}\nfunction ideCommonAttributes(c) {\n  return `key=\"${c.componentKey}\" nodepath=\"${c.nodePath}\" \n    ${bindAttributeToIDE(c.source.bindAttrs)}\n    ${staticStyleToIDE(c.source.staticStyle)}`;\n}\nconst ViewElementClass = [AbsoluteContainer, LinearLayoutContainer, TableContainer, TableColumn, EditableElemet, CloudElement];\nfunction makeRootUIElement(source, ideModel) {\n  globalIdeModel = ideModel;\n  return new Root(source);\n}\nfunction mapFunc(parent) {\n  return globalIdeModel.mapElements(parent);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  viewCtors: ViewElementClass,\n  makeRootUIElement\n});\n\n//# sourceURL=webpack://internal/../../../model/ui-model/cloud.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./element.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});