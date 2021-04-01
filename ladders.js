function Ladder() {
  if (!new.target) {
    return new Ladder();
  }
  this.value = 0;
}

function LadderPrototype () {
  this.up = function up() {
    this.value++;
    return this;
  }
  this.down = function down() {
    this.value--
    return this;
  }
  this.showStep = function showStep() {
    return this.value;
  }
}

Ladder.prototype = new LadderPrototype();