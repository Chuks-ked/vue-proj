const app = Vue.createApp({
    data(){
        return {
            showBook:true,
            title: 'The final empire',
            author: 'Chuks',
            age: 22,
        }
    },
    methods:{
        toggleShowBook(){
            this.showBook = !this.showBook
        },
        handleEvent(e){
            console.log(e)
        }


        // changeTitle(title) {
        //     this.title = title
        // }
    }
})

app.mount('#app')