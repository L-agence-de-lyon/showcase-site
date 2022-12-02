let currImage = "services";
let isChanging = false;
const imageChangeOnMouseHover = async (src) => {
  if (currImage === src || isChanging) return;
  else {
    isChanging = true;
    const image = document.getElementsByClassName("menu-image")[0];
    var img = require.context("../assets/", false, /\.png$/);
    image.src = img("./" + src + ".png");
    currImage = src;
    isChanging = false;
  }
};

export { imageChangeOnMouseHover };
