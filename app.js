const app = Vue.createApp({
    data(){
        return {
            url: 'https://www.thenetninja.co.uk',
            showBook:true,
            books: [
                {title: 'name of the wind', author: 'Patrick rothfuss', img: 'assets/1.jpg', isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false},
                {title: 'the final empire', author: 'Chuks', img: 'assets/3.jpg', isFav: true},
            ]
        }
    },
    methods:{
        toggleShowBook(){
            this.showBook = !this.showBook
        },
        toggleFav(book){
            book.isFav = !book.isFav
        },
        // handleEvent(e, data){
        //     console.log(e, e.type)
        //     if (data){
        //         console.log(data)
        //     }
        // },
        // handleMouseMove(e){
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        // },
        // changeTitle(title) {
        //     this.title = title
        // }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')