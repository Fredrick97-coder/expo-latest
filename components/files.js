import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import * as FileSystem from "expo-file-system";
import { FlashList } from "@shopify/flash-list";

const Files = () => {
  const [files, setFiles] = React.useState([]);
  const [downloadProgress, setDownloadProgress] = React.useState(0);

  const callback = (downloadProgress) => {
    const progress =
      downloadProgress.totalBytesWritten /
      downloadProgress.totalBytesExpectedToWrite;
    setDownloadProgress(progress);
  };

  const downloadResumable = FileSystem.createDownloadResumable(
    "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // its an image
    FileSystem.documentDirectory + "small5.jpg",
    {},
    callback
  );

  const pauseDownload = async () => {
    try {
      await downloadResumable.pauseAsync();
      console.log("Paused download operation, saving for future retrieval");
      AsyncStorage.setItem(
        "pausedDownload",
        JSON.stringify(downloadResumable.savable())
      );
    } catch (e) {
      console.error(e);
    }
  };

  const resumeDownload = async () => {
    try {
      const { uri } = await downloadResumable.resumeAsync();
      console.log("Finished downloading to ", uri);
    } catch (e) {
      console.error(e);
    }
  };

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
    readDirectory();
  }, []);

  console.log(files);

  // this function will deleted every thing in the directory
  const deleteDir = async () => {
    await FileSystem.deleteAsync(FileSystem.documentDirectory + "small1.jpg", {
      idempotent: true,
    });
    console.log("Deleted");
    readDirectory();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* map the files they are all images */}
      <FlashList
        data={files}
        contentContainerStyle={{
          padding: 5,
        }}
        numColumns={4}
        renderItem={({ item, index }) => (
          <Image
            key={index}
            source={{ uri: FileSystem.documentDirectory + item }}
            style={{ width: 100, height: 100 }}
          />
        )}
        estimatedItemSize={files?.length}
      />
      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={pauseDownload}>
          <Text>Download Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={resumeDownload}>
          <Text>Resume Download</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "red" }]}
          onPress={deleteDir}
        >
          <Text>Deleted Dir</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
          backgroundColor: "red",
        }}
      >
        {downloadProgress}
      </Text>
    </SafeAreaView>
  );
};

export default Files;

const styles = StyleSheet.create({
  btn: {
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: "#ffcc00",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
