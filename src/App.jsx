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

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
          <Route index path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/registration' element={<Registration />}></Route>
          <Route path='/book-service' element={<BookService />}></Route>
        </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
