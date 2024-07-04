import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";

import Header from './Pages/Header.tsx'
import Footer from './Pages/Footer.tsx'
import Menu from './Pages/Menu.tsx'

import Character_Hulk from './Pages/Characters/Character_Hulk.tsx'
import Character_IronMan from './Pages/Characters/Character_IronMan.tsx'
import Character_SpiderMan from './Pages/Characters/Character_SpiderMan.tsx'
import Screen_Characters from './Pages/Characters/Characters.tsx'

import Comics_EssentialIronManVol1 from './Pages/Comics/Comics_EssentialIronManVol1.tsx'
import Comics_HulkAngry from './Pages/Comics/Comics_HulkAngry.tsx'
import Comics_ModernSpiderMan from './Pages/Comics/Comics_ModernSpiderMan.tsx'
import Screen_Comics from './Pages/Comics/Comics.tsx'


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
        { path: '1', element: <Comics_EssentialIronManVol1/>},
        { path: '2', element: <Comics_HulkAngry/>},
        { path: '3', element: <Comics_ModernSpiderMan/>},
      ]
    },
    { path: "/characters", children:
      [
        {index: true, element: <Screen_Characters/>,},
        { path: '1', element: <Character_Hulk/>},
        { path: '2', element: <Character_IronMan/>},
        { path: '3', element: <Character_SpiderMan/>},
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
