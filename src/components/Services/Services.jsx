import "./Services.css";
import { services } from "../../data";
import SectionTitle from "../../assets/SectionTitle";
import SingleService from "./SingleService";
const Services = () => {
    return (
        <div className="services" id="services">
            <section className="section-center services-center">
                <SectionTitle titleText="services" />
                <div className="services-content column column-2">
                    {services.map((service) => {
                        return (
                            <SingleService
                                {...service}
                                key={service.serviceID}
                            />
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Services;
