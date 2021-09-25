import React, {Component, Fragment} from "react";


// const ValidationMsg = ({val}) => {
//   if (val >= 10) {
//     return <h2>Grate than 10</h2>
//   } else {
//     return <h3>Less than <em>10</em></h3>
//   }
// }


const Tab1 = () => (
  <h1>Text of tab1</h1>
)

const Tab2 = () => (
  <h1>Text of tab2</h1>
)

const Tab3 = () => (
  <h1>Text of tab3</h1>
)


class App extends Component {
  state = {
    activeTab: 1
  }

  handleTab = (e) => {
    this.setState({
      activeTab: +e.target.getAttribute('data-name') //+ перед "е" нужен для преобрахования
      // типов string => number т.к. getAttribute возвращает строку, а нам нужно число
    })
  }

  render() {
    console.log(this.state)
    const {activeTab} = this.state
    return (
      <Fragment>
        <button data-name={1} onClick={this.handleTab}>Tab1</button>
        <button data-name={2} onClick={this.handleTab}>Tab2</button>
        <button data-name={3} onClick={this.handleTab}>Tab3</button>
        {/*{activeTab === 1 && <Tab1/>}*/}
        {/*{activeTab === 2 && <Tab2/>}*/}
        {/*{activeTab === 3 && <Tab3/>}*/}
        {activeTab === 1 ? <Tab1/> : activeTab === 2 ? <Tab2/> : <Tab3/>}
        <div>
          {`Active tab is: ${activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}`}
        </div>
      </Fragment>
    )
  }
}


// const App = () => {
//   const val = 9
//   return (
//     <div>
//       {/* ternary */}
//       {val >= 10 ? <h2>Grate than 10</h2> : <h3>Less than 10</h3>}
//       {/* && */}
//       {val && <span>We have val</span>}
//     </div>
//     // <ValidationMsg val={8}/>
//
//   )
// }

export default App