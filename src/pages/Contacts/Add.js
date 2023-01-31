import { useState } from "react"
import { useNavigate } from "react-router-dom";
import ContactForm from '../../components/ContactForm'
import initialState from '../../components/ContactForm/initialState'

function ContactsAdd({ setContacts, contacts }) {
  const [contactData, setContactData] = useState(initialState)
  const navigate = useNavigate()

  const handleChange = event => {
    const { name, value } = event.target
    const newContactData = {...contactData}
    newContactData[`${name}`] = value
    setContactData(newContactData)
  }

  const handleSubmit = async event => {
    event.preventDefault()


    const res = await fetch('http://localhost:4000/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactData)
    })
    const data = await res.json()
    setContacts([...contacts, data])
    navigate('/')
  }

  return (
    <ContactForm
      type={'Create'}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      contactData={contactData}
    />
  )
}

export default ContactsAdd
