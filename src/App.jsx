import './App.css'
import React from 'react';
import Html5QrcodePlugin from './Html5QrcodeScannerPlugin'
import { useState } from 'react';

const App = () => {
  const [scanResult, setScanResult] = useState()
  const onNewScanResult = (decodedText, decodedResult) =>{
      setScanResult(decodedText)
  }
  return(
    <div className='flex flex-col items-center justify-center'>
              <h1>Barcode Scanner</h1>
              <div className='text-center w-full h-full md:h-2/3 md:w-2/3'>
              <Html5QrcodePlugin 
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}/>
                 <p>Bar code: {scanResult}</p>
              </div>
             
               
    </div>
  )
   
}


// class App extends React.Component {
//   constructor(props) {
//       super(props);
//       // This binding is necessary to make `this` work in the callback.
//       this.onNewScanResult = this.onNewScanResult.bind(this);
//   }

//   render() {
//       return (<div>
//           <h1>Html5Qrcode React example!</h1>
//           <Html5QrcodePlugin 
//               fps={10}
//               qrbox={250}
//               disableFlip={false}
//               qrCodeSuccessCallback={this.onNewScanResult}/>
//       </div>);
//   }

//   onNewScanResult(decodedText, decodedResult) {
//       // Handle the result here.
//   }
// };

export default App