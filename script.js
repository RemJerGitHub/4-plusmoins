Vue.createApp({
    data(){
        return{
            count:0
        }
    },
    methods:{
        plusDix(){
            return count+=10;
        }
    }
}).mount('#monApp');