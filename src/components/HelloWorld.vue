<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>

  <div class="">
    <h1 class="display-5 text-primary text-center mt-5">{{ msg }}</h1>
    <h2 class="lead text-primary text-center mb-4">
      STUDENTS

      <!--
        Here to come the "Dwwm Blog" link and maybe a preview!?
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.-->
    </h2>
  </div>

</template>

