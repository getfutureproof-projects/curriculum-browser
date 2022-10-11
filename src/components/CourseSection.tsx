import { HTMLAttributes } from 'react';
import { Airtable } from '../Airtable'

interface CourseSectionProps extends HTMLAttributes<HTMLDivElement> {
    /** required */
    sectionName: string;
    /** pass Airtable ID */
    atId?: string;
}


export function CourseSection({ sectionName, atId="" }: CourseSectionProps): JSX.Element {
    
    const disciplines = [
        { name: "Software Engineering & Design", atId: "shrdM3hKaMLUnLRGm" },
        { name: "Data & DevOps", atId: "shrUolFJ0sCdpGEEA" }
      ]
      const renderDisciplines = () => disciplines.map((d, i) => <Table title={d.name} atId={d.atId} tWidth={"35vw"} />)
    
  return (
    <section className="course-section" style={{width: "80vw", height: 'min-content', minHeight: '500px'}}>
        <h3>{sectionName}</h3>
        <div style={{display: "flex", justifyContent: "space-between"}}>
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