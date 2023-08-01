<template>
  <div :class="$style.factoid">
    <div :class="$style.icon">
      <Icon :name="data.icon" :class="$style.icon" />
    </div>
    <h3 :class="$style.title">{{ data.title }}</h3>
    <div>{{ data.text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style module lang="scss">
.factoid {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: rem(16);
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;
  gap: rem(16);
  padding: 0 rem(16) rem(16);

  .icon {
    display: flex;
    width: rem(177);
    height: rem(100);
  }

  .title {
    font-size: rem(20);
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  }
}
</style>
