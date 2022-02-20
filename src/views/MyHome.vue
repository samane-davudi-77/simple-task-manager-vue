<template>
    <div v-show="showAddtask">
        <add-task @add-task="addtask" />
      </div>
      <my-tasks
        @toggle-reminder="togglereminder"
        @delete-task="deletetask"
        :tasks="tasks"
      />
</template>

<script>
import MyTasks from "../components/MyTasks.vue";
import AddTask from "../components/AddTask.vue";

export default {
    name: 'MyHome',
    props: {
        showAddtask: Boolean,
    },
    components: {
        MyTasks,
        AddTask
    },
    data() {
        return {
            tasks: []
        }
        
    },
    methods: {
         async addtask(task) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },

    async deletetask(id) {
      if (confirm("Are you sure ?")) {
        const res = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
        });
        res.status == 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("مشگلی در حذف به وجود آمده است");
      }
    },
    togglereminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    },
    async fetchTasks() {
      const res = await fetch("api/tasks");

      const data = await res.json();

      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);

      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
    
}
</script>