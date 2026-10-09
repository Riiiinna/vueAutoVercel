<script setup>

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
    <RouterLink to="/todos">todos</RouterLink>
  </nav>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

* {
  box-sizing: border-box;
}

body {
  background-color: #eafbff;
  background-image: linear-gradient(
    to bottom,
    #eafbff 0%,
    #5290f9 100%
  );
  font-family: 'Muli', sans-serif;
  margin: 0;
  min-height: 100vh;
}

nav {
  display: flex;
  gap: 16px;
  padding: 16px;
}

nav a {
  color: #000;
  text-decoration: none;
  font-weight: bold;
}

nav a.router-link-active {
  color: #5290f9;
}
</style>





































