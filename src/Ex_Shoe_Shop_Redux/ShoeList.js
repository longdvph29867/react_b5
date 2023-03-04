import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemShoe from './ItemShoe'

class ShoeList extends Component {
    renderShoeList = () => {
        return this.props.listShoe.map((item, index) => {
          return (
            <ItemShoe item = {item} key={index}/>
          )
        })
      }

  render() {
    return (
      <div className='row'>
        {this.renderShoeList()}
      </div>
    )
  }
}

let mapStateToProps = (state) => {
    return {
        listShoe: state.shoeReducer.listShoe
    }
}

export default connect(mapStateToProps)(ShoeList);
