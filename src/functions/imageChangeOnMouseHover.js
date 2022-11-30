let currImage = "services";
let isChanging = false;
const imageChangeOnMouseHover = async (src) => {
  if (currImage === src || isChanging) return;
  else {
    isChanging = true;
    const image = document.getElementsByClassName("menu-image")[0];
    await transition(image);
    var img = require.context("../assets/", false, /\.png$/);
    image.src = img("./" + src + ".png");
    await transition(image);
    image.style.opacity = 1;
    currImage = src;
    isChanging = false;
  }
};

function transition(img) {
  return new Promise(function (resolve) {
    var del = 0.01;
    var id = setInterval(changeOpacity, 2);
    function changeOpacity() {
      img.style.opacity -= del;
      if (img.style.opacity <= 0) {
        clearInterval(id);
        resolve();
      }
    }
  });
}

export { imageChangeOnMouseHover };
