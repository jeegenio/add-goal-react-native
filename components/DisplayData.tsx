import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import DisplayItem from "./DisplayItem";

type Props = {
  data: string[];
  handleDelete: (index: number) => void;
};

const DisplayData: React.FC<Props> = ({ data, handleDelete }) => {
  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <DisplayItem
        key={index}
        index={index}
        item={item}
        handleDelete={handleDelete}
      />
    );
  };

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        alwaysBounceVertical={false}
      />
    </>
  );
};

export default DisplayData;
