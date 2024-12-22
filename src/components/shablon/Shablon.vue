<template>
  <div class="container">
    <div class="shablon" v-for="item in mass" :key="item.id">
      <img :src="item.img" alt="" />
      <h3 class="title">{{ item.title }}</h3>
      <p class="text">{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mass: [
        {
          img: "/src/assets/images/car.svg",
          title: "Выгода",
          text: "Узнайте о выгодных сервисных предложениях Nissan именно для вашего автомобиля",
        },
        {
          img: "/src/assets/images/actual.svg",
          title: "Актуальность",
          text: "Выберите актуальные для вас сервисные предложения",
        },
        {
          img: "/src/assets/images/chooz.svg",
          title: "Широкий выбор",
          text: "Выберите дилера, который вам подходит",
        },
        {
          img: "/src/assets/images/online.svg",
          title: "Онлайн обслуживание",
          text: "Отправьте дилеру данные о вашем автомобиле в форме удобной анкеты",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.title {
  text-align: center;
  font-family: "NissanBrand";
}
.text {
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

.shablon {
  margin: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
