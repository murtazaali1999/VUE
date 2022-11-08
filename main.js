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
                    price: 100,
                    released: true
                },
                {
                    name: "MetalGear",
                    price: 200,
                    released: true
                },
                {
                    name: "Naruto Shippuden",
                    price: 300,
                    released: true
                },
                {
                    name: "Resonance Of Death",
                    price: 400,
                    released: false
                },
            ],
            url: "https://i.ytimg.com/vi/TEZBFGw2uWs/maxresdefault.jpg",
            purpleSock: "https://stile12.com/6878-thickbox_default/ecotec-ecologic-cotton-men-long-socks-black-purple.jpg",
            greySock: "https://cdn.shopify.com/s/files/1/0026/4578/6742/products/tailored-100-merino-socks-black-65-75-clothing-the-wool-company-359959.jpg?v=1570383944",
            sock: "https://stile12.com/6878-thickbox_default/ecotec-ecologic-cotton-men-long-socks-black-purple.jpg"
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
        },
        changeClass(game) {
            /* for (var i = 0; i < this.games.length; i++) {
                if (game.name == this.games[i].name) {
                    if (this.games[i].released == true) {
                        this.games[i].released = false;
                    } else
                        this.games[i].released = true;
                }
            } <---Long Way*/

            game.released = !game.released;
        },
        toggleSock(sock) {

        }
    }
});

app.mount("#app"); //where to mount the application,mount our application in the dom