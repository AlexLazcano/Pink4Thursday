import styled from "styled-components";
import { StyleSheet } from "react-native";

export const ActiveIconColor = "#E43090";
export const InactiveIconColor = "#5F5F5F";
export const BackgroundColor = "#F8F8F8";

export const TempPageText = styled.Text`
  font-size: 25px;
  color: #e43090;
`;

export const CenteredView = styled.View`
  flex: 1;

  align-items: center;
`;

export const styles = StyleSheet.create({
  PostView: {
    flex: 1,

    alignItems: "center",
  },

  FlatListStyle: {
    width: "100%",

    maxHeight: "85%",
    top: 15,
  },
});
