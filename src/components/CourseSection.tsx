import { HTMLAttributes } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Airtable } from './Airtable';
import './courseSection.styles.css';

interface CourseSectionObj {
    /** required */
    name: string;
    /** required */
    navRef: string;
    /** section description */
    description: string;
    /** section description */
    further?: string;
    /** pass Airtable ID */
    atId?: string;
    note?: string;
  }

interface CourseSectionProps extends HTMLAttributes<HTMLDivElement> {
    section: CourseSectionObj;
    updateSideBar: Function;
}


export function CourseSection({section, updateSideBar}: CourseSectionProps): any {

    const { name, navRef, description, atId, note } = section;

    const { ref: sRef, inView: isInView } = useInView();

        useEffect(() => {
            updateSideBar(navRef, isInView)
          }, [isInView]);
        
    
    const disciplines = [
        { name: "Software Engineering & Design", atId: "shrOTiklnj1suw6uq", width: "62%"},
        { name: "Data & DevOps", atId: "shrJznamiQCd5vqO6", note: "In development, subject to change", width: "35%" }
      ]
      const renderDisciplines = () => disciplines.map((d, i) => <Table key={i} title={d.name} atId={d.atId} tWidth={d.width} note={d.note} />)
    
  return (
        <section className="course-section border" style={{width: "100%", paddingBottom: '100px', height: '110vh', position: 'relative', display: 'block' }}>
                <div 
                    ref={sRef} id={navRef}  className="tip" 
                    style={{
                        display: 'flex', 
                        marginTop: '10vh', padding: '0 30px 0 0',
                        marginBottom: '8vh'
                        }} >
                    <h2 style={{margin: 0, padding: '20px 30px', verticalAlign: 'end', display: 'inline-block', position: 'absolute', right: '50px'}}>{name}</h2>
                    {/* <span style={{marginRight: 'auto', marginTop: '5px', marginBottom: '10px', textAlign: 'left', width: '45vw', minWidth: '400px'}}>{description}</span> */}
                    <span className="description">{description}</span>
                </div>
                {/* <span className="tip">{further}</span> */}
                <div style={{display: "flex", justifyContent: "space-between", width: "inherit", minHeight: "300px" }}>
                {
                    name === "Disciplines" ? renderDisciplines() : <Table atId={atId} tWidth={"100%"} note={note} cards={!!(navRef=='placement')}/>
                }
                </div>
        </section>

  )
}

interface TableProps extends HTMLAttributes<HTMLDivElement> {
    /** required */
    atId?: string;
    /** optional title */
    name?: string;
    /** set width */
    tWidth?: string;
    note?: string;
    cards?: boolean;
}

const Table = ({title, atId, tWidth, cards, note}: TableProps): JSX.Element => (
    <div className="table" style={{width: tWidth, textAlign: 'left'}}>
        {title && <h4 style={{margin: '20px auto 5px 5px', paddingBottom: 0}}>{title}</h4> }
        <span className="text-italic" style={{marginRight: 'auto', marginLeft: '5px', fontSize: 'smaller'}}><i>{ note || ""}</i></span>
        <div style={{width: '100%', height: '60vh' }}>
        <Airtable atId={atId} cards={cards} />
        </div>
    </div>
)