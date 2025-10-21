document.addEventListener("DOMContentLoaded", () => {
  const guides = {
    r6: {
      title: "R6 Siege - Crusader",
      steps: [
        { 
          title: "Remove Anti-Cheat Software", 
          description: "Remove Faceit and Riot Vanguard anti-cheat software from your system.", 
          instructions: [
            "Open Control Panel and go to 'Programs and Features'",
            "Search for 'Faceit' in the list of installed programs",
            "Right-click on Faceit and select 'Uninstall'",
            "Follow the uninstallation wizard to completely remove it",
            "Search for 'Riot Vanguard' in the list",
            "Right-click on Riot Vanguard and select 'Uninstall'",
            "Restart your computer after uninstalling both programs",
            "Verify that both programs are completely removed"
          ],
          warning: "Make sure to completely remove all traces of these anti-cheat programs to avoid conflicts."
        },
        { 
          title: "Disable All Antivirus Software", 
          description: "Manually disable all third-party antivirus software on your system.", 
          instructions: [
            "Open your antivirus software (Avast, Norton, McAfee, etc.)",
            "Look for 'Real-time Protection' or 'Live Protection' settings",
            "Disable real-time protection temporarily",
            "Add the Crusader folder to antivirus exclusions",
            "Disable any firewall features if present",
            "Repeat this process for any other antivirus software installed",
            "Note: Remember to re-enable protection after use"
          ],
          warning: "Keep track of which antivirus software you've disabled so you can re-enable them later."
        },
        { 
          title: "Disable Windows Defender with DControl", 
          description: "Download and use DControl to completely disable Windows Defender.", 
          instructions: [
            "Download DControl from the provided link",
            "Extract the downloaded file to a folder",
            "Run DControl as Administrator (right-click → Run as Administrator)",
            "Click on 'Disable Windows Defender' option",
            "Follow the on-screen instructions to disable all Defender features",
            "Restart your computer when prompted",
            "Verify that Windows Defender is completely disabled"
          ],
          warning: "This tool modifies system settings. Use with caution and only for legitimate purposes."
        },
        { 
          title: "Disable Secure Boot", 
          description: "Disable Secure Boot in your BIOS/UEFI settings.", 
          instructions: [
            "Restart your computer and enter BIOS/UEFI (usually F2, F12, or Delete key)",
            "Navigate to the 'Security' or 'Boot' tab",
            "Find 'Secure Boot' option",
            "Set Secure Boot to 'Disabled'",
            "Save changes and exit BIOS",
            "Restart your computer",
            "Verify Secure Boot is disabled in Windows"
          ]
        },
        { 
          title: "Enable Virtualization", 
          description: "Enable virtualization features in your BIOS.", 
          instructions: [
            "Enter BIOS/UEFI settings",
            "Look for 'Intel VT-x' or 'AMD-V' option",
            "Enable this option",
            "Look for 'Intel VT-d' or 'AMD IOMMU' option",
            "Enable this option as well",
            "Save changes and exit BIOS",
            "Restart your computer"
          ]
        },
        { 
          title: "Final Verification", 
          description: "Verify that all configurations are properly set.", 
          instructions: [
            "Check that Faceit and Riot Vanguard are completely removed",
            "Verify all antivirus software is disabled",
            "Confirm Windows Defender is disabled via DControl",
            "Check that Secure Boot is disabled",
            "Verify virtualization is enabled",
            "Launch Crusader and test functionality",
            "Monitor for any error messages or conflicts"
          ]
        }
      ]
    },
    valorant: {
      title: "Valorant - Internal",
      steps: [
        { 
          title: "Disable All Antivirus Software", 
          description: "Manually disable all third-party antivirus software.", 
          instructions: [
            "Open your antivirus software",
            "Disable real-time protection",
            "Add Valorant to exclusions",
            "Disable firewall features",
            "Repeat for all installed antivirus programs"
          ]
        },
        { 
          title: "Disable Windows Defender with DControl", 
          description: "Use DControl to completely disable Windows Defender.", 
          instructions: [
            "Download DControl from the provided link",
            "Extract and run as Administrator",
            "Click 'Disable Windows Defender'",
            "Follow on-screen instructions",
            "Restart when prompted",
            "Verify Defender is disabled"
          ],
          warning: "This tool modifies system settings. Use with caution."
        },
        { 
          title: "Enable Secure Boot", 
          description: "Enable Secure Boot in BIOS for Valorant Internal.", 
          instructions: [
            "Enter BIOS/UEFI settings",
            "Navigate to 'Security' or 'Boot' tab",
            "Find 'Secure Boot' option",
            "Set to 'Enabled'",
            "Save and exit BIOS",
            "Restart computer"
          ]
        },
        { 
          title: "Enable Virtualization", 
          description: "Enable virtualization features in BIOS.", 
          instructions: [
            "Enter BIOS settings",
            "Enable 'Intel VT-x' or 'AMD-V'",
            "Enable 'Intel VT-d' or 'AMD IOMMU'",
            "Save and restart"
          ]
        },
        { 
          title: "Disable Hyper-V", 
          description: "Disable Hyper-V via PowerShell.", 
          instructions: [
            "Open PowerShell as Administrator",
            "Run: 'Disable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-All'",
            "Restart computer when prompted",
            "Verify Hyper-V is disabled"
          ]
        },
        { 
          title: "Final Configuration", 
          description: "Complete the Valorant Internal setup.", 
          instructions: [
            "Verify all antivirus software is disabled",
            "Confirm Windows Defender is disabled",
            "Check Secure Boot is enabled",
            "Verify virtualization is enabled",
            "Test Valorant Internal functionality"
          ]
        }
      ]
    },
    fortnite: {
      title: "Fortnite - Ultimate",
      steps: [
        { 
          title: "Disable All Antivirus Software", 
          description: "Manually disable all third-party antivirus software.", 
          instructions: [
            "Open your antivirus software",
            "Disable real-time protection",
            "Add Fortnite to exclusions",
            "Disable firewall features",
            "Repeat for all installed antivirus programs"
          ]
        },
        { 
          title: "Disable Windows Defender with DControl", 
          description: "Use DControl to completely disable Windows Defender.", 
          instructions: [
            "Download DControl from the provided link",
            "Extract and run as Administrator",
            "Click 'Disable Windows Defender'",
            "Follow on-screen instructions",
            "Restart when prompted",
            "Verify Defender is disabled"
          ],
          warning: "This tool modifies system settings. Use with caution."
        },
        { 
          title: "Download and Install Action!", 
          description: "Download and install Action! Game Recorder before launching the game.", 
          instructions: [
            "Download Action! from the official website",
            "Run the installer as Administrator",
            "Follow the installation wizard",
            "Complete the installation process",
            "Launch Action! Game Recorder",
            "Configure settings if needed",
            "Keep Action! running in the background"
          ]
        },
        { 
          title: "Disable Secure Boot", 
          description: "Disable Secure Boot in BIOS settings.", 
          instructions: [
            "Enter BIOS/UEFI settings",
            "Navigate to 'Security' or 'Boot' tab",
            "Find 'Secure Boot' option",
            "Set to 'Disabled'",
            "Save and exit BIOS",
            "Restart computer"
          ]
        },
        { 
          title: "Enable Virtualization", 
          description: "Enable virtualization features in BIOS.", 
          instructions: [
            "Enter BIOS settings",
            "Enable 'Intel VT-x' or 'AMD-V'",
            "Enable 'Intel VT-d' or 'AMD IOMMU'",
            "Save and restart"
          ]
        },
        { 
          title: "Launch and Test", 
          description: "Launch Fortnite Ultimate with Action! running.", 
          instructions: [
            "Launch Fortnite Ultimate",
            "After injecting run Action as admin!",
            "Test all functionality",
            "Verify Action! is running properly",
            "Check for any conflicts or errors",
            "Monitor system performance"
          ]
        }
      ]
    },
    bo6: {
      title: "Black Ops 6 - Advanced",
      steps: [
        { 
          title: "Disable Secure Boot", 
          description: "Disable Secure Boot in your BIOS/UEFI settings.", 
          instructions: [
            "Restart your computer and enter BIOS/UEFI",
            "Navigate to the 'Security' or 'Boot' tab",
            "Find 'Secure Boot' option",
            "Set Secure Boot to 'Disabled'",
            "Save changes and exit BIOS",
            "Restart your computer",
            "Verify Secure Boot is disabled in Windows"
          ]
        },
        { 
          title: "Disable All Antivirus Software", 
          description: "Manually disable all third-party antivirus software.", 
          instructions: [
            "Open your antivirus software",
            "Disable real-time protection",
            "Add Black Ops 6 to exclusions",
            "Disable firewall features",
            "Repeat for all installed antivirus programs"
          ]
        },
        { 
          title: "Disable Windows Defender with DControl", 
          description: "Use DControl to completely disable Windows Defender.", 
          instructions: [
            "Download DControl from the provided link",
            "Extract and run as Administrator",
            "Click 'Disable Windows Defender'",
            "Follow on-screen instructions",
            "Restart when prompted",
            "Verify Defender is disabled"
          ],
          warning: "This tool modifies system settings. Use with caution."
        },
        { 
          title: "Enable Virtualization", 
          description: "Enable virtualization features in your BIOS.", 
          instructions: [
            "Enter BIOS/UEFI settings",
            "Look for 'Intel VT-x' or 'AMD-V' option",
            "Enable this option",
            "Look for 'Intel VT-d' or 'AMD IOMMU' option",
            "Enable this option as well",
            "Save changes and exit BIOS",
            "Restart your computer"
          ]
        },
        { 
          title: "Disable Kernel Isolation", 
          description: "Disable Kernel Isolation in Windows security settings.", 
          instructions: [
            "Open Windows Security (Windows Defender Security Center)",
            "Go to 'Device security'",
            "Click on 'Core isolation details'",
            "Turn OFF 'Memory integrity'",
            "Restart your computer when prompted",
            "Verify Kernel Isolation is disabled",
            "Check that the setting remains disabled after restart"
          ],
          warning: "Disabling Kernel Isolation reduces system security. Only do this if necessary for your application."
        },
        { 
          title: "Final Verification", 
          description: "Verify all configurations are properly set for Black Ops 6.", 
          instructions: [
            "Check that Secure Boot is disabled",
            "Verify all antivirus software is disabled",
            "Confirm Windows Defender is disabled",
            "Check that virtualization is enabled",
            "Verify Kernel Isolation is disabled",
            "Launch Black Ops 6 and test functionality",
            "Monitor for any error messages or performance issues"
          ]
        }
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
    }
  });

  restartBtn.addEventListener("click", () => {
    completionScreen.classList.remove("active");
    productSelection.classList.add("active");
    currentProduct = null;
    currentStep = 0;
  });

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      guideScreen.classList.remove("active");
      productSelection.classList.add("active");
      currentProduct = null;
      currentStep = 0;
    });
  }

  function loadStep() {
    const guide = guides[currentProduct];
    const step = guide.steps[currentStep];
    const progress = ((currentStep + 1) / guide.steps.length) * 100;

    guideTitle.textContent = guide.title;
    progressText.textContent = `Step ${currentStep + 1} of ${guide.steps.length}`;
    progressFill.style.width = `${progress}%`;
    stepNumber.textContent = currentStep + 1;
    stepTitle.textContent = step.title;
    stepDescription.textContent = step.description;
    
    instructionsList.innerHTML = step.instructions.map(inst => `<li>${inst}</li>`).join("");
    
    if (step.warning) {
      stepWarning.classList.add("active");
      warningText.textContent = step.warning;
    } else {
      stepWarning.classList.remove("active");
    }
  }
});
