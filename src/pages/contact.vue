<template>
    <h2 class="heading">Contact US</h2>
    <div>Counter: {{ count }}</div>
    <br>
    <button @click="increament">( + )</button>
    &nbsp;
    &nbsp;
    <button @click="dicreament">( - )</button>
    <br>
    <br>
    <input type="number" v-model="count" />
    <section id="service2">
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, libero, fugit deserunt odit pariatur unde voluptas laboriosam porro ratione eum quidem aut esse dolorem facere. Magni dolor dolorum esse mollitia?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, accusantium! Quibusdam harum corporis error officia autem praesentium iste laboriosam aperiam consequuntur velit id consequatur dolorum atque, odit cupiditate ex sapiente!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, libero, fugit deserunt odit pariatur unde voluptas laboriosam porro ratione eum quidem aut esse dolorem facere. Magni dolor dolorum esse mollitia?</div>
    </section>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increament() {
      this.count++;
    },
    dicreament() {
      this.count--;
    }
  }
}
</script>