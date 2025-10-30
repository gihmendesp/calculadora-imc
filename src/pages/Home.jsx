import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      {/* Ad placeholder (replace data-ad-slot) */}
      <div style={{maxWidth:1000, margin:'10px auto', padding:'0 20px'}}>
        <ins className="adsbygoogle" style={{display:'block'}} data-ad-client="ca-pub-9890571230448286" data-ad-slot="REPLACE_WITH_AD_SLOT" data-ad-format="auto" data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>

      <h1>Bem-vindo ao Leve IMC</h1>
      <p className="lead">Ferramentas simples para acompanhar sua saúde: calcule seu IMC ou seu metabolismo basal em páginas dedicadas.</p>

      <div className="cards">
        <Link to="/imc" className="card">
          <h3>Calculadora IMC</h3>
          <p>Calcule seu Índice de Massa Corporal e veja dicas rápidas.</p>
        </Link>

        <Link to="/tmb" className="card">
          <h3>Calculadora TMB</h3>
          <p>Calcule seu metabolismo basal e necessidades calóricas.</p>
        </Link>
      </div>

      <hr className="separador" />

      <section className="artigos">
        <p>Leia nossos artigos:</p>
        <Link to="/artigos/artigo1" className="artigo-card">
          <h3>O que é IMC e como calcular</h3>
          <p>Entenda o Índice de Massa Corporal e como ele pode ajudar a acompanhar sua saúde.</p>
        </Link>
        <Link to="/artigos/artigo4" className="artigo-card">
          <h3>O que é Metabolismo Basal e por que ele é importante</h3>
          <p>Saiba mais sobre o que é Metabolismo Basal.</p>
        </Link>
      </section>
    </div>
  )
}
