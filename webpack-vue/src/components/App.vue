<template>
  <div>
    <div>
      <p>{{ message }}</p>
      <input v-model="message">
      <button v-on:click="reverseMessage">reverse</button>
    </div>
    <div>
      <span v-if="seen">Now you see me</span>
      <button v-on:click="isSeen">is seen</button>
    </div>
    <ul>
      <TodoItem v-for="todo in todos" v-bind:todo="todo" v-bind:key="todo.id"></TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  data: function() {
    return { 
      message: "success",
      seen: false,
      todos: [
        {id:1, text: "掃除"},
        {id:2, text: "洗濯"},
        {id:3, text: "食事"}
      ]
    };
  },
  components: {
    TodoItem
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split("").reverse().join("");
    },
    isSeen: function() {
      this.seen = !this.seen;
    }
  }
};
</script>
