<template>
  <div class="flex shadow border p-4">
    <div class="flex flex-col justify-between w-full">
      <div class="flex flex-shrink-0">
        <img class="object-contain h-48 w-full" :src="picture" />
      </div>
      <div class="flex flex-col">
        <router-link :to="{ path: `/${this.$i18n.locale}/products/${slug}` }"  class="text-center">
          {{ name }}
          </router-link>
        <p class="text-sm font-bold uppercase">
          {{ category.replace("-", " ") }}
        </p>
        <div class="pt-3 flex justify-between">
          <p class="pt-1 font-bold text-gray-900">{{ price.toFixed(2) }} €</p>

          <button
            @click="push"
            class="bg-red-500 px-2 rounded-sm text-xs text-white font-semibold"
          >
            {{ $t('add-to-cart') }}
            
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["id", "picture", "name", "slug", "price", "category"],
  methods: {
    push() {
      const { id, picture, name, slug, category, price } = this;
      const product = {
        id,
        picture,
        name,
        slug,
        category,
        price,
      };
      this.$store.dispatch("addProductCart", product);
    },
  },
};
</script>