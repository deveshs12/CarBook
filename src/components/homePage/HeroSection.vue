  <template>
  <section class="bg-cover relative h-screen" :style="{ backgroundImage: `url(${bgImage})`}">
    <div class="absolute inset-0 bg-black opacity-25"></div>
    <div class="relative flex items-center justify-center h-full text-center text-white px-4">
      <div class="w-full md:w-3/5 content-wrapper" :class="{'animate-in': isVisible}">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">Fast & Easy to Rent A Car</h1>
        <p class="text-md md:text-xl mb-6">
          Find the best car rental deals in your city. 
          Enjoy a seamless booking experience, flexible 
          rental options, and a wide selection of vehicles to 
          suit your needs. Fast, easy, and reliable car rentals 
          at your fingertips.
        </p>
        <h2 class="text-2xl font-semibold">Easy Steps for renting a Car</h2>
      </div>
      </div>
    <!-- </div> -->
  </section>
</template>

<script setup>
import { ref, onMounted} from 'vue';
import bgImage from "../../assets/images/bg_1.jpg";

const isVisible = ref(false);
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100); // Delay to trigger animation
});
</script>

<style>
.content-wrapper {
  transform: translateY(80px);
  opacity: 0;
  transition: all 1s ease-out;
}
.content-wrapper.animate-in {
  transform: translateY(0);
  opacity: 1;
}
</style>