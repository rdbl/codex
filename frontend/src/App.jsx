import { useEffect, useState } from 'react'
import './App.css'

const API = 'http://localhost:1337/api'

function App() {
  const [about, setAbout] = useState(null)
  const [works, setWorks] = useState([])
  const [news, setNews] = useState([])
  const [contact, setContact] = useState(null)

  useEffect(() => {
    fetch(`${API}/about?populate=photo`)
      .then(res => res.json())
      .then(data => setAbout(data.data))
      .catch(console.error)
    fetch(`${API}/works?populate=image`)
      .then(res => res.json())
      .then(data => setWorks(data.data))
      .catch(console.error)
    fetch(`${API}/news`)
      .then(res => res.json())
      .then(data => setNews(data.data))
      .catch(console.error)
    fetch(`${API}/contact`)
      .then(res => res.json())
      .then(data => setContact(data.data))
      .catch(console.error)
  }, [])

  return (
    <div className="container">
      <section id="about">
        <h2>About</h2>
        {about && (
          <div>
            <h3>{about.attributes.name}</h3>
            {about.attributes.photo && (
              <img
                src={about.attributes.photo.url}
                alt={about.attributes.name}
                width="200"
              />
            )}
            <p dangerouslySetInnerHTML={{ __html: about.attributes.bio }} />
          </div>
        )}
      </section>
      <section id="gallery">
        <h2>Gallery</h2>
        <div className="grid">
          {works.map(w => (
            <figure key={w.id}>
              {w.attributes.image && (
                <img
                  src={w.attributes.image.url}
                  alt={w.attributes.title}
                  width="200"
                />
              )}
              <figcaption>{w.attributes.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section id="news">
        <h2>Actualité</h2>
        {news.map(n => (
          <article key={n.id}>
            <h3>{n.attributes.title}</h3>
            <small>{n.attributes.event_date}</small>
            <p dangerouslySetInnerHTML={{ __html: n.attributes.content }} />
          </article>
        ))}
      </section>
      <section id="contact">
        <h2>Contact</h2>
        {contact && (
          <ul>
            <li>Email: {contact.attributes.email}</li>
            <li>Phone: {contact.attributes.phone}</li>
            <li>Instagram: {contact.attributes.instagram}</li>
          </ul>
        )}
      </section>
    </div>
  )
}

export default App
