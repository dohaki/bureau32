import React from 'react'

const ContactPage = () => (
  <div
    style={{
      height: '100%',
    }}
  >
    <div
      style={{
        maxWidth: '40rem',
        height: 'auto',
        display: 'block',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '6.3rem',
        marginBottom: 'auto',
        textAlign: 'center',
      }}
    >
      <p>Angaben gemäß § 5 TMG</p>
      <div>
        Sebastian Georgescu<br />
        Weserstr. 32<br />
        12045 Berlin
      </div>
      <p />
      <div>
        +49 173 8597837<br />
        infor@bureau32.de
      </div>
      <p>Steuer-ID: 16/304/02106</p>
      <p>Urheberrecht:</p>
      <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </p>
    </div>
  </div>
)

export default ContactPage
