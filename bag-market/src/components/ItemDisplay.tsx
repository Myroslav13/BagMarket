import { useContext, useState } from 'react'
import type { Bag } from './../interfaces'
import Item from './Item'
import { AppContext } from '../App'

interface ItemDisplayProps {
   itemsToDisplay: Bag[]
}

function ItemDisplay({ itemsToDisplay }: ItemDisplayProps) {
   const context = useContext(AppContext);
   const styleMode = context?.styleMode;
   
   return (
      <div className='bg-[#122117] min-h-screen m-0'>
         <div className='w-[960px] mx-auto'>
            <div className='h-[72px] w-full flex items-center mt-[20px] p-[16px]'>
               <h1 className='m-[0px] text-[32px] leading-[40px] tracking-[0px]' style={{ fontFamily: 'Be Vietnam Pro', fontWeight: 700 }}>{styleMode === 0 ? "Classic Blue" : "Modern Emerald"}</h1>
            </div>

            <div className='flex flex-wrap gap-[12px] p-[16px]'>
               {
                  itemsToDisplay.map((item, index) => {
                     return (
                        <Item key={index} item={item} />
                     );
                  })
               }
            </div>
         </div>
      </div>
   )
}

export default ItemDisplay
