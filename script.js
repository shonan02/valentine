document.addEventListener("DOMContentLoaded", function() {
    const yes_bttn = document.getElementById("yes_bttn");
    const no_bttn = document.getElementById("no_bttn");
    const question = document.getElementById("question");
    const yes_box = document.getElementById("yes");
    const buttons = document.getElementById("buttons");
  
    yes_bttn.addEventListener("click", function() {
      console.log("yes");
      question.style.display = "none";
      yes_box.style.display = "flex";
      buttons.style.display = "none";
    });
  
    no_bttn.addEventListener("click", function() {
      
      question.innerHTML = "pookie thats the wrong answer.....";
      yes_bttn.style.height = "60px";
      yes_bttn.style.width = "100px";
      yes_bttn.style.fontSize = "30px";
    });
  
    const move = (element, prop, pixels) => {
      return anime({
        targets: element,
        [prop]: `${pixels}px`,
        easing: "easeOutCirc"
      });
    };

      no_bttn.addEventListener("click", function () {
          const top = getRandomNumber(window.innerHeight - this.offsetHeight);
          const left = getRandomNumber(window.innerWidth - this.offsetWidth);
      
          move(this, "left", left).play();
          move(this, "top", top).play();
      });
  
    const getRandomNumber = (max) => {
      return Math.floor(Math.random() * (max + 1));
    };
  });
  