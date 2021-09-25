import React, {Fragment} from "react";
import './styles.css'

// Array
// const Columns = () => ([
//   <td key={1}>Data 1</td>,
//   <td key={2}>Data 2</td>
// ])

// Fragment
const styles = {color: 'red', textTransform: 'uppercase'}

const Columns = () => ([
  <Fragment>
    <td style={styles}>Inline</td>
    <td className='title'>Simple class</td>
  </Fragment>
])


const Table = () => (
  <table>
    <tbody>
    <tr>
      <Columns/>
    </tr>
    </tbody>
  </table>
)

export default Table