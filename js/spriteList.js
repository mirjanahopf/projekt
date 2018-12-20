class spriteList{
    
    /** Konstruktor, um eine SpriteListe zu erstellen */
    constructor(){
        this.elements = new Array();
     
    }
    
    /** 
    * Füge die Elemente zur Liste hinzu 
    * @param sp sprite für die Liste
    */
    addSprite(sp){
        this.elements.push(sp);
    }
    
    update (){
        for(var i=0; i<this.elements.length;i++){
            this.elements[i].update();
            }
        }
    
    reset (maxx){
        for(var i=0; i<this.elements.length;i++){
            this.elements[i].reset(maxx);
            }
        }
        
    }
    

