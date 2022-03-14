import { useState } from "react"
import { useNavigate } from "react-router-dom";

import Urls from "../util/Urls"
import FetchOptions from "../util/FetchOptions"
import ContactForm from './ContactForm'

function ContactsAdd(props) {
  const { setContacts, contacts } = props

  const defaultContact = () => {
    return {
      type: "work",
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      email: "",
      linkedIn :"",
      twitter: ""
    }
  }

  const [newContact, setNewContact] = useState(defaultContact())
  const navigate = useNavigate();
  
  const addNewContact = () => {
    fetch(Urls.contacts(), FetchOptions.post(newContact))
      .then(res => res.json())
      .then(json => {
        setContacts([...contacts, json])
        setNewContact(defaultContact())
        navigate("/")
      })
  }

  return <ContactForm
    contact={newContact}
    setContact={setNewContact}
    onSubmit={addNewContact}
    actionLabel="Create" />
}

export default ContactsAdd
