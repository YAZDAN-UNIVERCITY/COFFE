
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import Main from "./pages/Main"
import Category from "./pages/Category"
import Categories from "./pages/Categories"
import Product from "./pages/Product"
import Products from "./pages/Products"
import PanelAdmin from "./pages/PanelAdmin"
import Cart from "./pages/Cart"
import History from "./pages/History"
import React, { ReactNode } from "react"

 


const routes = [
  {
    name:"main",
    component: <Main />,
    path: "/",
    type: "multiple",
    list:[
      {
        name: "Category",
        component: <Categories />,
        path: "Category",
      },
      {
        name:"Category",
        component: <Category />,
        path: "Category/:id",
      },
    
      ,
      {
        name: "product",
        component: <Product />,
        path: "product/:id",
      },
      {
        name: "products",
        component: <Products />,
        path: "products",
      },
      {
        name: "panel_admin",
        component: <PanelAdmin />,
        path: "panel/",
      },
      {
        name: "Cart",
        component: <Cart />,
        path: "cart/",
      },
      {
        name: "history",
        component: <History />,
        path: "hstory/",
      },
    ]
  },
 

  {
    name: "login",
    component: <LogIn />,
    path: "login",
    type: "single",
  },
  {
    name: "signup",
    component: <SignUp />,
    path: "signup/",
    type: "single",
  },
]
export default routes
