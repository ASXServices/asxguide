document.addEventListener("DOMContentLoaded", () => {
  const guides = {
    r6: {
      title: "R6 Siege - Crusader",
      steps: [
        { title: "Disable Secure Boot", description: "Secure Boot must be disabled in BIOS.", instructions: ["Enter BIOS", "Disable Secure Boot", "Save and exit"] },
        { title: "Enable Virtualization", description: "Virtualization must be enabled in BIOS.", instructions: ["Enter BIOS", "Enable Intel VT-x or AMD-V", "Save and exit"] },
        { title: "Disable Core Isolation", description: "Turn off Memory Integrity in Windows.", instructions: ["Search 'Core Isolation'", "Turn off Memory Integrity", "Restart PC"] },
        { title: "Disable Antivirus", description: "Turn off or uninstall antivirus software.", instructions: ["Open antivirus dashboard", "Disable real-time protection", "Uninstall if needed"] },
        { title: "Disable Windows Defender", description: "Use Defender Control to disable Defender.", instructions: ["Download Defender Control", "Run and click 'Disable Defender'", "Confirm it's disabled"] },
        { title: "Run Loader", description: "Use the Crusader loader to inject.", instructions: ["Download loader", "Run as administrator", "Follow instructions"] },
        { title: "Final Check", description: "Verify all steps are complete.", instructions: ["Secure Boot off", "Virtualization on", "Antivirus and Defender disabled"] }
      ]
    },
    valorant: {
      title: "Valorant - Internal",
      steps: [
        { title: "Uninstall Vanguard", description: "Remove Riot Vanguard anti-cheat.", instructions: ["Open Control Panel", "Uninstall Riot Vanguard", "Restart PC"] },
        { title: "Disable Secure Boot", description: "Secure Boot must be disabled in BIOS.", instructions: ["Enter BIOS", "Disable Secure Boot", "Save and exit"] },
        { title: "Enable Virtualization", description: "Virtualization must be enabled in BIOS.", instructions: ["Enter BIOS", "Enable Intel VT-x or AMD-V", "Save and exit"] },
        { title: "Disable Core Isolation", description: "Turn off Memory Integrity in Windows.", instructions: ["Search 'Core Isolation'", "Turn off Memory Integrity", "Restart PC"] },
        { title: "Disable Antivirus", description: "Turn off or uninstall antivirus software.", instructions: ["Open antivirus dashboard", "Disable real-time protection", "Uninstall if needed"] },
        { title: "Disable Windows Defender", description: "Use Defender Control to disable Defender.", instructions: ["Download Defender Control", "Run and click 'Disable Defender'", "Confirm it's disabled"] },
        { title: "Run Loader", description: "Inject before launching Valorant.", instructions: ["Download loader", "Run as administrator", "Inject before launching game"] }
      ]
    },
    fortnite: {
      title: "Fortnite - Ultimate",
      steps: [
        { title: "Disable Secure Boot", description: "Secure Boot must be disabled in BIOS.", instructions: ["Enter BIOS", "Disable Secure Boot", "Save and exit"] },
        { title: "Enable Virtualization", description: "Virtualization must be enabled in BIOS.", instructions: ["Enter BIOS", "Enable Intel VT-x or AMD-V", "Save and exit"] },
        { title: "Disable Core Isolation", description: "Turn off Memory Integrity in Windows.", instructions: ["Search 'Core Isolation'", "Turn off Memory Integrity", "Restart PC"] },
        { title: "Disable Antivirus", description: "Turn off or uninstall antivirus software.", instructions: ["Open antivirus dashboard", "Disable real-time protection", "Uninstall if needed"] },
        { title: "Disable Windows Defender", description: "Use Defender Control to disable Defender.", instructions: ["Download Defender Control", "Run and click 'Disable Defender'", "Confirm it's disabled"] },
        { title: "Run Loader", description: "Inject before launching Fortnite.", instructions: ["Download loader", "Run as administrator", "Inject before launching game"] },
        { title: "Final Check", description: "Verify all steps are complete.", instructions: ["Secure Boot off", "Virtualization on", "Antivirus and Defender disabled"] }
      ]
    },
    bo6: {
      title: "Black Ops 6 - Advanced",
      steps: [
        { title: "Disable Secure Boot", description: "Secure Boot must be disabled in BIOS.", instructions: ["Enter BIOS", "Disable Secure Boot", "Save and exit"] },
        { title: "Enable Virtualization", description: "Virtualization must be enabled in BIOS.", instructions: ["Enter BIOS", "Enable Intel VT-x or AMD-V", "Save and exit"] },
        { title: "Disable Core Isolation", description: "Turn off Memory Integrity in Windows.", instructions: ["Search 'Core Isolation'", "Turn off Memory Integrity", "Restart PC"] },
        { title: "Disable Antivirus", description: "Turn off or uninstall antivirus software.", instructions: ["Open antivirus dashboard", "Disable real-time protection", "Uninstall if needed"] },
        { title: "Disable Windows Defender", description: "Use Defender Control to disable Defender.", instructions: ["Download Defender Control", "Run and click 'Disable Defender'", "Confirm it's disabled"] },
        { title: "Run Loader", description: "Inject before launching BO6.", instructions: ["Download loader", "Run as administrator", "Inject before launching game"] },
        { title: "Final Check", description: "Verify all steps are complete.", instructions: ["Secure Boot off", "Virtualization on", "Antivirus and Defender disabled"] }
      ]
    },
    midnight: {
      title: "Midnight Spoofer - Temp HWID",
      steps: [
        { title: "Remove Anti-Cheat Software", description: "Uninstall Riot Vanguard, BattleEye, EasyAntiCheat.", instructions: ["Open Control Panel", "Uninstall all anti-cheat software", "Restart PC"] },
        { title: "Disable Windows Defender", description: "Use Defender Control to disable Defender.", instructions: ["Download Defender Control", "Run and click 'Disable Defender'", "Confirm it's disabled"] },
        { title: "Disable Antivirus", description: "Turn off or uninstall antivirus software.", instructions: ["Open antivirus dashboard", "Disable real-time protection", "Uninstall if needed"] },
        { title: "Disable Secure Boot", description: "Secure Boot must be disabled in BIOS.", instructions: ["Enter BIOS", "Disable Secure Boot", "Save and exit"] },
        { title: "Enable Virtualization", description: "Virtualization must be enabled in BIOS.", instructions: ["Enter BIOS", "Enable Intel VT-x or AMD-V", "Save and exit"] },
        { title: "Run Spoofer", description: "Launch Midnight Spoofer and follow instructions.", instructions: ["Download loader", "Run 'RUN ME AND CLICK OK!'", "Launch Spoofer.exe", "Follow prompts"] },
        { title: "Final Check", description: "Verify all steps are complete.", instructions: ["Secure Boot off", "Virtualization on", "Antivirus and Defender disabled"], warning: "Do NOT have a Windows password set when performing SID spoofing. It will lock you out and require a full reinstall." }
      ]
    }
  };

  let currentProduct = null;
  let currentStep = 0;

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
  const restartBtn = document.getElementById("restart-btn");
  const completedProduct = document.getElementById("completed-product");
  const completionSummary = document.getElementById("completion-summary");
  const backBtn = document.getElementById("back-btn");

  productCards.forEach(card => {
    card.addEventListener("click", () => {
      const product = card.dataset.product;
      if (!guides[product]) return;
      currentProduct = product;
      currentStep = 0;
      productSelection.classList.remove("active");
      guideScreen.classList.add("active");
      loadStep();
    });
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
