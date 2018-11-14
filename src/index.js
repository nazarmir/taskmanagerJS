import {Modal} from "./createModal";

class Hello{
    constructor(message){
        this.message=message;
    }

    showText(){
        console.log(`${this.message}`)
    }
}

var a=new Hello('sxsx');
a.showText();