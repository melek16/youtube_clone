
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Col, Row } from 'react-bootstrap';
import './App.css';
import Carousell from './Components/Carousell';
import CommentSection from './Components/CommentSection';
import MainVideo from './Components/MainVideo';
//import ImageAvatars from './Components/Avatar';
import NavBar from './Components/NavBar';
import SideVideo from './Components/SideVideo';


function App() {
  return (
    <div className="App" style={{background:'#f9f9f9'}}>
      <NavBar/>
     
      <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
      <div style={{margin:'0 20px 20px 0',display:'flex',flexDirection:'column',alignItems:'flex-end'}}><MainVideo title="John Mayer - Wild Blue (Official Video)" hashtag="#JohnMayer #SobRock #WildBlue" vues="2 092 582" likes="70 K" dislikes="3 K"/>
      <div style={{margin:0,width:'96.5%'}}><CommentSection /></div>
      
      </div>
    
      <div style={{marginTop:80,width:405}}>
        <Carousell/>
        <SideVideo/>
      </div>
      </div>
     
     
    </div>
  );
}

export default App;
