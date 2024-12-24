<template>
  <div class="container">
    <div class="template">
      <img :src="img" alt="" />
      <h3 class="title">{{ title }}</h3>
      <p class="text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: { type: String },
    title: { type: String },
    text: { type: String },
  },
};
</script>

<style lang="css" scoped>
.title {
  text-transform: uppercase;
  text-align: center;
  font-family: "NissanBrand";
}
.text {
  margin-top: 16px;
  text-align: center;
  font-family: "NissanBrand";
}
.container {
  display: flex;
}
img {
  margin: 1px 20px 30px;
  height: 100px;
  width: 177px;
}

.template {
  height: 314px;
  width: 282px;
  margin: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
