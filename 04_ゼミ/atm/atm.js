new Vue({
  el: "#app",
  data: {
    nyuuryoku: 0,
    zandaka: 0,
    logs: [
      {
        date: new Date(),
        type: "-",
        money: 0,
      },
    ],
  },
  created: function() {
    this.zandaka = Number(localStorage.getItem("zandaka"))
  },
  computed: {
    nyuuryokuRan: function() {
      let yen = 0
      yen = Number(this.nyuuryoku) * 1000
      return yen
    },
  },
  methods: {
    zandakaIn: function() {
      this.zandaka += Number(this.nyuuryoku) * 1000
      this.logs.unshift({
        date: new Date(),
        type: "振込",
        money: Number(this.nyuuryokuRan),
      })
      // (localStorage.zandaka = this.zandaka)
    },
    zandakaOut: function() {
      this.zandaka -= Number(this.nyuuryoku) * 1000
      this.logs.unshift({
        date: new Date(),
        type: "引出",
        money: Number(this.nyuuryokuRan),
      })
      // (localStorage.zandaka = this.zandaka)
    },
    save: function() {
      localStorage.zandaka = this.zandaka
    },
  },
})
