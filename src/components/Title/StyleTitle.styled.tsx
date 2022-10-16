import styled from 'styled-components';
import {variant} from 'styled-system';
import {ReactNode} from 'react';

type StyleTitleProps = {
   children?: ReactNode;
}

export const StyleTitle = styled.h1<StyleTitleProps>`
  font-size: ${p => p.theme.fontSize.l};
  font-weight: ${p => p.theme.fontWeight.bold};
`;



export const SubTitle = styled (StyleTitle)`
  color: aquamarine
`;

type TCartProps = {
   variant?: string
}

export const Card = styled.div<TCartProps>`
  ${variant ({
    variants: {
      normal: {
        p: 2,
        boxShadow: 'default',
        borderRadius: 2,
      },
      large: {
        p: 3,
        boxShadow: 'large',
        borderRadius: 4,
      },
    },
  })}
`;
Card.defaultProps = {
   variant: 'normal',
};