const customAxios=({params , method})=>{
    const [data , setData]=useState([])
    const [error , setError]=useState(false)
    const [loading , setLoading]=useState(false)

    function GetUrl(Method){
        axios({
            method: Method,
            url: baseUrl/params,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
        }).then((res) => {
            setData(res.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        });

    }

    switch(method ){


case "GET":
        useEffect(() => {
            setLoading(true);
            GetUrl(GET)
          
        }, [url , method])
        case "POST":
            GetUrl(POST)
         break
   

        case "PUT":

        GetUrl(PUT)

        break

    }

    return {data , error , loading}

}