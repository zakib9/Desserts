<template>
    <div>
        <div  class="flex justify-center relative">
            
            
            <img v-if="isActive" class="object-cover h-80 w-80 rounded-lg border-solid border-2
           border-primary"
            :src= "`./src/assets/images/${card.image.desktop}`">
            <img v-else class="object-cover h-80 w-80 rounded-lg border-solid border-2
            border-transparent"
            :src= "`./src/assets/images/${card.image.desktop}`">
          
           
           <AddToCartView @active="activation" @disactive="disactivation" @count="counting"/>
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
    const counter = ref(0)

    const emit = defineEmits(["isActive","count"])
    

    function activation() {
        isActive.value = true
        counter.value = 1
        emit("isActive")
        
    }
    function disactivation(){
      isActive.value = false
    }
    function counting(){
      counter.value++
    }

    defineProps({
      card: {
        type: Object,
        default: () => {},
      },
    });
     
    

     
   





</script>

