import numeral from 'numeral';
import img from '../../images/bg-covid.jpg';

class WorldBar extends HTMLElement {
    set coronaItem(item) {
        this._coronaItem = item;
        this.render();
    }

    render() {
        const dateUpdated = new Date(this._coronaItem.lastUpdate);
        const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];
        this.innerHTML = '';
        this.innerHTML = `
            <div class="text-center text-light border-bottom bg-covid" style="background-image: url(${img})">
                <div class="container-fluid">
                    <div class="row mb-5">
                        <div class="col">
                            <h2 class="poppins-fm mb-3">COVID Live Update di Dunia (Global)</h2>
                            <h4>Update data terakhir pada ${dayNames[dateUpdated.getUTCDay()]}, ${dateUpdated.getUTCDate()} ${monthNames[dateUpdated.getUTCMonth()]} ${dateUpdated.getUTCFullYear()} ${dateUpdated.getUTCHours()}:${dateUpdated.getUTCMinutes()}:${dateUpdated.getUTCSeconds()}</h4>
                            <h5>Dari JHU CSSE COVID-19 Data (mathdroid API)</h5>
                        </div>
                    </div>
                    <div class="row gx-5">
                        <div class="col mb-3">
                            <div class="ps-5 pe-5 btn btn-danger fw-bold fs-4">
                                <p>Meninggal</p>
                                <p>${numeral(this._coronaItem.deaths.value).format("0,0")} Orang</p>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="ps-5 pe-5 btn btn-warning fw-bold fs-4">
                                <p>Terkonfirmasi</p>
                                <p>${numeral(this._coronaItem.confirmed.value).format("0,0")} Orang</p>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="ps-5 pe-5 btn btn-success fw-bold fs-4">
                                <p>Sembuh</p>
                                <p>${numeral(this._coronaItem.recovered.value).format("0,0")} Orang</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("world-bar", WorldBar);