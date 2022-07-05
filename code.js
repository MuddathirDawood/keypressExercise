const app = Vue.createApp({
    data: function(){
        return{
            show: false
        }
    },
    methods:{
        handleKeyPressed(e){
            console.log(e)
            console.log(e.key);
            if (e.keyCode = 97) {
                this.show = true
            }
        }
    }
})

app.mount('#app')