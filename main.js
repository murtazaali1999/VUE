const app = Vue.createApp({
    //data,functions,events
    //template: "<h1>Hello<h1/>"
    data() {
        return {
            title: "Final Jedi",
            year: 2015,
            show: true
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
        }
    }
});

app.mount("#app"); //where to mount the application,mount our application in the dom