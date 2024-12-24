<script>
import Button from "@/components/Button/index.vue";
export default {
  components: { Button },
};
</script>

<template>
  <div class="section">
    <div class="background">
      <div>
        <img src="@/assets/images/mounte.png" alt="" class="mountains" />
        <img src="@/assets/images/text.svg" alt="" class="intro-text" />
      </div>
      <Button class="button" />
      <!--      <img src="@/assets/images/car.png" alt="" class="car" />-->
    </div>
  </div>
</template>

<style lang="css" scoped>
.car {
  width: 742px;
  height: 385px;
}
.intro-text {
  height: 191px;
  width: 100%;
}
.mountains {
  position: absolute;
  height: 191px;
  width: 100%;
  opacity: 0.1;
}
.section {
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 542px;
  background-color: #fff;
  margin: 0;
  padding: 0;
}
.background {
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 464px;
  background-color: rgba(10, 186, 181, 1);
  margin: 0;
  padding: 0;
}
.container {
  justify-content: center;
  align-items: center;
}
</style>
