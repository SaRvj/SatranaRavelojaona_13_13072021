import { Link } from "react-router-dom"

function Error() {
    return (
        <div className="errorpage">
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Error page</h2>
                    <p className="subtitle">404</p>
                    <p className="subtitle">Oups! La page que vous demandez n'existe pas.</p>
                    <p className="text"><Link to="/">Retourner sur la page d'accueil</Link></p>
                </section>
            </div>
        </div>
    )
}

export default Error