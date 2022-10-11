import { Airtable } from '../Airtable'

export function CourseSection({ sectionName, atId }) {
    
    const disciplines = [
        { name: "Software Engineering & Design", atId: "shrdM3hKaMLUnLRGm" },
        { name: "Data & DevOps", atId: "shrUolFJ0sCdpGEEA" }
      ]
      const renderDisciplines = () => disciplines.map((d, i) => <Table title={d.name} atId={d.atId} tWidth={"35vw"} />)
    
  return (
    <div className="course-section" style={{width: "80vw", height: 'min-content', minHeight: '500px'}}>
        <h3>{sectionName}</h3>
        <div style={{display: "flex", justifyContent: "space-between"}}>
        {
            sectionName === "Disciplines" ?
                renderDisciplines() : <Table atId={atId} tWidth={"80vw"} />
        }
        </div>
    </div>
  )
}

const Table = ({title, atId, tWidth}) => (
    <div className="table" style={{width: tWidth, height: "300px" }}>
        {title && <h4>{title}</h4> }
        <Airtable atId={atId} />
    </div>
)