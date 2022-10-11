import { HTMLAttributes } from 'react';
import LoadingIframe from 'react-loading-iframe';
import SquareLoader from "react-spinners/SquareLoader";

interface AirtableProps extends HTMLAttributes<HTMLIFrameElement> {
    /** required */
    atId: string;
}

export function Airtable({ atId }: AirtableProps) {
    return (
            <LoadingIframe
                skeleton={<Skeleton />}
                className="airtable-embed" frameBorder={0} 
                src={`https://airtable.com/embed/${atId}` }
                style={{
                    background: "transparent", 
                    border: "1px solid #ccc",
                    width: "100%",
                    height: "100%"
                }}>
            </LoadingIframe>
    )
}



const Skeleton = () => {
      return (
        <section className="ttb" style={{paddingTop: '100px'}}>

        <SquareLoader
            color={'#3c2157'}
            loading
            aria-label="Loading Spinner"
            data-testid="loader"
            />
            <p className='display-font'>Loading...</p>
        </section>
      )
      }