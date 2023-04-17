<template>
 <section class="cartBox">
  <div class="cartTheCard">
 <h2 class="name">{{ name }}</h2>
 <img class="img" :src="img"/>
 <button class="removeFromCartBtn" @click="removeCart">remove</button>
</div>
</section>
 </template>
 
 
 <script>

import {cartStuff} from "../stuff.js";
export default {
        name: "TheCart",
    props: {
        name: String,
        cost: Number,
        img: String,
    },
    methods: {
    removeCart(){
    cartStuff.cartArray.splice(this.name, 1);
    (cartStuff.totalcost) -= (this.cost)
    }
     
   }
 
 };
 
 
 
 


 </script>
 
 
 <style>
body{
  align-items: center;
}
 .img{
   width:50px;
   border-radius:20px;
   border: 5px solid white;
 }

.cartBox{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin:100px;
  align-items: center;
  background-color: none;
 
}
.cartTheCard{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding:10px;
  border-radius: 20px;
  box-sizing: border-box;
  text-align: center;
 
  
  width: 23%;
  height:240px;
}
.name{
  margin:5px;
  padding:0px;
}
.removeFromCartBtn{
  text-transform: uppercase;
  font-size: 15px;
  border-radius: 20px;
  position: relative;
  margin:5px;
}

 </style>