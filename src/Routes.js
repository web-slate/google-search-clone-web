import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// Block Components.
import { PageLoader } from '@/blocks'

// Utils.
import { RoutePaths } from '@/utils'

const SignInModule = React.lazy(() =>
  import(/* webpackChunkName: "modules/SignIn" */ './modules/SignIn')
)

const DashBoardModule = React.lazy(() =>
  import(/* webpackChunkName: "modules/Dashboard" */ './modules/Dashboard')
)

const NotFoundModule = React.lazy(() =>
  import(/* webpackChunkName: "modules/NotFound" */ './modules/NotFound')
)

const RoutesComponent = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path={RoutePaths.SignIn} exact element={<SignInModule />} />
        <Route path={RoutePaths.DashBoard} element={<DashBoardModule />} />
        <Route path="*" element={<NotFoundModule />} />
      </Routes>
    </Suspense>
  )
}

export default RoutesComponent
