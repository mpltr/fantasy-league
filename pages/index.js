import React, {Component, useState} from 'react'
import { withRedux } from '../lib/redux'

const IndexPage = (props) => {
  return ( 
    'Home page'
  );
}

// IndexPage.getInitialProps = ({ reduxStore }) => {
//   // Tick the time once, so we'll have a
//   // valid time before first render
//   return {}
// }

export default withRedux(IndexPage)
