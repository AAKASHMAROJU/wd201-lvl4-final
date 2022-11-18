const todoList = () => {
  const today = new Date().toLocaleDateString("en-CA");
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter((todo) => todo.dueDate < today);
  };

  const dueToday = () => {
    return all.filter((todo) => todo.dueDate == today);
  };

  const dueLater = () => {
    return all.filter((todo) => todo.dueDate > today);
  };

  // eslint-disable-next-line no-unused-vars
  const toDisplayableList = (list) => {
    let l = list
      .map(
        (todo) =>
          `${todo.completed ? "[x]" : "[ ]"} ${todo.title} ${
            todo.dueDate == today ? "" : todo.dueDate
          }`
      )
      .join("\n");
    let res = l.trim();
    return res;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
  };
};

// eslint-disable-next-line no-undef
module.exports = todoList;
