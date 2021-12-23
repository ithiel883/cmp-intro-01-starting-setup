const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel lorenz",
          phone: "08134678273",
          email: "lezzgeddis@now.com",
        },
        {
          id: "Julie",
          name: "Julie Jones",
          phone: "08134678273",
          email: "lezzmeuve@now.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails()">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel lorenz",
        phone: "08134678273",
        email: "lezzgeddis@now.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");
