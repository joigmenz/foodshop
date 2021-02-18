<template>
  <div class="flex">
    <div class="carousel">
      <slot></slot>

      <button
        @click="next"
        class="next bg-red-500 px-2 rounded-sm text-xs text-white font-semibold"
      >
        Next
      </button>
      <button
        @click="prev"
        class="prev bg-red-500 px-2 rounded-sm text-xs text-white font-semibold"
      >
        Prev
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Carousel",
  data() {
    return {};
  },
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 350px;
  height: 300px;
  overflow: hidden;
}

button {
  position: absolute;
  height: 40px;
  width: 50px;
  bottom: 0;
}

button:active,
button:hover {
  cursor: pointer;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}
</style>
