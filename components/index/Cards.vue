<template>
  <section :class="$style.cards" class="container">
    <h2>{{ cardsTitle }}</h2>
    <Swiper ref="slider" :options="swiperOption" :class="$style.list" class="swiper-wrapper">
      <SwiperSlide v-for="card in cards" :key="card.sorting">
        <Card :data="card" class="swiper-slide" />
      </SwiperSlide>
    </Swiper>

    <div :class="$style.button">
      <VButton @click="updateCards" variant="secondary">Добавить особенность</VButton>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import { mapState, mapGetters } from 'vuex'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  async mounted() {
    this.fetchCards()
  },
  data() {
    return {
      swiperOption: {
        breakpoints: {
          0: {
            slidesPerView: 1.3,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 3,
            // slidesPerGroup: 3
          },
        },
      },
    }
  },
  computed: {
    ...mapState(['cardsTitle']),
    ...mapGetters({
      cards: 'getFigaroCards',
    }),
  },
  methods: {
    ...mapActions(['fetchCards', 'addCard']),
    updateCards() {
      this.addCard()
      this.$nextTick(() => {
        const { $swiper } = this.$refs.slider
        this.cards && $swiper?.slideToLoop(this.cards.length - 1)
      })
    },
  },
}
</script>

<style module lang="scss">
.cards {
  display: grid;
  row-gap: rem(48);
  padding-bottom: rem(64);
  padding-top: rem(64);

  .list {
    display: flex;
    justify-content: center;
    gap: rem(24);
  }

  .button {
    margin: 0 auto;
  }
}
</style>

<style lang="scss">
.swiper-wrapper {
  @include media-breakpoint-down(md) {
    padding: 0 rem(20) !important;
    margin: 0 rem(-20) !important;
  }
}
</style>
