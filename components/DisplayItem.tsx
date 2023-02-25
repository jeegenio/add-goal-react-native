import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface Props {
  index: number;
  item: string;
  handleDelete: (index: number) => void;
}

const DisplayItem: React.FC<Props> = ({ index, item, handleDelete }) => {
  const handleClickDelete = () => {
    handleDelete(index);
  };
  return (
    <TouchableOpacity
      onPress={handleClickDelete}
      className="bg-blue-500 w-96 rounded-md items-center p-2 mt-2"
    >
      <Text className="text-white">{item}</Text>
    </TouchableOpacity>
  );
};

export default DisplayItem;
