
// ************************ Switch Case **************************

//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the result to the console

const day = 7
let weekDay

switch (day) {
    case 1:
        weekDay = `Day ${day}: is Monday`
        break;
    case 2:
        weekDay = `Day ${day}: is Tuesday`
        break;
    case 3:
        weekDay = `Day ${day}: is Wednesday`
        break;
    case 4:
        weekDay = `Day ${day}: is Thrusday`
        break;
    case 5:
        weekDay = `Day ${day}: is Friday`
        break;
    case 6:
        weekDay = `Day ${day}: is Saturday`
        break;
    case 7:
        weekDay = `Day ${day}: is Sunday`
        break;

    default:
        weekDay = `${day}: Not a valid Input`
        break;
}


console.log(weekDay);

