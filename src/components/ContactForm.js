function ContactForm(props) {
  
  const { contact, setContact, onSubmit, actionLabel } = props

  const onFormSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }

  const onInputChanged = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  return (
    <form className="form-stack contact-form" onSubmit={onFormSubmit}>
      <h2>{actionLabel} Contact</h2>

      <label htmlFor="type">Type</label>
      <select id="type" name="type" onChange={onInputChanged} value={contact.type}>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>

      <label htmlFor="firstName">First Name</label>
      <input onChange={onInputChanged} value={contact.firstName}
        id="firstName" name="firstName" type="text" required />

      <label htmlFor="lastName">Last Name:</label>
      <input onChange={onInputChanged} value={contact.lastName}
        id="lastName" name="lastName" type="text" required/>

      <label htmlFor="street">Street:</label>
      <input onChange={onInputChanged} value={contact.street}
        id="street" name="street" type="text" required/>

      <label htmlFor="city">City:</label>
      <input onChange={onInputChanged} value={contact.city}
        id="city" name="city" type="text" required/>

      <h3>Social</h3>
      <label htmlFor="email">Email:</label>
      <input onChange={onInputChanged} value={contact.email}
        id="email" name="email" type="email"/>

      <label htmlFor="linkedIn">LinkedIn:</label>
      <input onChange={onInputChanged} value={contact.linkedIn}
        id="linkedIn" name="linkedIn" type="text"/>

      <label htmlFor="email">Twitter:</label>
      <input onChange={onInputChanged} value={contact.twitter}
        id="twitter" name="twitter" type="text"/>

      <div className="actions-section">
        <button className="button blue" type="submit">
          {actionLabel}
        </button>
      </div>
    </form>
  )
}

export default ContactForm