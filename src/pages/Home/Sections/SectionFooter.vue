<template>
  <div class="main">
    <div class="section">
      <h2>{{ blockHeading }}</h2>
      <div class="container" v-if="features.length > 0">
        <Template2
          v-for="item in features"
          :text="item.description"
          :img="item.image"
          :alt="item.image_alt"
          :key="item.id"
        />
      </div>
      <div class="appButton">
        <AddButton @click="addSpecified" />
      </div>
    </div>
  </div>
</template>

<script>
import addButton from "@components/Button/addButton.vue";
import { mapActions, mapState } from "vuex";
import Template2 from "@components/template2/Template2.vue";
import AddButton from "@components/Button/addButton.vue";
export default {
  methods: {
    ...mapActions(["fetchFeatures", "addSpecified"]),
  },
  computed: {
    ...mapState(["features", "blockHeading"]),
  },
  mounted() {
    this.fetchFeatures();
    console.log(this.addSpecified());
  },
  components: { AddButton, Template2, addButton },
};
</script>

<style lang="css" scoped>
@media (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
h2 {
  margin-left: 160px;
  margin-top: 64px;
  text-transform: uppercase;
  text-align: start;
  font-family: "NissanBrandLight";
  font-weight: 300;
  line-height: 64px;
}
.section {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 608px;
  margin-top: 32px;
}
.container {
  display: flex;
  margin: 0 auto;
  padding: 0 20px;
  gap: 24px;
}
.appButton {
  margin-top: 40px;
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
}
</style>
