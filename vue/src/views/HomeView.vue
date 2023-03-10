<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>
<style>
h1{
  color:aqua
}
</style>
<template>
  <main>
    <TheWelcome />
  </main>
  <div id="app">
    <h1>hello</h1>
  </div>
</template>
<!--shipping html file to load javascript so html and javacript are done with javascript-->
<div id="app"></div>
<!--all  javascript is injected into div-->
<!--app.view is where we add all of our routes like home and view-->
<!--script section is where we name components, declare variables, put functions, name data that will be updated or called in html
we can also do css in styles
we use npm run serve instead of dev now-->