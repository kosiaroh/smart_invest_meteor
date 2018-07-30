import {Population} from './population.js'; 

Meteor.methods({
    'population.list'() {
        return Population.find().fetch();
    }
});
