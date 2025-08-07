'use client'
import styles from './page.module.css'
import ProductCard from '@/components/ProductCard/ProductCard'
import { products } from './Data/products'
import { useState, useEffect } from 'react'
import Header from '@/components/Header/Header'

export default function HomePage() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
     
  useEffect(() => {
    // Simula um carregamento de dados
    const loadProducts = async () => {
      setLoading(true);
      
      // Simula delay de carregamento (você pode remover isso se já tiver dados reais)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setProdutos(products);
      setLoading(false);
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <main className={styles.main}>
        <Header />
        <div className={styles.loadingContainer}>
          <img 
            src="./loading.gif" 
            alt="Carregando..." 
            className={styles.loadingGif}
          />
          <p className={styles.loadingText}>Carregando produtos...</p>
        </div>
      </main>
    );
  }
     
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