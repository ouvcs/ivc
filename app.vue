<template>
    <Menubar />
    <NuxtPage />
    <!-- <Footerbar /> -->
</template>

<script setup lang="ts">
    import { Menubar, Footerbar } from "#components";

    const Menubar = resolveComponent("Menubar");
    const Footerbar = resolveComponent("Footerbar");
</script>
<style src="~/assets/styles/app.css"></style>