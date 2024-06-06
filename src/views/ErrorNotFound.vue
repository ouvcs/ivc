<template>
    <div class="error">
        <h1 class="error-code">404</h1>
        <div class="error-message">Страница не найдена</div>
        <router-link class="error-back" :to="{ name: 'main' }">Вернутся на главную</router-link>
    </div>
</template>

<script src="@/assets/scripts/views/ErrorNotFound.js"></script>
<style src="@/assets/styles/views/ErrorNotFound.css"></style>