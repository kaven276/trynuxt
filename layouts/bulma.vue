<template>
  <div>
    <!-- navigation -->
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <nuxt-link to="/" class="nav-item">
            Awesome JS SSR Blog!
          </nuxt-link>
          <nuxt-link active-class="is-active" to="/bulma" class="nav-item is-tab" exact>Home</nuxt-link>
          <nuxt-link active-class="is-active" to="/bulma/about" class="nav-item is-tab" exact>About</nuxt-link>
        </div>
      </div>
    </nav>
    <!-- /navigation -->

    <!-- displays the page component -->
    <nuxt/>

  </div>
</template>

<script>
export default {
  head: {
    title: 'bulma style',
    link: [{ rel: 'stylesheet', href: 'https://cdn.bootcss.com/bulma/0.6.2/css/bulma.min.css' }],
  },
};
</script>
