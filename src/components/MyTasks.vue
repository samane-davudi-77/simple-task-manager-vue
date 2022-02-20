<template>
    <div :key="task.id" v-for="task in tasks">
        <my-task @toggle-reminder="$emit('toggle-reminder' , task.id)" @delete-task="$emit('delete-task', task.id)" :task="task" />
  </div> 
</template>

<script>
import MyTask from "./MyTask.vue"


export default {
    name: "MyTasks",
    props: {
        tasks: Array,
    },
    components: {
        MyTask
    },
    emits: ['delete-task', 'toggle-reminder'],
}
</script>