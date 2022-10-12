import { HTMLAttributes } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Airtable } from './Airtable';
import './courseSection.styles.css';


interface CourseSectionProps extends HTMLAttributes<HTMLDivElement> {
    /** required */
    sectionName: string;
    /** section description */
    description: string;
    /** section description */
    further?: string;
    /** pass Airtable ID */
    atId?: string;
    updateSideBar: Function;
}


export function CourseSection({ sectionName, description, atId="", updateSideBar}: CourseSectionProps): any {
    // const sectionRef = useRef()
    const { ref: sectionRef, inView: isInView } = useInView();
    // const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();

        useEffect(() => {
            updateSideBar(sectionName, isInView)
          }, [isInView]);
        
    
    const disciplines = [
        { name: "Software Engineering & Design", atId: "shrOTiklnj1suw6uq" },
        { name: "Data & DevOps", atId: "shrJznamiQCd5vqO6" }
      ]
      const renderDisciplines = () => disciplines.map((d, i) => <Table key={i} title={d.name} atId={d.atId} tWidth={"45%"} cards/>)
    
  return (
        <section className="course-section border" style={{width: "100%", paddingBottom: '100px', height: '110vh', position: 'relative', display: 'block' }}>
                <div 
                    ref={sectionRef} id={sectionName.toLowerCase()}  className="tip" 
                    style={{
                        display: 'flex', 
                        marginTop: '10vh', padding: '0 30px 0 0',
                        marginBottom: '8vh'
                        }} >
                    <h2 style={{margin: 0, padding: '20px 30px', verticalAlign: 'end', display: 'inline-block', position: 'absolute', right: '50px'}}>{sectionName}</h2>
                    {/* <span style={{marginRight: 'auto', marginTop: '5px', marginBottom: '10px', textAlign: 'left', width: '45vw', minWidth: '400px'}}>{description}</span> */}
                    <span className="description">{description}</span>
                </div>
                {/* <span className="tip">{further}</span> */}
                <div style={{display: "flex", justifyContent: "space-between", width: "inherit", minHeight: "300px" }}>
                {
                    sectionName === "Disciplines" ? renderDisciplines() : <Table atId={atId} tWidth={"100%"} />
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
    cards?: boolean;
}

const Table = ({title, atId, tWidth, cards}: TableProps): JSX.Element => (
    <div className="table" style={{width: tWidth, textAlign: 'left'}}>
        {title && <h4 style={{margin: '20px auto 5px 5px', paddingBottom: 0}}>{title}</h4> }
        <span className="text-italic" style={{marginRight: 'auto', marginLeft: '5px', fontSize: 'smaller'}}><i>Scroll & click for further module details</i></span>
        <div style={{width: '100%', height: '60vh' }}>
        <Airtable atId={atId} cards={cards} />
        </div>
    </div>
)