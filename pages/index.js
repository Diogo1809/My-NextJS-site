import Link from 'next/link';

function Home () {
    return (<div>
        <h1>Site de Diogo Schwartz</h1>
        <Link href="/sobre">
        <a>Acessar página sobre</a>
        </Link>
    </div>)
}
export default Home