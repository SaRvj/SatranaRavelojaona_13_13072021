import Feature from '../components/FeatureItem'
import { featureData } from '../data/data'

function HomePage() {
    return (
        <main className="homepage">
            <div className="hero">
                <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className='features'>
                <h2 className='sr-only'>Features</h2>
                {featureData && featureData.map((e, i) => (
                <Feature key={i} src={e.imgSrc} alt={e.alt} title={e.title} text={e.text} />
                ))}
            </section>
        </main>
    )
}

export default HomePage