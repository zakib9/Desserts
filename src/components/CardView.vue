<template>
    <div>
        <div  class="flex justify-center relative">
            
            
            <img v-if="isActive && itemName !== card.name" class="object-cover h-80 w-80 rounded-lg border-solid border-2
           border-primary"
            :src= "`./src/assets/images/${card.image.desktop}`">
            <img v-else class="object-cover h-80 w-80 rounded-lg border-solid border-2
            border-transparent"
            :src= "`./src/assets/images/${card.image.desktop}`">
          
           
           <AddToCartView @active="activation" @disactive="disactivation" @count="increment" @decrement="decrement" :card = "card" :active="active" :itemName="itemName" :cont="contity"/>
        </div>
       
        <div class="my-8">
            <span class="text-gray-500 text-sm font-medium ">{{card.category}}</span>
            <h4 class="text-md font-bold">{{card.name}}</h4>
            <h3 class="text-primary text-lg font-RedHatBold">${{card.price}}</h3>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import AddToCartView from './AddToCartView.vue';

    const isActive = ref(null)

    const emit = defineEmits(["isActive","count","dec"])
    

    function activation() {
        isActive.value = true
        emit("isActive")
        
    }
    function disactivation(){
      isActive.value = false
      emit("dec")
    }
    function increment(){
      
      emit("count")
    }
    function decrement(){
      emit("dec")
    }

    defineProps({
      card: {
        type: Object,
        default: () => {},
      },
      active: {
        type: Boolean,
        default: null,
      },
      itemName: {
        type: String,
        default: "",
      },
      contity: {
        type: Number,
        default: "",
      },
    });
     
    

     
   





</script>

