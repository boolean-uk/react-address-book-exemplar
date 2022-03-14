import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { formatDateYmd } from "../util/Dates"

import Spinner from "./Spinner"
import Urls from "../util/Urls"
import FetchOptions from "../util/FetchOptions"

function ContactMeetings() {
  const params = useParams()

  const defaultMeeting = () => {
    return {
      date: formatDateYmd(new Date()),
      time: "12:00",
      location: "Zoom",
      contactId: parseInt(params.id),
    }
  }

  const [contact, setContact] = useState(null)
  const [meetings, setMeetings] = useState([])
  const [newMeeting, setNewMeeting] = useState(defaultMeeting())

  useEffect(() => {
    fetch(Urls.contactWithMeetings(params.id))
      .then((res) => res.json())
      .then((json) => {
        setContact(json)
        setMeetings(json.meetings)
      })
  }, [params.id])

  const onInputChanged = (e) => {
    setNewMeeting({ ...newMeeting, [e.target.name]: e.target.value })
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    fetch(Urls.meetings(), FetchOptions.post(newMeeting))
      .then((res) => res.json())
      .then((json) => {
        setMeetings([...meetings, json])
        setNewMeeting(defaultMeeting())
      })
  }

  if (!contact) {
    return <Spinner />
  }

  return (
    <>
      <h2>
        📆 Meetings with {contact.firstName} {contact.lastName}
      </h2>
      <h3>New Meeting</h3>
      <form className="meeting-form" onSubmit={onFormSubmit}>
        <label>
          Date
          <input type="date" name="date" value={newMeeting.date} onChange={onInputChanged} />
        </label>
        <label>
          Time
          <input type="time" name="time" value={newMeeting.time} onChange={onInputChanged} />
        </label>
        <label>
          Location
          <input type="text" name="location" value={newMeeting.location} onChange={onInputChanged} />
        </label>
        <input type="submit" value="Save" />
      </form>
      <h3>Meetings</h3>
      {meetings.length === 0 && <p>No meetings</p>}
      <ul>
        {meetings.map((meeting, index) => (
          <li key={index}>
            {meeting.time} at {meeting.location} on {meeting.date}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ContactMeetings
