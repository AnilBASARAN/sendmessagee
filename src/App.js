import './App.css';
import {useState} from "react";

const App = () => {
  const [text,setText] = useState("");
  const [messages,setMessages] = useState(["hello","wassup ?","not much"]);

  let allMessages = messages.map((msg,index)=><div key={index} className="border rounded-full text-stone-500 text-xl border-stone-300 p-2 m-2" >{msg}</div>)

  
  return (
    <div className="outerContainer p-2 m-2 flex flex-col items-center justify-center">

      <form
        onSubmit={(e)=>{
          e.preventDefault();
          setMessages([...messages,text]);
          setText("");
        }}
        className="flex m-8" >
      <input
        placeholder="enter a message"
        className=" w-64 focus:outline-purple-400 bg-neutral-200 border border-neutral-300 p-2"
        value = {text}
        type="text"
        onChange={(e)=>setText(e.target.value)}
        />

        <button className="rounded-lg bg-purple-200 text-purple-400 ml-2 p-2 ">Send</button>
      </form>
      
    <div className="w-full max-w-lg flex flex-col" >
      {allMessages}
    </div>
  </div>
         );
};

export default App;
