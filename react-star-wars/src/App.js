import React from 'react';

import getAllStarships from './services/sw-api';
import Starship from './components/starship';

class App extends React.Component {

  state = {
    allStarships: null

  }

  async componentDidMount() {
    const foundStarships = await getAllStarships()
    this.setState({
      allStarships: foundStarships
    })
  }

  render() {
    console.log(this.state.allStarships)
    
    const starshipsComponents = this.state.allStarships ? this.state.allStarships.map((ship)=>{
      return <Starship />
    }) : null

    return (
      <div className="App">
        <Starship />
      </div>
    );
  }
}

export default App;