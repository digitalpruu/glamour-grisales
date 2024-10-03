const title = "Glamour Grisales";
const email = "yeimi502grisales@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en los servicios de estética y belleza de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573214392724"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En 'Glamour Grisales', nos dedicamos a resaltar tu belleza con tratamientos estéticos personalizados y de alta calidad. Nuestro equipo trabaja con dedicación para ofrecerte los mejores resultados, realzando lo mejor de ti.",
        description2: "Nuestra misión es proporcionar servicios de belleza que mejoren tu bienestar y autoestima. Con atención a cada detalle, te brindamos una experiencia única en el cuidado personal, porque sabemos que tu belleza merece el mejor trato."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Aquí trabajamos para resaltar tu belleza",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61566533345273&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/yeimi_grisales",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
