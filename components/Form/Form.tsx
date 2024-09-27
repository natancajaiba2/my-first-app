import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";

export function Form(){
    const[height, setHeight] =useState('');
    const[weight, setWeight] = useState('');
    const[imc, setImc] = useState('');   
    function imcCalculator(){
        let totalImc = (weight/(height*height)).toFixed(2);
        setImc(totalImc);
    }

    function validatorImc(){
        if (weight != '' && height != ''){
            imcCalculator();
            setHeight('');
            setWeight('');

        }
    }
    return(
            <View>
              <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="Ex. 1.75"
                value={height}
                />
                <Text>Peso:</Text>
                <TextInput
                placeholder="ex. 67.5"
                value={weight}
                />
                <Pressable 
                    onPress={() => validatorImc()}
                >
                    <Text> calcular</Text>
                </Pressable>
                <Text>{imc}</Text>
              </View>
            </View>
    );
}