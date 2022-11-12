class Notepad {
  constructor(name) {
    this.name = name;
    this.text = "";
    this.tmpText = "";
    Notepad.createListNode(name);
    Notepad.createTabNode(name);
  }

  static createListNode(name) {
    const container = document.createElement("div");
    container.className = "note";
    container.id = name;
    const textDiv = document.createElement("div");
    textDiv.textContent = name;
    textDiv.id = name;
    const delFileBtn = document.createElement("button");
    delFileBtn.textContent = "x";
    delFileBtn.className = "delFileBtn";
    delFileBtn.id = name;
    container.appendChild(textDiv);
    container.appendChild(delFileBtn);
    Control.notes.appendChild(container);
  }

  static createTabNode(name) {
    const container = document.createElement("div");
    container.className = "tab";
    container.id = name;
    const textDiv = document.createElement("div");
    textDiv.textContent = name;
    textDiv.id = name;
    const delTabBtn = document.createElement("button");
    delTabBtn.textContent = "x";
    delTabBtn.className = "delTabBtn";
    delTabBtn.id = name;
    container.appendChild(textDiv);
    container.appendChild(delTabBtn);
    Control.tabs.appendChild(container);
  }
}

class Control {
  static menus = document.getElementById("fileMenu");
  static notes = document.getElementById("fileList");
  static nl = this.notes.getElementsByClassName("note");
  static tabs = document.getElementById("tabList");
  static tl = this.tabs.getElementsByClassName("tab");
  static textBox = document.getElementById("textBox");

  static cancelLoadBtn = document.getElementById("cancelLoadBtn");

  static activeTab;
  static textValue;

  static initNote() {
    for (let i = 0; i < localStorage.length; i++) {
      Notepad.createListNode(localStorage.key(i));
    }
  }

  static reset() {
    localStorage.clear();
    while (this.notes.hasChildNodes()) {
      this.notes.removeChild(this.notes.firstChild);
    }
    while (this.tabs.hasChildNodes()) {
      this.tabs.removeChild(this.tabs.firstChild);
    }
    this.activeTab = null;
  }

  static createNewFile() {
    let name = prompt("파일명을 입력해주세요");

    for (let i = 0; i < this.nl.length; i++) {
      if (this.nl[i].id === name) {
        alert("동일한 이름을 가진 파일이 있습니다");
        return;
      }
    }

    let notepad = new Notepad(name);
    localStorage.setItem(name, JSON.stringify(notepad));
    this.activateTab(name);
  }

  static saveText() {
    let file = JSON.parse(localStorage.getItem(this.activeTab));
    file.text = file.tmpText;
    localStorage.setItem(file.name, JSON.stringify(file));
    for (let i = 0; i < this.tl.length; i++) {
      if (this.tl[i].id === this.activeTab) {
        this.tl[i].classList.remove("changedTab");
      }
    }
  }

  static saveTmpText() {
    let file = JSON.parse(localStorage.getItem(this.activeTab));
    file.tmpText = this.textValue;
    localStorage.setItem(file.name, JSON.stringify(file));
    for (let i = 0; i < this.tl.length; i++) {
      if (this.tl[i].id === this.activeTab) {
        this.tl[i].classList.add("changedTab");
      }
    }
  }

  static activateTab(name) {
    this.textBox.style.display = "block";
    for (let i = 0; i < this.tl.length; i++) {
      if (this.tl[i].id === name) {
        this.tl[i].classList.add("activeTab");
      } else {
        this.tl[i].classList.remove("activeTab");
      }
    }
    this.activeTab = name;
    let file = JSON.parse(localStorage.getItem(this.activeTab));
    this.textBox.value = file.tmpText;
  }

  static openFileLoad() {
    this.notes.style.display = "block";
  }

  static closeFileLoad() {
    this.notes.style.display = "none";
  }

  static loadFile(name) {
    let loaded = false;
    for (let i = 0; i < this.tl.length; i++) {
      if (this.tl[i].id === name) {
        loaded = true;
      }
    }
    if (!loaded) {
      Notepad.createTabNode(name);
    }
    this.activateTab(name);
  }

  static deleteFile(name) {
    let child;
    for (let i = 0; i < this.nl.length; i++) {
      if (this.nl[i].id === name) {
        child = this.nl[i];
      }
    }
    this.notes.removeChild(child);
    this.closeTab(name);
    localStorage.removeItem(name);
  }

  static closeTab(name) {
    let leftChild;
    let child;
    for (let i = 0; i < this.tl.length; i++) {
      if (this.tl[i].id === name) {
        child = this.tl[i];
        leftChild = i - 1;
      }
    }
    this.tabs.removeChild(child);
    if (this.tl.length === 0) {
      this.textBox.style.display = "none";
    } else if (leftChild === -1 && 1 <= this.tl.length) {
      this.activateTab(this.tl[0].id);
    } else {
      this.activateTab(this.tl[leftChild].id);
    }
  }

  static saveAs() {
    let newName = prompt("파일명을 입력해주세요.");

    for (let i = 0; i < this.nl.length; i++) {
      if (this.nl[i].id === newName) {
        alert("동일한 이름을 가진 파일이 있습니다");
        return;
      }
    }

    let file = JSON.parse(localStorage.getItem(this.activeTab));
    let notepad = new Notepad(newName);
    notepad.text = file.tmpText;
    notepad.tmpText = file.tmpText;
    localStorage.setItem(newName, JSON.stringify(notepad));
    this.activateTab(newName);
  }
}

function menuClickHandler(e) {
  switch (e.target.id) {
    case "newBtn":
      Control.createNewFile();
      break;

    case "loadBtn":
      Control.openFileLoad();
      break;

    case "saveBtn":
      Control.saveText();
      break;

    case "saveAsBtn":
      Control.saveAs();
      break;

    case "resetBtn":
      Control.reset();
      break;
  }
}

function textInputHandler(e) {
  Control.textValue = e.target.value;
  Control.saveTmpText();
}

function tabClickHandler(e) {
  if (e.target.className === "delTabBtn") {
    Control.closeTab(e.target.id);
  } else {
    Control.activateTab(e.target.id);
  }
}

function fileClickHandler(e) {
  if (e.target.id === "cancelLoadBtn") {
    Control.closeFileLoad();
  } else if (e.target.className === "delFileBtn") {
    Control.deleteFile(e.target.id);
  } else {
    Control.loadFile(e.target.id);
    Control.closeFileLoad();
  }
}

Control.initNote();

Control.menus.addEventListener("click", menuClickHandler);
Control.textBox.addEventListener("input", textInputHandler);
Control.tabs.addEventListener("click", tabClickHandler);
Control.notes.addEventListener("click", fileClickHandler);
