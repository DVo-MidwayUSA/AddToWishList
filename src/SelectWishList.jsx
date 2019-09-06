import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

const SelectWishList = () => {
  const [wishlists, setWishlists] = useState([])
  useEffect(() => {
    fetch("./src/wishlist-data.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setWishlists([...data])
      })
  }, [])

  return <div>Wishilists</div>
}

export default SelectWishList
