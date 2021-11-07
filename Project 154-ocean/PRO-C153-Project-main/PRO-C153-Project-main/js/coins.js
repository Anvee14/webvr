AFRAME.registerComponent("coins", {
  init: function () {
    for (var i = 1; i <= 10; i++) {
      const id = `coin${i}`;

      const posX = Math.random() * 30 + (-10);
      const posY = 15//Math.random() * 20 + (-1);       
      const posZ = Math.random() * 10 + (-4);

      const position = { x: posX, y: posY, z: posZ };
      this.createCoins(id, position);
    }
  },
  createCoins: function (id, position) {
    const coinEntity = document.querySelector("#coin");
  //  const terrain1 = document.querySelector("#terrain")
    var coin = document.createElement("a-entity");
 //   scale = [0.1, 0.1, 0.1]
    coin.setAttribute("id", id);
    coin.setAttribute("position", position);
    //  coinEl.setAttribute("scale",scale)
    coin.setAttribute("gltf-model", "./assets/coins/roman_coin/scene.gltf");
    coin.setAttribute("animation", {
      property: "rotation",
      to: "150 0 0",
      loop: "true",
      dur: 1000,
    });

    //set the static body attribute of physics system
    coin.setAttribute("static-body", {
      shape: "sphere",
    })
   // terrain1.appendChild(coin)
    coinEntity.appendChild(coin);
  },
});