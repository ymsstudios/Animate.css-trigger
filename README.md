# Animate.css-trigger
This code detects when the given object is in the viewport and then adds the Animate.css class

Use this code to make your site more interactive for your users, animating the content that is currently on the screen.

To use this code just dowload the Anmate.css CSS file and include it in your webpage (I included it in this plugin), 

```html
<head>
  <link rel="stylesheet" href="animate.min.css">
</head>
```
or use the cdn link from Danial Eden, the creator of Animate.css.
```html
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
</head>
```

Then dowload and include the trigger.js file.

```html
<script type="text/javascript" src="trigger.js"></script>
```
Now just add the `animated` class and a `data-animation` with the name of the animation you would like to add to the object you would like to animate as shown.

```html
<div class="animated" data-animation="bounce"></div>
```

##And now enjoy your animation!


