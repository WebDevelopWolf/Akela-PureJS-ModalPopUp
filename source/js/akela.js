var modal = function () {
  
  // Modal Close Listeners
  this.closeModalListen = function(button) {
    var modalFooter = button.parentElement;
    var modalContent = modalFooter.parentElement;
    var modalElement = modalContent.parentElement;
    var backdrop = document.getElementById("modal-backdrop");
    this.closeModal(modalElement, backdrop);
  }
  
  // Open Modal
  this.openModal = function(button) {
    var button = button;
    var modal = button.getAttribute("data-modal");
    var modalElement = document.getElementById(modal);
    var backdrop = document.createElement('div');
    backdrop.id="modal-backdrop";
    backdrop.classList.add("modal-backdrop");
    document.body.appendChild(backdrop);
    var backdrop = document.getElementById("modal-backdrop");
    backdrop.className += " modal-open";
    modalElement.className += " modal-open";
  }
  
  // Close Modal
  this.closeModal = function(modalElement, backdrop) {
    modalElement.className = modalElement.className.replace(/\bmodal-open\b/, '');
    backdrop.className = backdrop.className.replace(/\bmodal-open\b/, '');
  }
  
  // Initialise Function
  this.init = function () {
    // Create Events for creating the modals
    if (document.addEventListener) {
        document.addEventListener("click", this.handleClick.bind(this), false);
    }
    else if (document.attachEvent) {
        document.attachEvent("onclick", this.handleClick.bind(this));
    }
  }
  
  // Handle Button Click
  this.handleClick = function(event) {
    var thisModal = this;
      event = event || window.event;
      event.target = event.target || event.srcElement;
      var element = event.target;
      while (element) {
          if (element.nodeName === "BUTTON" && /akela/.test(element.className)) {
              thisModal.openModal(element);
              break;
          } else if (element.nodeName === "BUTTON" && /close/.test(element.className)) {
              thisModal.closeModalListen(element);
              break;
          } else if (element.nodeName === "DIV" && /close/.test(element.className)) {
              thisModal.closeModalListen(element);
              break;
          }
          element = element.parentNode;
      }
  }
}

// Initalise Modal Engine
var akelaModel = new modal();
akelaModel.init();