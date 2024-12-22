<template>
  <div>
    <h1 class="title">
      МЫ ЦЕНИМ ВАШЕ ВРЕМЯ И КОМФОРТ! ЗАПИШИТЕСЬ НА СЕРВИС NISSAN ОНЛАЙН
    </h1>
    <div class="shablon">
      <Shablon />
    </div>
  </div>
</template>

<script>
import Shablon from "@components/shablon/Shablon.vue";
export default {
  components: { Shablon },
};
</script>

<style lang="css" scoped>
.title {
  text-align: start;
  font-family: "NissanBrand";
}
</style>
