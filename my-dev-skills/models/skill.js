const skills = [
    {skill: 'HTML5', acquired: true},
    {skill: 'CSS', acquired: true},
    {skill: 'Vanilla JS', acquired: true},
    {skill: 'Express', acquired: true},
    {skill: 'Mongoose', acquired: true},
    {skill: 'Materialize', acquired: false},
    {skill: 'PostgreSQL', acquired: true},
    {skill: 'MongoDB', acquired: false},
    {skill: 'Python', acquired: true},
    {skill: 'Django', acquired: true}
];

getOne = (id) => {
    return skills[id];
}
  
getAll = () => {
    return skills;
}

create = (skill) => {
    skills.push(skill);
}

deleteOne = (id) => {
    skills.splice(id, 1);
}

module.exports = {
getAll,
getOne,
create,
deleteOne
};
              