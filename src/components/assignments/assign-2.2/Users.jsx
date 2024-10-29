import '../assign-3/Users.css'

function Users() {
    let usersList= [
      {
        userId: 1,
        it: 1,
        title: "are or do repels provide blacked out except option criticizes",
        body: "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the trouble so that the whole\nof our things are but they are the matter will happen to the architect"
      },
      {
        userId: 1,
        it: 2,
        title: "who is being",
        body: "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of pleasure, or any trouble to reject them; we shall not be open to them; we shall not be able to do so, but none."
      },
      {
        userId: 1,
        it: 3,
        title: "she repels troubles as if she were training, whoever she is",
        body: "and just but by what right\nthe lust of every one who chooses to be blinded, or to the\nlust of pains or accusers, who is spared\nhis pains further by his hatred and labor and wants or"
      },
      {
        userId: 1,
        it: 4,
        title: "and he is blinded",
        body: "to gain any pleasure by rejecting it often\nbut it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things"
      },
      {
        userId: 1,
        it: 5,
        title: "they don't know what they hate",
        body: "Let him seek forgiveness for repudiation, but there are other things, or let him flee, but it is, but there is pleasure, we can all be pleasures, and there is no pain or pain."
      },
      {
        userId: 1,
        it: 6,
        title: "I will open them to great pain because",
        body: "in order that the body of these people should be asperated, no one provides anything to follow\nsoftness to us some discomfort\nperceived and no one will criticize them from the accusers who\nwant pains and pains and discomforts"
      },
      {
        userId: 1,
        it: 7,
        title: "but the great easy",
        body: "may it please some with pain that the things of life are great, for who is great, who is whom, whom no one often repels, because they are to follow them, but those things which"
      },
      {
        userId: 1,
        it: 8,
        title: "pain is pain itself",
        body: "I will open to the most worthy the pain that accepts him\nsome of the easy-minded ones who are able to accept\nthe great elders\nself as comfortable pain of the pleasures of manner or life"
      }
    ];
    
  return (
    <div>
        <div className="row1">
            {
                usersList.map((item)=>(
                    <div className="col1" key={item.it}>
                        <p>User Id: {item.it}</p>
                        <h5 className='title'>Title: {item.title}</h5>
                        <p className='body'>Body: {item.body}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Users;