import { Button, Input } from '@rneui/base';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { saveGrade, updateGrade } from '../services/GradeServices';

export const GradeForm = ({ navigation, route }) => {
  const notita = route.params.notita;
  const isNew = notita == null;

  const [subject, setSubject] = useState(notita?.subject ?? '');
  const [grade, setGrade] = useState(notita?.grade?.toString() ?? '');
  const [errorSubject, setErrorSubject] = useState('');
  const [errorGrade, setErrorGrade] = useState('');

  const validate = () => {
    let hasErrors = false;

    if (!subject.trim()) {
      setErrorSubject('Debe ingresar una materia');
      hasErrors = true;
    } else {
      setErrorSubject('');
    }

    const gradeFloat = parseFloat(grade);
    if (isNaN(gradeFloat) || gradeFloat < 0 || gradeFloat > 10) {
      setErrorGrade('Debe ingresar una nota entre 0 y 10');
      hasErrors = true;
    } else {
      setErrorGrade('');
    }

    return hasErrors;
  };

  const save = () => {
    if (!validate()) {
      const trimmedSubject = subject.trim();
      const trimmedGrade = grade.trim();

      if (isNew) {
        saveGrade({ subject: trimmedSubject, grade: trimmedGrade });
      } else {
        updateGrade({ subject: trimmedSubject, grade: trimmedGrade });
      }

      // Actualizar la lista y volver atrás
      route.params.fnRefresh();
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text>FORMULARIO DE NOTAS</Text>
      <Input
        placeholder="Ejemplo: Inglés"
        label="Materia"
        errorMessage={errorSubject}
        value={subject}
        onChangeText={setSubject}
        disabled={!isNew} // desactiva la edición si es actualización
      />
      <Input
        placeholder="0-10"
        label="Nota"
        errorMessage={errorGrade}
        value={grade}
        onChangeText={setGrade}
        keyboardType="numeric"
      />
      <Button
        title="Guardar"
        icon={{
          name: 'save',
          type: 'entypo',
          color: 'white',
        }}
        onPress={save}
        buttonStyle={styles.saveButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    backgroundColor: 'green',
  },
});
