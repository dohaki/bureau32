import React from 'react'

import Layout from '../components/Layout'
import collage from '../img/collage_with_vitrine.jpg'

const IndexPage = () => (
  <Layout>
    <div>
      <img
        src={collage}
        alt="collage-with-vitrine"
        style={{
          width: '41%',
          height: 'auto',
          zIndex: '-100',
          position: 'fixed',
          bottom: '0',
          left: '0'
        }}
      />
    </div>
  </Layout>
)

export default IndexPage
