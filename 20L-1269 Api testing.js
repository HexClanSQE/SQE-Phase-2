const frisby = require('frisby');
const { join } = require('path');
const Joi = frisby.Joi;

it ('GET all employees',() => {
  return frisby
  .get('https://dummy.restapiexample.com/api/v1/employees')
  .expect('status',200)
  .expect('json','status','success')
  .expect('jsonTypes','message','Successfully! All records has been fetched.')
  .expect('jsonTypes','data.[0]',{
    'id' : 1,
    'employee_name' : 'Tiger Nixon',
    'employee_salary' : 320800,
    'employee_age' : 61,
    'id': Joi.number().integer(),
    'employee_age' : Joi.number().integer(),
  })

  .expect('jsonTypes','data.[13]',{
    'id' : 14,
    'employee_name':"Haley Kennedy",
    'employee_salary':313500,
    'employee_age':43,

    'id': Joi.number().integer(),
    'employee_name': Joi.string().required(),
  })



});