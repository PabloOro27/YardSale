import React, {useEffect, useState} from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    //use efect antes de la actualizacioon 
    // useEffect(async () => {
	// 	const response = await axios(API);
	// 	setProducts(response.data);
	// }, []);

    // USEEFECT
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(API);
            setProducts(response.data);
        }
        //llamamos a la funcion
        fetchData();
    }, []); 
    //
    return products;
}

export default useGetProducts;
