<template>
    <div class="flex min-w-full min-h-screen">
        <NuxtRouteAnnouncer />
        <Three class="w-full h-full" />
    </div>
</template>

<script lang="ts" setup>
import '~/assets/style.css';
import Three from './components/Three.vue';
</script>
