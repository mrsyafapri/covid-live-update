import axios from "axios";
import "../component/indonesia-bar.js";
import "../component/world-bar.js";

class DataSource {
    static async getIndonesiaCase() {
        try {
            const response = await axios.get("https://covid19.mathdro.id/api/countries/Indonesia");
            const coronaReportElement = document.querySelector('indonesia-bar');
            coronaReportElement.coronaItem = response.data;
        } catch (error) {
            alert('Periksa koneksi internet Anda...');
        }
    }

    static async getWorldCase() {
        try {
            const response = await axios.get("https://covid19.mathdro.id/api");
            const coronaReportElement = document.querySelector('world-bar');
            coronaReportElement.coronaItem = response.data;
        } catch (error) {
            alert('Periksa koneksi internet Anda...');
        }
    }
}

export default DataSource;