import { NavBar } from "./components/NavBar"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer"
import { useCardList } from "./hooks/useCardList"
import { Cart } from "./components/Cart"
import { Home } from "./components/Home"
import { ItemDetailsContainer } from "./components/ItemDetailsContainer"
import { Provider } from "./contexts/ItemsContexts"




function App() {

  const { loading, seeds } = useCardList()


  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer seeds={seeds} loading={loading} />} />
          <Route path="/category/:id" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetailsContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div><h1>404</h1></div>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
