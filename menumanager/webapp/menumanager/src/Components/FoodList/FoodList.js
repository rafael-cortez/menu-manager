import React from 'react';

import './FoodList.css'

class FoodList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            data:this.props.data,
            list: ''
        }
    }
    componentDidMount() {
        let data = this.state.data;
        // console.log('Type', typeof data);
        // console.log('Keys', Object.keys(data));
        // let list = [];
        // data.map((v, i) => {
        //     console.log('valores', v)
        //     // v.forEach(teste => {
        //     //     console.log(teste);
        //     // });
        //     // return v;
        //     // list.push(<li key={i} className="itemName">{v.name}name</li>);
        //     // list.push(<li key={i + 100} className="itemDesc">{v.ingredients}ingredients</li>);
        //     // list.push(<li key={i + 200} className="itemPrice">{v.price}price</li>);
        //     // return list;
        // });
        // this.setState({list:list});
    }


    render(){
        return(
            <div className="FoodList">
                <ul>
                    {this.state.list}
                </ul>
            </div>
        );
    }
}

export default FoodList;