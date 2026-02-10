import { useContext } from 'react'
import type { Commodity } from './../interfaces'
import Item from './Item'
import { AppContext } from '../App'

interface ItemDisplayProps {
   itemsToDisplay: Commodity[]
}

function ItemDisplay({ itemsToDisplay }: ItemDisplayProps) {
   const context = useContext(AppContext);
   const styleMode = context?.styleMode;
   
   return (
      <div className={`min-h-screen m-0 p-0 ${styleMode === 0 ? 'bg-[#fffbeb]' : 'bg-[#122117]'}`}>
         <div className='max-w-[960px] w-full mx-auto py-[20px]'>
            <div className='div-headline'>
               <h1 className={`style-name ${styleMode === 0 ? 'text-black' : 'text-white'}`} style={{ fontWeight: 700 }}>{styleMode === 0 ? "Classic Blue" : "Modern Emerald"}</h1>
            </div>

            <div className={`p-[16px] ${styleMode === 0 ? 'div-grid' : 'div-flex'}`}>
               {
                  itemsToDisplay.map((itemData, index) => {
                     return (
                        <Item key={ index } itemData={ itemData } />
                     );
                  })
               }
            </div>
         </div>
      </div>
   )
}

export default ItemDisplay
