import { animate, stop } from 'liquid-fire';

export default function() {
  stop(this.oldElement);
  return animate(this.oldElement, {
    rotateY: '90deg'
  }).then(() => {
    this.oldElement.css('display', 'none');
    return animate(this.newElement, {
      rotateY: ['0deg', '-90deg']
    });
  });
}
