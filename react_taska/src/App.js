import Simpson from './components/character/simpson';
import Character from './components/rickandmorty/r_and_m';
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className='characters'>
        <Simpson name={'Homer'} surname={'Simpson'} picture={'https://en.wikipedia.org/wiki/File:Homer_Simpson_2006.png'}/>
        <Simpson name={'Marge'} surname={'Simpson'} picture={'https://en.wikipedia.org/wiki/File:Marge_Simpson.png'}></Simpson>
        <Simpson name={'Bart'} surname={'Simpson'} picture={'https://en.wikipedia.org/wiki/File:Bart_Simpson_200px.png'}></Simpson>
        <Simpson name={'Lisa'} surname={'Simpson'} picture={'https://en.wikipedia.org/wiki/File:Lisa_Simpson.png'}></Simpson>
        <Simpson name={'Maggie'} surname={'Simpson'} picture={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcharacters.fandom.com%2Fwiki%2FMaggie_Simpson&psig=AOvVaw1-RbyPTWfV3_hPWQ_eu2dr&ust=1707942026869000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCM_4CSqYQDFQAAAAAdAAAAABAJ'}></Simpson>
      </div>
      <div className='characters'>
        <Character id={'1'} name={'Rick Sanchez'} status={'Alive'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>
        <Character id={'2'} name={'Morty Smith'} status={'Alive'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>
        <Character id={'3'} name={'Summer Smith'} status={'Alive'} species={'Human'} gender={'Female'} image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}/>
        <Character id={'4'} name={'Beth Smith'} status={'Alive'} species={'Human'} gender={'Female'} image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}/>
        <Character id={'5'} name={'Jerry Smith'} status={'Alive'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}/>
        <Character id={'6'} name={'Abadango Cluster Princess'} status={'Alive'} species={'Alien'} gender={'Female'} image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}/>
      </div>    
    </div>
  );
}

export default App;
