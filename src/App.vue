<template>
  <header id="header" class="container">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>
  </header>

  <main class="container">
    <router-view></router-view>
  </main>

  <footer class="container">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quasi totam praesentium labore veritatis voluptatem fuga suscipit fugit, eligendi nulla exercitationem officiis, voluptates, necessitatibus iste. Facere laudantium asperiores nam vel.
  </footer>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  #header {
    text-align: center;
  }

  #header > a {
    font-size: 20px;
  }

  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 16px;
  }

  #service1 {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    margin: 24px 0;
  }

  #service1 div {
    border: 1px solid #ccc;
    border-radius: 16px;
    padding: 16px 24px;
    text-align: justify;
    font-size: 20px;
  }

  #service2 {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    margin: 24px 0;
  }

  #service2 div {
    border: 1px solid #ccc;
    border-radius: 16px;
    padding: 16px 24px;
    text-align: justify;
    font-size: 20px;
  }

  .heading {
    font-size: 32px;
    text-align: center;
    color: #f20;
  }
</style>