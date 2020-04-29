import React, { Component, } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire,faUser,faSkullCrossbones,faTrophy} from '@fortawesome/free-solid-svg-icons';

export class Table extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       col1:'Team No.',
       col2:'UserName',
       col3:'Game-Name',
       col4:'Kills',
       col5:'Rank',
       status:false
    }
  }

  clickHandler=()=>{
    this.setState({status:true})
  }
  shouldComponentUpdate(){  //Default Value False if returns default value then React not continue Rendering
    return true
  }
  render() {
    return  this.state.status ?(
      <div>
          <table >
        <thead>
          <tr>
            <th scope="col">{this.state.col1}</th>
            <th scope="col">{this.state.col2}<FontAwesomeIcon icon={ faUser }/></th>
            <th scope="col">{this.state.col3}<FontAwesomeIcon icon={ faFire }/></th>
            <th scope="col">{this.state.col4}<FontAwesomeIcon icon={ faSkullCrossbones }/></th>
            <th scope="col">{this.state.col4}<FontAwesomeIcon icon={ faTrophy }/></th>
          </tr>
        </thead>
        <tbody>
          <tr className="a">
            <td data-label="Team No.">1</td>
            <td data-label="UserName">Goutambudania</td>
            <td data-label="Game-Name">Goutambudania</td>
            <td data-label="Kills">2</td>
            <td data-label="Rank">2</td>
          </tr>
          <tr className="a">
            <td data-label="Team No.">2</td>
            <td data-label="UserName">Sonubudania74	</td>
            <td data-label="Game-Name">Sonubudania74	</td>
            <td data-label="Kills">2</td>
            <td data-label="Rank">1</td>
          </tr>
          <tr className="a">
            <td data-label="Team No.">3</td>
            <td data-label="UserName">Abdul007</td>
            <td data-label="Game-Name">Abdul007</td>
            <td data-label="Kills">0</td>
            <td data-label="Rank">2</td>
          </tr>
          <tr className="a">
            <td data-label="Team No.">4</td>
            <td data-label="UserName">Anmol</td>
            <td data-label="Game-Name">Anmol</td>
            <td data-label="Kills">2</td>
            <td data-label="Rank">3</td>
          </tr>
         
        </tbody>
      </table>
      </div>
    ):
    (<div className="container" style={{textAlign:"center"}}>
      <button className="btn btn-primary" onClick={this.clickHandler}  >View Results</button>
      </div>
    )
  }
}
export default Table

