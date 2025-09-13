export class CheckToggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode : 'open'});
    this.shadowRoot.innerHTML = `
      <style>
        :host{
          --color: #eee;
          --checked-color: #aaa;
          --toggle-color: #ccc;
          --transition: all 0.5s ease-in-out;
          --size: 3rem;
        }

        input[type="checkbox"].toggle {
          margin: 1rem;
          position: relative;
          height: calc(var(--size)/2);
          width: var(--size);
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          border-radius: 9999px;
          background-color: var(--color);
          transition: var(--transition);
        }
        input[type="checkbox"].toggle:checked {
          background-color: var(--checked-color);
        }
        input[type="checkbox"].toggle::before {
          position: absolute;
          content: '';
          left: calc((var(--size)/2) - (var(--size)/2));
          top: calc((var(--size)/2) - (var(--size)/2));
          display: block;
          height: 1.6rem;
          width: 1.6rem;
          background-color: var(--toggle-color);
          border-radius: 50%;
          box-shadow: 0 1px 3px var(--toggle-color), 0 -1px 3px var(--toggle-color);
          cursor: pointer;
          transition: var(--transition);
        }
        input[type="checkbox"].toggle:hover::before {
          box-shadow: 0 0 0px 8px rgba(from var(--toggle-color) r, g, b, 0.3); 
        }
        input[type="checkbox"].toggle:checked:hover::before {
          box-sizing: 0 0 0px 8px (from var(--toggle-color) r, g, b, 0.3);
        }
        input[type="checkbox"].toggle:checked::before {
          transform: translateX(100%);
        }
      </style>
      <div>
        <input type="checkbox" class="toggle">
      </div>
    `;
  }
  connectedCallback() {
    const name = this.getAttribute('name');
    const id = this.getAttribute('id');

    if(name) {
      this.shadowRoot.querySelector('input').setAttribute('name', `${name}-input`);
    }
    if(id) {
      this.shadowRoot.querySelector('input').setAttribute('id', `${id}-input`);
    }
  }
  get isChecked() {
    return this.shadowRoot.querySelector('input[type="checkbox"]').checked;
  }

  get checkToggleId() {
    return this.shadowRoot.querySelector('input[type="checkbox"]').getAttribute('id');
  }
  get name() {
    return this.shadowRoot.querySelector('input[type="checkbox"]').getAttribute('name');
  }
  check() {
    const c = this.shadowRoot.querySelector('input[type="checkbox"]');
    if(c.checked) {
      c.checked = false;
    } else {
      c.checked = true;
    }
  }
}