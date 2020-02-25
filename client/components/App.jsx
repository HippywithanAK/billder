import React from 'react'

import Header from './Header'
import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'

const App = () => (
  <div className='app'>\
    <Header />
    <Blurb />
    <ErrorMessage />
    <LoadSubreddit>
      <WaitIndicator />
    </LoadSubreddit>
    <SubredditList />
  </div>
)

export default App
