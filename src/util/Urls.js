const baseUrl = 'http://localhost:4000'

function contacts() {
  return `${baseUrl}/contacts`
}

function contact(contactId) {
  return `${baseUrl}/contacts/${contactId}`
}

function contactWithMeetings(contactId) {
  return `${contact(contactId)}?_embed=meetings`
}

function meetings() {
  return `${baseUrl}/meetings`
}

const Urls = {contacts, contact, contactWithMeetings, meetings}

export default Urls