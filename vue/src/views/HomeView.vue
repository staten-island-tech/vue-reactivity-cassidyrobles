<template>
  <main>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Vast+Shadow&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"> 
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
<h1>ABBY NFT STORE!!!</h1>
    <div class="theCartStuff">cart</div>
     <section class="cartBox">
      <TheCart class="cartTheCard" v-for="item in cartStuff.cartArray" :key="item.name" :name="item.name"  :img="item.img" :cost="item.cost"/>
    </section>
     <h3 class="costText">${{ cartStuff.totalcost }}</h3>
  <section class="box">
    <ItemCard class="theCard" v-for="AbigailNFT in AbigailNFTs" :key="AbigailNFT.name" :name="AbigailNFT.name" :cost="AbigailNFT.cost" :img="AbigailNFT.img"/>
  </section>

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
 name: "Party Abby",
 cost: 200,
 img: "img/fafe93dc-ded1-45c0-a9c2-2a149b8a2376.jpg"
},
{
 name: "Nature Abby",
 cost: 150,
 img: "img/96591d21-8690-4f6e-857b-c0796c0a48f4.jpg"
},
{
 name: "Tired Abby",
 cost: 50,
 img: "img/IMG_7614 (1).JPG"
},
{
 name: "Default Abby",
 cost: 100,
 img: "img/IMG_8304.JPG"
},{
 name: "English Abby",
 cost: 125,
 img: "img/IMG_8989.PNG"
},
{
 name: "CompSci Abby",
 cost: 300,
 img: "img/IMG_6711.JPG"
},{
 name: "Defeated Abby",
 cost: 10,
 img: "img/IMG_8990.PNG"
},
{
 name: "Cass & Abby",
 cost: 400,
 img: "img/IMG_8971.JPG"
},
{
 name: "BDAY Abby",
 cost: 400,
 img: "img/IMG_7667.JPG"
},
{
 name: "Laughing Abby",
 cost: 300,
 img: "img/IMG_8947.JPG"
},
{
 name: "Shocked Abby",
 cost: 150,
 img: "img/IMG_8476.JPG"
},
{
 name: "Super Abby",
 cost: 700,
 img: "img/IMG_8991.PNG"
},
{
 name: "Judge Abby",
 cost: 200,
 img: "img/IMG_8517.JPG"
},


]
 }
}
};

</script>

<style>


h1{
  font-family: 'Vast Shadow', cursive;
  font-size: 80px; 
  text-align: center;
  color:hotpink;
}
.theCartStuff{
  font-family: 'Permanent Marker', cursive;
  text-align: center;
  color:pink;
  font-size: 50px;
}
.costText{
  font-family: 'Permanent Marker', cursive;
  text-align: center;
  color:pink;
  font-size: 70px;
}
.cartTheCard{
  font-family: 'Pacifico', cursive;
  color:black;
  background-image: url("https://i.pinimg.com/474x/fd/45/57/fd45571f09fdb5d78ece3f56f543758f.jpg");
  background-size: cover;
}

.theCard{
  font-family: 'Pacifico', cursive;
  color:black;
  background-image: url("https://i.pinimg.com/564x/c1/db/b5/c1dbb5ee9d11e855f0ccffe759381656.jpg");
  background-size: cover;
}
body{
background-color: white;
  
}
</style>

