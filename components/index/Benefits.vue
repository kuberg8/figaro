<template>
  <section class="container">
    <h1>Мы ценим Ваше время и комфорт!<br>Запишитесь на сервис Nissan онлайн</h1>
    <div :class="$style.factoidList">
      <Factoid v-for="(item, i) in facts" :key="i" :data="item" :class="$style.factoidItem" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      facts: [
        {
          icon: 'check-car',
          title: 'Выгода',
          text: 'Узнайте о выгодных сервисных предложениях Nissan именно для вашего автомобиля',
        },
        {
          icon: 'paint-car',
          title: 'актуальность',
          text: 'Выберите актуальные для вас сервисные предложения',
        },
        {
          icon: 'map',
          title: 'широкий выбор',
          text: 'Выберите дилера, который вам подходит',
        },
        {
          icon: 'check-list',
          title: 'онлайн обслуживание',
          text: 'Отправьте дилеру данные о вашем автомобиле в форме удобной анкеты',
        },
      ],
    }
  },
}
</script>

<style module lang="scss">
.factoidList {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: rem(24);
  margin-top: rem(48);

  .factoidItem {
    max-width: rem(282);
  }
}
</style>
