/* Block 18 - Testing Workshop

Unit Test
Expect [action] to be [some result]
1. 
expect multiplication(2, 3) to be a number

expect multiplication(2, 3) to be 6

expect mutliplication('b', 5) to be an error

2.
expect concatOdds([], []) to be an array

expect concatOdds([], []) arguments to be arrays of numbers

expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be [-1, 1, 3, 9, 15] 

expect concatOdds(['a', 3, 'b'], [1, 2, 3]) to be an error

expect concatOdds([], []) to output a single version of every number in new array

expect concatOdds([], []) to be from lowest number to highest value number

Funtional Test
When a user [does something with paramenters], [some things should happen]

1.
When a user clicks "checkout" without anything in their cart, they should not be able to click and prompted to add an item to thier cart

When a user clicks "checkout" with items in their cart, they should be prompted to sign in or checkout as a guest

When a user clicks "checkout" and chooses to checkout as a guest, they should be prompted to create an account or login for quicker checkout next time

When a user clicks "checkout" and inputs an invalid username or password, they should be given an error to try again or create an account

When a user click "checkout" and input nothing to login they should receive an error and to try again or create an account
*/
