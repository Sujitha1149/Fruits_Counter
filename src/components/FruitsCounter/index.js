import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onMango = () =>
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))

  onBanana = () =>
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="bg-card-cont">
          <h1>{`Bob ate ${mangoCount} mangoes ${bananaCount} bananas`}</h1>
          <div className="eat-fruit-cont">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="eaf-fruit-img"
              />
              <div className="btn-cont">
                <button type="button" className="button" onClick={this.onMango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="eaf-fruit-img"
              />
              <div className="btn-cont">
                <button
                  type="button"
                  className="button"
                  onClick={this.onBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
