import React, {FC, ReactNode} from 'react';
import {Card, StyleTitle} from './StyleTitle.styled';

interface IProps {
   children?: ReactNode;
   as:any
}

export const Title: FC<IProps> = ({children, as}) => {
   return (
      <>
         <StyleTitle as={as}>{children}</StyleTitle>
      </>
   );
};