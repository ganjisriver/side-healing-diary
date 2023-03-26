import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { GlobalColors } from "../../constants/color";
import { useNavigation } from "@react-navigation/native";
import { tags1, tags2 } from "../../model/DataHashtag";

const AddHashtag = () => {
  const [tags1State, setTags1State] = useState(tags1);
  const [tags2State, setTags2State] = useState(tags2);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelection = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      if (selectedTags.length < 3) {
        setSelectedTags([...selectedTags, tag]);
      }
    }
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>선택된 해시태그</Text>
      <View style={styles.selectedTagsContainer}>
        {selectedTags.map((tag) => (
          <TouchableOpacity key={tag.id} style={styles.selectedTag}>
            <Text style={styles.selectedTagText}>{tag.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.sub}>
        <Text>감정</Text>
      </View>
      <View style={styles.box}>
        {tags1.map((tag) => (
          <TouchableOpacity
            key={tag.id}
            onPress={() => handleTagSelection(tag)}
            style={[
              styles.tagButton,
              selectedTags.includes(tag) && styles.selectedTagButton,
            ]}
          >
            <Text style={styles.tagButtonText}>{tag.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.sub}>
        <Text>키워드</Text>
      </View>
      <View style={styles.box}>
        {tags2.map((tag) => (
          <TouchableOpacity
            key={tag.id}
            onPress={() => handleTagSelection(tag)}
            style={[
              styles.tagButton,
              selectedTags.includes(tag) && styles.selectedTagButton,
            ]}
          >
            <Text style={styles.tagButtonText}>{tag.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.warningText}>
        * 해시태그는 최대 3개까지 선택 가능합니다 *
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: "80%",
    backgroundColor: GlobalColors.colors.white500,
  },
  sub: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    backgroundColor: GlobalColors.colors.white500,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
    marginBottom: 10,
  },
  tagButton: {
    backgroundColor: GlobalColors.colors.primary400,
    borderRadius: 16,
    minWidth: 85,
    padding: 5,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  selectedTagButton: {
    backgroundColor: GlobalColors.colors.primary500,
  },
  tagButtonText: {
    fontFamily: "KoddiUDOnGothic-Regular",
    padding: 4,
    fontSize: 12,
    color: GlobalColors.colors.white500,
  },
  selectedTagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
    marginBottom: 10,
  },
  selectedTag: {
    backgroundColor: GlobalColors.colors.primary500,
    borderRadius: 16,
    minWidth: 85,
    padding: 5,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  selectedTagText: {
    fontFamily: "KoddiUDOnGothic-Regular",
    padding: 4,
    fontSize: 12,
    color: GlobalColors.colors.white500,
  },
  warningText: {
    padding: 10,
    color: "red",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default AddHashtag;
