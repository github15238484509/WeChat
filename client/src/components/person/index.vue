<template>
    <div class="person-container">
        <PersonItem v-for="item in data" :key="item.id" :data="item"></PersonItem>
    </div>
</template>

<script setup>
import PersonItem from "./personItem.vue"
defineProps({
    data:{
        type:Array,
    }
})
</script>
<style scoped lang="less">
.person-container {
    // width: 100%;
    // height: 100%;
}
</style>