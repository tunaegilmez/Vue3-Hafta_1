const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "Vue Bootcamp Hafta 1", completed: false },
        { id: 2, text: "Vue Bootcamp Hafta 2", completed: false },
        { id: 3, text: "Vue Bootcamp Hafta 3", completed: false },
        { id: 4, text: "Vue Bootcamp Hafta 4", completed: false },
        { id: 5, text: "Vue Bootcamp Hafta 5", completed: false },
      ],
    };
  },
  methods: {
    addTodo(event) {
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
        completed: false,
      });
      event.target.value = "";
    },
    removeTodo(todoItem) {
      this.todoList = this.todoList.filter((todo) => todo.id !== todoItem.id);
    },
  },
  computed: {
    completedItemCount() {
      return this.todoList.filter((todo) => todo.completed).length;
    },
    unCompletedItemCount() {
      return this.todoList.filter((todo) => !todo.completed).length;
    },
  },
}).mount("#app");
