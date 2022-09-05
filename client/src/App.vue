
<template>
  <router-view></router-view>
  <slot></slot>
</template>
<script setup>
  import useUser from "@/store/user.js"
  let user = useUser()
  user.whoami()
</script>
<style lang="less" scoped>
</style>
