<template>
 
 <h2 class="name">{{ name }}</h2>
 <img class="img" :src="img"/>
 <button @click="removeCart">remove</button>

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
 .ItemCard{
    text-align: center;
    width:30%;
    background-color: red;
 }
 .img{
   width:100px;
 }
 </style>