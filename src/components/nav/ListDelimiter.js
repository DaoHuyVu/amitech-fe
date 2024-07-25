import './nav-bar.css'
export default function ListDelimiter({elements = [],style,className='',delimiter = '|'}){
    return(
        <div className={`list-delimiter ${className}`} style={style}>
            {
                elements.map((element,index) => {
                   return(
                    <div className='d-flex' key={index}>
                        {element}
                        {index !== elements.length-1 && <p className='delimiter '>{delimiter}</p>}
                    </div>
                   )
                })
            }
        </div>
    )
}