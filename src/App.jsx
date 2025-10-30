import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Imc from './pages/Imc'
import Tmb from './pages/Tmb'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Politica from './pages/Politica'
import Artigo1 from './pages/artigos/Artigo1'
import Artigo4 from './pages/artigos/Artigo4'

export default function App(){
  return (
    <div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/">Leve IMC</Link>
          <nav className="main-nav">
            <Link to="/imc">Calculadora IMC</Link>
            <Link to="/tmb">Calculadora TMB</Link>
            <Link to="/artigos/artigo1">Artigos</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/imc" element={<Imc/>} />
          <Route path="/tmb" element={<Tmb/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/contato" element={<Contato/>} />
          <Route path="/politica" element={<Politica/>} />
          <Route path="/artigos/artigo1" element={<Artigo1/>} />
          <Route path="/artigos/artigo4" element={<Artigo4/>} />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2025 Leve IMC. <Link to="/politica">Política de Privacidade</Link></p>
      </footer>
    </div>
  )
}
