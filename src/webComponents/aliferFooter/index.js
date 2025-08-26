export class AliferFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --text-color: inherit;
          --link-color: blue;
        }
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
          transition: all 0.3s ease-in-out;
        }
        .alifer-footer a:hover,
        .alifer-footer a:focus {
          cursor: pointer;
          color: var(--link-color);
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
