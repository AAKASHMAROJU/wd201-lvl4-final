// eslint-disable-next-line no-unused-vars
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const todoList = require("../todo");

const today = new Date().toLocaleDateString("en-CA");
const yesterday = new Date(
  new Date().setDate(new Date().getDate() - 1)
).toLocaleDateString("en-CA");
const tomorrow = new Date(
  new Date().setDate(new Date().getDate() + 1)
).toLocaleDateString("en-CA");

const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Todolist Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Befire everything i added this item1",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Creating a new todo", () => {
    const itemsCount = all.length;

    add({
      title: "Test to do",
      completed: false,
      dueDate: today,
    });
    expect(all.length).toBe(itemsCount + 1);
  });

  test("Marking a todo as completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Retrieval of overdue items", () => {
    let overdueItemsList = overdue();
    const len = overdueItemsList.length;
    add({
      title: "Test to do after adding Overdue item",
      completed: false,
      dueDate: yesterday,
    });
    overdueItemsList = overdue();
    expect(overdueItemsList.length).toBe(len + 1);
  });

  test("Retrieval of due today items", () => {
    let duetodayList = dueToday();
    const todaylen = duetodayList.length;
    add({
      title: "Test to do after adding due today item",
      completed: true,
      dueDate: today,
    });
    duetodayList = dueToday();
    expect(duetodayList.length).toBe(todaylen + 1);
  });

  test("Retrieval of due later items", () => {
    let duelaterList = dueLater();
    const tomlen = duelaterList.length;
    add({
      title: "Test to do after adding due later item",
      completed: true,
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 3)
      ).toLocaleString("en-CA"),
    });
    duelaterList = dueLater();
    expect(duelaterList.length).toBe(tomlen + 1);
  });
});
