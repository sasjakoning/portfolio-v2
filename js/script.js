// scroll drawing : https://css-tricks.com/scroll-drawing/

let root = document.documentElement;

var path = document.querySelector("#path1");

if(path){
  var pathLength = path.getTotalLength();
  
  // path.style.strokeDasharray = pathLength + "" + pathLength;
  
  root.style.setProperty("--stroke-dasharray", pathLength + " " + pathLength);
  
  // path.style.strokeDashoffset = pathLength;
  
  root.style.setProperty("--stroke-dashoffset", pathLength - 200);
  
  setTimeout(() => {
    window.addEventListener("scroll", function (e) {
      var scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
  
      var drawLength = pathLength * scrollPercentage;
  
      root.style.setProperty(
        "--stroke-dashoffset",
        pathLength - drawLength - 200
      );
  
      // console.log(pathLength - drawLength)
  
      if (scrollPercentage >= 0.99) {
        // path.style.strokeDasharray = "none";
        root.style.setProperty("--stroke-dasharray", "none");
      } else {
        // path.style.strokeDasharray = pathLength + "" + pathLength;
        root.style.setProperty(
          "--stroke-dasharray",
          pathLength + " " + pathLength
        );
      }
    });
  }, 2500);
}




// Dark/Light Mode

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const toggleIcon = document.querySelector('.theme-switch');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleIcon.classList.add('dark-icon');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleIcon.classList.remove('dark-icon');
  }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    console.log(currentTheme)
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleIcon.classList.add('dark-icon');
    }
}

// credit: https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8


// interface - motion Rive animation

window.addEventListener("resize", () => {
  dogyRive.resizeDrawingSurfaceToCanvas();
});

const dogyCanvas = document.getElementById("dogyCanvas");

if(dogyCanvas){

  const dogyRive = new rive.Rive({
    src: "../images/visual-interface-design/interface-motion/dogy.riv",
    canvas: dogyCanvas,
    autoplay: true,
    stateMachines: "dogy-states",
    artboard: "dogy",
    fit: rive.Fit.cover,
    onLoad: (_) => {
      dogyRive.resizeDrawingSurfaceToCanvas();
  
      const inputs = dogyRive.stateMachineInputs("dogy-states");
      const triggerPlay = inputs.find((i) => i.name === "play");

    },
  });

  const btnPlayCanvas = document.getElementById("btnPlayCanvas");
  const BtnCatchCanvas = document.getElementById("btnCatchCanvas");
  const BtnWalkCanvas = document.getElementById("btnWalkCanvas");

  const btnPlayRive = new rive.Rive({
    src: "../images/visual-interface-design/interface-motion/dogy.riv",
    canvas: btnPlayCanvas,
    autoplay: true,
    stateMachines: "icon-play-states",
    artboard: "icon-play",
    fit: rive.Fit.cover,
    onLoad: (_) => {
      btnPlayRive.resizeDrawingSurfaceToCanvas();
    },
  });
  
  const btnCatchRive = new rive.Rive({
    src: "../images/visual-interface-design/interface-motion/dogy.riv",
    canvas: BtnCatchCanvas,
    autoplay: true,
    stateMachines: "icon-catch-states",
    artboard: "icon-catch",
    fit: rive.Fit.cover,
    onLoad: (_) => {
      btnCatchRive.resizeDrawingSurfaceToCanvas();
    },
  });
  
  const btnWalkRive = new rive.Rive({
    src: "../images/visual-interface-design/interface-motion/dogy.riv",
    canvas: BtnWalkCanvas,
    autoplay: true,
    stateMachines: "icon-walk-states",
    artboard: "icon-walk",
    fit: rive.Fit.cover,
    onLoad: (_) => {
      btnWalkRive.resizeDrawingSurfaceToCanvas();
    },
  });
  
}




