import { useState, useEffect } from "react";

import Controls from "./Components/Controls";


export default function App() {
    const [length, setLength] = useState<number>(21);
    const [array, setArray] = useState(() => {
        let arr = [];
        for (let i = 0; i < length; i++) {
            arr.push(Math.random() + 1 * 400);
        }
        return arr;
    });

    useEffect(() => {
        setArray([]);
        for (let i = 0; i < length; i++) {
            setArray(arr => [...arr, Math.random() * 400])
        }
    }, [length]);

    function generateNewArray() {
        let arr = [];
        for (let i = 0; i < length; i++) {
            arr.push(Math.random() * 400);
        }
        setArray(arr);
    }

    return (
        <>
            <section className="bg-slate-100 my-5 mx-6 py-2 rounded-lg shadow-lg">
                <Controls arrLength={length} setLength={setLength} generateNewArray={generateNewArray} />
            </section>
            <section className="bg-slate-100 h-[27em] mt-10 mx-6 py-2 rounded-lg shadow-lg">
                <div className="flex justify-center px-4 pb-3 ">
                    {array.map((val, ind) => {
                        return <div key={ind} style={{ height: val }} className="bg-black w-full rounded-md px-4 mx-1" />
                    })}
                </div>
            </section>
        </>
    )
}
