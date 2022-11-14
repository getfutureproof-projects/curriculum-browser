import './App.css'
import { useState, useEffect } from 'react';
import { CourseSection } from './components/CourseSection'
import { navSections } from './layout.json'
import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'
import { Info } from './components/Info'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useInView } from 'react-intersection-observer';
import { AnimatedArrow } from './components/AnimatedArrow';


function App() {
  const { ref: headerRef, inView: atTop } = useInView();

  const [inViewStatus, setInViewStatus] = useState({})
  // const [nextAnchor, setNextAnchor] = useState([])

  const updateSideBar = (section: string, isInView: boolean) => {
    setInViewStatus(prev => ({ ...prev, [section]: isInView }))
    // setNext()
  }


  const renderCourseSections = () => navSections.map((s, i) => <CourseSection key={i} section={s} updateSideBar={updateSideBar} />)


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
      width: '33vw',
      display: 'none'
    }}>
      <AnchorLink 
        offset={window.innerHeight * 0.12} href={`#${downer ? 'lap1' : 'intro' }`} >
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
            lineHeight: "9vh", color: 'var(--purple',
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
