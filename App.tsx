import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DisplayData from "./components/DisplayData";

export default function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState<string[]>([]);
  const ref = useRef<TextInput>(null);
  const handleTextInput = (text: string) => {
    setText(text);
  };
  const handleAdd = () => {
    if (ref.current) {
      ref.current.clear();
    }
    // let newData = [];
    // newData = [...data, text];
    // setData(newData);
    // setData([...data, text]);
    setData((currentData) => [...currentData, text]);
  };

  const handleDelete = (index: number) => {
    const newItems = [...data];
    newItems.splice(index, 1);
    setData(newItems);
  };
  return (
    <SafeAreaView className="flex-1 items-center bg-white">
      {/* Search section */}
      <View className="flex-row justify-between pb-10 border-b-[.2px] border-gray-400 w-96">
        <TextInput
          className="border border-gray-300 rounded-md w-72 p-2"
          placeholder="Enter your goal"
          // onChangeText={(text) => handleTextInput(text)}
          onChangeText={handleTextInput}
          clearButtonMode="always"
          ref={ref}
        />
        <TouchableOpacity
          onPress={handleAdd}
          className=" text-blue-300 items-center justify-center"
        >
          <Text className="text-blue-500 text-lg">Add goal</Text>
        </TouchableOpacity>
      </View>
      {/* Goals List */}
      <DisplayData data={data} handleDelete={handleDelete} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
