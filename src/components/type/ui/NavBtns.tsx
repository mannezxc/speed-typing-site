import { FC, RefObject } from 'react'
import { StyleNextLetterType } from './TypingBlock'

interface INavBtns {
    setTypingStyle: (type: StyleNextLetterType) => void
    showModal: boolean
    setShowModal: (bool: boolean) => void
    setInputFocused: (bool: boolean) => void
    newTextRef: RefObject<HTMLTextAreaElement>
}

const NavBtns: FC<INavBtns> = ({ setTypingStyle, showModal, setShowModal, setInputFocused, newTextRef }) => {
    return <div className='flex '>
        <div className='flex items-center bg-[--type-second-bg-color] rounded-[12px] p-4 font-bold typeBlock mr-4'>
            <button onClick={() => setTypingStyle('underline')}>
                underline
            </button>
            <hr className='w-[2px] h-[calc(100%-2px)] bg-white mx-2' />
            <button onClick={() => setTypingStyle('line')}>
                line
            </button>
            <hr className='w-[2px] h-[calc(100%-2px)] bg-white mx-2' />
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
}

export default NavBtns