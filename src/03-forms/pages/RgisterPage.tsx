import '../styles/styles.css';

import React from 'react'

export const RegisterPages = () => {
  return (
    <div>
        <h1>Register page</h1>

        <form>
            <input type="text" placeholder="Name" />
            <input type="enail" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Repite password" />

            <button type='submit'> Create </button>
        </form>


    </div>
  )
}

