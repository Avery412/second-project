function Card({ color, isFlipped, isMatched, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`w-16 h-16 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center text-2xl font-bold
        ${isMatched ? 'opacity-0 pointer-events-none' : ''}
        ${isFlipped ? `bg-${color}-500 text-white` : 'bg-gray-300 hover:bg-gray-400'}
      `}
    >
      {isFlipped && '?'}
    </div>
  )
}

export default Card