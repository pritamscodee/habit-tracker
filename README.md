## 🎨 Landing Section Code

```html
<div>

    <section class="hero">
        <h2>
            Build your habits <br /> like a sketch
        </h2>

        <p>
            A simple and fun habit tracker with a hand-drawn feel. No complexity,
            just progress.
        </p>

        <a href="/home" class="btn">Get Started</a>
    </section>

    <section class="features">

        <div class="card rotate-left">
            Simple UI
        </div>

        <div class="card rotate-right">
            Fast Tracking
        </div>

        <div class="card rotate-more-left">
            Sketch Style
        </div>

    </section>

</div>
```

---

## 🎨 CSS

```css
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 100px 20px;
}

.hero h2 {
  font-size: 48px;
  font-weight: 800;
  transform: rotate(-1deg);
}

.btn {
  background: black;
  color: white;
  padding: 12px 24px;
  box-shadow: 8px 8px 0px #5568d3;
}

.card {
  border: 2px dashed black;
  padding: 20px;
  box-shadow: 4px 4px 0px black;
}
```
