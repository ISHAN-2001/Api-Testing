// import { useEffect, useState } from 'react'
// import UseFetch from '../hooks/UseFetch'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Json({ data, isPending ,error , status }) {

    return (
        <div className="Json">
            <p>Responce:-</p>

            <p>Status:{status.status} and Message:{ status.statusText }</p> <br />

            {error && <div>Failed to fetch or Wrong url</div>}

            {isPending && 
                (
                    <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                  </Box>
            )}

            {data &&    
                (
                <div className="a">
                    <pre>
                        { JSON.stringify(data,null,2) }
                    </pre>
                </div>
            ) }
            
        </div>
    )
}
