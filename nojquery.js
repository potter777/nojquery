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
    * @method hide
    * @param {string} pattern - elemento(s) a ocultar
    */
    NoJq.hide = function (pattern) {
        var elements = document.querySelectorAll(pattern);
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var e = elements_1[_i];
            NoJq.hideElement(e);
        }
    };
    /**
    * Utiliza selector base para mostrar el elemento.
    * {. : class, # : id, none : tag}
    * @method show
    * @param {string} pattern - elemento(s) a mostrar.
    */
    NoJq.show = function (pattern) {
        var elements = document.querySelectorAll(pattern);
        for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
            var e = elements_2[_i];
            NoJq.showElement(e);
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
    NoJq.setListener = function (pattern, _event, listener) {
        var elements = document.querySelectorAll(pattern);
        for (var _i = 0, elements_3 = elements; _i < elements_3.length; _i++) {
            var e = elements_3[_i];
            NoJq.setElementListener(_event, e, listener);
        }
    };
    return NoJq;
}());
