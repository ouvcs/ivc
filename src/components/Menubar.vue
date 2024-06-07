<template>
    <header>
        <nav class="navigation">
            <img src="@/assets/images/favicon.svg" alt class="menu-logo">
            <div class="menu-items">
                <router-link class="menu-item" :to="{ name: 'main' }">Главная</router-link>
                <router-link class="menu-item" :to="{ name: 'map' }">Карта</router-link>
                <router-link class="menu-item" :to="{ name: 'countries' }">Страны</router-link>
                <router-link class="menu-item" :to="{ name: 'valutes' }">Валюты</router-link>
                <router-link class="menu-item" :to="{ name: 'wiki' }">Вики</router-link>
                <router-link class="menu-item" :to="{ name: 'about' }">О нас</router-link>
                <a class="menu-item menu-vk" href="https://vk.com/vgovernments">
                    <img src="@/assets/images/vk-logo.svg" alt class="vk-logo">
                    <span class="vk-text">вконтакте</span>
                    <span class="vk-text-mask">вконтакте</span>
                </a>
            </div>
            <div class="navigation-toggle" v-on:click="navigationToggleClick"><span></span><span></span><span></span></div>
        </nav>
    </header>
</template>

<script src="@/assets/scripts/components/Menubar.js"></script>
<style src="@/assets/styles/components/Menubar.css"></style>