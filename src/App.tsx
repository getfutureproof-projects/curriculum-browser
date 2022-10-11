import './App.css'
import { CourseSection } from './components/CourseSection'
import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'

function App() {
  const courseSections = [
    { name: "Foundations", atId: "shrdM3hKaMLUnLRGm", description: "Gain insight into the landscape of the modern tech industry and ability to apply key professional development & communication skills" },
    { name: "Discovery", atId: "shrUolFJ0sCdpGEEA", description: "Gain essential understanding of & ability to apply basic techniques in key technology areas" },
    { name: "Disciplines", description: "Gain deeper understanding & ability to apply further techniques that are particularly desirable within the area of assigned discipline" },
    { name: "Launch", atId: "shrdjfcG9cqQDX92N", description: "Gain understanding of interdisciplinary communication & collaboration and combine skills into a long-form multidisciplinary project" }
  ]
  const renderCourseSections = () => courseSections.map((s, i) => <CourseSection key={i} sectionName={s.name} atId={s.atId} description={s.description} />)

  return (
    <div>
      <header className="bg-white">
        <Nav sections={courseSections}/>
      <Sidebar />
      
      </header>

      <section className='ltr'>
        A 2.5-year programme combining intensive training & immersive placement experiences, taking the tech-curious to tech-professional. 
      </section>
      {renderCourseSections()}
      <section className='footer' />
    </div>
  )
}

export default App
