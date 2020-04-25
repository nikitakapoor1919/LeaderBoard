import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire,faUser,faSkullCrossbones,faTrophy} from '@fortawesome/free-solid-svg-icons';
function App() {
 

  return (
    <>
   
 <header className="header">
            <p className="header__title">Leaderboard 	&nbsp; <FontAwesomeIcon icon={ faFire }/></p>
            <nav>
                <div className="nav-right hidden-xs">
                    <div className="button" id="btn">
                        <div className="bar top"></div>
                        <div className="bar middle"></div>
                        <div className="bar bottom"></div>
                    </div>
                </div>
            </nav>
        </header>
    <br></br>
    <br></br>
    <div className="container">
    <table >
        <thead>
          <tr>
            <th scope="col">Team No.</th>
            <th scope="col">UserName<FontAwesomeIcon icon={ faUser }/></th>
            <th scope="col">Game-Name<FontAwesomeIcon icon={ faFire }/></th>
            <th scope="col">Kills<FontAwesomeIcon icon={ faSkullCrossbones }/></th>
            <th scope="col">Rank<FontAwesomeIcon icon={ faTrophy }/></th>
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

    </>
  );
}
export default App;
