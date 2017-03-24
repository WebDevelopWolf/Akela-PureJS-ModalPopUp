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
  // Close Same Modal Event Handlers
  (function() {
    document.getElementById("modal-close").onclick = function(e) {
      closeModal(modalElement, backdrop);
    }
    document.getElementById("close").onclick = function(e) {
      closeModal(modalElement, backdrop);
    }
    document.getElementById("modal-backdrop").onclick = function(e) {
      closeModal(modalElement, backdrop);
    }
  })();
}

// Close Modal
function closeModal (modalElement, backdrop) {
  modalElement.className = modalElement.className.replace(/\bmodal-open\b/, '');
      backdrop.className = backdrop.className.replace(/\bmodal-open\b/, '');
}