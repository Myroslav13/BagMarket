import { useContext, useState } from 'react'
import type { Bag } from './../interfaces'
import { AppContext } from '../App'

interface ItemProps {
   item: Bag
}

function Item({ item }: ItemProps) {
   const context = useContext(AppContext);
   const styleMode = context?.styleMode;

   return (
      <div className='max-w-[176px]'>
         <img src={item.image} alt={item.title} title={item.title} draggable={false} className='w-[176px] h-[176px] rounded-[4px] bg-white object-contain' />
         <div className='my-[12px]'>
            <h2 className='text-white text-[16px] leading-[24px] tracking-[0px]' style={{ fontWeight: 500 }}>{item.title}</h2>
            <div className='flex gap-[4px] items-center'>
               <p className='price-and-rate'>${item.price}</p>
               <p className='price-and-rate'>•</p>
               <p className='price-and-rate'>{item.rating.rate} ({item.rating.count})</p>
            </div>
         </div>
      </div>
   )
}

export default Item
