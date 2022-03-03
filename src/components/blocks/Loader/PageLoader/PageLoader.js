import React, { Fragment } from 'react'

// UI Components.
import { Spinner } from '@/ui'

export default function PageLoader({ loading }) {
  // Add your business logic with store condition.
  return <Fragment>{loading && <Spinner />}</Fragment>
}
