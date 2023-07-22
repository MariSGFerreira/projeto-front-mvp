
  let containerA = new ProgressBar.Circle(circleA, {
    color: '#aaa',
    strokeWidth: 5,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      let value = Math.round(circle.value() * 16);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });
  containerA.text.style.fontFamily = '"Raleway", Helvetica, sans-serif,';
  containerA.text.style.fontSize = '2rem';
  
  containerA.animate(1.0);  // Number from 0.0 to 1.0

  let containerB = new ProgressBar.Circle(circleB, {
    color: '#aaa',
    strokeWidth: 5,
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      let value = Math.round(circle.value() * 16);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });
  containerB.text.style.fontFamily = '"Raleway", Helvetica, sans-serif,';
  containerB.text.style.fontSize = '2rem';

  containerA.animate(1.0);
  containerB.animate(1.0);  // Number from 0.0 to 1.0

  let containerC = new ProgressBar.Circle(circleC, {
    color: '#aaa',
    strokeWidth: 5,
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      let value = Math.round(circle.value() * 16);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });
  containerC.text.style.fontFamily = '"Raleway", Helvetica, sans-serif,';
  containerC.text.style.fontSize = '2rem';

  containerA.animate(1.0);
  containerB.animate(1.0);  // Number from 0.0 to 1.0
  containerC.animate(1.0);
  
  let containerD = new ProgressBar.Circle(circleD, {
    color: '#aaa',
    strokeWidth: 5,
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      let value = Math.round(circle.value() * 156);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });

  containerA.animate(1.0);
  containerB.animate(1.0); 
  containerC.animate(1.0);
  containerD.animate(1.0);



  // Parallax
  $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'})
  $('#apply-content').parallax({imageSrc: 'img/pattern.png'})
  $('#apply-content').parallax({imageSrc: 'img/pattern.png'})

