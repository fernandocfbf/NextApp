import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { useListSelectedInstitutions } from '../../contexts/selectedInstitutionsContext';

type Props = {
  id: number;
  institution: string;
  dataBaseSize: string;
}

export function InstitutionBox({ id, institution, dataBaseSize }: Props) {

  const {data, handleSelectInstitution} = useListSelectedInstitutions()
  const [selected, setSelected] = useState(false)

  function handlePress(){
    handleSelectInstitution(id)
    handleSelected()
  }

  function handleSelected(){
    setSelected(!selected)
  }
  

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container, {
        backgroundColor: selected ? theme.colors.green : theme.colors.selection
      }]}
      onPress={() => handlePress()}
      >
      <View>
        <AntDesign name="google" size={40} color={theme.colors.white} />
      </View>
      <View style={styles.generalInfo}>
        <Text style={styles.institution}>
          {institution}
        </Text>
        <Text style={styles.dataBaseSize}>
          Data Base Size: {dataBaseSize}
        </Text>
      </View>
    </TouchableOpacity>
  )
}