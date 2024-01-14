import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  const colorSetter = function colorSetUsingState(colorName){
    setColor(colorName)
  }

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button onClick={()=>{colorSetter("red")}} className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}>Red</button>

          <button onClick={()=>{colorSetter("green")}} className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}>Green</button>

          <button onClick={()=>{colorSetter("yellow")}} className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}>Yellow</button>

          <button onClick={()=>{colorSetter("black")}} className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}>Black</button>

          <button onClick={()=>{colorSetter("brown")}} className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}>Red</button>

          <button onClick={()=>{colorSetter("purple")}} className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}>Purple</button>

        </div>
      </div>
    </div>
  )
}

export default App
