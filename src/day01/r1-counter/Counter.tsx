import {useCallback, useState } from "react";
import {Display} from './components/Display'
import {Controls} from './components/Controls'
import {History} from './components/HistoryList'
import styles from "./counter.module.scss";


export default function Counter() {

  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([])

  const canUndo = history.length >= 1 

  const handleIncrement = useCallback(() => {
    setHistory([...history, count])
    setCount(count + 1)
    history.slice(-10)
  },[count])

  const handleDecrement = useCallback(() => {
    setHistory([...history, count])
    setCount(count - 1)
    history.slice(-10)
  }, [count])

  const handleReset = useCallback(() => {
    setHistory([...history, count])
    setCount(0)
    history.slice(-10)
  }, [count])

  const handleUndo = useCallback(() => {
    const prev = history[history.length - 1]
    if(prev !== undefined) {
      setCount(prev)
      setHistory(history.slice(0, -1))
    }
  }, [count])

  return (
    <div className={styles.counter}>
      <Display value={count} />
      <Controls onIncrement={handleIncrement}
      canUndo={canUndo}
      onDecrement={handleDecrement}
      onReset={handleReset}
      onUndo={handleUndo} />
      <History items={history} />
      
    </div>
  );
}
