import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import Urls from "../util/Urls"
import FetchOptions from "../util/FetchOptions"
import ContactForm from "./ContactForm"
import Spinner from "./Spinner"

function ContactsEdit(props) {
  const { setContacts, contacts } = props

  const [contact, setContact] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    setIsLoading(true)
    fetch(Urls.contact(params.id))
      .then((res) => res.json())
      .then((loadedContact) => {
        setContact(loadedContact)
        setIsLoading(false)
      })
  }, [params.id])

  const updateContact = () => {
    fetch(Urls.contact(params.id), FetchOptions.put(contact))
      .then((res) => res.json())
      .then((updated) => {
        setContacts(contacts.map((existing) => (existing.id === updated.id ? updated : existing)))
        navigate("/")
      })
  }

  if (isLoading) {
    return <Spinner />
  }

  return <ContactForm contact={contact} setContact={setContact} onSubmit={updateContact} actionLabel="Update" />
}

export default ContactsEdit
