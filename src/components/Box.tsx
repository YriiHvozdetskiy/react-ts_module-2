import styled from 'styled-components';
import {layout, space} from 'styled-system';

type TProps = {
   m?:string
   maxWidth:number
   pt:number
}

export const Box = styled('div')<TProps>(space,layout)
