function Card({image, isFlipped, isMatched, onClick}) {
  // If matched already, blank space
  if (isMatched) {
    return <div className="w-20 h-20"/>
  }

  return (
    <div
      onClick={onClick}
      className={`
        w-20 h-20 rounded-xl transition-all duration-300 flex items-center justify-center 
        overflow-hidden cursor-pointer hover:shadow-lg
        ${isFlipped ? 'bg-white' : 'bg-red-400 hover:bg-red-500'}`}
    >
      {isFlipped && (
        <img src={image} alt="" className="w-16 h-16 object-contain" />
      )}
    </div>
  )
}

export default Card