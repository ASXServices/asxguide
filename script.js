document.addEventListener("DOMContentLoaded", () => {
  const guides = {
    r6: {
      title: "R6 Siege - Crusader",
      steps: [
        {
          title: "Disable Secure Boot",
          description: "Secure Boot must be disabled in BIOS.",
          instructions: [
            "Restart your PC and enter BIOS.",
            "Navigate to Boot settings and disable Secure Boot.",
            "Save changes and exit BIOS."
          ]
        },
        {
          title: "Enable Virtualization",
          description: "Ensure virtualization is enabled.",
          instructions: [
            "Enter BIOS and locate virtualization settings.",
            "Enable Intel VT-x or AMD-V.",
            "Save and exit BIOS."
          ]
        },
        {
          title: "Disable Core Isolation",
          description: "Turn off Memory Integrity in Windows.",
          instructions: [
            "Search 'Core Isolation' in Windows.",
            "Turn off 'Memory Integrity'.",
            "Restart your PC."
          ]
        },
        {
          title: "Disable Antivirus",
          description: "Disable or uninstall any antivirus software.",
          instructions: [
            "Open your antivirus dashboard.",
            "Disable real-time protection and firewall.",
            "Uninstall if necessary."
          ]
        },
        {
          title: "Disable Windows Defender",
          description: "Use Defender Control to disable Defender.",
          instructions: [
            "Download Defender Control from Downloads tab.",
            "Run and click 'Disable Defender'.",
            "Confirm Defender is disabled."
          ]
        },
        {
          title: "Run Crusader Loader",
          description: "Use the Crusader loader to inject.",
          instructions: [
            "Download loader from Downloads tab.",
            "Run as administrator.",
            "Follow on-screen instructions."
          ]
        },
        {
          title: "Final Check",
          description: "Verify all steps are complete.",
          instructions: [
            "Secure Boot disabled, virtualization enabled.",
            "Antivirus and Defender fully disabled.",
            "Loader runs without errors."
          ]
        }
      ]
    },
    valorant: {
      title: "Valorant - Internal",
      steps: [
        {
          title: "Uninstall Vanguard",
          description: "Remove Riot Vanguard anti-cheat.",
          instructions: [
            "Open Control Panel > Programs.",
            "Uninstall Riot Vanguard.",
            "Restart your PC."
          ]
        },
        {
          title: "Disable Secure Boot",
          description: "Secure Boot must be disabled in BIOS.",
          instructions: [
            "Enter BIOS and disable Secure Boot.",
            "Save and exit BIOS."
          ]
        },
        {
          title: "Enable Virtualization",
          description: "Ensure virtualization is enabled.",
          instructions: [
            "Enable Intel VT-x or AMD-V in BIOS.",
            "Save and exit BIOS."
          ]
        },
        {
          title: "Disable Core Isolation",
          description: "Turn off Memory Integrity.",
          instructions: [
            "Search 'Core Isolation' in Windows.",
            "Turn off 'Memory Integrity'."
          ]
        },
        {
          title: "Disable Antivirus",
          description: "Turn off or uninstall antivirus.",
          instructions: [
            "Disable real-time protection.",
            "Uninstall if needed."
          ]
        },
        {
          title: "Disable Windows Defender",
          description: "Use Defender Control.",
          instructions: [
            "Download Defender Control.",
            "Run and click 'Disable Defender'."
          ]
        },
        {
          title: "Run Loader",
          description: "Inject before launching Valorant.",
          instructions: [
            "Run loader as admin.",
            "Inject before launching game."
          ]
        }
      ]
    },
    fortnite: {
      title: "Fortnite - Ultimate",
      steps: [
        {
          title: "Disable Secure Boot",
          description: "Secure Boot must be disabled in BIOS.",
          instructions: [
            "Enter BIOS and disable Secure Boot.",
            "Save and exit BIOS."
          ]
        },
        {
          title: "Enable Virtualization",
          description: "Ensure virtualization is enabled.",
          instructions: [
            "Enable Intel VT-x or AMD-V in BIOS.",
            "Save and exit BIOS."
          ]
        },
        {
          title: "Disable Core Isolation",
          description: "Turn off Memory Integrity.",
          instructions: [
            "Search 'Core Isolation' in Windows.",
            "Turn off 'Memory Integrity'."
          ]
        },
        {
          title: "Disable Antivirus",
          description: "Turn off or uninstall antivirus.",
          instructions: [
            "Disable real-time protection.",
            "Uninstall if needed."
          ]
        },
        {
          title: "Disable Windows Defender",
          description: "Use Defender Control.",
          instructions: [
            "Download Defender Control.",
            "Run and click 'Disable Defender'."
          ]
        },
        {
          title: "Run Loader",
          description: "Inject before launching Fortnite.",
          instructions: [
            "Run loader as admin.",
            "Inject before launching game."
          ]
        },
        {
          title: "Final Check",
          description: "Verify all steps are complete.",
          instructions: [
            "Secure Boot disabled, virtualization enabled.",
            "Antivirus and Defender fully disabled.",
            "Loader runs without errors."
          ]
        }
      ]
    },
    bo6: {
      title: "Black Ops 6 - Advanced",
      steps: [
        {
          title: "Disable Secure Boot",
          description: "Secure Boot must be disabled in BIOS.",
          instructions: [
            "Enter BIOS and disable Secure Boot.",
            "Save and exit BIOS."
          ]
        },
        {
          title: "Enable Virtualization",
          description: "Ensure virtualization is enabled.",
          instructions: [
            "Enable Intel VT-x or AMD-V in BIOS.",
            "Save and exit BIOS."
          ]
        },
        {
          title: "Disable Core Isolation",
          description: "Turn off Memory Integrity.",
          instructions: [
            "Search 'Core Isolation' in Windows.",
            "Turn off 'Memory Integrity'."
          ]
        },
        {
          title: "Disable Antivirus",
          description: "Turn off or uninstall antivirus.",
          instructions: [
            "Disable real-time protection.",
            "Uninstall if needed."
          ]
        },
        {
          title: "Disable Windows Defender",
          description: "Use Defender Control.",
          instructions: [
            "Download Defender Control.",
            "Run and click 'Disable Defender'."
          ]
        },
        {
          title: "Run Loader",
          description: "Inject before launching BO6.",
          instructions: [
            "Run loader as admin.",
            "Inject before launching game."
          ]
        },
        {
          title: "Final Check",
          description: "Verify all steps are complete.",
          instructions: [
            "Secure Boot disabled, virtualization enabled.",
            "Antivirus and Defender fully disabled.",
            "Loader runs without errors."
          ]
        }
      ]
    },
    midnight: {
      title: "Midnight Spoofer - Temp HWID",
      steps: [
        {
          title: "Remove Anti-Cheat Software",
          description: "Uninstall Riot Vanguard, BattleEye, EasyAntiCheat.",
          instructions: [
            "Open Control Panel > Programs and Features.",
            "Uninstall all anti-cheat software.",
            "Restart your PC."
          ]
        },
        {
          title: "Disable Windows Defender",
          description: "Use Defender Control to disable Defender.",
          instructions: [
            "Download Defender Control from Downloads tab.",
            "Run and click 'Disable Defender'.",
            "Confirm Defender is disabled."
          ]
        },
        {
          title: "Disable Antivirus",
          description: "Turn off or uninstall antivirus software.",
          instructions: [
            "Disable real-time protection.",
            "Uninstall if needed."
          ]
        },
        {
          title: "Disable Secure Boot",
          description: "Secure Boot must be disabled in BIOS.",
          instructions: [
            "Enter BIOS and disable Secure Boot.",
            "Save and exit BIOS."
          ]
        },
        {
          title: "Enable Virtualization",
          description: "Ensure virtualization is enabled.",
          instructions: [
            "Enable Intel VT-x or AMD-V in BIOS.",
            "Save and exit BIOS."
          ]
        },
        {
          title: "Run Spoofer",
          description: "Launch Midnight Spoofer and follow instructions.",
          instructions: [
            "Download loader from Downloads tab.",
            "Run 'RUN ME AND CLICK OK!'",
            "Launch Spoofer.exe",
            "Follow prompts to spoof HWID."
          ]
        },
        {
          title: "Final Check",
          description: "Verify all steps are complete.",
          instructions: [
            "Secure Boot disabled, virtualization enabled.",
            "Antivirus and Defender fully disabled.",
            "Spoofer runs without errors."
          ],
          warning: "Do NOT have a Windows password set when performing SID spoofing. It will lock you out and require a full reinstall."
        }
      ]
    }
  };

  let currentProduct = null;
  let currentStep = 0;

  const productCards = document.querySelectorAll(".product-card");
  const guideScreen = document.getElementById("guide-screen");
  const productSelection = document.getElementById("product-selection");
  const completionScreen = document.getElementById("completion-screen
