<template>
  <div class="section">
    <h1 class="title">
      МЫ ЦЕНИМ ВАШЕ ВРЕМЯ И КОМФОРТ! <br />
      ЗАПИШИТЕСЬ НА СЕРВИС NISSAN ОНЛАЙН
    </h1>
    <div v-if="isMobile" class="carousel-wrapper">
      <Carousel :items-to-show="1" :arrows="true" ref="carousel">
        <Slide v-for="item in arr" :key="item.id">
          <Template :img="item.img" :title="item.title" :text="item.text" />
        </Slide>
      </Carousel>

      <div class="custom-arrows">
        <button @click="prevSlide" class="prev-btn">‹</button>
        <button @click="nextSlide" class="next-btn">›</button>
      </div>
    </div>
    <div v-else class="template-list">
      <Template
        v-for="item in arr"
        :key="item.id"
        :img="item.img"
        :title="item.title"
        :text="item.text"
      />
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Template from "@components/template/Template.vue";
import { mapState } from "vuex";

export default {
  components: { Template, Carousel, Slide },

  data() {
    return {
      width: null,
      isMobile: false,
    };
  },

  computed: {
    ...mapState(["arr"]),
  },

  methods: {
    updateWindowWidth() {
      this.isMobile = window.innerWidth <= 768;
    },
    prevSlide() {
      this.$refs.carousel?.prev();
    },
    nextSlide() {
      this.$refs.carousel?.next();
    },
  },

  mounted() {
    window.addEventListener("resize", this.updateWindowWidth);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  },
};
</script>

<style lang="css" scoped>
.section {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
}
.carousel-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.title {
  text-align: center;
  font-family: "NissanBrandLight";
  font-size: 48px; /* Размер текста */
  line-height: 64px;
}

.carousel {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.custom-arrows {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
}
.template-list {
  display: flex;
}
button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
}

.prev-btn {
  position: absolute;
  left: 10px;
}

.next-btn {
  position: absolute;
  right: 10px;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
