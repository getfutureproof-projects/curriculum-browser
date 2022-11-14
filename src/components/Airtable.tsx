import { HTMLAttributes } from 'react';
import LoadingIframe from 'react-loading-iframe';
import SquareLoader from "react-spinners/SquareLoader";
import RingLoader from "react-spinners/RingLoader";

interface AirtableProps extends HTMLAttributes<HTMLIFrameElement> {
    /** required */
    atId?: string;
    cards?: boolean;
}

export function Airtable({ atId, cards }: AirtableProps) {
    return (
            <LoadingIframe
                skeleton={<Skeleton />}
                className="airtable-embed" frameBorder={0} 
                src={`https://airtable.com/embed/${atId}?backgroundColor=purple${cards ? '&layout=card' : ''}` }
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
        <section className="ttb" style={{paddingTop: '100px', width: '100%'}}>

        {/* <SquareLoader */}
        <RingLoader
            color="#b6a2ff"
            loading
            aria-label="Loading Spinner"
            data-testid="loader"
            />
            <p className='display-font text-violet'>Loading...</p>
        </section>
      )
      }