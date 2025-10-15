import { ref } from 'vue';
export default {
  name: 'MyComponent',
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };
    return { count, increment };
  },
    template: `<div>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
    </div>`,    
};