import { Analytics } from '@vercel/analytics/react';
import React from "react";
import "./App.module.scss";
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter } from "react-router-dom";
import { ImageCacheProvider } from './utils/imageCacheContext';
function App() {
   return (
      <div>
         <BrowserRouter>
            <ImageCacheProvider>
               <Analytics />
               <BaseLayout />
            </ImageCacheProvider>
         </BrowserRouter>
      </div>
   );
}

export default App;
