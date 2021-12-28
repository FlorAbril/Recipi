import Link from 'next/link'

export default function Trabajando(){
    return(
        <div style={{'paddingLeft':'1em'}}>
            <h2>
                🛠 Estamos trabajando en esta página, disculpe las molestias :)
            </h2>
            <Link href="/">
                <a>
                    ← Volver al inicio
                </a>
		    </Link>
        </div>
    )
}