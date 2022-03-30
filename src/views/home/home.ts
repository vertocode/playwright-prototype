import { defineComponent, ref } from 'vue'

import HelloWorld from '@/components/hello-world.vue'

export default defineComponent({
  components: {
    HelloWorld
  },
  name: 'home',
  setup () {
    const message = ref('Vue 3 + TypeScript + ESLint Standard With TypeScript')

    return {
      message
    }
  }
})
