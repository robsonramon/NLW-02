import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

import landingImage from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import api from "../../services/api";
import heartIcon from "../../assets/images/icons/heart.png";

const Landing: React.FC = () => {
  const navigation = useNavigation();

  const [connections, setConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;

      setConnections(total);
    });
  }, []);

  function handleNavigateToGiveClasses() {
    navigation.navigate("GiveClasses");
  }

  function handleNavigateToStudy() {
    navigation.navigate("StudyTabs");
  }

  return (
    <View style={styles.container}>
      <Image source={landingImage} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>Oque deseja fazer</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToStudy}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToGiveClasses}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />

          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Tota de {connections} conexões já realizadas{"   "}
        {<Image source={heartIcon} />}
      </Text>
    </View>
  );
};

export default Landing;
