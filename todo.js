const todoList = () => {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    let dueyes = [];
    for (let x in todos.all) {
      if (todos.all[x].dueDate <= yesterday) {
        dueyes.push({
          d: todos.all[x].dueDate,
          t: todos.all[x].title,
          c: todos.all[x].completed,
        });
      }
    }
    return dueyes;
  };

  const dueToday = () => {
    let duetoday = [];
    for (let x in todos.all) {
      if (todos.all[x].dueDate == today) {
        duetoday.push({
          d: today,
          t: todos.all[x].title,
          c: todos.all[x].completed,
        });
      }
    }
    return duetoday;
  };

  const dueLater = () => {
    let duetom = [];
    for (let x in todos.all) {
      if (todos.all[x].dueDate >= tomorrow) {
        duetom.push({
          d: todos.all[x].dueDate,
          t: todos.all[x].title,
          c: todos.all[x].completed,
        });
      }
    }
    return duetom;
  };

  const toDisplayableList = (list) => {
    let s = "";
    let n = list.length;
    for (let i in list) {
      if (list[i].d == today) {
        if (list[i].c == true) {
          if (i != n - 1) {
            s += "[x] " + list[i].t + "\n";
          } else {
            s += "[x] " + list[i].t;
          }
        } else {
          if (i != n - 1) {
            s += "[ ] " + list[i].t + "\n";
          } else {
            s += "[ ] " + list[i].t;
          }
        }
      } else {
        if (list[i].s == true) {
          if (i != n - 1) {
            s += "[x] " + list[i].t + " " + list[i].d + "\n";
          } else {
            s += "[x] " + list[i].t + " " + list[i].d;
          }
        } else {
          if (i != n - 1) {
            s += "[ ] " + list[i].t + " " + list[i].d + "\n";
          } else {
            s += "[ ] " + list[i].t + " " + list[i].d;
          }
        }
      }
    }
    return s;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);
const dayaftertomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 2))
);
const daybefore = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 2))
);

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({
  title: "Submit assignment 2",
  dueDate: dayaftertomorrow,
  completed: false,
});
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: daybefore, completed: false });

console.log("My Todo-list\n\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");

// eslint-disable-next-line no-undef
module.exports = todoList;
