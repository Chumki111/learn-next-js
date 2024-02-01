'use client'

import State from "./State";


export default function Home() {
  const fun =() =>{
    alert('hi')
  }
  return (
   <main className="mx-5">
    <h1>Hello</h1>
    <button onClick={fun} className="bg-teal-600 text-white px-2 py-2 rounded-sm">Click Me</button>
    <State/>
    
   </main>
  );
}
