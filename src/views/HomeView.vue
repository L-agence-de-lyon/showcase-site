<template>
  <div class="home flex items-center">
   
  </div>
</template>

<script>
// import Button from "@/components/button/Button.vue";
// import StatsCard from "@/components/card/StatsCard"
import { BeakerIcon, CpuChipIcon, TrophyIcon } from '@heroicons/vue/24/solid'

export default {
  name: "HomeView",
  components: {
  },
  data(){
    return {
      contentsCard: [
        {
          icon: BeakerIcon,
          title:'Work fast from anywhere',
          text: 'Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.'
        },
        {
          icon: CpuChipIcon,
          title:'Work fast from anywhere',
          text: 'Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.'
        },
        {
          icon: TrophyIcon,
          title:'Work fast from anywhere',
          text: 'Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.'
        }
      ]
    }
  }
};
</script>
