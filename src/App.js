import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"

import ContactsList from "./components/ContactsList"
import ContactsAdd from "./components/ContactsAdd"
import ContactsEdit from "./components/ContactsEdit"
import ContactsView from "./components/ContactsView"
import ContactMeetings from "./components/ContactMeetings"

import Urls from "./util/Urls"

import "./styles/styles.css"

export default function App() {
  const [contacts, setContacts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect( () => {
    setIsLoading(true)
    fetch(Urls.contacts())
      .then(res => res.json())
      .then(json => {
        setContacts(json)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          <li><Link to="/">Contacts List</Link></li>
          <li><Link to="/contacts/new">Add New Contact</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={
            <ContactsList contacts={contacts} setContacts={setContacts} isLoading={isLoading} />
          }/>
          <Route path="/contacts/new" element={
            <ContactsAdd contacts={contacts} setContacts={setContacts} />
          }/>
          <Route path="/contacts/:id" element={
            <ContactsView />
          }/>
          <Route path="/contacts/:id/edit" element={
            <ContactsEdit contacts={contacts} setContacts={setContacts} />
          }/>
          <Route path="/contacts/:id/meetings" element={
            <ContactMeetings />
          }/>
        </Routes>
      </main>
    </>
  )
}
