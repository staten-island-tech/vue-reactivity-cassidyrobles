<template>
  <main>
  
    <h1>ABBY NFT STORE!!!</h1>
  
    <ItemCard v-for="AbigailNFT in AbigailNFTs" :key="AbigailNFT.name" :name="AbigailNFT.name" :cost="AbigailNFT.cost" :img="AbigailNFT.img"/>
    <div v-for="(item, index) in cartArray" :key="index" id="CartDiv"></div>

</main>
</template>

<script>

import ItemCard from "../components/ItemCard.vue";

export default{
name: "Menu",
components: {
  ItemCard,
 item,
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
},
data(){
 return{
  cartArray: [
    { 
    },
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

