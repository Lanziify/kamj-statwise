import React from 'react'

const useQuizForm = (maxItem?: number) => {
    const [index, setIndex] = React.useState(0)

    const onNext = () => setIndex((prevIdex) => (prevIdex += 1))

    const onPrevious = () => setIndex((prevIdex) => (prevIdex -= 1))

    const resetIndex = () => setIndex(0)

    return {
        index,
        onNext,
        onPrevious,
        resetIndex,
    }
}

export default useQuizForm
