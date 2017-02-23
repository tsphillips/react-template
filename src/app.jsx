class Hello extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    } // render()
} // class

const element = <Hello name="World" />;

ReactDOM.render(
    element,
    document.getElementById('app')
);

