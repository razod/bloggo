function hexToRgb(hex: string) {
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function colors(color: string) {
  let rgb = hexToRgb(color);
  // let color_full = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`;
  let color_light = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`;

  return `
  <style>
    h1 {
      color: ${color}
    }
    .post h2 {
      color: ${color};
      opacity:0.8;
      transition: opacity 0.2s ease;
    }
    .post h2:hover {
      opacity:1;
    }

    svg.body path, svg.body{
      fill: ${color_light}!important;
    }
  </style>
  `;
}

export { colors }