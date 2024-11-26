import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './Pages/ErrorPage'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import PostDetail from './Pages/PostDetail'
import Register from './Pages/Register'
import Login from './Pages/Login'
import UserProfile from './Pages/UserProfile'
import Authors from './Pages/Authors'
import CreatePost from './Pages/CreatPost'
import EditPost from './Pages/EditPost'
import DeletePost from './Pages/DeletePost'
import CategoryPosts from './Pages/CategoryPost'
import AuthorPosts from './Pages/AuthorPost'
import Dashboard from './Pages/Dashboard'
import Logout from './Pages/Logout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
       {index: true, element: <Home/>},
       {path: "posts/:id", element: <PostDetail/>},
       {path: "register", element: <Register/>},
       {path: "login", element: <Login/>},
       {path: "profile/:id", element: <UserProfile/>},
       {path: "authors", element: <Authors/>},
       {path: "create", element: <CreatePost/>},
       {path: "posts/categories/:category", element: <CategoryPosts/>},
       {path: "posts/users/:id", element: <AuthorPosts/>},
       {path: "myposts/:id", element: <Dashboard/>},
       {path: "posts/:id/edit", element: <EditPost/>},
       {path: "posts/:id/delete", element: <DeletePost/>},
       {path: "logout", element: <Logout/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)