import { useState, useCallback, useEffect, useRef} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
function PasswordGen() {
  const [color, setColor] = useState("black");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  
  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*-_+[]{}~";
    for(let i=0;i<length;i++){
      let charIndx = Math.floor(Math.random()*str.length-1)+1;
      pass += str.charAt(charIndx);
    }
    console.log(pass);
    setPassword(pass);


  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, setPassword])
  console.log("allowed",numberAllowed,charAllowed);

  function copyPasswordToClipboard(){
    //if copy to clipboard show to user
    passwordRef.current?.select();
    // if select in range if needed
    //? passwordRef.current?.setSelectionRange(0,5); 
    window.navigator.clipboard.writeText(password); // this will copy
  }

  function changeColor(colour){
    setColor(colour)
  }

  return (
    <>
      <div className="container" style={{backgroundColor: color, height: "15em", width: "25em", border: "1px solid black"}}>
        <div className="buttonContainer" style={{backgroundColor: "pink", padding: "4px"}}>
          <button className="red" onClick={()=>changeColor("red")}>red</button>
          <button className="blue" onClick={()=>changeColor("blue")}>blue</button>
          <button className="purple" onClick={()=>changeColor("purple")}>purple</button>
          <button className="black" onClick={()=>changeColor("black")}>black</button>
          <button className="white" onClick={()=>changeColor("white")}>white</button>
        </div>
      </div>
       {/* ******************************2nd project ******************************  */}

      <h1 className="text-4xl text-center text-black">
        Password generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type='text'
          value={password}
          className='outline-none bg-slate-500 w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}  //give reference to this
        />
        <button className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 active:bg-slate-400'
          onClick={copyPasswordToClipboard}
        >copy</button>
      </div>
      <div className="flex">
        <div className="flex items-center gap-x-1">
          <input
            type='range'
            min={6}
            max={12}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
          <input
            type='checkbox'
            defaultChecked = {numberAllowed}
            id='numberInput'
            className='cursor-pointer'
            onChange={()=>{
              setNumberAllowed((prev)=> !prev);
            }}
          />
          <label>NumberAllowed:</label>
          <input
            type='checkbox'
            defaultChecked = {charAllowed}
            id='charInput'
            className='cursor-pointer'
            onChange={()=>{
              setCharAllowed((prev)=> !prev);
            }}
          />
          <label>CharAllowed:</label>
        </div>
      </div>
    </>
  )
}

export default PasswordGen
