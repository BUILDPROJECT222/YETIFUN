import React from 'react';
import './App.css';

function App() {
  const containerStyle = {
    backgroundImage: `url(/snow.jpg)`,
    backgroundColor: '#e8f4f8',
  };

  const contractAddress = "9D8nyPvrAsW3PX8a3nQVnKrgehW4kbg8BASy2ovgpump"; // Ganti dengan contract address yang sebenarnya

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
      .then(() => {
        alert('Contract address copied! 📋');
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  };

  return (
    <>
      <div className="meme-container" style={containerStyle}>
        <div className="content">
          <div className="video-container">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="meme-video"
            >
              <source src="/YETIPUMPO.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="contract-address-container">
            <div className="contract-address wobble" style={{ 
              background: 'linear-gradient(135deg, #ffffff 0%, #e8f5ff 100%)',
              border: '2px solid #90caf9',
              boxShadow: '0 4px 15px rgba(158, 219, 255, 0.3)',
              padding: '20px'
            }}>
              <p className="contract-title" style={{ 
                color: '#0d47a1',
                fontWeight: 'bold',
                fontSize: '1.2em'
              }}>❄️ YETI CONTRACT ADDRESS ❄️</p>
              <div className="contract-copy-wrapper">
                <code className="contract-code" 
                  onClick={copyToClipboard}
                  style={{ 
                    color: '#000000',
                    background: '#ffffff',
                    padding: '10px 15px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    border: '1px solid #90caf9',
                    fontSize: '1.1em',
                    fontWeight: '500'
                  }}
                >
                  {contractAddress}
                </code>
                <button 
                  className="copy-button"
                  onClick={copyToClipboard}
                  style={{
                    background: 'linear-gradient(135deg, #90caf9 0%, #42a5f5 100%)',
                    border: '1px solid #64b5f6',
                    boxShadow: '0 2px 8px rgba(33, 150, 243, 0.3)',
                    padding: '10px 15px',
                    marginLeft: '10px'
                  }}
                >
                🥶
                </button>
              </div>
            </div>
          </div>
          <div className="button-container">
            <a 
              href="https://x.com/YETIVLOG"
              target="_blank" 
              rel="noopener noreferrer" 
              className="meme-button twitter-button bounce"
            >
              <span className="button-text">𝕏 TWITTER</span>
            </a>
            <a 
              href="https://dexscreener.com"
              target="_blank" 
              rel="noopener noreferrer" 
              className="meme-button buy-button shake"
            >
              <span className="button-text">BUY YETI</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App; 
