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
            description: ' Moyennement cors?? avec une texture tendre, ce vin a une texture tendre. C\'est facile et tr??s agr??able ?? boire',
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
            description: 'Le Domaine de Dona Paula est r??put?? pour sa r??gularit?? et cette qualit?? constante mill??sime apr??s mill??sime ! Cet Estate Blue Edition exprime divinement bien toute la complexit?? de son assemblage, le Malbec apporte ce c??t?? nerveux et ??pic??, le Pinot Noir donne ce gourmand et ce fruit?? tandis que le Bonarda intensifie la complexit?? et apporte une belle profondeur. Il a un bon volume en bouche et cette fra??cheur apporte un ??quilibre parfait, les tanins sont soyeux lui conf??rant une superbe longueur et donc, une finale des plus agr??able. Une nouvelle trouvaille d???Argentine qui aura parfaitement sa place ?? chaque repas entres amis',
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
            description: 'Issue de vignobles situ??s en haute altitude (900 m??tres) dans la r??gion de Mendoza (Cordili??re des Andes), la cuv??e Alamos du domaine Catena Zapata, est produite ?? partir de jeunes vignes.  Un magnifique malbec sign?? par l\'un des meilleurs producteurs de vins argentins ! D??j?? tr??s avenant, ce Malbec vieillira parfaitement bien',
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
            name: 'BLANCO FERMENTATION EN BARRIQUE 2019 - VI??A REAL',
            description: 'Ce vin blanc de Vi??a Real ferment?? en barrique est issu de mo??t de raisins ferment??s dans des barriques hongroises de diff??rentes tailles et ??ges, o?? le vin a ??t?? ??lev?? sur lies avec batonnage pendant 5 mois. Il a un bois?? tr??s int??gr??, et nous offre une belle fraicheur soutenue par notes d\'agrumes intenses et de fruits blancs, de pommes, de banane et d\'??pices l??g??res. Il est l??g??rement balsamique, l??ger et soign??. C\'est le genre de vin simple et bien travaill?? qui s???appr??cie aussi bien dans la jeunesse qu\'avec quelques ann??es. C\'est l\'alli?? id??al des viandes blanches, des poissons ou encore de plats ?? base de p??tes fraiches et de fruits de mer.',
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
            description: "Issu de sols calcaires et d'un assemblage ??lev?? en cuve de 40 % de grenache, 30 % de syrah et 30 % de carignan, ce C??tes Du Roussillon Villages 2017 puissant mais ??l??gant d??voile des notes impressionnantes de fruits noirs. Avecde beaux tanins et une structure ferme en bouche, il en reste pour autant fin et d??licat, avec une acidit?? bien int??gr??e. Donnez-lui un an ou deux d'??ge en bouteille et il devrait se conserver pendant 7 ?? 8 ans facilement.",
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
            description:"En seulement quelques mill??simes, les Darons sont devenus une r??f??rence incontournable. En prenant de la maturit??, cette cuv??e star du Languedoc-Roussillon a donn?? naissance au Fiston : un vin tout en fra??cheur, en fruit et en l??g??ret??. Imm??diat, spontan?? et gouleyant, ce vin de la bonne humeur s???appr??cie obligatoirement en agr??able compagnie pour une ambiance festive garantie !!! Une nouveaut?? ?? d??couvrir en exclusivit?? chez Vinatis, et nulle part ailleurs !" ,
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
            description: "De par sa belle robe pourpre profond, notre nez se m??le, d??s l'ouverture de la bouteille, aux notes de fruits comme la tomate, et d'??pices relev??es par une touche de balsamique. S???entrem??lent alors ?? notre palais des saveurs de garrigues typiques du pays catalan, de r??glisses et de cerises kirsch??es. La bouche est voluptueuse et l??g??re ?? la fois. Un petit c??t?? a??rien et d??licat dont on ne se lasse pas. En accompagnement ou pour l???ap??ritif, ce qui est s??r, c'est que Vieille Mule fera des heureux et des palais conquis !",
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
            name: 'LES FUM??ES BLANCHES 2020 ROSE GRIS DE SAUVIGNON - FRAN??OIS LURTON',
            description: "Apr??s le succ??s du Sauvignon blanc, d??couvrez Les Fum??es Blanches ros?? Gris de Sauvignon pour une exp??rience gustative envo??tante! Variante du Sauvignon Blanc, le sauvignon Gris a des baies roses. A mi-chemin entre les c??pages rouges et blancs, le Sauvignon Gris est pr??sent dans le Languedoc, le Gers, ?? Bordeaux et dans la Loire. Il donne ?? cet assemblage cette teinte l??g??rement ros??, ainsi que des ar??mes de fruits exotiques et de pamplemousse. ",
            rating: 91,
            year:  2020 ,
            // src: "https://www.vinatis.com/59271-detail_default/les-fumees-blanches-2020-rose-gris-de-sauvignon-francois-lurton.png",
            src:"../../images/vins/2.png",
            country: "France",
            prix: 6.95 ,
            percentage: 12,
            type: "Vin ros??",
            quantity: 1,
        },
        {
            id: 9,
            name: 'LES ENFANTS TERRIBLES ROSE 2020 - AEGERTER PERE ET FILS',
            description:"Un Ros?? 100% fraicheur, facile et convivial ?? petit prix ! Que demander de mieux ? Craquez pour ce ros?? facile ?? boire qui fera l'unanimit?? ! Issu de la gamme \"Les Enfants Terribles\" ce vin a pour ambition d???inciter les consommateurs non-initi??s ?? d??couvrir des vins d???exception de mani??re simple et sexy. Frais et sur le fruit, voici un ros?? de Provence, qui se partagera entre amis pour des moments en toute simplicit??. Un petit d??lice ?? petit prix... Alors pourquoi s'en priver? A d??couvrir" ,
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
            name: 'Vin Ros??',
            nbVins: 2
        },

    ]);

    function AddToMyCave(vin) {
        console.log("ajouter ?? la cave ");
        console.log(vin);
        return undefined;
    }

    return (
        <div className="container-fluid mt-5 mb-5">

            <div className="row g-2">
                <div className="col-md-3">
                    <div className="categories p-2">
                        <div className="heading d-flex justify-content-between align-items-center">
                            <h6 className="text-uppercase">Cat??gories de vins</h6> <span> </span>
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
                        {/*                    Ajouter ?? ma cave*/}
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
