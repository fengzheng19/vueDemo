<template>
  <div class="search-box">
    <div>
      <h2>搜索GitHub用户</h2>
      <input
        type="text"
        placeholder="搜素用户"
        v-model="text"
        
      />
      <button @click="passText">搜索</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchUser",
  data() {
    return {
      text: "",
      timer: null,
    };
  },
  methods: {
    // 节流器
    passText() {
      return (() => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.$bus.$emit("showUsers", this.text);
          console.log(1111)
        }, 700);
      })();
    },
  },
};
</script>
<style scoped>
.search-box {
  background-color: #ccc;
  width: 100%;
  padding: 10px;
}
.search-box > div {
  width: 70%;
  margin: 0 auto;
}
</style>