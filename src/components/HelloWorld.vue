<template>
  <div class="hello">
    <div class="todoList">
      <input
        type="text"
        placeholder="输入任务名称 按回车添加"
        class="addListInput"
        @keydown="addList"/>
      <ul>
        <li v-for="val in oldList" :key="val.id" @mouseenter.self="mouse" @mouseleave="leave">
          <input type="checkbox" :value="val" v-model="todoList"  /><div>{{ val.item }}</div>
          <button @click="del(val.id,$event)">删除</button>
        </li>
      </ul>
      <h3 v-if="oldList.length===0">请添加任务吧！</h3>
      <div class="allBox">
        <input type="checkbox" @click="allAdd" :checked="flag"/>
        已完成：<span>{{ this.todoList.length }}</span> / 全部：<span>{{this.oldList.length }}</span>
        <button disabled>提交</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      todoList: [],
      oldList: [{id:1,item:"吃饭"}, {id:2,item:"睡觉"}, {id:3,item:"打游戏"}],
      flag: "",
    };
  },
  methods: {
    
    addList(e) {
      if (e.code === "Enter" && e.target.value !== "") {
        this.oldList.push({id:(this.oldList.length==0? 1:this.oldList[this.oldList.length-1].id+1),item:e.target.value});
        e.target.value = "";
        this.flag=false
      }

    },
    mouse(e) {
     e.target.children[2].style.display = "inline-block";
    },
    leave(e){
      e.target.children[2].style.display = "none";
    },
    allAdd(){
      if(this.todoList.length !== this.oldList.length){
        this.todoList = this.oldList;
      }else{
        this.todoList=[];
      }
    },
    del(id){

     let delIndex= this.oldList.findIndex((e)=>{
        return e.id==id
      })
      this.oldList.splice(delIndex,1);
      if(this.todoList
      .length == this.oldList.length  && this.oldList.length !==0){
        this.flag=true
      }
      let delIndex_2= this.todoList.findIndex((e)=>{
        return e.id==id
      });
      
      if(delIndex_2==-1){
        return 
      }else{
        this.todoList.splice(delIndex_2,1)
      }
    }
  },
  watch:{
    todoList(e){
      if(e.length == this.oldList.length  && this.oldList.length !==0){
        this.flag=true
      }else{
        this.flag=false
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  list-style: none;
}
.todoList {
  border: 1px solid #000;
  width: 500px;
  border-radius: 10px;
}
ul {
  font-size: 14px;
  width: 90%;
}
ul > li {
  width: 100%;
  border-bottom:1px solid gray;
  margin: 10px  0 5px -20px;

}
ul > li > button {
  display: none;
  width: 12%;
  line-height: 18px;
  float: right;
  font-size: 12px;
  background-color: rgb(255, 1, 1);
  color: white;
  border: none;
  
}
ul > li > button:hover{
  background-color: rgb(189, 0, 0);
}
ul > li>div{
  display: inline-block;
  margin-left: 5px;
  width: 80%;
  word-break: break-all;
  word-wrap: break-word;
}
ul > li >input{

  margin: auto;
  vertical-align: middle;
}
.addListInput {
  display: block;
  outline-color: skyblue;
  border-color: gray;
  width: 90%;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px auto;
}
.allBox {

  display: flow-root;
  width: 90%;
  margin: auto;
}
.allBox > button {
  float: right;
  border: none;
  width: 60px;
  background-color: rgb(227, 82, 82);
  border-radius: 5px;
  color: white;
  font-size: 12px;
  line-height: 20px;
}
</style>
