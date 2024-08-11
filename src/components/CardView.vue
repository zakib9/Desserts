<template>
    <div>
        <div class="flex justify-center relative">
            <img class="object-cover h-80 w-80 rounded-lg border-solid border-2
            border-transparent " 
            :src= "`./src/assets/images/${card.image.desktop}`">
            
           
            <AddToCartView/>
        </div>
       
        <div class="my-8">
            <span class="text-gray-500 text-sm font-medium ">{{card.category}}</span>
            <h4 class="text-md font-bold">{{card.name}}</h4>
            <h3 class="text-primary text-lg font-RedHatBold">${{card.price}}</h3>
        </div>
    </div>
</template>

<script setup>
import AddToCartView from './AddToCartView.vue';


defineProps({
  card: {
    type: Object,
    default: () => {},
  },
});
</script>

