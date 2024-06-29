import animalPic from './assets/jaguar.jpg'

function Card() {

    return(

        <div className="card-container">
            <h1 className="card-title">
                Jaguar
            </h1>
            <img src={animalPic} alt="black jaguar" />

            <div className='card-facts'>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolore libero 
                    debitis voluptatum eligendi perspiciatis dolorem enim.
                </p>

                <ul>
                    <li><span>Scientific Name: </span>Jaguar</li>
                    <li><span>Life Span: </span></li>
                    <li><span>Characteristics: </span></li>
                    <li>Another Fact: </li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae tempora perferendis soluta adipisci. 
                    Quod nihil iure consequatur rerum officiis quisquam, nostrum magnam, pariatur temporibus sed a adipisci 
                    eius sapiente suscipit vero similique obcaecati delectus veritatis doloribus. Quibusdam sequi alias 
                    cupiditate nulla numquam ipsam iste deserunt inventore? Aliquam sequi impedit voluptates.
                </p>
            </div>

        </div>

    );

}

export default Card