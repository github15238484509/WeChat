<template>
    <div class="new-friend-container">
        <div class="title">新的朋友</div>
        <div class="container">
            <div class="newList">
                <div class="newItem" v-for="item in data.data">
                    <div class="left">
                        <img :src="item.profile" alt="">
                        <div class="info">
                            <div class="name">{{item.realNanme||item.name}}</div>
                            <div class="comment"></div>
                        </div>
                    </div>
                    <div class="right">
                        <span v-if="item.status=='1'">已添加</span>
                        <span v-if="item.status=='2'">已拒绝</span>
                        <span v-if="item.status=='0'">同意</span>
                        <span v-if="item.status=='0'">拒绝</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, watch, reactive, onMounted } from "vue";
import { useRoute } from "vue-router"
import { getFriendInfo, getNewFriend } from "@/api/friend.js"
import { myDecode } from "@/utils/index.js"

let data = reactive({
    data: []
})
async function getFriend() {
    let result = await getNewFriend()
    data.data = result.data.rows
}

onMounted(getFriend)
</script>
<style lang="less" scoped>
.new-friend-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .title {
        text-indent: 2em;
        font-size: 1.5em;
        font-weight: 600;
        padding-bottom: 10px;
        border-bottom: 1px solid rgb(222, 222, 222);
    }

    .container {
        flex: 1;
        overflow: hidden;
        border: 1px solid red;
        display: flex;
        justify-content: center;

        .newList {
            width: 500px;
            overflow: auto;
            margin-top: 20px;
            margin-bottom: 20px;

            .newItem {
                height: 50px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-bottom: 10px;
                border-bottom: 1px solid rgb(222, 222, 222);

                .left {
                    display: flex;
                    justify-content: center;

                    img {
                        width: 50px;
                        height: 50px;
                    }

                    .info {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;

                        .name {
                            font-weight: 600;
                        }

                        .comment {
                            margin-top: 5px;
                            font-size: 0.8rem;
                            color: rgb(142, 136, 136);
                        }
                    }
                }

                .right {}
            }
        }
    }
}
</style>
