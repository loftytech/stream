import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";


const  useRouter = () => {
  const [isReady, setIsReady] = useState(false)
  const [params, setParams] = useState<any>({}) 
  const [searchParams, setSearchParams] = useSearchParams();
  const newQueryParameters : URLSearchParams = new URLSearchParams();

  const resolveParams = () => {
    const _params: any = {...params};
    searchParams.forEach((value, key) => {
      _params[key] = value
    });

    setParams(_params)
    setIsReady(true)
  }


  useEffect(() => {
    resolveParams()
  }, [searchParams])


  const push = ({query} : {query: any}) => {
    Object.keys(query).forEach(function(key) {
      newQueryParameters.set(key,  query[key]);
    });

    setSearchParams(newQueryParameters);
  }

  return {
    push,
    replace: push,
    isReady,
    query: params
  }
}

export default useRouter