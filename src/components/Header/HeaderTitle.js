import React from 'react';
import { Typography } from '../Typography';

export const HeaderTitle = (props)=>{
    return (
        <Typography fontSize={18}>{props.title}</Typography>
    )
}