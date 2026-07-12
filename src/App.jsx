import {useState} from 'react'
import Board from './components/Board'

function App() {
  // Array with images
  const images = [
    '/images/red.png',
    '/images/orange.png',
    '/images/yellow.png',
    '/images/green.png',
    '/images/cyan.png',
    '/images/blue.png',
    '/images/purple.png',
    '/images/white.png',
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

  // Reset game
  const resetGame = () => {
    setCards(generateCards())
    setMoves(0)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
      <h1 className="text-3xl font-bold mb-2 text-white">Найди пару</h1>
      
      {/* Moves counter */}
      <p className="text-lg mb-4 text-red-500">Ходы: {moves}</p>

      {/* Board with cards */}
      <Board cards={cards} />

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