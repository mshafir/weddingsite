import Ember from 'ember';
import TextToSVG from 'npm:text-to-svg';

export default Ember.Component.extend({
  text: 'hello',
  svg: '',

  fontSize: 72,
  letterSpacing: 20,

  init() {
    this._super(...arguments);
    this.set('paths', Ember.A([]));
  },

  attributes: Ember.computed(function() {
    return {
      fill: 'none',
      stroke: 'black',
      'stroke-width': 2
    };
  }),

  options: Ember.computed('attributes', 'fontSize', function() {
    return {
      x: 0,
      y: 0,
      fontSize: this.get('fontSize'),
      anchor: 'top',
      attributes: this.get('attributes')
    };
  }),

  redraw: Ember.observer('text', 'options', function() {
    let text = this.get('text');
    this.get('paths').clear();
    TextToSVG.load('/assets/fonts/Moon Flower.ttf', (err, textToSVG) => {
      for (let i = 0;i<text.length;i++) {
        let c = text.charAt(i);
        let pathD = textToSVG.getD(c, this.get('options'));
        this.get('paths').pushObject(pathD);
      }

      Ember.run.scheduleOnce('afterRender', this, this.animate);
    });
  }).on('init'),

  halfD(d) {
    let i = parseInt(d.length/2);
    let str = d.substring(0, i);
    for (let pos=i+1; pos<d.length; pos++) {
      if (d.charAt(pos) === ' ') {
        break;
      }
      str += d.charAt(pos);
    }
    return str;
  },

  animate() {
    for (let i = 1; i< this.get('text.length')+1; i++) {
      Ember.run.later(this, this.animateLetter, i, i*100);
    }
  },

  animateLetter(pos) {
    // new Vivus('svg-id').play();
    var path = document.querySelector(`#${this.elementId} path:nth-child(${pos})`);
    path.style.visibility = 'visible';
    var length = path.getTotalLength();
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition = 'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition =
      'stroke-dashoffset 1s ease-in-out';
    // Go!
    path.style.strokeDashoffset = '0';
  }



});
