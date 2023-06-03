<template>
    <input type="text" placeholder="输入任务名称 按回车添加"
      class="addListInput" @keydown.enter="add"/>
</template>
<script>
import { nanoid } from 'nanoid';
export default {
  name: "UserHeader",
  data(){
    return {

    }
  },
  methods:{
    add(e){
      if(e.target.value == '') return;
      const item = {id:nanoid(),context:e.target.value,done:false};
      this.$bus.$emit('addItem',item);
      e.target.value = '';
    }
  }
};
</script>
<style scoped>
.addListInput {
  display: block;

  border-color: gray;
  width: 90%;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px auto;
 
}
.addListInput:focus{
    outline-color: skyblue;
   box-shadow:0 0 5px  skyblue;
}
</style>