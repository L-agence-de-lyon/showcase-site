<template>
  <div class="home flex items-center">
    <div>
      <h1 class="text-8xl mb-10">Where all your marketing comes together</h1>
      <div>
        <span class="text-2xl">
          We identify your business problem and <br />
          come up with a comprehensive marketing <br />
          solution to boost yout presence
        </span>
        <Button text="Read More"></Button>
      </div>
    </div>
    <img
      class="w-full"
      src="../assets/casual-life-3d-man-chatting-on-dating-site.png"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "../components/button/Button.vue";

export default {
  name: "HomeView",
  components: {
    Button,
  },
};
</script>
