<template>
  <main>
    <TheWelcome/>
  </main>

  <div class="home">
    <h1>{{ student }}</h1>
  </div>

</template>

<script>

export default{
name: "Home",
components: {},
data(){
  return {
  student: "Harry",
  graduated: true,
  };
},
};

</script>
<style>
h1{
  color:aqua
}
</style>


<!--shipping html file to load javascript so html and javacript are done with javascript-->
<div id="app"></div>
<!--all  javascript is injected into div-->
<!--app.view is where we add all of our routes like home and view-->
<!--script section is where we name components, declare variables, put functions, name data that will be updated or called in html
we can also do css in styles
you can make a new page in route in app.vue
router view is the page you are currently on
the contents of router view are whatever page you are currently selecting
scoped syling prevents the styling of a folder or app moving to other components
{{student}} takes student from the array and uses it as an h1
script is where js goes
template is where html goes-->