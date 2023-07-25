const { TodosModel } = require("./todos.model");



class TodosService {

  todosModel;

  constructor() {
    this.todosModel = TodosModel;
    
  }

  getList() {
    return this.todosModel.find({}).sort({'createdAt': -1}).exec();
  }

  addTask(name) {
    return this.todosModel.create({ name });
  }
}


module.exports = {
  TodosService,
}