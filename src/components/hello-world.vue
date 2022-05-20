<template>
  <main class="hello-world">
    <img src="../../public/playwright.png" alt="Playwright" class="logo-playwright">
    <h1 data-cy="title">Playwright Testing E2E by Everton Vanoni</h1>
    <div class="elements-to-test">
      <div class="input-container">
        <button @click="showInputs" data-cy="add-input">add 2 inputs</button>
        <div v-for="(input, index) in inputTest" :key="input">
          <input type="text" :placeholder="`${input}:${index}`" :data-cy="`input-${index}`">
        </div>
      </div>
      <div class="checkbox-container">
        <button @click="showCheckbox" data-cy="add-checkbox">add 2 checkbox</button>
        <div v-for="(checkbox, index) in checkboxTest" :key="checkbox">
          <input @click="showSpan(index)" type="checkbox" :placeholder="`${checkbox}:${index}`" :data-cy="`checkbox-${index}`">
          <span :data-cy="`checkbox-text-${index}`" v-if="checkbox.showSpan">Test checkbox n:{{ index }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>

import { ref } from "vue";

const inputTest: any = ref([])
const checkboxTest: any = ref([])

const showInputs = () => {
  for (let i=0; i<2; i++) {
    inputTest.value.push('Test input n')
  }
}

const showCheckbox = () => {
  for (let i=0; i<2; i++) {
    checkboxTest.value.push({ showSpan: false })
  }
}

const showSpan = (index: number) => {
  console.log(checkboxTest.value)
  checkboxTest.value[index].showSpan = true
}
</script>

<style scoped lang="scss">
.hello-world {
  .elements-to-test {
    border-radius: 15px;
    border: 1px black;
    display: flex;
    .input-container {
      background-color: #9e9e9e;
      display: block;
      border: 1px black;
      height: max-content;
      width: max-content;
      min-width: 200px;
    }
    .checkbox-container {
      background-color: rgb(45, 241, 212);
      display: block;
      border: 1px black;
      width: max-content;
      height: max-content;
      min-width: 200px;
    }
  }
  h1 {
    font-size: 2.5rem;
  }

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
  .logo-playwright {
    margin-right: 80px;
    width: 500px;
    float: right;
  }
}
</style>
