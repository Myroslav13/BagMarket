import { useState } from 'react'
import type { Bag } from './../interfaces'

interface ItemProps {
   item: Bag
}

function Item({ item }: ItemProps) {
   return (
      <div>
         <img src={item.image} alt={item.title} />
         <h2>{item.title}</h2>
         <div>
            <p>${item.price}</p>
            <p>{item.rating.rate} ({item.rating.count})</p>
         </div>
      </div>
   )
}

export default Item
