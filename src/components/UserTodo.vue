<template>
  <li class="item">
    <label>
      <input
      @click="selectItem"
        type="checkbox"
        :checked="item.done"
      />
      <div @click.prevent="selectItem">{{ item.context }}</div>
      <button @click.self="del(item.id)">删除</button>
    </label>
  </li>
</template>
<script>
export default {
  name: "UserTodo",
  props: ["item", "click", "getId"],
  data() {
    return {};
  },
  methods: {
    selectItem() {
      this.$emit("click");
    },
    del(index) {
      this.$emit("getId", index);
    },
  },
};
</script>
<style scoped>
.item {
  width: 100%;
  border-bottom: 1px solid gray;
  margin: 10px 0 5px -20px;
  padding: 5px;
}
.item button {
  display: none;
  width: 12%;
  line-height: 18px;
  float: right;
  font-size: 12px;
  background-color: rgb(255, 1, 1);
  border-radius: 7px;
  color: white;
  border: none;
}
.item:hover button {
  display: block;
  border: 1px solid rgb(128, 4, 4);
}
.item button:hover {
  background-color: rgb(189, 0, 0);
}
.item div {
  display: inline-block;
  margin-left: 5px;
  width: 80%;
  word-break: break-all;
  word-wrap: break-word;
  cursor: pointer;
}
.item input {
  margin: auto;
  vertical-align: middle;
}
</style>