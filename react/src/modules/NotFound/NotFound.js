import React from 'react'
import { useNavigate } from 'react-router-dom'

// i18n
import { useI18n } from '@/i18n'


// Utils.
import { RoutePaths } from '@/utils'

const NotFound = () => {
  const { formatMessage } = useI18n()
  const navigate = useNavigate();

  return (
    <section>
      <div>
        <span></span>
        <h1>{formatMessage({id: '404pagenotfound'})} </h1>
        <button onClick={() => navigate(RoutePaths.SignIn)}>{formatMessage({id: 'goback'})}</button>
      </div>
    </section>
  )
}

export default NotFound
