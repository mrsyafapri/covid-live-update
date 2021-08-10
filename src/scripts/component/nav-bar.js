class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark my-bg">
                <div class="container">
                    <a class="navbar-brand lobster-fm" href="#">COVID Live Update</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#world">World Case</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#indonesia">Indonesia Case</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#about">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define("nav-bar", NavBar);