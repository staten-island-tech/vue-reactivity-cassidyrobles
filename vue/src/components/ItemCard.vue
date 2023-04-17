<template>
  <section class="box">
    <div class="theCard">
 <h2 class="cardname">{{ name }}</h2>
 <img class="imag" :src="img"/>
 <p class="ParagraphText">${{ cost }}</p>
 <button class="addToCartButton" @click="AddCart">add to cart</button>
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

 .imag{
  width:150px;
  border-radius: 20px;
  border: 5px solid white;
 }

 .box{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin:100px;
  align-items: center;
 
  
 }
 .theCard{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding:0px;
  border-radius: 20px;
  box-sizing: border-box;
  text-align: center;
  background-color:red;
  width: 30%;
  height:620px;
 }
 .addToCartButton{
  text-transform: uppercase;
  font-size: 15px;
  border-radius: 22px;
  position: relative;

 }
.cardname{
  font-size: 30px;
}
.ParagraphText{
  font-size: 30px;
}
 </style>