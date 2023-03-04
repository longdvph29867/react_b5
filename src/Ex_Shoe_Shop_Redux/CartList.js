import React, { Component } from 'react'
import { connect } from 'react-redux'

class CartList extends Component {
    renderTbody = () => {
        return this.props.cartList.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><img style={{width: 80}} src={item.image} alt="" /></td>
              <td>
                <button onClick={() => {this.props.handleChangeQuantity(item.id, -1)}} className='btn btn-dark'>-</button>
                <strong className='px-2'>{item.soLuong}</strong>
                <button onClick={() => {this.props.handleChangeQuantity(item.id, 1)}} className='btn btn-warning'>+</button>
              </td>
              <td><strong>{item.price * item.soLuong}</strong></td>
              <td>
                <button onClick={() => {this.props.handDelete(item.id)}} className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          )
        })
      }

    
  render() {
    return (
      <div>
        <h3>Giỏ hàng</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Img</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderTbody()}
          </tbody>
        </table>
      </div>
    )
  }
}


let mapStateToProps = (state) => {
    return {
        cartList: state.shoeReducer.cart
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        handleChangeQuantity: (id, luaChon) => {
            dispatch({
                type: 'CHANE_QUANTITY',
                payload: {
                    id : id,
                    luaChon: luaChon
                }
            })
        },
        handDelete: (id) => [
            dispatch({
                type: 'DELETE',
                payload: id
            })
        ]
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartList);
