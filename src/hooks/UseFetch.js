import { useState, useEffect } from 'react';
const UseFetch = (url, method, body, count) => {
    
    
    if (method === undefined) {
        method = "GET";
    }

    if (method === "GET") {
        body = null;
    }
 
    const [data, setdata] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, seterror] = useState(null);
    const [status, setstatus] = useState({'status':'','statusText':''})

    useEffect(() => {
        const Abortcont = new AbortController();

        async function fetchData() {
            try {
                console.log("Fetch request sent");
                let res = await fetch(`${url}`, {
                    signal: Abortcont.signal,
                    mode: 'cors',
                    method:method,
                    body: body,   
                    headers: { 'Content-Type': 'application/json;charset=utf-8' }
                });
                console.log(res);
                setstatus({ 'status': res.status, 'statusText': res.statusText });
    
                if (!res.ok) {
                    throw Error('Could not reach server');
                }


                let result = await res.json();
                setdata(result);
                setisPending(false);
                seterror(null);
                console.log(result);
    
            } catch (err) {
                console.log("In Catch block");
                console.error(err);
                seterror(err);
                setdata(null);
                setisPending(false);
            }
        }
        fetchData();

        return () => Abortcont.abort();
    }, [count]);


    return { data, isPending, error ,status };
}

export default UseFetch;