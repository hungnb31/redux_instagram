import React from 'react'
import { Link } from 'react-router'

const Main = React.createElement({
   render() {
      return (
         <div>
            <h1>
               <Link to="/">Reduxstagram</Link>
            </h1>
         </div>
      )
   }
})

export default Main