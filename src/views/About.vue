<template>
  <div class="max-w-screen-lg grid m-auto  md:grid-cols-5 mt-8">
    <form
      @submit.prevent="submit"
      class="flex  flex-col col-start-2 col-end-5 text-left"
    >
      <div
        v-show="waSent"
        class="bg-green-50 border-l-4 mb-4 border-green-500 text-orange-700 p-4"
        role="alert"
      >
        <p class="font-bold">Messsage sent</p>
        <p>Thanks for sharing your opinion with us.</p>
      </div>
      <a
        class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
        href="#"
      >
        Suggestion
      </a>
      <textarea
        v-model="message"
        class="bg-gray-50 border border-grey-light w-full p-3 h-60 rounded mb-1 w-full mt-4"
        spellcheck="false"
        placeholder="Describe everything about this suggestion here"
      >
      </textarea>
      <p class="text-left text-red-400 mb-4" v-bind:show="error">{{ error }}</p>
      <button
        type="submit"
        class="w-32 py-2 self-end rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1 font-bold"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Suggestion",
  data() {
    return {
      waSent: false,
      message: "",
      error: "",
    };
  },
  methods: {
    submit() {
      const { message } = this;
      if (!message) {
        this.error = "The suggestion is required.";
        return;
      }
      this.$store.dispatch("sendSuggestion", message).then(response => {
        this.waSent = true
        this.message = ''
        this.error = ''
      });
    },
  },
};
</script>
