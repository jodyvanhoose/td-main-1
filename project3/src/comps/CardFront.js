import './CardFront.css'

function CardFront({formInfo}) {

return(

  <section className="front-container">

    <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
    <span className="card-number">{formInfo.cardNumber}</span>
    <div className="additional-info">
      <span className="card-name">{formInfo.name}</span>
      <span className="date">{formInfo.monthExpiration}/{formInfo.yearExpiration}</span>
    </div>

  </section>

)

}

export default CardFront;