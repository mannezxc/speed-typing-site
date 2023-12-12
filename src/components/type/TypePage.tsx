import { ChangeEvent, FC, useCallback, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const TypePage: FC = () => {
    let [str, setStr] = useState('Самый распространенный язык - китайский. А второй по распространенности - испанский. Английскому же достается почетная бронза. Виноград взрывается в микроволновой печи. Первоначально кока-кола была зеленой. Ленивцы проводят 75% жизни во сне. Дельфины спят с одним открытым глазом. Кошки спят больше половины своей жизни.')
    const [typing, setTyping] = useState('')
    const [countMistakes, setCountMistakes] = useState<number>(0)
    const ref = useRef<HTMLInputElement>(null)
    const newTextRef = useRef<HTMLTextAreaElement>(null)
    const [style, setStyle] = useState('line')
    const [inputFocused, setInputFocused] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [inputNewText, setInputNewText] = useState('')
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const index = value.length - 1
        str[index] == value[index] ? setTyping(value) : setCountMistakes(prev => prev + 1)
    }
    const focusHandler = () => {
        setInputFocused(true)
        ref.current!.focus()
    }
    const setTypingStyle = useCallback((e: string) => setStyle(e), [setStyle])
    const changeText = useCallback(() => {
        let newText = ''
        inputNewText.split("\n").map(item => newText += item + ' ')
        setStr(newText)
        setShowModal(false)
    }, [setStr, setShowModal, inputNewText])
    return <>
        <section className='flex justify-center items-center w-full h-full text-white'>
            {!!showModal &&
                <div className='z-20 absolute w-screen h-screen bg-[rgba(0,0,0,.5)]'
                    onClick={() => {
                        setShowModal(!showModal)
                        setInputNewText('')
                    }}
                >
                    <div className='h-full flex justify-center items-center'>
                        <div className='flex items-start'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className='bg-[--type-second-bg-color] rounded-[12px] p-4 font-bold body typeBlock'>
                                <textarea ref={newTextRef} onChange={(e) => setInputNewText(e.target.value)} value={inputNewText} rows={10} cols={100} className='setTextInput h-full whitespace-pre-line' placeholder='Text' />
                            </div>
                            <button
                                onClick={changeText}
                                className='ml-4 bg-[--type-second-bg-color] rounded-[12px] p-4 font-bold body typeBlock'>
                                Set
                            </button>
                        </div>
                    </div>
                </div>
            }
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
                        onClick={focusHandler}>
                        <div className="relative h-full flex justify-center items-center">
                            {!!!inputFocused && <p className=' absolute text-[18px] typeBlock'>Click to focus</p>}
                            <input ref={ref} className="absolute cursor-default body select-none rounded-[12px] typeInput" onChange={changeHandler} value={typing}></input>
                            <div className={`${!!!inputFocused && 'blur-sm'} h-full pointer-events-none text-[20px] typeBlock relative`}>
                                {str.split('').map((e, i) => <span key={i} className={`
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
                    <div className='flex '>
                        <div className='flex items-center bg-[--type-second-bg-color] rounded-[12px] p-4 font-bold typeBlock mr-4'>
                            <button onClick={() => setTypingStyle('underline')}>
                                underline
                            </button>
                            <hr className='w-[2px] h-[calc(100%-2px)] bg-white mx-2'/>
                            <button onClick={() => setTypingStyle('line')}>
                                line
                            </button>
                            <hr className='w-[2px] h-[calc(100%-2px)] bg-white mx-2'/>
                            <button onClick={() => setTypingStyle('block')}>
                                block
                            </button>
                        </div>
                        <div className='bg-[--type-second-bg-color] rounded-[12px] p-4 font-bold typeBlock'>
                            <button onClick={() => {
                                setShowModal(!showModal)
                                setInputFocused(false)
                                setTimeout(() => newTextRef.current?.focus(), 500)  
                            }}>
                                Set custom text
                            </button>
                        </div>
                    </div>
                </div >
            </div>
        </section>
    </>

}

export default TypePage