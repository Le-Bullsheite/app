<template>
  <div>
    <QuoteBlock
    :quoteBlockName="quoteBlockName"
    :quoteBlockDescription="quoteBlockDescription"
    :quoteBlockText="quoteBlockText"
    />
  </div>
</template>

<script>
import QuoteBlock from './components/QuoteBlock.vue';
export default {
  data() {
    return {
      quoteBlockName: 'Kayne West',
      quoteBlockDescription: 'Voice of a Generation',
      quoteBlockText: 'I am Warhol. I am the number one most impactful artist of our generation. I am Shakespeare in the flesh.'
    }
  },
  components: {
    QuoteBlock
  }
  
}
</script>

<style>
body {
  margin: 0;
}
</style>
