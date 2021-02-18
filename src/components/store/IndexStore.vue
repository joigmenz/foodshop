<template>
  <div class="bg-white py-8 mt-2">
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <div class="flex px-48 pb-8 w-full">
        <Carousel @next="next" @prev="prev">
          <CarouselSlide
            v-for="(slide, index) in slides"
            :key="slide.id"
            :index="index"
            :visibleSlide="visibleSlide"
            :direction="direction"
          >
            <img :src="slide.picture" />
            <div class="product">
              <router-link :to="{ path: `/${ $i18n.locale }/products/${slide.slug}` }"  class="text-left text-sm w-48 truncate">{{ slide.name }}</router-link> 
              <p class="price">{{ slide.price.toFixed(2) }}€</p>
            </div>
          </CarouselSlide>
        </Carousel>
        <div class="flex flex-col w-full text-left px-16 font-serif justify-center">
          <h1 class="text-5xl text-green-700">{{ $t('enjoy-best-wines') }}</h1>
          <p class="text-2xl">{{ $t('enjoy-best-wines-massage') }}</p>
        </div>
      </div>
      <nav id="store" class="w-full z-30 top-0 px-6 py-1">
        <div
          class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"
        >
          <a
            class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
            href="#"
          >
            {{ $t('store') }}
          </a>
        </div>
      </nav>

      <div
        class="grid sm:grid-cols-1 sm:px-10 md:grid-cols-3 md:px-5 lg:grid-cols-5 xl:grid-cols-6 gap-4"
      >
        <CardProduct
          v-for="(product, index) in products"
          :key="index"
          v-bind:id="product.id"
          v-bind:picture="product.picture"
          v-bind:name="product.name"
          v-bind:slug="product.slug"
          v-bind:price="product.price"
          v-bind:category="product.category"
        ></CardProduct>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardProduct from "@/components/store/products/Card.vue";
import Carousel from "@/components/partials/carousel/Carousel.vue";
import CarouselSlide from "@/components/partials/carousel/CarouselSlide.vue";

export default {
  name: "IndexStore",
  components: {
    CardProduct,
    Carousel,
    CarouselSlide,
  },
  data() {
    return {
      slides: [],
      visibleSlide: 0,
      direction: "left",
    };
  },
  methods: {
    next() {
      if (this.visibleSlide >= this.slideLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
      this.direction = "left";
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slideLen - 1;
      } else {
        this.visibleSlide--;
      }
      this.direction = "right";
    },
  },
  computed: {
    ...mapGetters(["products"]),
    slideLen() {
      return this.slides.length;
    },
  },
  mounted() {
    const url = "/products";
    this.$store.dispatch("fetchProductData", url);
    this.$store.dispatch("fetchProductsLowCost").then((data) => {
      this.slides = data;
    });
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}

img {
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 0;
  width: 130px;
}

.product {
  margin: auto;
  position: absolute;
  width: 230px;
  bottom: 0;
  left: 0;
  right: 0;
}

.price {
  font-size: 1.2em;
  font-weight: bold;
  color: red;
}
</style>
