class Notepad {
  constructor(name) {
    this.name = name;
    this.text = "";
    Notepad.createListNode(name);
    Notepad.createTabNode(name);
  }

  static createListNode(name) {
    const li = document.createElement("li");
    li.className = "noteList";
    li.textContent = name;
    Control.notes.appendChild(li);
  }

  static createTabNode(name) {
    const li = document.createElement("li");
    li.className = "tabList";
    li.textContent = name;
    Control.tabs.appendChild(li);
  }
}

class Control {
  static menus = document.getElementById("fileMenu");
  static notes = document.getElementById("fileList");
  static tabs = document.getElementById("tabList");
  static textBox = document.getElementById("textBox");
  static newBtn = document.getElementById("newBtn");
  static loadBtn = document.getElementById("loadBtn");
  static saveBtn = document.getElementById("saveBtn");
  static saveAsBtn = document.getElementById("saveAsBtn");

  static activeTab;
  static priorActiveTab;

  static initNote() {
    for (let i = 0; i < localStorage.length; i++) {
      Notepad.createListNode(localStorage.key(i));
    }
  }

  static selectTab(e) {
    if (Control.activeTab) {
    }
  }

  static createNewFile() {
    let name = prompt("파일명을 입력해주세요");

    let nl = this.notes.getElementsByTagName("li");
    for (let i = 0; i < nl.length; i++) {
      if (nl[i].innerText === name) {
        alert("동일한 이름을 가진 파일이 있습니다");
        return;
      }
    }

    let notepad = new Notepad(name);
    localStorage.setItem(name, JSON.stringify(notepad));
  }

  static saveText() {
    let file = JSON.parse(localStorage.getItem(this.activeTab));
    file.text = Control.textBox.value;
    file.tmpText = null;
    localStorage.setItem(file.name, JSON.stringify(file));
  }

  static tmpText() {
    let file = JSON.parse(localStorage.getItem(this.activeTab));
    file.tmpText = Control.textBox.value;
    localStorage.setItem(file.name, JSON.stringify(file));
  }

  static activateTab(name) {
    let tl = this.tabs.getElementsByTagName("li");
    for (let i = 0; i < tl.length; i++) {
      if (tl[i].innerText === name) {
        tl[i].className += "activeTab";
      }
    }
  }
}

function menuClickHandler(e) {
  switch (e.target.id) {
    case "newBtn":
      Control.createNewFile();
      break;
  }
}

Control.initNote();

Control.menus.addEventListener("click", menuClickHandler);
