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

### Publications & Subscriptions
* A publication is a way to transfer data from the server collection to the target client-side collection. It controls what exactly is passed through. The protocol that it uses in Meteor is called Distributed Data Protocol (DDP).
* With `Meteor.publish` you can control what you publish to the client. Return a cursor like `Posts.find({'author':'Tom'});` to limit what you send back.
* Use `fields` as the second parameter to find() to exclude certain fields: `Posts.find({}, {fields: { author: false }});`

### Routing
* `router` is a third-party package that you must explicitly install
* Only job is to map URLs to specific templates
* Has a `{{renderPage}}` helper - put it in your layout file
* `Meteor.Router.add` joins a URL path to a template
* This also gives you a handlebars helper of ``{templateNamePath}} that you can use to set links 
* You can also pass an object with attributes `to` and `and` in a route. The `and` passes parameters into the routed template

### Sessions
* Sessions are Meteor's global store of state in the browser (as a singleton object), living only on the client.
* Pass key/value pairs to `Session.set` and naturally there's a `Session.get` too
* Always store user state in the `Session` object to the URL so that users are minimally disrupted on hot code pushes
* Store any state that you want shareable between users in the URL

### User Accounts
* Ridiculously simple with the `accounts-ui` package (there's a Bootstrap version too)
* Then use the `{{loginButtons}}` helper and you can see the alignment with `align=`
* This package creates a new `users` collection in the database that stores user information T
* The package autopublishes _only_ the current users information to the client and only the `_id` and `username`. On the server there's more information including a salted version of the user's password

### Security
* By default Meteor is left insecure so that you can quickly start building, but eventually you have to stop people from saving to the database from the console
* The first thing to do is remove the insecure package: `mrt remove insecure`
* Use a collection's `allow` method to set the rules in which users can allowed to do things to that collection
* Use `Meteor.Router.filters` to do things like require login

### Reactivity
* A computation is a block of code that runs every time one of the data sources it depends on is updated. Meteor will setup most of the ones you'll need automatically, but it's useful to know how to do it yourself
* Wrap `Deps.autorun` in the function that you want to run every time it's data source gets updated

### Meteorite Commands
`mrt mongo`: Mongo database shell  
`mrt reset`: Reset the database

### Other Notes
* `var` limits the scope of an object in Meteor, which sometimes won't be useful if you want to share code between
  client and server
  * `mrt add spin` for a "loading" spinner template partials
