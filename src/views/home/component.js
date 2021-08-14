import Swipe from './components/swipe'
import Peixunxianlu from './components/peixunxianlu'

export default {
  data() {
    return {
      currentIndex: 0
    }
  },

  components: {
    Swipe,
    Peixunxianlu
  },

  computed: {},

  mounted() {},

  methods: {
    changeTab(index) {
      this.currentIndex = index
    }
  }
}
