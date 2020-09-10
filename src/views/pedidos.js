import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Loading from '../components/loading'
import CardPizaa from '../components/cardPizaa'
import NavBar from '../components/navbar'
import FloatButton from '../components/floatButton'
import pepperoni from '../assets/img/pepperoni.webp'
import CardProduct from '../components/cardProduct'

const Pedidos = () => {
  const user = useSelector((state) => state.user)
  const [cardProductState, setCardProductState] = useState(false)
  const [loadingState, setLoadingState] = useState(false)

  const handleClickFloatButton = () => {
    setCardProductState(true)
  }

  const hadleClickCloseCardProduct = () => {
    setCardProductState(false)
  }

  return (
    <div className="container-fluid p-0">
      <FloatButton handleClick={handleClickFloatButton}></FloatButton>
      {cardProductState && (
        <CardProduct
          handleClickClose={hadleClickCloseCardProduct}
        ></CardProduct>
      )}
      {loadingState && <Loading></Loading>}

      <NavBar user={user}></NavBar>

      <div className="row p-0 m-0">
        <div className="col-12">
          <CardPizaa background={pepperoni}></CardPizaa>
        </div>
      </div>
    </div>
  )
}

export default Pedidos
