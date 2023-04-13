<template>
  <section class="box">
    <div class="ItemCard">
 <h2 class="name">{{ name }}</h2>
 <img class="img" :src="img"/>
 <p>${{ cost }}</p>
 <button @click="AddCart">add to cart</button>
    </div>
 
  </section>
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
 .ItemCard{
color:purple;
display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding:0px;
  border-radius: 20px;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 20px 20px 10px rgba(0, 0, 0, 0.5);
  width: 33%;
  height:350px;
 }
 
 </style>