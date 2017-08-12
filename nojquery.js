var NoJq = (function () {
    function NoJq() {
    }
    /**
    * oculta un elemento.
    * @method hideElement
    * @param {ObjectNode} e - elemento a ocultar.
    */
    NoJq.hideElement = function (e) {
        if (!e)
            return;
        if (e.style.display == 'none')
            return;
        e.dataset.olddisplay = e.style.display;
        e.style.display = 'none';
    };
    /**
    * muestra un elemento.
    * @method showElement
    * @param {ObjectNode} e - elemento a mostrar.
    */
    NoJq.showElement = function (e) {
        if (!e)
            return;
        if (e.style.display != '' & e.style.display != 'none')
            return;
        if (e.dataset.olddisplay && e.dataset.olddisplay != 'none') {
            e.style.display = e.dataset.olddisplay;
        }
        else {
            e.style.display = '';
        }
    };
    /**
    * Oculta elemento(s) utilizando un identificador
    * @method hideById
    * @param {string} _id - Elemento a ocultar.
    */
    NoJq.hideById = function (_id) {
        var e = document.getElementById(_id);
        NoJq.hideElement(e);
    };
    /**
    * Muestra elemento(s) utilizando un identificador.
    * @method showById
    * @param {string} _id - Elemento a mostrar.
    */
    NoJq.showById = function (_id) {
        var e = document.getElementById(_id);
        NoJq.showElement(e);
    };
    /**
    * Oculta elemento(s) utilizando una clase
    * @method hideByClass
    * @param {string} _class - Elemento a ocultar.
    */
    NoJq.hideByClass = function (_class) {
        var elements = document.getElementsByClassName(_class);
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var e = elements_1[_i];
            NoJq.hideElement(e);
        }
    };
    /**
    * Muestra elemento(s) utilizando una clase.
    * @method showByClass
    * @param {string} _class - Elemento a mostrar.
    */
    NoJq.showByClass = function (_class) {
        var elements = document.getElementsByClassName(_class);
        for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
            var e = elements_2[_i];
            NoJq.showElement(e);
        }
    };
    /**
    * Oculta elemento(s) utilizando tags.
    * @method hideByTag
    * @param {string} _tag elemento(s) con tag a ocultar.
    */
    NoJq.hideByTag = function (_tag) {
        var elements = document.getElementsByTagName(_tag);
        for (var _i = 0, elements_3 = elements; _i < elements_3.length; _i++) {
            var e = elements_3[_i];
            NoJq.hideElement(e);
        }
    };
    /**
    * Muestra elemento(s) utilizando tags.
    * @method showByTag
    * @param {string} _tag elemento(s) con tag a mostrar.
    */
    NoJq.showByTag = function (_tag) {
        var elements = document.getElementsByTagName(_tag);
        for (var _i = 0, elements_4 = elements; _i < elements_4.length; _i++) {
            var e = elements_4[_i];
            NoJq.showElement(e);
        }
    };
    /**
    * Utiliza selector base para ocultar el elemento
    * {. : class, # : id, none : tag}
    * @method hide
    * @param {string} element - elemento(s) a ocultar
    */
    NoJq.hide = function (element) {
        if (!element) {
            return;
        }
        var type = element[0];
        var e = element.substring(1); //elemento(s) a ocultar.
        if (type == '#') {
            NoJq.hideById(e);
        }
        else if (type == '.') {
            NoJq.hideByClass(e);
        }
        else {
            NoJq.hideByTag(element);
        }
    };
    /**
    * Utiliza selector base para mostrar el elemento.
    * {. : class, # : id, none : tag}
    * @method show
    * @param {string} element - elemento(s) a mostrar.
    */
    NoJq.show = function (element) {
        if (!element) {
            return;
        }
        var type = element[0];
        var e = element.substring(1); //elemento(s) a ocultar.
        if (type == '#') {
            NoJq.showById(e);
        }
        else if (type == '.') {
            NoJq.showByClass(e);
        }
        else {
            NoJq.showByTag(element);
        }
    };
    /**
    * @method setText
    * @param {string} _id - elemento al que se establecerá el texto
    * @param {string} _text - Texto a utilizar
    */
    NoJq.setText = function (_id, _text) {
        document.getElementById(_id).textContent = _text;
    };
    /**
    * @method getText
    * @return {string} texto obtenido del elemento
    */
    NoJq.getText = function (_id) {
        return document.getElementById(_id).textContent;
    };
    return NoJq;
}());
