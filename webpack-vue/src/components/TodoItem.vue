<template>
  <div>
    <li>
      {{ todo.id + ": " + todo.text }}
    </li>
  </div>
</template>

<script>
export default {
  data: function() {
    return { 
    };
  },
  props: ["todo"]
};
</script>
