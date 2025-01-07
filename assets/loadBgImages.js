export default async function loadBgImages(basePath) {
    // const BASE_PATH = '/assets/bgImages/';
    const BASE_PATH = basePath;;
    
    const imageConfigs = [
      'paper01.jpg',
      'drywall.jpg',
      'black_board.jpg',
      'black_board_mat.jpg',
      'wood.jpg',
      'tinted.jpg',
      'black_mat.jpg',
      'white_mat.jpg',
      'granite.jpg',
      'gray_marble.jpg',
      'brown_stone.jpg',
      'gray_stone.jpg',
      'design_old.jpg',
      'blue_waves.jpg',
      'wall.jpg'
    ];
  
    // Helper function to load a single image
    async function loadSingleImage(imageName) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        const fullPath = BASE_PATH + imageName;
        
        img.onload = () => resolve({ name: fullPath, img });
        img.onerror = () => reject(new Error(`Failed to load image: ${fullPath}`));
        img.src = fullPath;
      });
    }
  
    try {
      // Load all images concurrently and return results directly
      return await Promise.all(
        imageConfigs.map(imageName => loadSingleImage(imageName))
      );
    } catch (error) {
      console.error('Error loading background images:', error);
      throw error;
    }
  }