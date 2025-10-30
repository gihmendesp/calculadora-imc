import React, { useState } from 'react'

export default function Tmb(){
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState('female')
  const [resultado, setResultado] = useState(null)

  function calcular(){
    const p = parseFloat(peso)
    const a = parseFloat(altura)
    const i = parseInt(idade,10)
    if(!p || !a || !i) return
    // altura em cm para a fórmula
    const hcm = a * 100
    let tmb
    if(sexo === 'male'){
      tmb = (10 * p) + (6.25 * hcm) - (5 * i) + 5
    } else {
      tmb = (10 * p) + (6.25 * hcm) - (5 * i) - 161
    }
    setResultado(Math.round(tmb))
  }

  return (
    <div>
      <h1>Calculadora TMB</h1>
      <div className="card">
        <select value={sexo} onChange={e=>setSexo(e.target.value)}>
          <option value="female">Feminino</option>
          <option value="male">Masculino</option>
        </select>
        <input type="number" value={peso} onChange={e=>setPeso(e.target.value)} placeholder="Peso (kg)" />
        <input type="number" value={altura} onChange={e=>setAltura(e.target.value)} placeholder="Altura (m) ex: 1.64" step="0.01" />
        <input type="number" value={idade} onChange={e=>setIdade(e.target.value)} placeholder="Idade" />
        <button onClick={calcular}>Calcular TMB</button>
        {resultado && <p className="resultado">TMB estimada: {resultado} kcal/dia</p>}
      </div>
    </div>
  )
}
