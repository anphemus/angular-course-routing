//como hacer un perro en canvas?
function createAARotatedPattern(lineWidth, spacing, ang, color) {
    const can = document.createElement('canvas');
    const w = can.width = 2; 
    const h = can.height = spacing;
    const ctx = can.getContext('2d'); 
    ctx.fillStyle = color; 
    ctx.fillRect(0, 0, 2, lineWidth);
   
    const pat = ctx.createPattern(can, 'repeat');
    const xAx = Math.cos(ang);
    const xAy = Math.sin(ang);
    pat.setTransform(new DOMMatrix([xAx, xAy, -xAy, xAx, 0, 0]));
    return pat;
}
function createStripedPattern(lineWidth, spacing, slope, color) {
    const can = document.createElement('canvas');
    const len = Math.hypot(1, slope);
    
    const w = can.width = 1 / len + spacing + 0.5 | 0; // round to nearest pixel              
    const h = can.height = slope / len + spacing * slope + 0.5 | 0; 

    const ctx = can.getContext('2d'); 
    ctx.strokeStyle = color; 
    ctx.lineWidth = lineWidth;
    ctx.beginPath();

    // Line through top left and bottom right corners
    ctx.moveTo(0, 0);
    ctx.lineTo(w, h);
    // Line through top right corner to add missing pixels
    ctx.moveTo(0, -h);
    ctx.lineTo(w * 2, h);
    // Line through bottom left corner to add missing pixels
    ctx.moveTo(-w, 0);
    ctx.lineTo(w, h * 2);
    
    ctx.stroke();
    return ctx.createPattern(can, 'repeat');
  };

  function fillWithPattern(canvas, pattern, inset = 0) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(inset, inset, canvas.width - inset * 2, canvas.height - inset * 2);
    ctx.fillStyle = pattern;
    ctx.fillRect(inset, inset, canvas.width - inset * 2, canvas.height - inset * 2);
    return canvas;
  }

  fillWithPattern(targetCanvas, createStripedPattern(2, 6, 2, "#000"));
  fillWithPattern(targetCanvas, createStripedPattern(3, 6, 2, "#000"), 50); 
  fillWithPattern(targetCanvas, createStripedPattern(4, 6, 2, "#000"), 100);  
  fillWithPattern(targetCanvas1, createStripedPattern(4, 8, 3, "#000"));
  var y = 0;
  var ang = 0;
  const ctx = targetCanvas2.getContext('2d');
  while (y < targetCanvas2.height) {
      ctx.fillStyle = createAARotatedPattern(2, 5, ang, "#000");
      ctx.fillRect(0, y, targetCanvas2.width, 34);
      y += 40;
      ang += 2 * Math.PI / (targetCanvas2.height / 40);
  }

  
  
  

