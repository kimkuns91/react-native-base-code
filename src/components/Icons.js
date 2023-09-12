import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export const Icon = (props)=>{

    return (
        <Ionicons 
            name={props.name} 
            size={props.size} 
            color={props.color}
        />
    )
}