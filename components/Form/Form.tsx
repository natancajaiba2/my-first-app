import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";

export function Form(){
    const [side, setSide] = useState(0);
    const [area, setArea] = useState(0);
    function calculateArea(){
      let resultado =  ((side ** 2) * Math.sqrt(3)) / 4;
      setArea(resultado);
    }
    return(
            <View>
                <View>
                    <Text>
                        lado:
                    </Text>
                    <TextInput
                    onChangeText={setSide}
                    placeholder="Digite o lado em cm"
                    inputMode="numeric"
                    value={side}
                    
                    />
                    <Pressable
                    title="calcular"
                    onPress={()=>calculateArea}
                    />
                        
                </View>
            </View>
    );
}