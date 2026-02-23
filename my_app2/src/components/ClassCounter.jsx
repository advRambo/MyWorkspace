import React from "react";
import Counter from "./Counter";

class Ccounter extends React.Component{

    constructor(props) {
        super()
        this.state = {
            count : 0
        }
    }
    increase = () => {
        this.setState({count: this.state.count + 1})
    }

        render(){
            return <>
                <Counter myVal={ this.state.count} />
                <button onClick={this.increase}>Increment</button>
                <button onClick={() => this.setState({count: 0})}>Reset</button>
            </>
       }
    }

export default Ccounter