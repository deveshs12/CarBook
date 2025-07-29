<template>
  <div class="max-w-80 bg-white rounded-sm overflow-hidden shadow-md">
    <img :src="getImage(image)" alt="" class="w-full h-56 object-cover">
    <div class="p-6 space-y-2">
        <h3 class="text-xl font-medium text-gery-800">{{ name }}</h3>
        <div class="flex justify-between items-center">
            <p class="text-md text-gray-400">{{ brand }}</p>
            <p class="text-md text-blue-500 font-semibold">
                {{ price }}
                <span class="text-gray-400 text-sm font-light">/day</span>
            </p>
        </div>
        <div class="flex justify-between">
            <ButtonComponent text="Book Now"/>
            <ButtonComponent text="Details" bgColor="bg-green-500"/>
        </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '../composables/ButtonComponent.vue';
defineProps({
  id: Number,
  name: String,
  brand: String,
  price: String,
  image: String,
});

const getImage = (imageName) => {
    return new URL(`../../assets/images/${imageName}`, import.meta.url).href;
}
</script>

<style>

</style>