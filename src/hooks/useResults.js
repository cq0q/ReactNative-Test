import {  useEffect, useState  } from 'react';
import yelp from '../API/yelp';


export default () => {
    const [results, setResults] = useState ([]);     // i put empty array instead of comma because i am expecting a list of arrays in results of the restaurants (businesses)
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async () => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term,
                    location: "san jose",
                },
            });
            setResults(response.data.businesses);
          } catch (err) {                        // This is to not show the error to the User ... (to do so you should add (try) in the beginning and add (catch) at the end)
            console.log("error");                // This is to show an error (if there is) to the developer
            setErrorMessage ('Something went wrong, Please try Again Later')     // This Message is to show it to the (User) instead of showing the real error (which would be useless for the user to see the real error)
          };
        };

        useEffect(() => {
            searchApi('pasta');
        }, []);
        
    return [searchApi, results, errorMessage];
};