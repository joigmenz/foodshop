<template>
  <div class="max-w-screen-lg grid m-auto  md:grid-cols-6 mt-8">
    <form
      @submit.prevent="submit"
      class="flex  flex-col col-start-1 col-end-4 text-left"
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
        {{ $t("contact-us") }}
      </a>
      <input
        type="text"
        name="name"
        id="name"
        class="bg-gray-50 border border-grey-light w-full p-2 rounded mb-1 w-full mt-4"
        placeholder="Name"
      />
      <textarea
        v-model="message"
        class="bg-gray-50 border border-grey-light w-full p-3 h-60 rounded mb-1 w-full mt-4"
        spellcheck="false"
        placeholder=""
      >
      </textarea>
      <p class="text-left text-red-400 mb-4" v-bind:show="error">{{ error }}</p>
      <button
        type="submit"
        class="w-32 py-2 self-start rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1 font-bold"
      >
        {{ $t('submit') }}
      </button>
    </form>
    <div class="flex flex-col col-start-4 col-end-7 text-left m-16">
      <h1
        class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-2xl"
      >
        {{ $t('how-cand-we-help') }}
      </h1>
      <p class="mt-4 text-lg">
        {{ $t('how-cand-we-help-request') }}
      </p>
    </div>
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
        this.error = "The message is required.";
        return;
      }
      this.$store.dispatch("sendSuggestion", message).then((response) => {
        this.waSent = true;
        this.message = "";
        this.error = "";
      });
    },
  },
};
</script>
