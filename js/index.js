import RunHeaderClock from "./runHeaderClock.js";
import RenderTodos from "./renderTodos.js";
import GenTodoDeadlines from "./genTodoDeadlines.js";

RunHeaderClock();
RenderTodos();

document.querySelector(
    'header#main-header div#bottom form#timeForm input[value="start"]'
).addEventListener("click", GenTodoDeadlines)