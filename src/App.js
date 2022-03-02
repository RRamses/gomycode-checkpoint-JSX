import logo from './logo.svg';
import './App.css';
import './style.css';
import img from "./imageInSrc.jpg"

function App() {
  return (
    <div> 
    <div style={{border:"noir",maxWidth:100}} />

  <h1 className="title-red">react est tres tres tres chic!</h1>
  
    <div className="img">
          <div className="img1">
              <img src={img}  className="image"/>
          </div>
          <div className="img2">
              <img src="/imageInPublic.jpg"  className="image" /> 
          </div>
    </div>

<commandes vidéo width="320" height="240" />

 <source src="maVideo.mp4" type="video/mp4" />


</div>
  );
}

export default App;
