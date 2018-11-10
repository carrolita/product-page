import React from "react";
import Item from "./Item";
const productsJson = require("./../products.json");

console.log("Products: (Remove this line in app.js!)", productsJson)

class App extends React.Component {
  state = {
    products: []
  }

  componentWillMount() {
    fetch('http://localhost:8080/products')
      .then(data => data.json())
      .then(data => {
        this.setState({
          products: data
        })
      })
      .catch(err => console.log(err))
  }


  render() {
    console.log(productsJson);
    return (
      <div className="App">
        <div className="header">
          <div className="header-row">
            <span className="header-text">Carrolita's Drugstore</span>
          </div>
        </div>
        <div className="container">
          {
            this.state.products.map((product) =>
              <Item
                key={product.name}
                title={product.name}
                description={product.description}
                imageUrl={product.image}
                numberInPack={product.numberInPack}
                substance={product.substance}
                size={product.size}
                type={product.type}
                price={product.price}
                deliveryTime={product.deliveryTime}
              />
            )
          }
        </div>
      </div>
    )
  }
}

export default App;
