const headerClockWrapper = document.querySelector("p#header-clock-wrapper");
export default function RunHeaderClock() {
    runClock() // initialize
    setInterval(runClock, 1000);
}

function runClock() {
    const currentTime = new Date();
    headerClockWrapper.innerHTML = `
<time datetime="${currentTime.toISOString()}">${currentTime.toLocaleString()}</time>
`;
}
