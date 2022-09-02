
<template>
  <div class="login-container">
    <div class="container">
      <div class="login" v-if="isLogin">
        <MyForm :model="login" :rule="loginRule" @submit="loginSubmit">
          <MyInput name="account" :error="loginRule.account.error" v-model="login.account" text="账号:"
            placeholder="请输入账号">
          </MyInput>
          <MyInput :error="loginRule.password.error" v-model="login.password" text="密码:" placeholder="请输入密码"
            type="password" name="password">
          </MyInput>
          <MyButton type="submit" class="submit">提交</MyButton>
        </MyForm>
      </div>
      <div class="register" v-else>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue"
import MyInput from "@/common/myInput/index.vue"
import MyButton from "@/common/myButton/index.vue"
import MyForm from "@/common/myform/index.vue"
let isLogin = ref(true)
let login = reactive({
  account: '',
  password: ''
})
let loginRule = reactive({
  account: {
    error: '',
    rules: [{ fn: "required", message: '账号不能为空' },
    { fn: "range:1-5", message: '账号长度正能为1-5' }]
  },
  password: {
    error: '',
    rules: [{ fn: "range:6-10", message: '密码长度只能为6-10' }]
  }
})
function loginSubmit(data) {
  console.log(data, "接收到的数据");
}
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

    .submit {
      width: 100%;
    }
  }
}
</style>
