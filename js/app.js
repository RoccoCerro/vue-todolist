const { createApp } = Vue

createApp({
  data() {
    return {
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
    }
  }
}).mount('#app')