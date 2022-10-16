import React, {FC, ReactNode} from 'react';
import {StyleTitle} from './StyleTitle.styled';

interface IProps{
   children:ReactNode
}

export const Title: FC<IProps> = ({children}) => {
   return (
      <>
         <StyleTitle>{children}</StyleTitle>
      </>
   );
};