import { ChangeEvent, FC, useCallback, useEffect, useRef, useState } from 'react'
import ModalNewText from './ui/ModalNewText'
import MistakesBlock from './ui/MistakesBlock'
import TypingBlock, { StyleNextLetterType } from './ui/TypingBlock'
import NavBtns from './ui/NavBtns'

const TypePage: FC = () => {
    const typingRef = useRef<HTMLInputElement>(null)
    const newTextRef = useRef<HTMLTextAreaElement | null>(null)
    const [currentText, setCurrentText] = useState('Самый распространенный язык - китайский. А второй по распространенности - испанский. Английскому же достается почетная бронза. Виноград взрывается в микроволновой печи. Первоначально кока-кола была зеленой. Ленивцы проводят 75% жизни во сне. Дельфины спят с одним открытым глазом. Кошки спят больше половины своей жизни.')
    const [currentTyping, setCurrentTyping] = useState<string>('')
    const [countMistakes, setCountMistakes] = useState<number>(0)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [styleNextLetter, setStyleNextLetter] = useState<StyleNextLetterType>('line')
    const [inputFocused, setInputFocused] = useState<boolean>(true)
    const [inputNewText, setInputNewText] = useState<string>('')
    useEffect(() => {
        typingRef.current!.focus()
        setInputFocused(true)
    }, [])
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const index = value.length - 1
        currentText[index]?.toLowerCase() == value[index]?.toLowerCase() ? setCurrentTyping(value) : setCountMistakes(prev => prev + 1)
    }
    const focusHandler = () => {
        setInputFocused(true)
        typingRef.current!.focus()
    }
    const setTypingStyle = useCallback((e: StyleNextLetterType) => {
        setStyleNextLetter(e)
        typingRef.current!.focus()
    }, [styleNextLetter])
    const changeText = useCallback(() => {
        let newText = ''
        inputNewText.split("\n").map(item => newText += item + ' ')
        setCurrentText(newText)
        setShowModal(false)
        setCurrentTyping('')
        typingRef.current!.focus()
        setInputFocused(true)
        setInputNewText('')
    }, [currentText, setShowModal, inputNewText])
    
    return <>
        <section className='flex justify-center items-center w-full h-full text-white px-4'>
            <ModalNewText ref={newTextRef} showModal={showModal} changeText={changeText} setShowModal={setShowModal} setInputNewText={setInputNewText} inputNewText={inputNewText} />
            <div className='flex items-start flex-col'>
                <div className="flex items-center flex-col relative">
                    <MistakesBlock countMistakes={countMistakes} currentTyping={currentTyping}/>
                    <TypingBlock ref={typingRef} changeHandler={changeHandler} currentText={currentText} currentTyping={currentTyping} focusHandler={focusHandler} inputFocused={inputFocused} styleNextLetter={styleNextLetter}/>
                    <NavBtns newTextRef={newTextRef} setInputFocused={setInputFocused} setShowModal={setShowModal} setTypingStyle={setTypingStyle} showModal={showModal}/>
                </div>
            </div>
        </section>
    </>
}

export default TypePage