
<template>
    <div class="side-container">
        <div class="profile">
            <img src="https://pinia.web3doc.top/logo.svg" alt="头像">
        </div>
        <div class="iconList">
            <div class="iconTop">
                <div @click="handelIcon(item)" class="iconItem" :class="{ active: item.path.includes(Route.name) }"
                    v-for="item in info.topIcon">
                    <IconInfo :icon="item.icon" :num="item.num"></IconInfo>
                </div>
            </div>
            <div class="iconBottom ">
                <div @click="handelIcon(item)" class="iconItem" :class="{ active: item.path.includes(Route.name) }"
                    v-for="item in info.bottomIcon">
                    <IconInfo :icon="item.icon" :num="item.num"></IconInfo>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import IconInfo from "@/common/icon/index.vue"
import useIconInfo from "@/store/iconInfo.js"
import { useRouter, useRoute } from "vue-router"
import showObj from "@/utils/showComponent.js"
let info = useIconInfo() // 获取图标信息
let Router = useRouter()
let Route = useRoute()
function handelIcon(item) {
    if (item.path) {
        Router.push(item.path)
    } else if (item.fn) {
        if (showObj[item.fn]) {
            console.log(showObj);
            showObj[item.fn]()
        } else {
            console.warn(`没有函数${item.fn}`);
        }
    }
}
</script>
<style lang="less" scoped>
.side-container {
    width: 60px;
    background-color: black;
    padding: 30px 5px 15px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .profile {
        width: 100%;

        img {
            width: 100%;
        }
    }

    .iconList {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;

        .iconTop,
        .iconBottom {
            .iconItem {
                width: 100%;
                height: 30px;
                line-height: 30px;
                text-align: center;
                cursor: pointer;
                color: rgb(233, 231, 227);
                margin: 10px 0;

                &:hover {
                    color: white;
                }

                &.active {
                    color: green;
                }
            }
        }

    }
}
</style>
