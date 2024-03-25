import './style.css'

import { BreakingbadApp } from './src/breakingbad/breakingbad-app';

document.querySelector('#app').innerHTML = `
  <div>
    <a>
      <img src="/logo.png" class="logo" alt="breakinglogo" />
    </a>
   
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
    
    </div>
    <footer>
    <p>By - <a href="https://github.com/EveArbol">Eve ✨</a></p>
    <p><a href="https://github.com/EveArbol/breakingbad-app">GitHub Repository </a></p>
  </footer>

  </div>
`;

const element = document.querySelector('.card');

BreakingbadApp(element);
