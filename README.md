# CALCULATOR

# Context of the proyect.

A calculator is an electronic device used to perform various arithmetic calculations.

It is one of the small working tools that every student or professional uses, which helps them to calculate various arithmetic and mathematical operations, whether basic or complex.

The calculators that perform basic calculations usually have functions of division, addition, subtraction and multiplication; while the more complex ones usually do more developed calculations such as calculating squares, roots, trigonometric functions and statistics.

# Technical requirements.

The project:

MUST have day mode and night mode
MUST perform addition
MUST perform subtraction
MUST perform multiplication
MUST perform division
MUST have functional equals button
MUST display the result of each operation
MUST display numbers from 0 to 9 and these must be functional
MUST be able to have a button to clear and reset the calculator to 0
MUST have a button to erase the operation being performed or the last number entered
MUST be 100% responsive on mobile and desktop (on desktop it must occupy the entire screen)

# Technical development.

To develop this project I was guided by the following video:

https://youtu.be/7YDagj3cVAk

![image](https://user-images.githubusercontent.com/114700033/200335335-81375f44-17e9-4ebd-a835-cc0e91b0dd83.png)

![image](https://user-images.githubusercontent.com/114700033/200335491-7dc9d60d-29d7-4255-97a0-9aa15931b1ff.png)


This is the final result of the calculator with computer view

# Documentation by sections

HTML 

![image](https://user-images.githubusercontent.com/114700033/200335832-29d4da2e-1bb0-4b5c-90ed-5f7970ff490a.png)

This is the general part of the project or so to speak its skeleton, in this section and as throughout the project I followed each step in the way it was indicated, buttons and div difernets were used so that the sections were easier to manipulate when giving styles or functionality, at this point it is important to mention that I had a problem that I will explain below:

![image](https://user-images.githubusercontent.com/114700033/200336440-aa18528f-0811-4cd3-b862-eecc13e1465d.png)

I had to add this because in the mobile version, the translator took some parts of the code and translated them and they broke the code in such a way that it was impossible to use it, which I solved by adding a no translate.

![image](https://user-images.githubusercontent.com/114700033/200336988-a56dcdc6-4d9c-4a6d-bb83-b0b21b784806.png)

![image](https://user-images.githubusercontent.com/114700033/200337042-bc11ba4d-9f5c-45dc-b1c2-5ef6680f23b6.png)

In this section I learned how to somehow link the html with the documents or scripts I was making.

CSS

In this case I gave the general styles to the calculator making use mainly of grid, to give the size to the columns and rows, besides this it is also important to emphasize that I gave styles to the dark mode in this section in the following way:

![image](https://user-images.githubusercontent.com/114700033/200338319-3ac05bc5-0d14-4ec4-ae6c-a02bfbed60a7.png)

In this section I learned how to select specific elements and give them different styles, on the other hand I learned that you can give two different classes to the same element by simply giving a space between them.

![image](https://user-images.githubusercontent.com/114700033/200339253-be2520bf-6bfc-4bdd-89ea-fda83793e487.png)

JS

In this case I handled the javascript in several parts 

![image](https://user-images.githubusercontent.com/114700033/200345726-214ef077-74cd-479b-a9b6-56a5fa3d22ee.png)

As shown in the video I mentioned previously

Calculadora

![image](https://user-images.githubusercontent.com/114700033/200346200-a8a3e7cd-fcd4-4e26-b024-eda6f2101760.png)

In this part what was done was to somehow capture or define the operations that were going to be used in a general way inside the calculator, this by means of a class that we named Calculator.

As in the requirements it was stated that the operations that the project had to develop were four these are the ones that were expressed here by means of addition, subtraction, multiplication and division, likewise with num1 and num2 that in a future would represent the values that the user enters, in this case what I understood is that the return is also used to return the value of the operation.

Display.

![image](https://user-images.githubusercontent.com/114700033/200347246-7507870f-5428-4dd5-ae9a-7de9a2e12c38.png)

![image](https://user-images.githubusercontent.com/114700033/200347323-dc05db87-eb82-4f7f-9879-70c9dd46891f.png)


Index.js

![image](https://user-images.githubusercontent.com/114700033/200347446-c890a91e-59be-45b0-8c6e-f06a5d298d7a.png)



