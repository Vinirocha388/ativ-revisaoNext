import React from 'react'
import styles from './ProductCard.module.css'
export default function ProductCard({imagem, nome, preco, descricao, avaliacao, categoria}) {
return (
    <div className={styles.productCard}>
        <div className={styles.productImage}>
            <img src={imagem} alt={nome} style={{maxWidth: '100%', maxHeight: '100%'}} />
        </div> 
        <div>
            <h4 className={styles.productName}>{nome ? nome : "Nome não informado"}</h4>
            <p className={styles.productPrice}>{preco ? `Preço: R$ ${preco}` : "Preço não informado"}</p>
            <p className={styles.productCategory}>{categoria ? `Categoria: ${categoria}` : "Categoria não informada"}</p>
            <p className={styles.productDescription}>{descricao ? descricao : "Descrição não informada"}</p>
            <p className={styles.productRating}>
                {avaliacao ? (
                    <>
                       Avaliação: <span className={styles.stars}>{'★'.repeat(avaliacao)}</span>
                    </>
                ) : "Avaliação não informada"}
            </p>
        </div>
    </div>
)
}
