<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <nuxt-link class="navbar-brand" to="/" tag="a">Navbar</nuxt-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <nuxt-link class="nav-link" to="/">Home</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="test1">test1</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="MyTodo">my todo</nuxt-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          子页面
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <nuxt-link class="dropdown-item" to="/MyTodo">my todo</nuxt-link>
          <nuxt-link class="dropdown-item" to="/aims">项目试验目标</nuxt-link>
          <div class="dropdown-divider"></div>
          <nuxt-link class="dropdown-item" to="/bill">账单号码列表</nuxt-link>
          <nuxt-link class="dropdown-item" to="/bill/15620001781">15620001781账单</nuxt-link>
          <nuxt-link class="dropdown-item" to="/bill/15620009233">15620009233账单</nuxt-link>
          <div class="dropdown-divider"></div>
          <nuxt-link class="dropdown-item" to="/bulma-page">bulma</nuxt-link>
          <nuxt-link class="dropdown-item" to="/bulma">bulma blog</nuxt-link>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</template>

<script>
export default {};
</script>
