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
  let color_light = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`;

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

    /* svg.body path, svg.body{
      fill: ${color_light}!important;
    } */

    img.author_pfp {
      border: 10px solid ${color_light};
      transition: border 0.2s ease-in;
      cursor: pointer;
    }

    img.author_pfp:hover {
      border: 10px solid rgba(${rgb.r},${rgb.g},${rgb.b},0.5)
    }

    .author_info {
      background: rgba(${rgb.r},${rgb.g},${rgb.b},0.1)
    }

    .author_info p {
      color: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.57)
    }

    h1.sep::after {
      content:' ';
      display:block;
      border:5px solid rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8);
      border-radius:4px;
      -webkit-border-radius:4px;
      -moz-border-radius:4px;
      box-shadow:inset 0 1px 1px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.57);
      -webkit-box-shadow:inset 0 1px 1px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.57);
      -moz-box-shadow:inset 0 1px 1px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.57);
      width:5vw;
      margin:1% auto;
    }

    h1.sep {
      color: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8);
      font-size:400%;
      font-weight:800;
    }
  </style>
  `;
}

export { colors, hexToRgb }