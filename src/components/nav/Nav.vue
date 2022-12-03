<template lang="">
  <nav
    class="nav-container flex justify-between py-6 px-11 w-full top-0 items-center"
  >
    <div>
      <router-link to="/"> 
        <h1 class="font-bold text-2xl cursor-pointer">AD69.</h1> 
      </router-link>
    </div>
    <div class="flex items-center space-x-3 router-links-container">
      <div :style="`opacity: ${isOpen ? 0 : 1}; transition:opacity 0.3s`">
        <router-link class="router-link" to="/">Services</router-link>
        <router-link class="router-link" to="/customer"
          >Customer Stories</router-link
        >
        <router-link class="router-link" to="/about">About us</router-link>
        <router-link class="router-link" to="/contact">Contact</router-link>
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

export default {
  name: "Nav",
  components: {
    BurgerMenu,
  },
  methods: {
    ...mapMutations("SiteStore", ["handleDrawer"]),
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
}
</style>
