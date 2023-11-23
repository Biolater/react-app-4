import React from 'react'
import { Header, Topics, Info, Testimonials, Footer, Blog } from "./components/Index"

const App = () => {
  return (
    <div>
      <Header />
      <Topics />
      <Info />
      <Blog />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App