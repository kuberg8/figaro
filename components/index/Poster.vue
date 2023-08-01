<template>
  <section :class="['container', $style.background]">
    <VButton :class="$style.button">Тест-драйв</VButton>
  </section>
</template>

<style module lang="scss">
.background {
  display: flex;
  align-items: flex-end;
  padding-bottom: rem(142);
  width: 100vw;
  height: rem(542);
  background-repeat: no-repeat;
  background-image: url("~assets/images/5.png"), url("~assets/images/4.png"), url("~assets/images/3.png"), url("~assets/images/2.png"), url("~assets/images/1.jpg");
  background-size: rem(98) rem(37), rem(680) rem(326), rem(1038) rem(191), rem(1635) rem(216), 100% rem(464);
  background-position: rem(1188) rem(483), rem(575) rem(182), rem(249) rem(116), rem(-162) rem(116), top;
  
  @include media-breakpoint-down(md) {
    justify-content: center;
    background-position: 95% 95%, center, rem(10) rem(116), 0, top;
    background-size: rem(98) rem(37), 95vw auto, 95vw auto, 0, 100% 100vh;
    height: 100vh;
  }

  .button {
    width: rem(282);
  }
}
</style>
