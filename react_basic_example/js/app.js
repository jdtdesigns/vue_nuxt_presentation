const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Our React App!'
    };
  }

  render() {
    return e(
      'div', { onClick: () => this.setState({ title: 'Changed Title' }) },
      e('h1', {}, this.state.title),
      e('button', { onClick: () => this.setState({ title: 'Changed Title' }) }, 'Change Title')
    );
  }
}

ReactDOM.render(e(App), document.getElementById('app'));