import React, { useState } from 'react'

export default function Imc(){
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState(null)
  const [history, setHistory] = useState([])

  function calcular(){
    const p = parseFloat(peso)
    const a = parseFloat(altura)
    if(!p || !a) return
    const imc = p / (a * a)
    const value = imc.toFixed(1)
    setResultado(value)
    setHistory(h => [{peso:p, altura:a, imc:value, date: new Date().toLocaleString()}, ...h])
  }

  return (
    <div>
      <h1>Calculadora IMC</h1>
      <p className="lead">Insira seu peso e altura para calcular o IMC.</p>
      <div className="card">
        <input type="number" value={peso} onChange={e=>setPeso(e.target.value)} placeholder="Digite seu peso (kg)" />
        <input type="number" value={altura} onChange={e=>setAltura(e.target.value)} placeholder="Digite sua altura (m) ex: 1.64" step="0.01" />
        <button onClick={calcular}>Calcular IMC</button>
        {resultado && <p className="resultado">IMC: {resultado}</p>}
        <div className="history">
          {history.map((h, i) => (
            <div key={i} className="history-item">{h.date} — peso: {h.peso} kg, altura: {h.altura} m — IMC: {h.imc}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
