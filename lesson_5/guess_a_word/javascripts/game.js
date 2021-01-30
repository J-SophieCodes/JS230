/* eslint-disable max-lines-per-function */
$(function() {
  let span = Handlebars.compile($('#span').remove().html());
  let replay = Handlebars.compile($('#replay').remove().html());
  let randomWord = (function() {
    const WORDS = ['apple', 'banana', 'orange', 'pear'];
    return function() {
      let idx = Math.floor(Math.random() * WORDS.length);
      return WORDS.splice(idx, 1)[0];
    };
  })();

  function isAlphabet(letter) {
    return letter >= 'a' && letter <= 'z';
  }

  function Game() {
    this.word = randomWord();
    console.log(this.word);

    if (this.word) {
      this.init();
    } else {
      this.displayMessage("Sorry, I've run out of words!");
    }
  }

  Game.prototype = {
    init() {
      this.incorrect = 0;
      this.maxIncorrect = 6;
      this.guesses = [];
      this.clear();
      this.bind();
      this.createSpaces();
      this.displayGuessesRemaining();
    },

    clear() {
      $('#spaces span').remove();
      $('#guesses span').remove();
      $('body').removeClass();
      $('#apples').removeClass();
    },

    bind() {
      $(document).keyup(this.processGuess.bind(this));
    },

    unbind() {
      $(document).off('keyup');
    },

    createSpaces() {
      this.word.split('').forEach(() => {
        $('#spaces').append(span());
      });
      this.$spaces = $('#spaces span');
    },

    processGuess(e) {
      e.preventDefault();
      let letter = e.key;

      if (isAlphabet(letter)) {
        if (this.isNewGuess(letter)) {
          this.addGuess(letter);

          if (this.isCorrectGuess(letter)) {
            this.revealLetters(letter);
          } else {
            this.renderIncorrectGuess();
          }

          this.endRound();
        }
      }
    },

    isNewGuess(letter) {
      return !this.guesses.includes(letter);
    },

    isCorrectGuess(letter) {
      return this.word.includes(letter);
    },

    addGuess(letter) {
      this.guesses.push(letter);
      $('#guesses').append(span({letter}));
    },

    revealLetters(letter) {
      this.word.split('').forEach((char, idx) => {
        if (letter === char) {
          this.$spaces.eq(idx).text(letter);
        }
      });
    },

    renderIncorrectGuess() {
      this.incorrect++;
      $('#apples').addClass(`guess_${this.incorrect}`);
    },

    endRound() {
      if (this.$spaces.text() === this.word) {
        this.win();
      } else if (this.incorrect === this.maxIncorrect) {
        this.lose();
      } else {
        this.displayGuessesRemaining();
      }
    },

    win() {
      this.displayMessage(`You guessed it right!`);
      this.setGameStatus('win');
      this.showReplay();
      this.unbind();
    },

    lose() {
      this.displayMessage(`You're out of guesses. The word is ${this.word}.`);
      this.setGameStatus('lose');
      this.showReplay();
      this.unbind();
    },

    setGameStatus(status) {
      $('body').addClass(status);
    },

    showReplay() {
      $('#message').append(replay());
      $('#replay').click(function(e) {
        e.preventDefault();
        new Game();
      });
    },

    displayMessage(msg) {
      $('#message').text(msg);
    },

    displayGuessesRemaining() {
      this.displayMessage(`${this.maxIncorrect - this.incorrect} guesses remaining.`);
    },
  };

  new Game();
});