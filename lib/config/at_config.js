import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { AccountsTemplates } from 'meteor/useraccounts:core';

AccountsTemplates.addFields([
{
    _id: 'firstName',
    type: 'text',
    displayName: 'First Name',
    placeholder: 'Your First Name',
    required: true,
},
{
    _id: 'lastNam',
    type: 'text',
    displayName: 'Last Name',
    placeholder: 'Your Last Name',
    required: true,
},
{
    _id: 'address',
    type: 'text',
    displayName: "Address",
    placeholder: "Your postal address",
    required: true,
},
])