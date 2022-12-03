let currImage = "progressive";
let isChanging = false;
const imageChangeOnMouseHover = async (src) => {
  if (currImage === src || isChanging) return;
  else {
    isChanging = true;
    const image = document.getElementsByClassName("menu-image")[0];
    var img = require.context("../assets/svg/", false, /\.svg$/);
    image.style.backgroundImage = `url(${img("./" + src + ".svg")})`;
    currImage = src;
    isChanging = false;
  }
};

export { imageChangeOnMouseHover };
