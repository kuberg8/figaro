<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    :class="[
      $style.button,
      {
        [$style.default]: variant == 'default',
        [$style.secondary]: variant == 'secondary',
      },
    ]"
  >
    <slot>{{ text }}</slot>
    <Icon v-if="variant === 'default'" name="arrow" />
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style module lang="scss">
.button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: rem(50);
  padding: 0 rem(20);
  transition: .2s;
  background: $color-white;

  &.default {
    &:hover {
      background: $color-red;
      color: $color-white;
    }
  }

  &.secondary {
    padding: 0 rem(47);
    border: 2px solid $color-red;
  }
}
</style>
