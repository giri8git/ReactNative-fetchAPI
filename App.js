import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { albumPhotoUrl } from './src/utils/urls';

const App = () => {

  // state  (useState hook)
  const [albumData, setalbumData] = useState([]);

  // useEffect hook
  useEffect(() => {
    fetchApiData();
  }, [])

  // axios fetch API 
  const fetchApiData = async () => {
    try {
      const response = await axios.get(albumPhotoUrl);
      //console.log(response.data);

      setalbumData(response.data);

    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <View style={styles.mainContainer}>
      <ScrollView>

        {albumData.map((list, index) => {
          return (
            <View key={index} style={styles.cardContainer}>
              <Image source={{ uri: list.url }} style={styles.cardImage} />
              <Text style={styles.cardText}>{list.title}</Text>
            </View>
          );
        })}


      </ScrollView>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  cardContainer: {
    marginHorizontal: 20,

    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 2,
  },
  cardImage: {
    height: 300,
    width: '100%',
    borderRadius: 20,
  },
  cardText: {
    fontSize: 20,
    textAlign: "center",
  }

})