import {useState} from 'react'
import Board from './components/Board'

function App() {
  // Array with images
  const images = [
    '/second-project/images/red.png',
    '/second-project/images/orange.png',
    '/second-project/images/yellow.png',
    '/second-project/images/green.png',
    '/second-project/images/cyan.png',
    '/second-project/images/blue.png',
    '/second-project/images/purple.png',
    '/second-project/images/white.png',
  ]

  // Generate and shuffle cards
  const generateCards = () => {
    const doubled = [...images, ...images]
    // Shuffle array
    const shuffled = doubled.sort(() => Math.random() - 0.5)
    // Create objects isFlipped и isMatched
    return shuffled.map((image) => ({
      image,
      isFlipped: false,
      isMatched: false,
    }))
  }

  // States
  const [cards, setCards] = useState(generateCards())
  const [moves, setMoves] = useState(0)
  const [flippedIndices, setFlippedIndices] = useState([])
  const [isLocked, setIsLocked] = useState(false)

  // Reset game
  const resetGame = () => {
    setCards(generateCards())
    setMoves(0)
  }

  // --- When card is clicked ---
  const handleCardClick = (index) => {
    // Exit if found
    if (isLocked) return
    if (cards[index].isFlipped || cards[index].isMatched) return

    // Copy array and flip card
    const newCards = [...cards]
    newCards[index].isFlipped = true
    setCards(newCards)

    // Set indices to opened cards to check coincidence
    const newFlipped = [...flippedIndices, index]
    setFlippedIndices(newFlipped)

    // If 2 cards selected, check coincidence
    if (newFlipped.length === 2) {
      setMoves(moves + 1)
      setIsLocked(true)

      const firstIndex = newFlipped[0]
      const secondIndex = newFlipped[1]

      // If they coincide
      if (cards[firstIndex].image === cards[secondIndex].image) {
        setTimeout(() => {
          const matchedCards = [...cards]
          matchedCards[firstIndex].isMatched = true
          matchedCards[secondIndex].isMatched = true
          setCards(matchedCards)
          setFlippedIndices([])
          setIsLocked(false)
        }, 500)
      } else {
        // If they doesn't coincide
        setTimeout(() => {
          const resetCards = [...cards]
          resetCards[firstIndex].isFlipped = false
          resetCards[secondIndex].isFlipped = false
          setCards(resetCards)
          setFlippedIndices([])
          setIsLocked(false)
        }, 800)
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
      <h1 className="text-3xl font-bold mb-2 text-white">Найди пару</h1>
      
      {/* Moves counter */}
      <p className="text-lg mb-4 text-red-500">Ходы: {moves}</p>

      {/* Board with cards */}
      <Board cards={cards} onCardClick={handleCardClick}/>

      {/* New game button */}
      <button
        onClick={resetGame}
        className="mt-6 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Новая игра
      </button>

    </div>
  )
}

export default App