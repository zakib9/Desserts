<script setup>
import CardView from '@/components/CardView.vue';
import YourCartView from '@/components/YourCartView.vue';
import cardsData from '../data.json'
import {  onUpdated, ref } from 'vue';

const itemsSelected = ref([])
const isActive = ref(null)
const itemName = ref("")
const itemContity = ref(0)


let cardsNumber = ref(0)
let total = ref(0)
  function add(item){
    
          itemsSelected.value.push({
       "name": item.name,
       "category": item.category,
       "price": item.price,
       "count": 1
    })

      cardsNumber.value++
      total.value += item.price 
      isActive.value = true
      itemName.value = ""
      itemContity.value = 1
       
    }
   
  function increment(item){
    let inc = 0
     for (let index = 0; index < itemsSelected.value.length; index++) {
      if (itemsSelected.value[index].name === item.name && inc == 0) {
        inc = itemsSelected.value[index].count + 1
        
        itemsSelected.value.splice(index, 1)
        
        itemsSelected.value.push({
       "name": item.name,
       "category": item.category,
       "price": item.price,
       "count": inc
    })
      cardsNumber.value++
      itemContity.value++
      total.value += item.price
      }
      
     }
    
  }
  function decrement(item){
    let dec = 0
     for (let index = 0; index < itemsSelected.value.length; index++) {
      if (itemsSelected.value[index].name === item.name && dec == 0) {
        dec = itemsSelected.value[index].count - 1
        if (dec == 0) {
          itemsSelected.value.splice(index, 1)
          cardsNumber.value--
          itemContity.value--
          total.value -= item.price
          isActive.value = false
        } else {
          itemsSelected.value.splice(index, 1)
        
        itemsSelected.value.push({
       "name": item.name,
       "category": item.category,
       "price": item.price,
       "count": dec
    })
      cardsNumber.value--
      itemContity.value--
      total.value -= item.price
        }
        
      }
      
     }
    
  }
  function update(item) {
    
    for (let index = 0; index < itemsSelected.value.length; index++) {
      if (itemsSelected.value[index].name === item) {
      cardsNumber.value -= itemsSelected.value[index].count
      total.value -= itemsSelected.value[index].price * itemsSelected.value[index].count
      itemsSelected.value.splice(index, 1)  
      } 
     }

    isActive.value = false 
    itemName.value = item
    itemContity.value = 0
    
    
  }

</script>

<template>
 <div class="flex justify-evenly bg-secondary px-20 py-20">
  <div class=" grid grid-cols-3 gap-6">
    <h1 class="text-black text-4xl font-RedHatBold mb-6 col-span-3">Desserts</h1>
    <div class="" v-for="card in cardsData" :key="card.name">
      <CardView :card = "card" :active="isActive" :itemName="itemName" :contity="itemContity"
       @isActive="add(card)" @count="increment(card)" 
      @dec = "decrement(card)" />
      
      
    </div>
  </div>
  <div class=" flex-1 bg-white min-h-60 mx-6 self-start rounded-xl ">
   <YourCartView  :card = "itemsSelected" :cards = "cardsNumber" :total = "total"  @update="update" />
  </div>
 </div>
</template>
