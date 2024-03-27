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
      if(this.inputValue !== ""){
        const ValueUpCase = this.inputValue[0].toUpperCase() + this.inputValue.slice(1) 
        this.todos.push({
          text: ValueUpCase,
          done: false,
        });
        this.inputValue = "";
      }
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

