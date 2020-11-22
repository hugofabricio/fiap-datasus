import React from 'react'

import Seo from '@helpers/Seo'
import DefaultLayout from '@templates/Default'
import ErrorView from '@views/ErrorView'

const ErrorPage = () => (
  <DefaultLayout>
    <Seo title="Dashboard" />
    <ErrorView />
  </DefaultLayout>
)

export default ErrorPage
