import { HTMLAttributes } from 'react';
import ReactCardFlip from 'react-card-flip';
import './sidebar.styles.css';

export function Sidebar(): JSX.Element {

    // const renderSections = () => sections.map((s, i) => {
    //     return (
    //         <a className="btn"
    //             style={{ width: '20%' }}
    //             href={`#${s.name.toLowerCase()}`}>
    //             {s.name}
    //         </a>
    //     )
    // })

    return (
        <aside
            id="sidebar"
            style={{
                position: 'fixed', left: 0, top: '10vh', height: '80vh', width: '25vw'
            }}>
            <div className="div1 border"> <h3>Assess</h3><p>3 months</p></div>
            <div className="div2 border"> <h3>Amplify</h3><p>12 weeks</p></div>
            <div className="div3 border"> <h3>Accelerate</h3><p>2 years</p></div>
            <div className="div4 txt-rotate bg-lemon"> <p className="text-display">Pre Academy</p></div>
            <div className="div5 txt-rotate bg-lime"> <p className="text-display">Intensive Training</p></div>
            <div className="div6 txt-rotate bg-coral"> <p className="text-display">Immersive Placement</p></div>
            <div className="div7 bg-lemon"> <p>Hai</p></div>
            <div className="div8 bg-lemon"> <p>Hai</p></div>
            <div className="div9 bg-lime"> <p>Hai</p></div>
            <div className="div10 bg-lime"> <p>Hai</p></div>
            <div className="div11 bg-lime"> <p>Hai</p></div>
            <div className="div12 bg-lime"> <p>Hai</p></div>
            <div className="div13 bg-coral"> <p>Hai</p></div>
            <div className="div14 bg-coral"> <p>Hai</p></div>
            <div className="div15 bg-coral"> <p>Hai</p></div>
        </aside>
        
    )
}