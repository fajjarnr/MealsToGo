import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled(Text)`
  padding: 16px;
`;

export const RestaurantInfo = ({ restaurant }) => {
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover />
      <Title>Restaurant</Title>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({});
