import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.searchIconStyle}/>
            <TextInput
              style={styles.inputStyle} 
              placeholder="Search"
              value={term}
              onChangeText= {onTermChange}
              onEndEditing = {onTermSubmit}
            />
        </View>
    );
};


const styles = StyleSheet.create ({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: 'rgb(240, 238, 238)',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    searchIconStyle: {
        fontSize:35,
        //top:10,
        //right:5                     instead of using (top) and (right), i could use (align self) just like below
        alignSelf: 'center',
        marginHorizontal: 15
    },
    inputStyle: {
        //borderColor: 'black',
        //borderWidth: 1,                   // Just to show how many words the search bar could handle in the box
        flex: 1,
        fontSize: 15,
    },
});


export default SearchBar;