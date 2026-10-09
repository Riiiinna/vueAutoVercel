<script setup>
import {ref, watch, onMounted} from 'vue'
import TodoItem from '../components/TodoItem.vue'
import {useTodoStore} from "@/stores/todo.js";
const store = useTodoStore()

// const todos = ref([])
const inputEl = ref(null)

function handleAdd(){
  const text = inputEl.value.innerText.trim()
  if(!text) return
  store.addTodo(text)
  inputEl.value.innerText = ''
}

// watch(todos, ()=> {
//   localStorage.setItem('todos', JSON.stringify(todos.value))
// }, {deep: true})

onMounted(()=>{
  // const saved = localStorage.getItem('todos');
  // if(saved) todos.value = JSON.parse(saved)
  store.init()
})
</script>

<template>
  <div class="work-list">
    <TodoItem
      v-for = 'todo in store.todos'
      :key="todo.id"
      :todo="todo"
      @toggle="store.toggleFinish"
      @remove="store.removeTodo"
    />
  </div>

  <div class="write-bar">
    <button class="confirm-btn" @click="handleAdd">confirm</button>
    <div class="script-bar" contenteditable="true" ref="inputEl"></div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

* {
  box-sizing: border-box;
}

body {
  background-color: #eafbff;
  background-image: linear-gradient(
    to bottom,
    #eafbff 0%,
    #5290f9 100%
  );
  font-family: 'Muli', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100vh;
  margin: 0;
  padding: 5%;
}

.work-list {
  display: flex;
  height: 80vh;
  width: 100%;
  gap: 10px;
  flex-direction: column;
}
.work-unit {
  position: relative;
  display: flex;
  height: 10%;
  width: 100%;
  flex-direction: row;
  gap: 10px;
  justify-content: space-around;
}
.work-text {
  display: flex;
  position: relative;
  border: 2px solid black;
  background: white;
  width: 94%;
}

.complete-btn {
  position: relative;
  display: flex;
  width: 3%;
}
.del-btn {
  position: relative;
  display: flex;
  width: 3%;
}

.write-bar {
  display: flex;
  height: 10vh;
  width: 70%;
  /* border: 3px solid cornsilk; */
  gap: 10px;
}
.script-bar {
  display: flex;
  position: relative;
  height: 100%;
  width: 97%;
  border: 3px solid #364bc457;
  background: #f0f8ff82;
}
</style>





































