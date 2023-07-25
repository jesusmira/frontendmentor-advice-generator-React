import { useEffect, useState } from "react";
import { getAdvice } from '../api/getAdvice';
export const useFetchAdvice = () => {
  
    const [advice, setAdvice] = useState(null);
    const [isLoading, setisLoading] = useState(true);

    const fetchAdvice = async () => {
        const res = await getAdvice();
        setAdvice(res.advice);
        setisLoading(false);
    }

    useEffect(() => {
        fetchAdvice();
    }, []);
  
    return{
        note: advice,
        isLoading,
        fetchAdvice
    }
}
