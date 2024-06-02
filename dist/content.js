function detectAndClickBlue() {
    const elements = document.querySelectorAll('*');
  
    elements.forEach(element => {
      const style = getComputedStyle(element);
      const backgroundColor = style.backgroundColor;
  
      if (isBlueColor(backgroundColor)) {
        element.click();
      }
    });
  }
  
  function isBlueColor(color) {
    // Check if the color is in RGB format
    const rgbMatch = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  
    if (rgbMatch) {
      const red = parseInt(rgbMatch[1], 10);
      const green = parseInt(rgbMatch[2], 10);
      const blue = parseInt(rgbMatch[3], 10);
  
      // Adjust the thresholds as needed
      return blue > 150 && red < 100 && green < 100;
    }
  
    return false;
  }
  
  // Delay execution to ensure the page is fully loaded
  setTimeout(detectAndClickBlue, 3000);
  