import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";

const Album = () => {
  const [albumName, setAlbumName] = React.useState("");
  const [files, setFiles] = React.useState([]);

  /**
   * This function will create a new album
   * called Expo Vibes and saved media files there
   */
  async function createNewMediaLibAlbum() {
    try {
      const localUri = (await FileSystem.documentDirectory) + files[1];
      // console.log(localUri, ": localUri");
      const albumName = "Expo Vibes";
      const asset = await MediaLibrary.createAssetAsync(localUri);

      // check and see if album already exist
      const albumExists = await MediaLibrary.getAlbumAsync(albumName);
      if (albumExists) {
        console.log(`Album ${albumExists} exists already`);
        await MediaLibrary.addAssetsToAlbumAsync([asset], albumExists);
      } else {
        console.log(`Album does not exist`);
        const album = await MediaLibrary.createAlbumAsync(albumName, asset);
        console.log(album);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    (async () => {
      const response = await MediaLibrary.requestPermissionsAsync();
      if (response.granted) {
        console.log("Permission granted!!!");
      } else {
        console.log("Permission not granted");
      }
    })();
  }, []);

  const readDirectory = async () => {
    // const files = await FileSystem.readDirectoryAsync(
    //   FileSystem.documentDirectory + "small.mp4"
    // );
    // setFiles(files);

    const files = await FileSystem.readDirectoryAsync(
      FileSystem.documentDirectory
    );
    setFiles(files);
  };

  React.useEffect(() => {
    // pauseDownload();
    // resumeDownload();
    readDirectory();
  }, []);
  return (
    <SafeAreaView>
      <Pressable style={styles.btn} onPress={createNewMediaLibAlbum}>
        <Text>Create Album</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Album;

const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: 100,
    borderRadius: 12,
    backgroundColor: "#ffcc00",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
