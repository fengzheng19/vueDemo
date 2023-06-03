<template>
  <div id="searchList-box">
    <search-user/>
    <user-list/>
  </div>
</template>
<script>
import SearchUser from "./SearchUser.vue";
import UserList from './UserList.vue';

export default {
    name:'GitUser',
    data(){
        return {

        }
    },
    components:{
       SearchUser,
       UserList
    }
}

</script>
<style scoped>
</style>
