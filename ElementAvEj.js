*/Använder en parameter 'edl', edl=0 ger Element av och edl = 1 ger Ej element av/*
width = LN.getWidth();
scale = LN.getScale();
step = width / 150 + scale * width / 25;
halfstep = step / 4;
x1 = LN.getX1();
y1 = LN.getY1();
x2 = LN.getX2();
y2 = LN.getY2();
x1g = (halfstep / 2) + Math.floor((x1 - (halfstep / 2)) / halfstep + 0.5) * halfstep;
y1g = (halfstep / 2) + Math.floor((y1 - (halfstep / 2)) / halfstep + 0.5) * halfstep;
r = Math.sqrt((x2 - x1g) * (x2 - x1g) + (y2 - y1g) * (y2 - y1g));
rg = Math.floor((r - (halfstep / 2)) / halfstep + 0.5) * halfstep;
xmin = x1g - rg;
ymin = y1g - rg;
xmax = x1g + rg;
ymax = y1g + rg;
LN.setClip(xmin - step, ymin - step, xmax + step, ymax + step);
LN.drawArc(x1g, y1g, rg, Math.PI * (-0.5), Math.PI * (-1));
LN.drawLine(x1g, ymin, xmax, ymin);
LN.drawLine(x1g, ymax, xmax, ymax);
x3 = xmax - 7;
LN.drawLine(xmin, y1g, x3, y1g);

x4 = xmax - 8;
x5 = xmin + 2;
y3 = ymax + 7;
y4 = ymin - 12;
edl = LN.getParameter(1);
if (edl == 1) {
LN.drawLine(x5, y3, x4, y4);
}
