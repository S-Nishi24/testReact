"use client";
import { useState } from "react";//useStateをインポート

//ほかのファイルからCounter関数を呼び出し可能になる
export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };
    const decrementCount = () => {
        setCount(count - 1);
    };
    const resetCount=()=>{
        setCount(0);
    };


    return (
        <div>
            <p>現在のカウント： {count}</p>
            <button onClick={incrementCount}>カウントを増やす</button>
            <button onClick={decrementCount}>カウントを減らす</button>
            <button onClick={resetCount}>リセット</button>
        </div>
    );
}