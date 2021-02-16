<template>
    <div class="home">
      <IndexStore />
    </div>
</template>

<script>
// @ is an alias to /src
import IndexStore from '@/components/store/IndexStore.vue'

export default {
  name: 'Home',
  components: {
    IndexStore
  }
}
</script>
