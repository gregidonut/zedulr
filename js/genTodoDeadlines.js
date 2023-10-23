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

    const deadlines = splitTime(date, WORK_HOURS, todoArticleHeaderParagraphs.length);

    todoArticleHeaderParagraphs.forEach((pElem, index) => {
        pElem.innerHTML = `
do until 
    <time datetime="${deadlines[index].toISOString()}">
        ${kitchenTimeFormatter.format(deadlines[index])}
    </time>       
`;
    });
}

function splitTime(startTime, hoursToBeDivided, howManyParts) {
    const durationInMilliseconds = hoursToBeDivided * 60 * 60 * 1000; // 12 hours in milliseconds
    const partDuration = durationInMilliseconds / howManyParts;

    const parts = [];

    for (let i = 0; i < howManyParts; i++) {
        const partEndTime = new Date(startTime.getTime() + (i + 1) * partDuration);

        parts.push(
            partEndTime,
        );
    }

    return parts;
}
