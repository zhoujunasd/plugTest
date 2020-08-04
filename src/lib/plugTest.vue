<template>
  <div>
    <input type="text" v-model="vshareText" />
    <div>你输入的是：{{ vshareText }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vshareText: ""
    };
  }
};
</script>
