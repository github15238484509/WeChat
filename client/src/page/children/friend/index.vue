<template>
    <div class="friend-container">
        <div class="search">
            <div class="searchTitle">
                <div class="input">
                    <Myinput v-model="searchText" @enter="searchHandle" name="search" :placeholder="searchPlaceholder">
                    </Myinput>
                </div>
                <div class="add" @click="changeSearch">
                    <Icon v-if="isSearch" icon="add"></Icon>
                    <Icon v-else icon="close"></Icon>
                </div>
            </div>
            <!-- :class="{active:rou}" -->
            <div class="newFriend" @click="goNewFriend" >
                <Icon icon="close"></Icon>新的朋友
            </div>
            <div class="searchContent">
                <FriendList v-if="isSearch"></FriendList>
                <SearchFriendS v-else :data="searchData.data"></SearchFriendS>
            </div>
        </div>
        <div class="rightContainer">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
import NoneImage from "@/common/none/indexImg.vue"
import FriendList from "@/components/friendList/index.vue"
import SearchFriendS from "@/components/searchFriends/index.vue"
import Myinput from "@/common/myInput/index.vue"
import Icon from "@/common/icon/index.vue"
import { watch, ref, computed, reactive } from "vue";
import { useRoute,useRouter } from "vue-router"
import { searchUser } from "@/api/user.js"

let Route = useRoute()
let Router = useRouter()
function goNewFriend(){
    Router.push({
        name:'newfriend'
    })
}
let id = ref(false)
console.log(Route);
watch(Route, () => {
    if (Route.params.id) {
        id.value = true
    } else {
        id.value = false
    }
}, {
    immediate: true
})
let isSearch = ref(true)
let searchText = ref("")
let searchPlaceholder = computed(() => {
    return isSearch.value ? '搜索' : '请输入账号'
})
let searchData = reactive({
    data: []
})
async function searchHandle() {
    let search = searchText.value.trim()
    if (!search) return;
    if (isSearch.value) {
        console.log('搜索好友');
    } else {
        let result = await searchUser(search)
        if (result.data) {
            searchData.data = result.data.map((item) => {
                item.message = item.account
                item.src = item.profile
                return item
            })
        }
    }
}

function changeSearch() {
    isSearch.value = !isSearch.value
    searchText.value = ''
    searchData.data = []
}

</script>
<style lang="less" scoped>
.friend-container {
    width: 100%;
    height: 100%;
    display: flex;

    .rightContainer {
        flex: 1;
        box-sizing: border-box;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .search {
        display: flex;
        // justify-content: space-between;
        flex-direction: column;
        width: 200px;
        overflow: hidden;

        .searchTitle {
            display: flex;
            width: 100%;
            overflow: hidden;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            border-bottom: 2px solid #e7e5e5;

            .input {
                flex: 1;
                overflow: hidden;
                margin-left: 5px;

                :deep(.myInput-container) {
                    margin: 0;
                }
            }

            .add {
                cursor: pointer;
                width: 30px;
                min-width: 30px;
                font-size: 1.3rem;
            }
        }

        .newFriend {
            height: 40px;
            align-items: center;
            display: flex;
            border-bottom: 1px solid red;
            cursor: pointer;
            &.active{
                background-color: rgb(222, 222, 222);
            }
            :deep(.icon-container) {
                width: 40px;
            }
        }

        .searchContent {
            flex: 1;
            overflow: hidden;
        }
    }
}
</style>
