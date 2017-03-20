var numberOfParticles = 100;

function makeItBounce(element) {
var floor = 300;
var bounceHeight = floor;
var bounceDuration = 1000;
var decayHeight = 0.25;
var decayDuration = 0.5;
var startDelay = 1 + Math.floor((Math.random() * 500));
var targetX = 201 + Math.floor((Math.random() * 1000));

element.velocity({
  translateY: [floor, 0]
}, {
  duration: bounceDuration,
  easing: "easeInQuad",
  delay: startDelay
});
bounceHeight *= decayHeight;
bounceDuration *= decayDuration;
element.velocity({
    translateY: floor - bounceHeight
  }, {
    duration: bounceDuration,
    easing: "easeOutQuad"
  })
  .velocity("reverse", {
    easing: "easeInQuad"
  });
bounceHeight *= decayHeight;
bounceDuration *= decayDuration;
element.velocity({
    translateY: floor - bounceHeight
  }, {
    duration: bounceDuration,
    easing: "easeOutQuad"
  })
  .velocity("reverse", {
    easing: "easeInQuad"
  });
bounceHeight *= decayHeight;
bounceDuration *= decayDuration;
element.velocity({
    translateY: floor - bounceHeight
  }, {
    duration: bounceDuration,
    easing: "easeOutQuad"
  })
  .velocity("reverse", {
    easing: "easeInQuad"
  });

element.velocity({
  translateX: targetX
}, {
  duration: 5000,
  queue: false,
  delay: startDelay,
  easing: "easeOutQuad"
});

element.velocity({
  opacity: 0
}, {
  duration: 5000,
  queue: false,
  delay: startDelay,
  easing: "easeInCirc",
  complete: function() {
    toRemove.push(element);
  }
});

};

function createSparks(sparkyElement) {
  theBody = $('body');
  var divList = [];
  var toRemove = [];
  for (i = 0; i < numberOfParticles; i++) {
    divList.push(theBody.append("<div class='anim'>"));
  }
  var anim = $('.anim');
  anim.each(function(index) {
    makeItBounce($(this));
  });
  setInterval(function() {
    console.log("Now it's " + $(".anim").length);
    if (toRemove.length === numberOfParticles) {
      $('.anim').remove();
    }
  }, 1000);
}