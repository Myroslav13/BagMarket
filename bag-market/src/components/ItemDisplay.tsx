import { useState } from 'react'
import type { Bag } from './../interfaces'
import Item from './Item'

interface ItemDisplayProps {
   itemsToDisplay: Bag[]
}

function ItemDisplay({ itemsToDisplay }: ItemDisplayProps) {
   return (
      <>
         {
            itemsToDisplay.map((item, index) => {
               return (
                  <Item key={index} item={item} />
               );
            })
         }
      </>
   )
}

export default ItemDisplay
