import $ from "jquery";
import gsap from "gsap";
import DataSource from "../data/data-source.js";
import "../component/indonesia-bar.js";
import "../component/world-bar.js";

const main = () => {
    DataSource.getWorldCase();
    DataSource.getIndonesiaCase();

    const date = new Date();
    $("#footer-year").text(date.getFullYear());

    gsap.from('.navbar', {
        duration: 1.5,
        y: -150,
        opacity: 0,
        ease: 'bounce',
    });

    gsap.from('section#world', {
        duration: 1.8,
        y: -400,
        opacity: 0,
        ease: 'sine',
    });

    gsap.from('section#indonesia', {
        duration: 2.3,
        y: -400,
        opacity: 0,
        ease: 'circ',
    });
}

export default main;