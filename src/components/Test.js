import { useState } from 'react'
import UseFetch from '../hooks/UseFetch'

export default function Test() {

    const [text, settext] = useState('')
    const [url, seturl] = useState('')
    let { data, isPending, error } = UseFetch(String(url));
    
    const handleclick = () => {
        seturl(text);
    }
    return (
        <div>
            <div className="text">
                <textarea name="url" id="" cols="30" rows="10"
                    value={text} onChange={(e) => settext(e.target.value)} placeholder="https://example.com"
                ></textarea>
                <button onClick={ handleclick }>Send</button>
            </div>
            <div className="json">

                {error && <div>{ "{}" }</div>}
            
                {isPending && <div>Loading...</div>}

                {data && 
                (<pre>
                    { JSON.stringify(data,null,2) }
                </pre>)}
                
            </div>
        </div>
    )
}
