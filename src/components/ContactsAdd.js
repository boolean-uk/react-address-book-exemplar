import { useState } from "react"
import { useNavigate } from "react-router-dom";

const initialNewContact = {
  firstName: '',
  lastName: '',
  street: '',
  city: '',
}

function ContactsAdd(props) {
  const { setContacts, contacts } = props
  const [newContact, setNewContact] = useState(initialNewContact)

  const onFormSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:4000/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact)
    }).then(res => res.json())
    .then((result) => {
      setContacts([...contacts, result])
      event.target.reset()
      setNewContact(initialNewContact)
    })
  }

  const updateContact = (property, value) => {
    setNewContact(prev => {
      const updated = {...prev}
      updated[property] = value
      return updated
    })
  }

  return (
    <form className="form-stack contact-form" onSubmit={onFormSubmit}>
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" required onChange={(e) => updateContact('firstName', e.target.value)} />

      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" name="lastName" type="text" required onChange={(e) => updateContact('lastName', e.target.value)}/>

      <label htmlFor="street">Street:</label>
      <input id="street" name="street" type="text" required onChange={(e) => updateContact('street', e.target.value)}/>

      <label htmlFor="city">City:</label>
      <input id="city" name="city" type="text" required onChange={(e) => updateContact('city', e.target.value)}/>

      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  )
}

export default ContactsAdd
