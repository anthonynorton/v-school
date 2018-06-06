(function pageSetup(global) {
  
  const candies = Array.from(document.querySelectorAll('.candy')).reduce((candies, candy) => {
    candies[candy.id] = { type: candy.innerText, id: candy.id, timesRequested: 0 };
    return candies;
  }, {});

  const weAlreadyHaveThatResponses = [
    'Oh sure...we already have that!',
    'Yeah—we have it!',
    'Yes, I already said that we have that.',
    'Yeah kid, just get in the van!',
    'What the hell is wrong with you kid?! Yeah, we have that!',
    'Fuck off kid!',
    'Please leave me alone.',
    'Oh my god... what is wrong with you? Were you dropped as a baby?',
    'Go away.'
  ];
  
  const candyUl = document.getElementById('candy-list');
  
  function createLi(candyName) {
    const li = document.createElement('li');
    li.className = 'candy';
    li.innerText = candyName;
    li.id = candyName.replace(' ', '').toLowerCase();
    return li;
  }
  
  function checkIsCandyListed(typeOfCandy) {
    const weHaveIt = candies.some(candy => {
      if (candy.id === typeOfCandy) {
        candy.timesRequested++;
        return true;
      }
      return false;
    });
  }
  
  global.addEventListener('submit', e => {
    e.preventDefault();

    const input = Array.from(e.target.children)
    .filter(node => node.name === 'iWant')[0];
    const requestedCandy = input.value;
    const typeOfCandy = requestedCandy.replace(' ', '').toLowerCase();
    input.value = 'Snickers';
    
    if (!!candies[typeOfCandy]) {
      if (candies[typeOfCandy].timesRequested < weAlreadyHaveThatResponses.length - 1) {
        candies[typeOfCandy].timesRequested++;
      } else {
        candies[typeOfCandy].timesRequested = weAlreadyHaveThatResponses.length - 1;
      }
      alert(weAlreadyHaveThatResponses[candies[typeOfCandy].timesRequested]);
      return;
    } else if (requestedCandy.length < 1) {
      alert('What was that? Could you speak up?');
      return;
    }
    
    const li = createLi(requestedCandy);
    
    candyUl.appendChild(li);
  });
})(window);