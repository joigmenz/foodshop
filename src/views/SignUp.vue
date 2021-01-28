<template>
    <div class="signup">
        <Register />
    </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/auth/Register.vue';

export default {
  name: 'SignUp',
  components: {
    Register
  }
}
</script>