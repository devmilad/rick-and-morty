import { useState ,useEffect} from "react"


export const useFetch=(url)=>{
    const [data , setData]=useState([])
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData=async ()=>{
            setIsPending(true)
            try {
                const res= await fetch(url)
                if(!res.ok){
                    throw new Error(res.statusText)
                }
                const json= await res.json()
                setIsPending(false)
                setData(json)
                setError(null)
            } catch (error) {
                setError('there is a problem goes here')
                setIsPending(false)
                console.log(error.message);

            }
           
        }
        fetchData()
    }, [url]);
return { data , isPending, error}
}

