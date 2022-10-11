import { HTMLAttributes } from 'react';
import { Airtable } from './Airtable'

interface CourseSectionProps extends HTMLAttributes<HTMLDivElement> {
    /** required */
    sectionName: string;
    /** section description */
    description: string;
    /** pass Airtable ID */
    atId?: string;
}


export function CourseSection({ sectionName, description, atId="" }: CourseSectionProps): JSX.Element {
    
    const disciplines = [
        { name: "Software Engineering & Design", atId: "shrOTiklnj1suw6uq" },
        { name: "Data & DevOps", atId: "shrJznamiQCd5vqO6" }
      ]
      const renderDisciplines = () => disciplines.map((d, i) => <Table key={i} title={d.name} atId={d.atId} tWidth={"35vw"} />)
    
  return (
    <section id={sectionName.toLowerCase()} className="course-section border" style={{width: "80vw", paddingBottom: '100px', height: 'min-content' }}>
        <h3 style={{marginRight: 'auto', marginBottom: '10px'}}>{sectionName}</h3>
        <span style={{marginRight: 'auto', marginTop: '5px', marginBottom: '10px', textAlign: 'left', width: '45vw', minWidth: '400px'}}>{description}</span>
        <div style={{display: "flex", justifyContent: "space-between", width: "100%", height: "300px", overflow: "clip"}}>
        {
            sectionName === "Disciplines" ? renderDisciplines() : <Table atId={atId} tWidth={"80vw"} />
        }
        </div>
    </section>
  )
}

interface TableProps extends HTMLAttributes<HTMLDivElement> {
    /** required */
    atId: string;
    /** optional title */
    sectionName?: string;
    /** set width */
    tWidth?: string;
}

const Table = ({title, atId, tWidth}: TableProps): JSX.Element => (
    <div className="table" style={{width: tWidth}}>
        {title && <h4 style={{marginRight: "auto"}}>{title}</h4> }
        <div style={{width: tWidth, height: '300px' }}>
        {/* <Airtable atId={atId} /> */}
        </div>
    </div>
)