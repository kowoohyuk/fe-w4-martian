class Circle {
  constructor(target = null, lineCount = 0, width = '300', height = '300', backgroundColor = '#ffcc00', fontColor = '#fff', lineWidth = '1', lineColor = '#000', texts = [], arrow = false) {
    this.target = target;
    this.lineCount = lineCount;
    this.width = width;
    this.height = height;
    this.backgroundColor = backgroundColor;
    this.fontColor = fontColor;
    this.lineWidth = lineWidth;
    this.lineColor = lineColor;
    this.texts = texts;
    this.arrow = arrow;
    this.circle = null;
  }
  setTarget(target) {
    this.target = target;
  }
  setLineCount(lineCount) {
    this.lineCount = lineCount;
  }
  setWidth(width) {
    this.width = width;
  }
  setHeight(height) {
    this.height = height;
  }
  setBackgroundColor(backgroundColor) {
    this.backgroundColor = backgroundColor;
  }
  setFontColor(fontColor) {
    this.fontColor = fontColor;
  }
  setLineWidth(lineWidth) {
    this.lineWidth = lineWidth;
  }
  setLineColor(lineColor) {
    this.lineColor = lineColor;
  }
  setTexts(texts) {
    this.texts = texts;
  }
  setArrow(bool) {
    this.arrow = bool;
  }
  init() {
    if(this.checkValue()) {
      this.render();
    }
  }
  render() {
    if(this.checkValue()) {
      this.circleRender();
      this.pieRender();
    }
    if(this.arrow) {
      this.arrowRender();
    }
  }
  circleRender() {
    if(this.checkValue()) {
      const circle = document.createElement('div');
      circle.classList.add('json-circle');
      circle.style.width = `${this.width}px`;
      circle.style.height = `${this.height}px`;
      circle.style.backgroundColor = this.backgroundColor;
      this.circle = circle;
      this.target.appendChild(circle);
    }
  }
  pieRender() {
    if(this.lineCount) {
      const deg = 360 / this.lineCount;
      for(let i = 0; i < this.lineCount; i++) {
        const pie = document.createElement('div');
        pie.classList.add('json-circle__pie');
        pie.appendChild(this.lineRender(i, deg));
        this.circle.appendChild(pie);
      }
    }
  }
  lineRender(i, deg) {
    const line = document.createElement('div');
    line.classList.add('json-circle__pie__line');
    line.style.transform = `rotate(${deg * i}deg)`;
    line.style.borderWidth = `${this.lineWidth}px`;
    line.style.borderColor = `${this.lineColor}`;
    line.appendChild(this.textsRender(i, deg, line));
    return line;
  }
  textsRender(i, deg, target) {
    const {x , y} = target.getBoundingClientRect();
    const text = document.createElement('span');
    text.classList.add('json-circle__pie__text');
    text.style.transform = `rotate(${-deg * i - 113}deg)`;
    text.style.color = this.fontColor;
    text.style.marginTop = `${this.height / this.lineCount - this.lineWidth * 2}px`; 
    text.textContent = this.texts[i];
    return text;
  }
  arrowRender() {
    const arrowWrap = document.createElement('div');
    const arrow = document.createElement('div');
    arrowWrap.classList.add('json-circle__arrow-wrap');
    arrow.classList.add('json-circle__arrow');
    arrowWrap.appendChild(arrow);
    this.circle.appendChild(arrowWrap);
  }
  checkValue() {
    let result = true;
    if(!this.target) {
      console.log('타겟 태그 미지정');
      result = false;
    }
    if(this.texts.length < 1) {
      console.log('texts 미지정');
      result = false;
    }
    return result;
  }
}

export { Circle }