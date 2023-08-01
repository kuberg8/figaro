<template>
  <main :class="$style.main">
    <IndexPoster />
    <IndexBenefits />
    <IndexCards />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style module lang="scss">
.main {
  display: flex;
  flex-direction: column;
  gap: rem(32);
}
</style>
