const app = Vue.createApp({
    data() {
        return {
            title: "Test Başlık",
            itemList: [],
        }
    },
    beforeCreate() {
        console.log("beforeCreate Çalıştı...")
    },
    created() {
        console.log("created Çalıştı...")
        setTimeout(() => {
            this.itemList = [1, 2, 3, 4, 5, 6]
        }, 2000)

        setTimeout(() => {
            this.title = "Yeni başlık"
        }, 3000)
    },
    beforeMount() {
        console.log("beforeMount Çalıştı...")
    },
    mounted() {
        console.log("mounted Çalıştı...")
    },
    beforeUpdate() {
        console.log("beforeUpdate Çalıştı...")
    },
    updated() {
        console.log("updated Çalıştı...")
    },
    beforeUnmount() {
        console.log("beforeUnmount Çalıştı...")
    },
    unmounted() {
        console.log("unmounted Çalıştı...")
    }
}).mount("#app")

setTimeout(() => {
    app.unmounted()
}, 5000)