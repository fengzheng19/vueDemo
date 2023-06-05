<template>
  <div class="user-list">
    <ul>
      <!-- <button @click="showMsge">show</button> -->
      {{num}}-{{bigNum}}
      <li v-for="item in userList" :key="item.id">
        <a :href="item.html_url"><img :src="item.avatar_url" /></a>
        <p>{{ item.login }}</p>
      </li>
    </ul>
  </div>
</template>
<script>

import {  mapActions, mapGetters, mapState } from 'vuex';
export default {
  name: "userList",
  data() {
    return {
    };
  },
  computed:{
      ...mapState('userList',['userList','num']),
      ...mapGetters('userList',['bigNum'])
  },
  methods:{
    ...mapActions('userList',{showMsg:'show'}),
    showMsge(){
      let a = 0;
      this.showMsg(a);
    }
  },
  mounted() {
      
    this.$store.commit('userList/GETUSERS')
  },
};
</script>
<style scoped>
.user-list {
  border: 1px solid #000;
}
.user-list > ul {
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-flow: row wrap;
  align-items: center;
}
.user-list > ul > li {
  border: 1px solid #000;
  text-align: center;
  width: 150px;
  margin: 5px;
}
.user-list > ul > li img {
  width: 80%;
  height: 90%;
}
</style>