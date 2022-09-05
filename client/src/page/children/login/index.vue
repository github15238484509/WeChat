
<template>
  <div class="login-container">
    <div class="container">
      <div class="login" v-if="!isLogin">
        <MyLogin></MyLogin>
      </div>
      <div class="register" v-else>
        <MyRegister></MyRegister>
      </div>
    </div>
  </div>
</template>
<script setup name="login">
import { computed } from "vue"
import { useRoute } from "vue-router"
import MyLogin from "./login.vue"
import MyRegister from "./register.vue"
let Route = useRoute()
let isLogin = computed(() => {
  return Route.params.type === "register"
})
</script>
<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .login {
    width: 400px;
  }
}
</style>
