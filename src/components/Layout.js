import React from 'react'
import Helmet from 'react-helmet'

import Header from './Header'
import '../styles/index.css'

const Layout = ({ children, title }) => (
  <div>
    <Helmet
      title={title || 'bureau32'}
      meta={[
        { name: 'description', content: 'Office for architectural visualization.' },
        { name: 'keywords', content: 'architecture, sebastian, georgescu' },
      ]}
    />
    <Header />
    <div>
      {children}
    </div>
  </div>
)

export default Layout

