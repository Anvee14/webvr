AFRAME.registerComponent("game-play", {
    schema: {
        elementId: {
            type: "string",
            default: "#coin",
        }
    },
    

    update: function () {
        this.isCollided(this.data.elementId);
    },
    isCollided: function (elementId) {
        var element = document.querySelector(elementId);
        element.addEventListener("collide", (e) => {
            console.log("hello")
            if (elementId.includes("#coin")) {
                console.log(elementId + " collision");
                
                element.setAttribute("visible", false);
              //  this.updateTargets();
                //this.updateScore()
            }
            else {
               // console.log("bird collision");
               // this.gameOver()
            }
        });

    }
})

