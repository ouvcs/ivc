<template>
  <div class="error">
        <h1 class="error-code">{{ error.statusCode }}</h1>
        <div class="error-message">{{ messages[error.statusCode] }}</div>
        <button class="error-back" @click="resolveError">Вернутся на главную</button>
  </div>
</template>

<script setup lang="ts">
    import type { NuxtError } from "#app";

    var error = useError();
    var messages = {
        400: "Страница не найдена",
        500: "Внутренняя ошибка сервера"
    }

    function resolveError() { clearError({ redirect: "/" }) };
</script>
<style src="~/assets/styles/error.css"></style>