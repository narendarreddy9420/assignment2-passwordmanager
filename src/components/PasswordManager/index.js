import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordList: [],
    search: '',
    isToggle: false,
  }

  onWebsite = event => {
    this.setState({website: event.target.value})
  }
  onUsername = () => {
    this.setState({username: event.target.value})
  }
  onPassword = () => {
    this.setState({password: event.target.value})
  }
  onDelete = id => {
    this.setState({passwordList: passwordList.filter(each => each.id !== id)})
  }
  onSearch = event => {
    this.setState({search: event.target.value})
  }

  getResults = () => {
    const {search} = this.state
    const result = passwordList.filter(
      each.websiteName.toLowerCase().includes(search.toLowerCase()),
    )
    return result
  }
  onClickBox = () => {
    this.setState(prevState => ({isToggle: !prevState.isToggle}))
  }
  onSubmitForm = () => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPassword = {
      id: v4(),
      websiteName: website,
      userName: username,
      passwordName: password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      website: '',
      password: '',
      username: '',
    }))
  }
  render() {
    const {website, username, password, passwordList} = this.state
    const passwordLength = passwordList.Length
    const result1 = this.getResults()
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />

        <div>
          <form onSubmit={this.onSubmitForm}>
            <h1>Add New Password</h1>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                type="text"
                onChange={this.onWebsite}
                placeholder="Enter Website"
              />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                type="text"
                onChange={this.onUsername}
                placeholder="Enter Username"
              />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                type="text"
                onChange={this.onPassword}
                placeholder="Enter Password"
              />
            </div>
            <button type="button">Add</button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </div>
        <hr />
        <div>
          <h1>Your Passwords</h1>
          <p>{passwordLength}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
          />
          <input
            type="text"
            placeholder="search"
            onChange={this.onSearch}
            value={result1}
          />
        </div>

        <input type="checkBox" id="checkBox" onClick={this.onClickBox} />
        <label htmlFor={checkBox}>Show Passwords</label>
        <ul>
          passwordList.map(each=>
          <passwordDetails
            eachDetails={each}
            key={each.id}
            onDelete={this.onDelete}
          />
          )
        </ul>
        <p>
          {passwordListLength && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
            />
          )}
        </p>
      </div>
    )
  }
}

export default PasswordManager
