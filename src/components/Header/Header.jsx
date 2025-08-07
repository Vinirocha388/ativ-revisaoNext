import React from 'react'
import styles from './header.module.css'
import { products } from '@/app/Data/products'


export default function Header() {
  return (
     <div className={styles.header}>
            <h1>🛒 Loja de Eletrônicos</h1>
            <p>Os melhores produtos com os melhores preços!</p>
            <p>📊 Total de produtos: <span id="totalProducts">{products.length}</span></p>
        </div>
  )
}   
