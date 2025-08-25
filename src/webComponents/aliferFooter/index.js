export class AliferFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .alifer-footer {
          min-height: 20vh;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 5px;
          font-family: sans-serif;
        }
        .alifer-footer a {
          text-decoration: none;
          color: inherit;
          outline: none;
        }
        .alifer-footer a:hover,
        .alifer-footer a:focus {
          cursor: pointer;
          font-weight: bold;
        }
      </style>
      <footer class="alifer-footer">
        Designed &amp; Developed by
        <a href="https://github.com/aliferds" target="_blank">
          Alifer DS
        </a>
        <span>
          &copy; 2025
        </span>
      </footer>
    `
  }
}
