<template>
    <div class="ItemCard">
 <h2 class="name">{{ name }}</h2>
 <img class="img" :src="img"/>
 <p>${{ cost }}</p>
 <button @click="AddCart">add to cart</button>
    </div>
    <div id="CartDiv"></div>
 </template>
 
 
 <script>
import {cartStuff} from "../stuff";
   
export default {
        name: "ItemCard",
    props: {
        name: String,
        cost: Number,
        img: String,
    },
    methods: {
      AddCart(){
     cartStuff.cartArray.push({
     name: this.name,
     cost: this.cost,
     img: this.img
     });
     cartStuff.totalcost += this.cost;
     console.log(cartStuff.totalcost)
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