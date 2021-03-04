# _{Pizza Parlor}_

#### _Ciao! Welcome to my online pizza parlor template. I used object orientation to build a makeshift pizza ordering application that adjusts the total cost according to how many toppings and extras the user has selected._

#### By _**Karlson Drendel**_

## Technologies Used
* _HTML_
* _CSS_
* _Javascript_
* _JQuery_
* _Bootstrap_


## Description

_The function of this application was to practice using my object orientation knowledge. I used constructors and prototypes to build a simplistic site that allows the user to build their own pizza and generates a cost for them._

## Setup/Installation Requirements

* _Open terminal_
* _Create a desired directory to store repo clone using $ mkdir_
* _Navigate to local directory in terminal and enter $ git clone https://github.com/kdrendel99/Pizza-Parlor.git_
* _Use the '$ touch index.html' function to select, followed by '$ code .'_

## Known Bugs

_The user is required to have to enter the amount of selections they made instead of the application knowing and storing that information. I struggled to find a way to display the value of the selected check boxes to the user while also using a counter to determine how many toppings the user had added on at $0.25 a piece. I intend on fixing this in the near future._

## Specs


Describe: toppingsPrice();
Test: "It increases the current price of the pizza by $.25 for each topping added."
Expect(toppingsPrice(1)).toEqual(10.25);

Describe: extrasPrice();
Test: "It increases the current price of the pizza by $1 for each topping added."
Expect(extrasPrice(1)).toEqual(11.00);

## License
_MIT License_
_Copyright (c) 2021 Karlson Drendel_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



## Contact Information
_Karlson Drendel <kdrendel99@gmail.com>_