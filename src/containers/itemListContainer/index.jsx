import { Component } from "react";

class ItemListContainer extends Component {
constructor(props) {
    super(props)
    this.state = {
         name: "Christian"
    };
}

    render() {
        return(
        <div className="greeting">
            <h1>Hello, {this.state.name} 😉</h1>
        </div>
        );
    }
}

export default ItemListContainer;
