<template>
  <main>
    <h1 data-cy="title">Playwright Testing E2E by Everton Vanoni</h1>
    <button @click="showInputs" data-cy="add-inputs">add 2 inputs</button>
    <div v-for="(input, index) in inputTest" :key="input">
      <input type="text" :placeholder="`${input}:${index}`" :data-cy="`input-${index}`">
    </div>
  </main>
</template>

<script lang="ts" setup>

import { ref } from "vue";

const inputTest: any = ref([])

const showInputs = () => {
  for (let i=0; i<2; i++) {
    inputTest.value.push('Test input n')
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
input {
  margin: 5px;
}
</style>
