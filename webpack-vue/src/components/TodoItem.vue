<template>
  <div>
    <!-- propsされた値を表示 -->
    <li>
      {{ todo.id + ": " + todo.text }}
    </li>
  </div>
</template>

<script>
export default {
  props: ["todo"]
};
</script>
