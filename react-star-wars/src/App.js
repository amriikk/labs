import React, {Component} from 'react';
import './App.css';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { getAllStarships } from './services/sw-api';
import Starship from './components/Starship';
import StarshipPage from './pages/StarshipPage/StarshipPage';

class App extends Component {
  state = {
    starships: []
}

  getStarship = (index) => {
    return this.state.starships[index]
  }

  async componentDidMount() {
    const foundStarships = await getAllStarships()
    this.setState({
      starships: foundStarships
    })
  }

  render() {
    return (
      <div className='App'>
        <header><h2>Star Wars Starships</h2></header>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() =>
              <section className='ships'>
                {this.state.starships.map((starship, index) =>
                  <Link to={`/starships/${index}`} key={starship.name}>
                    <div className="ship"><Starship shipData={starship}/></div>
                  </Link>
                )}
              </section>
            }/>
            <Route path='/starships/:index' render={(props) =>
              <StarshipPage
                {...props}
                getStarship={this.getStarship}
              />
            }/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;