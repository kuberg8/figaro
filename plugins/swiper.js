import Vue from 'vue'

import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
  Navigation,
  Lazy,
  Controller,
  Parallax,
} from 'swiper/core'

import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

Vue.use(getAwesomeSwiper(SwiperClass))
SwiperClass.use([Pagination, Mousewheel, Autoplay, Navigation, Lazy, Controller, Parallax])
