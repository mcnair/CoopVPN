---
title: "CoopVPN Policy"
layout: single
---


### The Prime Directive: You Are Not a Product

At LEAP, privacy is not a compliant checkbox; it is the fundamental architecture of our service. We reject the surveillance capitalism model. We do not sell your data, we do not mine your behavior for insights, and we do not track you across the web.

### The "No-Logs" Technical Guarantee

We operate under a strict No-Logs Policy. This is not just a promise; it is an engineering constraint. We have designed our Platform and Client backend to ensure that we technically cannot view your activity even if compelled to do so.

- No IP Logging: We do not record, store, or analyze incoming IP addresses. Your connection data is discarded immediately after the handshake.
- No Activity Tracking: We do not log which buttons you click, how long you stay on a page, or how you interact with the software. There is no behavioral analytics engine (e.g., Google Analytics, Mixpanel) running on our stack.
- No Metadata Retention: We do not store metadata regarding when you access the service or how much data you transfer, beyond the absolute minimum required to prevent abuse (e.g., ephemeral rate limiting in memory).

If a government or third party requests your usage logs, our answer is simple: We cannot provide what we do not possess.

### Data We Actually Collect

(needs a closer look)

cyberta: we may want to distinguish for the different services, e.g. for the website, maybe for a forum and for the VPN service?  
kwadro: very good point there! How are we going to a/b test?

To provide the Service, we process only the absolute minimum required data:

- Account Credentials: We store a hashed (irreversible) version of your password and your username/email to facilitate login.
- Encrypted Content: The data you explicitly save within the LEAP SaaS is stored encrypted. We treat this as a "blob"; we do not index or scan the contents of your work.
- Session Cookies: We use a single, temporary session cookie solely to keep you logged in. We do not use persistent tracking cookies, pixels, or fingerprinting scripts. technology
- // currently we don’t use session cookies at all

### Financial Transactions (The Transparency Clause)

While we maintain zero knowledge of your usage, we operate in a capitalist economy and must process payments to sustain our infrastructure. We use third-party processors to handle this isolation.

- Payment Processors: We accept payments via <paymen_processor> and <payment_processor>.
- What They See: When you pay, you are interacting directly with the processor's interface. They will see your financial details, legal name, and billing address. Their privacy policies apply during the transaction.
- What We See: LEAP never sees or stores your credit card number or bank account details. We receive only a transaction confirmation token (e.g., Transaction ID: ABC-123) and the email address associated with the payment to link it to your LEAP account pro-rata.
- Data Separation: We deliberately keep payment data (the ledger of who paid) logically separated from usage data (what you do in the app).

### Zero Dark Patterns Guarantee

We consider "Dark Patterns"—design tricks that confuse or trap users—to be unethical.

- Easy Cancellation: cancelling your account is as easy, if not easier, than signing up. There are no retention flows, "are you sure?" guilting screens, or phone calls required.
- No Hidden Opt-Ins: We never pre-check boxes for newsletters or data sharing.
- Exportability: Consistent with our Open Source Policy, you may export your data at any time in standard, open formats without restriction.

// cyberta: what would that mean in terms of the VPN service? Export the openvpn configs for example? we could offer that as an option, but it’s not there yet.

// jkito: i concur, the user should have the right to access the gateway in anyway they want

### Third-Party Requests

Because we do not log IP addresses or usage activity, we are functionally unable to comply with subpoenas requesting user activity logs. If we are legally compelled to turn over the data we do have (payment email or account existence), we will notify the user immediately unless strictly prohibited by a valid gag order.

### Changes to This Policy

We will never quietly weaken this policy. Any changes to our privacy architecture will be announced publicly on our primary repository. As open source software, you can inspect our code to verify that our logging practices match this policy.
