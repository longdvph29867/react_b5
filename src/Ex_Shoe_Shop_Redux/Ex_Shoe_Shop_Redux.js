import React, { Component } from 'react'
import CartList from './CartList'
import DetailShoe from './DetailShoe'
import ShoeList from './ShoeList'

export default class Ex_Shoe_Shop_Redux extends Component {
  render() {
    return (
      <div>
        <h2>Ex_Shoe_Shop_Redux</h2>
        <div className="row ml-3 mr-3">
          <div className="col-5">
            <ShoeList/>
          </div>
          <div className="col-7">
            <DetailShoe/>
            <CartList/>
          </div>
        </div>
      </div>
    )
  }
}
