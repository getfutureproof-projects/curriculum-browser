import './App.css'
import { CourseSection } from './components/CourseSection'

function App() {
  const courseSections = [
    { name: "Foundations", atId: "shrdM3hKaMLUnLRGm" },
    { name: "Discovery", atId: "shrUolFJ0sCdpGEEA" },
    { name: "Disciplines" },
    { name: "Launch", atId: "shrdjfcG9cqQDX92N" }
  ]
  const renderCourseSections = () => courseSections.map((s, i) => <CourseSection key={i} sectionName={s.name} atId={s.atId} />)

  return (
    <div>
      {renderCourseSections()}

    </div>
  )
}

export default App
