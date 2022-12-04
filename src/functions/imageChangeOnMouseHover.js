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

export { imageChangeOnMouseHover };
