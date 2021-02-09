import View from './View.js';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uplaoded';

  _formWindow = document.querySelector('.add-recipe-window');
  _formOverlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _btnUpload = document.querySelector('.upload__btn');

  constructor() {
    super();
    this._addHandlerShowFormWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._formOverlay.classList.toggle('hidden');
    this._formWindow.classList.toggle('hidden');
  }

  _addHandlerShowFormWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._formOverlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();

      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
