# 🔐 Ethically Hacking My Samsung S25 Ultra

## 📱 Project Overview

This repository documents my hands-on ethical hacking project, where I assessed the **security posture of my Samsung S25 Ultra (non-daily-use device)**. The goal was to identify vulnerabilities in installed Android apps and system behavior through **static and dynamic analysis**, simulate potential attacks, and propose fixes in alignment with responsible disclosure principles.

🧪 **No malicious activity was performed — this project follows ethical hacking guidelines and was conducted for academic and professional skill-building purposes.**

---

## 🎯 Objectives

- Identify and exploit vulnerabilities in installed APKs using tools like Drozer, Frida, and MobSF.
- Understand how Android components (activities, permissions, WebViews) can be abused.
- Learn dynamic analysis via ADB and static inspection via Android Studio.
- Propose realistic security fixes to mitigate observed issues.

---

## 🛠️ Tools & Environment

| Tool | Purpose |
|------|---------|
| **Kali Linux (VM)** | Pentesting platform |
| **ADB (Wireless)** | Communication with target phone |
| **Drozer** | Component testing & dynamic analysis |
| **MobSF** | Static & dynamic APK scans |
| **Frida** | Runtime API hooking |
| **Android Studio** | Manifest & source code inspection |
| **jadx** | APK decompilation |
| **Samsung S25 Ultra** | Target device (non-primary) |

---

## 📂 Project Structure

```bash
Ethically_Hacking_S25Ultra/
│
├── webtoon_apk_analysis/             # Vulnerability report & PoC on WEBTOON app
│   ├── Android WebView Vulnerability Report - WEBTOON App.docx
│   ├── Dangerous Permission found in a apk file .png
│   ├── README.md                     # Detailed exploit steps
│
├── screenshots/                      # Terminal output & phone screenshots
│   ├── drozer_command_output.png
│   ├── webview_phishing_example.png
│
├── tools_setup/                      # Notes & setup for Drozer, Frida, MobSF
│   ├── drozer_install_guide.md
│   ├── mobsf_local_installation.md
│
└── README.md                         # ← You are here
