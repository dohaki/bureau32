import React from 'react'

import titleImg from '../img/inst.png'

const IndexPage = () => (
  <div
    style={{
      height: '100%',
      display: 'flex',
    }}
  >
    <img
      src={titleImg}
      alt="collage-with-vitrine"
      style={{
        maxWidth: '40rem',
        height: 'auto',
        display: 'block',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '6.3rem',
        marginBottom: 'auto',
      }}
    />
  </div>
)

export default IndexPage
