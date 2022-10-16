import {Title} from './components/Title/Title';
import {Box} from './components/Box';

export const App = () => (
   <div className="App">
      <Box m={'0 auto'}
           maxWidth={1500}
           pt={4}>
         <Title>hello</Title>
      </Box>
   </div>
);

