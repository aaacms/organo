import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li><a href='www.facebook.com'><img src='/imagens/fb.png' alt='Logo do Facebook' /></a></li>
                    <li><a href='www.instagram.com'><img src='/imagens/ig.png' alt='Logo do Instagram' /></a></li>
                    <li><a href='www.twitter.com'><img src='/imagens/tw.png' alt='Logo do Twitter' /></a></li>
                </ul>
            </section>
            <img src='/imagens/logo.png' alt='Logo do Organo' />
            <p>Desenvolvido por AAACMS.</p>
        </footer>
    )
}

export default Rodape