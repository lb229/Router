import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {Homepage}  from './pages/Homepage'
import { MainLayout } from "./layouts/MainLayout";
import { NotFoundPage } from "./pages/NotFoundpage";
import { ShowGithubUser } from "./components/ShowGithubUser";
import Userpage from "./pages/Userpage";
import {GithubListpage} from "./pages/GithubListpage";
import {Hero} from "./components/Hero"
import "./index.css";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element = {<Homepage />} />
   
    <Route path="/users" element={<Userpage />}>
      <Route path=":username" element={<ShowGithubUser />}/>
    </Route>
    <Route path="/userslist" element={<GithubListpage />}>
      <Route index element = {<h3>Add a user and select it</h3>}/>
      <Route path=":username" element={<ShowGithubUser />}/>
    </Route> 

    <Route path="*" element={<NotFoundPage />}/>
  </Route>

))

export function App() {
 return <RouterProvider router={router} />;
}


