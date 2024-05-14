import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <h1>Password Generator</h1>

        <div className="input-container">
          <input type="text" value='Dhiraj' name="" className="password-box" placeholder='Password' readOnly/>
          <button className='copy-button'>Copy</button>
        </div>

        <div className='lower-container'>
          <div className='slider flexp'>
            <input type="range" name="" id="slider-range" min={4} max={24}/>
            <label htmlFor="">Length:(8)</label>
          </div>
          <div className='checkbox-group flexp'>
            <input type="checkbox" name="" id="numberInput" />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='checkbox-group flexp'>
            <input type="checkbox" name="" id="characterInput" />
            <label htmlFor="characterInput">Characters</label>
          </div>
          
        </div>

      </div>
    </>
  )
}

export default App
