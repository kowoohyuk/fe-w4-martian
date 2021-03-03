import { Circle } from './js/jsonCircle';

const circleTarget = document.getElementById('circleTarget');
const circle = new Circle(circleTarget, 8);
circle.setLineCount(16);
circle.setTexts(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']);
circle.setBackgroundColor('#272121');
circle.setLineColor('#c3c3c3');
circle.setArrow(true);
circle.render();
