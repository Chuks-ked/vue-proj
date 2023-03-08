const app = Vue.createApp({
    data(){
        return {
            url: 'https://www.thenetninja.co.uk',
            showBook:false,
            books: [
                {title: 'name of the wind', author: 'Patrick rothfuss', img: 'assets/1.jpg', isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false},
                {title: 'the final empire', author: 'Chuks', img: 'assets/3.jpg', isFav: true},
            ],
            x:0,
            y:0,
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBook = !this.showBook
        },
        toggleFav(book){
            book.isFav = !book.isFav
        },
        handleEvents(e, data){
            console.log(e, e.type)
            if (data){
                console.log(data)
            }
        },
        handlemousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')