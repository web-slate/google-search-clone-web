import React, { useState, useEffect } from 'react'
import { IntlProvider } from 'react-intl'
import axios from 'axios'

const fetchTranslations = async (lang) => {
  return await axios.get(`translations/${lang}.json`)
}

const withI18n = (Component) => (props) => {
  const [messages, setMessages] = useState({})
  const locale = 'en'

  useEffect(() => {
    fetchTranslations(locale).then((response) => {
      setMessages(response.data)
    })
  }, [])

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={locale}
      messages={messages}
      onError={() => {}}
    >
      <Component {...props} />
    </IntlProvider>
  )
}

export default withI18n
