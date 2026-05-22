<template>
    <canvas ref="canvas"></canvas>
</template>

<script lang="ts" setup>
import * as Renderer from '~/assets/scripts/Renderer';
import * as Game from '~/assets/scripts/Game';

const canvas = ref<HTMLCanvasElement | null>(null);
onMounted(() => {
    if (!canvas.value) {
        console.error('Canvas element not found');
        return;
    }

    Renderer.setup(canvas.value);
    Game.setup();
});
</script>