BadgeDealerListItem

badges - przyjmuje tablice badge,ktora zawiera adresy img, ale wyswietla tylko piec pierwszych elementow <br>
description - przyjmuje ciag znakow (opis trenera)<br>
avatar - przyjmuje adres img

```js
<BadgeDealerListItem
  badges={[]}
  description={""}
  avatar={"http://placehold.jp/150x150.png"}
/>
```

```js
<BadgeDealerListItem
  badges={["http://placehold.jp/60x60.png", "http://placehold.jp/60x60.png"]}
  description={
    "Lorem ipsum to roboczy tekst używany do celów projektowych, zwykle do prezentacji kroju pisma, kompozycji.roboczy tekst używany do celów projektowych, zwykle do prezentacji kroju pisma, kompozycjiroboczy tekst używany do celów projektowych, zwykle do prezentacji kroju pisma, kompozycji.."
  }
  avatar={"http://placehold.jp/150x150.png"}
/>
```

```js
<BadgeDealerListItem
  badges={[
    "http://placehold.jp/60x60.png",
    "http://placehold.jp/60x60.png",
    "http://placehold.jp/60x60.png",
    "http://placehold.jp/60x60.png",
    "http://placehold.jp/60x60.png",
    "http://placehold.jp/60x60.png"
  ]}
  description={
    "Lorem ipsum to roboczy tekst używany do celów projektowych, zwykle do prezentacji kroju pisma, kompozycji.Lorem ipsum to roboczy tekst używany do celów projektowych, zwykle do prezentacji kroju pisma, kompozycji"
  }
  avatar={"http://placehold.jp/150x150.png"}
/>
```
