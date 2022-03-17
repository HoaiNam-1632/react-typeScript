import React from "react";
const HomePage = React.lazy(() => import('../page/home/HomePage'))

export const HomeRouter = [
    { path: '/', element: <HomePage/>, exact:true },

]