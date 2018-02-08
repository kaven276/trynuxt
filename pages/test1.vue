<template>
  <div class="card">
    <div class="btn btn-primary">
      <i class="fa fa-camera-retro fa-lg"></i> 测试
    </div>
    <img src="~/static/骑公鸡.jpeg" height="200" />
  </div>
</template>

<script>
export default {
  title: '骑公鸡',
  validate_({ params }) {
    return /^\d+$/.test(params.id);
  },
};
</script>
