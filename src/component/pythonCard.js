import Web from "../images/web-programming.png"
import Group from "../images/Group.png"
import Support from "../images/g2049.png"
import Laptop from "../images/laptop.png"
import Settings from "../images/g1104.png"

function Card(){
    return(
        <>
        <div className="python-content">
                <h4>Our Python Development Services</h4>
                <p>Counted among the best custom python app development companies in India, we cover a wide array of rapid Python app development services that include:</p>
                <div className="python-card">
                    <img src={Web} />
                    <h6>Python Web Development</h6>
                    <p>Our years of domain expertise help us provide secure, scalable, feature-packed, and mobile-friendly Python web development services</p>
                </div>
                <div className="python-card">
                    <img src={Group} />
                    <h6>Python Machine Learning</h6>
                    <p>We implement machine-learning algorithms for predictive engines in different fields by leveraging data analysis and scientific computing libraries.</p>
                </div>
                <div className="python-card">
                    <img src={Support} />
                    <h6>Python Support & Maintenance</h6>
                    <p>Our years of domain expertise help us provide secure, scalable, feature-packed, and mobile-friendly Python web development services</p>
                </div>
                <div className="python-card">
                    <img src={Laptop} />
                    <h6>QA and Testing Services</h6>
                    <p>From the initial stage of the project, we put expert quality analysts in the loop so you can ensure your app runs across all browsers and screens.</p>
                </div>
                <div className="python-card">
                    <img src={Settings} />
                    <h6>Python Hybrid Programming</h6>
                    <p>We can extend the Python landscape with C/C++, Java, or C# modules and write Python scripts integrated into C/C++, Java, or C# code for quick customizations.</p>
                </div>
                <div className="python-card">
                    <img src={Settings} />
                    <h6>Migration & Upgradation Services</h6>
                    <p>If you want to migrate your web app from another platform to Python or upgrade to the present version of Python, Our Python Django programmers are ready to help you.</p>
                </div>
                
            </div>
        </>
    )
}

export default Card;