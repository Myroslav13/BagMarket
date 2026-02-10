import { useContext } from 'react'
import type { Commodity } from './../interfaces'
import { AppContext } from '../App'
import { BsFillStarFill, BsCartFill } from "react-icons/bs";

interface ItemProps {
   itemData: Commodity
}

function Item({ itemData }: ItemProps) {
   const context = useContext(AppContext);
   const styleMode = context?.styleMode;
   const width = styleMode === 0 ? '240px' : '176px';

   return (
      <div className={styleMode === 0 ? 'bg-white border-3 border-black relative shadow-[4px_4px_0_0_#000]' : 'w-[176px]'}>
         <img src={ itemData.image } alt={ itemData.title } title={ itemData.title } draggable={ false } className={`item-img w-full p-3 ${styleMode === 0 ? 'border-b-3 border-black' : 'rounded-[4px]'}`} style={{ height: width }} />
         
         { styleMode === 0 ?
         <div className='p-[16px] pb-[74px]'>
            <div className='mb-[12px]'>
               <h2 className='item-name text-black' style={{ fontWeight: 500 }}>{ itemData.title }</h2>
               <div className='div-price-and-rate-0'>
                  <p className='text-black'>${ itemData.price }</p>

                  <div className='div-rating'>
                     <BsFillStarFill size={8}/>
                     <p className='text-[10px]'>{ itemData.rating.rate }</p>
                  </div>
               </div>
            </div>
            <p className='item-description'>{ itemData.description }</p>
            <button className='btn-add-to-card'>Add to cart <BsCartFill size={16} /></button>
         </div>

         :

         <div className='my-[12px]'>
            <h2 className='item-name text-white' style={{ fontWeight: 500 }}>{ itemData.title }</h2>
            <div className='div-price-and-rate-1'>
               <p>${ itemData.price }</p>
               <p>•</p>
               <p>{ itemData.rating.rate } ({ itemData.rating.count })</p>
            </div>
         </div>
         }
      </div>
   )
}

export default Item
