import React from 'react'

const Footer = () => {
  const footerStyle = {
    color: '#fff',
    backgroundColor: '#3f51b5',
    width: '100%',
    padding: '3em',
    fontFamily: 'Roboto'
  }
  return (
    <div style={footerStyle}>
      <p>The JRE-API and this website was created by Tim Clay.</p>
      <p>
        This website and the JRE-API is not affiliated with Joe Rogan and/or the
        Joe Rogan Experience Podcast.
      </p>
      <p>
        All data show here and by the JRE-API is publicly available at
        http://podcasts.joerogan.net/.
      </p>
    </div>
  )
}

export default Footer
