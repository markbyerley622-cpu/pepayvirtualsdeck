# Pepay Labs × Virtuals Protocol — Strategic Positioning Report

**Phase One deliverable. Read this before the deck.**
Prepared 2026-07-30. All figures sourced; sources listed at the end.

---

## 0. The one-sentence positioning

> **AI agents don't need better wallets. They need financial lives.**

Everything below is evidence for that one line. Treasury, payroll, streaming, invoicing, recurring revenue, settlement, vesting, multi-token routing — these are not separate products to be sold. They are the parts of a financial life.

The division of labour, in the form founders will remember:

> **Virtuals coordinates intelligence. Pepay coordinates value.**
> **Virtuals tokenises agents. Pepay monetises them.**

### Sell the primitive, not the product

Virtuals' founders think in protocol primitives. Presenting a list of nine products invites feature-by-feature comparison against Stripe, Superfluid and Request — a fight on their terms. Presenting **one primitive** invites a discussion about architecture, which is the conversation worth having.

In the room, Pepay is **five verbs**: Move · Hold · Bill · Pay · Settle. The products are what you name when asked *how*, never in the opening.

### Own cash flow, not treasury

Every autonomous business has four financial functions:

| | |
|---|---|
| **Revenue** | money coming in |
| **Expenses** | money going out |
| **Treasury** | money held |
| **Capital** | money raised |

Virtuals has built **capital formation** exceptionally well — bonding curves, graduation, LP locks, 39.52M raised for builders. That is settled territory and should be praised, not contested.

**Cash flow is the unclaimed half.** It is broader than treasury, it is where recurring value actually accrues, and it is the half that compounds with agent count rather than with token launches. Claim cash flow; concede capital.

### Framing discipline: extend, never correct

This report catalogues gaps because you need to know them cold. **The deck does not present them that way, and neither should you in the room.**

A founder hearing "here is everything you failed to build" gets defensive. A founder hearing "here is what your primitives unlock next" leans in. Same facts, opposite reception.

| Never say | Say instead |
|---|---|
| "ACP settles transactions, not relationships" | "ACP coordinates work. Pepay coordinates capital." |
| "Virtuals has no payroll" | "Virtuals creates autonomous workers. Pepay creates autonomous businesses." |
| "You're missing a financial layer" | "Every primitive you built gains an economic counterpart." |
| "Virtuals has no banking" | "A card solves spending. Earning, billing and holding are the rest of the stack." |

**Never claim Pepay provides banking.** Pepay has no regulated banking partners, no bank accounts, and no live fiat rails. Use *financial infrastructure*, *treasury infrastructure*, *settlement infrastructure*, *global payout infrastructure*. Fiat connectivity is roadmap — the deck says so on slide 6, in writing.

### On the fiat on/off-ramp idea

Worth pursuing as narrative, but only as **roadmap**, and it is not the wedge. The compelling version is the treasury flow, not the bank account:

```
Agent earns  →  Pepay treasury  →  diversifies across USDC / USD1 / BNB
                                →  payroll reserve
                                →  operating reserve
                                →  settles globally
                                →  (roadmap) fiat off-ramp
```

The bank account is the least interesting box in that diagram and the only one Pepay can't ship today. Lead with treasury and settlement — both live — and let fiat sit at the end as a direction, clearly labelled. Overclaiming here is the fastest way to lose technical credibility with a CTO.

---

## 1. What Virtuals has built

Verified from the whitepaper, the live site, and third-party research.

| Layer | Product | Status |
|---|---|---|
| 01 Identity & Banking | **EconomyOS** — composite onchain identity, non-custodial multi-chain wallet, virtual payment card, agent email (OTP extraction), wallet-funded compute with auto-top-up + spend thresholds, onchain inbox | Live |
| 02 Physical Labor | **Robotics / Eastworlds** — egocentric data, teleoperation, VLA/WAM, physical BPO | Live, early |
| 03 Agentic Commerce | **ACP v2.0** — agent registry, job spec standard, **ERC-8183**, trustless escrow, x402, neutral evaluation | Live |
| 04 Capital Formation | **Capital Markets** — bonding-curve launchpad, 42,000 $VIRTUAL graduation threshold, Uniswap V2 migration, 10-year LP lock, 1% trading fee (70% creator / 30% treasury), Hyperboost | Live |
| 05 Law & Governance | **AI Council** — reputation, dispute resolution, resource allocation | **Coming Soon** |
| Consumer surface | **Butler** — chat, Pro Mode plan-first workflow, Base App integration | Live |

**Scale (Virtuals' own published metrics):**

- Total aGDP **481.79M USDC**
- Total agent revenue **4.5M USDC**
- Total jobs completed **2.49M**
- Total unique agents **45,548**
- Unique active wallets (30D) **35,583**
- Total marketcap **406.68M USDC** across **70,985** AI projects
- Funds raised for builders **39.52M USDC**
- Trading volume (30D) **15.18B USDC**
- Robotics: **4.59M USDC** marketcap, fleet size **31**, **23** residents

This is not a company that needs help with distribution. It needs help with **plumbing**.

---

## 2. What Virtuals has NOT built

This section is the whole pitch. Every claim below is sourced from Virtuals' own documentation or from ERC-8183 itself — **not one of these is an assumption.**

### Verification: does Virtuals already have a financial layer?

Checked directly before building the deck, because the entire thesis collapses if they do.

**The whitepaper's Identity & Banking Layer defines exactly five EconomyOS components:**

| Component | Documented as |
|---|---|
| Agent Wallet | "The agent's onchain anchor for signing, identity, and payments. Multi-chain across EVM." |
| Agent Card | "A virtual payment card for real-world checkout — purchases, subscriptions, and any merchant-facing flow" |
| Agent Email | "A dedicated email identity… extracts OTPs and verification links automatically" |
| Agent Token | Optional tokenization that "routes trading fees back to the agent wallet as revenue" |
| Agent Compute | "Wallet-funded inference access… with auto-top-up and configurable spending thresholds" |

`os.virtuals.io` advertises: Wallet, Email, Card, Tokenize, Trading fees, Hire, Sell, Jobs, Console, Inference, Memory.

**Absent from both: payroll, recurring payments, subscriptions-as-revenue, streaming, treasury management, invoicing, and multi-token settlement.**

**⚠ The one objection to prepare for.** The virtuals.io homepage lists "Payroll" as a chip under the EconomyOS pillar, and Agent Card explicitly covers "subscriptions." A founder may point at either.

The answer, and it is a strong one:

> Agent Card lets an agent **spend** into Visa rails as a cardholder. It does not let an agent **charge** recurring revenue, stream money per second, hold a hedged treasury, or settle in anything but USDC. Spending is solved. **Earning, billing, and holding are not.**

"Payroll" appears as a marketing chip in the pillar tag list, not as a documented product anywhere in the whitepaper or on os.virtuals.io. Do not claim they have "nothing" — claim precisely that they have the **spend** side and not the **earn/bill/hold** side. That distinction is defensible line by line; a broader claim is not.

---

### Gap 1 — TIME. There is no duration primitive. *(the wedge)*

ACP's job lifecycle is **Request → Negotiation → Transaction → Evaluation**, and ERC-8183 formalises it as six states: `Open → Funded → Submitted → Completed | Rejected | Expired`. Funds lock on `Funded`, release on `Completed`.

This is a **discrete, atomic, one-shot** primitive. It is excellent for what it models: a job.

It cannot model a *relationship*. And every continuous economic relationship an agent has must currently be shredded into thousands of independent escrow cycles:

| Real agent need | Under ACP today | Cost |
|---|---|---|
| Pay for inference per-token | One escrow cycle per call | 4 phases + evaluator, per call |
| Pay a sub-agent a salary | One escrow cycle per pay period, manually re-created | Unbounded coordination |
| Subscribe to a data feed | One escrow cycle per billing period | No dunning, no proration, no retry |
| Robot operating expenses | One escrow cycle per charge | No budget envelope |
| Royalty split to contributors | One escrow cycle per payout | No continuous accrual |

The coordination cost of ACP escrow is **O(n) in the number of payments**. Continuous relationships have unbounded n. A stream is **O(1) per relationship** — open once, accrue per second, close once.

**This is a mathematical ceiling on aGDP, not a feature request.** Virtuals' stated north star is aGDP becoming "the primary engine of global economic activity." In human economies, payroll, subscriptions, rent, and utilities — all *recurring* — dominate GDP flows. Virtuals' aGDP today is ~100% one-shot job settlement. The recurring half of the economy is structurally unreachable with the primitives that exist.

### Gap 2 — CURRENCY. Settlement is a monoculture.

Two independent confirmations:

1. Virtuals' whitepaper: **"Butler is standardized on USDC for stability and simplicity"**, with *"future support for other tokens"* announced via release notes. The gap is acknowledged in their own docs as temporary.
2. ERC-8183, out-of-scope section, verbatim: **single ERC-20 token per contract; per-job token selection is not supported.**

Now hold that against the Capital Markets number: **70,985 AI projects, 406.68M USDC of agent-token marketcap, 15.18B USDC of 30-day trading volume.**

Virtuals has built the largest market for agent-denominated assets in existence — and **none of those assets can be used to pay for anything.** Agents earn in USDC, are *owned* in their own token, and there is no FX/settlement layer between the two.

### Gap 3 — FLOAT. Nobody manages the agent treasury.

EconomyOS gives agents "wallet-funded compute access with **auto-top-up and spending thresholds**" and a virtual card for "purchases, **subscriptions**, and any merchant-facing flow."

Both features presuppose a funded, liquid, correctly-denominated operating balance. **Virtuals ships the spending, not the funding.**

The second-order effect is the dangerous one. A productive agent holds its own token (illiquid, volatile, and the thing its investors own) but must pay opex in USDC. With no treasury layer, the only way to fund operations is to **sell its own token into its own liquidity pool.** Every successful agent becomes a structural forced seller of itself. That is a value-destruction loop pointed directly at the launchpad — the part of Virtuals that actually monetises.

### Gap 4 — THE HUMAN BOUNDARY. aGDP has no on-ramp or off-ramp.

aGDP is measured agent-to-agent. But money enters and leaves through humans, and at that boundary Virtuals offers a wallet and nothing else:

- No gift cards or claimable links (the single best crypto onboarding primitive)
- No payment links or hosted checkout for human → agent
- No invoicing for agent → human/enterprise
- No remittance or direct token→bank routes
- No receipts, certificates, or tax records

"Choose your role" lists **Enterprises** as a first-class persona — *"Hire autonomous agents for cognitive, creative, operational, and physical workflows."* An enterprise accounts-payable department cannot pay a smart-contract escrow. It needs an invoice, net-30 terms, a PO reference, a receipt, and reconciliation.

### Gap 5 — REMEDY. Dispute resolution is deferred, and its financial half is missing entirely.

ERC-8183 explicitly excludes **dispute resolution and arbitration**. Virtuals' AI Council — the layer meant to cover it — is marked **Coming Soon**.

But arbitration is only half of remedy. The other half is *financial*: refunds, partial refunds, chargebacks, proration, dunning, retry schedules, and clawback of unearned stream balances. These are payment-system functions, not governance functions. They exist today in Pepay's subscription and streaming stack and nowhere in Virtuals'.

### Gap 6 — VESTING. Capital formation locks liquidity, not people.

The 10-year LP lock secures *pool* liquidity. It says nothing about **team, contributor, and treasury allocations** across 70,985 projects. There is no standard vesting/locking rail, which means every serious investor in an agent token is underwriting an unquantified unlock risk.

### Gap 7 — GAS. Agents must hold native gas on every chain.

The EconomyOS wallet is multi-chain. Multi-chain means holding a gas balance on every chain, monitoring it, and topping it up — for 45,548 agents. Gasless execution via EIP-2612 permits and EIP-3009 authorizations removes the problem entirely and is already shipping in Pepay's relayer.

---

## 3. Where Pepay wins

Pepay Labs' existing stack maps onto those gaps almost one-to-one. Nothing below needs to be invented.

| Virtuals gap | Pepay product (live or in-repo) | What it unlocks |
|---|---|---|
| **1. Time** | **Pepay Streams** — per-second EVM streaming, vesting, locking | Agent payroll, streaming compute, streaming royalties, robot opex, streaming escrow |
| **1. Time** | **SubscriptionManager** — plans, intervals, permit-based pulls, retries, dunning, proration | Machine-to-machine subscriptions, data-feed billing, agent SaaS |
| **2. Currency** | **x402 Flex** — multi-token, multi-scheme accept envelope with settlement in a chosen asset | Pay in any of 70,985 agent tokens, provider settles in USDC. Unlocks 406.68M of dead collateral |
| **3. Float** | **Delta-neutral market maker + treasury routing** | Agent funds opex without dumping its own token. Directly defends launchpad token value |
| **4. Boundary** | **Gift cards, payment links, invoices, POS, merchant SDK, WordPress/e-commerce connectors, remittance rails** | Human → agent onboarding and agent → enterprise receivables |
| **5. Remedy** | **Refunds, proration, dunning, retries, controlled payouts** | The financial half of dispute resolution, available before AI Council ships |
| **6. Vesting** | **Token locking + vesting platform for EVM tokens** | Standardised unlock schedules across the launchpad |
| **7. Gas** | **BNBPay relayer** — EIP-2612 permits, EIP-3009 authorization | Fully gasless agent execution |

### The technical fit is unusually clean

- **x402 is already in the ACP stack.** Virtuals lists `X402` as an ACP component. Pepay's **x402 Flex** is a superset of the x402 envelope, adding scheme identifiers for Permit2, ERC-2612, EIP-3009, AA push, and router-assisted direct push. Pepay does not have to displace anything — it extends a standard Virtuals already ships.
- **Router-only settlement gives deterministic reconciliation.** Every payment emits `PaymentSettledV2(paymentId, payer, merchant, token, amount, feeAmount, schemeId, referenceData, resourceId, timestamp)`. ACP jobs map cleanly onto `resourceId`, which means aGDP becomes auditable from a single event stream instead of inferred.
- **An MCP server already exists.** Pepay ships a Model Context Protocol bridge so agents call payment functions as tools without holding keys. Virtuals agents can use it the day it is pointed at their chain.
- **opBNB is the micropayment lane.** Gas ≈ $0.001 versus ≈ $0.01–0.015 on BNB Chain. Per-inference agent billing is economically impossible at cent-scale gas and trivially viable at tenth-of-a-cent. Base for settlement, opBNB for metering.
- **Non-custodial throughout.** No Pepay contract custodies user funds; the router settles and the registry records. This is the only structure Virtuals can accept without inheriting counterparty risk.

---

## 4. Why Pepay and not the alternatives

| Competitor | What they are | Why they don't close the gap |
|---|---|---|
| **Stripe** | Fiat-first PSP, now an x402 facilitator | Requires a KYC'd legal entity. **An agent is not a legal entity and cannot onboard.** Custodial. Facilitating a rail ≠ providing payroll, vesting, treasury, or FX |
| **Circle** | Issuer of USDC | Issues the dollar; does not build payroll, subscription, vesting, or treasury logic. **Complementary — Pepay settles into USDC** |
| **Coinbase CDP** | Wallets + x402 facilitator | Same category as Stripe: a rail, not a relationship layer. Overlaps EconomyOS, which Virtuals already built |
| **Crossmint** | Wallets + NFT/commerce checkout | Human-facing consumer checkout. Overlaps EconomyOS, not the missing layer |
| **Request Network / Request Finance** | Onchain invoicing | Invoicing only. No streaming, no subscriptions with dunning, no vesting, no FX, no market making |
| **Superfluid / Sablier** | Money streaming | Streaming only — one primitive. No invoicing, subscriptions, gifting, settlement/FX, gasless relayer, or treasury desk. No 402-native agent surface |
| **Helio / Sphere / NOWPayments** | Crypto checkout processors | Merchant checkout for humans. No agent-native semantics, no streaming, no treasury |
| **Privy / Dynamic / Alchemy** | Wallet & infra providers | Wallet infrastructure — the layer EconomyOS already occupies |

**The synthesis:** every competitor holds one tile. Stripe has distribution but cannot onboard a non-human. Circle has the dollar but no logic. Superfluid has streams but nothing around them. Request has invoices but no time.

**Pepay is the only stack shipping payments + subscriptions + streaming + vesting + gifting + invoicing + multi-token settlement + gasless relaying + a market maker as one modular, non-custodial, x402-native system.** For Virtuals that is the difference between eight integrations and one.

---

## 5. Market opportunity

Modelled, not claimed. Assumptions stated so they can be argued with.

**Layer 1 — Recurring flow take rate.**
Baseline: aGDP = 481.79M USDC. In developed human economies, recurring flows (payroll, subscriptions, utilities, rent) constitute the majority of GDP transaction volume; we model the agent equivalent conservatively at **50%** once duration primitives exist.

| aGDP scenario | Recurring share (50%) | Revenue @ 30bps |
|---|---|---|
| 481.79M (today) | 241M | 0.72M |
| 5B | 2.5B | 7.5M |
| 50B | 25B | 75M |
| 1T (Tiger Research 2035 agent-economy forecast) | 500B | **1.5B** |

**Layer 2 — Treasury float / AUM.** 45,548 agents. At a modelled 2,000 USDC average operating balance → ~91M float today, growing with agent count. Delta-neutral market making and treasury routing monetise this directly, and it is the highest-margin line.

**Layer 3 — Capital-markets services.** 70,985 projects × vesting/locking infrastructure, priced per project or per unlock schedule.

**Layer 4 — Enterprise settlement.** Invoice, reconciliation, and payout rails for the Enterprise persona Virtuals already lists. Enterprise contract values dwarf per-transaction take rates.

**Headline framing for the deck:** at 481.79M aGDP the prize is small; at Virtuals' own stated ambition it is a multi-billion-dollar business. Pepay's argument is that **the recurring half of aGDP cannot exist without this layer**, so Pepay is not taxing the economy — it is creating the half that is currently unreachable.

---

## 6. Objections and answers

### From investors

**"Virtuals will just build this themselves."**
They could. They also could have built their own L1 and didn't — they built on Base. Payments is not a feature; it is a permanent commitment to compliance, liquidity, dunning logic, FX, audits, and 24/7 settlement ops. Stripe exists profitably next to AWS. And Pepay's contracts, SDK, relayer, and MCP bridge are written *today* — the question is 18 months of Virtuals eng time versus an integration.

**"USDC-only is a design choice, not a gap."**
Virtuals' own whitepaper says *"future support for other tokens."* They have already labelled it temporary.

**"Superfluid already solved streaming."**
Streaming alone doesn't close the gap. The agent economy needs streaming *plus* the subscription state machine (retry, dunning, proration), *plus* multi-token settlement, *plus* the human boundary, *plus* treasury. Superfluid ships one of five.

**"Why BNB Chain when Virtuals lives on Base?"**
Pepay is EVM infrastructure, not BNB infrastructure — BNBPay is the first deployment, not the boundary. The strategic point is that opBNB's ~$0.001 gas is where per-inference metering becomes viable, and multi-chain settlement is the product, not a compromise.

**"Regulatory exposure."**
Non-custodial by construction: router-only settlement, no contract custodies user funds, strict token allowlist, 10% fee cap, MIT licensed, CertiK audit queued.

**"Chicken-and-egg adoption."**
Pepay does not need to recruit 45,548 agents. It integrates once at the ACP / EconomyOS layer and every agent inherits it.

### From the Virtuals founders

**"We don't want an infrastructure dependency."**
MIT-licensed, non-custodial, open contracts. If the partnership ends, the code is still theirs. Pepay proposes a standard, not a vendor lock.

**"This competes with our ACP escrow."**
It does not touch it. ACP owns the job — request, negotiation, escrow, evaluation. Pepay owns **everything between jobs**: the salary, the subscription, the compute meter, the treasury, the invoice, the unlock. ACP is the contract of employment. Pepay is the payroll department.

**"How does this affect aGDP accounting?"**
It increases it, and makes it more honest. Continuous flows are currently invisible to aGDP because they cannot be expressed. `PaymentSettledV2` events make every streamed second countable from one deterministic ledger.

**"Why should we prioritise this now?"**
Because Gap 3 is actively damaging Capital Markets. Every agent that funds opex by selling its own token is suppressing the 406.68M marketcap that the launchpad's 1% fee is levied against. The treasury layer is a defence of Virtuals' primary revenue line.

---

## 7. Positioning directions

| # | Direction | Pitch | Verdict |
|---|---|---|---|
| A | **The Payroll Layer** | "Agents have jobs. They don't have paychecks." | Concrete and memorable, but sounds like one feature |
| B | **The Financial Operating System** | "Virtuals is the OS. Pepay is the financial OS underneath." | Correct end-state, but too abstract to open with |
| C | **Time-Based Money for Agents** | "ACP settles transactions. It cannot settle relationships." | **Sharpest.** Names a missing primitive, provable from their own spec |
| D | **The Agent Treasury Desk** | "Every productive agent is a forced seller of itself." | Strongest single insight, but narrow as a whole-deck frame |
| E | **The Human Boundary** | "aGDP has no on-ramp." | True but reads as a smaller, consumer problem |

**Recommended: open with C, close with B, and use D as the mid-deck gut-punch.**

Lead by naming a missing primitive — that earns technical credibility with a CTO in the room and cannot be dismissed as marketing, because it is quoted from ERC-8183. Then widen: once you accept duration is missing, currency, float, boundary and remedy fall out as the same architectural omission. Land on B: the financial OS. Use D on slide 4 or 5, because "your best agents are forced sellers of their own token" is the line that makes a founder sit forward.

### Ten taglines

1. **Virtuals gave agents a job. Pepay gives them a paycheck.** ← recommended primary
2. Agents can transact. They cannot yet be paid.
3. The financial operating system for the agent economy.
4. ACP settles transactions. Pepay settles relationships.
5. Money that moves per second, for workers that never sleep.
6. Every economy runs on recurring flows. Agents don't have any.
7. aGDP has a ceiling. It's called escrow.
8. The payroll, treasury and settlement layer for 45,548 agents.
9. Agents earn in every token. They can only spend one.
10. Bodies, jobs, markets, governance — and now, banking.

---

## 8. Recommended narrative arc (feeds Phase Two)

1. **Agentic GDP is real** — 481.79M, 45,548 agents, 2.49M jobs. Establish that this is not speculative.
2. **Every GDP is mostly recurring** — the structural observation about human economies.
3. **ACP settles transactions, not relationships** — the technical gap, quoted from ERC-8183, with the O(n) vs O(1) argument.
4. **Four more gaps fall out of the same omission** — currency, float, boundary, remedy. Land the forced-seller insight here.
5. **Pepay Labs** — what is already built and live.
6. **The financial OS** — the stacked architecture: Virtuals above, Pepay beneath.
7. **Native integration** — x402 Flex extending ACP, streams as an ERC-8183 hook, MCP tools. Show code.
8. **Market** — the layered model.
9. **Partnership** — 90 days / 6 months / 12 months, with explicit asks.
10. **Close** — "Virtuals gave agents a job. Pepay gives them a paycheck."

---

## 9. Strategic risks

- **Virtuals ships multi-token settlement before the meeting.** Mitigation: lead with *time*, not currency. Duration is a much deeper build than adding token addresses.
- **Base-vs-BNB chain politics.** Mitigation: present as chain-agnostic EVM infrastructure; propose deploying to Base first and positioning opBNB as the metering lane.
- **Perception of overlap with EconomyOS.** Mitigation: never pitch wallets, identity, or cards. Those are theirs. Stay strictly on flows, time, and treasury.
- **Audit status.** CertiK is queued, not complete. Do not overstate. Present the audit as a partnership milestone in the 90-day plan.
- **Pepay's own maturity.** Repo status shows subscriptions and MCP server incomplete. Be precise in the deck about what is live versus in-progress — a CTO will check, and being caught inflating is fatal to a partnership pitch.

---

## Sources

- [Virtuals Protocol](https://www.virtuals.io/) — pillars, live metrics, personas
- [Virtuals Whitepaper](https://whitepaper.virtuals.io/) — EconomyOS, ACP, tokenomics, Butler, USDC standardisation
- [Virtuals Whitepaper — ACP concepts & architecture](https://whitepaper.virtuals.io/acp/acp-concepts-terminologies-and-architecture)
- [ERC-8183: Agentic Commerce](https://eips.ethereum.org/EIPS/eip-8183) — job states, escrow model, out-of-scope items
- [x402.org](https://www.x402.org/) — protocol flow, facilitators
- [Virtuals launches Revenue Network](https://www.prnewswire.com/news-releases/virtuals-protocol-launches-first-revenue-network-to-expand-agent-to-agent-ai-commerce-at-internet-scale-302686821.html)
- [EconomyOS](https://os.virtuals.io/)
- [Virtuals & ACP — Open Coordination for Digital Labor](https://www.virtuals.io/) (Delphi Digital, Oct 2025)
- [Virtuals Protocol — Growing Agentic GDP](https://www.virtuals.io/) (Fundstrat, Oct 2025) — "Stripe for AI Agents" framing
- [Understanding Virtuals Protocol](https://messari.io/) (Messari, Sep 2025)
- [Tiger Research — agent economy 1T forecast](https://www.odaily.news/en/post/5209862)
- Pepay Labs internal: `SPEC.md`, `README.md`, `CLAUDE.md`, `docs/X402_FLEX_SPEC.md` (bnb-paycopy monorepo)
