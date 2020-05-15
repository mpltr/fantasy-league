import React, {Component, useState} from 'react'
import { withRedux } from '../lib/redux'

const IndexPage = (props) => {
  return ( 
    'TODO: Home page layout. API required to access tournaments'
  );
}

// IndexPage.getInitialProps = ({ reduxStore }) => {
//   // Tick the time once, so we'll have a
//   // valid time before first render
//   return {}
// }

export default withRedux(IndexPage)
