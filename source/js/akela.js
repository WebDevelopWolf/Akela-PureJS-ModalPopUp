// Create Events for creating the modals
if (document.addEventListener) {
    document.addEventListener("click", handleClick, false);
}
else if (document.attachEvent) {
    document.attachEvent("onclick", handleClick);
}

// Run Open or Close depending on click
function handleClick(event) {
    event = event || window.event;
    event.target = event.target || event.srcElement;

    var element = event.target;

    // Climb up the document tree from the target of the event
    while (element) {
        if (element.nodeName === "BUTTON" && /akela/.test(element.className)) {
            openModalListen(element);
            break;
        } else if (element.nodeName === "BUTTON" && /close/.test(element.className)) {
            closeModalListen(element);
            break;
        } else if (element.nodeName === "DIV" && /close/.test(element.className)) {
            closeModalListen(element);
            break;
        }

        element = element.parentNode;
    }
}

// Run Modal Open
function openModalListen(button) {
    openModal(button.id);
}

// Run Modal Close
function closeModalListen(button) {
  var modalSection = button.parentElement;
  var modalContent = modalSection.parentElement;
  var modalElement = modalContent.parentElement;
  var backdrop = document.getElementById("modal-backdrop");
  closeModal(modalElement, backdrop);
}

// Open modal
function openModal(clicked_id) {
  var button = document.getElementById(clicked_id);
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
function closeModal (modalElement, backdrop) {
  modalElement.className = modalElement.className.replace(/\bmodal-open\b/, '');
  backdrop.className = backdrop.className.replace(/\bmodal-open\b/, '');
}