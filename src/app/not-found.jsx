import style from './notFound.module.css';
export default function NotFound() {
    return (
        <div className={style.notFound}>
            <h1 className={style.errorName}>🔎404🔍</h1>
            <h2 className={style.errorDescription}>Página não encontrada</h2>
            <p className={style.errorMessage}>Desculpe, não conseguimos encontrar a página que você está procurando.</p>
            <a className={style.errorLink} href="/">Voltar para a página inicial</a>
        </div>
    );
}