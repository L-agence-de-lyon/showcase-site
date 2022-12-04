let currImage = "progressive";
const imageChangeOnMouseHover = async (src) => {
  if (currImage === src) return;
  else {
    const image = document.getElementsByClassName("menu-image")[0];
    var img = require.context("../assets/svg/", false, /\.svg$/);
    image.style.backgroundImage = `url(${img("./" + src + ".svg")})`;
    currImage = src;
  }
};

export { imageChangeOnMouseHover };
