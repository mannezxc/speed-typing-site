import { ChangeEvent, forwardRef } from 'react'

export type StyleNextLetterType = 'line' | 'underline' | 'block'

interface ITypingBlock {
    focusHandler: () => void
    inputFocused: boolean
    currentText: string
    styleNextLetter: StyleNextLetterType
    currentTyping: string
    changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const TypingBlock = forwardRef<HTMLInputElement, ITypingBlock>(({ focusHandler, inputFocused, currentText, styleNextLetter, currentTyping, changeHandler}, typingRef) => {
    return <div className="max-w-[1140px] w-full h-full bg-[--type-second-bg-color] rounded-[12px] p-16 mb-4"
        onClick={focusHandler}>
        <div className="relative h-full flex justify-center items-center">
            {!!!inputFocused && <p className=' absolute text-[18px] typeBlock'>Click to focus</p>}
            <input ref={typingRef} className="absolute cursor-default body select-none rounded-[12px] typeInput" onChange={changeHandler} value={currentTyping}></input>
            <div className={`${!!!inputFocused && 'blur-sm'} h-full pointer-events-none  typeBlock relative lg:text-[20px] max-[768px]:text-[14px] max-[1024px]:text-[16px]`}>
                {currentText.split('').map((e, i) => <span key={i} className={`
      h-full 
      text-[--type-primary-font-color] font-semibold 
      relative
      rounded-[2px] 
      ${!!(styleNextLetter == 'underline') ? !!(currentTyping.length + 1 == i + 1) && 'after:content-[" "] after:animate-pulse after:absolute after:-bottom-[2px] after:left-0 after:h-[2px] after:rounded-full after:w-full after:bg-white' : null}
      ${!!(styleNextLetter == 'block') ? !!(currentTyping.length + 1 == i + 1) && 'bg-white animate-pulse' : null}
      ${!!(styleNextLetter == 'line') ? !!(currentTyping.length + 1 == i + 1) && 'animate-pulse border-l-[3px] border-[#fff] bg-transparent' : null}
      ${currentTyping[i]?.toLowerCase() === e?.toLowerCase() && 'text-white'} 
      `}>
                    {e}
                </span>
                )}
            </div>
        </div>
    </div>
})

export default TypingBlock