export const hunhe = {
    methods: {
        showInfo() {
            alert(this.name)
        }
    },
    mounted() {
        console.log(`${this.name}挂载了！`)
    },
    
}
export const hunhe2 = {
    data() {
        return {
            x:100,
            y:200
        }
    },
}