import DEFAULT_TODOS from "./listOfDefaultTodos.js";

const baseTodoStack = document.querySelector("main ul");
export default function RenderTodos() {
    DEFAULT_TODOS.forEach((todoData) => {
        const baseListITem = document.createElement("li");
        baseListITem.innerHTML = `
<article>
    <h3>
        ${todoData.name}
    </h3>
    <p>
        ${todoData.currentTask}
    </p>
</article>
`;
        baseTodoStack.appendChild(baseListITem);
    });
}
