import { HTMLAttributes } from 'react';

interface AirtableProps extends HTMLAttributes<HTMLIFrameElement> {
    /** required */
    atId: string;
}

export function Airtable({ atId }: AirtableProps) {
    return (
            <iframe
                className="airtable-embed" frameBorder="0" 
                src={`https://airtable.com/embed/${atId}` }
                style={{
                    background: "transparent", 
                    border: "1px solid #ccc",
                    width: "100%",
                    height: "100%"
                }}>
            </iframe>
    )
}