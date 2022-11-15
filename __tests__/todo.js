// eslint-disable-next-line no-undef
const todoList = require("../todo");
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
const { all, add } = todoList();

// eslint-disable-next-line no-undef
describe("Todolist Test Suite", () => {
  // eslint-disable-next-line no-undef
  test("Creating a new todo", () => {
    const itemsCount = all.length;
    add({
      title: "Test to do",
      completed: true,
      dueDate: new Date().toLocaleDateString("en-CA"),
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
    // eslint-disable-next-line no-undef
    expect(all.length).toBe(itemsCount + 3);
  });
  // eslint-disable-next-line no-undef
  test("Marking a todo as completed", () => {
    expect(all[0].completed).toBe(true);
  });
  // eslint-disable-next-line no-undef
  test("Retrieval of overdue items", () => {
    expect(all[2].dueDate).toBe(yesterday);
  });
  // eslint-disable-next-line no-undef
  test("Retrieval of due today items", () => {
    expect(all[0].dueDate).toBe(today);
  });
  // eslint-disable-next-line no-undef
  test("Retrieval of due later items", () => {
    expect(all[1].dueDate).toBe(tomorrow);
  });
});
