import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultsList = ({ title, results }) => {
        // i made the prop (title) in SearchScreen file (line 32,33,34) and called them here and adjusting them
        // i called the prop (results) in SearchScreen file to show the prices, so here i am filtering them and making them as groups
    return (
        <View>
            <Text style= {styles.title} >{title}</Text>
            <FlatList
              horizontal = {true}
              data= {results}
              keyExtractor= {results => results.id}
              renderItem= {({ item }) => {
                return <Text> {item.name} </Text>;
              }}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});


export default ResultsList;