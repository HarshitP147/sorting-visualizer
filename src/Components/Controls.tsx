import React from "react"

interface propTypes {
    arrLength: number,
    setLength: React.Dispatch<React.SetStateAction<number>>,
    generateNewArray: () => void
}

function Controls(props: propTypes) {

    function arrayLengthChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        props.setLength(Number(e.target.value))
    }

    return (
        <div className="select-none">
            <div className="flex justify-around">
                <div className="slider-container">
                    <label>Size of the array</label>
                    <input type="range" className="slider" min={7} max={35} step={1} value={props.arrLength} onChange={arrayLengthChangeHandler} />
                </div>
                <div className="slider-container">
                    <label>Speed of sorting</label>
                    <input type="range" className="slider" />
                </div>
            </div>

            <div className="btn-container">
                <button className="btn-new" onClick={props.generateNewArray}>Generate a new Array</button>
                <button className="btn">Bubble Sort</button>
                <button className="btn">Selection Sort</button>
                <button className="btn">Insertion Sort</button>
                <button className="btn">Quick Sort</button>
                <button className="btn">Heap Sort</button>
            </div>

        </div>
    )
}
export default Controls;