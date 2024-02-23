import {createBrowserRouter} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Todos from "./pages/Todos"
import Albums from "./pages/Albums"
import Comments from "./pages/Comments"
import Posts from "./pages/Posts"


const router=createBrowserRouter([
    {
        path:'',
        element: <MainLayout/>,
        children:[
            {
                path:'todos',
                element: <Todos/>
            },
            {
                path: 'albums',
                element: <Albums/>
            },
            {
                path: 'comments',
                element: <Comments/>,
                children:[
                    {
                        path:'posts/:postId',
                        element: <Posts/>
                    }
                ]
            }
        ]
    }
])

export {router}

