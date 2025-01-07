
import loadBgImages from "./loadBgImages.js";
import loadSprites from "./loadSprites.js";
import icons from "./icons.js";

export default async function loadAssets(){
    try{
 const bgImages = await  loadBgImages();
 const spriteImages = await loadSprites();
 
    return {bgImages, spriteImages , icons}
    } catch(error){
        console.error('Error loading assets:', error);
        throw error;
    }
}