// scroll drawing : https://css-tricks.com/scroll-drawing/

let root = document.documentElement;

var path = document.querySelector("#path1");
console.log(path);

var pathLength = path.getTotalLength();

console.log(pathLength);

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
