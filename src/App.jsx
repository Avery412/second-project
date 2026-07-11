import Board from './components/Board'

function App() {
  // Массив с картинками
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-2">Найди пару</h1>
      <Board cards={images} />
    </div>
  )
}

export default App