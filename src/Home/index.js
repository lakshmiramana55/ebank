import Cookie from 'js-cookie'

import './index.css'

const Home = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }
  return (
    <div className="mains-container">
      <div className="navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png "
          alt="website login"
        />
        <button type="button" className="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
      <h1 className="head">Your Flexibility, Our Excellence</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png "
        alt="digital card"
        className="card"
      />
    </div>
  )
}
export default Home
