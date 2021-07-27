new Vue({
  el: "#app",
  data: {
    count: 0,
    count0: 0,
  },
  methods: {
    countUp: function() {
      this.count += 1
    },
    countUp0: function() {
      this.count0 += this.count
    },
  },
})
