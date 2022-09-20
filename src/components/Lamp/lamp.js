import './lamp.css';

function Lamp({ color, shape }){
    const className = `lamp color-${ color } ${ shape }`;
    return <div className={ className }></div>
}

export default Lamp;