import React from 'react'

const CardProduct = (props) => {
return (
    <article className='card'>
            <div className='card-detalle'>
                <div><img alt='error al cargar la imagen del proyecto' src={props.img} /></div>
                <section>
                    <p>{props.categories}</p>
                    <p><strong>{props.title}</strong></p>
                    <p>{props.description}</p>
                </section>
            </div>
            <div className='card-button'>
                <button><a className="a" target='_blank' rel="noreferrer" href="">Try it out       <i className="fa-solid fa-arrow-right"></i></a></button>
            </div>
        </article>
)
}

export default CardProduct