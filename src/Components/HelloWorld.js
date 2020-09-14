import React, {Component} from 'react'

class HelloWorld extends Component {
    render() {
        return (
        <h1 className="p-3 font-bold border-b">Hello {this.props.type}</h1>
        )
    }
}
 export default HelloWorld