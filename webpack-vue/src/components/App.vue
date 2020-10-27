<template>
  <div>
    <p>{{ message }}</p>
    <input v-model="message">
    <button v-on:click="reverseMessage">reverse</button>
    <span v-if="seen">Now you see me</span>
    <ul>
      <li v-for="(todo, key) in todos" :key="key">
        {{ todo.text }}
      </li>
    </ul>
    <TodoItem></TodoItem>
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
        {text: "掃除"},
        {text: "洗濯"},
        {text: "食事"}
      ]
    };
  },
  components: {
    TodoItem
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split("").reverse().join("");
    }
  }
};
</script>
