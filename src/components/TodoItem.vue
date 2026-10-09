<script setup>
const props = defineProps({
  todo: Object
})

const emit = defineEmits(['toggle', 'remove'])
</script>

<template>
  <div class="work-unit">
    <button class="complete-btn" @click="emit('toggle', props.todo)">
      {{props.todo.isFinished ? 'DB': 'COMP'}}
    </button>
    <div
      class="work-text"
       :style = "{ color: props.todo.isFinished ? 'gray' : 'black' }"
    >
      {{props.todo.text}}
    </div>
    <button class="del-btn" @click="emit('remove', props.todo.id)">del</button>
  </div>
</template>

<style scoped>

</style>
