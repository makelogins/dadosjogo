import './App.css';
import { useRef , useState } from 'react'
function App() {
  const entrada = useRef()
  const [numer, setNumero] = useState(null)
function j(){
  const r = Math.floor(Math.random() * 6) + 1;
  analisar(entrada.current.value,r)
}

function analisar(a,b){
 if(a/b===1){
  setNumero("Você Ganhou !");
 }else{
  setNumero("Você Perdeu ! Número Sorteado = "+b);
 }


}



  return (
    <div className="App">
      <h2>Digite um número entre 1 e 6</h2>  
      <input type='text' ref={entrada} ></input>
       <button onClick={j}>jogar</button>
       <h2>{numer}</h2>
    </div>
  );
}

export default App;

