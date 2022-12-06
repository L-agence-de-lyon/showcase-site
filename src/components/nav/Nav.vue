<template lang="">
  <nav
    class="nav-container flex justify-between py-6 px-11 w-full top-0 items-center"
  >
    <div>
        <h1 @click="changeRouter('/')" class="font-bold text-2xl cursor-pointer">AD69.</h1> 
    </div>
    <div class="flex items-center space-x-3 router-links-container">
      <div :style="`opacity: ${isOpen ? 0 : 1}; transition:opacity 0.3s`">
        <span @click="changeRouter('/')" class="router-link" to="/">Services</span>
        <span @click="changeRouter('/customer')" class="router-link" to="/customer"
          >Customer Stories</span
        >
        <span @click="changeRouter('/about')" class="router-link" to="/about">About us</span>
        <span @click="changeRouter('/contact')" class="router-link" to="/contact">Contact</span>
      </div>

      <div>
        <BurgerMenu></BurgerMenu>
      </div>
    </div>
  </nav>
</template>

<script>
import BurgerMenu from "./burger-menu/BurgerMenu.vue";
import { mapGetters, mapMutations } from "vuex";
import gsap from "gsap";
export default {
  name: "Nav",
  components: {
    BurgerMenu,
  },
  methods: {
    ...mapMutations("SiteStore", ["handleDrawer"]),
    changeRouter(link) {
      var tl = gsap.timeline();
      tl.to(".container-transition-screen", {
        duration: 0.4,
        opacity: 1
      })
      setTimeout(() => {
        this.$router.push(link);
      }, 400)
    }
  },
  computed: {
    ...mapGetters("SiteStore", ["isOpen"]),
  },
};
</script>
<style>
.nav-container {
  position: fixed;
  z-index: 50;
  background: #f8f8f8;
}

.router-links-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.router-link {
  font-size: 0.85rem;
  color: #151515;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  margin-right: 7rem;
  cursor: pointer;
  overflow: hidden;
}

.router-link::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #151515;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.router-link:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
