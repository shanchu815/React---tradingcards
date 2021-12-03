'use strict';

const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg',
    cardID: 1,
  },
  {
    name: "Float",
    skill: "baking pretzels",
    imgUrl: "/static/img/float.jpg",
    cardId: 2,
  },
  {
    name: "Llambda",
    skill: "knitting scarves",
    imgUrl: "/static/img/llambda.jpg",
    cardId: 3,
  },
  {
    name: "Off-By-One",
    skill: "climbing mountains",
    imgUrl: "/static/img/off-by-one.jpeg",
    cardId: 4,
  },
  {
    name: "Seed.py",
    skill: "making curry dishes",
    imgUrl: "/static/img/seedpy.jpeg",
    cardId: 5,
  },
  {
    name: "Polymorphism",
    skill: "costumes",
    imgUrl: "/static/img/polymorphism.jpeg",
    cardId: 6,
  },
  {
    name: "Short Stack Overflow",
    skill: "ocean animal trivia",
    imgUrl: "/static/img/shortstack-overflow.jpeg",
    cardId: 7,
  },
  {
    name: "Merge",
    skill: "bullet journaling",
    imgUrl: "/static/img/merge.png",
    cardId: 8,
  },
];
//added the other cards & also assigned an id to Balloonicorn card
// console.log(tradingCardData); this is a test

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} alt="profile" />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}
// added props.skill to Skill in line 16

function TradingCardContainer() {
  const tradingCards = [];

  // for (const currentCard of tradingCardData) {
  //   paragraphs.push(<p>{currentCard.name}</p>);
  // } this is an empty for loop template

  for (const currentCard of tradingCardData) {
    tradingCards.push(
      <TradingCard
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />
    );
  } //this is the completed for loop, the return below had {paragraphs} instead of tradingCards

  return (
    <React.Fragment>
      {tradingCards}
    </React.Fragment>
  );
}

ReactDOM.render(<TradingCardContainer />, document.querySelector("#all-cards"));
//we need this line to make TradingCardContainer's return actually push to cards.html so it shows on the site

//our test for loop
// for (const card of tradingCardData){
//   console.log(TradingCard(card)),
//   document.querySelector(card.cardId),
//   console.log(card.name, card.skill);
// }

// the ReactDoms from the template where each card is manually rendered out to a manually constructed div
// ReactDOM.render(
//   <TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />,
//   document.querySelector('#balloonicorn')
// );

// ReactDOM.render(
//   <TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
//   document.querySelector('#float')
// );

// ReactDOM.render(
//   <TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
//   document.querySelector('#llambda')
// );

// we are rendering merge.png (pusheen mermaid) & shortstack-overflow.jpeg (pancakes with eyes) as new cards
// ReactDOM.render(
//   <TradingCard name="Mer Pusheen" skill="swimming" imgUrl="/static/img/merge.png" />,
//   document.querySelector('#merpusheen')
// );
//dont put a space in between merpusheen, it will not render
// ReactDOM.render(
//   <TradingCard name="Shortstack" skill="making confectionaries" imgUrl="/static/img/shortstack-overflow.jpeg" />,
//   document.querySelector('#shortstack')
// );