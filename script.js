Vue.createApp({
    data(){
        return{
            count:0
        }
    },
    methods:{
        plus(event){
            return event.target.count++;
        }
    }
}).mount('#monApp');