import React, {Component} from "react";
import PropTypes from 'prop-types'

// // PropTypes
//
// // Node:
// Component.PropTypes = {
//   node: PropTypes.node,
// }
//
// // Element:
// Component.PropTypes = {
//   elem: PropTypes.element,
// }
//
// // Instance Of:
// Component.PropTypes = {
//   instance: PropTypes.instanceOf(Constructor),
// }
//
// // One Of:
// Component.PropTypes = {
//   elem: PropTypes.oneOf(['val1', 'val2']),
// }
//
// // One of type:
// Component.PropTypes = {
//   elem: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//   ]),
// }
//
// // Array of / Object of:
// Component.PropTypes = {
//   array: PropTypes.arrayOf(PropTypes.string),
//   object: PropTypes.objectOf(PropTypes.number),
// }
//
// // Shape:
// Component.PropTypes = {
//   obj: PropTypes.shape({
//     color: PropTypes.string,
//     fontSize: PropTypes.number,
//     lineHeight: PropTypes.number,
//   })
// }
// // ==========================================================


export const Counter = ({counter = 0}) => {
  return <h1>{`Counter component.Counter value is: ${counter}`}</h1>
}

export const Button = () => (
  <button>Simple button</button>
)

export class Lesson extends Component {
  static propTypes = {
    children: PropTypes.element,
  }

  static defaultProps = {
    children: null,
  }

  state = {
    counter: 0,
  }

  handleClick = () => {
    this.setState(({counter}) => ({
      counter: ++counter
    }))
  }

  render() {
    const {counter} = this.state
    const {children, child} = this.props

    return (
      <div>
        {child}
        <div>{counter}</div>
        {React.cloneElement(children, {counter: this.state.counter})}
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}


// export default Lesson