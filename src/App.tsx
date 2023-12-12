import { Route, Routes } from "react-router-dom"
import TypePage from "./components/type/TypePage"
import Layout from "./components/layout/Layout"



function App() {
  return <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<TypePage/>}/>
    </Route>
  </Routes>

  //   return <div className="flex justify-center">
  //     <div className="w-[1140px] h-[440px] bg-white rounded-[12px] p-16"
  //       onClick={() => ref.current!.focus()}>
  //       <div className="relative">
  //         <textarea ref={ref} className="cursor-default body select-none rounded-[12px]" cols={30} rows={10} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
  //           const value = e.target.value
  //           const index = value.length - 1
  //           console.log(str[index] == value[index])
  //           str[index] == value[index] && setType(value)
  //           // setLetter(value[value.length])
  //           setTypeArray(prev => [...prev, value])
  //         }} value={type}></textarea>
  //         <label >
  //           {words.map((e, i) => <div className={`${typeArray[i] === e ? 'text-green-400' : null} inline-block text-black rounded-[2px] relative font-semibold`}>
  //             {e.split('').map((w, index, array) => <span className={``}>
  // {w}
  //             </span>)}&nbsp;
  //           </div>)}
  //         </label>
  //       </div>
  //     </div>
  //   </div >

}
export default App
