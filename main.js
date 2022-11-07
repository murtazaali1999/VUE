const app = Vue.createApp({
    //data,functions,events
    //template: "<h1>Hello<h1/>"
    data() {
        return {
            title: "Final Jedi",
            year: 2015,
            show: true,
            x: 0,
            y: 0,
            games: [
                {
                    name: "RedDead",
                    price: 100
                },
                {
                    name: "MetalGear",
                    price: 200
                },
                {
                    name: "Naruto Shippuden",
                    price: 300
                },
                {
                    name: "Death Stranding",
                    price: 400
                },
            ]
        }
    },
    methods: {
        changeTitle() {
            console.log("Title Changed Invoked")
            this.title = "Clone Wars"
        },
        changeTitleViaArg(title) {
            this.title = title;
        },
        toogleData() {
            if (this.show == true) this.show = false;
            else this.show = true;
        },
        handleEvent(e, arg) {
            this.show = false
            console.log("Event Activated")
            console.log(e, e.type, "number==>", arg);
        },
        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
});

app.mount("#app"); //where to mount the application,mount our application in the dom