<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
    <body class="">
        <header>

            <div class="wrapper text-center bg-altlight">
                <nav>
                  <RouterLink class="lead fw-semibold mx-3 text-altsuccess text-decoration-none" to="/">Home</RouterLink>
                  <RouterLink class="lead fw-semibold mx-3 text-altsuccess text-decoration-none" :to="{ name: 'about' }">About</RouterLink>
                  <RouterLink class="lead fw-semibold mx-3 text-altsuccess text-decoration-none" :to="{ name: 'Students' }">Students</RouterLink>
                </nav>
            </div>
        </header>

        <RouterView />
    </body>
</template>

