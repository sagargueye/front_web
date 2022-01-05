import React, {useState} from "react";
import Vin from "../../components/Vins/Vin";


function getVinsByCaveId() {
    let caves=[
        {
            id: 1,
            name: 'Cave 1 ',
            src:"/images/portfolio/cave.jpg",
            vins:[{
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
                caveId:1

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
                caveId:1
            }]
        },
        {
            id: 2,
            name: 'Cave 2',
            src:"/images/portfolio/cave.jpg",
            vins:[{
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
                caveId:1,
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
                caveId:1,
            }]
        }
    ];
    return caves;
}

const VoirCave = () => {
    const [caves, setCaves]=useState(getVinsByCaveId());


    return (
        <div>
            {caves && caves.map(cave =>
                <div className="portfolio-modal modal fade" id={"voirCave"+ cave.id} tabIndex="-1" aria-labelledby={"voirCave"+ cave.id}
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{ cave.name}</h2>

                                            <div className="container-fluid mt-5 mb-5">
                                                <div className="row g-2">
                                                    <div className="col-md-9">
                                                        <div className="row g-2">
                                                            {cave.vins.map((vin, index) => <Vin key={index} vin={vin}/>)}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )};
        </div>
    );
};

export default VoirCave;