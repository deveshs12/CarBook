<template>
    <BgContainer
    title="Cars"
    bgImage="bg_3.jpg"
    :links="[
      { text: 'Home', to: '/' },
      { text: 'Cars', to: '/Cars' },
    ]"
  />
  <div class="flex justify-center w-full my-20">
    <div class="grid grid-cols-1 md:grid-cols-3 w-4/5 gap-10">
      <CarCard
        v-for="(cars, index) in cars"
        :key="index"
        :id="cars.id"
        :name="cars.name"
        :image="cars.image"
        :price="cars.price"
        :brand="cars.brand"
      />
    </div>
  </div>
</template>

<script setup>
import { CaUvIndex } from '@kalimahapps/vue-icons';
import BgContainer from '../components/composables/BgContainer.vue';
import CarCard from '../components/cards/CarCards.vue';
import {cars} from '../data/carData.js';
</script>

<style>

</style>