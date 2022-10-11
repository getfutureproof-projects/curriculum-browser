import { HTMLAttributes } from 'react';
import { Airtable } from '../Airtable'

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
    <section className="course-section" style={{width: "80vw", height: 'min-content', minHeight: '500px'}}>
        <h3>{sectionName}</h3>
        <span>{description}</span>
        <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
        {
            sectionName === "Disciplines" ?
                renderDisciplines() : <Table atId={atId} tWidth={"80vw"} />
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
    <div className="table" style={{width: tWidth, height: "300px" }}>
        {title && <h4>{title}</h4> }
        <Airtable atId={atId} />
    </div>
)