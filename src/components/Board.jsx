import Card from './Card'

function Board({ cards }) {
  return (
    <div className="grid grid-cols-4 gap-3 max-w-md">
      {cards.map((image, index) => (
        <Card key={index} image={image} />
      ))}
    </div>
  )
}

export default Board