import React, { ComponentType, ReactElement } from "react"
import "./App.css"
import Footer from "./Components/footer"
import Header from "./Components/header"
import Catalog from "./Components/catalog"
import { Box } from "@mui/material"
import Slider from "./Components/slider"
import HomePage from "./Pages/home"
import { JSX } from "react/jsx-runtime"
import PrimaryLayout from "./Layouts/primaryLayout"

const App = () => {
  return (
  <HomePage />
  )
}

App.getLayout = (page: ReactElement) => (
  <PrimaryLayout>{page}</PrimaryLayout>
)

export default App
