# Better Confirmation
Custom confirmation, running away from automatic browser confirmation. And quick confirm html attribute.

The repo is purely something I made due to the frustration of "confirm" function in JavaScript absolutely destroying my life.
From this repo you can get a better non-blocking confirm method. Personally I've used a modal for the confirmation because I wished to have a pop up, and change the confirmation messages which normally you are unable to do. 

## Every explanation is in the index.html you may open it. However the main feature of this repo is the inline confirmation used in many projects. An anchor href confirmation for your developers who continuously forget to add confirmation for data deletion simply because it takes too much effort to make a whole JS section.

(The Td's are not necessary)

### 1st. Simple default confirmation that goes to href after accepting and does nothing after denying.
```html
<td><a confirmation="Are you sure you wish to delete this greeting?|Yes|No" href="#delete_1" class="ms-3">Delete</a></td>
```

### 2nd. Confirmation with custom inline scripts via attributes.
```html
<td><a confirmation="Are you sure you wish to delete this greeting?|Assuredly|Not really" execute-confirm="alert('confirmed')" execute-cancel="cancelExample()" href="#" class="ms-3">Delete</a></td>
```
