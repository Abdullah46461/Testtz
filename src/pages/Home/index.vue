<template>
  <SectionIntro />
  <SectionMain />
  <SectionFooter />
</template>

<script>
import SectionFooter from "@pages/Home/Sections/SectionFooter.vue";
import SectionIntro from "@pages/Home/Sections/SectionIntro.vue";
import SectionMain from "@pages/Home/Sections/SectionMain.vue";
export default {
  components: { SectionFooter, SectionMain, SectionIntro },
};
</script>

<style lang="scss" scoped></style>
