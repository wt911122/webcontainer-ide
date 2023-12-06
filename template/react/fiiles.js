export const files = {
    'package.json': {
        file: {
            contents: `
{
    "name": "antd-demo",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview"
    },
    "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
    },
    "devDependencies": {
        "@types/react": "^18.2.15",
        "@types/react-dom": "^18.2.7",
        "@vitejs/plugin-react": "^4.0.3",
        "vite": "^4.4.5"
    }
}`
        }
    },
    'vite.config.js': {
        file: {
            contents: `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
    plugins: [react()],
})
`
        }
    },
    'index.html': {
        file: {
            contents: `
<!doctype html>
<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
    </head>
    <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
    </body>
</html>`
        }
    },
    'src': {
        directory: {
            'main.jsx': {
                file: {
                    contents: `
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './proxy.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`
                }
            },
            'proxy.js': {
              file: {
                contents: `
function postMessageToIDE(data) {
  console.log(data)
  window.parent.postMessage(data, '*')
}
function pickKeys(obj, keys) {
  const r = {};
  keys.forEach(k => {
    if(k in obj){
      r[k] = obj[k];
    }
  })
  return r;
}
window.addEventListener('wheel', (e) => {
  if(e.ctrlKey) { 
    e.preventDefault();
  } 
  postMessageToIDE({
    type: 'Event',
    name: 'wheel',
    payload: pickKeys(e, [
      'ctrlKey',
      'clientX',
      'clientY',
      'deltaY',
    ])
  })
}, { passive: false })

const observer = new ResizeObserver(() => {
  console.log(document.body.scrollHeight)
  postMessageToIDE({
    type: 'Event',
    name: 'resizeObserver',
    payload: {
      scrollHeight: document.body.scrollHeight
    }
  })
});
observer.observe(document.body);

                `
            }
          },
            'index.css': {
                file: {
                    contents: `
                    :root {
                        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
                        line-height: 1.5;
                        font-weight: 400;
                      
                        color-scheme: light dark;
                        color: rgba(255, 255, 255, 0.87);
                        background-color: #242424;
                      
                        font-synthesis: none;
                        text-rendering: optimizeLegibility;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                        -webkit-text-size-adjust: 100%;
                      }
                      
                      a {
                        font-weight: 500;
                        color: #646cff;
                        text-decoration: inherit;
                      }
                      a:hover {
                        color: #535bf2;
                      }
                      
                      body {
                        margin: 0;
                        display: flex;
                        place-items: center;
                        min-width: 320px;
                        min-height: 100vh;
                      }
                      
                      h1 {
                        font-size: 3.2em;
                        line-height: 1.1;
                      }
                      
                      button {
                        border-radius: 8px;
                        border: 1px solid transparent;
                        padding: 0.6em 1.2em;
                        font-size: 1em;
                        font-weight: 500;
                        font-family: inherit;
                        background-color: #1a1a1a;
                        cursor: pointer;
                        transition: border-color 0.25s;
                      }
                      button:hover {
                        border-color: #646cff;
                      }
                      button:focus,
                      button:focus-visible {
                        outline: 4px auto -webkit-focus-ring-color;
                      }
                      
                      @media (prefers-color-scheme: light) {
                        :root {
                          color: #213547;
                          background-color: #ffffff;
                        }
                        a:hover {
                          color: #747bff;
                        }
                        button {
                          background-color: #f9f9f9;
                        }
                      }
                      
                    `
                }
            },
            'App.jsx':  {
                file: {
                    contents: `
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
                    `
                }
            },
            'App.css': {
                file: {
                    contents: `
                    #root {
                        max-width: 1280px;
                        margin: 0 auto;
                        padding: 2rem;
                        text-align: center;
                      }
                      
                      .logo {
                        height: 6em;
                        padding: 1.5em;
                        will-change: filter;
                        transition: filter 300ms;
                      }
                      .logo:hover {
                        filter: drop-shadow(0 0 2em #646cffaa);
                      }
                      .logo.react:hover {
                        filter: drop-shadow(0 0 2em #61dafbaa);
                      }
                      
                      @keyframes logo-spin {
                        from {
                          transform: rotate(0deg);
                        }
                        to {
                          transform: rotate(360deg);
                        }
                      }
                      
                      @media (prefers-reduced-motion: no-preference) {
                        a:nth-of-type(2) .logo {
                          animation: logo-spin infinite 20s linear;
                        }
                      }
                      
                      .card {
                        padding: 2em;
                      }
                      
                      .read-the-docs {
                        color: #888;
                      }                      
                    `
                }
            },

        }
    }
}