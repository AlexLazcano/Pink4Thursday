import styled from "styled-components";
import { StyleSheet } from "react-native";

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  input: {
    width: "60%",
    height: 40,
    justifyContent: "space-between",
    backgroundColor: "pink",
  },
});
export default styles;
