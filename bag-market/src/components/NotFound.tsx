import { useContext } from 'react'
import { AppContext } from '../App'

function NotFound() {
   const context = useContext(AppContext);
   const styleMode = context?.styleMode;

   return (
      <div className={`h-screen m-0 p-0 ${styleMode === 0 ? 'bg-[#fffbeb]' : 'bg-[#122117]'}`}>
         <div className='flex items-center justify-center h-full'>
            <h1 className={`style-name ${styleMode === 0 ? 'text-black' : 'text-white'}`} style={{ fontWeight: 700 }}>404 - Not Found</h1>
         </div>
      </div>
   )
}

export default NotFound
