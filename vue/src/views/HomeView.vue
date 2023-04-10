<template>
  <main>
  
    <h1>ABBY NFT STORE!!!</h1>
  
    <ItemCard v-for="AbigailNFT in AbigailNFTs" :key="AbigailNFT.name" :name="AbigailNFT.name" :cost="AbigailNFT.cost" :img="AbigailNFT.img"/>
    <TheCart v-for="item in cartStuff.cartArray" :key="item.name" :name="item.name"  :img="item.img"/>
    <h3>{{ cartStuff.totalcost }}</h3>
</main>
</template>

<script>
import {cartStuff} from "../stuff.js";
import ItemCard from "../components/ItemCard.vue";
import TheCart from "../components/TheCart.vue";
export default{
name: "Menu",
components: {
  ItemCard,
TheCart,
},
methods: {
  
},
data(){
 return{
  cartStuff,
  cartArray: [
  
  ],
AbigailNFTs: [ 
  {
 name: "party Abby",
 cost: 100,
 img: "img/fafe93dc-ded1-45c0-a9c2-2a149b8a2376.jpg"
},
{
 name: "Nature Abby",
 cost: 1000,
 img: "img/96591d21-8690-4f6e-857b-c0796c0a48f4.jpg"
},
{
 name: "Tired Abby",
 cost: 100,
 img: "img/IMG_7614 (1).JPG"
},
{
 name: "Default Abby",
 cost: 100,
 img: "img/IMG_8304.JPG"
},{
 name: "English Abby",
 cost: 100,
 img: "img/IMG_8989.PNG"
},
{
 name: "CompSci Abby",
 cost: 100,
 img: "img/IMG_6711.JPG"
},{
 name: "Defeated Abby",
 cost: 100,
 img: "img/IMG_8990.PNG"
},
{
 name: "Cass & Abby",
 cost: 100,
 img: "img/IMG_8971.JPG"
},
{
 name: "BDAY Abby",
 cost: 100,
 img: "img/IMG_7667.JPG"
},
{
 name: "Laughing Abby",
 cost: 100,
 img: "img/IMG_8947.JPG"
},
{
 name: "Shocked Abby",
 cost: 100,
 img: "img/IMG_8476.JPG"
},
{
 name: "Super Abby",
 cost: 100,
 img: "img/IMG_8991.PNG"
},
{
 name: "Judge Abby",
 cost: 100,
 img: "img/IMG_8517.JPG"
},


]
 }
}
};

</script>

<style>

</style>

