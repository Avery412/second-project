import Card from './Card'

function Board({cards, onCardClick}) {
  return (
    <div className="grid grid-cols-4 gap-3 max-w-md">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          isFlipped={card.isFlipped}
          isMatched={card.isMatched}
          onClick={() => onCardClick(index)}
        />
      ))}
    </div>
  )
}

export default Board