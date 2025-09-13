export class CheckToggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode : 'open'});
    this.render();
    this.shadowRoot.innerHTML = `
      <style>
        :host {

        }
      </style>
      <div>
        <input type="checkbox">
      </div>
    `;
  }
  connectedCallback() {
    const name = this.getAttribute('name');
    const id = this.getAttribute('id');

    if(name) {
      this.querySelector('input').setAttribute('name', name);
    }
    if(id) {
      this.querySelector('input').setAttribute('id', id);
    }
  }
}