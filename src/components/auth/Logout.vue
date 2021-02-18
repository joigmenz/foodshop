<template>
    
</template>

<script>
export default {
    created() {
        this.$store.dispatch('AUTH_LOGOUT').then(response => {
            this.$router.push(`/${this.$i18n.locale}`)
        });
    }
}
</script>