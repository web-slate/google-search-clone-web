import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// Block Components.
import { PageLoader } from '@/blocks'

// Utils.
import { RoutePaths } from '@/utils'

const HomeModule = React.lazy(() =>
  import(/* webpackChunkName: "modules/Home" */ './modules/Home')
)

const SearchResultsModule = React.lazy(() =>
  import(/* webpackChunkName: "modules/SearchResultsModule" */ './modules/SearchResults')
)

const NotFoundModule = React.lazy(() =>
  import(/* webpackChunkName: "modules/NotFound" */ './modules/NotFound')
)

const RoutesComponent = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path={RoutePaths.Home} exact element={<HomeModule/>} />
        <Route path={RoutePaths.SearchResults} element={<SearchResultsModule />} />
        <Route path="*" element={<NotFoundModule />} />
      </Routes>
    </Suspense>
  )
}

export default RoutesComponent
