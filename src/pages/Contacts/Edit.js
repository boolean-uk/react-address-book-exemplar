import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import ContactForm from '../../components/ContactForm'
import initialState from '../../components/ContactForm/initialState'

function ContactsEdit({ setContacts, contacts }) {
  const [contactData, setContactData] = useState(initialState)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(async () => {
    const res = await fetch(`http://localhost:4000/contacts/${id}`)
    const data = await res.json()
    setContactData(data)
  }, [])

  const handleChange = event => {
    const { name, value } = event.target
    const newContactData = {
      ...contactData,
      [name]: value
    }
    setContactData(newContactData)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const res = await fetch(`http://localhost:4000/contacts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactData)
    })
    const data = await res.json()
    const contactsWithoutUpdated = contacts.filter(contact => contact.id !== Number(id))
    setContacts([...contactsWithoutUpdated, data])
    navigate(`/contacts/${id}`)
  }

  return (
    <ContactForm
      type={'Update'}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      contactData={contactData}
    />
  )
}

export default ContactsEdit
