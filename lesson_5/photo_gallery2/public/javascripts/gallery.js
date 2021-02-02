/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded', () => {
  const slideshow = (function() {
    return {
      init() {
        this.slideshow = document.querySelector("#slideshow");
        this.slides = document.querySelector("#slides");
        this.currentSlide = this.slides.firstElementChild;
        this.renderPhotoContent();
        this.bind();
      },

      bind() {
        this.slideshow.onclick = this.handler.bind(this);
      },

      handler(e) {
        e.preventDefault();
        if (e.target.nodeName !== 'A') return;
        if (e.target.className === 'prev') {
          this.prevSlide();
        } else {
          this.nextSlide();
        }
      },

      prevSlide() {
        let prev = this.currentSlide.previousElementSibling;
        if (!prev) {
          prev = this.slides.lastElementChild;
        }

        this.fadeOut(this.currentSlide);
        this.fadeIn(prev);
        this.currentSlide = prev;
        this.renderPhotoContent();
      },

      nextSlide() {
        let next = this.currentSlide.nextElementSibling;
        if (!next) {
          next = this.slides.firstElementChild;
        }

        this.fadeOut(this.currentSlide);
        this.fadeIn(next);
        this.currentSlide = next;
        this.renderPhotoContent();
      },

      fadeOut(slide) {
        slide.classList.remove('show');
        slide.classList.add('hide');
      },

      fadeIn(slide) {
        slide.classList.remove('hide');
        slide.classList.add('show');
      },

      renderPhotoContent() {
        renderPhotoInformation(this.currentSlideId());
        getPhotoComments(this.currentSlideId());
      },

      currentSlideId() {
        return Number(this.currentSlide.getAttribute("data-id"));
      }
    };
  })();

  const templates = {};

  (function cacheTemplates() {
    document.querySelectorAll("[data-type=partial]")
      .forEach(tmpl => {
        Handlebars.registerPartial(tmpl.id, tmpl.innerHTML);
      });

    document.querySelectorAll("script[type='text/x-handlebars']")
      .forEach(tmpl => {
        templates[tmpl.id] = Handlebars.compile(tmpl.innerHTML);
        tmpl.remove();
      });
  })();

  function renderPhotos() {
    let slides = document.querySelector("#slides");
    slides.innerHTML = templates.photos({ photos: photos });
  }

  function renderPhotoInformation(id) {
    let photo = photos.find(photo => photo.id === id);
    let photoHeader = document.querySelector("section > header");
    photoHeader.innerHTML = templates.photo_information(photo);
  }

  function getPhotoComments(id) {
    fetch(`/comments?photo_id=${id}`)
      .then(response => response.json())
      .then(json => {
        let commentList = document.querySelector("#comments > ul");
        commentList.innerHTML = templates.photo_comments({ comments: json });
      });
  }

  function handleAction(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'A') return;
    let button = e.target;
    let photo_id = button.dataset.id;
    let url = button.getAttribute("href");
    let text = button.innerText;

    fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({photo_id}),
    })
      .then(response => response.json())
      .then(({total}) => {
        button.innerText = text.replace(/\d+/, total);
      });

    fetch("/photos")
      .then(response => response.json())
      .then(json => photos = json);
  }

  function submitComment(e) {
    e.preventDefault();
    let form = e.target;
    let method = form.method;
    let url = form.action;
    let data = new FormData(form);
    let photo_id = slideshow.currentSlideId();
    data.set('photo_id', photo_id);

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams(data),
    })
      .then(response => response.json())
      .then(json => {
        let commentList = document.querySelector("#comments > ul");
        commentList.insertAdjacentHTML('beforeend', templates.photo_comment(json));
        form.reset();
      });
  }

  let photos;

  fetch("/photos")
    .then(response => response.json())
    .then(json => {
      photos = json;
      renderPhotos();
      slideshow.init();
    });

  document.querySelector("section > header").onclick = handleAction;
  document.querySelector("form").onsubmit = submitComment;
});