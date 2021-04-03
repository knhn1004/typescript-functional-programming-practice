class Emoji {
  constructor(private _icon: string) {}
  private _prev;

  get icon() {
    return this._icon;
  }

  get prev() {
    return this._prev;
  }

  change(newIcon: string) {
    this._prev = this._icon;
    this._icon = newIcon;
  }
}

const sun = new Emoji('🌞️');

sun.change('🌅️');
console.log(sun.prev);
console.log(sun.icon);

// static method

class Emoji2 {
  static addOneTo(val) {
    return 1 + val;
  }
}

console.log(Emoji2.addOneTo(3));
