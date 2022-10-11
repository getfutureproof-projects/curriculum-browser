import './App.css'
import { CourseSection } from './components/CourseSection'
import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'
import { Info } from './components/Info'

function App() {
  const courseSections = [
    { name: "Foundations", atId: "shrdM3hKaMLUnLRGm", description: "Gain insight into the landscape of the modern tech industry and ability to apply key professional development & communication skills", further: "The Core Modules are the heart & soul of this new programme. The topic areas have been defined as a result of extensive research & consultation with industry leaders, existing clients & our very own associates to identify the primary blockers for new hires into the technology industry across a wide variety of roles." },
    { name: "Discovery", atId: "shrUolFJ0sCdpGEEA", description: "Gain essential understanding of & ability to apply basic techniques in key technology areas" },
    { name: "Disciplines", description: "Gain deeper understanding & ability to apply further techniques that are particularly desirable within the area of assigned discipline", further: "Trainers use insights from the Foundation & Discovery sections to identify each student's areas of particular strength and create discipline ‘pods’. Each pod work separately on selected modules to enhance their insight into key aspects of that discipline area before coming back together to share & apply their skills in a multi-disciplinary project." },
    { name: "Launch", atId: "shrdjfcG9cqQDX92N", description: "Gain understanding of interdisciplinary communication & collaboration and combine skills into a long-form multidisciplinary project" }
  ]
  const renderCourseSections = () => courseSections.map((s, i) => <CourseSection key={i} sectionName={s.name} atId={s.atId} description={s.description} further={s.further} />)

  return (
    <div>
      <header className="bg-white">
        <Nav sections={courseSections}/>
      <Sidebar />
      
      </header>

      {/* <Info /> */}
      <Nav sections={courseSections} />
      {renderCourseSections()}
      <section className='footer' />
    </div>
  )
}

export default App
