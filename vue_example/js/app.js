new Vue({
  el: '#app',
  data: {
    title: 'Our Vue App'
  },
  methods: {
    changeTitle() {
      this.title = 'Changed Title';
    }
  }
});