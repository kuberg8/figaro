<template>
  <component v-if="name" :is="require(`~/assets/svg/${name}.svg?inline`)" :class="$style.icon" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null,
    },
  },
}
</script>

<style module lang="scss">
.icon {
}
</style>
