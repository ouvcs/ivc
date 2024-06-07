<template>
    <header>
        <nav class="navigation">
            <img src="~/assets/images/favicon.svg" alt class="menu-logo">
            <div class="menu-items">
                <a class="menu-item" href="/">Главная</a>
                <a class="menu-item" href="/map">Карта</a>
                <a class="menu-item" href="/countries">Страны</a>
                <a class="menu-item" href="/valutes">Валюты</a>
                <a class="menu-item" href="/wiki">Вики</a>
                <a class="menu-item" href="/about">О нас</a>
                <a class="menu-item menu-vk" href="https://vk.com/vgovernments">
                    <img src="~/assets/images/vk-logo.svg" alt class="vk-logo">
                    <span class="vk-text">вконтакте</span>
                </a>
            </div>
            <div class="navigation-toggle" @click="navigationToggleClick"><span></span><span></span><span></span></div>
        </nav>
    </header>
</template>

<script setup lang="ts">
    function navigationToggleClick() {
        document.querySelector(".navigation").classList.toggle("open");
    }
</script>
<style src="~/assets/styles/components/Menubar.css"></style>