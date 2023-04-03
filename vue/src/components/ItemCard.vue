<template>
    <div class="ItemCard">
 <h2 class="name">{{ name }}</h2>
 <img class="img" :src="img"/>
 <p>${{ cost }}</p>
 <Button>add to cart</Button>
    </div>
 </template>
 
 
 <script>
 import Button from "../components/AddCart.vue"
    export default {
        name: "ItemCard",
    props: {
        name: String,
        cost: Number,
        img: String,
    },
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