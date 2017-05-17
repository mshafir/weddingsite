import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  number: DS.attr('string'),
  coming: DS.attr('string'),
  staying: DS.attr('string'),
  comingFrom: DS.attr('string'),
  foodRequirements: DS.attr('string'),
});
