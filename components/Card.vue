<template>
  <div :class="$style.card">
    <img :src="data.image" :alt="data.image_alt" :class="$style.img" />
    <div>{{ data.description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style module lang="scss">
.card {
  display: flex;
  flex-direction: column;
  row-gap: rem(16);
  max-width: rem(384);

  .img {
    height: rem(200);
  }
}
</style>
