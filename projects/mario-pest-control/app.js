window.addEventListener("load", e => {
  const totalsTracker = {
    goombas: {
      quantity: 0,
      value: 5
    },
    bobombs: {
      quantity: 0,
      value: 7
    },
    cheepcheeps: {
      quantity: 0,
      value: 11
    },
    calc: function() {
      let gooTotal = this.goombas.quantity * this.goombas.value;
      let bobTotal = this.bobombs.quantity * this.bobombs.value;
      let cheTotal = this.cheepcheeps.quantity * this.cheepcheeps.value;
      return gooTotal + bobTotal + cheTotal;
    }
  };
  const baddieTotal = document.getElementById("baddie-total");
  const inputs = Array.from(document.querySelectorAll("input"));
  const eventsToHandle = ["click", "change"];
  const handleUpdates = e => {
    const val = parseInt(e.target.value);
    totalsTracker[e.target.id].quantity = val;
    if (typeof val === "number" && !isNaN(val)) {
      baddieTotal.innerText = totalsTracker.calc();
    }
  };
  inputs.forEach(input => {
    eventsToHandle.forEach(eventType => {
      input.addEventListener(eventType, handleUpdates);
    });
  });
});
