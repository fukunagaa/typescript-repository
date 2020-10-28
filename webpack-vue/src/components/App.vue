<template>
  <div>
    <div>
      <p>{{ message }}</p>
      <p>{{ reversedMessage }}</p>
      <input v-model="message">
      <button @click="reverseMessage">reverse</button>
    </div>
    <div>
      <span v-if="seen">Now you see me</span>
      <button v-on:click="isSeen" v-bind:disabled="isButtonDisable">is seen</button>
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
      isButtonDisable: true,
      todos: [
        {id:1, text: "掃除"},
        {id:2, text: "洗濯"},
        {id:3, text: "食事"}
      ]
    };
  },
  computed: {
    reversedMessage: function() {
      return this.message.split("").reverse().join("");
    }
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
