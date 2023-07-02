import { buyIcecream } from '../redux'
import { connect } from 'react-redux'
function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of icecream Container - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIcecream}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
