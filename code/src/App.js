
import React, { useState, useEffect } from 'react';

import ThoughtForm from 'components/ThoughtForm'
import ThoughtItem from 'components/ThoughtItem'

import { API_URL, LIKES_URL } from './utilis/url'

export const App = () => {
  const [thought, setThought] = useState([])
  const [newThought, setNewThought] = useState('')
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    fetchThought()
  }, [])

  const fetchThought = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThought(data))
      .finally(() => setLoading(false))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    }

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        fetchThought(setNewThought(""))
      })
  }

  
  const handleIncreaseLikes = (thoughtId) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    }
   
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, options)
    .then(res => res.json())
    .then(() => fetchThought())
  
    }
    
  return (
    <main>

      {loading}

      <ThoughtForm
        newThought={newThought}
        setNewThought={setNewThought}
        onFormSubmit={handleFormSubmit}
      />

      {thought.map((thought) => (
        <ThoughtItem
          key={thought._id}
          thought={thought}
          newThought={newThought}
          onIncreaseLikes={handleIncreaseLikes}

        />
      ))}

    </main>
  )
}
