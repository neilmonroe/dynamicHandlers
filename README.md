dynamicHandlers
===============

Wire up events on elements inserted into the DOM after initial load, usually via a template system. A list of event types can be listed in the data attribute of a given name. All event types in this value will be assigned the supplied handler function.

For example, given the snippet:

```html
<div id="myElement">
  <input type="text" data-warn="change blur">
  <select data-update="change">
     <option value="1">Choice 1</option>
     <option value="2">Choice 2</option>
   </select>
</div>

<script>
  function warnHandler () {
    // warn the user about something
  }

  function updateHandler () {
    // update something
  }

  utils.dynamicHandlers('#container', 'warn', warnHandler);
  utils.dynamicHandlers('#container', 'update', updateHandler);
</script>
```

The script block assigns to any element either within "#container" or the element itself, that has a data attribute of "warn", the handler 'warnHandler' for each event type listed in the value of this data attribute. Likewise, this is also done for the 'update' data attribute with another handler.

