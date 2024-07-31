<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'DWWM'
  },
  subtitle: {
    type: String,
    default: 'PROMO 2024-2025'
  }
});
</script>


<template>

  <body class="bg-altlight pt-5">
  <header>
    <div class="container-fluid text-center ">
      <h1 class="display-5 text-primary mt-5">{{ title }}</h1>
      <h2 class="h1 lead text-primary mt-3">{{ subtitle }}</h2>
      <div class="">
        <img src="../assets/images/computerflyer1-min.jpg" alt="computer picture" class="w-75 my-5 rounded object-fit-cover">
      </div>
    </div>
  </header>

  <div class="text-center text-success pb-5">
    <h3 class="h2 lead">Parcours Développeur Web</h3>
    <h4 class="display-6"><a href="#" class="text-success text-decoration-none">DWWM<sub><i>Blog</i></sub></a></h4>
    <h5 class="visually-hidden">Where Developers Suffer Together, from https://daily.dev/</h5>
  </div>
  </body>

</template>

