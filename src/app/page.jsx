'use client'
import styles from './page.module.css'
import ProductCard from '@/components/ProductCard/ProductCard'
import { products } from './Data/products'
import {useState} from 'react'
import Header from '@/components/Header/Header'

export default function HomePage() {
  const [produtos, setProdutos] = useState(products);
     
    return (
      <main className={styles.main}>
        <Header />
        <div className={styles.productGrid}>
          {produtos.map((produto, index) => (
            <ProductCard 
              key={index}
              nome={produto.nome}
              categoria={produto.categoria}
              imagem={produto.imagem}
              preco={produto.preco}
              descricao={produto.descricao}
              avaliacao={produto.avaliacao}
            />
          ))}
        </div>
      </main>
    );
}