export function Airtable({ atId }) {

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