import { useEffect, useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDisplay from './components/ItemDisplay'
import NotFound from './components/NotFound'
import type { Commodity } from './interfaces'
import axios from 'axios'

export interface AppContextType {
   styleMode: 0 | 1;
   itemsToDisplay: Commodity[];
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

function App() {
   const [styleMode, setStyleMode] = useState<0 | 1>(Math.random() > 0.5 ? 1 : 0);
   const [itemsToDisplay, setItemsToDisplay] = useState<Commodity[]>([]);
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

   useEffect(() => {
      document.title = styleMode === 0 ? 'Classic Blue' : 'Modern Emerald';
   }, [styleMode]);

   return (
      <>
         <AppContext.Provider value={{ styleMode, itemsToDisplay }}>
            <BrowserRouter>
               <Routes>
                  <Route path="/store" element={ <ItemDisplay itemsToDisplay={ itemsToDisplay } /> }></Route>
                  <Route path="*" element={ <NotFound /> }></Route>
               </Routes>
            </BrowserRouter>
         </AppContext.Provider>
      </>
   )
}

export default App
