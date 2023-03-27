const passwordDetails = props => {
  const {eachDetails, onDelete} = props
  const {id, websiteName, userName, passwordName} = eachDetails

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li>
      <div>
        <p>{websiteName}</p>
        <p>{userName}</p>
        <p>{passwordName}</p>
      </div>
      <button onClick={onClickDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default passwordDetails
