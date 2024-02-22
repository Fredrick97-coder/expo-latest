import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import _ from "lodash";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import * as FileSystem from "expo-file-system";

const Comments = () => {
  const [comments, setComments] = React.useState([]);
  const [photos, setPhotos] = React.useState([]); // [1]

  const fetchComments = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "GET",
    }).then((response) => response.json());

    const sc = _.take(data, 5);
    setComments(data);
  };

  const fetchPhotos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos", {
      method: "GET",
    }).then((response) => response.json());

    // const sc = _.take(data, 5);
    setPhotos(data);
  };

  useEffect(() => {
    // fetchComments();
    fetchPhotos();
  }, []);

  return (
    <FlashList
      data={photos}
      renderItem={({ item, index }) => {
        if (index === 3) {
          return (
            <View style={styles.card}>
              <Image
                source={{ uri: FileSystem.documentDirectory + "small2.jpg" }}
                style={{ width: 100, height: 100 }}
                cachePolicy={"cache-first"}
              />
              <Text style={styles.name}>Image from phone</Text>
            </View>
          );
        } else {
          return (
            <View style={styles.card}>
              <Image
                placeholder={{ uri: item.thumbnailUrl }}
                source={{ uri: item.url }}
                style={{ width: 100, height: 100 }}
                cachePolicy={"cache-first"}
              />
              <Text style={styles.name}>{item.title}</Text>
            </View>
          );
        }
      }}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        padding: 5,
      }}
      estimatedItemSize={10}
    />
    // <FlashList
    //   data={comments}
    //   renderItem={({ item }) => (
    //     <View style={styles.card}>
    //       <Text style={styles.name}>{item.name}</Text>
    //       <Text style={styles.email}>{item.email}</Text>
    //       <Text style={styles.body}>{item.body}</Text>
    //     </View>
    //   )}
    //   keyExtractor={(item) => item.id.toString()}
    //   contentContainerStyle={{
    //     padding: 5,
    //   }}
    //   estimatedItemSize={10}
    // />
  );
};

export default Comments;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 15,
    fontWeight: "bold",
  },
  body: {
    fontSize: 15,
  },
});
