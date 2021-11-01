AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        const id = `coin${i}`;
  
        const posX = 7;
        const posY = 7;        
        const posZ = Math.random() * 100 + -40;
  
        const position = { x: posX, y: posY, z: posZ };
        this.createCoins(id, position);
      }
    },
    createCoins: function (id, position) {
      const coinEntity = document.querySelector("#coins");
      var coinEl = document.createElement("a-entity");
      scale = [0.5,0.5,0.5]
      coinEl.setAttribute("id", id);
      coinEl.setAttribute("position", position);
     //  coinEl.setAttribute("scale",scale)
      coinEl.setAttribute("gltf-model", "./assets/coins/roman_coin/scene.gltf"); 
      coinEl.setAttribute("animation", {
        property: "rotation",
        to: "0 0 0",
        loop: "true",
        dur: 1000,
      });
  
      //set the static body attribute of physics system
      coinEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 2
      })

      coinEntity.appendChild(coinEl);
    },
  });