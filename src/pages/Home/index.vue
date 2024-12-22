<template>
  <SectionIntro />
  <SectionMain />
</template>

<script>
import SectionIntro from "@pages/Home/Sections/SectionIntro.vue";
import SectionMain from "@pages/Home/Sections/SectionMain.vue";
export default {
  components: { SectionMain, SectionIntro },
};
</script>

<style lang="scss" scoped></style>
