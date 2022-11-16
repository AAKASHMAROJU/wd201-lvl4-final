// eslint-disable-next-line no-unused-vars
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const todoList = require("../todo");

const oneDay = 60 * 60 * 24 * 1000;
let today = new Date();
today = new Date(today.getTime() * oneDay);
today.toLocaleDateString("en-CA");

const yesterday = new Date(today.getTime() - 1 * oneDay);
yesterday.toLocaleDateString("en-CA");

const tomorrow = new Date(today.getTime() + 1 * oneDay);
tomorrow.toLocaleDateString("en-CA");

const {
  all,
  add,
  markAsComplete,
  overdue,
  dueToday,
  dueLater,
  toDisplayableList,
} = todoList();

describe("Todolist Test Suite", () => {
  test("Creating a new todo", () => {
    const itemsCount = all.length;
    add({
      title: "Test to do",
      completed: true,
      dueDate: today,
    });
    add({
      title: "Test to do 2",
      completed: true,
      dueDate: tomorrow,
    });
    add({
      title: "Test to do 3",
      completed: true,
      dueDate: yesterday,
    });

    expect(all.length).toBe(itemsCount + 3);
  });

  test("Marking a todo as completed", () => {
    expect(all[0].completed).toBe(true);
  });

  test("Retrieval of overdue items", () => {
    expect(all[2].dueDate).toBe(yesterday);
  });

  test("Retrieval of due today items", () => {
    expect(all[0].dueDate).toBe(today);
  });
  // eslint-disable-next-line no-undef
  test("Retrieval of due later items", () => {
    // eslint-disable-next-line no-undef
    expect(all[1].dueDate).toBe(tomorrow);
  });
});
