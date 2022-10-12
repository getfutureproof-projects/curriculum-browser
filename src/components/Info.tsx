import './info.styles.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';

export function Info() {
    return (
        <section id="intro" className="ttb" style={{minHeight: '80vh', flexWrap: 'nowrap', paddingTop: '20px', marginTop: 0 }}>
            <p className='medium p-tiny m-tiny'>futureproof Curriculum</p>
            <h1 className='xlarge m-small' style={{marginBottom: '20px'}}>Intensive Traning Phase</h1>
            <div className="tr tip">
                The futureproof programme creates & delivers training content that enables established technology teams to bring in diverse, junior talent with <em className="xbold">strong foundations</em>, an <em className="xbold">aligned mindset</em> and <em className="xbold">understanding of the technology industry as a whole</em>. With continuous improvement via consultation with industry leaders, existing partners & associates, we ensure that our associates are prepared for Day 1 of their placement with the <em className="xbold">key professional skills</em> required and a <em className="xbold">defined development plan</em> for their first 2 years in industry.
            </div>
            <div className="br tip">
                During the <AnchorLink offset={window.innerHeight * 0.12} href="#foundations"><em className="xbold">Foundations</em></AnchorLink> and <AnchorLink offset={window.innerHeight * 0.12} href="#discovery"><em className="xbold">Discovery</em></AnchorLink> sections of the <em className="xbold">12-week intensive training</em>, trainees work with their trainers to identify areas of particular strength. Trainers use these insights to create discipline ‘pods’. Each pod works separately on selected modules to enhance their insight into 
                key aspects of a <AnchorLink offset={window.innerHeight * 0.12} href='#disciplines'><em className="xbold">Discipline</em></AnchorLink> area before coming back together in the <AnchorLink offset={window.innerHeight * 0.12} href="#launch"><em className="xbold">Launch</em></AnchorLink> section to share & apply their skills in a multi-disciplinary project.
            </div>

            <div className='tip'>
                Throughout the <em className="xbold">2-year placement</em>, trainees have access to our full catalogue of <em className="xbold">additional content</em> across a range of topics including <em className="xbold">more languages & tools</em> as well as <em className="xbold">advanced concepts</em> not covered on the 12-week intensive training.
            </div>
        </section>
    )
}