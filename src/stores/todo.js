import {defineStore} from 'pinia'
import {ref, watch} from 'vue'

export const useTodoStore = defineStore('todo', ()=> {
  const todos = ref([])
  function addTodo(text) {
    todos.value.push({
      id: String(Date.now()),
      text,
      isFinished: false,
    })
  }

  function removeTodo(id) {
    todos.value = todos.value.filter(t=>t.id!==id)
  }

  function toggleFinish(todo) {
    todo.isFinished = !todo.isFinished
  }

  function init(){
    const saved = localStorage.getItem('todos')
    if(saved) todos.value = JSON.parse(saved)
  }

  watch(todos, ()=>{
    localStorage.setItem('todos', JSON.stringify(todos.value))
  }, {deep: true})


  return {todos, addTodo, removeTodo, toggleFinish, init}

})
