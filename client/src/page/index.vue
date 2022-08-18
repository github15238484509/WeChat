
<template>
    <LayoutInfo>
        <template v-slot:left>
            <SideInfo></SideInfo>
        </template>
        <template>
            <router-view></router-view>
        </template>
    </LayoutInfo>
</template>
<script setup>
import LayoutInfo from "@/comom/layout/index.vue"
import SideInfo from "@/components/side/index.vue"

</script>
<style lang="less" scoped>
</style>
