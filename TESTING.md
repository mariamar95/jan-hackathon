# Bucket Calculator Testing

[View the live project here.](https://mariamar95.github.io/jan-hackathon/)

[View the project README here.](README.md)

## Contents
* [Automated Testing](#automated-testing)
    * [W3C Validator](#w3c-validator)
    * [Lighthouse](#lighthouse)
    * [WAVE](#wave)
* [Manual Testing](#manual-testing)
    * [User Stories Testing](#user-stories-testing)
    * [Full Testing](#full-testing)
* [Bugs](#bugs)
    * [Known Bugs](#known-bugs)
    * [Full Bugs](#solved-bugs)

## Automated Testing:
### W3C Validator
The W3C Validator was used to validate all HTML files used in the project. The results are shown below:

- index.html - No errors or warnings to show.
- 404.html - No errors or warnings to show.
- about.html - No errors or warnings to show.
- team.html - No errors or warnings to show.
- tips.html:
    - **Description:** Bad value `100%` for attribute `height` and `width` on element `img`: Expected a digit but saw `%` instead.
    - **Cause:** This is caused by some styling on inline styling on the element using the incorrect syntax
- calculate.html:
    - **Description:** Duplicate ID `label_name` and `money_value`.
    - **Cause:** The validation warnigns are cuased by the labels and inputs using ID's. As the DOM creates these values, the ID's are duplicated, this could be fixed by incrementing the ID number.
### Lighthouse
#### Desktop Results:
![Lighthouse Mobile](./assets/imgs/testing/lighthouse-mobile.PNG)

#### Mobile Results:
![Lighthouse Desktop](./assets/imgs/testing/lighthouse-desktop.PNG)
During the testing stage we encountered unknown error in the console which did not impact the final application.

### WAVE
Home Page:

![Wave](./assets/imgs/testing/wave-home.PNG)

Calculator Page:

![Wave](./assets/imgs/testing/wave-calculator.PNG)

Tips Page:

![Wave](./assets/imgs/testing/wave-tips.PNG)

About Page:

![Wave](./assets/imgs/testing/wave-about.PNG)

Team Page:

![Wave](./assets/imgs/testing/wave-team.PNG)

## Manual Testing:
### User Stories Testing


### Full Testing

## Bugs:
### Known Bugs
#### Create Table - Bucket Name 'undefined'
- **Description:** When adding the new user input rows, the bucket name is not retrieved and instead shows 'undefined'.
- **Cause:** Unkown, possibly the elements of the newly created rows do not follow the same format as the original, or it is due to the Materialize CSS component not being initialized.

<details>
<summary>Click for Image: Calculate Page - Bucket Name 'undefined'</summary>

![Bucket Name 'undefined' bug](assets/imgs/testing/bug-blank-inputs.png)

</details>

****

#### Create Chart - Blank Values
- **Description:** When pressing 'Submit' with some inputs not added, the chart and table will display with missing values
- **Cause:** The input is not validated to check if all of the inputs are included, the function should show an error if a input is blank when 'Submit' is pressed.

<details>
<summary>Click for Image: Calculate Page - Blank values bug</summary>

![Blank values bug](assets/imgs/testing/bug-blank-inputs.png)

</details>

### Solved Bugs
#### Add Row - Input Bug
- **Description:** Pressing the '+' button would cause only the bucket name to be shown.
- **Cause:** This was caused by the incorrect div being selected by the JavaScript DOM manipulation code.
- **Solution:** This was fixed by adding the calculator description outside of the form seletion div.

<details>
<summary>Click for Image: Calculate Page - Add row input bug</summary>

![Add new row input bug](assets/imgs/testing/bug-add-row.png)

</details>

***

#### Add Row - Duplication Bug
- **Description:** Pressing the '+' button would cause the newly created row to copy the values of the first row.
- **Cause:** This was due to the newly created rows being the clone of the first row.
- **Solution:** This was fixed by clearing the inputs of the newly cloned row inputs, before displaying to the user.

<details>
<summary>Click for Image: Calculate Page - Row duplicate bug</summary>

![Add new row duplication bug](assets/imgs/testing/bug-duplicate-row.png)

</details>

***

#### Reset Button Bug
- **Description:** Pressing the 'Reset' button would not reset the user input rows.
- **Cause:** The cuase was that the inputs used to be part of a form, however this was removed to allow the submitted data to be used by a JavaScript function to display data on the same page. The reset button worked using in-built form reset mechanism.
- **Solution:** A new function was created that cleared the values and classes of the user input rows, when the reset button was clicked.
