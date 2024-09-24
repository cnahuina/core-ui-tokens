import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <span className='sp-text-title-display'>Cardumen Design System</span>
      </div>
      <div className='container'>
        <input type='text' placeholder='Ingrese texto' className='input-default sp-text-paragraph-xl' />
        <br/>
        
        <button className='btn-primary sp-text-label-xl'> Continuar </button>

        <br/>
        <button className='btn-secondary sp-text-label-xl'>Cancelar</button>
      </div>
      

    </div>
  );
}

export default App;
