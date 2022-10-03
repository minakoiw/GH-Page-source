import * as React from "react"
import { Link } from "gatsby"
import {
  notFoundDiv,
  link
} from '../css/404.module.css';

// markup
const NotFoundPage = () => {
  return (
    <div id={notFoundDiv}>
      <title>Page Not found</title>
      <h1>Page Not Found</h1>
      <p>We're so sorry (not really) that we can't find the page you're looking for. Please start at the beginning of the website.</p>
      <Link to="/" className={link}>Back to the home page</Link>
    </div>
  )
}

export default NotFoundPage
