let currImage = "services";
const imageChangeOnMouseHover = async (src) => {
  if (currImage === src) return;
  else {
    const image = document.getElementsByClassName("menu-image")[0];
    var img = require.context("../assets/", false, /\.png$/);
    image.style.backgroundImage = `url(${img("./" + src + ".png")})`;
    currImage = src;
  }
};

// function transition(img) {
//   return new Promise(function (resolve) {
//     var del = 0.01;
//     var id = setInterval(changeOpacity, 1);
//     function changeOpacity() {
//       img.style.opacity -= del;
//       if (img.style.opacity <= 0) {
//         clearInterval(id);
//         resolve();
//       }
//     }
//   });
// }

export { imageChangeOnMouseHover };
