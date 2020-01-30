import { User } from '../../api/user.js';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if (User.find().count() === 0) {
    data = [
      {
        first_name: 'Alex',
        last_name: 'Gram',
        active: true
      },
      {
        first_name: 'John',
        last_name: 'Watson',
        active: true
      },
      {
        first_name: 'Sherlock',
        last_name: 'Holmes',
        active: false
      },
    ];
    data.forEach(user => User.insert(user));
}
});
