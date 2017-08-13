/**
* La mayoría de funciones están basados en
* http://youmightnotneedjquery.com/
* esto con la finalidad de realizar tareas sin depender de Jquery
*/
class NoJq{

    /**
    * oculta un elemento.
    * @method hideElement
    * @param {ObjectNode} e - elemento a ocultar.
    */
    static hideElement(e){
        if(!e) return;
        if(e.style.display=='none') return;
        e.dataset.olddisplay=e.style.display;
        e.style.display='none'
    }

    /**
    * muestra un elemento.
    * @method showElement
    * @param {ObjectNode} e - elemento a mostrar.
    */
    static showElement(e){
        if(!e) return;
        if(e.style.display!='' & e.style.display!='none') return;
        if(e.dataset.olddisplay && e.dataset.olddisplay!='none'){
            e.style.display=e.dataset.olddisplay;
        }else{
            e.style.display='';
        }
    }

    /**
    * Utiliza selector base para ocultar el elemento
    * {. : class, # : id, none : tag}
    * @method hide
    * @param {string} pattern - elemento(s) a ocultar
    */
    static hide(pattern: string){
        for(let e of document.querySelectorAll(pattern)){
            NoJq.hideElement(e);
        }
    }

    /**
    * Utiliza selector base para mostrar el elemento.
    * {. : class, # : id, none : tag}
    * @method show
    * @param {string} pattern - elemento(s) a mostrar.
    */
    static show(pattern: string){
        for(let e of document.querySelectorAll(pattern)){
            NoJq.showElement(e);
        }
    }

    /**
    * Para un mejor rendimiento, cuando solo se desee ocultar un elemento
    * es preferible solo utilizar el primer elemento encontrado.
    * @method hideForFirst
    * @param {string} pattern - elemento a utilizar
    */
    static hideForFirst(pattern: string){
        NoJq.hideElement(document.querySelector(pattern));
    }

    /**
    * Para un mejor rendimiento, cuando solo se desee mostrar un elemento
    * es preferible solo utilizar el primer elemento encontrado.
    * @method showForFirst
    * @param {string} pattern - elemento a utilizar
    */
    static showForFirst(pattern: string){
        NoJq.showElement(document.querySelector(pattern));
    }


    /**
    * @method setText
    * @param {string} _id - elemento al que se establecerá el texto
    * @param {string} _text - Texto a utilizar
    */
    static setText(_id: string, _text: string){
        document.getElementById(_id).textContent = _text;
    }

    /**
    * @method getText
    * @return {string} texto obtenido del elemento
    */
    static getText(_id: string){
        return document.getElementById(_id).textContent;
    }

    /**
    * vincula una acción con un evento
    * @method setElementListener
    * @param {string} _event - evento a vincular
    * @param {ObjectNode} e - elemento al que se le agregará el evento
    * @param {} listener - callback a llamar cuando se dispare el evento
    */
    static setElementListener(_event: string, e, listener){

        if(!e) return;

        if (!e.NoJq){
            e.NoJq = {}; //registra los eventos agregados desde NoJquery
            e.NoJq[_event] = listener; //por ejemplo esto guarda el evento click, con la función x
            e.addEventListener(_event, listener);//lo registramos al elemento
        }else{
            if(e.NoJq[_event]){
                // si ya existe registrado el evento en nuestro objeto NoJquery
                // lo removemos del elemento
                e.removeEventListener(_event, e.NoJq[_event]);
            }
            //agregamos o actualizamos nuestro objeto de eventos con el nuevo listener
            e.NoJq[_event] = listener;
            e.addEventListener(_event, listener);
        }

    }

    /**
    * vincula una acción con un evento para los elementos seleccionados
    * @method setListener
    * @param {string} pattern - patrón para buscar los elementos
    * @param {string} _event - evento a vincular
    * @param {} listener - callback a llamar cuando se dispare el evento
    */
    static setListener(pattern: string, _event: string, listener){
        for(let e of document.querySelectorAll(pattern)){
            NoJq.setElementListener(_event, e, listener);
        }
    }

    /**
    * deja vacío un elemento
    * @method empty
    * @param {string} pattern - elementos a buscar
    */
    static empty(pattern: string){
        for (let e of document.querySelectorAll(pattern)){
            e.innerHTML = '';
        }
    }

    static remove(pattern: string){
        for (let e of document.querySelectorAll(pattern)){
            e.parentNode.removeChild(e);
        }
    }

    static append(pattern: string){

    }


}
