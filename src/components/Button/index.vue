<script setup lang="ts"></script>

<template>
  <button class="but">
    Тест-драйв
    <span class="span">➤</span>
  </button>
</template>

<style scoped>
.but {
  width: 280px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border: 1px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  cursor: pointer;
  max-width: 300px;
}
.but:hover {
  background-color: rgba(195, 22, 49, 1);
  color: rgba(255, 255, 255, 1);
  border: 0;
}
.span {
  font-size: 16px;
  color: #000;
}
</style>
