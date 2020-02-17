const people = [
{
name: 'Arisa',
department: 'BP',
gender: 'F'
},
{
name: 'Ham',
department: 'IT',
gender: 'F'
},
{
name: 'Alice',
department: 'IT',
gender: 'F'
},
{
name: 'Anna',
department: 'DA',
gender: 'F'
},
{
name: 'Larry',
department: 'Sales',
gender: 'M'
},
{
name: 'Ria',
department: 'Sales',
gender: 'F'
},
{
name: 'JD',
department: 'Sales',
gender: 'M'
},
{
name: 'Thor',
department: 'Sales',
gender: 'M'
},
{
name: 'Karl',
department: 'Sales',
gender: 'M'
},
{
name: 'Rachel',
department: 'Sales',
gender: 'F'
}
];

function listByGender(gender) {
 return people.filter(el => { if(el.gender == gender) return el })
              .map(x => x.name);
}

function groupByDepartment() {
    return people.reduce((data, item) => {
      (data[item.department] = data[item.department] || []).push(item.name)
      return data
    }, {});
}

// Test:
console.log(listByGender('M')); // Output: Includes Larry, JD, Thor, and Karl
console.log(listByGender('F')); // Output: Includes Arisa, Ham, Alice, Anna, Ria, and Rachel
console.log(groupByDepartment()); // Output: People grouped by their department
