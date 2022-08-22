
<template>
  <router-view></router-view>
</template>
<script setup>
  import useUser from "@/store/user.js"
  let user = useUser()
  user.whoami()
</script>
<style lang="less" scoped>
</style>
