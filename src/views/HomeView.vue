<script setup>
import CardView from '@/components/CardView.vue';
import YourCartView from '@/components/YourCartView.vue';
import cardsData from '../data.json'
import { ref } from 'vue';





const itemsSelected = ref([])
const items = ref([])
let total = ref(0)
let cardsNumber = ref(0)


  // transaction of JSON data file to an array for smooth manipulation
  function cardsDataModification(cards){
    for (let index = 0; index < cards.length; index++) {
      items.value.push({
            "image": cards[index].image,
            "name": cards[index].name,
            "category": cards[index].category,
            "price": cards[index].price,
            "isActive": false,
            "contity": 0,
      }) 
    }
  }

  cardsDataModification(cardsData)

  // item activation (add item to cart)
    function onActivation(item){
      for (let index = 0; index < items.value.length; index++) {
        if (items.value[index].name === item.name ) {
          items.value[index].isActive = true
          items.value[index].contity = 1
             total.value += item.price 
             cardsNumber.value++ 
        }
      }     
    }
    // add more of the same item
    function onIncrementation(item){
      let inc = 0
     for (let index = 0; index < items.value.length; index++) {
      if (items.value[index].name === item.name) { 
            items.value[index].contity++
            total.value += item.price 
            cardsNumber.value++
      }
     }
    }
    // sub from the contity of an added item
    function onDecrementation(item){
      let dec = 0
      for (let index = 0; index < items.value.length; index++) {
      if (items.value[index].name === item.name) {
            if (items.value[index].contity == 1) {
              items.value[index].isActive = false
            } 
            items.value[index].contity--
            total.value -= item.price 
            cardsNumber.value--
        }
      } 
    }
    // remove an item completly from cart
    function onRemove(item){
      for (let index = 0; index < items.value.length; index++) {
        if (items.value[index].name === item.name) {
          total.value -= items.value[index].price * items.value[index].contity 
          cardsNumber.value -= items.value[index].contity
          items.value[index].contity = 0
          items.value[index].isActive = false   
        } 
      }
    }





</script>

<template>
 <div class="flex justify-evenly bg-secondary px-20 py-20">
  <div class=" grid grid-cols-3 gap-6">
    <h1 class="text-black text-4xl font-RedHatBold mb-6 col-span-3">Desserts</h1>
    <div  v-for="card in items" :key="card.name">
      <CardView :card = "card" @activation="onActivation(card)" @decrementation="onDecrementation(card)" @incrementation="onIncrementation(card)"/>
      
      
    </div>
  </div>
  <div class=" flex-1 bg-white min-h-60 mx-6 self-start rounded-xl ">
   <YourCartView  :card = "items" :total = "total" @remove="onRemove" :cardsNumber="cardsNumber"/>
  </div>
 </div>
</template>
