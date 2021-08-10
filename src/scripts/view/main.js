import axios from "axios";
import gsap from "gsap";
import "../component/indonesia-bar.js";
import "../component/world-bar.js";

const main = () => {
    const baseUrl = 'https://covid19.mathdro.id/api';

    const getIndonesiaCase = async () => {
        try {
            const response = await axios.get(`${baseUrl}/countries/Indonesia`);
            const coronaReportElement = document.querySelector('indonesia-bar');
            coronaReportElement.coronaItem = response.data;
        } catch (error) {
            alert('Periksa koneksi internet Anda...');
        }
    };

    const getWorldCase = async () => {
        try {
            const response = await axios.get(baseUrl);
            const coronaReportElement = document.querySelector('world-bar');
            coronaReportElement.coronaItem = response.data;
        } catch (error) {
            alert('Periksa koneksi internet Anda...');
        }
    };

    getWorldCase();
    getIndonesiaCase();

    const date = new Date();
    const footerYear = document.getElementById("footer-year");
    footerYear.innerHTML = date.getFullYear();

    gsap.from('.navbar', {
        duration: 1.5,
        y: -150,
        opacity: 0,
        ease: 'bounce',
    });
}

export default main;