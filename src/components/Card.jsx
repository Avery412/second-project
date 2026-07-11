function Card({ image }) {
  return (
    <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center overflow-hidden">
      <img src={image} alt="card" className="w-16 h-16 object-contain" />
    </div>
  )
}

export default Card