import { HTMLAttributes } from 'react';

interface NavProps extends HTMLAttributes<HTMLDivElement> {
    /**  */
    sections: { name: string }[];
}


export function Nav({ sections }: NavProps): JSX.Element {

      const renderSections = () => sections.map((s, i) => {
        return (
            <a className="btn"
                style={{width: '20%'}}
                href={`#${s.name.toLowerCase()}`}>
                {s.name}
            </a>
        )
      })
    
  return (
    <section className='nav ltr' style={{marginRight: 0}}>
        {renderSections()}
    </section>
  )
}