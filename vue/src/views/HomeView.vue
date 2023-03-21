<template>
  <main>
    <TheWelcome/>
  </main>

  <div class="home">
    <h1 v-if ="graduated">{{ student }}</h1>
    <h1 v-else>they did not yet graduate</h1>
    <ul>
      <li v-for="animal in animals" :key="animal">{{ animal }}</li>
      <!--animals.forEach((animal)=>)-->
    </ul>
    <button v-on:click="authState" v-if="loggedIn">Log Out</button>
      <button v-on:click="authState" v-else>Login</button>
      <!--authState is the function-->
  </div>

</template>

<script>

export default{
name: "Home",
components: {},
data(){
  return {
  loggedIn: false,
  student: "Harry",
  graduated: false,
  animals: ["pig", "horse", "donkey", "cow", "duck",]
  };
},
methods: {
  authState: function(){
    if(this.loggedIn===false){
      this.loggedIn = true;
    } else{
      this.loggedIn = false;
    }
  }
  /*this says that if you aren't logged in then the log in button shows and if you are logged in the button won't show*/
}
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
template is where html goes
we can use v-if and v-else in an h1 for if else statements that log something onto the screen
<li v-for="animal in animals" :key="animal">{{ animal }}</li>
this code takes all animals from the animals part of the array and logs it as a list-->