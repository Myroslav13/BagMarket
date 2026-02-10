import { createContext, useContext, useState } from 'react'
import type { Bag } from './../interfaces'
import { AppContext } from '../App'

function NotFound() {
   const context = useContext(AppContext);
   const styleMode = context?.styleMode;

   return (
      <div>
         
      </div>
   )
}

export default NotFound
