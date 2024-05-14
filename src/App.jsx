import { useState, useEffect, useCallback, useRef } from 'react'

import './App.css'

function App() {

  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let passChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) passChars += "0123456789";
    if (charAllowed) passChars += "$!@#%^&*(){}?/><";

    for (let i = 0; i < length; i++) {
      let sChar = Math.floor(Math.random() * passChars.length)
      pass += passChars[sChar];
    }

    console.log(passChars);

    setPassword(pass)
  }, [length, numAllowed, charAllowed])

  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed])

  return (
    <>
      <div className="container">
        <h1>Password Generator</h1>

        <div className="input-container">
          <input type="text" value={password} name="" className="password-box" placeholder='Password' readOnly  ref={passwordRef}/>
          <button className='copy-button' onClick={copyToClipBoard}>Copy</button>
        </div>

        <div className='lower-container'>
          <div className='slider flexp'>
            <input type="range" name="" id="slider-range" min={4} max={24} value={length} onChange={(e) => setLength(e.target.value)} />
            <label htmlFor="">Length:({length})</label>
          </div>
          <div className='checkbox-group flexp'>
            <input type="checkbox" name="" id="numberInput" defaultChecked={numAllowed} onChange={() => {
              setNumAllowed((prev) => !prev);
            }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='checkbox-group flexp'>
            <input type="checkbox" name="" id="characterInput" defaultChecked={charAllowed} onChange={() => {
              setCharAllowed(!charAllowed)
            }} />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>

        <button className='regen-button' onClick={passwordGenerator}>Regenerate</button>

      </div>
    </>
  )
}

export default App
