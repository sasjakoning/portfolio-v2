// scroll drawing : https://css-tricks.com/scroll-drawing/

let root = document.documentElement;

var path = document.querySelector("#path1");

if(path){
  var pathLength = path.getTotalLength();
}



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

    console.log(scrollPercentage);

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



