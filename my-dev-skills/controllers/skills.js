const Skill = require('../models/skill')


index = (req, res) => {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

show = (req, res) => {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
});
}

newTodo = (req, res) => {
    res.render('skills/new');
}

create = (req, res) => {
    console.log(req.body);
    req.body.done = false;
    Skill.create(req.body);
    res.redirect('/skills');
}

deleteSkill = (req, res) => {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}
 
module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteSkill
};