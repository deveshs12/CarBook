<template>
  <SectionHeading description="What we offer" title="Featured Vechiles" />
  <div class="w-full h-full py-10 md:py-20">
    <swiper :modules="[Autoplay]"
        :space-between="30"
        navigation
        loop
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :breakpoints="{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        }"
        class="w-4/5 drop-shadow-2xl">
      <swiper-slide v-for="(car, index) in cars" :key="index">
        <CarCard
          :name="car.name"
          :brand="car.brand"
          :price="car.price"
          :image="car.image"
          :id="car.id"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import SectionHeading from "../composables/SectionHeading.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import CarCard from "../cards/CarCards.vue";
import { cars } from "../../data/carData.js";
</script>

<style></style>
