const guides = {
    "fortnite-private": {
        name: "Fortnite - Private",
        steps: [
            {
                title: "Install Visual C++ Redistributable",
                description: "Download and install the latest Visual C++ Redistributable packages.",
                instructions: [
                    "Download Visual C++ Redistributable from Microsoft",
                    "Download DirectX End-User Runtime from Microsoft",
                    "Install both packages as Administrator",
                    "Restart your computer after installation",
                    "Verify installation was successful"
                ],
                downloads: [
                    {
                        name: "Visual C++ Redistributable",
                        url: "https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist",
                        description: "Latest supported Visual C++ Redistributable downloads"
                    },
                    {
                        name: "DirectX End-User Runtime",
                        url: "https://www.microsoft.com/en-us/download/details.aspx?id=35",
                        description: "DirectX End-User Runtime Web Installer"
                    }
                ]
            },
            {
                title: "Download Tool Support",
                description: "Download and run the tool support file to check your settings.",
                instructions: [
                    "Download the ToolSupportZS.rar file",
                    "Extract the archive to a folder",
                    "Run the tool support executable as Administrator",
                    "Check that all your settings are correct",
                    "Follow any recommendations provided by the tool"
                ],
                downloads: [
                    {
                        name: "Tool Support ZS",
                        url: "#",
                        description: "Tool support file to verify settings (246KB)"
                    }
                ]
            },
            {
                title: "Download Cheat Loader",
                description: "Download the cheat loader from Discord.",
                instructions: [
                    "Access the Discord server",
                    "Download the cheat loader from the provided link",
                    "Extract the loader to a secure folder",
                    "Keep the loader file safe and accessible"
                ],
                warning: "Make sure to download from the official Discord server only."
            },
            {
                title: "Launch and Configure",
                description: "Launch the cheat loader and configure your settings.",
                instructions: [
                    "Open the loader as Administrator",
                    "Login with your credentials",
                    "Click 'Load Driver' (only needed once per PC restart)",
                    "Wait for the driver loading to complete",
                    "Open your game when ready"
                ]
            },
            {
                title: "Final Setup",
                description: "Complete the final setup in the game lobby.",
                instructions: [
                    "Enter the game lobby",
                    "Click 'OK' when prompted",
                    "Press 'Insert' key to open the menu",
                    "Configure your cheat settings",
                    "Enjoy your gaming experience"
                ],
                warning: "Menu bind is 'Insert' key. Make sure to remember this for accessing the cheat menu."
            }
        ]
    },
    "fortnite-ultimate": {
        name: "Fortnite - Ultimate",
        steps: [
            {
                title: "Install Prerequisites",
                description: "Install all required software before using the loader.",
                instructions: [
                    "Download and install Visual C++ Redistributable",
                    "Download and install DirectX End-User Runtime",
                    "Download and install Action! Game Recorder",
                    "Install all prerequisites in the correct order",
                    "Restart your computer after installation"
                ],
                downloads: [
                    {
                        name: "Visual C++ Redistributable",
                        url: "https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist",
                        description: "Latest supported Visual C++ Redistributable"
                    },
                    {
                        name: "DirectX End-User Runtime",
                        url: "https://www.microsoft.com/en-us/download/details.aspx?id=35",
                        description: "DirectX End-User Runtime Web Installer"
                    },
                    {
                        name: "Action! Game Recorder",
                        url: "https://actionrecorder.com/fr",
                        description: "Professional game recording software"
                    }
                ]
            },
            {
                title: "Download Loader",
                description: "Download the Fortnite Ultimate loader from Discord.",
                instructions: [
                    "Access the Discord server",
                    "Download the Fortnite Ultimate loader",
                    "Extract the loader to a secure folder",
                    "Keep the loader file safe and accessible"
                ],
                warning: "Make sure to download from the official Discord server only."
            },
            {
                title: "Disable Antivirus Protection",
                description: "Disable all antivirus software and Windows Defender.",
                instructions: [
                    "Disable all third-party antivirus software",
                    "Use DControl to disable Windows Defender",
                    "Add the loader folder to antivirus exclusions",
                    "Disable real-time protection",
                    "Restart your computer after disabling protection"
                ],
                downloads: [
                    {
                        name: "DControl - Windows Defender Disabler",
                        url: "https://drive.usercontent.google.com/download?id=1jxmKjN820qP_cLZLgbeBi-aP5DUbROle&export=download",
                        description: "Tool to completely disable Windows Defender"
                    }
                ]
            },
            {
                title: "Configure Action! Recorder",
                description: "Set up Action! Game Recorder for optimal performance.",
                instructions: [
                    "Launch Action! Game Recorder",
                    "Configure recording settings",
                    "Set up hotkeys if needed",
                    "Ensure Action! is running in the background",
                    "Test recording functionality"
                ]
            },
            {
                title: "Launch Loader and Game",
                description: "Launch the loader and start the game.",
                instructions: [
                    "Run the loader as Administrator",
                    "Login with your credentials",
                    "Click 'Load Driver' and wait for completion",
                    "Launch Fortnite",
                    "Keep Action! Recorder running while playing"
                ]
            },
            {
                title: "Final Configuration",
                description: "Complete the final configuration and enjoy gaming.",
                instructions: [
                    "Verify all prerequisites are installed",
                    "Ensure Action! Recorder is running",
                    "Test all cheat functionality",
                    "Configure settings as needed",
                    "Enjoy your gaming experience"
                ],
                warning: "Keep Action! Recorder running while playing. Follow the installation order strictly."
            }
        ]
    },
    "valorant-internal": {
        name: "Valorant - Internal",
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
                downloads: [
                    {
                        name: "DControl - Windows Defender Disabler",
                        url: "https://drive.usercontent.google.com/download?id=1jxmKjN820qP_cLZLgbeBi-aP5DUbROle&export=download",
                        description: "Tool to completely disable Windows Defender"
                    }
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
    "cod": {
        name: "Call of Duty - Black Ops 6",
        steps: [
            {
                title: "Enable Secure Boot",
                description: "Enable Secure Boot in your BIOS/UEFI settings.",
                instructions: [
                    "Restart your computer and enter BIOS/UEFI",
                    "Navigate to the 'Security' or 'Boot' tab",
                    "Find 'Secure Boot' option",
                    "Set Secure Boot to 'Enabled'",
                    "Save changes and exit BIOS",
                    "Restart your computer",
                    "Verify Secure Boot is enabled in Windows"
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
                downloads: [
                    {
                        name: "DControl - Windows Defender Disabler",
                        url: "https://drive.usercontent.google.com/download?id=1jxmKjN820qP_cLZLgbeBi-aP5DUbROle&export=download",
                        description: "Tool to completely disable Windows Defender"
                    }
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
                    "Check that Secure Boot is enabled",
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
    "r6-crusaders": {
        name: "R6 Siege - Crusaders",
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
                downloads: [
                    {
                        name: "DControl - Windows Defender Disabler",
                        url: "https://drive.usercontent.google.com/download?id=1jxmKjN820qP_cLZLgbeBi-aP5DUbROle&export=download",
                        description: "Tool to completely disable Windows Defender"
                    }
                ],
                warning: "This tool modifies system settings. Use with caution and only for legitimate purposes."
            },
            {
                title: "Download and Extract Loader",
                description: "Download the Crusader loader and extract it properly.",
                instructions: [
                    "Download the loader using the provided link",
                    "The password for the archive is '123'",
                    "Extract the files from the archive",
                    "Place them in a separate folder with English letters only",
                    "It is recommended to place this folder in the root of the C drive",
                    "Make sure the folder path contains only English characters"
                ],
                warning: "The folder name should be written in English letters only. Place the folder in the root of the C drive for best results."
            },
            {
                title: "Activate and Launch",
                description: "Activate the cheat with your key and launch the injection process.",
                instructions: [
                    "Run the cheat loader as Administrator",
                    "Insert your key into the 'Serial Key' field",
                    "Click 'Sign In' to activate",
                    "Wait for the R6S icon to appear after loading",
                    "Click the 'Start Injection Process' button",
                    "Wait for the message 'Please Open Rainbow Six Siege'",
                    "Launch Rainbow Six Siege when prompted"
                ]
            },
            {
                title: "Access Cheat Menu",
                description: "Access the cheat menu in the game and configure your settings.",
                instructions: [
                    "When the game starts, press the 'Insert' key while in the main menu",
                    "The cheat menu will appear in front of you",
                    "Configure your cheat settings as desired",
                    "Use the 'Insert' key to close/open the menu anytime",
                    "Test all functionality to ensure everything works properly"
                ],
                warning: "The key to close/open the menu is 'Insert'. If you plan to use Crusader with a spoofer, always run the cheat loader first, then the spoofer."
            }
        ]
    },
    "temp-spoofer": {
        name: "Temp Spoofer - Hardware ID",
        steps: [
            {
                title: "Download Loader",
                description: "Download the Temp Spoofer loader from the provided link.",
                instructions: [
                    "Download the ASX Temp.rar file (5MB)",
                    "Extract the archive to a secure folder",
                    "Keep the extracted files in an accessible location",
                    "Make sure you have admin privileges for the next steps"
                ],
                downloads: [
                    {
                        name: "ASX Temp Spoofer",
                        url: "#",
                        description: "Temp Spoofer loader (5MB)"
                    }
                ]
            },
            {
                title: "Create Account",
                description: "Create your account on the login page.",
                instructions: [
                    "Open the temp spoofer application",
                    "Enter your desired account information on the login page",
                    "Go to the register page",
                    "Put your key in the registration field",
                    "Click 'Register' to create your account",
                    "Write down your account details for future reference"
                ],
                warning: "These details will be remembered automatically, but it's always best to write them down!"
            },
            {
                title: "Configure Spoofing Options",
                description: "Configure the spoofer based on your game type.",
                instructions: [
                    "If playing an EAC game: Click on the EAC button (circled in the interface)",
                    "If spoofing for any other game: Use the built-in cleaner",
                    "Click 'Clean' and wait for it to complete",
                    "Restart your PC after cleaning for best results",
                    "Click the reset button next to the fingerprint three times",
                    "After resetting, click the check to save seed"
                ]
            },
            {
                title: "Launch Spoofer",
                description: "Launch the spoofer and verify the changes.",
                instructions: [
                    "Click the 'Launch' button",
                    "The spoofer will close and you will hear a beep after a few seconds",
                    "Open the HWID checker in the folder",
                    "Compare all serials to verify they have changed",
                    "Enjoy your spoofed hardware IDs"
                ]
            },
            {
                title: "Troubleshooting Common Issues",
                description: "Address common problems that may occur during spoofing.",
                instructions: [
                    "For DLL issues: Download Visual C++ Redistributable Runtime Package",
                    "For Driver Failure: Ensure your system has vulnerability checks enabled",
                    "For Failed to Map: Check if your antivirus deleted the mapper",
                    "For Registration Failed: Disable your VPN or contact ISP for whitelisting",
                    "For Network Not Changing: Disable other network adapters except Ethernet/WiFi",
                    "For Driver Map Failure: Ensure your Windows profile has 'Administration' permissions",
                    "For Blue-Screening: Disable Firewall/Windows Defender",
                    "For Serials not Changing: Re-install spoofer with .NET and C++ development tools first"
                ],
                downloads: [
                    {
                        name: "Visual C++ Redistributable Runtime Package",
                        url: "https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/",
                        description: "All-in-one Visual C++ Redistributable package"
                    },
                    {
                        name: "Visual Studio Community",
                        url: "https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false",
                        description: "Visual Studio Community for development tools"
                    }
                ]
            }
        ]
    },
    "midnight-temp-spoofer": {
        name: "Midnight Temp Spoofer",
        steps: [
            {
                title: "PC Preparation",
                description: "Follow the PC Prep guide and disable exploit protection.",
                instructions: [
                    "Follow the PC Prep guide (only exploit protection)",
                    "Download the Midnight Temp Spoofer loader",
                    "Run the 'RUN ME AND CLICK OK!' registry file",
                    "This will uninstall and turn off blocklists - YOU HAVE TO DO THIS!",
                    "Disable antivirus protection using DControl (Defender Control)",
                    "Search 'Core Isolation' and TURN OFF 'Memory Integrity' - YOU HAVE TO DO THIS!"
                ],
                warning: "YOU HAVE TO DO THESE STEPS! They are mandatory for the spoofer to work properly."
            },
            {
                title: "Initial Setup",
                description: "Complete the initial setup and verification process.",
                instructions: [
                    "Run the 'checker' program to get your NON spoofed serials",
                    "Copy these serials and put them into a text file for comparison",
                    "RESTART YOUR PC once steps 1-4 are complete",
                    "After restart, launch the Spoofer.exe",
                    "You will have a seed automatically created for you",
                    "Your spoofed HWIDs will remain until your seed is changed"
                ],
                warning: "I do NOT recommend changing your seed until you either get banned or want to try a different game. You CANNOT switch back and forth between seeds."
            },
            {
                title: "Configure Spoofing Options",
                description: "Configure the spoofer options based on your needs.",
                instructions: [
                    "Hit '1' to enable the spoof options when prompted",
                    "For GPU Spoofing: Select 'Yes' unless playing Fortnite or Apex Legends (select 'No' for these)",
                    "For ARP Spoofing: Always select 'Yes' (required for spoofer to function)",
                    "For Monitor Spoofing: Select 'Yes', especially for Apex Legends",
                    "For TPM Spoofing: Select 'Yes' for Fortnite tournaments and other games that check TPM",
                    "DON'T Spoof GPU when playing Fortnite tournaments"
                ],
                warning: "DON'T have any cracking programs open! Any attempts at cracking or having these programs could result in your drive being wiped! There are no false flags!"
            },
            {
                title: "Seed Management",
                description: "Manage your spoofing seeds and SID changes.",
                instructions: [
                    "Use Option 2 to generate fresh hardware identifiers if banned",
                    "Use Option 3 for SID (System Identifier) changer - only when banned",
                    "DO NOT change SID every time you spoof, ONLY when you get banned",
                    "DO NOT have a Windows password set when performing SID spoofing",
                    "You can change SID in under 10 minutes and avoid Windows reinstall"
                ],
                warning: "DO NOT have a Windows password set when performing SID spoofing. It will lock you out of your system and you'll be forced to reinstall Windows."
            },
            {
                title: "Fortnite Cleaner",
                description: "Use the built-in Fortnite cleaner if needed.",
                instructions: [
                    "Use Option 4 for the powerful Fortnite cleaner",
                    "Follow the cleaning instructions carefully",
                    "This is built-in and specifically designed for Fortnite",
                    "Don't be a 'sped' and follow instructions properly"
                ]
            },
            {
                title: "Troubleshooting",
                description: "Address common issues with the Midnight Temp Spoofer.",
                instructions: [
                    "For BSOD when opening loader: Your exploit protection settings are enabled - disable them",
                    "For BSOD during monitor spoofing: Use the provided 'Cru' tool to change monitor serials",
                    "For Drive Serials Not Changing: MSI Afterburner seems to be the issue - uninstall it or close it in Task Manager",
                    "If you have questions, open a ticket for support"
                ]
            }
        ]
    },
    "perm-spoofing": {
        name: "Perm Spoofing - Permanent",
        steps: [
            {
                title: "Introduction to Permanent Spoofing",
                description: "Understand the permanent spoofing process and requirements.",
                instructions: [
                    "This guide is for if you have tried to spoof without reinstalling Windows",
                    "If you perm spoofed and cleaned but still get banned, follow this guide",
                    "THE MOST CRUCIAL ASPECT is following the provided instructions",
                    "MAKE SURE ALL STEPS ARE 100% DONE CORRECTLY",
                    "If you have questions, go through the entire guide first"
                ],
                warning: "THE MOST CRUCIAL ASPECT OF USING A PERMANENT SPOOFER LIKE JOLLY IS FOLLOWING THE PROVIDED INSTRUCTIONS. MAKE SURE ALL STEPS ARE 100% DONE CORRECTLY.",
                downloads: [
                    {
                        name: "Complete Perm Spoofing Guide",
                        url: "https://asxguide.gitbook.io/asx/tools/perm-spoofing",
                        description: "Access the complete guide for detailed instructions"
                    }
                ]
            },
            {
                title: "Fortnite/Rust/Apex/EAC/BE Spoofing",
                description: "Configure permanent spoofing for Easy Anti-Cheat and BattlEye games.",
                instructions: [
                    "Follow the Windows reinstall process",
                    "Configure BIOS settings properly",
                    "Download the permanent spoofing tools",
                    "Create a new account for the game",
                    "Follow extra safety steps",
                    "Verify the spoofing worked correctly"
                ],
                warning: "This is a complex process that requires careful attention to detail."
            },
            {
                title: "Valorant/LOL/VGK Spoofing",
                description: "Configure permanent spoofing for Riot Games and Vanguard-protected games.",
                instructions: [
                    "Follow the Windows reinstall process",
                    "Configure BIOS settings for Valorant",
                    "Configure TPM and Secure Boot settings",
                    "Create a new account",
                    "Follow HP/ASUS specific spoofing if applicable",
                    "Complete extra safety steps",
                    "Verify HVCI/TPM/SB settings"
                ]
            },
            {
                title: "COD/WZ Spoofing",
                description: "Configure permanent spoofing for Call of Duty and Warzone.",
                instructions: [
                    "Follow the Windows reinstall process",
                    "Configure BIOS settings for COD",
                    "Download the permanent spoofing tools",
                    "Create a new account",
                    "Verify the spoofing worked correctly"
                ]
            },
            {
                title: "Troubleshooting",
                description: "Address common issues with permanent spoofing.",
                instructions: [
                    "For LOADER CRASHING: Check system compatibility and requirements",
                    "For SERIALS NOT CHANGING: Verify all steps were completed correctly",
                    "For other issues: Check the troubleshooting section",
                    "Contact support if problems persist"
                ]
            },
            {
                title: "Final Verification",
                description: "Verify that permanent spoofing is working correctly.",
                instructions: [
                    "Check that all hardware IDs have changed",
                    "Verify the spoofing is persistent across reboots",
                    "Test with the target game",
                    "Monitor for any detection or bans",
                    "Keep backup of original hardware IDs"
                ]
            }
        ]
    }
};

let currentProduct = null;
let currentStep = 0;
let completedSteps = [];
const productSelection = document.getElementById('product-selection');
const guideScreen = document.getElementById('guide-screen');
const completionScreen = document.getElementById('completion-screen');
const guideTitle = document.getElementById('guide-title');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const stepNumber = document.getElementById('step-number');
const stepTitle = document.getElementById('step-title');
const stepDescription = document.getElementById('step-description');
const instructionsList = document.getElementById('instructions-list');
const downloadSection = document.getElementById('download-section');
const downloadLinks = document.getElementById('download-links');
const stepWarning = document.getElementById('step-warning');
const warningText = document.getElementById('warning-text');
const validateBtn = document.getElementById('validate-btn');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const completedProduct = document.getElementById('completed-product');
const completionSummary = document.getElementById('completion-summary');
const restartBtn = document.getElementById('restart-btn');

document.addEventListener('DOMContentLoaded', function() {
    initializeProductSelection();
    initializeButtons();
});

function initializeProductSelection() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            productCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            currentProduct = this.dataset.product;
            setTimeout(() => {
                startGuide();
            }, 500);
        });
    });
}

function initializeButtons() {
    validateBtn.addEventListener('click', validateStep);
    nextBtn.addEventListener('click', nextStep);
    backBtn.addEventListener('click', goBack);
    restartBtn.addEventListener('click', restart);
}

function startGuide() {
    if (!currentProduct || !guides[currentProduct]) {
        console.error('Product not found');
        return;
    }
    
    currentStep = 0;
    completedSteps = [];
    productSelection.classList.remove('active');
    guideScreen.classList.add('active');
    guideTitle.textContent = guides[currentProduct].name;
    loadStep();
}

function loadStep() {
    const guide = guides[currentProduct];
    const step = guide.steps[currentStep];
    
    if (!step) {
        showCompletion();
        return;
    }
    
    stepNumber.textContent = String(currentStep + 1).padStart(2, '0');
    stepTitle.textContent = step.title;
    stepDescription.textContent = step.description;
    
    instructionsList.innerHTML = '';
    step.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });
    
    if (step.downloads && step.downloads.length > 0) {
        downloadSection.style.display = 'block';
        downloadLinks.innerHTML = '';
        step.downloads.forEach(download => {
            const linkDiv = document.createElement('a');
            linkDiv.href = download.url;
            linkDiv.target = '_blank';
            linkDiv.className = 'download-link';
            linkDiv.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <div>
                    <div class="download-name">${download.name}</div>
                    <div class="download-description">${download.description}</div>
                </div>
            `;
            downloadLinks.appendChild(linkDiv);
        });
    } else {
        downloadSection.style.display = 'none';
    }
    
    if (step.warning) {
        stepWarning.style.display = 'flex';
        warningText.textContent = step.warning;
    } else {
        stepWarning.style.display = 'none';
    }
    
    const progress = ((currentStep + 1) / guide.steps.length) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = `Step ${currentStep + 1} of ${guide.steps.length}`;
    
    validateBtn.style.display = 'block';
    validateBtn.disabled = false;
    validateBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20,6 9,17 4,12"/>
        </svg>
        Complete
    `;
    nextBtn.style.display = 'none';
}

function validateStep() {
    completedSteps.push(currentStep);
    validateBtn.disabled = true;
    validateBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20,6 9,17 4,12"/>
        </svg>
        Completed
    `;
    nextBtn.style.display = 'inline-flex';
}

function nextStep() {
    currentStep++;
    
    if (currentStep < guides[currentProduct].steps.length) {
        loadStep();
    } else {
        showCompletion();
    }
}

function showCompletion() {
    guideScreen.classList.remove('active');
    completionScreen.classList.add('active');
    completedProduct.textContent = guides[currentProduct].name;
    
    const summary = document.createElement('div');
    summary.innerHTML = '<h3>Completed Steps:</h3><ul></ul>';
    const ul = summary.querySelector('ul');
    
    guides[currentProduct].steps.forEach((step, index) => {
        const li = document.createElement('li');
        li.textContent = step.title;
        ul.appendChild(li);
    });
    
    completionSummary.innerHTML = summary.innerHTML;
}

function goBack() {
    if (currentStep > 0) {
        currentStep--;
        loadStep();
    } else {
        guideScreen.classList.remove('active');
        productSelection.classList.add('active');
        document.querySelectorAll('.product-card').forEach(card => {
            card.classList.remove('selected');
        });
        currentProduct = null;
    }
}

function restart() {
    completionScreen.classList.remove('active');
    productSelection.classList.add('active');
    currentProduct = null;
    currentStep = 0;
    completedSteps = [];
    document.querySelectorAll('.product-card').forEach(card => {
        card.classList.remove('selected');
    });
}
