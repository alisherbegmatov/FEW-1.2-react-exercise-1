import React from "react"

class Component1 extends React.Component {
    // TODO 2 = call that props value using `this.props.myValueName` wrapped in {}
    render() {
        return (
            <h1>{this.props.myFirstPropsAttribute}</h1>
        )
    }
}

export default Component1
