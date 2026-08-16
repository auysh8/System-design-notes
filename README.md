<div align="center">

# 📔 System Design & Database Architecture Journal
### *A GoodNotes Digital Planner Edition for System Design & Engineering Interviews*

[![Live on Vercel](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/)
[![GitHub Pages](https://img.shields.io/badge/Mirror-GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://auysh8.github.io/System-design-notes/)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro%20v5-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

<br/>

> 🖊️ **Digital Planner Entry:** *A curated, modular journal breaking down complex distributed systems, database internals, and network protocols into visual, digestible chapter notes.*

</div>

---

### 📑 Notebook Index & Quick Navigation Tabs

```
┌────────────┬──────────────────┬──────────────────┬─────────────────┬─────────────────┐
│  🏠 Index  │  01. Single Svr  │  02. Select DB   │  03. SQL Joins  │  04. ACID Props │
├────────────┼──────────────────┼──────────────────┼─────────────────┼─────────────────┤
│  05. NoSQL │  06. Scaling     │  07. Load Bal.   │  08. SPOF & HA  │  09. API Design │
└────────────┴──────────────────┴──────────────────┴─────────────────┴─────────────────┘
                                                       │ 10. Comm Proto  │
                                                       └─────────────────┘
```

---

## 📚 Table of Contents & Chapter Notes

| # | Chapter & Topic | Focus & Architectural Principles | Key Tech & Concepts | Read |
|:---:|:---|:---|:---|:---:|
| **01** | **[Single-Server Architecture](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/01-single-server/)** | Monolithic foundation, Request/Response execution flow & DNS resolution | `DNS Lookup` `Monolith` `Web Server` `DB Engine` | [📖 Read](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/01-single-server/) |
| **02** | **[Selecting the Right DB](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/02-selecting-db/)** | Relational vs. Non-Relational decision tree and structural trade-offs | `RDBMS` `NoSQL` `Data Modeling` `Polyglot` | [📖 Read](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/02-selecting-db/) |
| **03** | **[Relational DBs & SQL](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/03-relational-sql/)** | Schema constraints, foreign key joins, DDL/DML, and ER diagramming | `PostgreSQL` `MySQL` `Joins` `Foreign Keys` `Indexes` | [📖 Read](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/03-relational-sql/) |
| **04** | **[ACID Integrity](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/04-acid-integrity/)** | Transaction guarantees: Atomicity, Consistency, Isolation, Durability | `WAL` `2PC` `Isolation Levels` `Rollback` | [📖 Read](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/04-acid-integrity/) |
| **05** | **[NoSQL Classifications](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/05-nosql-types/)** | Document, Wide-Column, Graph, and Key-Value stores comparison | `MongoDB` `Cassandra` `Redis` `Neo4j` `DynamoDB` | [📖 Read](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/05-nosql-types/) |
| **06** | **[Scaling Strategies](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/06-scaling-guide/)** | Vertical (Scale Up) vs Horizontal (Scale Out) & stateless tier design | `Horizontal Scaling` `Stateless` `Read Replicas` | [📖 Read](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/06-scaling-guide/) |
| **07** | **[Load Balancer Routing](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/07-load-balancing/)** | 7 Routing algorithms, Consistent Hashing ring & active health probes | `Round Robin` `Least Conn` `Consistent Hashing` `L4/L7` | [📖 Read](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/07-load-balancing/) |
| **08** | **[SPOF & High Availability](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/08-spof-resilience/)** | Eliminating single points of failure via redundancy & self-healing | `Active-Passive` `Active-Active` `Failover` `Quorum` | [📖 Read](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/08-spof-resilience/) |
| **09** | **[API Architecture](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/09-api-design/)** | Network layers, HTTP/HTTPS anatomy, REST vs GraphQL vs gRPC | `REST` `GraphQL` `gRPC` `Idempotency` `Rate Limiting` | [📖 Read](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/09-api-design/) |
| **10** | **[Communication Protocols](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/10-communication-protocols/)** | Protocol decision matrix, WebSockets, gRPC Streaming & AMQP brokers | `WebSockets` `gRPC` `AMQP` `RabbitMQ` `HTTP/2` | [📖 Read](https://system-design-notes-fnxn1lbm4-auysh8s-projects.vercel.app/notes/10-communication-protocols/) |

---

## 📌 Architect Sticky Notes & Study Callouts

> [!NOTE]
> ### 🟡 Sticky Note #1: Horizontal vs. Vertical Scaling Rule of Thumb
> * **Vertical Scaling (`Scale Up`)**: Simplest way to buy time with beefier CPU/RAM, but hits hard hardware limits, exponential costs, and creates a **Single Point of Failure (SPOF)**.
> * **Horizontal Scaling (`Scale Out`)**: Distribute traffic across $N$ cheap commodity servers behind a Load Balancer. Requires application layers to remain **strictly stateless**.

> [!TIP]
> ### 🟢 Sticky Note #2: Database Selection Heuristic
> * **Pick SQL (PostgreSQL / MySQL)** if you need structured schemas, relational joins, ACID consistency guarantees (e.g., banking, payments, e-commerce orders).
> * **Pick NoSQL (Mongo / Cassandra / Redis)** for dynamic schemas, massive horizontal scale, high write throughput, or specialized data shapes (Key-Value, Graph, Time-Series).

> [!IMPORTANT]
> ### 🟣 Sticky Note #3: Communication Protocol Quick-Pick
> * **REST / HTTPS**: Standard public client-facing APIs, CRUD operations, strict caching support.
> * **WebSockets**: Bi-directional, persistent, low-overhead full-duplex streaming (Chat, Live dashboards, Gaming).
> * **gRPC (Protobuf / HTTP/2)**: Ultra high-performance internal microservice-to-microservice communication with compact binary payloads.
> * **AMQP / Kafka**: Asynchronous background event processing, message buffering, guaranteed delivery, and decoupled workers.

---

## 📐 Blueprint Architecture Visuals

```mermaid
flowchart LR
    subgraph Client Tier
        User([🧑‍💻 User / Client])
    end

    subgraph Edge & Routing
        DNS[🌐 DNS Server]
        LB[⚖️ Load Balancer\nLayer 7 / NGINX]
    end

    subgraph Application Tier (Stateless)
        S1[🖥️ App Server 1]
        S2[🖥️ App Server 2]
        S3[🖥️ App Server 3]
    end

    subgraph Data & Cache Tier
        Cache[(⚡ Redis Cache\nCluster)]
        PrimaryDB[(🗄️ Primary DB\nRead / Write)]
        ReplicaDB[(📑 Replica DB\nRead-Only)]
    end

    User -->|1. DNS Lookup| DNS
    User -->|2. HTTPS Request| LB
    LB -->|Round Robin / Least Conn| S1
    LB -->|Round Robin / Least Conn| S2
    LB -->|Round Robin / Least Conn| S3
    
    S1 & S2 & S3 <-->|Cache Hit / Miss| Cache
    S1 & S2 & S3 -->|Write Transactions| PrimaryDB
    PrimaryDB -.->|Async Replication| ReplicaDB
    S1 & S2 & S3 -.->|Read Queries| ReplicaDB
```

---

## ✨ Features of the Web Journal

- 📓 **GoodNotes Digital Paper Feel**: Textured cream and dark paper modes, bookmark tabs, and handwritten annotations (`Caveat` font).
- 🏷️ **Modular MDX Architecture**: Built with Astro 5 Content Collections with type-safe frontmatter schemas.
- 🔍 **Instant Search & Filter**: Real-time client-side search filtering across chapter topics, notes, and cards.
- 📋 **Interactive Code Stickers**: 1-click clipboard copy buttons for SQL queries, config files, and JSON payloads.
- 🌓 **Zero-Flicker Dark Mode**: Smooth dark paper toggle with localStorage persistence and system theme detection.

---

## 🛠️ Local Development & Contributing

Want to run the digital planner locally or add new chapters?

```bash
# 1. Clone the repository
git clone https://github.com/auysh8/System-design-notes.git
cd System-design-notes

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit [`http://localhost:4321`](http://localhost:4321) to view the notebook journal locally.

### 📝 Adding a New Chapter
Create a new `.mdx` file under `src/content/notes/`:

```mdx
---
title: "Distributed Caching Strategies"
shortTitle: "11. Caching"
chapterNumber: 11
subtitle: "Cache-Aside, Write-Through, Write-Behind & Eviction Policies"
tag: "System Design Chapter 11"
accentColor: "blue"
description: "Deep dive into cache patterns, TTL strategies, and eviction algorithms (LRU, LFU)."
handwrittenAnnotation: "★ Never let cache stampedes bring down your primary DB!"
---

Your chapter content here with MDX components...
```

---

<div align="center">

Made with ☕ and passion for distributed systems & system design.<br/>
⭐ **Star this repository** if you find these notes helpful for your interviews & learning!

</div>
