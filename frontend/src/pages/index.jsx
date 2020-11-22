import React from 'react'

import Seo from '@helpers/Seo'
import DefaultLayout from '@templates/Default'
import HomeView from '@views/HomeView'

const IndexPage = () => (
  <DefaultLayout>
    <Seo title="Dashboard" />
    <HomeView />
  </DefaultLayout>
)

export default IndexPage
