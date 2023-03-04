import React, { Component } from 'react'
import { connect } from 'react-redux'

class DetailShoe extends Component {
    rendertbody = () => {
        let newShoe = {...this.props.shoe};
        delete newShoe.name;
        delete newShoe.image;
        return Object.keys(newShoe).map((key) => {
            return (
                <tr key={key}>
                    <th>{key}</th>
                    <td>{newShoe[key]}</td>
                </tr>
            )
        })
    }

  render() {
      let {name, image} = this.props.shoe;
    return (
      <div>
        <div className="row">
          <div className="col-4">
            <div className="card text-center">
            <img className="card-img-top" src={image} alt='' />
              <div className="card-body">
                <h4 className="card-title">{name}</h4>
              </div>
            </div>
            <button onClick={() => {this.props.handleAddToCart(this.props.shoe)}} className="btn btn-success mt-3">Add to Cart</button>
          </div>
          <div className="col-8">
            <table className='table text-left'>
              <thead>
                <tr>
                  <th colSpan={2}>Thông tin chi tiết</th>
                </tr>
              </thead>
              <tbody>
                {this.rendertbody()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
    return {
        shoe: state.shoeReducer.detail
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        handleAddToCart: (shoe) => {
            dispatch({
                type: 'ADD_TO_CART',
                payload: shoe
            })
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailShoe);

