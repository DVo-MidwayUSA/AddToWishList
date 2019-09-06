import React, { useState } from "react"
import ReactDOM from "react-dom"
import SelectWishList from "./SelectWishList.jsx"

const AddToWishList = () => {
  const openWishLists = () => {}
  return (
    <>
      <button className="big-secondary-button" onClick={openWishLists}>
        Add to Wish List
      </button>
      <SelectWishList />
    </>
  )
}

export default AddToWishList

ReactDOM.render(<AddToWishList />, document.getElementById("add-to-wishlist"))
