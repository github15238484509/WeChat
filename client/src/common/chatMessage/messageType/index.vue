<template >
    <div class="message-type-container">

    </div>
</template>

<script setup>
import PersonContainer from "@/components/person/index.vue"
import { useRouter, useRoute, onBeforeRouteUpdate, } from "vue-router";
import { myDecode } from "@/utils/index.js"
import { onMounted, ref, watch, computed } from "vue"
import useHistoryPerson from "@/store/historyPerson.js"
let Router = useRouter()
let Route = useRoute()
let id = ref("")
let InfoData = useHistoryPerson()

</script>
<style scoped lang="less">
</style>