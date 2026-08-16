<div align="center">

# System Design & Database Architecture Journal
*A modular digital notebook for system design fundamentals, database architecture, and network protocols.*

<br/>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/)
[![Astro](https://img.shields.io/badge/Framework-Astro%20v5-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>

---

## Overview

A curated study journal covering distributed systems, database scaling, and communication protocols. Built with Astro 5 and MDX, featuring modular chapters, interactive light and dark paper themes, and real-time search.

---

## Chapters

| Chapter | Title | Topics & Core Concepts | Link |
|:---:|:---|:---|:---:|
| 01 | [Single-Server Architecture](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/01-single-server/) | Monolithic setup, request/response lifecycle, DNS resolution | [Read](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/01-single-server/) |
| 02 | [Selecting the Right Database](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/02-selecting-db/) | Relational (SQL) vs. Non-Relational (NoSQL) trade-offs | [Read](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/02-selecting-db/) |
| 03 | [Relational DBs & SQL Joins](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/03-relational-sql/) | Schemas, DDL/DML, foreign key joins, ER diagrams | [Read](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/03-relational-sql/) |
| 04 | [ACID Transactional Integrity](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/04-acid-integrity/) | Atomicity, Consistency, Isolation, and Durability | [Read](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/04-acid-integrity/) |
| 05 | [NoSQL Classifications](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/05-nosql-types/) | Document, Wide-Column, Graph, and Key-Value stores | [Read](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/05-nosql-types/) |
| 06 | [System Scaling Strategies](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/06-scaling-guide/) | Vertical Scaling vs. Horizontal Scaling and stateless tiers | [Read](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/06-scaling-guide/) |
| 07 | [Load Balancing & Routing](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/07-load-balancing/) | 7 traffic routing algorithms, Consistent Hashing, health checks | [Read](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/07-load-balancing/) |
| 08 | [SPOF & High Availability](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/08-spof-resilience/) | Redundancy, failover strategies, and self-healing clusters | [Read](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/08-spof-resilience/) |
| 09 | [API Design & Protocols](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/09-api-design/) | HTTP/HTTPS internals, REST, GraphQL, gRPC, design principles | [Read](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/09-api-design/) |
| 10 | [Communication Protocols](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/10-communication-protocols/) | HTTP Polling, WebSockets, gRPC Streaming, AMQP brokers | [Read](https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app/notes/10-communication-protocols/) |

---

## Features

- Digital notebook aesthetic with warm cream and dark paper themes.
- Type-safe content collections powered by Astro 5 and MDX.
- Real-time client-side search filtering across chapters and topics.
- One-click copy for code blocks and snippets.
- Fully responsive across desktop, tablet, and mobile displays.

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/auysh8/System-design-notes.git
cd System-design-notes

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open `http://localhost:4321` in your browser.

---

## License

MIT
