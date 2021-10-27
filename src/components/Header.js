import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import UseFetch from '../hooks/UseFetch'
import Json from './Json'
import Tabs from './Tabs'

export default function Header() {
    
    const [method, setMethod] = useState('GET');
    const [text, settext] = useState('');
    const [url, seturl] = useState('');
    const [body, setbody] = useState("{\n\n}");
    const [count, setcount] = useState(0)
    
    const handleChange = (event) => {
        setMethod(event.target.value);
        console.log(method);
    };
    
    const sendRequest = () => {
        try {
            JSON.parse(body);
             // console.log("correct json");
            seturl(text);
            setcount(1 - count);
        } catch (err) {
            // console.log("Incorrect json");
            alert("Incorrect json in body!!");
        }
    }
    
    let { data, isPending, error ,status } = UseFetch(url, method,body,count);
    
    return (
        <>
        <div className="Header">

            <div className="Header-select">
                <FormControl sx={{ m: 1, minWidth: 120 , maxHeight: 60}}>
                    <InputLabel id="demo-simple-select-label">Method</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={method}
                        label="Method"
                        onChange={handleChange}
                    >

                        <MenuItem value={"GET"}>GET</MenuItem>
                        <MenuItem value={"POST"}>POST</MenuItem>
                        <MenuItem value={"PATCH"}>PATCH</MenuItem>
                        <MenuItem value={"DELETE"}>DELETE</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className="Header-text">
                    <input type="text" name="text" id="text"
                        value={text} onChange={(e)=> settext(e.target.value)}     />
            </div>

            <Button variant="contained" sx={{ m: 1, minHeight: 30 }} onClick={ sendRequest }>Send</Button>

            </div>

            <Tabs body={body} setbody={setbody }></Tabs>

            <Json data={data} isPending={isPending} error={error} status={ status}></Json>
            
            </>
    )
}
