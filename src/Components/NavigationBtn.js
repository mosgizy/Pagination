import React from 'react'
import { useGlobalContext } from '../context'

const navigate = (val, gap) => {
    let navEnd = val * gap;
    let navStart = navEnd - gap

    return [navStart, navEnd]

}

const NavigationBtn = () => {
    const pageIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const { currentPage, gap, dispatch } = useGlobalContext()

    const prevPage = () => {
        let newCurrentpage = currentPage - 1
        if (newCurrentpage < 1) {
            newCurrentpage = 10
        }

        dispatch({ type: 'PAGE', payload: [...navigate(newCurrentpage, gap), newCurrentpage] })
    }

    const nextPage = () => {
        let newCurrentpage = currentPage + 1
        if (newCurrentpage > 10) {
            newCurrentpage = 1
        }

        dispatch({ type: 'PAGE', payload: [...navigate(newCurrentpage, gap), newCurrentpage] })
    }

    return (
        <article className='flex gap-4 justify-center mt-16'>
            <button onClick={() => prevPage()} className='text-black capitalize tracking-wider'>prev</button>
            {
                pageIndex.map((value, index) => {
                    return <Btn key={index} value={value} />
                })
            }
            <button onClick={() => nextPage()} className='text-black capitalize tracking-wider'>next</button>
        </article>
    )
}

const Btn = ({ value }) => {
    const {currentPage, gap, dispatch } = useGlobalContext()

    const navigateBtn = (value) => {
        dispatch({ type: 'PAGE', payload: [...navigate(value, gap), value] })
    }

    return <button onClick={() => navigateBtn(value)} className={`bg-green-300 py-1.5 px-3 text-sm rounded-lg ${value === currentPage ? 'active' : ''}`}>{value}</button>
}

export default NavigationBtn
