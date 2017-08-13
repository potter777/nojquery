/**
* La mayoría de funciones están basados en
* http://youmightnotneedjquery.com/
* esto con la finalidad de realizar tareas sin depender de Jquery
*/
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
    * Utiliza selector base para ocultar el elemento
    * {. : class, # : id, none : tag}
    * @method hideForAll
    * @param {string} pattern - elemento(s) a ocultar
    */
    NoJq.hideForAll = function (pattern) {
        for (var _i = 0, _a = document.querySelectorAll(pattern); _i < _a.length; _i++) {
            var e = _a[_i];
            NoJq.hideElement(e);
        }
    };
    /**
    * Utiliza selector base para mostrar el elemento.
    * {. : class, # : id, none : tag}
    * @method showForAll
    * @param {string} pattern - elemento(s) a mostrar.
    */
    NoJq.showForAll = function (pattern) {
        for (var _i = 0, _a = document.querySelectorAll(pattern); _i < _a.length; _i++) {
            var e = _a[_i];
            NoJq.showElement(e);
        }
    };
    /**
    * Para un mejor rendimiento, cuando solo se desee ocultar un elemento
    * es preferible solo utilizar el primer elemento encontrado.
    * @method hide
    * @param {string} pattern - elemento a utilizar
    */
    NoJq.hide = function (pattern) {
        NoJq.hideElement(document.querySelector(pattern));
    };
    /**
    * Para un mejor rendimiento, cuando solo se desee mostrar un elemento
    * es preferible solo utilizar el primer elemento encontrado.
    * @method show
    * @param {string} pattern - elemento a utilizar
    */
    NoJq.show = function (pattern) {
        NoJq.showElement(document.querySelector(pattern));
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
    /**
    * vincula una acción con un evento
    * @method setElementListener
    * @param {string} _event - evento a vincular
    * @param {ObjectNode} e - elemento al que se le agregará el evento
    * @param {} listener - callback a llamar cuando se dispare el evento
    */
    NoJq.setElementListener = function (_event, e, listener) {
        if (!e)
            return;
        if (!e.NoJq) {
            e.NoJq = {}; //registra los eventos agregados desde NoJquery
            e.NoJq[_event] = listener; //por ejemplo esto guarda el evento click, con la función x
            e.addEventListener(_event, listener); //lo registramos al elemento
        }
        else {
            if (e.NoJq[_event]) {
                // si ya existe registrado el evento en nuestro objeto NoJquery
                // lo removemos del elemento
                e.removeEventListener(_event, e.NoJq[_event]);
            }
            //agregamos o actualizamos nuestro objeto de eventos con el nuevo listener
            e.NoJq[_event] = listener;
            e.addEventListener(_event, listener);
        }
    };
    /**
    * vincula una acción con un evento para los elementos seleccionados
    * @method setListener
    * @param {string} pattern - patrón para buscar los elementos
    * @param {string} _event - evento a vincular
    * @param {} listener - callback a llamar cuando se dispare el evento
    */
    NoJq.setListenerForAll = function (pattern, _event, listener) {
        for (var _i = 0, _a = document.querySelectorAll(pattern); _i < _a.length; _i++) {
            var e = _a[_i];
            NoJq.setElementListener(_event, e, listener);
        }
    };
    /**
    * vincula una acción con un evento para el elemento seleccionado
    * @method setListener
    * @param {string} pattern - patrón para buscar el elemento
    * @param {string} _event - evento a vincular
    * @param {} listener - callback a llamar cuando se dispare el evento
    */
    NoJq.setListener = function (pattern, _event, listener) {
        if (e = document.querySelector(pattern))
            NoJq.setElementListener(_event, e, listener);
    };
    /**
    * deja vacío un elemento
    * @method empty
    * @param {string} pattern - elementos a buscar
    */
    NoJq.emptyForAll = function (pattern) {
        for (var _i = 0, _a = document.querySelectorAll(pattern); _i < _a.length; _i++) {
            var e = _a[_i];
            e.innerHTML = '';
        }
    };
    /**
    * deja vacío el primer elemento que encuentre el patron
    * @method empty
    * @param {string} pattern - elemento a buscar y utilizar
    */
    NoJq.empty = function (pattern) {
        if (e = document.querySelector(pattern))
            e.innerHTML = '';
    };
    /**
    * remueve todos los elementos encontrados con el patron de búsqueda
    * @method removeForAll
    * @param {string} pattern - elementos a obtener
    */
    NoJq.removeForAll = function (pattern) {
        for (var _i = 0, _a = document.querySelectorAll(pattern); _i < _a.length; _i++) {
            var e = _a[_i];
            e.parentNode.removeChild(e);
        }
    };
    /**
    * remueve el primer elemento encontrado
    * @method remove
    * @param {string} pattern - elemento a remover
    */
    NoJq.remove = function (pattern) {
        if (e = document.querySelector(pattern))
            e.parentNode.removeChild(e);
    };
    /**
    * el elemento padre se le agrega un nuevo elemento hijo
    * @method appendElement
    * @param {ObjectNode} e - elemento padre
    * @param {ObjectNode} eToAppend - elemento que será hijo
    */
    NoJq.appendElement = function (e, eToAppend) {
        if (!e)
            return;
        e.appendChild(eToAppend);
    };
    return NoJq;
}());
