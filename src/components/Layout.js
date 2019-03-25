import React from 'react'
import Helmet from 'react-helmet'

import Header from './Header'
import '../styles/index.css'

const Layout = ({ children, title }) => (
  <div style={{ height: '100%', paddingLeft: '15px', paddingRight: '15px' }}>
    <Helmet
      title={title || 'bureau32'}
      meta={[
        {
          name: 'description',
          content: 'Office for architectural visualization.',
        },
        { name: 'keywords', content: 'architecture, sebastian, georgescu' },
      ]}
    />
    <Header />
    {children}
  </div>
)

export default Layout
