const guides = {
    r6: {
        name: "R6 Siege - Crusader",
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
                ],
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
    fortnite: {
        name: "Fortnite - Ultimate",
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
                ],
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
                ],
                downloads: [
                    {
                        name: "Action! Game Recorder",
                        url: "https://actionrecorder.com/fr",
                        description: "Professional game recording software"
                    }
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
                    "Ensure Action! is running in the background",
                    "Launch Fortnite Ultimate",
                    "Test all functionality",
                    "Verify Action! is recording properly",
                    "Check for any conflicts or errors",
                    "Monitor system performance"
                ]
            }
        ]
    },
    bo6: {
        name: "Black Ops 6 - Advanced Configuration",
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
                ],
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
