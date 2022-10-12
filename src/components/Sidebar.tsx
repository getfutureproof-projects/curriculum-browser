import { HTMLAttributes, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './sidebar.styles.css';
import {periods} from '../layout.json'
import infoIcon from '../assets/info-icon.svg'

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
    /** required */
    inViewStatus: { [key: string]: boolean }
}

export function Sidebar({ inViewStatus }: SidebarProps): JSX.Element {
    console.log(inViewStatus);
    
    const renderPeriods = () => {
        let lefts: JSX.Element[] = []
        let mids: JSX.Element[] = []
        let rights: JSX.Element[] = []
        
        const calcPeriodBg = (p: { sections: {name: string}[]}) => inViewStatus.hasOwnProperty(p.sections[0].name) ? 'bright' : 'greyscale'
        const calcSectionBg = (s: { name: string }) => inViewStatus[s.name] ? 'bright' : 'greyscale'

        const renderFlip = (p: { color: string}, s: { name: string, description: string, time?: string }) => (<FlipCard
                        front={<div className={`right front bg-${p.color} ${calcSectionBg(s)}`}>
                            <span className="sectitle sidebar">{s.name}</span><br />
                            {s.time && <span className="tip sidebar">{s.time}</span>}
                        </div>} 
                        back={<div className={`right back bg-${p.color} light`}>{s.description}</div>}
                    />)
 
        periods.forEach((p, i) => {
            
            let sections = p.sections.map((s, si) => (
                <div key={si + i} className={`right`}>
                    { 
                        inViewStatus.hasOwnProperty(s.name) ? 
                            (<AnchorLink offset={window.innerHeight * 0.12} href={`#${s.name.toLowerCase()}`} style={{ color: "var(--purple)"}}>
                                {renderFlip(p, s)}
                            </AnchorLink>)
                            :
                            renderFlip(p, s)
                    }
                    
                </div> ))

            lefts.push(<div className={`left text-rotate`}>
                {/* <h3>{p.tag}</h3> */}
                <p className={`${calcPeriodBg(p)}`}>{p.time}</p></div>)
            mids.push(
                <div className={`mid text-rotate`}>
                    <p className={`text-display bg-${p.color} ${calcPeriodBg(p)}`}>{p.name}</p>
                </div>)
            rights.push(...sections)
        })

        return [...lefts, ...mids, ...rights]
    }

    return (
        <aside id="sidebar">
            {renderPeriods()}
            <div className="timeline ttb"
            style={{position: 'fixed', height: '60vh', top: '12vh', left: 0, width: '10vw', zIndex: 2}}></div>
        </aside>
        
    )
}

interface FlipCardProps {
    /** required */
    front: string | JSX.Element;
    /** required */
    back: string | JSX.Element;

}

const FlipCard = ({front, back}: FlipCardProps): JSX.Element => {
    const [isFlipped, setIsFlipped] = useState(false)
    
    return (
    <ReactCardFlip 
        isFlipped={isFlipped} flipDirection="horizontal">
        <>
        <InfoIcon onClick={() => setIsFlipped(true)} />
        {front}
        </>

        <>
        <InfoIcon onClick={() => setIsFlipped(false)} />
        {back}
        </>
    </ReactCardFlip>
)}

const InfoIcon = ({onClick}: HTMLAttributes<HTMLOrSVGElement>): JSX.Element => (<svg 
    className='icon'
    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="25" height="25"
    onClick={onClick}
    viewBox="0 0 30 30"
    style={{"fill": "#ffffff", "cursor": "pointer"}}>
    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z"></path>
    </svg>

)