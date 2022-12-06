<template lang="">
    <div class="container-transition-screen">
        <div class="transition-screen">
    </div>
    </div>
</template>
<script>
import gsap from "gsap";

export default {
    name: "Transition",
    methods: {
        startGsapAnimation() {
            var tl = gsap.timeline();
            tl.to(".transition-screen", {
                duration: 0.8,
                width: "100%",
                left: "0%",
                ease: "Expo.easeInOut",
            });

            tl.to(".transition-screen", {
                duration: 1,
                width: "100%",
                left: "100%",
                ease: "Expo.easeInOut",
                delay: 0.3,
            });
            tl.set(".transition-screen", { left: "-100%" });

            tl.to(".container-transition-screen", {
                duration: 0.4,
                opacity: 0
            })
        }
    },
    mounted() {
        this.startGsapAnimation()
    },
    watch: {
        $route(to, from) {
            if (to.fullPath !== from.fullPath) {
                var tl = gsap.timeline();
                tl.to(".container-transition-screen", {
                    duration: 0.4,
                    opacity: 1
                })
                this.startGsapAnimation()
            }
        }
    }
}
</script>
<style lang="css">
.container-transition-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 999;
    pointer-events: none;
    background-color: white;
    user-select: none;
}

.transition-screen {
    position: relative;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    background-color: #151515;
    width: 0%;
    height: 100%;
    pointer-events: none;
}
</style>