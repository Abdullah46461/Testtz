<template>
  <div class="template">
    <div class="container">
      <img :src="`${apiUrl}/${img}`" alt="{{alt}}" />
      <p class="text">{{ text }}</p>
      <h1></h1>
    </div>
  </div>
</template>

<script>
const apiUrl = import.meta.env.VITE_API_URL;
export default {
  data() {
    return {
      apiUrl,
    };
  },
  props: {
    alt: { String },
    img: { String },
    title: { String },
    text: { String },
  },
};
</script>

<style lang="css" scoped>
.template {
  display: flex;

  gap: 160px;
}
.text {
  text-align: start;
  width: 384px;
  height: 78px;
  margin-top: 16px;
}
.container {
  margin-top: 48px;
  display: flex;
  height: 294px;
  flex-direction: column;
}
img {
  width: 384px;
  height: 200px;
}
</style>
