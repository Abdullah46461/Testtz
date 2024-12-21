<script setup lang="ts">
import Button from "@/components/Button/index.vue";
import { ref } from "vue";

const variable = ref("1");
console.log(variable.value);
</script>

<template>
  <Button />
  <h1>{{ variable }}</h1>
</template>

<style scoped></style>
