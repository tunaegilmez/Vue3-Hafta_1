const app = Vue.createApp({
  data() {
    return {
      title: "Vue.js Bootcamp 1.gün",
      content: "lorem ipsun dolor sit amet",
      eduflow: {
        title: "Tıkla",
        target: "_blank",
        url: "https://google.com",
        alt: "Google",
      },
      coords: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    changeTitle(title) {
      title ? (this.title = title) : (this.title = "Test Title");
    },
    updateCoords(message, event) {
      // console.log(message, event.x, event.y);
      this.changeTitle(`${event.x} - ${event.y}`);
      this.coords = {
        x: event.x,
        y: event.y,
      };
    },
  },
}).mount("#app");
