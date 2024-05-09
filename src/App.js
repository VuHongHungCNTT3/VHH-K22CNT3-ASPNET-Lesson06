import React, { Component } from 'react'
import VhhProductlist from './component/VhhProductlist';
import VhhProductAdd from './component/VhhProductAdd';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products : [
        { title: 'Vũ Hồng Hưng', id: 2210900104 , status:1 },
        { title: 'Cabbage', id: 1 , status:1 },
        { title: 'Garlic', id: 2 , status:0 },
        { title: 'Apple', id: 3 , status:0 },
        { title: 'Samsung', id: 4 , status:1 },
      ]
    }
  }
  lvhHanldSubmit=(param)=>{
    console.log("App:",param);
    //thêm vào bảng dữ liệu product
    let {products}=this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container'>
          <h1>Vũ Hồng Hưng -Event Form - Render Data</h1>
          <hr/>
          {/* Corrected prop name from renderProduct to renderProducts */}
          <VhhProductlist renderProducts={this.state.products}/>
          <hr/>
          <VhhProductAdd onSubmit={'this.lvhHanldSubmit'}/>
      </div>
    );
  }
}
export default  App;
