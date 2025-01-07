
import Canvas from "./canvas";
import Eqs from "./eqs";
import getNewItem from "./getNewItem";
import getNewSlide from "./getNewSlide";


export default class Slides {
    static Canvas = Canvas;
    static Eqs = Eqs;

    static getDynamicDemoSlide() {
        
        const eqs = Eqs.getDynamicDemoSlide();
            eqs.startTime = 0; eqs.endTime = 10;
        
        const canvas =  Canvas.getDynamicDemoSlide();
            canvas.startTime = 10; canvas.endTime = 20;

        return [eqs , canvas];
    }

    static getNewItem( itemExtra = {} , name='',content='') {
      return getNewItem(itemExtra, name, content);
    }
  
    static getNewSlide(type) {
        if (!this.availableSlideTypes().includes(type)) {
            throw new Error(`Invalid slide type: ${type}`);
        }
        if(type === 'canvas'){
            return Canvas.getNewSlide();
        }
        if(type === 'Eqs'){
            let slide = getNewSlide('Eqs');
            // slide.type = 'Eqs';
            return slide;
        }
    }
    //This has the fields required at slide level.
    static getDefaultSlide() {
        return getNewSlide();
    }

    static availableSlideTypes(){
        return [ 'canvas' , 'Eqs'];
    }
}//slide object
