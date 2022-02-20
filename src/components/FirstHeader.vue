<template>
    <header>
        <h1>{{title}}</h1>
        <my-button @btn-click="$emit('toggle-add-task')" 
        :color="showAddtask ? 'red' : 'green' "
        :text="showAddtask ? 'close' : 'Add task' "
       />
    </header>
        
</template>

<script>
import MyButton from "./MyButtons.vue"


export default {
    name: "FirstHeader",
    props: {
        title: String,
        showAddtask: Boolean,
    },
    components: {
        MyButton,
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}


</style>


