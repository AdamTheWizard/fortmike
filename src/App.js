import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      storeData: []
    }

    // this.getData = this.getData.bind(this)
  }

    
  componentDidMount(){
    fetch("https://fortnite-public-api.theapinetwork.com/prod09/store/get")
    .then(function(response){
      return response.json()
    }).then(data => {
      
      console.log(data)
  
      const dataDone = data.items.map(item => {
        return (
            <a href={item.item.images.transparent} className={`item-card ` + item.item.rarity}>
              <img className="trans-img" src={item.item.images.transparent} />
              <h1>{item.name}</h1>
              <div className="cost-container">
                
                <img className="currency" src="https://fortnite-public-files.theapinetwork.com/fortnite-vbucks-icon.png" />
                <p className="cost">{item.cost}</p>
              </div>
            </a>
        )
      })

      this.setState({
        storeData: dataDone
      })
      
    })
  }


  render() {
    return (
      <div className="App">
        <div className="card-container">
          {this.state.storeData}
        </div>
      </div>
    );
  }
}

export default App;
