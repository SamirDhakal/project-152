AFRAME.registerComponent("car", {
    schema:{
        moveX = {type:"number", default:1},
        clickCounter = {type:"number", default:0}
    },
    tick: function() {
        this.data.moveX = this.data.moveX + 0.01
        var pos = this.el.getAttribute("position")
        pos.x = this.data.moveX
        this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
    },
    update: function() {
        window.addEventListener("click", e =>{
            this.data.clickCounder = this.data.clickCounder + 1;
            if(this.data.clickCounder === 1) {
                const rotation = {x: 0, y: 20, z: 0};
                this.el.setAttribute("rotation", rotation);
            } else if(this.data.clickCounder === 2) {
                rotation = {x: 0, y: 100, z: 0};
            }
        })
    }
})