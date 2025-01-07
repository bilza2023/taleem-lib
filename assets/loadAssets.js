
import loadBgImages from "./loadBgImages.js";
import loadSprites from "./loadSprites.js";
import icons from "./icons.js";

export default async function loadAssets(basePath='/assets/bgImages/'){
    try{
 const bgImages = await  loadBgImages(basePath);
 const spriteImages = await loadSprites(basePath);
 
    return {bgImages, spriteImages , icons}
    } catch(error){
        console.error('Error loading assets:', error);
        throw error;
    }
}