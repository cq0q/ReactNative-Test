import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState ('');       // the names like (term) and (newTerm) and (onTermChange) are names that you put as you want (you can change the names)
    const [searchApi, results, errorMessage] = useResults();

    console.log(results)
    const filterResultsByPrice = (price) => {
        // Price === '$' or '$$' or '$$$'
        // if you do console.log(results), you will find (price) in the log, it is already the result that shows from yelp that shows each result if it is expensive or medium or cheap (filtered the prices)
        // so now all i am going to do is show those prices (from results prop) to the customer on each of ResultsList component
        return results.filter(results => {
            return results.price === price;
        });
    };


    return (
        <View>
            <SearchBar 
              term={term} 
              onTermChange={setTerm}
              onTermSubmit = {() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>Search Screen: {term}</Text>
            <Text>We have found {results.length} results</Text>
            <ResultsList  results={filterResultsByPrice('$')} title= "Cost Effective" />
            <ResultsList  results={filterResultsByPrice('$$')} title= "Bit Pricier" />
            <ResultsList  results={filterResultsByPrice('$$$')} title= "Big Spender" />
        </View>
    );
};
          // i used the <Text> with {term} inside the <View> element at the end just to make sure if my state is working correctly with (SearchBar.js component) or not
          // if it's not showing down, what you typed on the search bar .. that means something is wrong on connecting the state from parent to child (from Search Screen to Search Bar)


const styles = StyleSheet.create ({});


export default SearchScreen;