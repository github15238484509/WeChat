
<template>
    <div class="login-container">
        <div class="container">
            <div class="login">
                <MyForm :model="login" :rule="loginRule" @submit="loginSubmit">
                    <MyInput icon="zhanghao" name="account" :error="loginRule.account.error"
                        v-model.trim="login.account" text="账号:" placeholder="请输入账号">
                    </MyInput>
                    <MyInput icon="password" :error="loginRule.password.error" v-model.trim="login.password" text="密码:"
                        placeholder="请输入密码" type="password" name="password">
                    </MyInput>
                    <MyButton type="submit" class="submit">登陆</MyButton>
                </MyForm>
            </div>
            <div class="goRegister">
                <a @click="goChange">去注册</a>
            </div>
        </div>
    </div>
</template>
  <script setup name="login">
import { ref, reactive } from "vue"
import MyInput from "@/common/myInput/index.vue"
import MyButton from "@/common/myButton/index.vue"
import MyForm from "@/common/myform/index.vue"
import { useRouter, useRoute } from "vue-router"
import useUserStore from "@/store/user.js"
import { debounce } from "@/utils/index.js"
let Router = useRouter()
let Route = useRoute()
let UserStore = useUserStore()
function goChange() {
    Router.push({
        params: {
            type: 'register'
        },
        query: {
            ...Route.query
        }
    })
}


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

let loginSubmit = debounce(async (data) => {
    await UserStore.login(data)
    let path = Route.query.redirect
    if (path) {
        Router.push(path)
    } else {
        Router.push("/")
    }
}, 200)

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
  
      .goRegister {
          margin-top: 10px;
          text-align: right;
  
          a {
              cursor: pointer;
              color: #6f61c6;
          }
      }
  }
  </style>
  