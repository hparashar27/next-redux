"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { decrement, increment, reset } from '@/redux/features/counterSlice';

export default function Home() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state)=>state.counterReducer.value);

  return (
     <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button
          onClick={() => dispatch(decrement())}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </main>
  )
}
