Following along with the [Discover Meteor](http://www.discovermeteor.com) book.

## Cheatsheet

### Workflow Tips

* Work on your templates with static, dummy data first before wiring them up to your data source
* Then create your collection

### Structure

`server/`: code that'll run only on the server  

`client/`: code that'll run only on the client  

`lib/`: loaded before everything else

`main.*` files are loaded after everything else

`public/`: for static assets

### Handlebars

* Partials: tells Meteor to replace the partial with the template names (`{{> templateName}}`
)

* Expressions: calls a property of the current object or return value of template helper (ex. `{{title}}`)

* Block helpers: flow control such as `{{#each}}..{{/each}}` or `{{#if}}..{{/if}}`.

### Templates

* Use `Template.myTemplate.helpers()` to define your template's data
* Meteor will find your files in the client/ directory no matter how you structure them and will minify all JS and CSS
  assets for you

### Collections
* You'll probably want to share collections on the server and the client so put them in any folder besides the `client/`
  and `server/` directories  
* On the server a collection object acts as an API to Mongo
* On the client a collection is a local subset of the database of the collection that's been defined by the user
* Use `Meteor.publish` and `Meteor.subscribe` to limit the client's collection of the data

### Meteorite Commands
`mrt mongo`: Mongo database shell
`mrt reset`: Reset the database

### Other Notes
* `var` limits the scope of an object in Meteor, which sometimes won't be useful if you want to share code between
  client and server
