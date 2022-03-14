import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Urls from "../util/Urls"
import Spinner from "./Spinner" 

function ContactsView() {
  const [contact, setContact] = useState(false)

  const params = useParams()
  
  useEffect(() => {
    fetch(Urls.contact(params.id))
      .then(res => res.json())
      .then(json => setContact(json))
  }, [params.id])

  if (!contact) {
    return <Spinner />
  }

  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <h3>{contact.type == 'work' ? <span>💻</span> : <span>🍻</span> } {contact.type}</h3>
      <p>{contact.street} {contact.city}</p>
      <p>{contact.email}</p>
      <p>{contact.linkedIn}</p>
      <p>{contact.twitter}</p>
      <Link to={`/contacts/${params.id}/meetings`}>📅 View Meetings</Link>
    </div>
  )
}

export default ContactsView