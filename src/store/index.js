import Vue from 'vue';
import Vuex from 'vuex';
import { nanoid } from "nanoid";
import axios from "axios";


Vue.use(Vuex);

const todoList = {
    namespaced: true,
    actions: {
        add(context, val) {
            if (val.context === '') {
                alert('输入不能为空')
                return
            }
            context.commit('ADD', val)
        }
    },
    mutations: {
        ADD(state, val) {
            state.todoList.unshift(val)
        },
        SUBTASK(state) {
            state.todoList = state.todoList.filter(item => !item.done)
        },
       
    },
    state: {
        todoList: [
            { id: nanoid(), context: "xxxx", done: false },
            { id: nanoid(), context: "xxxxx", done: false },
            { id: nanoid(), context: "xxxxxx", done: true },
        ],
    }
}
const userList = {
    namespaced: true,
    actions: {
        searchUser(context,val){
            if(val ===''){
                alert('输入不能为空')
                return
            }
            context.commit('GETUSERS',val)
        },
        show(context){
            context.commit('SHOW')
        }
    },
    mutations: {
       async GETUSERS(state,val) {
           await axios({
                url: "https://api.github.com/search/users",
                params: {
                    q: val ? val:parseInt(Math.random() * 10)
                },
            })
                .then(({ data: { items } }) => {
                    state.userList = items;
                })
                .catch((err) => {
                    console.log(err.message);
                });
        },
        SHOW(state,val){
            console.log(state.userList,val)
        }
        
    },
    state: {
        userList: [],
        num:0
    },
    getters:{
        bigNum(state){

            return state.num
        }
    }
}

export default new Vuex.Store({
    modules: {
        todoList,
        userList
    }

})