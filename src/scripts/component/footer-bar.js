class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="my-bg text-light text-center pb-3">
                <p>Submission Belajar Fundamental Front-End Web Development</p>
                <p>&copy; <span id="footer-year"></span> COVID Live Update &middot; Created and designed with love by <a href="https://mrsyafapri.github.io" target="_blank" class="text-white fw-bold">Muhammad Rizki Syafapri</a></p>
            </div>
        `;
    }
}

customElements.define("footer-bar", FooterBar);