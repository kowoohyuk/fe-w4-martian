const Circle = function(target = null, lineCount = 0, width = '300', height = '300', backgroundColor = '#ffcc00', fontColor = '#fff', lineWidth = '1', lineColor = '#000', texts = [], arrow = false) {
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
  this.prefix = 'json-circle';
  this.setTarget = (target) => {
    this.target = target;
  }
  this.setLineCount = (lineCount) => {
    this.lineCount = lineCount;
  }
  this.setWidth = (width) => {
    this.width = width;
  }
  this.setHeight = (height) => {
    this.height = height;
  }
  this.setBackgroundColor = (backgroundColor) => {
    this.backgroundColor = backgroundColor;
  }
  this.setFontColor = (fontColor) => {
    this.fontColor = fontColor;
  }
  this.setLineWidth = (lineWidth) => {
    this.lineWidth = lineWidth;
  }
  this.setLineColor = (lineColor) => {
    this.lineColor = lineColor;
  }
  this.setTexts = (texts) => {
    this.texts = texts;
  }
  this.setArrow = (bool) => {
    this.arrow = bool;
  }
  this.init = () => {
    if(this.checkValue()) {
      this.render();
    }
  }
  this.render = () => {
    if(this.checkValue()) {
      this.circleRender();
      this.pieRender();
    }
    if(this.arrow) {
      this.arrowRender();
    }
  }
  this.circleRender = () => {
    if(this.checkValue()) {
      const circle = document.createElement('div');
      circle.classList.add(this.prefix);
      circle.style.width = `${this.width}px`;
      circle.style.height = `${this.height}px`;
      circle.style.backgroundColor = this.backgroundColor;
      this.circle = circle;
      this.target.appendChild(circle);
    }
  }
  this.pieRender = () => {
    if(this.lineCount) {
      const deg = 360 / this.lineCount;
      for(let i = 0; i < this.lineCount; i++) {
        const pie = document.createElement('div');
        pie.classList.add(`${this.prefix}__pie`);
        pie.appendChild(this.lineRender(i, deg));
        this.circle.appendChild(pie);
      }
    }
  }
  this.lineRender = (i, deg) => {
    const line = document.createElement('div');
    line.classList.add(`${this.prefix}__pie__line`);
    line.style.transform = `rotate(${deg * i}deg)`;
    line.style.borderWidth = `${this.lineWidth}px`;
    line.style.borderColor = `${this.lineColor}`;
    line.appendChild(this.textsRender(i, deg, line));
    return line;
  }
  this.textsRender = (i, deg, target) => {
    const {x , y} = target.getBoundingClientRect();
    const text = document.createElement('span');
    text.classList.add(`${this.prefix}__pie__text`);
    text.style.transform = `rotate(${-deg * i - 113}deg)`;
    text.style.color = this.fontColor;
    text.style.marginTop = `${this.height / this.lineCount - this.lineWidth * 2}px`; 
    text.textContent = this.texts[i];
    return text;
  }
  this.arrowRender = () => {
    const arrowWrap = document.createElement('div');
    const arrow = document.createElement('div');
    arrowWrap.classList.add(`${this.prefix}__arrow-wrap`);
    arrow.classList.add(`${this.prefix}__arrow`);
    arrowWrap.appendChild(arrow);
    this.circle.appendChild(arrowWrap);
  }
  this.checkValue = () => {
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
};

export { Circle }