<<<<<<< Updated upstream
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import  BookService  from "./pages/BookService";
import Registration from "./pages/Registration";
import Layout from "./components/Layout";
=======
import Features from "./components/Features"
import Numbers from "./components/Numbers"
import Services from "./components/Services"
>>>>>>> Stashed changes

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
           <Route element={<Layout />}>
          <Route index path='/' element={<LandingPage />} />
          <Route path='/book-service' element={<BookService />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/registration' element={<Registration />}></Route>
        </Route>
    )
  )

  return (
<<<<<<< Updated upstream
    <div>
    <RouterProvider router={router} />
    </div>
=======
    <>
    <Features/>
    <Services/>
    <Numbers/>
    </>
>>>>>>> Stashed changes
  )
}

export default App
