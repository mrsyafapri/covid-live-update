class AboutBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container text-center">
                <div class="row mb-3">
                    <div class="col">
                        <h2 class="lobster-fm">About Developer</h2>
                    </div>
                </div>
                <div class="row justify-content-center fs-5">
                    <div class="col">
                        <p>My name is Muhammad Rizki Syafapri. I come from Indragiri Hilir, Riau, Indonesia. I am currently studying at Informatics Engineering UIN Suska Riau. I am a Google DSC Lead for my university. I am currently focused on programming, especially web development. I am also very interested in digital startups.</p>
                    </div>
                </div>
            </div>
            <div class="container text-center">
                <div class="row mb-3">
                    <div class="col">
                        <h2 class="lobster-fm">About API</h2>
                    </div>
                </div>
                <div class="row justify-content-center fs-5">
                    <div class="col">
                        <p>This website uses the API from <a class="text-black" href="https://covid19.mathdro.id/api" target="_blank" rel="noopener noreferrer">mathdroid</a>. COVID-19 global data (from JHU CSSE for now) as-a-service.</p>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#900000" fill-opacity="1"
                    d="M0,192L26.7,181.3C53.3,171,107,149,160,165.3C213.3,181,267,235,320,224C373.3,213,427,139,480,138.7C533.3,139,587,213,640,240C693.3,267,747,245,800,224C853.3,203,907,181,960,154.7C1013.3,128,1067,96,1120,80C1173.3,64,1227,64,1280,80C1333.3,96,1387,128,1413,144L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">
                </path>
            </svg>
        `;
    }
}

customElements.define("about-bar", AboutBar);