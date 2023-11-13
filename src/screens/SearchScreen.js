import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [term, setTerm] = useState ('');       // the names like (term) and (newTerm) and (onTermChange) are names that you put as you want (you can change the names)
    const [searchApi, results, errorMessage] = useResults();
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
        </View>
    );
};
          // i used the <Text> with {term} inside the <View> element at the end just to make sure if my state is working correctly with (SearchBar.js component) or not
          // if it's not showing down, what you typed on the search bar .. that means something is wrong on connecting the state from parent to child (from Search Screen to Search Bar)


const styles = StyleSheet.create ({});


export default SearchScreen;