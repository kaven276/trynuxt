<template>
  <div class="card">
    <div class="btn btn-primary">账单推送</div>
    <div>全部号码</div>
    <ul id="wrapper" class="list-group">
      <li class="list-group-item" v-for="number in $store.state.serialNumbers" :key="number">
        <nuxt-link :to="`/bill/${number}`">{{number}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 1,
      b: 2,
    };
  },
  methods: {
    m1() {
      this.a = this.b;
    },
  },
  fetch({ store }) {
    store.state.serialNumbers = ['15620001781', '15620009233'];
  },
};
</script>

<style>
.card {
  color: red;
  white-space: nowrap;
}
</style>
