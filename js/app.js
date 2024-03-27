const { createApp } = Vue

createApp({
  data() {
    return {
      inputValue: "",
      todos: [
        {
          text: 'Comprare il pane',
          done: false
        },
        {
          text: 'Comprare il sapone',
          done: true
        },
        {
          text: 'Comprare il prosciutto',
          done: false
        },
        {
          text: 'Comprare l\'arrosto',
          done: false
        }
      ]
    }
  },
  methods: {
    deleteTodo(index){
      this.todos.splice(index, 1)
    },
    addTodo(){
      this.todos.push({
        text: this.inputValue,
        done: false,
      });
      this.inputValue = "";
    },
    todoThrough(index){
      if(this.todos[index].done === true){
        this.todos[index].done = false
      }
      else{
        this.todos[index].done = true
      }
    }
  }
}).mount('#app')

