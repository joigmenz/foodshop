<template>
    
</template>

<script>
export default {
    created() {
        this.$store.dispatch('destroyToken')
        .then(response => {
            this.$router.push('/')
        })
        .catch(error => {
            this.$router.push('/')
        })
    }
}
</script>