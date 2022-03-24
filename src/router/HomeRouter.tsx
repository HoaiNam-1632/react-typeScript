import React from "react";
const HomePage = React.lazy(() => import('../page/home/HomePage'))
const DetailProjectPage = React.lazy(() => import('../page/home/DetailProjectPage'))
const DetailUserPage = React.lazy(() => import('../page/user/DetailUser'))
export const HomeRouter = [
    { path: '/', element: <HomePage/>, exact:true },
    { path: '/detailProject', element: <DetailProjectPage/>, exact:true },
    { path: '/detailUser', element: <DetailUserPage/>, exact:true },

]