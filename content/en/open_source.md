---
title: "100% Open Source"
layout: single
---


*CoopVPN techonolgy stack is* *developed by the LEAP Encryption Access Project team. Both the client and the platform code is 100% open source.*

## 1. Philosophy & Manifesto

At **Coop VPN**, we believe that software sovereignty is built on the freedom to inspect, modify, and replicate the systems we rely on.

We are committed to keeping all our code open, with the exception of sensitive information such as secrets and credentials. This transparency empowers others to understand and replicate our technology stack, fostering trust and cultivating a vibrant community of developers and users.

To uphold this philosophy, we will continuously develop in the open and collaborate on our independent **GitLab** instances, while also mirroring our code on big tech platforms like **GitHub**. This approach ensures autonomy, removes barriers, and enhances visibility, allowing anyone to engage with our projects and contribute to our shared goals. Together, we strive to advance the capabilities of open-source technology.

## 2. Licensing Matrix

We employ a multi-license strategy to maximize freedom while ensuring reciprocity.

| Component                   | License          | Rationale                                                                                                                                                                                         |
|-----------------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **SaaS Backend / Server**   | **GNU AGPLv3**   | Ensures that any provider (including competitors) hosting our stack must release their modifications. This prevents the "cloud loophole" where SaaS providers use code without contributing back. |
| **Client Applications**     | **GNU GPLv3**    | Ensures that end-user software remains free. Any modified versions distributed to users must also be open source.                                                                                 |
| **Shared Libraries / SDKs** | **GNU LGPLv3**   | Allows developers to build tools upon our core libraries without being forced to open-source their *entire* application, provided they modify the LEAP library code itself only under open terms. |
| **Documentation**           | **CC-BY-SA 4.0** | Applies the same "share-alike" principles to our written knowledge.                                                                                                                               |

## 3. Licensing Policy for Dependencies

We actively curate our supply chain to align with our ideological goals.

- **Permissive License Phasing:** While we technically allow dependencies compliant with GPL (e.g., MIT, BSD, Apache 2.0), we view permissive licensing as a weakness that allows proprietary enclosure.
  - *Goal:* Where feasible, we will invest engineering resources to replace permissive dependencies with Copyleft equivalents or fork/maintain them under Copyleft terms.
- **Prohibited Licenses:** We strictly prohibit the use of:
  - Proprietary/Closed Source libraries.
  - "Source Available" licenses that restrict commercial use (e.g., BSL, SSPL, Commons Clause).
  - JSON License ("Good not Evil") or other non-standard fields.

## 4. Contribution Policy (DCO)

We require contributions to our project to use the \[**Developer Certificate of Origin (DCO) 1.1\](**<https://developercertificate.org/>**)**

By submitting a contribution (pull request, commit, patch) to LEAP, you certify the following via a `Signed-off-by` line in your commit message:

**How to Sign Off:**  
Contributors must sign their commits using `git commit -s`.

- Example: `Signed-off-by: Jane Doe <jane.doe@example.com>`

## 5. Community & Mirroring

- **Canonical Source:** Our primary development occurs on our self-hosted GitLab instance to preserve independence.
- **Mirrors:** We mirror our repositories to GitHub/GitLab.com to reach developers where they are, but we do not depend on their proprietary workflows for our CI/CD or issue tracking where possible.
- **Forking:** We encourage forking. If you run a LEAP instance, you are a partner, not a competitor. We only ask that you respect the AGPLv3 and share your improvements.
