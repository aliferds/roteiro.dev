export class SearchForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --search-color: #d1d5db;
          --search-font-color: inherit;
          --search-background-color: inherit;
          --icon-color: var(--search-color);
          --placeholder-color: var(--search-color);
          --border-color: var(--search-color);
          --btn-color: transparent;
          --btn-hover-color: red;
        }
        .search-form {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          margin: 0 auto;
        }
        .search-bar {
          background-color: var(--search-background-color);
          color: var(--search-font-color);
          flex-grow: 1.2;
          width: 100%;
          min-width: 250px;
          padding: 0.5rem 1rem;
          padding-right: 32px;
          border-radius: 50px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease-in-out;
          cursor: text;
        }
        .search-bar::placeholder {
          color: var(--placeholder-color);
        }

        .search-bar:focus {
          outline: none;
          box-shadow: 0 0 0 2px var(--btn-hover-color);
          border-color: transparent;
        }
        .search-button {
          position: absolute;
          right: 5px;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          border: 0;
          outline: none;
          height: 32px;
          background-color: var(--btn-color);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        .search-button:hover,
        .search-button:focus {
          background-color: color-mix(in srgb, var(--btn-hover-color), transparent 80%);
        }
        .search-button:hover .icon,
        .search-button:focus .icon {
          fill: var(--btn-hover-color);
        }
        .icon {
          fill: var(--icon-color);
        }
      </style>
      <form name="search-form" class="search-form" aria-label="formulário de pesquisa">
        <input
          name="search-bar"
          id="search-bar"
          class="search-bar"
          type="text" 
          placeholder="Em que podemos te ajudar?">
          <button class="search-button" type="submit" aria-label="Pesquisar">
          <svg class="icon" width="24" height="24" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path fill="inherit" d="M47.34 94.6799C34.1091 94.6799 22.9125 90.0965 13.7504 80.9295C4.58834 71.7625 0.00485923 60.566 3.85348e-06 47.34C-0.00485153 34.1139 4.57863 22.9174 13.7504 13.7504C22.9223 4.58348 34.1188 0 47.34 0C60.5612 0 71.7601 4.58348 80.9368 13.7504C90.1135 22.9174 94.6945 34.1139 94.6799 47.34C94.6799 52.6809 93.8302 57.7183 92.1309 62.4523C90.6486 66.5816 88.7045 70.2953 86.2987 73.5934C85.6981 74.4167 85.7571 75.5608 86.4777 76.2814L125.997 115.801C127.332 117.136 128 118.835 128 120.899C128 122.963 127.332 124.662 125.997 125.997C124.662 127.332 122.963 128 120.899 128C118.835 128 117.136 127.332 115.801 125.997L76.2814 86.4777C75.5608 85.7571 74.4167 85.6981 73.5934 86.2987C70.2953 88.7045 66.5816 90.6486 62.4523 92.1309C57.7184 93.8302 52.6809 94.6799 47.34 94.6799ZM47.34 80.1138C56.4438 80.1138 64.1833 76.9287 70.5584 70.5584C76.9335 64.1881 80.1187 56.4487 80.1138 47.34C80.1089 38.2313 76.9238 30.4942 70.5584 24.1288C64.193 17.7634 56.4535 14.5759 47.34 14.5661C38.2264 14.5564 30.4894 17.744 24.1288 24.1288C17.7683 30.5136 14.5807 38.2507 14.5661 47.34C14.5516 56.4292 17.7391 64.1687 24.1288 70.5584C30.5185 76.9481 38.2556 80.1332 47.34 80.1138Z" />
          </svg>

        </button>
      </form>
    ` 

    const input = this.shadowRoot.querySelector('.search-bar');


    this.shadowRoot.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      const input = this.shadowRoot.querySelector('.search-input');
      if (input.value) {
        console.log('Pesquisando por: ', input.value);
        this.dispatchEvent(new CustomEvent('search-submitted', { detail: { query: input.value } }));
        input.value = '';
      }
    });
  }
}