import styled from 'styled-components';

export const StyleTitle = styled.h1`
  font-size: ${p => p.theme.fontSize.l};
  font-weight: ${p => p.theme.fontWeight.bold};
`;

type SubTitleProps = {
   as: string
}

export const SubTitle = styled (StyleTitle)<SubTitleProps>`
  color: aquamarine
`;
