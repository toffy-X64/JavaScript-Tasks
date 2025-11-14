export class Button {
    constructor(text, border, color, background) {
        this.text = text;
        this.border = border;
        this.color = color;
        this.background = background;
    }

    render(parentElement) {
        if (!parentElement)
            return;

        this.button = document.createElement('button');
        this.button.textContent = this.text;

        this.button.style.border = this.border;
        this.button.style.color = this.color;
        this.button.style.background = this.background;

        this.button.addEventListener('click', () => {
            console.log(`Button clicked: ${this.text}. Button color: ${this.background}`);
        });
        parentElement.appendChild(this.button);
    }
};

export class RoundedButton extends Button {
    constructor(text, border, color, background, borderRadius) {
        super(text, border, color, background);
        this.borderRadius = borderRadius;
    }

    render(parentElement) {
        super.render(parentElement);
        this.button.style.borderRadius = this.borderRadius;
        this.button.addEventListener('mouseover', (e) => this.dropShadow());
        this.button.addEventListener("mouseout", (e) => this.hideShadow());
    }

    dropShadow() {
        this.button.style.filter = 'drop-shadow(0 0 0.75rem black)';
    }

    hideShadow() {
        this.button.style.filter = 'none';
    }
};