<template>
  <mx-card style="max-width: 480px">
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
  </mx-card>
</template>