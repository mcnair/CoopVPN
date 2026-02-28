---
title: "100% Open Source"
layout: single
---

At LEAP we strongly believe in sharing of knowledge, there's no other way to develop code that LEAP uses other than open source, we'll forever keep our code open source, there will never be any secret sauce that LEAP employs in its stack, we believe that security by obscurity is a fallacy, we'll open source all our code except for "secrets/credentials" we want anyone to be able to replicate our stack, as part of this we'll always develop in the open and will try to remove any barriers to open collaborations to the extent that we'll mirror our code to capitalist entities like Github to ensure there's less friction for others to use our stack

All our new code will be licensed under the GPL license or licenses that are compatible with GPL, if we ever have to use MIT/BSD/Apache or other permissible license code we'll try our best to remove those dependencies and invest to create alternatives that are licensed under copy left

**after providing the above to an AI (Gemini 3 pro) it generated the following policy, i think this is a good starting point for us to review/refine it further**

---

## LEAP Open Source Policy

**Version 1.0**

<details>
<summary>First Draft (contains inline comments)</summary>
## 1. Philosophy & Manifesto

At LEAP, we reject the fallacy of "security by obscurity." We believe that software sovereignty relies on the freedom to inspect, modify, and replicate the systems we depend on.

- **No Secret Sauce:** Every line of code running in our stack, from the client interface to the backend infrastructure, is public.
- **Total Transparency:** We develop in the open. Our internal repositories *are* our public repositories.
- **Copyleft Maximalism:** We prioritize the collective good over proprietary gain. We aggressively prefer Copyleft licensing to ensure improvements are permanently returned to the commons.

*// cyberta: tbh, I like the prompt text more than this generated section*

*// this is another attempt:*

*At **LEAP**, we believe that software sovereignty is built on the freedom to inspect, modify, and replicate the systems we rely on.*

*We are committed to keeping all our code open, with the exception of sensitive information such as secrets and credentials. This transparency empowers others to understand and replicate our technology stack, fostering trust and cultivating a vibrant community of developers and users.*

*To uphold this philosophy, we will continuously develop in the open and collaborate on our independent **GitLab** instances, while also mirroring our code on big tech platforms like **GitHub**. This approach ensures autonomy, removes barriers, and enhances visibility, allowing anyone to engage with our projects and contribute to our shared goals. Together, we strive to advance the capabilities of open-source technology.*

## 2. Licensing Matrix

We employ a multi-license strategy to maximize freedom while ensuring reciprocity.

| Component                   | License          | Rationale                                                                                                                                                                                         |
|-----------------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **SaaS Backend / Server**   | **GNU AGPLv3**   | Ensures that any provider (including competitors) hosting our stack must release their modifications. This prevents the "cloud loophole" where SaaS providers use code without contributing back. |
| **Client Applications**     | **GNU GPLv3**    | Ensures that end-user software remains free. Any modified versions distributed to users must also be open source.                                                                                 |
| **Shared Libraries / SDKs** | **GNU LGPLv3**   | Allows developers to build tools upon our core libraries without being forced to open-source their *entire* application, provided they modify the LEAP library code itself only under open terms. |
| **Documentation**           | **CC-BY-SA 4.0** | Applies the same "share-alike" principles to our written knowledge.                                                                                                                               |

## 3. Dependency & Usage Policy

We actively curate our supply chain to align with our ideological goals.

- **Permissive License Phasing:** While we technically allow dependencies compliant with GPL (e.g., MIT, BSD, Apache 2.0), we view permissive licensing as a weakness that allows proprietary enclosure.
  - *Goal:* Where feasible, we will invest engineering resources to replace permissive dependencies with Copyleft equivalents or fork/maintain them under Copyleft terms.
- **Prohibited Licenses:** We strictly prohibit the use of:
  - Proprietary/Closed Source libraries.
  - "Source Available" licenses that restrict commercial use (e.g., BSL, SSPL, Commons Clause).
  - JSON License ("Good not Evil") or other non-standard fields.

## 4. Contribution Policy (DCO)

To minimize friction and avoid corporate legal barriers, we do **not** require a Contributor License Agreement (CLA). Instead, we use the **Developer Certificate of Origin (DCO) 1.1**.

By submitting a contribution (pull request, commit, patch) to LEAP, you certify the following via a `Signed-off-by` line in your commit message:

> **Developer Certificate of Origin 1.1**
>
> By making a contribution to this project, I certify that:
>
> (a) The contribution was created in whole or in part by me and I have the right to submit it under the open source license indicated in the file; or
>
> (b) The contribution is based upon previous work that, to the best of my knowledge, is covered under an appropriate open source license and I have the right under that license to submit that work with modifications, whether created in whole or in part by me, under the same open source license (unless I am permitted to submit under a different license), as indicated in the file; or
>
> (c) The contribution was provided directly to me by some other person who certified (a), (b) or (c) and I have not modified it.
>
> (d) I understand and agree that this project and the contribution are public and that a record of the contribution (including all personal information I submit with it, including my sign-off) is maintained indefinitely and may be redistributed consistent with this project or the open source license(s) involved.

**How to Sign Off:**  
Contributors must sign their commits using `git commit -s`.

- Example: `Signed-off-by: Jane Doe <jane.doe@example.com>`

## 5. Community & Mirroring

- **Canonical Source:** Our primary development occurs on our self-hosted instances to preserve independence.
- **Mirrors:** We push read-only mirrors to GitHub/GitLab to reach developers where they are, but we do not depend on their proprietary workflows for our CI/CD or issue tracking where possible.
- **Forking:** We encourage forking. If you run a LEAP instance, you are a partner, not a competitor. We only ask that you respect the AGPLv3 and share your improvements.

</details>
<details>
<summary>Second Draft (updates the Philosophy & Manifesto)</summary>
## 1. Philosophy & Manifesto

At **LEAP**, we believe that software sovereignty is built on the freedom to inspect, modify, and replicate the systems we rely on.

We are committed to keeping all our code open, with the exception of sensitive information such as secrets and credentials. This transparency empowers others to understand and replicate our technology stack, fostering trust and cultivating a vibrant community of developers and users.

To uphold this philosophy, we will continuously develop in the open and collaborate on our independent **GitLab** instances, while also mirroring our code on big tech platforms like **GitHub**. This approach ensures autonomy, removes barriers, and enhances visibility, allowing anyone to engage with our projects and contribute to our shared goals. Together, we strive to advance the capabilities of open-source technology.

> **Comments**
>
> jkito: the above section lgtm

## 2. Licensing Matrix

We employ a multi-license strategy to maximize freedom while ensuring reciprocity.

| Component                   | License          | Rationale                                                                                                                                                                                         |
|-----------------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **SaaS Backend / Server**   | **GNU AGPLv3**   | Ensures that any provider (including competitors) hosting our stack must release their modifications. This prevents the "cloud loophole" where SaaS providers use code without contributing back. |
| **Client Applications**     | **GNU GPLv3**    | Ensures that end-user software remains free. Any modified versions distributed to users must also be open source.                                                                                 |
| **Shared Libraries / SDKs** | **GNU LGPLv3**   | Allows developers to build tools upon our core libraries without being forced to open-source their *entire* application, provided they modify the LEAP library code itself only under open terms. |
| **Documentation**           | **CC-BY-SA 4.0** | Applies the same "share-alike" principles to our written knowledge.                                                                                                                               |

> **Comments**
>
> jkito: the above section lgtm

## 3. Dependency & Usage Policy

We actively curate our supply chain to align with our ideological goals.

- **Permissive License Phasing:** While we technically allow dependencies compliant with GPL (e.g., MIT, BSD, Apache 2.0), we view permissive licensing as a weakness that allows proprietary enclosure.
  - *Goal:* Where feasible, we will invest engineering resources to replace permissive dependencies with Copyleft equivalents or fork/maintain them under Copyleft terms.
- **Prohibited Licenses:** We strictly prohibit the use of:
  - Proprietary/Closed Source libraries.
  - "Source Available" licenses that restrict commercial use (e.g., BSL, SSPL, Commons Clause).
  - JSON License ("Good not Evil") or other non-standard fields.

> **Comments**
>
> jkito: i find the section heading unclear, it doesn’t mention anything about licenses while the section lists out what licenses we prefer and what we restrict, i’d rename the heading to “something_else“

## 4. Contribution Policy (DCO)

To minimize friction and avoid corporate legal barriers, we do **not** require a Contributor License Agreement (CLA). Instead, we use the **Developer Certificate of Origin (DCO) 1.1**.

By submitting a contribution (pull request, commit, patch) to LEAP, you certify the following via a `Signed-off-by` line in your commit message:

> **Developer Certificate of Origin 1.1**
>
> By making a contribution to this project, I certify that:
>
> (a) The contribution was created in whole or in part by me and I have the right to submit it under the open source license indicated in the file; or
>
> (b) The contribution is based upon previous work that, to the best of my knowledge, is covered under an appropriate open source license and I have the right under that license to submit that work with modifications, whether created in whole or in part by me, under the same open source license (unless I am permitted to submit under a different license), as indicated in the file; or
>
> (c) The contribution was provided directly to me by some other person who certified (a), (b) or (c) and I have not modified it.
>
> (d) I understand and agree that this project and the contribution are public and that a record of the contribution (including all personal information I submit with it, including my sign-off) is maintained indefinitely and may be redistributed consistent with this project or the open source license(s) involved.

**How to Sign Off:**  
Contributors must sign their commits using `git commit -s`.

- Example: `Signed-off-by: Jane Doe <jane.doe@example.com>`

> **Comments**
>
> jkito: the very first line can be simplified to just: “We require contributions to our project to use the  **Developer Certificate of Origin (DCO) 1.1**. and instead of quoting the agreement text here we just link to the website (on a sidenote: we need CI to fail when DCO is not added)

## 5. Community & Mirroring

- **Canonical Source:** Our primary development occurs on our self-hosted GitLab instance to preserve independence.
- **Mirrors:** We mirror our repositories to GitHub/GitLab.com to reach developers where they are, but we do not depend on their proprietary workflows for our CI/CD or issue tracking where possible.
- **Forking:** We encourage forking. If you run a LEAP instance, you are a partner, not a competitor. We only ask that you respect the AGPLv3 and share your improvements.

> **Comments**
>
> jkito: above section lgtm

</details>
