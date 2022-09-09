<template>
    <div class="user-info-container">
        <div class="info">
            <div class="profile">
                <Image :src="profile"></Image>
            </div>
            <div>
                <div class="name">{{name}}</div>
                <div class="groupName" v-for="item in nameList" :key="item">{{item}}</div>
            </div>
        </div>
        <div class="btns">
            <MyButton @click="$emit('click',propData)" status="success">{{btnText}}</MyButton>
        </div>
    </div>
</template>

<script setup>
import Image from "@/common/none/indexImg.vue"
import MyButton from "@/common/myButton/index.vue"
import { ref } from "vue"
let propData = defineProps({
    profile: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    nameList: {
        type: Array,
        default: []
    },
    btnText: {
        type: String,
        required: true
    }
})
defineEmits(["click"])

</script>
<style scoped lang="less">
.user-info-container {
    width: 200px;
    // height: 150px;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 0 18px 3px rgb(230 230 230);
    border-radius: 5px;

    .info,
    .btns {
        width: 100%;
        margin-top: 10px;
    }

    .info {
        display: flex;
        // justify-content: space-between;
        align-items: center;
        height: 80px;

        .profile {
            width: 50px;
            height: 50px;
            margin-right: 20px;
            border-radius: 5px;
        }

        .groupName {
            color: #666;
            font-size: 0.9rem;
            margin-top: 3px;
        }

    }


    .btns {
        text-align: center;
    }
}
</style>