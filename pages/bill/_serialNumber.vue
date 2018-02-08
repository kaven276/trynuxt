<template>
  <div class="card">
    <div class="card-header">模拟账单推送</div>
    <div class="btn btn-primary">号码：{{serialNumber}}</div>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.serialNumber);
  },
  async asyncData(context) {
    return new Promise((resolve, reject) => {
      // 在这里模拟异步从数据库获取该号码的账户信息
      setTimeout(() => {
        if (Math.random() < 1) {
          resolve({ serialNumber: context.params.serialNumber });
        } else {
          reject({ statusCode: 404, message: '号码不存在' });
          // context.error({ statusCode: 404, message: '号码不存在' });
        }
      }, 0);
    });
  },
};
</script>
