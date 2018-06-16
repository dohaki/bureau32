import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'white'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1280,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
      }}
    >
      <p style={{
        margin: 0,
        paddingRight: '1.75rem'
      }}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          bureau32&nbsp;&nbsp;&nbsp;&nbsp;office for architectural visualisation
        </Link>
      </p>
      <p style={{
        margin: 0,
        paddingLeft: '1rem'
      }}>
        <Link
          to="/"
          activeStyle={{
            textDecoration: 'underline'
          }}
          style={{
            textDecoration: 'none',
          }}
        >
          images
        </Link>
      </p>
      <p style={{
        margin: 0,
        paddingLeft: '1rem'
      }}>
        <Link
          to="/about"
          activeStyle={{
            textDecoration: 'underline'
          }}
          style={{
            textDecoration: 'none',
          }}
        >
          about
        </Link>
      </p>
      <p style={{
        margin: 0,
        paddingLeft: '1rem'
      }}>
        <Link
          to="/contact"
          activeStyle={{
            textDecoration: 'underline'
          }}
          style={{
            textDecoration: 'none',
          }}
        >
          contact
        </Link>
      </p>
      <p style={{
        margin: 0,
        paddingLeft: '1rem'
      }}>
        <Link
          to="/imprint"
          activeStyle={{
            textDecoration: 'underline'
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
