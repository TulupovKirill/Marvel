import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";

import Header from './Impl/Header.tsx'
import Footer from './Impl/Footer.tsx'
import Menu from './Impl/Menu.tsx'

import Character_Hulk from './Impl/Characters/Character_Hulk.tsx'
import Character_IronMan from './Impl/Characters/Character_IronMan.tsx'
import Character_SpiderMan from './Impl/Characters/Character_SpiderMan.tsx'
import Screen_Characters from './Impl/Characters/Characters.tsx'

import Comics_EssentialIronManVol1 from './Impl/Comics/Comics_EssentialIronManVol1.tsx'
import Comics_HulkAngry from './Impl/Comics/Comics_HulkAngry.tsx'
import Comics_ModernSpiderMan from './Impl/Comics/Comics_ModernSpiderMan.tsx'
import Screen_Comics from './Impl/Comics/Comics.tsx'


function App() {

  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Menu/>
    },
    {
      path: "comics", element: <Screen_Comics/>, children: 
      [
        { path: 'comics/1', element: <Comics_EssentialIronManVol1/>},
        { path: 'comics/2', element: <Comics_HulkAngry/>},
        { path: 'comics/3', element: <Comics_ModernSpiderMan/>},
      ]
    },
    { path: "characters", element: <Screen_Characters/>, children:
      [
        { path: 'characters/1', element: <Character_Hulk/>},
        { path: 'characters/2', element: <Character_IronMan/>},
        { path: 'characters/3', element: <Character_SpiderMan/>},
      ]
    }
  ];

  let element = useRoutes(routes);

  return (
    <>
      <Header/>
      
      <Footer/>
    </>
  )
}

export default App
