import React from "react";
const LogInPage = React.lazy(() => import('../page/auth/LogInPage'))

export const AuthRouter = [
    { path: '/logIn', element: <LogInPage/>, exact:true },
]