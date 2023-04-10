<template>
 
 <h2 class="name">{{ name }}</h2>
 <img class="img" :src="img"/>

 </template>
 
 
 <script>

   
export default {
        name: "TheCart",
    props: {
        name: String,
        cost: Number,
        img: String,
    },
    methods: {
    
     
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