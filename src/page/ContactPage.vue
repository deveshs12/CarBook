<template>
  <BgContainer
    title="Contact Us"
    bgImage="bg_3.jpg"
    :links="[
      { text: 'Home', to: '/' },
      { text: 'Contact', to: '/contact' },
    ]"
  />
<div class="mx-auto p-8 max-w-6xl">
    <div
      class="flex flex-col-reverse md:flex-row gap-10 md:gap-0 justify-between"
    >
      <!-- Contact Details -->
      <div class="space-y-6 md:w-1/3">
        <div
          v-for="(contact, index) in contacts"
          :key="index"
          class="flex items-start space-x-4 border border-gray-200 p-4 rounded-md"
        >
          <component :is="contact.icon" class="text-blue-500 text-2xl" />
          <div>
            <p class="text-gray-400 mb-2">{{ contact.label }}</p>
            <p class="font-medium text-base">{{ contact.value }}</p>
          </div>
        </div>
      </div>
      <!-- Contact Form -->
      <div class="bg-gray-100/50 p-6 shadow-lg rounded-md md:w-3/5">
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label class="block text-gray-700">Name</label>
            <input
              type="text"
              v-model="form.name"
              class="w-full p-3 border rounded-lg bg-white"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Email</label>
            <input
              type="email"
              v-model="form.email"
              class="w-full p-3 border rounded-lg bg-white"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Message</label>
            <textarea
              v-model="form.message"
              rows="4"
              class="w-full p-3 border rounded-lg bg-white"
              required
            ></textarea>
          </div>

          <ButtonComponent
            type="submit"
            text="Send Message"
            bgColor="bg-blue-500"
            textColor="text-white"
            hoverColor="bg-blue-700"
          />
        </form>
      </div>
    </div>
</div>
  <!-- Dummy Map -->
  <div class="mt-10 mx-auto max-w-6xl mb-10 shadow-lg rounded-md">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.108051932437!2d77.4361701!3d28.62814285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee307ecc7e91%3A0x16613eec68653aa4!2sCrossings%20Republik%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1753869746270!5m2!1sen!2sin"
      frameborder="0"
      style="border: 2px solid #ccc"
      allowfullscreen
      class="w-full h-[350px] md:h-[700px]"
    ></iframe>
  </div>
</template>

<script setup>
import BgContainer from "../components/composables/BgContainer.vue";
import ButtonComponent from "../components/composables/ButtonComponent.vue";
import { ref } from "vue";
import {
  AkLocation,
  AnOutlinedMail,
  BsTelephoneFill,
} from "@kalimahapps/vue-icons";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  // Handle form submission logic here
  alert("Message Sent!");
  form.value = { name: "", email: "", message: "" };
};

const contacts = ref([
  {
    label: "Address:",
    value: "Crossing Republik, Ghaziabad, India",
    icon: AkLocation,
  },
  { label: "Email:", value: "info@example.com", icon: AnOutlinedMail },
  { label: "Phone:", value: "+91 93442 34562", icon: BsTelephoneFill },
]);
</script>

<style scoped>
input,
textarea {
  border: 1px solid #ccc;
  outline: none;
  transition: border 0.3s;
}
input:focus,
textarea:focus {
  border-color: #007bff;
}
</style>
