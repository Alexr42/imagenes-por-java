const btnMostrar = document.querySelector("#btnMostrar");
const cajaMiniaturas = document.querySelector("#cajaMiniaturas");
const cajaFotoGrande = document.querySelector("#cajaFotoGrande");
const tituloFotoGrande = cajaFotoGrande.querySelector("h2");
const imgFotoGrande = cajaFotoGrande.querySelector("img");
const pieFoto = document.querySelector("#pieFoto");

const carretilla = document.createDocumentFragment();

const arrayImagenes = [
    {
        titulo: "Foto 1",
        url: "img/viajes-1.jpg",
        pieDeFoto: "Descripción de la foto 1",
        id: "img1",
        alt: "foto de paisaje"
    },
    {
        titulo: "Foto 2",
        url: "img/viajes-2.jpg",
        pieDeFoto: "Descripción de la foto 2",
        id: "img2",
        alt: "foto de paisaje"
    },
    {
        titulo: "Foto 3",
        url: "img/viajes-3.jpg",
        pieDeFoto: "Descripción de la foto 3",
        id: "img3",
        alt: "foto de paisaje"
    },
    {
        titulo: "Foto 4",
        url: "img/viajes-4.jpg",
        pieDeFoto: "Descripción de la foto 4",
        id: "img4",
        alt: "foto de paisaje"
    },
    {
        titulo: "Foto 5",
        url: "img/viajes-5.jpg",
        pieDeFoto: "Descripción de la foto 5",
        id: "img5",
        alt: "foto de paisaje"
    },
    {
        titulo: "Foto 6",
        url: "img/viajes-6.jpg",
        pieDeFoto: "Descripción de la foto 6",
        id: "img1",
        alt: "foto de paisaje"
    }
];


btnMostrar.addEventListener("click", () => {
    imprimir();
});

const imprimir = () => {
    arrayImagenes.forEach((item) => {
        const album = document.createElement("div");
        const fotoAlbum = document.createElement("img");
        fotoAlbum.src = item.url;
        fotoAlbum.alt = item.alt;
        fotoAlbum.id = item.id;
        fotoAlbum.classList.add("img-thumbnail");

        album.append(fotoAlbum);
        carretilla.append(album);
    });
    cajaMiniaturas.append(carretilla);
};

const fotoGrande = (item) => {
    tituloFotoGrande.textContent = item.titulo;
    imgFotoGrande.src = item.url;
    imgFotoGrande.alt = item.alt;
    imgFotoGrande.id = item.id;
    imgFotoGrande.classList.add("img-thumbnail");
    pieFoto.textContent = item.pieDeFoto;

};