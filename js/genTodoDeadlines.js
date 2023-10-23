const WORK_HOURS = 12;

export default function GenTodoDeadlines() {
    const todoArticleHeaderParagraphs = document.querySelectorAll("main ul li article header p");

    const timeInputVal = document.querySelector("input#timeInput").value;
    let date = new Date();
    const [hours, minutes] = timeInputVal.split(":");
    date.setHours(hours);
    date.setMinutes(minutes);

    const kitchenTimeFormatter = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });

    todoArticleHeaderParagraphs.forEach((pElem) => {
        const hoursToAddPerTodoItem = WORK_HOURS / todoArticleHeaderParagraphs.length;
        date.setHours(date.getHours() + hoursToAddPerTodoItem);

        pElem.innerHTML = `
do until <time datetime="${date.toISOString()}">${kitchenTimeFormatter.format(date)}</time>       
`;
    });
}
