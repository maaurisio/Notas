import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { getGrades } from '../services/GradeServices';
import { FAB, ListItem, Avatar } from '@rneui/themed';

export const ListGrades = ({ navigation }) => {
  const [grades, setGrades] = useState([]);
  const [time, setTime] = useState(Date.now());

  const refreshList = () => {
    setTime(Date.now());
  };

  useEffect(() => {
    setGrades([...getGrades()]);
  }, [time]);

  const ItemGrade = ({ nota }) => (
    <TouchableHighlight onPress={() => {
      navigation.navigate('GradeFormNav', { notita: nota, fnRefresh: refreshList });
    }} underlayColor="#eee">
      <ListItem bottomDivider>
        <Avatar
          title={nota.subject.substring(0, 1)}
          containerStyle={{ backgroundColor: '#6733b9' }}
          rounded
        />
        <ListItem.Content>
          <ListItem.Title>{nota.subject}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Content>
          <ListItem.Title>{nota.grade}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LISTADO DE NOTAS</Text>
      <FlatList
        data={grades}
        renderItem={({ item }) => <ItemGrade nota={item} />}
        keyExtractor={(item, index) => `${item.subject}-${index}`}
        extraData={time}
      />
      <FAB
        title="+"
        placement="right"
        onPress={() => navigation.navigate('GradeFormNav', { notita: null, fnRefresh: refreshList })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', padding: 16, textAlign: 'center' },
});
