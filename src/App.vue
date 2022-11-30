<template>
  <Nav />
  <MenuVue />
  <router-view class="px-11 mt-20" />
</template>

<script>
import MenuVue from "./components/menu/Menu.vue";
import Nav from "./components/nav/Nav.vue";
import "./styles/app.css";

export default {
  name: "App",
  components: {
    Nav,
    MenuVue,
  },
};
</script>

<style></style>
