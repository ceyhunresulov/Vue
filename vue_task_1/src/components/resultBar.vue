<template>
  <span class="count-todo">{{ itemCount }} todo</span>
</template>

<script>
export default {
  props: ["itemCount"],
};
</script>
