import Slider from "./Slider";
import React from "react";

export default function Services() {

    return (
        <section id="servizi" className="py-5 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-10 title-primary">
                Servizi
            </h2>

            <div className="container">
                <div className="row g-4 align-items-center text-primary-custom space-y-4 my-2">
                    <div className="col-md-6 col-sm-12">
                        <h4>
                            FISIOTERAPIA IN STUDIO
                        </h4>
                        <h5>
                            Presso lo Studio Fisiosport Cadamuro collaboro con un team qualificato per offrirti trattamenti completi e mirati, in un ambiente accogliente e professionale.
                        </h5>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h4>
                            FISIOTERAPIA A DOMICILIO
                        </h4>
                        <h5>
                            Il servizio domiciliare è pensato per chi ha difficoltà a spostarsi o desidera ricevere trattamenti personalizzati nel proprio ambiente, senza rinunciare alla qualità.
                        </h5>
                    </div>
                </div>
            </div>


            <Slider />
        </section>
    );
}
