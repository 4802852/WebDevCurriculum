class Desktop {
  /* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor() {
    new Icon();
    new Icon();
    new Folder();
  }
}

class Icon {
  /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor() {
    let desktop = document.querySelector(".desktop");
    let icon = document.createElement("div");
    icon.className += "icon";
    let { x, y } = getLocation();
    icon.style.top = y + "px";
    icon.style.left = x + "px";

    desktop.appendChild(icon);

    icon.onmousedown = function (event) {
      let shiftX = event.clientX - icon.getBoundingClientRect().left;
      let shiftY = event.clientY - icon.getBoundingClientRect().top;
      function moveAt(pageX, pageY) {
        icon.style.left = pageX - shiftX + "px";
        icon.style.top = pageY - shiftY + "px";
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      desktop.addEventListener("mousemove", onMouseMove);

      icon.onmouseup = function () {
        desktop.removeEventListener("mousemove", onMouseMove);
        icon.onmouseup = null;
      };
    };
  }
}

class Folder {
  /* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor() {
    let desktop = document.querySelector(".desktop");
    let folder = document.createElement("div");
    folder.className += "folder";
    let { x, y } = getLocation();
    folder.style.top = y + "px";
    folder.style.left = x + "px";

    desktop.appendChild(folder);

    folder.onmousedown = function (event) {
      let shiftX = event.clientX - folder.getBoundingClientRect().left;
      let shiftY = event.clientY - folder.getBoundingClientRect().top;
      function moveAt(pageX, pageY) {
        folder.style.left = pageX - shiftX + "px";
        folder.style.top = pageY - shiftY + "px";
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      desktop.addEventListener("mousemove", onMouseMove);

      folder.onmouseup = function () {
        desktop.removeEventListener("mousemove", onMouseMove);
        folder.onmouseup = null;
      };
    };

    folder.addEventListener("dblclick", function (event) {
      new Window(event.pageX, event.pageY);
    });
  }
}

class Window {
  /* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor(xLocation, yLocation) {
    let desktop = document.querySelector(".desktop");
    let folderWindow = document.createElement("div");
    folderWindow.className += "window";
    folderWindow.style.top = yLocation + "px";
    folderWindow.style.left = xLocation + "px";

    desktop.appendChild(folderWindow);

    folderWindow.onmousedown = function (event) {
      let shiftX = event.clientX - folderWindow.getBoundingClientRect().left;
      let shiftY = event.clientY - folderWindow.getBoundingClientRect().top;
      function moveAt(pageX, pageY) {
        folderWindow.style.left = pageX - shiftX + "px";
        folderWindow.style.top = pageY - shiftY + "px";
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      desktop.addEventListener("mousemove", onMouseMove);

      folderWindow.onmouseup = function () {
        desktop.removeEventListener("mousemove", onMouseMove);
        folderWindow.onmouseup = null;
      };
    };
  }
}

function getLocation() {
  let desktop = document.querySelector(".desktop");
  let x = 40 + (desktop.offsetWidth - 80) * Math.random();
  let y = 40 + (desktop.offsetHeight - 80) * Math.random();
  return { x, y };
}
