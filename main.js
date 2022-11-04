const app = Vue.createApp({
    //data,functions,events
    //template: "<h1>Hello<h1/>"
    data() {
        return {
            title: "Final Jedi",
            year: 2015
        }
    },
    methods: {
        changeTitle() {
            console.log("Title Changed Invoked")
            this.title = "Clone Wars"
        },
        changeTitleViaArg(title) {
            this.title = title;
        }
    }
});

app.mount("#app"); //where to mount the application,mount our application in the dom