import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDisplay from './components/ItemDisplay'
import type { Bag } from './interfaces'
import axios from 'axios'

function App() {
   const [styleMode, setStyleMode] = useState<0 | 1>(Math.random() > 0.5 ? 1 : 0);
   const [itemsToDisplay, setItemsToDisplay] = useState<Bag[]>([]);
   const urlToFetch = "https://fakestoreapi.com/products";

   async function dataFetching(url: string) {
      try {
         const response = await axios.get(url);
         setItemsToDisplay(response.data);
         console.log(response.data);
      } catch (error) {
         console.error("Error fetching data:", error);
      }
   }

   useEffect(() => {
      dataFetching(urlToFetch);
   }, []);

   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/store" element={<ItemDisplay itemsToDisplay={ itemsToDisplay } />}></Route>
            </Routes>
         </BrowserRouter>
      </>
   )
}

export default App
