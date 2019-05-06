import React, { Component } from 'react';
import './Cardapio.css';
import Header from '../../Components/Header/Header';
import FoodList from '../../Components/FoodList/FoodList';

class Cardapio extends Component {
  constructor(props){
    super(props);
    this.state = {
      sandwichs: [],
      ingredients: '',
      price: 0.0
    }
  }
  get_data = (url) => {
    return fetch(url, {
      credentials: 'same-origin'  
    })
    .then(response => response.json())
    .then(data => {
      return data;
    });
  }
  componentDidMount(){
    let url = 'http://127.0.0.1:8000/api/sandwich/?format=json';
    this.get_data(url).then(data => {
      this.setState({sandwichs:data})
    });
  }
  
  render_menu = () => {
    if (this.state.sandwichs.count !== undefined){
      let sandwichs = Object.keys(this.state.sandwichs).map(i => this.state.sandwichs[i]);
      let listSandwichs = [];
      sandwichs[3].map((element) => {
        let sandwich = {};
        let ingredients = '';
        let price = 0.0;




        let ingredientsPromise = element.ingredient.map(item => {
          let response = this.get_data(item).then(data => {
            ingredients += data["name"] + ', ';
            price += data["price"];
            sandwich.name = element.name;
            sandwich.ingredients = ingredients;
            sandwich.price = price;
            return sandwich;
          });
          return response;
          
        })
        ingredientsPromise[ingredientsPromise.length - 1].then((data) => {
          // console.log(Object.keys(data));
          // console.log(data);

          listSandwichs.push(data);

          // listSandwichs.push({data});
          return listSandwichs;
        });
        console.log(listSandwichs);
        listSandwichs.map(item => {
          console.log('item', item);
        });
        return listSandwichs;
      });
      return listSandwichs;
    }
  }

  render() {

    let menu = this.render_menu();
    if (menu !== undefined){
      return (
        <div className="Cardapio">
          <Header />
          <div className="Container">
            <h1 className="title">Cárdapio</h1>
            <FoodList data={menu}></FoodList>
          </div>
        </div>
      );
    }

    return (
      <div className="Cardapio">
        <Header />
        <div className="Container">
          <h1 className="title">Cárdapio</h1>
          <h3>Carregando...</h3>
        </div>
      </div>
    );

  }
}

export default Cardapio;
