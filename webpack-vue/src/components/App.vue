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
    <div>
      <input v-model="fullName">
      {{ fullName }}
    </div>
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
      ],
      firstName: "aa",
      lastName: "bb"
    };
  },
  // 算出プロパティはリアクティブな依存関係にもとづきキャッシュされる
  // messageに変更がない限り再計算は行わない
  computed: {
    reversedMessage: function() {
      return this.message.split("").reverse().join("");
    },
    fullName:{
      // getter 関数
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter 関数
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
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
