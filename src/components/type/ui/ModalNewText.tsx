import { forwardRef } from 'react'

type ModalNewTextType = {
    showModal: boolean
    changeText: () => void
    setShowModal: (e: boolean) => void
    setInputNewText: (text: string) => void
    inputNewText: string
}

const ModalNewText = forwardRef<HTMLTextAreaElement, ModalNewTextType>(({ changeText, inputNewText, setInputNewText, setShowModal, showModal }, ref) => {
    return !!showModal && <div className='z-20 absolute w-screen h-screen bg-[rgba(0,0,0,.5)]'
        onClick={() => {
            setShowModal(!showModal)
            setInputNewText('')
        }}>
        <div className='h-full flex justify-center items-center'>
            <div className='flex items-start'
                onClick={(e) => e.stopPropagation()}>
                <div className='bg-[--type-second-bg-color] rounded-[12px] p-4 font-bold body typeBlock'>
                    <textarea ref={ref} onChange={(e) => setInputNewText(e.target.value)} value={inputNewText} rows={10} cols={100} className='setTextInput h-full whitespace-pre-line' placeholder='Text' />
                </div>
                <button
                    onClick={changeText}
                    className='ml-4 bg-[--type-second-bg-color] rounded-[12px] p-4 font-bold body typeBlock'>
                    Set
                </button>
            </div>
        </div>
    </div>

})

export default ModalNewText