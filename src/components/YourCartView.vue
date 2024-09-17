<template>
    <div class="">
        <h2  class="text-2xl font-RedHatBold text-primary my-6 mx-4">
                Your Cart({{ cardsNumber }})
            </h2>
        <div v-if="cardsNumber == 0" class="text-center mb-6">
            <img  src="../assets/images/illustration-empty-cart.svg"
            alt="" class="m-auto">
            <span class="text-s font-RedHatBold text-accent">Your added items will apear here</span>

        </div>
            <div v-else class="flex flex-col m-8 " >
                    <div  v-for="item in card" :key="item.name" >
                        <div v-if="item.contity >= 1" class="flex justify-between">
                            <div class="flex flex-col" >
                                <p class="font-RedHatBold">{{ item.name }}</p>
                                <p class="text-accent"> <span class="text-primary font-RedHatBold">{{item.contity}}</span>  <span class="text-sm text-accent">@ </span> ${{  parseFloat(item.price).toFixed(2)  }}   <span class="font-RedHatBold">${{ parseFloat(item.price * item.contity).toFixed(2) }}</span></p>
                            </div>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width="10" 
                            height="2"  
                            viewBox="0 0 10 10" 
                            class="w-6 h-6 border border-solid border-accent rounded-full p-1  fill-accent hover:border-2 my-auto" 
                            @click="remove(item)"
                            ><path fill="accent" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>></svg>
                        </div>
                        
                            <hr v-if="item.contity >= 1" class="my-4">
                            
                        </div>
                        <div class="flex justify-between my-6">
                            <p class="font-RedHat text-accent">Order Total</p>
                            <p class="font-RedHatBold text-2xl text-accent">${{  parseFloat(total).toFixed(2)  }}</p>
                        </div>
                        <div class="flex justify-center gap-2 bg-secondary rounded-md w-full py-6 my-8">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="25" 
                            height="25" 
                            fill="none" 
                            viewBox="0 0 21 20">
                            <path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/>
                            <path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
                            <p class="font-RedHat text-accent">This is a <span class="font-RedHatBold text-accent">carbon-neutral</span> delivery</p>
                        </div>
                        <div @click="showConfirmationPopUp" class="bg-primary rounded-full text-center text-white py-6 mb-4 cursor-pointer">
                            Confirm Order
                        </div>
            </div>
          

    </div>
    
</template>

<script setup>


    const emit = defineEmits(["remove","closeModal","showModal"])
    // functionality emitation to home vue
    function remove(item){
        emit("remove",item)
    }
    function showConfirmationPopUp(){
        emit("showModal")
    }

    defineProps({
        card: {
            type: Object,
            default: () => {},
        },
        total: {
            type: Number,
            default: 0,
        },
        cardsNumber: {
            type: Number,
            default: 0,
        },
        });
    
</script>
