# React-show-childrens
Base for: accordions, hide/show-elements, multi-view components, dynamics lists

## Features
* Show all children (by default)

``` 
<Show all={true}>
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
</Show>
```
> 1  
> 2  
> 3  
> 4  
> 5  

---

* Hide all children
``` 
<Show hide={true}>...</Show>
```

> *Nothing*

---

* Show from #element
``` 
<Show min={1}>...</Show>
```

> 2  
> 3  
> 4  
> 5  

---

* Show to #element
``` 
<Show max={3}>...</Show>
```

> 1  
> 2  
> 3  
> 4  

---

* Show in range from `{min}` to `{max}`
``` 
<Show min={1} max={3}>...</Show>
```

> 2  
> 3  
> 4  

---

* Show count of children (worked with `MIN` and `MAX`)
``` 
<Show count={2}>...</Show>
```

> 1  
> 2  

---
