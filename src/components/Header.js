import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <div style={{ flex: 1 }}>
    <div
      style={{
        paddingTop: '1.5rem',
        paddingBottom: '0.7rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          margin: 0,
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          bureau32
        </Link>
      </p>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          margin: 0,
        }}
      >
        <Link
          to="/"
          activeStyle={{
            textDecoration: 'underline',
          }}
          style={{
            textDecoration: 'none',
          }}
        >
          images
        </Link>
      </p>
      <p
        style={{
          margin: 0,
          paddingLeft: '1rem',
        }}
      >
        <Link
          to="/about"
          activeStyle={{
            textDecoration: 'underline',
          }}
          style={{
            textDecoration: 'none',
          }}
        >
          about
        </Link>
      </p>
      <p
        style={{
          margin: 0,
          paddingLeft: '1rem',
        }}
      >
        <Link
          to="/contact"
          activeStyle={{
            textDecoration: 'underline',
          }}
          style={{
            textDecoration: 'none',
          }}
        >
          contact
        </Link>
      </p>
      <p
        style={{
          margin: 0,
          paddingLeft: '1rem',
        }}
      >
        <Link
          to="/imprint"
          activeStyle={{
            textDecoration: 'underline',
          }}
          style={{
            textDecoration: 'none',
          }}
        >
          imprint
        </Link>
      </p>
    </div>
  </div>
)

export default Header
