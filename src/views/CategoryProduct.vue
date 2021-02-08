<template>
    <div>
        <CategoryProducts />
    </div>
</template>

<script>
// @ is an alias to /src
import CategoryProducts from '@/components/store/CategoryProducts.vue'

export default {
  name: 'CategoryProduct',
  components: {
    CategoryProducts
  }
}
</script>
