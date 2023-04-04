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

    export default {
        name: "ItemCard",
    props: {
        name: String,
        cost: Number,
        img: String,
    },
    methods: {
      AddCart(item){
     CartDiv.cartArray.push({
     name: item.name,
     cost: item.cost,
     img: item.img
     });
     CartDiv.totalcost += item.cost;
     console.log(item.name)
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