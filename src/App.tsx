import './App.css'
import { useState, useEffect } from 'react';
import { CourseSection } from './components/CourseSection'
import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'
import { Info } from './components/Info'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useInView } from 'react-intersection-observer';
import { AnimatedArrow } from './components/AnimatedArrow';


function App() {
  const courseSections = [
    { name: "Discovery", atId: "shrdM3hKaMLUnLRGm", time: "3 weeks", description: "Gain insight into the landscape of the modern tech industry and ability to apply key professional development & communication skills", further: "The Core Modules are the heart & soul of this new programme. The topic areas have been defined as a result of extensive research & consultation with industry leaders, existing clients & our very own associates to identify the primary blockers for new hires into the technology industry across a wide variety of roles." },
    { name: "Delivery", atId: "shrUolFJ0sCdpGEEA", time: "3 weeks", description: "Gain essential understanding of & ability to apply basic techniques in key technology areas" },
    { name: "Disciplines", time: "3 weeks", description: "Gain deeper understanding & ability to apply further techniques that are particularly desirable within the area of assigned discipline", further: "Trainers use insights from the Foundation & Discovery sections to identify each student's areas of particular strength and create discipline ‘pods’. Each pod work separately on selected modules to enhance their insight into key aspects of that discipline area before coming back together to share & apply their skills in a multi-disciplinary project." },
    { name: "Launch", atId: "shrdjfcG9cqQDX92N", time: "3 weeks", description: "Gain understanding of interdisciplinary communication & collaboration and combine skills into a long-form multidisciplinary project" },
    { name: "Associate Content", atId: "shrjk2tfNqVm99rXP", description: "Continue techincal and professional development throughout immersive placement" }
  ]

  const { ref: headerRef, inView: atTop } = useInView();

  const [inViewStatus, setInViewStatus] = useState({})
  // const [nextAnchor, setNextAnchor] = useState([])

  const updateSideBar = (section: string, isInView: boolean) => {
    setInViewStatus(prev => ({ ...prev, [section]: isInView }))
    // setNext()
  }


  const renderCourseSections = () => courseSections.map((s, i) => <CourseSection key={i} sectionName={s.name} atId={s.atId} description={s.description} further={s.further} updateSideBar={updateSideBar} />)


  return (
    <>
      <section id="top-bar" className='bg-white' style={{ position: 'fixed', top: 0, right: 0, width: '100%', zIndex: 1 }}>
        {/* <header className="bg-white" style={{position: 'fixed', top: 0, right: 0}}>
      </header> */}
      </section>
      <Sidebar inViewStatus={inViewStatus} />

      <main>
        <span ref={headerRef} />
        <Info />
        {/* <Nav sections={courseSections} /> */}
        {renderCourseSections()}
      </main>
      <section className='footer' style={{ width: '65vw', position: 'fixed', bottom: 0, right: 0 }} />
      <Riser downer={atTop} />
      {/* <AnimatedArrow /> */}
    </>
  )
}

export default App


function Riser({ downer }: { downer: boolean }) {
  return (
    <div id="riser" style={{
      position: 'fixed',
      bottom: 0, left: 0,
      height: '13vh',
      width: '33vw'
    }}>
      <AnchorLink 
        offset={window.innerHeight * 0.12} href={`#${downer ? 'foundations' : 'intro' }`} >
        <div className='shape cog lime' style={{
          position: 'absolute', right: 0, top: 0,
          height: '9vh', width: '9vh'
        }}>

        </div>

        {/* <AnimatedArrow /> */}

        <span 
          className="text-display" 
          style={{
            position: 'absolute', right: 0, top: 0,
            lineHeight: 1.7, color: 'var(--purple',
            display: 'inline-block',
            height: '9vh', width: '9vh', fontSize: '2em', verticalAlign: 'middle',
            // style={{
              transform: downer ? 'rotate(180deg)' : 'rotate(0deg)',
              transformOrigin: 'center',
              transition: 'transform 1s'
            // }}>
          }}> 

          ↑</span>
      </AnchorLink>
    </div>
  )
}
