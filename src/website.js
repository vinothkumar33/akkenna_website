import './style.css'
import Content from "./component/content";
import Navbar from './component/navbar';
import NodeContent from './component/nodeContent';
import Card from './component/pythonCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function Website(){
    return(
        <>
        <div >
        <Navbar />
        <Content  />
        <NodeContent />
        <Card />
        </div>
        </>
    )
}

export default Website;