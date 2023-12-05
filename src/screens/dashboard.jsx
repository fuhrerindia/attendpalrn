import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import UserBlock from '../comp/user';
import Screen from '../comp/screen';
import MenuButton from '../comp/menubutton';
import H1 from '../comp/heading';
import Data from '../comp/data';
import Row from '../comp/row';

const Dashboard = () => {
  return (
    <Screen>
      <MenuButton />
      <UserBlock />
      <H1 style={styles.heading}>Welcome Back!</H1>
      <Row justifyContent="space-between" margin={10}>
        <Data color="teal" />
        <Data color="teal" />
        <Data color="teal" />
      </Row>
      <Row justifyContent="space-between">
        <Data color="blue" />
        <Data color="blue" />
        <Data color="blue" />
      </Row>
    </Screen>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000000',
  },
  heading: {
    marginVertical: 31,
  },
});

export default Dashboard;
