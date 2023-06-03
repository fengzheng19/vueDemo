<template>
  <div class="allBox">
    <input type="checkbox" @click="selectAll" :checked="flag" />
    已完成：<span>{{ select }}</span> / 全部：<span>{{ allItem.length }}</span>
    <button @click="subTask">提交已完成任务</button>
  </div>
</template>
<script>
export default {
  name: "UserFooter",
  data() {
    return {
      allItem: "",
      select: "",
      flag: false,
    };
  },
  methods: {
    selectAll() {
      this.allItem.forEach((el) => {
        if (el.done === false) {
          el.done = true;
        } else if (this.select === this.allItem.length) {
          el.done = false;
        }
      });
    },
    subTask() {
      console.log(this.allItem.filter(item=>!item.done ))
      this.$bus.$emit('subTask');
    },
  },
  watch: {
    allItem: {
      deep: true,
      handler() {
        this.select = this.allItem.reduce((pre, curr) => {
          return pre + (curr.done ? 1 : 0);
        }, 0);
        if (this.select === this.allItem.length && this.select != 0) {
          this.flag = true;
        } else {
          this.flag = false;
        }
      },
    },
  },
  beforeMount() {
    this.$bus.$on("allItem", (data) => {
      this.allItem = data;
    });
  },

  beforeDestroy() {
    this.$bus.$off("allItem");
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