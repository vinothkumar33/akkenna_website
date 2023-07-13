import Vector3 from "../images/Vector3.png"
import ClipPath from "../images/Clip-path-group.png"
import Frame from "../images/Frame.png"


function Content(){
    return(
        <>
         <div className="top-container" >
            <img src={Vector3} className="top-image"  />
            <img  src={ClipPath} className="clip-path"/>
            <img src={Frame} className="mobile-frame" />
            <div className="hire-form">
                <br />
                <h6 className="heading">Hire deticated Node js Developers</h6><br />
                <form>
                    <input placeholder="Enter your Name*" /><br />
                    <input placeholder="Enter your Mail ID*" /><br />
                    <input placeholder="Enter your Mobile Number*" /><br />
                    <button  className='submit-button'>SUBMIT</button>

                </form>
            </div>
            
         </div>
         
        </>
    )
}

export default Content;