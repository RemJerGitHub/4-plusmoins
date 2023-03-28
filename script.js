Vue.createApp({
    data(){
        return{
            count:0
        }
    },
    methods:{
        plusDix(){
            return this.count+=10;
        }
    }
}).mount('#monApp');