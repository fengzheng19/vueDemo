<template>
  <div class="user-list">
    <ul>
      <li v-for="item in userList" :key="item.id">
        <a :href="item.html_url"><img :src="item.avatar_url" /></a>
        <p>{{ item.login }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "userList",
  data() {
    return {
      userList: [],
    };
  },
  mounted() {
    this.$bus.$on("showUsers", (text) => {
      axios({
        url: "https://api.github.com/search/users",
        params: {
          q: text,
        },
      })
        .then(({ data: { items } }) => {
          this.userList = items;
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
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