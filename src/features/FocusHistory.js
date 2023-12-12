import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSize, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) {
    return (
      <View style={styles.container}>
      <Text style={styles.title}> We have not focused on anything yet!</Text>
      </View>
    )
  }

  const renderItem = ({item}) => { 
    return (<Text style={styles.item}>-{item}</Text>)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Focus History: </Text>
      <FlatList data={history} 
      renderItem ={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex:1,
    padding: spacing.md
  },  
  title: {
    color: colors.white,
    fontSize: fontSize.md,
    fontWeight: 'bold',
  },
  item: {
    fontSize: fontSize.md, 
    color: colors.white,
    paddingTop: spacing.sm,
    paddingLeft: spacing.sm,
  }
});
