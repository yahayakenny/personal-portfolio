function showSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
  }

  var toggleModal = () => {
      document.querySelector('.modal-content').classList.toggle('modal-hidden');
  }

  document.querySelector('.modal-parent').addEventListener('click', toggleModal);

  decodeURIComponent.querySelector('.submit').addEventListener('click', toggleModal);

  document.querySelector('.modal-close span').addEventListener('click', toggleModal);