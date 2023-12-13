import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

type MistakesBlockType = {
    currentTyping: string
    countMistakes: number
}

const MistakesBlock: FC<MistakesBlockType> = ({currentTyping, countMistakes}) => {
    return <CSSTransition in={!!currentTyping.length || !!countMistakes} classNames='mistakes' timeout={300} unmountOnExit>
        <div className='absolute -top-20 left-0 mb-4 '>
            <div className='bg-[--type-second-bg-color] rounded-[12px] p-4 font-bold text-[16px] typeBlock'>
                <span className='font-normal'>Mistakes:</span> {countMistakes}
            </div>
        </div>
    </CSSTransition>
}

export default MistakesBlock