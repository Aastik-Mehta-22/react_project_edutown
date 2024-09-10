import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import { githubInfoLoader } from './components/Github/Github.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'

import { ClerkProvider } from '@clerk/clerk-react'
import Explore from './components/Explore/Explore.jsx'
import Courses from './components/Courses/Courses.jsx'
import Events from './components/EventsandMore/Events.jsx'
import Notes from './components/Notes/Notes.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contactus",
//         element: <ContactUs/>
//       },
//       {
//         path:"github",
//         element: <Github/>
//       }
//     ]
//   }
// ])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
console.log('Clerk Publishable Key:', import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<LandingPage/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contactus' element={<ContactUs/>}/>
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
      <Route path='user/:userid' element={<User/>}/> 
      <Route path='explore' element={<Explore/>}/> 
      <Route path='explore/todos' element={<Home/>}/> 
      <Route path='explore/notes' element={<Notes/>}/> 
      <Route path='explore/courses' element={<Courses/>}/> 
      <Route path='explore/events' element={<Events/>}/> 

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router}/>
    </ClerkProvider>
  </React.StrictMode>,
)
