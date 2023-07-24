

function App() {

  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-screen !min-h-[100dvh]font-mulish">

      <Preloader />
      
    </div>
    </>
  )
}

export default App

function Preloader(){
  return (
    <>
    <h1 className=" text-4xl font-bold mb-4">What to do today?
    </h1>
    <h1 className="text-6xl  animate-pulse font-bold">Thinking...</h1>
    </>
  )
}