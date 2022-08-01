import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { ContactsForm } from "./ContactsForm";

import { 
  contact, 
  fetchData, 
  apiURL, 
  Paths, 
  UIText
} from '../utils'

export const ContactsAdd = (props) => {

  const { setContacts, contacts } = props

  const [newContact, setNewContact] = useState(contact)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const navigate = useNavigate()

  const addContact = (data) => {

    setContacts([...contacts, data])    
    navigate(Paths.home)
  }

  useEffect(() => {

    if (hasSubmitted) {

      const fetchOptions = {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(newContact)
      }

      const fetchDataParams = {
        url: apiURL,
        options: fetchOptions,
        cb: addContact
      }

      fetchData(fetchDataParams)

    }
  }, [hasSubmitted])

  const handleChange = event => {
    const { name, value } = event.target
    const contactData = {...newContact, [name]: value}
    setNewContact(contactData)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setHasSubmitted(true)
  }

  return (
    <ContactsForm settings={{
      heading: UIText.contactAddTitle, 
      buttonText: UIText.contactAddButton, 
      value: newContact, 
      handleChange: handleChange, 
      handleSubmit: handleSubmit
    }} />
  )
}
