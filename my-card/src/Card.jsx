import animalPic from './assets/jaguar.jpg'

function Card() {

    return(

        <div className="card-container">
            <h1 className="card-title">
                Jaguar
            </h1>
            <img className='card-image' src={animalPic} alt="black jaguar" />

            <div className='card-facts-container'>
                <p className='card-facts'>
                Jaguars are the largest of South America’s big cats and the third largest cats in the world.
                </p>

                <ul className='card-list'>
                    <li><span>Scientific Name: </span>Panthera Onca</li>
                    <li><span>Life Span: </span>12-15 years</li>
                    <li><span>Size: </span>3-6.5ft long</li>
                    <li><span>Weight: </span>100-348lbs</li>
                </ul>
                <p className='card-description'>
                    The Jaguar and the Leopard are often confused with one another in zoos. 
                    Their coloring and markings are so similar that it is difficult for people to distinguish them. 
                    The difference lies in the center of the Jaguars rosettes, because unlike the leopard, 
                    the Jaguar has spots inside of its rosettes! The Jag is also a much stockier animal than its cousin, 
                    with shorter legs and tail, giving it more of a pit bull type appearance.
                </p>
            </div>

        </div>

    );

}

export default Card