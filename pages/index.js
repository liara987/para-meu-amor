import {Great_Vibes} from 'next/font/google';

const great_vibes = Great_Vibes({subsets: ['latin'], weight: ['400']})

function Home() {
    const containerStyle = {
        fontFamily: "'Great Vibes', cursive",
        backgroundColor: '#f9f9f9',
        color: '#333',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    };

    const poemBoxStyle = {        
        maxWidth: '600px',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
    };

    const titleStyle = {
        fontWeight: 600,
        fontSize: '1.8rem',
        marginBottom: '20px',
        marginTop: '0'
    };

    const poemTextStyle = {
        fontWeight: 400,
        fontSize: '1.4rem',
        lineHeight: '1.6',
    };

    return (
        <div className={great_vibes.className} style={containerStyle}>
            <div style={poemBoxStyle}>
                <h1 style={titleStyle}>Para o meu amorzinho <img width={60} src="https://i.pinimg.com/originals/7b/df/06/7bdf0652d820489e07b41129ecc8b1e4.gif"/></h1>
                
                <p style={poemTextStyle}>
                    Ao teu lado o tempo voou, <br/>
                    Mas, no teu olhar, tudo se acalmou.                    
                </p>

                <p style={poemTextStyle}>
                    O mundo para, só existe eu e você, <br/>
                    E cada segundo é mágico de viver.
                </p>
                
                <p style={poemTextStyle}>
                    Feliz eu sou por te ver sorrir, <br/>
                    Um amor eterno, dedico somente a ti.
                </p>

                <span>De: Liara, a apaixonada.</span> <br/>
                <span>Para: Felipe, o amor da minha vida. ❤️</span>
            </div>
        </div>
    );
};

export default Home;