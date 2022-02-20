<template>
<div @dblclick="$emit('toggle-reminder' , task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>{{ task.text }}
        <i @click="$emit( 'delete-task',task.id)" class="fas fa-times"></i>
    </h3>
<p>{{ task.day }}</p>
</div>
    
</template>


<script>
export default {
    name: "MyTask",
    props: {
        task: Object,
    },
}
</script>

<style scoped>
.fas {
    color: red;
    padding-left: 40px;
}
.task {
    background: #f4f4f4;
    display:inline-block;
    margin: 5px;
    padding: 10px 20px;
    width: 300px;
   
    cursor: pointer;
}
.task.reminder {
    border-left: 5px solid green;
}
.task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>