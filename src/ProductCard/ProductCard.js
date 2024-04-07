import React, {useState} from 'react'

const ProductCard = ({image, title, price}) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isInCart, setIsInCart] = useState(false)

  const toggleLike = () => {
    setIsLiked(prevState => !prevState)
  }

  const addToCart = () => {
    setIsInCart(true)
  }

  return (
    <div className='product-card'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button onClick={toggleLike}>{isLiked ? 'Unlike' : 'Like'}</button>
      <button onClick={addToCart} disabled={isInCart}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
