<template lang="">
  <div @click="handleDrawer" class="burger-menu" :class="isOpen ? `open` : 'close'">
    <span></span>
    <span></span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "BurgerMenu",
  props: {
    text: String,
  },
  methods: {
    ...mapMutations("SiteStore", ["handleDrawer"]),
  },
  computed: {
    ...mapGetters("SiteStore", ["isOpen"]),
  },
  watch: {},
};
</script>
<style lang="css">
.burger-menu {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  -webkit-box-align: end;
  -webkit-box-pack: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
}

.burger-menu span {
  display: block;
  width: 60px;
  height: 2px;
  background: #151515;
  transition: 0.4s cubic-bezier(0.65, 0, 0.25, 1);
}

.burger-menu span:first-child {
  margin-bottom: 6px;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
}

.burger-menu span:last-child {
  margin-right: 15px;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
}

.burger-menu.open span:first-child {
  transform: translate3d(-1px, 2px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  width: 40px;
}

.burger-menu.open span:last-child {
  width: 40px;
  transform: translate3d(13px, -5px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg);
}
</style>
