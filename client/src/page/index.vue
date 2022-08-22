
<template>
    <LayoutInfo>
        <template v-slot:left>
            <SideInfo></SideInfo>
        </template>
        <router-view></router-view>
    </LayoutInfo>
</template>
<script setup>
import LayoutInfo from "@/common/layout/index.vue"
import SideInfo from "@/components/side/index.vue"

</script>
<style lang="less" scoped>
</style>
