import React, {useContext, useState} from 'react';
import {Badge, Dropdown, Nav} from "react-bootstrap";
import Auth from "../../contexts/Auth";
import {logout} from "../../services/AuthApi";
import axios from "axios";
import {getItem} from "../../services/LocaleStorage";
import {isEmpty} from "../../Utils/project_lib";
import Navigation from "../Navigation";

import '../../styles/vins.css'
import AddCave from "../AddNewCave";
import Vin from "./Vin";

/*
                <div className="col-md-3">
                    <div className="t-products p-2">
                        <h6 className="text-uppercase">Computer & Periferals</h6>
                        <div className="p-lists">
                            <div className="d-flex justify-content-between mt-2"><span>Laptops</span> <span>23</span></div>
                            <div className="d-flex justify-content-between mt-2"><span>Desktops</span> <span>46</span></div>
                            <div className="d-flex justify-content-between mt-2"><span>Monitors</span> <span>13</span></div>
                            <div className="d-flex justify-content-between mt-2"><span>Mouse</span> <span>33</span></div>
                            <div className="d-flex justify-content-between mt-2"><span>Keyboard</span> <span>12</span></div>
                            <div className="d-flex justify-content-between mt-2"><span>Printer</span> <span>53</span></div>
                            <div className="d-flex justify-content-between mt-2"><span>Mobiles</span> <span>203</span></div>
                            <div className="d-flex justify-content-between mt-2"><span>CPU</span> <span>23</span></div>
                        </div>
                    </div>
                    <div className="processor p-2">
                        <div className="heading d-flex justify-content-between align-items-center">
                            <h6 className="text-uppercase">Processor</h6> <span>--</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"><input className="form-check-input" type="checkbox" value=""
                                                               id="flexCheckDefault"/> <label className="form-check-label"
                                                                                             htmlFor="flexCheckDefault"> Intel
                                Core i7 </label> </div>
                            <span>3</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"><input className="form-check-input" type="checkbox" value=""
                                                               id="flexCheckChecked" checked/> <label
                                className="form-check-label" htmlFor="flexCheckChecked"> Intel Core i6 </label></div>
                            <span>4</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"><input className="form-check-input" type="checkbox" value=""
                                                               id="flexCheckChecked" checked/> <label
                                className="form-check-label" htmlFor="flexCheckChecked"> Intel Core i3 </label></div>
                            <span>14</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"><input className="form-check-input" type="checkbox" value=""
                                                               id="flexCheckChecked" checked/> <label
                                className="form-check-label" htmlFor="flexCheckChecked"> Intel Centron </label></div>
                            <span>8</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"><input className="form-check-input" type="checkbox" value=""
                                                               id="flexCheckChecked" checked/> <label
                                className="form-check-label" htmlFor="flexCheckChecked"> Intel Pentinum </label></div>
                            <span>14</span>
                        </div>
                    </div>
                    <div className="brand p-2">
                        <div className="heading d-flex justify-content-between align-items-center">
                            <h6 className="text-uppercase">Brand</h6> <span>--</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"><input className="form-check-input" type="checkbox" value=""
                                                               id="flexCheckDefault"/> <label className="form-check-label"
                                                                                             htmlFor="flexCheckDefault"> Apple </label>
                            </div>
                            <span>13</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"><input className="form-check-input" type="checkbox" value=""
                                                               id="flexCheckChecked" checked/> <label
                                className="form-check-label" htmlFor="flexCheckChecked"> Asus </label></div>
                            <span>4</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"><input className="form-check-input" type="checkbox" value=""
                                                               id="flexCheckChecked" checked/> <label
                                className="form-check-label" htmlFor="flexCheckChecked"> Dell </label></div>
                            <span>24</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"><input className="form-check-input" type="checkbox" value=""
                                                               id="flexCheckChecked" checked/> <label
                                className="form-check-label" htmlFor="flexCheckChecked"> Lenovo </label></div>
                            <span>18</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"><input className="form-check-input" type="checkbox" value=""
                                                               id="flexCheckChecked" checked/> <label
                                className="form-check-label" htmlFor="flexCheckChecked"> Acer </label></div>
                            <span>44</span>
                        </div>
                    </div>
                    <div className="type p-2 mb-2">
                        <div className="heading d-flex justify-content-between align-items-center">
                            <h6 className="text-uppercase">Type</h6> <span>--</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"><input className="form-check-input" type="checkbox" value=""
                                                               id="flexCheckDefault"/> <label className="form-check-label"
                                                                                             htmlFor="flexCheckDefault"> Hybrid </label>
                            </div>
                            <span>23</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"><input className="form-check-input" type="checkbox" value=""
                                                               id="flexCheckChecked" checked/> <label
                                className="form-check-label" htmlFor="flexCheckChecked"> Laptop </label></div>
                            <span>24</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"><input className="form-check-input" type="checkbox" value=""
                                                               id="flexCheckChecked" checked/> <label
                                className="form-check-label" htmlFor="flexCheckChecked"> Desktop </label></div>
                            <span>14</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"><input className="form-check-input" type="checkbox" value=""
                                                               id="flexCheckChecked" checked/> <label
                                className="form-check-label" htmlFor="flexCheckChecked"> Touch </label></div>
                            <span>28</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"><input className="form-check-input" type="checkbox" value=""
                                                               id="flexCheckChecked" checked/> <label
                                className="form-check-label" htmlFor="flexCheckChecked"> Tablets </label></div>
                            <span>44</span>
                        </div>
                    </div>
                </div>
 */

const VinList = () => {
    const [vins, setVins] = useState([
        {
            id: 1,
            name: 'ESTATE BLUE EDITION 2018 - DONA PAULA',
            description: ' Moyennement corsé avec une texture tendre, ce vin a une texture tendre. C\'est facile et très agréable à boire',
            rating: 80,
            year: 2018,
            // src:"https://www.vinatis.com/53587-fine_default/estate-blue-edition-2018-dona-paula.png",
            src:"../../images/vins/1.jpg",
            country: "Argentine",
            prix: 17.99,
            percentage: 13.5,
            type: "Vin Rouge",
            quantity: 1,

        },
        {
            id: 2,
            name: 'SERIE A MALBEC 2019 - FAMILIA ZUCCARDI',
            description: 'Le Domaine de Dona Paula est réputé pour sa régularité et cette qualité constante millésime après millésime ! Cet Estate Blue Edition exprime divinement bien toute la complexité de son assemblage, le Malbec apporte ce côté nerveux et épicé, le Pinot Noir donne ce gourmand et ce fruité tandis que le Bonarda intensifie la complexité et apporte une belle profondeur. Il a un bon volume en bouche et cette fraîcheur apporte un équilibre parfait, les tanins sont soyeux lui confèrant une superbe longueur et donc, une finale des plus agréable. Une nouvelle trouvaille d’Argentine qui aura parfaitement sa place à chaque repas entres amis',
            rating: 70,
            year: 2019,
            // src:"https://www.vinatis.com/58217-detail_default/serie-a-malbec-2019-familia-zuccardi.png",
            src:"../../images/vins/2.jpg",
            country: "Argentine",
            prix: 17.99,
            percentage: 14.5,
            type: "Vin rouge",
            quantity: 1,
        },
        {
            id: 3,
            name: 'MALBEC - ALAMOS 2020 - BODEGA CATENA ZAPATA',
            description: 'Issue de vignobles situés en haute altitude (900 mètres) dans la région de Mendoza (Cordilière des Andes), la cuvée Alamos du domaine Catena Zapata, est produite à partir de jeunes vignes.  Un magnifique malbec signé par l\'un des meilleurs producteurs de vins argentins ! Déjà très avenant, ce Malbec vieillira parfaitement bien',
            rating: 70,
            year: 2020,
            // src:"https://www.vinatis.com/58039-fine_default/malbec-alamos-2020-bodega-catena-zapata.png",
            src:"../../images/vins/3.jpg",
            country: "Argentine",
            prix: 14.90,
            percentage: 13.5,
            type: "Vin rouge",
            quantity: 1,
        },
        {
            id: 4,
            name: 'BLANCO FERMENTATION EN BARRIQUE 2019 - VIÑA REAL',
            description: 'Ce vin blanc de Viña Real fermenté en barrique est issu de moût de raisins fermentés dans des barriques hongroises de différentes tailles et âges, où le vin a été élevé sur lies avec batonnage pendant 5 mois. Il a un boisé très intégré, et nous offre une belle fraicheur soutenue par notes d\'agrumes intenses et de fruits blancs, de pommes, de banane et d\'épices légères. Il est légèrement balsamique, léger et soigné. C\'est le genre de vin simple et bien travaillé qui s’apprécie aussi bien dans la jeunesse qu\'avec quelques années. C\'est l\'allié idéal des viandes blanches, des poissons ou encore de plats à base de pâtes fraiches et de fruits de mer.',
            rating: 90,
            year: 2019 ,
            // src:"https://www.vinatis.com/59285-detail_default/blanco-fermentation-en-barrique-2019-vina-real.png",
            src:"../../images/vins/4.jpg",
            country: "Espagne",
            prix: 8.99,
            percentage: 13,
            type: "Vin blanc",
            quantity: 1,
        },
        {
            id: 5,
            name: 'DOMAINE SAINTE CATHERINE 2017 - TERRES PLURIELLES',
            description: "Issu de sols calcaires et d'un assemblage élevé en cuve de 40 % de grenache, 30 % de syrah et 30 % de carignan, ce Côtes Du Roussillon Villages 2017 puissant mais élégant dévoile des notes impressionnantes de fruits noirs. Avecde beaux tanins et une structure ferme en bouche, il en reste pour autant fin et délicat, avec une acidité bien intégrée. Donnez-lui un an ou deux d'âge en bouteille et il devrait se conserver pendant 7 à 8 ans facilement.",
            rating: 90,
            year: 2017 ,
            // src:"https://www.vinatis.com/59684-detail_default/domaine-sainte-catherine-2017-terres-plurielles.png",
            src:"../../images/vins/5.jpg",
            country: "Languedoc-Roussillon",
            prix: 5.97,
            percentage: 14.5,
            type: "Vin Rouge",
            quantity: 1,
        },
        {
            id: 6,
            name: 'LE FISTON 2020 - BY JEFF CARREL',
            description:"En seulement quelques millésimes, les Darons sont devenus une référence incontournable. En prenant de la maturité, cette cuvée star du Languedoc-Roussillon a donné naissance au Fiston : un vin tout en fraîcheur, en fruit et en légèreté. Immédiat, spontané et gouleyant, ce vin de la bonne humeur s’apprécie obligatoirement en agréable compagnie pour une ambiance festive garantie !!! Une nouveauté à découvrir en exclusivité chez Vinatis, et nulle part ailleurs !" ,
            rating: 90,
            year: 2020  ,
            // src: "https://www.vinatis.com/58848-detail_default/le-fiston-2020-by-jeff-carrel.png",
            src:"../../images/vins/6.jpg",
            country: "Languedoc-Roussillon",
            prix: 5.90,
            percentage:13 ,
            type: "Vin Rouge",
            quantity: 1,
        },
        {
            id: 7,
            name: 'VIEILLE MULE ROUGE 2020 - BY JEFF CARREL',
            description: "De par sa belle robe pourpre profond, notre nez se mêle, dès l'ouverture de la bouteille, aux notes de fruits comme la tomate, et d'épices relevées par une touche de balsamique. S’entremêlent alors à notre palais des saveurs de garrigues typiques du pays catalan, de réglisses et de cerises kirschées. La bouche est voluptueuse et légère à la fois. Un petit côté aérien et délicat dont on ne se lasse pas. En accompagnement ou pour l’apéritif, ce qui est sûr, c'est que Vieille Mule fera des heureux et des palais conquis !",
            rating: 90,
            year: 2020  ,
            // src: "https://www.vinatis.com/62678-detail_default/vieille-mule-rouge-2020-by-jeff-carrel.png",
            src:"../../images/vins/1.png",
            country: "Languedoc-Roussillon",
            prix: 6.20,
            percentage:14 ,
            type: "Vin Rouge",
            quantity: 1,
        },
        {
            id: 8,
            name: 'LES FUMÉES BLANCHES 2020 ROSE GRIS DE SAUVIGNON - FRANÇOIS LURTON',
            description: "Après le succès du Sauvignon blanc, découvrez Les Fumées Blanches rosé Gris de Sauvignon pour une expérience gustative envoûtante! Variante du Sauvignon Blanc, le sauvignon Gris a des baies roses. A mi-chemin entre les cépages rouges et blancs, le Sauvignon Gris est présent dans le Languedoc, le Gers, à Bordeaux et dans la Loire. Il donne à cet assemblage cette teinte légèrement rosé, ainsi que des arômes de fruits exotiques et de pamplemousse. ",
            rating: 91,
            year:  2020 ,
            // src: "https://www.vinatis.com/59271-detail_default/les-fumees-blanches-2020-rose-gris-de-sauvignon-francois-lurton.png",
            src:"../../images/vins/2.png",
            country: "France",
            prix: 6.95 ,
            percentage: 12,
            type: "Vin rosé",
            quantity: 1,
        },
        {
            id: 9,
            name: 'LES ENFANTS TERRIBLES ROSE 2020 - AEGERTER PERE ET FILS',
            description:"Un Rosé 100% fraicheur, facile et convivial à petit prix ! Que demander de mieux ? Craquez pour ce rosé facile à boire qui fera l'unanimité ! Issu de la gamme \"Les Enfants Terribles\" ce vin a pour ambition d’inciter les consommateurs non-initiés à découvrir des vins d’exception de manière simple et sexy. Frais et sur le fruit, voici un rosé de Provence, qui se partagera entre amis pour des moments en toute simplicité. Un petit délice à petit prix... Alors pourquoi s'en priver? A découvrir" ,
            rating: 90,
            year: 2020  ,
            src: "https://www.vinatis.com/55837-detail_default/les-enfants-terribles-rose-2020-aegerter-pere-et-fils.png",
            country: "Languedoc-Roussillon",
            prix: 6.90,
            percentage:13 ,
            type: "Vin Rouge",
            quantity: 1,
        },

    ]);

    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'Vins Rouges',
            nbVins: 53
        },
        {
            id: 2,
            name: 'Vin blanc',
            nbVins: 94
        },
        {
            id: 3,
            name: 'Vin Rosé',
            nbVins: 2
        },

    ]);

    function AddToMyCave(vin) {
        console.log("ajouter à la cave ");
        console.log(vin);
        return undefined;
    }

    return (
        <div className="container-fluid mt-5 mb-5">

            <div className="row g-2">
                <div className="col-md-3">
                    <div className="categories p-2">
                        <div className="heading d-flex justify-content-between align-items-center">
                            <h6 className="text-uppercase">Catégories de vins</h6> <span> </span>
                        </div>

                        {categories && categories.map(categorie =>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultChecked={true}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        {categorie.name}
                                    </label>
                                </div>
                                <span>{categorie.nbVins}</span>
                            </div>
                        )}

                    </div>
                </div>


                <div className="col-md-9">
                    <div className="row g-2">

                        {vins && vins.map(vin =>
                            <Vin key={vin.id} vin={vin}/>
                        )}


                        {/*{vins && vins.map(vin =>*/}
                        {/*    <div className="col-md-4">*/}
                        {/*        <div className="product py-4">*/}
                        {/*            <div className="text-center image-block" ><img src={vin.src}  width="200" /></div>*/}
                        {/*            <div className=" text-center">*/}
                        {/*                <h5>{vin.name}</h5>*/}
                        {/*                /!*<span>{vin.description}</span>*!/*/}
                        {/*            </div>*/}
                        {/*            <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">*/}
                        {/*                <button className="btn btn-primary" key={vin.id} onClick={() => AddToMyCave(vin)} >*/}
                        {/*                    Ajouter à ma cave*/}
                        {/*                </button>*/}
                        {/*                <div className="add">*/}
                        {/*                    <span className="product_fav">{vin.rating}</span>/*/}
                        {/*                    <span className="product_fav">100</span>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*)}*/}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default VinList;
