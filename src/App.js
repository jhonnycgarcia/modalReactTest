import './App.css';



import HandlerModal from './components/HandlerModal';
import ModalDefaultBody from './components/Modal2/ModalDefautlBody';
import Modal3 from './components/Modal3/Modal3';

function App() {
  return (
    <div className="App">

      {/* Test Handler Modal */}
      <div className="container">
        <HandlerModal 
          step='2'
          title='My personal modal Title'
          bodyComponent={ModalDefaultBody}
          show={false}/>

          <Modal3 />
      </div>

    </div>
  );
}

export default App;
