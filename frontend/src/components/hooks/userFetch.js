import axios from "axios"
import { useEffect, useState } from "react"


const useFetch = (url)=>{
    const [data, setData] = useState([])
    const [loding, setLoding] = useState(false)
    const [erro, setError] = useState(false)

    useEffect(()=>{
        const fetchData = async()=>{
            setLoding(true)
            try{
                const res = await axios.get(url)
                setData(res.data)
            }
            catch(err){
                setError(err)
            }
            setLoding(false)
          
        };
        fetchData();
    },[url]);

    const reFetch = async()=>{
        setLoding(true)
        try{
            const res = await axios.get(url)
            setData(res.data)
        }
        catch(err){
            setError(err)
        }
        setLoding(false)
      
    };
    return {data, loding, erro, reFetch};

}
export default useFetch;