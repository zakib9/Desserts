<template>
     <div v-show="!isActive || (active == false && itemName === card.name) "
     @click="activation "
     class=" group
     flex bg-white border border-solid
     border-gray-500 rounded-full py-2 px-4 mt-[295px] absolute cursor-pointer  hover:border-primary">
        <img src="../assets/images/icon-add-to-cart.svg" 
        class="w-6 ml-2"/>
        <p class="font-bold text-lg px-2 group-hover:text-primary ">Add To Cart</p>
    </div>
    <div v-show="isActive && itemName !== card.name"
     class="
     flex bg-primary border border-solid
     border-primary rounded-full py-2 px-2 mt-[295px] 
     absolute cursor-pointer group-hover:border-2
      group-hover:border-primary justify-between items-center">
      
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2"  viewBox="0 0 10 10" class="w-6 h-6 border border-solid border-white rounded-full p-1 fill-white hover:bg-white hover:fill-primary"
        @click="increment" ><path  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
        <p class="font-bold text-lg text-white px-12">{{ cont }}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2"  viewBox="0 0 10 2" class="w-6 h-6 border border-solid border-white rounded-full p-1  fill-white hover:bg-white hover:fill-primary"
        @click="decrement" ><path  d="M0 .375h10v1.25H0V.375Z" /></svg>
    </div>
</template>

<script setup>
import {  ref } from 'vue';


     const isActive = ref(false)
     const contity = ref(0)
     
     const emit = defineEmits(["active","disactive","count","decrement"])

    function activation() {
        isActive.value = true
        contity.value++
        emit("active") 
    }
     function increment(){
        contity.value++
        emit("count")
        
    }
    function decrement(){
            if (contity.value == 1) {
                contity.value--
                isActive.value = false  
                emit("disactive")
            }
         else {
            contity.value--
            emit("decrement")
        }
        
        
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
      cont: {
        type: Number,
        default: "",
      },
    });
</script>

