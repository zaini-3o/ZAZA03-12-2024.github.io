new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "1.jpg",
          img2: "2.jpg",
          img3: "3.jpg",
          title: "LOVE",
          isOpen: false,
        },
        {
          img1: "4.jpg",
          img2: "5.jpg",
          img3: "6.jpg",
          title: "PAL PAL AN",
          isOpen: false,
        },
        {
          img1: "7.jpg",
          img2: "8.jpg",
          img3: "9.jpg",
          title: "ADVENTURE",
          isOpen: false,
        },
        {
          img1: "10.jpg",
          img2: "11.jpg",
          img3: "12.jpg",
          title: "LOVER",
          isOpen: false,
        },
        {
          img1: "13.jpg",
          img2: "14.jpg",
          img3: "15.jpg",
          title: "CANTIK",
          isOpen: false,
        },
        {
          img1: "16.jpg",
          img2: "17.jpg",
          img3: "18.jpg",
          title: "MANIS",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
  mounted() {
    // Memulai backsound saat aplikasi dimuat
    const audio = document.getElementById("backsound");

    // Jika autoplay terblokir oleh browser, tambahkan interaksi manual
    audio.play().catch(() => {
      console.warn("Autoplay diblokir. Tambahkan interaksi pengguna untuk memulai audio.");
    });
  },
});