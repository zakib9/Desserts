<template>
  <div>
      <div class="flex justify-center relative">
              <img v-if="card.isActive" class="object-cover h-80 w-80 rounded-lg border-solid border-2
              border-primary"
              :src= "card.image">
              <img v-else class="object-cover h-80 w-80 rounded-lg border-solid border-2
              border-transparent"
              :src= "card.image">
                       <AddToCartView  :card = "card" @activation="onActivation" @decrementation="onDecrementation" @incrementation="onIncrementation"/>

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






  const emit = defineEmits([
        "activation",
        "incrementation",
        "decrementation"
      ])
  // functionality emitation to home vue
  function onActivation(){
    emit("activation")
  }
  function onIncrementation(){
    emit("incrementation")
  }
  function onDecrementation(){
    emit("decrementation")
   
  }
 

  defineProps({
    card: {
      type: Object,
      default: () => {},
    },
   
  });

</script>