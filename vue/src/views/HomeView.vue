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
 img: "https://i.pinimg.com/474x/d0/c6/e0/d0c6e02753a585e4124a18479ef601af.jpg"
},
{
 name: "Nature Abby",
 cost: 150,
 img: "https://i.pinimg.com/474x/58/de/79/58de7919c9e9c482fdd0d47bbf789075.jpg"
},
{
 name: "Tired Abby",
 cost: 50,
 img: "https://i.pinimg.com/474x/38/e1/0f/38e10f1cf0027cab6ae2d6b91ee07415.jpg"
},
{
 name: "Default Abby",
 cost: 100,
 img: "https://i.pinimg.com/474x/eb/3e/c8/eb3ec8968ce3be4f538421b79ff361fe.jpg"
},{
 name: "English Abby",
 cost: 125,
 img: "https://i.pinimg.com/474x/f9/d0/f9/f9d0f9f79b2f38d365d7616bd3fdda7a.jpg"
},
{
 name: "CompSci Abby",
 cost: 300,
 img: "https://i.pinimg.com/474x/62/31/4d/62314db574568aab31d81d974936a725.jpg"
},{
 name: "Defeated Abby",
 cost: 10,
 img: "https://i.pinimg.com/474x/df/a4/51/dfa451aa7a4bacd799d75ae766111f1b.jpg"
},
{
 name: "Cass & Abby",
 cost: 400,
 img: "https://i.pinimg.com/474x/90/89/8e/90898e18c58b754bcf771a12875e19b2.jpg"
},
{
 name: "BDAY Abby",
 cost: 400,
 img: "https://i.pinimg.com/474x/c2/55/66/c2556604b9bbfa2ca3d6d8f9e4e4d9fc.jpg"
},
{
 name: "Laughing Abby",
 cost: 300,
 img: "https://i.pinimg.com/474x/fb/54/1a/fb541af2bc34f895c569e2e62eb63ac6.jpg"
},
{
 name: "Shocked Abby",
 cost: 150,
 img: "https://i.pinimg.com/474x/18/f4/4d/18f44d6a87cde642ab308fd338716f5d.jpg"
},
{
 name: "Super Abby",
 cost: 700,
 img: "https://i.pinimg.com/474x/22/82/47/228247972b46881e22749384ac1b8431.jpg"
},
{
 name: "Judge Abby",
 cost: 200,
 img: "https://i.pinimg.com/474x/d7/02/f1/d702f180c74fe7a6a6f134dedd80b843.jpg"
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

