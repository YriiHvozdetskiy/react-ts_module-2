import {Title} from './components/Title/Title';
import {Box} from './components/Box';
import {Text} from './components/Text/Text';
import {SubTitle} from './components/Title/StyleTitle.styled';

export const App = () => (
   <div className="App">
      <Box m={'0 auto'}
           maxWidth={1500}
           pt={4}>
         <Title as={'h6'} >hello я h6</Title>
         <Title as={'h1'}><Text/></Title>
         <SubTitle as={'h2'}>манший заголовок h2</SubTitle>
      </Box>
   </div>
);

