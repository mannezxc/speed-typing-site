// import { ChangeEvent, FC, useRef, useState } from 'react'

// const str = 'Самый распространенный язык - китайский. А второй по распространенности - испанский. Английскому же достается почетная бронза. Виноград взрывается в микроволновой печи. Первоначально кока-кола была зеленой. Ленивцы проводят 75% жизни во сне. Дельфины спят с одним открытым глазом. Кошки спят больше половины своей жизни.'
// const letters = str.split('')
// const words = str.split(' ')
// const lenght = words.reduce((acc, item) => acc + item.length,0)
// console.log(lenght)

// const TypePage: FC = () => {
//     const [type, setType] = useState('')
//     const [countMistakes, setCountMistakes] = useState<number>(0)
//     const ref = useRef<HTMLInputElement>(null)

//     const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value
//         const index = value.length - 1
//         str[index] == value[index] ? setType(value) : setCountMistakes(prev => prev + 1)
//     }
//     console.log(countMistakes)
//     return <section className='flex justify-center items-center w-full h-full'>
//         <div className="flex justify-center" >
//             <div className="w-[1140px] h-full bg-[--type-second-bg-color] rounded-[12px] p-16"
//                 onClick={() => ref.current!.focus()}>
//                 {countMistakes}
//                 <div className="relative h-full">
//                     <input ref={ref} className="absolute cursor-default body select-none rounded-[12px]" onChange={changeHandler} value={type}></input>
//                     <div className="flex flex-wrap h-full  text-[18px] typeBlock">
//                         {words.map((word, i) => <div className='mr-1'>
//                             {word.split('').map((letter, il) => <span key={il*i} className={`h-full text-[--type-primary-font-color] relative font-semibold ${!!(type[i+il + 1] == words[i][il + 1]) ? 'after:content-[" "] after:animate-pulse after:absolute after:-bottom-[2px] after:left-0 after:h-[2px] after:rounded-full after:w-full after:bg-white' : null} rounded-[2px] ${type[i+il] === letter && 'text-white'} `}>
//                                 {letter}
//                             </span>)}
//                         </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div >
//     </section>
// }

// export default TypePage
import { ChangeEvent, FC, useCallback, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const str = 'Самый распространенный язык - китайский. А второй по распространенности - испанский. Английскому же достается почетная бронза. Виноград взрывается в микроволновой печи. Первоначально кока-кола была зеленой. Ленивцы проводят 75% жизни во сне. Дельфины спят с одним открытым глазом. Кошки спят больше половины своей жизни.'
const letters = str.split('')

const TypePage: FC = () => {
    const [typing, setTyping] = useState('')
    const [countMistakes, setCountMistakes] = useState<number>(0)
    const ref = useRef<HTMLInputElement>(null)
    const [style, setStyle] = useState('line')

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const index = value.length - 1
        str[index] == value[index] ? setTyping(value) : setCountMistakes(prev => prev + 1)
    }
    const setTypingStyle = useCallback((e: string) => setStyle(e), [setStyle])
    console.log(countMistakes)
    return <section className='flex justify-center items-center w-full h-full text-white'>
        <div className='flex items-start flex-col'>
            <div className="flex items-center flex-col relative">
                <CSSTransition in={!!typing.length || !!countMistakes} classNames='mistakes' timeout={300} unmountOnExit>
                    <div className='absolute -top-20 left-0 mb-4 '>
                        <div className='bg-[--type-second-bg-color] rounded-[12px] p-4 font-bold typeBlock'>
                            <span className='font-normal'>Mistakes:</span> {countMistakes}
                        </div>
                    </div>
                </CSSTransition>
                <div className="w-[1140px] h-full bg-[--type-second-bg-color] rounded-[12px] p-16 mb-4"
                    onClick={() => ref.current!.focus()}>
                    <div className="relative h-full">
                        <input ref={ref} className="absolute cursor-default body select-none rounded-[12px]" onChange={changeHandler} value={typing}></input>
                        <div className=" h-full pointer-events-none text-[20px] typeBlock relative">
                            {letters.map((e, i) => <span key={i} className={`
                            h-full 
                            text-[--type-primary-font-color] font-semibold 
                            relative
                            rounded-[2px] 
                            ${!!(style == 'underline') ? !!(typing.length + 1 == i + 1) && 'after:content-[" "] after:animate-pulse after:absolute after:-bottom-[2px] after:left-0 after:h-[2px] after:rounded-full after:w-full after:bg-white' : null}
                            ${!!(style == 'block') ? !!(typing.length + 1 == i + 1) && 'bg-white animate-pulse' : null}
                            ${!!(style == 'line') ? !!(typing.length + 1 == i + 1) && 'animate-pulse border-l-[3px] border-[#fff] bg-transparent' : null}
                            ${typing[i] === e && 'text-white'} 
                            `}>
                                {e}
                            </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className='bg-[--type-second-bg-color] rounded-[12px] p-4 font-bold typeBlock'>
                    <button className='mr-2' onClick={() => setTypingStyle('underline')}>
                        underline
                    </button>
                    <button className='mr-2' onClick={() => setTypingStyle('line')}>
                        line
                    </button>
                    <button className='mr-2' onClick={() => setTypingStyle('block')}>
                        block
                    </button>
                </div>
            </div >
        </div>

    </section>
}

export default TypePage