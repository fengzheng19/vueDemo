<template>
  <div class="allBox">
    <input type="checkbox" @click="selectAll" :checked="select === todoList.length && select!=0 ? true:false" />
    已完成：<span>{{ select }}</span> / 全部：<span>{{ todoList.length }}</span>
    <button @click="subTask">提交已完成任务</button>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "UserFooter",
  data() {
    return {
    };
  },
  computed:{
      ...mapState('todoList',['todoList']),
      select(){
        return this.todoList.reduce((pre, curr) => {
          return pre + (curr.done ? 1 : 0);
        }, 0);
      }
  },
  methods: {
    selectAll() {
      this.todoList.forEach((el) => {
        if (el.done === false) {
          this.todoList.forEach(el => {
            el.done = true;
          })
        } else{
          this.todoList.forEach(el => {
            el.done = false;
          })
        }
      });
    },
    subTask() { 
        this.$store.commit('todoList/SUBTASK')
    },
  },
};
</script>
<style scoped>
.allBox {
  display: flow-root;
  width: 90%;
  margin: auto;
  padding: 10px;
}
.allBox > button {
  float: right;
  border: 1px solid rgb(173, 64, 5);
  width: 100px;
  background-color: rgb(227, 82, 82);
  border-radius: 5px;
  color: white;
  font-size: 12px;
  line-height: 20px;
}
.allBox > button:hover {
  background-color: rgb(196, 74, 8);
}
</style>