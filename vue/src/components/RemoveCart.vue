
<template>
    <button><slot></slot></button>
    </template>
    
    <script>
      export default {
           name:"RemoveButton",
           data(){
            return {};
           },
           props: {
        name: String,
        cost: Number,
    },
    
       };
    </script>
    
    <style>
    button{
       background-color: red;
    }
    </style>