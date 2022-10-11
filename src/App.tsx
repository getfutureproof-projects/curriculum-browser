import './App.css'
import { CourseSection } from './components/CourseSection'

function App() {
  const courseSections = [
    { name: "Foundations", atId: "shrdM3hKaMLUnLRGm", description: "Gain insight into the landscape of modern tech industry and ability to apply key professional development skills" },
    { name: "Discovery", atId: "shrUolFJ0sCdpGEEA", description: "Gain essential understanding of & ability to apply basic techniques in key technology areas" },
    { name: "Disciplines", description: "Gain deeper understanding & ability to apply further techniques that are particularly desirable within the area of assigned discipline" },
    { name: "Launch", atId: "shrdjfcG9cqQDX92N", description: "Gain understanding of interdisciplinary communication & collaboration and combine skills into a long-form multidisciplinary project" }
  ]
  const renderCourseSections = () => courseSections.map((s, i) => <CourseSection key={i} sectionName={s.name} atId={s.atId} description={s.description} />)

  return (
    <div>
      {renderCourseSections()}
    </div>
  )
}

export default App
