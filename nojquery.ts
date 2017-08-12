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
    * Oculta elemento(s) utilizando un identificador
    * @method hideById
    * @param {string} _id - Elemento a ocultar.
    */
    static hideById(_id: string){
        let e = document.getElementById(_id);
        NoJq.hideElement(e);
    }

    /**
    * Muestra elemento(s) utilizando un identificador.
    * @method showById
    * @param {string} _id - Elemento a mostrar.
    */
    static showById(_id: string){
        let e = document.getElementById(_id);
        NoJq.showElement(e);
    }

    /**
    * Oculta elemento(s) utilizando una clase
    * @method hideByClass
    * @param {string} _class - Elemento a ocultar.
    */
    static hideByClass(_class: string){
        let elements = document.getElementsByClassName(_class);
        for(let e of elements){
            NoJq.hideElement(e);
        }
    }

    /**
    * Muestra elemento(s) utilizando una clase.
    * @method showByClass
    * @param {string} _class - Elemento a mostrar.
    */
    static showByClass(_class: string){
        let elements = document.getElementsByClassName(_class);
        for(let e of elements){
            NoJq.showElement(e);
        }
    }

    /**
    * Oculta elemento(s) utilizando tags.
    * @method hideByTag
    * @param {string} _tag elemento(s) con tag a ocultar.
    */
    static hideByTag(_tag: string){
        let elements = document.getElementsByTagName(_tag);
        for(let e of elements){
            NoJq.hideElement(e);
        }
    }

    /**
    * Muestra elemento(s) utilizando tags.
    * @method showByTag
    * @param {string} _tag elemento(s) con tag a mostrar.
    */
    static showByTag(_tag: string){
        let elements = document.getElementsByTagName(_tag);
        for(let e of elements){
            NoJq.showElement(e);
        }
    }

    /**
    * Utiliza selector base para ocultar el elemento
    * {. : class, # : id, none : tag}
    * @method hide
    * @param {string} element - elemento(s) a ocultar
    */
    static hide(element: string){

        if (!element){return;}

        let type = element[0];
        let e = element.substring(1); //elemento(s) a ocultar.

        if(type=='#'){ // hide by id
            NoJq.hideById(e);
        }else if(type=='.'){ // hide by class
            NoJq.hideByClass(e);
        }else{
            NoJq.hideByTag(element);
        }

    }

    /**
    * Utiliza selector base para mostrar el elemento.
    * {. : class, # : id, none : tag}
    * @method show
    * @param {string} element - elemento(s) a mostrar.
    */
    static show(element: string){

        if (!element){return;}

        let type = element[0];
        let e = element.substring(1); //elemento(s) a ocultar.

        if(type=='#'){ // hide by id
            NoJq.showById(e);
        }else if(type=='.'){ // hide by class
            NoJq.showByClass(e);
        }else{
            NoJq.showByTag(element);
        }

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
}
