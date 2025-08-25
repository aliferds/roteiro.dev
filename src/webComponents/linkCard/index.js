export class LinkCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    const href = this.getAttribute('href');

    let validHref = null;
    let isLink = false;

    if(href){
      try {
        const url = new URL(href, window.location.href);
        // Se a URL for um link HTTP(S), a consideramos segura
        if (url.protocol === 'http:' || url.protocol === 'https:') {
          validHref = url.href;
          isLink = true;
        }
      } catch (e) {
        // Se a URL for inválida, mantemos o valor padrão '#'
        console.warn(`URL inválida fornecida: ${href}`);
      }
    }


    const styles = `
      <style>
        :host {
          display: block;
          border: 1px solid #ccc;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          width: 320px;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

      </style>
    `;

    // Conteúdo principal do card (sem a tag <a>)
    const cardContent = `
      <div>
        <slot name="image"></slot>
        <slot name="title"></slot>
        <slot></slot> 
      </div>
    `;

    let templateHTML = '';
    if (isLink) {
      // Se houver href, anexa os estilos e o conteúdo dentro do <a>
      templateHTML = `
        ${styles}
        <a href="${validHref}">
          ${cardContent}
        </a>
      `;
    } else {
      // Se não houver, anexa apenas os estilos e o conteúdo diretamente
      templateHTML = `
        ${styles}
        ${cardContent}
      `;
    }

    this.shadowRoot.innerHTML = templateHTML;
  }
}