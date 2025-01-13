const tabs = document.querySelectorAll(".menu-tab");
const tabContents = document.querySelectorAll(".tab-content");

const manualToggle = document.getElementById("manual-toggle");
const autoRejectToggle = document.getElementById("auto-reject-toggle");
const autoAcceptToggle = document.getElementById("auto-accept-toggle");

const manualStatus = document.getElementById("manual-status");
const autoRejectStatus = document.getElementById("auto-reject-status");
const autoAcceptStatus = document.getElementById("auto-accept-status");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        tabContents.forEach((content) => content.classList.remove("active"));
        tabContents[index].classList.add("active");
    });
});


function updateStatus(source) {
    manualStatus.style.display = "none";
    autoRejectStatus.style.display = "none";
    autoAcceptStatus.style.display = "none";

    if (source === "manual" && manualToggle.checked) {
        manualStatus.style.display = "block";
        autoRejectToggle.checked = false;
        autoAcceptToggle.checked = false;
    } else if (source === "auto-reject" && autoRejectToggle.checked) {
        autoRejectStatus.style.display = "flex";
        manualToggle.checked = false;
        autoAcceptToggle.checked = false;
    } else if (source === "auto-accept" && autoAcceptToggle.checked) {
        autoAcceptStatus.style.display = "flex";
        manualToggle.checked = false;
        autoRejectToggle.checked = false;
    }

    if (!autoRejectToggle.checked && !autoAcceptToggle.checked) {
        manualToggle.checked = true;
        manualStatus.style.display = "block";
    }
}

manualToggle.addEventListener("change", () => {
    if (!manualToggle.checked) {
        manualToggle.checked = true;
        alert("Manual mode cannot be turned off unless Auto Reject or Auto Accept is enabled.");
    } else {
        updateStatus("manual");
    }
});

autoRejectToggle.addEventListener("change", () => {
    updateStatus("auto-reject");
});

autoAcceptToggle.addEventListener("change", () => {
    updateStatus("auto-accept");
});

updateStatus("manual");
