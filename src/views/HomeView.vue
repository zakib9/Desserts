<script setup>
import CardView from '@/components/CardView.vue';
import YourCartView from '@/components/YourCartView.vue';
import cardsData from '../data.json'


  function cardActivation(){
    
  }

</script>

<template>
 <div class="flex justify-evenly bg-secondary px-20 py-20">
  <div class=" grid grid-cols-3 gap-6">
    <h1 class="text-black text-4xl font-RedHatBold mb-6 col-span-3">Desserts</h1>
    <div class="" v-for="card in cardsData" :key="card.name">
      <CardView :card = "card" />
      
      
    </div>
  </div>
  <div class=" flex-1 bg-white min-h-60 mx-6 self-start rounded-xl ">
   <YourCartView @isActive="cardActivation"/>
  </div>
 </div>
</template>
