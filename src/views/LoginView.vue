<template>
  <div class="login">
    <LoginForm v-if="$route.name === 'Login'"></LoginForm>
    <RegisterForm v-else></RegisterForm>
  </div>
</template>

<script>
import LoginForm from "@/components/login/LoginForm.vue";
import RegisterForm from "@/components/login/RegisterForm.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
    RegisterForm,
  },
};
</script>
