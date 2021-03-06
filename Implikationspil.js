strokewidth = LN.getStrokeWidth();
head =14 * strokewidth;
open = 0.6;
x1 = LN.getX1();
y1 = LN.getY1();
x2 = LN.getX2();
y2 = LN.getY2();
angle = Math.atan2(y1 - y2, x1 - x2);
x21 = x2 + head * Math.cos(angle + open);
y21 = y2 + head * Math.sin(angle + open);
x22 = x2 + head * Math.cos(angle - open);
y22 = y2 + head * Math.sin(angle - open);
x2m = (x21 + x22) / 2;
y2m = (y21 + y22) / 2;
x2u = x2m + 3 * strokewidth * Math.cos(angle + 1.5708) - 3 *  strokewidth * Math.cos(angle);
y2u = y2m + 3 * strokewidth * Math.sin(angle + 1.5708) - 3 * strokewidth * Math.sin(angle);
x2l = x2m + 3 * strokewidth * Math.cos(angle - 1.5708) - 3 * strokewidth * Math.cos(angle);
y2l = y2m + 3 * strokewidth * Math.sin(angle - 1.5708) - 3 * strokewidth * Math.sin(angle);
x1u = x1 + 3 * strokewidth * Math.cos(angle + 1.5708);
y1u = y1 + 3 * strokewidth * Math.sin(angle + 1.5708);
x1l = x1 + 3 * strokewidth * Math.cos(angle - 1.5708);
y1l = y1 + 3 * strokewidth * Math.sin(angle - 1.5708);
xmin = Math.min(Math.min(x1u, x1l), Math.min(x2, Math.min(x21, x22)));
ymin = Math.min(Math.min(y1u, y1l), Math.min(y2, Math.min(y21, y22)));
xmax = Math.max(Math.max(x1u, x1l), Math.max(x2, Math.max(x21, x22)));
ymax = Math.max(Math.max(y1u, y1l), Math.max(y2, Math.max(y21, y22)));
LN.setClip(xmin, ymin, xmax, ymax);
LN.drawLine(x1u, y1u, x2u, y2u); 
LN.drawLine(x1l, y1l, x2l, y2l);
LN.drawLine(x2, y2, x22, y22);
LN.drawLine(x2, y2, x21, y21);
