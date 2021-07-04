const Name = {
    name: '剛志',
    university: '福島大学',
    born: '千葉'
    age: 20,
    hobby: ['将棋', '麻雀','野球観戦'],
    music: 'man with a mission'
    family: {
      papa: '公一',
      mama: 'ゆき',
      bro: ['やすし', 'ひとし']
    },
    isMentor: false,
    sayHello: function () {
      alert(`こんばんは${this.name}です!!`)
    },
  }
  ​
  console.log(Name.name)
  Name.sayHello()