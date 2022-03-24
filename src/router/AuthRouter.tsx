import React from "react";
const LogInPage = React.lazy(() => import('../page/auth/LogInPage'))
const RegisterPage = React.lazy(() => import('../page/auth/RegisterPage'))
export const AuthRouter = [
    { path: '/logIn', element: <LogInPage/>, exact:true },
    { path: '/register', element: <RegisterPage/>, exact:true },
]