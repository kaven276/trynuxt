const list = [
  '模拟用户账单服务',
  '静态发布网站，到github pages等等',
  '练习bootstrap4',
  '试验服务端 vuex - ok',
  'asyncData - ok',
  'fetch',
  '不同的页面使用不同的css样式库 - ok',
];

export const state = () => ({
  list: list.map(item => ({ text: item, done: item.substr(-2) === 'ok' })),
});

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false,
    });
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1);
  },
  toggle(state, todo) {
    todo.done = !todo.done;
  },
};
