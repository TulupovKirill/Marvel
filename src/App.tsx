import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";

import Header from './Pages/Header.tsx'
import Footer from './Pages/Footer.tsx'
import Menu from './Pages/Menu.tsx'

import Screen_Comics from './Pages/Comics/Comics.tsx'
import Screen_Characters from './Pages/Characters/Characters.tsx'

import GetPageCharacterById from "./Impl/GetPageCharacterById.tsx";
import GetPageComicsById from "./Impl/GetPageComicsById.tsx";


function App() {

  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Menu/>
    },
    {
      path: "/comics", children: 
      [
        {index: true, element: <Screen_Comics/>,},
        { path: ':id', element: <GetPageComicsById/>}
      ]
    },
    { path: "/characters", children:
      [
        { index: true, element: <Screen_Characters/>,},
        { path: ':id', element: <GetPageCharacterById/>}
      ]
    },
  ];

  let element = useRoutes(routes);

  return (
    <>
      <Header/>
      {element}
      <Footer/>
    </>
  )
}

export default App
